import { Workflow, TrendingUp, Code2 } from "lucide-react";
import { Service } from "@/types/service";

export const services: Service[] = [
    {
        category: "Sistemas",
        title: "Software a medida",
        description:
            "Creamos sistemas adaptados a los procesos reales de tu empresa para automatizar tareas, reducir erroresy escalar sin fricciones.",
        icon: Workflow,
    },
    {
        category: "Marketing",
        title: "Landing pages",
        description:
            "Diseñamos y desarrollamos páginas orientadas a conversión para validar ideas, captar leads y lanzar productos rápidamente.",
        icon: TrendingUp,
    },
    {
        category: "Web apps",
        title: "Desarrollo web",
        description:
            "Aplicaciones modernas, seguras y mantenibles con foco en rendimiento, experiencia de usuario y crecimiento a largo plazo.",
        icon: Code2,
    },
];