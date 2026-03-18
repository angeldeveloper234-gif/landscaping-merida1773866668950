import { Hero, Gallery, Products, Roadmap, Stats, Features, Testimonials, CTA, Contact, FAQ } from "@/components/sections";
import { CustomCursor } from "@/components/features/CustomCursor";
import { config } from "@/config";

export function Home() {
    const { features } = config;

    return (
        <main className="relative selection:bg-[#E07B2A] selection:text-black">
            <Hero />
            {features.showStats && <Stats />}
            <Features />
            {features.showGallery && <Gallery />}
            {features.showProducts && <Products />}
            <Roadmap />
            {features.showTestimonials && <Testimonials />}
            <CTA />
            <Contact />
            {features.showFAQ && <FAQ />}

            {/* Features */}
            <CustomCursor />
        </main>
    );
}
