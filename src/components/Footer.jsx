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
      <div className="border-b border-blue-400 border-opacity-30">
        <button
          onClick={() => toggleSection(sectionId)}
          className="w-full flex justify-between items-center py-4 text-center lg:cursor-default"
        >
          <h3 className="text-lg font-bold text-white flex-1 text-center lg:text-left">
            {title}
          </h3>
          <span className="lg:hidden">
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-orange-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-orange-400" />
            )}
          </span>
        </button>
        
        <div className={`overflow-hidden transition-all duration-300 lg:block ${isOpen ? 'max-h-96 pb-4' : 'max-h-0 lg:max-h-none lg:pb-0'}`}>
          <ul className="space-y-2 text-center lg:text-left">
            {items.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 inline-block text-sm"
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
    const isOpen = openSection === 'contact';
    
    return (
      <div className="border-b border-blue-400 border-opacity-30">
        <button
          onClick={() => toggleSection('contact')}
          className="w-full flex justify-between items-center py-4 text-center lg:cursor-default"
        >
          <h3 className="text-lg font-bold text-white flex-1 text-center lg:text-left">
            Contact Info
          </h3>
          <span className="lg:hidden">
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-orange-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-orange-400" />
            )}
          </span>
        </button>
        
        <div className={`overflow-hidden transition-all duration-300 lg:block ${isOpen ? 'max-h-96 pb-4' : 'max-h-0 lg:max-h-none lg:pb-0'}`}>
          <div className="space-y-4 text-center lg:text-left">
            <div>
              <h4 className="font-bold text-white mb-2">Address:</h4>
              <p className="text-gray-300 text-sm leading-relaxed flex items-start gap-2 justify-center lg:justify-start">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-orange-400" />
                <span>Inspiria Mall, 1st Floor, Nigdi–Pimpri-Chinchwad, Maharashtra 411044</span>
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-2">Email:</h4>
              <p className="text-gray-300 text-sm flex items-center gap-2 justify-center lg:justify-start">
                <Mail className="w-4 h-4 text-orange-400" />
                Info@pksolutionspune.com
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-2">Phone:</h4>
              <p className="text-gray-300 text-sm flex items-center gap-2 justify-center lg:justify-start">
                <Phone className="w-4 h-4 text-orange-400" />
                +91 7387103365
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <footer style={{ backgroundColor: '#1A498B' }} className="text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-8 border-b border-blue-400 border-opacity-30">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4 md:mb-0">
           <div className="w-48 h-24 flex items-center justify-center">
              <img src='/LOGO .png' alt="logo" className="max-h-full max-w-full"/>
            </div>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              CONTACT US
            </button>

            <button
              onClick={() => window.location.href = '/services'}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              EXPLORE
            </button>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-0 mb-8">
          <FooterSection title="Pages" items={quickAccessLinks} sectionId="pages" />
          <FooterSection title="Services" items={importantPages} sectionId="services" />
          <FooterSection title="Products" items={connectLinks} sectionId="products" />
          <ContactSection />
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-4 gap-8 mb-8">
          
          <div>
            <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-orange-400 inline-block">
              Pages
            </h3>
            <ul className="space-y-2 mt-4">
              {quickAccessLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-orange-400 inline-block">
              Services
            </h3>
            <ul className="space-y-2 mt-4">
              {importantPages.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-orange-400 inline-block">
              Products
            </h3>
            <ul className="space-y-2 mt-4">
              {connectLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-orange-400 inline-block">
              Contact Info
            </h3>
            <div className="space-y-4 mt-4">

              <div>
                <h4 className="font-bold text-white mb-2">Address:</h4>
                <p className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-orange-400" />
                  Inspiria Mall, 1st Floor, Nigdi–Pimpri-Chinchwad, Maharashtra 411044
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Email:</h4>
                <p className="text-gray-300 text-sm flex items-center gap-2">
                  <Mail className="w-4 h-4 text-orange-400" />
                  Info@pksolutionspune.com
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Phone:</h4>
                <p className="text-gray-300 text-sm flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-400" />
                  +91 7387103365
                </p>
              </div>

            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-400 border-opacity-30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            <p className="text-gray-300 text-sm text-center md:text-left">
              Developed by{" "}
              <a href="https://www.goanny.com/" className="text-blue-300 hover:text-orange-400 font-semibold transition-colors duration-300">
                Goanny Technologies Pvt Ltd
              </a>
            </p>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <span className="text-gray-300 text-sm font-semibold">Let's connect</span>

              <div className="flex gap-3">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white bg-opacity-10 hover:bg-orange-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
