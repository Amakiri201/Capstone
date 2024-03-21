import "./App.css";
import Home from "./pages/home/home.tsx";
import Why from "./pages/why/whyScissor.tsx";
import Pricing from "./pages/pricing/pricing.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/footer/footer.tsx";
import Feature from "./pages/features/features.tsx";
import ContactUs from "./pages/contactUs/contactUs.tsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Navbar />

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whyScissor" element={<Why />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/contact-us" element={<ContactUs />} />
        </Routes>

        <Footer/>
      </div>
    </>
  );
}

export default App;

