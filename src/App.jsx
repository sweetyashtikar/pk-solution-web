import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import OnlineExaminationSystem from "./subpages/OnlineExaminationSystem";
import ConfidentialPrinting from "./subpages/ConfidentialPrinting";
import OMRScanning from "./subpages/OMRScanning";
import MobileAppDevelopment from "./subpages/MobileAppDevelopment";
import SoftwareDevelopment from "./subpages/SoftwareDevelopment";
import DigitalMarketing from "./subpages/DigitalMarketing";
export default function App() {
  return (
    <Router>
      <Header />

      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/online-examination-system" element={<OnlineExaminationSystem />} />
          <Route path="/services/confidential-printing" element={<ConfidentialPrinting />} />
          <Route path="/services/omr-scanning" element={<OMRScanning />} />
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}
