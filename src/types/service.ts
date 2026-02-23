import { LucideIcon } from "lucide-react";

export interface Service {
    category: string;
    title: string;
    icon: LucideIcon;
    
    // preview (home)
    description?: string;
    
    // página completa
    shortDescription?: string;
    fullDescription?: string;
    features?: string[];
    idealFor?: string[];
}
