import { motion } from "framer-motion";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Products() {
    const { products } = config;

    return (
        <section id="products" className="py-32 bg-background relative border-t border-primary/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div>
                        <p className="text-primary font-sans text-xs tracking-[0.4em] uppercase font-black mb-4">
                            Catálogo de Taller
                        </p>
                        <h2 className="text-4xl md:text-6xl font-display text-white tracking-widest uppercase mb-0">
                            PRODUCTOS <span className="text-primary italic">DISPONIBLES</span>
                        </h2>
                    </div>
                    <Button variant="outline" className="border-primary/20 text-white rounded-none tracking-widest text-[10px] h-12 hover:bg-primary hover:text-background transition-all">
                        VER TODO EL CATÁLOGO <ArrowRight className="ml-2 w-4 h-4 text-primary group-hover:text-background" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-accent-dark/30 border border-primary/10 flex flex-col group hover:border-primary/50 transition-all duration-500 shadow-xl"
                        >
                            <div className="aspect-square overflow-hidden relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute top-6 left-6 bg-primary text-background font-display text-xl px-4 py-1 tracking-widest font-black">
                                    {product.price}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-1">
                                <h4 className="text-white font-display text-2xl tracking-widest uppercase mb-3">
                                    {product.name}
                                </h4>
                                <p className="text-zinc-500 font-sans text-sm font-light mb-8 flex-1">
                                    {product.desc}
                                </p>
                                
                                <Button 
                                    className="w-full bg-primary/10 border border-primary/20 hover:bg-primary text-primary hover:text-background transition-all duration-500 rounded-none h-14 tracking-[0.2em] font-black text-[10px] uppercase shadow-lg shadow-primary/5"
                                    onClick={() => window.location.href = `https://wa.me/${config.demoUser.whatsapp.replace('+', '')}?text=Hola, me interesa el producto: ${product.name}`}
                                >
                                    Consultar por WhatsApp <ShoppingCart className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
