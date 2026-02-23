export interface Works {
    id: number;
    slug: string;
    titulo: string;
    categoria: string;
    descripcion: string;
    imagen: string;
    mockupSlug: string;
    url?: string;
    
    año: string;
    cliente: string;
    industria: string;
    
    servicios: string[];
    tecnologias: string[];
    
    desafio: string;
    solucion: string;
    resultado: string;
    impacto: string[];
}