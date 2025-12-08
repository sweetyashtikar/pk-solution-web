import { useState } from "react";
import {
  Settings,
  GraduationCap,
  FileText,
  Building2,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Users,
} from "lucide-react";

// Circuit Background Component
const CircuitBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1920 1080"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="circuitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#2596BE", stopOpacity: 0.8 }} />
        <stop offset="50%" style={{ stopColor: "#1e7a9f", stopOpacity: 0.6 }} />
        <stop
          offset="100%"
          style={{ stopColor: "#175d7d", stopOpacity: 0.4 }}
        />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g opacity="0.6" filter="url(#glow)">
      <line
        x1="0"
        y1="150"
        x2="400"
        y2="150"
        stroke="#2596BE"
        strokeWidth="2"
      />
      <line
        x1="0"
        y1="250"
        x2="350"
        y2="250"
        stroke="#3aabcd"
        strokeWidth="2"
      />
      <line
        x1="0"
        y1="350"
        x2="450"
        y2="350"
        stroke="#2596BE"
        strokeWidth="2"
      />
      <line
        x1="0"
        y1="450"
        x2="300"
        y2="450"
        stroke="#3aabcd"
        strokeWidth="2"
      />
      <line
        x1="0"
        y1="550"
        x2="400"
        y2="550"
        stroke="#2596BE"
        strokeWidth="2"
      />
      <line
        x1="0"
        y1="650"
        x2="350"
        y2="650"
        stroke="#3aabcd"
        strokeWidth="2"
      />
      <line
        x1="0"
        y1="750"
        x2="420"
        y2="750"
        stroke="#2596BE"
        strokeWidth="2"
      />

      <line
        x1="100"
        y1="150"
        x2="100"
        y2="750"
        stroke="#2596BE"
        strokeWidth="2"
      />
      <line
        x1="200"
        y1="200"
        x2="200"
        y2="700"
        stroke="#3aabcd"
        strokeWidth="2"
      />
      <line
        x1="300"
        y1="250"
        x2="300"
        y2="650"
        stroke="#2596BE"
        strokeWidth="2"
      />

      <circle cx="100" cy="150" r="6" fill="#3aabcd" />
      <circle cx="200" cy="250" r="6" fill="#2596BE" />
      <circle cx="300" cy="350" r="6" fill="#3aabcd" />
      <circle cx="100" cy="450" r="6" fill="#2596BE" />
      <circle cx="200" cy="550" r="6" fill="#3aabcd" />
      <circle cx="300" cy="650" r="6" fill="#2596BE" />
      <circle cx="100" cy="750" r="6" fill="#3aabcd" />
    </g>

    <g opacity="0.6" filter="url(#glow)">
      <line
        x1="1520"
        y1="150"
        x2="1920"
        y2="150"
        stroke="#2596BE"
        strokeWidth="2"
      />
      <line
        x1="1570"
        y1="250"
        x2="1920"
        y2="250"
        stroke="#3aabcd"
        strokeWidth="2"
      />
      <line
        x1="1470"
        y1="350"
        x2="1920"
        y2="350"
        stroke="#2596BE"
        strokeWidth="2"
      />
      <line
        x1="1620"
        y1="450"
        x2="1920"
        y2="450"
        stroke="#3aabcd"
        strokeWidth="2"
      />
      <line
        x1="1520"
        y1="550"
        x2="1920"
        y2="550"
        stroke="#2596BE"
        strokeWidth="2"
      />
      <line
        x1="1570"
        y1="650"
        x2="1920"
        y2="650"
        stroke="#3aabcd"
        strokeWidth="2"
      />
      <line
        x1="1500"
        y1="750"
        x2="1920"
        y2="750"
        stroke="#2596BE"
        strokeWidth="2"
      />

      <line
        x1="1820"
        y1="150"
        x2="1820"
        y2="750"
        stroke="#2596BE"
        strokeWidth="2"
      />
      <line
        x1="1720"
        y1="200"
        x2="1720"
        y2="700"
        stroke="#3aabcd"
        strokeWidth="2"
      />
      <line
        x1="1620"
        y1="250"
        x2="1620"
        y2="650"
        stroke="#2596BE"
        strokeWidth="2"
      />

      <circle cx="1820" cy="150" r="6" fill="#3aabcd" />
      <circle cx="1720" cy="250" r="6" fill="#2596BE" />
      <circle cx="1620" cy="350" r="6" fill="#3aabcd" />
      <circle cx="1820" cy="450" r="6" fill="#2596BE" />
      <circle cx="1720" cy="550" r="6" fill="#3aabcd" />
      <circle cx="1620" cy="650" r="6" fill="#2596BE" />
      <circle cx="1820" cy="750" r="6" fill="#3aabcd" />
    </g>

    <g opacity="0.4">
      <circle cx="200" cy="250" r="8" fill="#3aabcd">
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="1720" cy="350" r="8" fill="#2596BE">
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
);

