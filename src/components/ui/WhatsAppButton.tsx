import React from 'react';
import { MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '@/config';

export const WhatsAppButton: React.FC = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const whatsapp = config.demoUser.whatsapp.replace('+', '');

    React.useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ scale: 0, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0, opacity: 0, y: 20 }}
                    className="fixed bottom-24 right-6 z-[55] sm:bottom-8 sm:right-8"
                >
                    <a
                        href={`https://wa.me/${whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center"
                    >
                        {/* Notification Badge */}
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-background z-20" />
                        
                        {/* Pulse Effect */}
                        <div className="absolute inset-0 bg-primary/40 rounded-full animate-ping" />
                        
                        {/* Tooltip */}
                        <div className="absolute right-full mr-4 bg-background border border-primary/20 px-4 py-2 rounded-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-2xl">
                            <span className="text-primary font-sans text-xs tracking-widest uppercase font-black">¿En qué podemos ayudarte?</span>
                        </div>

                        {/* Button */}
                        <div className="relative w-16 h-16 bg-primary text-background flex items-center justify-center shadow-[0_15px_35px_-5px_rgba(20,184,166,0.5)] group-hover:scale-110 transition-transform duration-300">
                            <MessageSquare size={28} className="fill-current" />
                        </div>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
