import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserProvider, useUser } from "@/context/UserContext";
import { config } from "@/config";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { MobileConversionBar } from "@/components/ui/MobileConversionBar";
import LegalBotWidget from "@/components/LegalBotWidget";

function ChatbotManager() {
    const { email, name } = useUser();
    
    if (config.landingClientId === "00000000-0000-0000-0000-000000000000") {
        return null;
    }

    return (
        <LegalBotWidget 
            botId={config.landingClientId}
            metadata={{
                source: "landing_landscaping",
                user_email: email || "anonymous",
                user_name: name || "anonymous",
                trade: config.branding.trade,
                city: config.dynamicContent.city
            }}
            supabaseUrl={config.supabase.url}
            supabaseKey={config.supabase.anonKey}
        />
    );
}

function App() {
    return (
        <UserProvider>
            <Router>
                <div className="relative min-h-screen bg-background overflow-x-hidden">
                    <div className="noise-bg" />
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                    <Footer />
                    <MobileConversionBar />
                    <ChatbotManager />
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;