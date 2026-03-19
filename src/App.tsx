import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserProvider, useUser } from "@/context/UserContext";
import { config } from "@/config";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { MobileConversionBar } from "@/components/ui/MobileConversionBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

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
                    <WhatsAppButton />
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;