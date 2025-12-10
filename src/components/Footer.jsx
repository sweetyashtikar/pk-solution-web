import React, { useState } from "react";
import { Facebook, Linkedin, Instagram, MessageCircle, Phone, Mail, MapPin, ChevronDown, ChevronUp } from "lucide-react";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const quickAccessLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "PRODUCTS", href: "/products" },
    { name: "CONTACT US", href: "/contact" },
  ];

  const importantPages = [
    { name: "Mobile App Development", href: "/services" },
    { name: "Web Design & Development", href: "/services" },
    { name: "Business Automation & Cloud Services", href: "/services" },
    { name: "Internet of Things", href: "/services" },
    { name: "Product Developing", href: "/services" },
  ];

  const connectLinks = [
    { name: "Business Automation Suite", href: "/products" },
    { name: "EduTech Platforms", href: "/products" },
    { name: "CRM Systems", href: "/products" },
    { name: "ERP Systems", href: "/products" },
    { name: "Mobile & Web App Products", href: "/products" },
  ];

  const socialIcons = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const FooterSection = ({ title, items, sectionId }) => {
    const isOpen = openSection === sectionId;

    return (
      <div className="border-b border-blue-400 border-opacity-20">
        <button
          onClick={() => toggleSection(sectionId)}
          className="w-full flex justify-between items-center py-3 lg:cursor-default"
        >
          <h3 className="text-base font-semibold text-white flex-1 text-center lg:text-left">
            {title}
          </h3>
          <span className="lg:hidden">
            {isOpen ? (
              <ChevronUp className="w-4 h-4 text-orange-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-orange-400" />
            )}
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 lg:block ${
            isOpen ? "max-h-72 pb-2" : "max-h-0 lg:max-h-none lg:pb-0"
          }`}
        >
          <ul className="space-y-1 text-center lg:text-left">
            {items.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const ContactSection = () => {
    const isOpen = openSection === "contact";

    return (
      <div className="border-b border-blue-400 border-opacity-20">
        <button
          onClick={() => toggleSection("contact")}
          className="w-full flex justify-between items-center py-3 lg:cursor-default"
        >
          <h3 className="text-base font-semibold text-white flex-1 text-center lg:text-left">
            Contact Info
          </h3>
          <span className="lg:hidden">
            {isOpen ? (
              <ChevronUp className="w-4 h-4 text-orange-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-orange-400" />
            )}
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 lg:block ${
            isOpen ? "max-h-72 pb-2" : "max-h-0 lg:max-h-none lg:pb-0"
          }`}
        >
          <div className="space-y-2 text-center lg:text-left text-sm">
            <div className="flex items-start gap-1 justify-center lg:justify-start">
              <MapPin className="w-4 h-4 mt-1 text-orange-400" />
              <span>Inspiria Mall, 1st Floor, Nigdi–Pimpri-Chinchwad, Maharashtra 411044</span>
            </div>

            <div className="flex items-center gap-1 justify-center lg:justify-start">
              <Mail className="w-4 h-4 text-orange-400" />
              Info@pksolutionspune.com
            </div>

            <div className="flex items-center gap-1 justify-center lg:justify-start">
              <Phone className="w-4 h-4 text-orange-400" />
              +91 7387103365
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <footer className="bg-[#1A498B] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">

        {/* Top - Logo & CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 gap-4">
          <div className="w-40 h-20 flex items-center justify-center">
            <img src="/LOGO .png" alt="logo" className="max-h-full max-w-full" />
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <button
              onClick={() => window.location.href = "/contact"}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-200 transform hover:scale-105 text-sm"
            >
              CONTACT US
            </button>

            <button
              onClick={() => window.location.href = "/services"}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-200 transform hover:scale-105 text-sm"
            >
              EXPLORE
            </button>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-0 mb-6">
          <FooterSection title="Pages" items={quickAccessLinks} sectionId="pages" />
          <FooterSection title="Services" items={importantPages} sectionId="services" />
          <FooterSection title="Products" items={connectLinks} sectionId="products" />
          <ContactSection />
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mb-6">
          {/* Pages */}
          <div>
            <h3 className="text-base font-semibold mb-2 border-b-2 border-orange-400 inline-block pb-1">Pages</h3>
            <ul className="space-y-1 mt-2">
              {quickAccessLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-orange-400 transition duration-200 inline-block">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-2 border-b-2 border-orange-400 inline-block pb-1">Services</h3>
            <ul className="space-y-1 mt-2">
              {importantPages.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-orange-400 transition duration-200 inline-block">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-base font-semibold mb-2 border-b-2 border-orange-400 inline-block pb-1">Products</h3>
            <ul className="space-y-1 mt-2">
              {connectLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-orange-400 transition duration-200 inline-block">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold mb-2 border-b-2 border-orange-400 inline-block pb-1">Contact Info</h3>
            <div className="space-y-1 mt-2">
              <div className="flex items-start gap-1">
                <MapPin className="w-4 h-4 mt-1 text-orange-400" />
                Inspiria Mall, 1st Floor, Nigdi–Pimpri-Chinchwad, Maharashtra 411044
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4 text-orange-400" /> Info@pksolutionspune.com
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4 text-orange-400" /> +91 7387103365
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-4 border-t border-blue-400 border-opacity-20 flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
          <p className="text-gray-300 text-center md:text-left">
            Developed by{" "}
            <a href="https://www.goanny.com/" className="text-blue-300 hover:text-orange-400 font-semibold transition duration-200">
              Goanny Technologies Pvt Ltd
            </a>
          </p>

          <div className="flex items-center gap-2">
            <span className="text-gray-300 font-semibold">Let's connect</span>
            <div className="flex gap-2">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 bg-white bg-opacity-10 hover:bg-orange-400 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                >
                  <social.icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