const products = [
  {
    id: 1,
    title: "Business Automation Suite",
    icon: Settings,
    description:
      "A complete automation platform designed to integrate business operations.",
    subtitle: "It includes modules for:",
    items: [
      "Workflow automation",
      "Employee management",
      "Task & process monitoring",
      "Reporting and analytics",
      "Finance & operations",
    ],
    footer:
      "This suite improves efficiency, transparency, and decision-making.",
    gradient: "from-[#2596BE] to-[#1e7a9f]",
    stats: { icon: Zap, value: "3x", label: "Faster Operations" },
  },
  {
    id: 2,
    title: "EduTech Platforms",
    icon: GraduationCap,
    description:
      "Our EduTech solutions help schools, colleges, and institutes manage everything digitally.",
    subtitle: "Products include:",
    items: [
      "OMR-based result processing systems",
      "Online exam portals with secure evaluation",
      "Learning management systems",
      "Student information systems",
      "Report card & certificate generation system",
    ],
    footer:
      "These products simplify examination cycles and academic administration.",
    gradient: "from-[#3aabcd] to-[#2596BE]",
    stats: { icon: Users, value: "50K+", label: "Students Served" },
  },
  {
    id: 3,
    title: "CRM Systems",
    icon: FileText,
    description: "CRM products help businesses manage:",
    subtitle: "",
    items: [
      "Leads",
      "Customer interactions",
      "Sales pipelines",
      "Payments & follow-ups",
      "Reporting & forecasting",
    ],
    footer:
      "Our CRM tools are customized as per industry requirements and offer real-time data insights.",
    gradient: "from-[#1e7a9f] to-[#175d7d]",
    stats: { icon: TrendingUp, value: "40%", label: "Sales Increase" },
  },
  {
    id: 4,
    title: "ERP Systems",
    icon: Building2,
    description: "An integrated ERP platform for managing:",
    subtitle: "",
    items: [
      "Finance",
      "HR & Payroll",
      "Inventory",
      "Operations",
      "Project management",
    ],
    footer:
      "This helps companies centralize their operations for better control and growth.",
    gradient: "from-[#2596BE] to-[#3aabcd]",
    stats: { icon: Sparkles, value: "360°", label: "Business View" },
  },
  {
    id: 5,
    title: "Mobile & Web App Products",
    icon: Smartphone,
    description: "We develop industry-specific digital products such as:",
    subtitle: "",
    items: [
      "Booking apps",
      "E-commerce systems",
      "Management dashboards",
      "Service portals",
      "Attendance & monitoring apps",
    ],
    footer:
      "Each product is built using modern design and secure backend systems.",
    gradient: "from-[#175d7d] to-[#2596BE]",
    stats: { icon: Zap, value: "100+", label: "Apps Deployed" },
  },
];

const highlights = [
  "Enterprise-Grade Solutions",
  "Scalable Architecture",
  "24/7 Support",
];

