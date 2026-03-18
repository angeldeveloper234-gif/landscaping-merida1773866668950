import { motion } from 'framer-motion';
import { Search, PencilRuler, Shovel } from 'lucide-react';
import { config } from '@/config';

export function Roadmap() {
    const { roadmap } = config.dynamicContent;

    const icons = [
        <Search size={28} className="text-primary" />,
        <PencilRuler size={28} className="text-primary" />,
        <Shovel size={28} className="text-primary" />,
    ];

    return (
        <section id="process" className="py-24 bg-background relative overflow-hidden border-t border-primary/5">
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(20,184,166,0.5) 40px, rgba(20,184,166,0.5) 41px),
                    repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(20,184,166,0.5) 40px, rgba(20,184,166,0.5) 41px)`
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <p className="text-primary font-sans text-xs tracking-[0.4em] uppercase font-black mb-4">
                        Metodología
                    </p>
                    <h2 className="text-4xl md:text-7xl font-display text-white tracking-widest uppercase">
                        PROCESO <span className="text-primary italic">NATURAL</span>
                    </h2>
                </div>

                <div className="relative">
                    <div className="absolute top-[52px] left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden lg:block" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                        {roadmap.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group relative"
                            >
                                <div className="bg-accent-dark/20 border border-primary/10 p-10 rounded-none hover:border-primary/40 transition-all duration-500 overflow-hidden shadow-2xl">
                                    <div className="absolute -top-6 -right-4 text-[120px] font-display font-bold text-white/[0.02] pointer-events-none group-hover:text-primary/[0.04] transition-colors leading-none select-none">
                                        {item.step}
                                    </div>

                                    <div className="relative z-10">
                                        <div className="w-14 h-14 border border-primary/30 flex items-center justify-center mb-8 group-hover:border-primary/60 group-hover:bg-primary/10 transition-all">
                                            {icons[index]}
                                        </div>

                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-primary font-mono text-xs font-black tracking-widest uppercase">PASO {item.step}</span>
                                            <div className="h-[1px] w-6 bg-primary/40"></div>
                                        </div>

                                        <h3 className="text-2xl font-display text-white mb-4 group-hover:text-primary transition-colors tracking-wider uppercase">
                                            {item.title}
                                        </h3>

                                        <p className="text-zinc-500 font-sans font-light text-base leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}