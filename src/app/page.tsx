import Hero from "@/sections/home/Hero";
import QuienesSomosPreview from "@/sections/home/QuienesSomosPreview";
import EquipoPreview from "@/sections/home/EquipoPreview";
import ServiciosPreview from "@/sections/home/ServiciosPreview";
import FAQPreview from "@/sections/home/FAQPreview";
import WhyChooseUsPreview from "@/sections/home/WhyChooseUs";
import TrabajosCarousel from "@/sections/trabajos/TrabajosCarousel";
import Contacto from "@/sections/home/Contacto";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Inicio | Nuvra Technologies",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuienesSomosPreview />
      <ServiciosPreview />
      <TrabajosCarousel />
      <WhyChooseUsPreview />
      <EquipoPreview />
      <FAQPreview />
      <Contacto />
    </>
  );
}
