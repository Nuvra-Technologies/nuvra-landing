import { Metadata } from "next";
import Hero from "@/sections/home/Hero";
import QuienesSomosPreview from "@/sections/home/QuienesSomosPreview";
import EquipoPreview from "@/sections/home/EquipoPreview";
import ServiciosPreview from "@/sections/home/ServiciosPreview";
import FAQPreview from "@/sections/home/FAQPreview";
import WhyChooseUsPreview from "@/sections/home/WhyChooseUs";
import Contacto from "@/sections/contacto/Contacto";
import TrabajosCarousel from "@/sections/trabajos/TrabajosCarousel";

export const metadata: Metadata = {
  title: "Inicio | Nuvra Technologies",
  description:
    "Somos una startup especializada en soluciones digitales modernas, escalables y orientadas a resultados.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuienesSomosPreview />
      <EquipoPreview />
      <ServiciosPreview />
      <FAQPreview />
      <WhyChooseUsPreview />
      <TrabajosCarousel />
      <Contacto />
    </>
  );
}
