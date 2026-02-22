import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  nombre?: string;
  email?: string;
  mensaje?: string;
  empresa?: string; // honeypot
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// Rate limit simple en memoria 
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const ipHits = new Map<string, { count: number; resetAt: number }>();

function getClientIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const current = ipHits.get(ip);

  if (!current || now > current.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { ok: true as const };
  }

  if (current.count >= RATE_LIMIT_MAX) {
    const retryAfterSec = Math.ceil((current.resetAt - now) / 1000);
    return { ok: false as const, retryAfterSec };
  }

  current.count += 1;
  ipHits.set(ip, current);
  return { ok: true as const };
}

export async function POST(req: Request) {
  let body: ContactPayload;

  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Payload inválido." },
      { status: 400 }
    );
  }

  // Rate limit
  const ip = getClientIp(req);
  const rl = checkRateLimit(ip);
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intentá nuevamente en unos segundos." },
      {
        status: 429,
        headers: { "Retry-After": String(rl.retryAfterSec ?? 60) },
      }
    );
  }

  // Honeypot (bots)
  if (body.empresa && body.empresa.trim().length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const nombre = (body.nombre || "").trim();
  const email = (body.email || "").trim();
  const mensaje = (body.mensaje || "").trim();

  if (!nombre || nombre.length < 2 || nombre.length > 100) {
    return NextResponse.json({ error: "Nombre inválido." }, { status: 400 });
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Correo electrónico inválido." },
      { status: 400 }
    );
  }

  if (!mensaje || mensaje.length < 10 || mensaje.length > 2000) {
    return NextResponse.json({ error: "Mensaje inválido." }, { status: 400 });
  }

  // Variables de entorno
  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || SMTP_USER;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    return NextResponse.json(
      { error: "El servicio de correo no está configurado en el servidor." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const subject = `Nuevo contacto desde Nuvra Technologies (${nombre})`;

  const text = `Nombre: ${nombre}
Email: ${email}

Mensaje:
${mensaje}
`;

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>Nuevo mensaje desde el formulario de contacto</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${escapeHtml(mensaje).replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p style="color:#666; font-size:12px;">
        Enviado desde el formulario de contacto de nuvratg.com
      </p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `Nuvra Technologies <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intentá nuevamente más tarde." },
      { status: 500 }
    );
  }
}

//te amé 100% confirmado