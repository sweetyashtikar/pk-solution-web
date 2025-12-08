import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    {
      name: "SERVICES",
      href: "#",
      dropdown: [
        "Confidential Printing",
        "OMR Scanning",
        "Mobile App Development",
        "Software Development",
        "Digital Marketing",
      ],
    },
    {
      name: "PRODUCTS",
      href: "#",
      dropdown: [
        "Online Examination System",
      ],
    },
  ];

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleNavClick = (e, hasDropdown) => {
    if (hasDropdown) {
      e.preventDefault();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#1a498b] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative">
              <div className="w-40 h-24 flex items-center justify-center">
                <img src="/LOGO .png" alt="logo" className="max-h-full max-w-full" />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 ml-auto mr-10">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative group/nav"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.dropdown)}
                  className="px-2 py-2 text-sm font-semibold text-white hover:text-orange-400 transition-colors duration-300 relative flex items-center gap-1 cursor-pointer"
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover/nav:w-full transition-all duration-300"></span>
                </a>

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === index && (
                  <div 
                    className="absolute top-full left-0 pt-2"
                    onMouseEnter={() => handleMouseEnter(index)}
                  >
                    <div className="w-64 bg-white rounded-lg shadow-xl py-2 animate-fadeIn">
                      {link.dropdown.map((item, dropIndex) => (
                        <a
                          key={dropIndex}
                          href={`/${link.name.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#1a498b] transition-colors duration-200"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CONTACT BUTTON */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 transform hover:scale-105 inline-block"
            >
              CONTACT US
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <div key={index}>
                  <a
                    href={link.href}
                    className="px-4 py-2 text-sm font-semibold text-white hover:text-orange-400 hover:bg-white/10 rounded-lg transition-all duration-300 flex items-center justify-between"
                    onClick={(e) => {
                      if (link.dropdown) {
                        e.preventDefault();
                        setActiveDropdown(activeDropdown === index ? null : index);
                      } else {
                        setIsMenuOpen(false);
                      }
                    }}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>
                  {link.dropdown && activeDropdown === index && (
                    <div className="pl-6 mt-2 space-y-1">
                      {link.dropdown.map((item, dropIndex) => (
                        <a
                          key={dropIndex}
                          href={`/${link.name.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block px-4 py-2 text-sm text-white/80 hover:text-orange-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="/contact"
                className="mx-4 mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 text-center inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT US
              </a>
            </nav>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  );
}