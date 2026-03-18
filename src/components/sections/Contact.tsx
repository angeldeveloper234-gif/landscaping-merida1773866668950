import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Trees } from "lucide-react";
import { config } from "@/config";

const schema = z.object({
    name: z.string().min(2, "Requerido"),
    phone: z.string().min(10, "Mínimo 10 dígitos"),
    service: z.string().min(1, "Selecciona un servicio"),
    message: z.string().min(5, "Describe brevemente el trabajo"),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
    const { dynamicContent, demoUser, services } = config;
    const { city, localAnchor } = dynamicContent;

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const onSubmit = async (data: FormData) => {
        console.log("Lead capturado:", data);
        await new Promise(resolve => setTimeout(resolve, 1200));
        alert("¡Mensaje enviado! Te contactaremos hoy mismo para coordinar la visita.");
        reset();
    };

    return (
        <section id="contact" className="relative py-32 bg-[#020617] border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Info */}
                    <div>
                        <p className="text-[#FF7F50] font-sans text-xs tracking-[0.4em] uppercase font-black mb-4">
                            Contacto Directo
                        </p>
                        <h2 className="text-5xl md:text-6xl font-display text-white mb-10 tracking-widest leading-tight">
                            COTIZACIÓN <span className="text-[#FF7F50]">SIN COSTO</span>
                        </h2>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-[#FF7F50] mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-sans uppercase tracking-widest text-xs mb-1 font-black">Ubicación</h4>
                                    <p className="text-zinc-400 text-sm">{localAnchor}, {city}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="w-5 h-5 text-[#FF7F50] mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-sans uppercase tracking-widest text-xs mb-1 font-black">Teléfono / WhatsApp</h4>
                                    <p className="text-zinc-400 text-sm">{demoUser.whatsapp}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock className="w-5 h-5 text-[#FF7F50] mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-sans uppercase tracking-widest text-xs mb-1 font-black">Horario de Atención</h4>
                                    <p className="text-zinc-400 text-sm">Lunes a Sábado: 8:00 – 18:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-1">
                                <input
                                    {...register("name")}
                                    className="w-full bg-transparent border-b-2 border-zinc-800 py-4 text-white focus:outline-none focus:border-[#FF7F50] transition-colors placeholder:text-zinc-700 text-sm tracking-widest font-sans"
                                    placeholder="NOMBRE COMPLETO"
                                />
                                {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                            </div>

                            <div className="space-y-1">
                                <input
                                    {...register("phone")}
                                    className="w-full bg-transparent border-b-2 border-zinc-800 py-4 text-white focus:outline-none focus:border-[#FF7F50] transition-colors placeholder:text-zinc-700 text-sm tracking-widest font-sans"
                                    placeholder="TELÉFONO / WHATSAPP"
                                />
                                {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                            </div>

                            <div className="space-y-1">
                                <select
                                    {...register("service")}
                                    className="w-full bg-transparent border-b-2 border-zinc-800 py-4 text-zinc-400 focus:outline-none focus:border-[#FF7F50] transition-colors text-sm tracking-widest font-sans appearance-none cursor-pointer"
                                >
                                    <option value="" className="bg-zinc-950">TIPO DE SERVICIO</option>
                                    {services.map((s) => (
                                        <option key={s.id} value={s.title} className="bg-zinc-950">{s.title}</option>
                                    ))}
                                    <option value="Otro" className="bg-zinc-950">Otro</option>
                                </select>
                                {errors.service && <span className="text-xs text-red-500">{errors.service.message}</span>}
                            </div>

                            <div className="space-y-1">
                                <textarea
                                    {...register("message")}
                                    rows={4}
                                    className="w-full bg-transparent border-b-2 border-zinc-800 py-4 text-white focus:outline-none focus:border-[#FF7F50] transition-colors resize-none placeholder:text-zinc-700 text-sm tracking-widest font-sans"
                                    placeholder="DESCRIBE TU PROYECTO"
                                />
                                {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-[#FF7F50] text-white hover:brightness-110 rounded-none py-5 uppercase tracking-[0.2em] text-xs font-black transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(255,127,80,0.4)]"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "ENVIANDO..." : "SOLICITAR VISITA GRATIS"}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}