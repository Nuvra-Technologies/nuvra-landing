import { createMetadata } from "@/lib/seo";
import Contacto from "@/sections/contacto/ContactoDetail";

export const metadata = createMetadata({
  title: "Contáctanos | Nuvra Technologies",
  description:
    "Contáctanos para desarrollar tu próximo proyecto digital. En Nuvra Technologies te ayudamos con soluciones modernas, escalables y orientadas a resultados.",
  path: "/contacto",
});

export default function ContactoPage() {
  return <Contacto />;
}
