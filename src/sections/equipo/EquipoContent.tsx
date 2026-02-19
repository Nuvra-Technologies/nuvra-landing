import FadeIn from "@/components/motion/FadeIn";
import Image from "next/image";
import { team } from "@/data/team";

const decorativeColors = ["#156bb3", "#29285e", "#00bfa6"]; // paleta de 3 colores

export default function EquipoContent() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-0 max-w-6xl flex flex-col gap-32">
        {/* HERO */}
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div>
            <FadeIn>
              <h3 className="font-semibold bg-gradient-to-r from-[#29285e] to-[#156bb3] bg-clip-text text-transparent">
                NUESTRO EQUIPO
              </h3>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight mt-2">
                Conocé a las personas que hacen posible tu proyecto
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-neutral-500 text-lg leading-relaxed">
                Nuestro equipo combina experiencia, creatividad y pasión para
                entregar soluciones digitales que generan impacto real.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/team-theme.jpg"
                alt="Equipo"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>

        {/* LISTADO DE MIEMBROS */}
        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <FadeIn key={member.id} delay={index * 0.05}>
              <div className="relative rounded-2xl border border-neutral-200 bg-neutral-50/70 backdrop-blur p-8 shadow-sm flex flex-col items-center text-center hover:scale-[1.03] hover:shadow-xl transition-transform duration-300">
                {/* círculo decorativo de fondo con color dinámico */}
                <div
                  className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full opacity-10 pointer-events-none"
                  style={{
                    backgroundColor:
                      decorativeColors[index % decorativeColors.length],
                  }}
                ></div>

                {/* avatar */}
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg mb-4 z-10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-semibold z-10">{member.name}</h3>
                <p className="mt-1 text-[#156bb3] font-medium z-10">
                  {member.role}
                </p>
                <p className="mt-4 text-neutral-600 z-10">{member.shortBio}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* PARTE FINAL / FILOSOFÍA */}
        <FadeIn>
          <div className="rounded-3xl bg-gradient-to-r from-[#29285e] to-[#156bb3] p-14 text-white shadow-xl text-center sm:text-left">
            <h2 className="text-3xl font-semibold">Nuestra filosofía</h2>
            <p className="mt-6 max-w-2xl text-white/90 leading-relaxed">
              Creemos en la colaboración, la creatividad y en construir
              soluciones digitales que realmente generen impacto. Cada proyecto
              es una oportunidad para aprender y mejorar juntos.
            </p>
            <a
              href="/proyectos"
              className="inline-block mt-8 px-8 py-4 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 text-white font-medium shadow-lg hover:scale-[1.02] transition"
            >
              Ver nuestros proyectos
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
