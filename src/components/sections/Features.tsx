import { motion } from "framer-motion";
import { Trees, Droplets, Scissors, Leaf } from "lucide-react";
import { config } from "@/config";

export function Features() {
    const { services, dynamicContent } = config;
    const { pricing } = dynamicContent;

    const priceMap: Record<string, string> = {
        "pricing.basic": pricing.basic,
        "pricing.comprehensive": pricing.comprehensive,
        "pricing.retainer": pricing.retainer,
    };

    const iconMap: Record<string, any> = {
        "Trees": <Trees size={32} />,
        "Droplets": <Droplets size={32} />,
        "Scissors": <Scissors size={32} />,
        "Leaf": <Leaf size={32} />
    };

    return (
        <section id="services" className="py-32 bg-background border-t border-primary/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div className="max-w-2xl">
                        <p className="text-primary font-sans text-xs tracking-[0.3em] uppercase mb-4 font-black">
                            Nuestros Servicios
                        </p>
                        <h2 className="text-5xl md:text-7xl font-display text-white leading-tight tracking-widest">
                            JARDINES QUE <span className="text-primary">PERDURAN</span>
                        </h2>
                    </div>
                    <p className="text-zinc-500 font-sans font-light text-base max-w-xs mt-8 md:mt-0">
                        Soluciones integrales de paisajismo y mantenimiento para hogares y empresas en Mérida.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group relative p-12 bg-background hover:bg-accent-dark transition-all duration-700"
                        >
                            <span className="font-mono text-[10px] text-primary mb-6 block opacity-60 tracking-widest">
                                SERVICIO {service.id}
                            </span>

                            <div className="text-primary mb-6">
                                {iconMap[service.icon] || <Leaf size={32} />}
                            </div>

                            <h3 className="text-3xl font-display text-white mb-6 group-hover:text-primary transition-colors tracking-wider">
                                {service.title}
                            </h3>

                            <div className="space-y-4 mb-8">
                                <p className="text-primary font-sans font-bold text-sm tracking-wide italic">
                                    {service.problem}
                                </p>
                                <p className="text-zinc-500 font-sans font-light text-base leading-relaxed">
                                    {service.agitation}
                                </p>
                                <div className="pt-3">
                                    <p className="text-white font-sans font-medium text-sm flex items-center gap-2">
                                        <span className="w-3 h-[1px] bg-primary"></span>
                                        {service.solve}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/5">
                                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-2">Referencia de Precio</p>
                                <p className="text-white font-sans text-base group-hover:text-primary transition-colors font-medium">
                                    {priceMap[service.price] || service.price}
                                </p>
                            </div>

                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}