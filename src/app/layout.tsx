import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";

import { createMetadata } from "@/lib/seo";
import { generateOrganizationSchema } from "@/lib/schema/organization";
import { generateWebsiteSchema } from "@/lib/schema/website";

export const metadata: Metadata = createMetadata({
  title: "Nuvra Technologies | Desarrollo de Software en Argentina",
  description:
    "Desarrollamos software a medida, sistemas web y soluciones digitales escalables para empresas en Argentina.",
  path: "/",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${jakarta.variable} ${inter.variable} bg-white text-gray-900 antialiased`}
      >
        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />

        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteSchema()),
          }}
        />

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}