export default function ProductShowcase() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full min-h-[600px] bg-gradient-to-r from-[#155b73] via-[#1c7ea1] to-[#2596BE] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent mix-blend-multiply"></div>

        <div className="absolute inset-0 pointer-events-none opacity-75">
          <CircuitBackground />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                Products
              </h1>

              <p className="text-white/90 text-xl md:text-2xl mb-6 leading-relaxed">
                Innovative digital solutions designed for modern businesses.
              </p>

              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
                We deliver enterprise-grade software products that streamline
                operations, enhance productivity, and drive digital
                transformation across industries.
              </p>

              <div className="mb-8 flex justify-center md:justify-start">
                <ul className="space-y-3 inline-block pl-4 md:pl-0">
                  {highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-orange-400 flex-shrink-0" />
                      <span className="text-white text-lg">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-2 justify-center md:justify-start">
                <button
                  onClick={() => (window.location.href = "/services")}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 w-[220px] mx-auto sm:mx-0"
                >
                  LEARN MORE
                </button>
              </div>
            </div>

            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative">
                <img src="/5144305.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-[#1B3376] mb-4">
              Our Product Suite
            </h2>
            <p className="text-xl text-gray-600 font-bold">
              Comprehensive digital solutions for every business need
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
            {products.map((product, index) => {
              const Icon = product.icon;
              const StatsIcon = product.stats.icon;
              const isDark = index % 2 === 0;
              const isHovered = hoveredCard === index;

              return (
                <div
                  key={product.id}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative rounded-3xl p-8 shadow-md transform transition-all duration-500 
          ${isHovered ? "scale-[1.025] shadow-xl" : "hover:scale-[1.01]"}
          ${
            isDark
              ? "bg-gradient-to-br from-[#155b73] via-[#1c7ea1] to-[#2596BE] text-white"
              : "bg-white text-gray-800 border-2 border-gray-200"
          }`}
                >
                  {isDark && (
                    <div className="absolute inset-0 pointer-events-none opacity-20 rounded-3xl overflow-hidden">
                      <CircuitBackground />
                    </div>
                  )}

                  <div className="relative z-10 px-4 md:px-0">
                    {/* Header with Icon */}
                    <div className="flex flex-col items-center mb-6">
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${product.gradient} mb-4`}
                      >
                        <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                      </div>
                      
                      <h3
                        className={`text-2xl md:text-3xl font-bold text-center mb-3 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {product.title}
                      </h3>

                      {/* Stats Badge */}
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                          isDark
                            ? "bg-white/10 border border-white/20"
                            : "bg-[#2596BE]/10 border border-[#2596BE]/20"
                        }`}
                      >
                        <StatsIcon
                          className={`w-5 h-5 ${
                            isDark ? "text-orange-400" : "text-[#2596BE]"
                          }`}
                        />
                        <span
                          className={`text-sm font-semibold ${
                            isDark ? "text-white" : "text-[#2596BE]"
                          }`}
                        >
                          {product.stats.value} {product.stats.label}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className={`mb-4 text-base leading-relaxed text-center px-2 md:px-0 ${
                        isDark ? "text-white/90" : "text-gray-700"
                      }`}
                    >
                      {product.description}
                    </p>

                    {product.subtitle && (
                      <p
                        className={`mb-4 text-sm font-semibold text-center px-2 md:px-0 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {product.subtitle}
                      </p>
                    )}

                    {/* Items List - Centered with proper spacing */}
                    <div className="flex justify-center mb-6 px-2 md:px-0">
                      <ul className="space-y-3 max-w-md w-full">
                        {product.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 pl-4 md:pl-0">
                            <span
                              className={`flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold flex-shrink-0 mt-0.5 ${
                                isDark
                                  ? "bg-orange-400 text-white"
                                  : "bg-[#2596BE] text-white"
                              }`}
                            >
                              {idx + 1}
                            </span>
                            <span
                              className={`text-sm leading-relaxed flex-1 ${
                                isDark ? "text-white/90" : "text-gray-700"
                              }`}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer */}
                    {product.footer && (
                      <div
                        className={`pt-5 border-t ${
                          isDark ? "border-white/20" : "border-gray-200"
                        }`}
                      >
                        <p
                          className={`text-sm leading-relaxed text-center px-2 md:px-0 ${
                            isDark ? "text-white/90" : "text-gray-700"
                          }`}
                        >
                          {product.footer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Product Categories Quick View */}
      <div className="py-16 px-6 bg-gray-50">
        <h3 className="text-5xl font-bold text-center text-[#1B3376] mb-12">
          Product Categories
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center p-6 
         bg-white rounded-2xl
         border-2 border-gray-400 
         hover:border-[#2596BE]/50 
         hover:shadow-xl 
         transition-all duration-300 
         transform hover:-translate-y-1"
            >
              <div
                className="p-4 rounded-full
           bg-gray-100 
           group-hover:bg-gradient-to-br 
           group-hover:from-[#2596BE] 
           group-hover:to-[#3aabcd] 
           transition-all duration-300 
           group-hover:scale-110"
              >
                <product.icon
                  className="w-12 h-12 
             text-[#2596BE] 
             group-hover:text-white 
             transition-all duration-300"
                  strokeWidth={1.5}
                />
              </div>
              <h4 className="font-bold text-base text-center text-gray-800 mt-3">
                {product.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#155b73] via-[#1c7ea1] to-[#2596BE] py-20">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <CircuitBackground />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Let's discuss how our products can help you achieve your business
            goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/contact")}
              className="group px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}