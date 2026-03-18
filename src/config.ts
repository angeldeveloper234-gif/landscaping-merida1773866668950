export interface GalleryItem {
    title: string;
    category: string;
    image: string;
}

export interface ProductItem {
    id: string;
    name: string;
    price: string;
    desc: string;
    image: string;
}

export interface ServiceItem {
    id: string;
    icon: string;
    title: string;
    problem: string;
    agitation: string;
    solve: string;
    price: string;
}

export interface TestimonialItem {
    name: string;
    role: string;
    text: string;
    tags: string[];
}

export interface Config {
    branding: {
        name: string;
        slogan: string;
        logo: string;
        trade: string;
    };
    landingClientId: string;
    supabase: {
        url: string;
        anonKey: string;
    };
    analytics: {
        webhookUrl: string;
    };
    bookingUrl: string;
    paymentLink: string;
    googleMapsReviewUrl: string;
    dynamicContent: {
        city: string;
        localAnchor: string;
        stats: {
            projectsDone: number;
            experienceYears: number;
            happyClients: number;
        };
        specialization: {
            title: string;
            pain: string;
            ego: string;
            hook: string;
        };
        roadmap: Array<{
            step: string;
            title: string;
            desc: string;
        }>;
        pricing: {
            basic: string;
            comprehensive: string;
            retainer: string;
        };
    };
    services: ServiceItem[];
    testimonials: TestimonialItem[];
    demoUser: {
        name: string;
        email: string;
        whatsapp: string;
    };
    features: {
        showGallery: boolean;
        showProducts: boolean;
        showTestimonials: boolean;
        showFAQ: boolean;
        showStats: boolean;
    };
    gallery: GalleryItem[];
    products: ProductItem[];
}

export const config: Config = {
    branding: {
        name: "Landscaping Mérida",
        slogan: "Jardines que Inspiran Vida",
        logo: "LM",
        trade: "Paisajismo y Jardinería",
    },

    landingClientId: "39c4655a-9f86-4ff6-8592-2db08c57edb4",

    supabase: {
        url: import.meta.env.VITE_SUPABASE_URL || "",
        anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
    },
    analytics: {
        webhookUrl: import.meta.env.VITE_SPEED_WEBHOOK || "",
    },

    bookingUrl: "#contact",
    paymentLink: "https://buy.stripe.com/",
    googleMapsReviewUrl: "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID",

    dynamicContent: {
        city: "Mérida",
        localAnchor: "Fraccionamiento Las Américas 2",
        stats: {
            projectsDone: 150,
            experienceYears: 8,
            happyClients: 120
        },
        specialization: {
            title: "Paisajismo",
            pain: "Jardines sin Vida",
            ego: "Expertos Verdes",
            hook: "Diseño Natural"
        },
        roadmap: [
            {
                step: "01",
                title: "Diagnóstico Verde",
                desc: "Visitamos tu espacio en Mérida para evaluar suelo, luz y condiciones. Entendemos tu visión y presupuesto."
            },
            {
                step: "02",
                title: "Diseño y Selección",
                desc: "Creamos una propuesta con plantas endémicas y materiales duraderos. Visualiza tu nuevo oasis antes de empezar."
            },
            {
                step: "03",
                title: "Transformación",
                desc: "Ejecución limpia y eficiente. Instalamos riego, plantas y acabados. Entregamos un jardín listo para disfrutar."
            }
        ],
        pricing: {
            basic: "Mantenimiento desde $800 MXN",
            comprehensive: "Diseño desde $3,500 MXN",
            retainer: "Póliza mensual personalizada"
        }
    },

    services: [
        {
            id: "01",
            icon: "Trees",
            title: "Diseño de Jardines",
            problem: "¿Tu patio es solo tierra y desorden?",
            agitation: "Un espacio exterior descuidado devalúa tu propiedad y desperdicia metros cuadrados valiosos de tu hogar.",
            solve: "Diseño paisajista integral adaptado al clima de Yucatán.",
            price: "pricing.comprehensive"
        },
        {
            id: "02",
            icon: "Droplets",
            title: "Sistemas de Riego",
            problem: "¿Tus plantas mueren por el calor o falta de agua?",
            agitation: "Regar a mano quita tiempo y desperdicia agua. El calor de Mérida no perdona un día de olvido.",
            solve: "Instalación de riego automatizado por aspersión o goteo.",
            price: "pricing.basic"
        },
        {
            id: "03",
            icon: "Scissors",
            title: "Mantenimiento Pro",
            problem: "¿La maleza se apodera de tu jardín?",
            agitation: "Un jardín hermoso requiere constancia. Sin el cuidado experto, las plagas y el crecimiento descontrolado arruinan la inversión.",
            solve: "Poda, fertilización y control de plagas programado.",
            price: "pricing.retainer"
        }
    ],

    testimonials: [
        {
            name: "Gabriela Solís",
            role: "Residente en Las Américas",
            text: "Transformaron mi patio trasero en un paraíso. Las plantas que eligieron resisten perfecto el calor y el sistema de riego me ahorra muchísimo tiempo.",
            tags: ["Diseño", "Riego"]
        },
        {
            name: "Arq. Fernando Torres",
            role: "Desarrollador Inmobiliario",
            text: "Contratamos a Landscaping Mérida para las áreas comunes de nuestros departamentos. Profesionalismo total y excelente gusto en la selección vegetal.",
            tags: ["Corporativo", "Puntualidad"]
        },
        {
            name: "Mariana Vega",
            role: "Cliente Particular",
            text: "El servicio de mantenimiento es impecable. Llegan puntuales, dejan todo limpio y mis plantas nunca han estado tan verdes.",
            tags: ["Mantenimiento", "Limpieza"]
        }
    ],

    demoUser: {
        name: "Landscaping Mérida",
        email: "contacto@landscapingmerida.com",
        whatsapp: "+529997805418"
    },

    features: {
        showGallery: true,
        showProducts: false,
        showTestimonials: true,
        showFAQ: true,
        showStats: true
    },

    gallery: [
        {
            title: "Jardín Tropical",
            category: "Residencial",
            image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Riego Automatizado",
            category: "Instalación",
            image: "https://images.unsplash.com/photo-1558435186-d31d136676b9?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Paisajismo Moderno",
            category: "Diseño",
            image: "https://images.unsplash.com/photo-1611516491426-03025e6043c8?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Mantenimiento",
            category: "Servicio",
            image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop"
        }
    ],

    products: []
};
