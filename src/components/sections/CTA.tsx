import { motion } from "framer-motion";
import { ArrowRight, Shovel, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function CTA() {
    return (
        <section className="py-32 bg-[#020617] text-white relative overflow-hidden border-t border-white/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF7F50]/8 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <Shovel size={48} className="mx-auto mb-8 text-[#FF7F50] opacity-60" />

                    <h2 className="text-5xl md:text-8xl font-display mb-10 leading-[0.9] tracking-widest">
                        ¿LISTO PARA <span className="text-[#FF7F50]">TRANSFORMAR</span> TU JARDÍN?
                    </h2>

                    <p className="text-xl md:text-2xl text-zinc-400 mb-16 font-sans font-light leading-relaxed max-w-2xl mx-auto">
                        Agenda una visita de diagnóstico hoy mismo. Sin costo, sin compromiso, solo soluciones reales.
                    </p>

                    <div className="flex flex-wrap justify-center gap-8 mb-16">
                        {[ 
                            { icon: <ShieldCheck size={18} />, text: "Garantía de Crecimiento" },
                            { icon: <Clock size={18} />, text: "Puntualidad Absoluta" },
                            { icon: <Shovel size={18} />, text: "Limpieza Post-Obra" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-zinc-400 text-sm font-sans">
                                <span className="text-[#FF7F50]">{item.icon}</span>
                                {item.text}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            size="lg"
                            className="h-20 px-16 bg-[#FF7F50] text-white hover:brightness-110 rounded-none text-sm tracking-[0.3em] uppercase font-black transition-all duration-500 shadow-[0_20px_50px_-15px_rgba(255,127,80,0.5)]"
                            onClick={() => window.location.href = '#contact'}
                        >
                            Solicitar Visita Gratis <ArrowRight className="ml-4 w-5 h-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-20 px-12 rounded-none text-sm tracking-[0.3em] uppercase font-black border-[#FF7F50] text-[#FF7F50] hover:bg-[#FF7F50] hover:text-white"
                            onClick={() => window.location.href = `https://wa.me/${config.demoUser.whatsapp.replace('+', '')}`}
                        >
                            WhatsApp Directo
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}