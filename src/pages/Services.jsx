import { useState } from "react";
import {
  Smartphone,
  Monitor,
  Settings,
  Cloud,
  FileText,
  Code,
  Zap,
  CheckCircle,
  ArrowRight,
  Layers,
  Globe,
  Cpu,
} from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";

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

const services = [
  {
    id: 1,
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "We build high-quality mobile applications combining technology, creativity and deliver solutions that truly matter.",
    features: [
      "Native iOS and Android development",
      "Cross-platform solutions with React Native",
      "UI/UX design and user testing",
    ],
    gradient: "from-[#2596BE] to-[#1e7a9f]",
  },
  {
    id: 2,
    icon: Globe,
    title: "Websites",
    description:
      "We build responsive and modern websites that deliver seamless user experiences across all devices.",
    features: [
      "Responsive design for all screen sizes",
      "Fast loading and optimized performance",
      "SEO-friendly architecture",
    ],
    gradient: "from-[#2596BE] to-[#3aabcd]",
  },
  {
    id: 3,
    icon: Monitor,
    title: "Web Design & Development",
    description:
      "We combine technology, creativity and deliver solutions that truly matter.",
    features: [
      "Modern and intuitive UI/UX design",
      "Full-stack web development",
      "E-commerce and CMS solutions",
    ],
    gradient: "from-[#1e7a9f] to-[#2596BE]",
  },
  {
    id: 4,
    icon: Code,
    title: "Custom Software & Product Development",
    description:
      "Your vision becomes reality with our custom software development services. We design and build tailored solutions that meet your specific business needs.",
    features: [
      "Mobile and web application development",
      "Cloud infrastructure and deployment",
      "Quality Engineering & Testing support",
    ],
    gradient: "from-[#3aabcd] to-[#2596BE]",
  },
  {
    id: 5,
    icon: Cloud,
    title: "Business Automation & Cloud Services",
    description:
      "We combine technology and creativity to deliver solutions that truly matter.",
    features: [
      "Workflow automation and optimization",
      "Cloud migration and infrastructure",
      "DevOps and continuous deployment",
    ],
    gradient: "from-[#2596BE] to-[#175d7d]",
  },
];

const quickServices = [
  { icon: Smartphone, title: "Mobile App Development" },
  { icon: Monitor, title: "Web Development" },
  { icon: Settings, title: "Custom Solutions" },
  { icon: Cloud, title: "Cloud Services" },
  { icon: FileText, title: "Product Development" },
];

const features = [
  "Innovative technology solutions",
  "Customer-focused approach",
  "Expert development team",
];

const trustReasons = [
  "Strong Technical Expertise",
  "Precise & Agile Approach",
  "Customer-Centric Support",
];

const values = [
  "Deliver long-lasting digital solutions",
  "Maintain full transparency",
  "Work with discipline",
  "Support clients throughout",
  "Continuously upgrade technologies",
];

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState(null);

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
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Services
              </h1>

              <p className="text-white/90 text-xl md:text-2xl mb-8 leading-relaxed font-bold">
                We build high-performance, smartly-planned and elegant solutions
                for industries.
              </p>

              <ul className="space-y-4 mb-8 inline-block text-left">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                    <span className="text-white text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

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
              <img src="/2lyo_5omm_230125.jpg" alt="Services Illustration" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-[#1B3376] mb-4">
              Our Services
            </h2>

            <p className="text-xl text-gray-600 font-bold">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

        <div className="space-y-16">
  {services.map((service, index) => {
    const Icon = service.icon;
    const isDark = index % 2 === 0;
    const alignReverse = index % 2 !== 0;

    return (
      <div
        key={service.id}
        className={`relative overflow-hidden rounded-3xl ${
          isDark
            ? "bg-gradient-to-br from-[#155b73] via-[#1c7ea1] to-[#2596BE]"
            : "bg-white border-2 border-gray-300"
        }`}
      >
        {isDark && (
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <CircuitBackground />
          </div>
        )}

        <div
          className={`relative z-10 p-12 flex flex-col md:flex-row items-center justify-center gap-16 ${
            alignReverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* LEFT CONTENT CENTERED */}
          <div className="flex-1 max-w-lg text-center md:text-left">
            <div
              className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}
            >
              <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>

            <h3
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {service.title}
            </h3>

            <p
              className={`text-lg mb-6 leading-relaxed ${
                isDark ? "text-white/90" : "text-gray-700"
              }`}
            >
              {service.description}
            </p>

            <ul className="space-y-3 text-left mx-auto md:mx-0">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle
                    className={`w-5 h-5 ${
                      isDark ? "text-orange-400" : "text-[#2596BE]"
                    }`}
                  />
                  <span className={isDark ? "text-white/90" : "text-gray-700"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT SIDE DEVICE ICON ALWAYS CENTER */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative max-w-xs">
              {index <= 1 ? (
                <img src={service.mockup} className="w-full drop-shadow-xl" alt="" />
              ) : (
                <Icon
                  className={`w-48 h-48 ${
                    isDark ? "text-white/80" : "text-[#2596BE]"
                  }`}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>

        </div>
      </div>

      {/* Quick Services Icons */}
      <div className="py-16 px-6 bg-gray-50">
        <h3 className="text-5xl font-bold text-center text-[#1B3376] mb-12">
          Services Categories
        </h3>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {quickServices.map((service, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md border-2 border-gray-400 transform hover:scale-105 hover:shadow-lg hover:border-[#2596BE]/40 transition-all duration-300"
                onMouseEnter={() => setHoveredService(idx)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div
                  className={`p-5 rounded-full mb-5 transition-all duration-300 ${
                    hoveredService === idx
                      ? "bg-gradient-to-br from-[#2596BE] to-[#3aabcd]"
                      : "bg-[#2596BE]/10"
                  }`}
                >
                  <service.icon
                    className={`w-14 h-14 transition-all duration-300 ${
                      hoveredService === idx ? "text-white" : "text-[#2596BE]"
                    }`}
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="font-bold text-base md:text-lg text-center text-gray-800 leading-snug">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Trust Us Section */}
      <div className="bg-[#2596BE] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          {/* Heading */}
          <div className="max-w-3xl mx-auto space-y-3">
            <h2
              className="text-4xl md:text-4xl font-extrabold text-center"
              style={{ color: "#1b3376" }}
            >
              HOW WE WORK
            </h2>
            <p className="text-xl font-bold text-cyan-100">
              We combine technology, creativity, and deliver to truly matter.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 md:px-0">
            {/* Card 1 */}
            <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-200">
              <FaCheckCircle className="h-10 w-10 text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold text-[#1b3376]">
                Requirement Understanding
              </h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                We begin by deeply understanding your business needs, workflows,
                and goals. Our team studies your challenges and prepares a clear
                roadmap based on realistic possibilities. This ensures the
                development starts with complete clarity.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center text-center 
          hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <FaCheckCircle className="h-10 w-10 text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold text-[#1b3376]">
                Planning & Strategy
              </h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Before development, we create a structured plan covering
                features, timelines, and technical approach. This strategy helps
                us deliver the project in an organized and transparent manner,
                without last-minute surprises.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center text-center 
          hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <FaCheckCircle className="h-10 w-10 text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold text-[#1b3376]">
                UI/UX Design
              </h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Our design team creates user-friendly, modern, and intuitive
                screens that reflect your brand identity. We prioritize
                simplicity, smooth navigation, and practical layouts to ensure
                your users love the experience from day one.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center text-center 
          hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <FaCheckCircle className="h-10 w-10 text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold text-[#1b3376]">
                Agile Development Process
              </h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Our developers work in phases, building your solution
                step-by-step with continuous improvements. This agile approach
                allows flexibility, faster results, and the ability to adapt
                changes quickly without affecting quality.
              </p>
            </div>
            {/* Card 5 */}
            <div
              className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center text-center 
          hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <FaCheckCircle className="h-10 w-10 text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold text-[#1b3376]">
                Testing & Quality Check
              </h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Every feature undergoes strict testing, including functionality,
                performance, and security checks. We fix any issues before
                deployment to ensure your system runs smoothly, reliably, and
                without interruptions.
              </p>
            </div>
            {/* Card 6 */}
            <div
              className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center text-center 
          hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <FaCheckCircle className="h-10 w-10 text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold text-[#1b3376]">
                Deployment & Support
              </h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Once approved, we deploy your solution on a secure and optimized
                environment. After launch, we provide ongoing support, updates,
                and maintenance to keep your system stable and up to date as
                your business grows.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Values Section */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        style={{ minHeight: "450px" }}
      >
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          {/* Left Side Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left lg:ml-20">
            <h3
              className="text-4xl font-extrabold leading-tight mb-6"
              style={{ color: "#1b3376" }}
            >
              Committed to Quality, Driven by Purpose
            </h3>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Every solution we build is guided by a clear purpose—to help your
              business grow with confidence. We focus on delivering reliable,
              high-quality systems that bring real results. Our disciplined
              process and strong work ethics ensure each project meets the
              standards your business deserves.
            </p>

            <p className="text-xl font-semibold text-gray-700 mt-6">
              Your growth is our priority — and our solutions help you scale
              effortlessly.
            </p>
          </div>

          {/* Right Side Checklist */}
          <div className="lg:w-1/2 lg:ml-20">
            {" "}
            {/* lg:ml-20 वापरून अजून उजवीकडे */}
            <ul className="space-y-5 pl-16 md:pl-0">
              {[
                "Deliver long-lasting digital solutions",
                "Quality-first development",
                "Purpose-driven solutions",
                "Precision in every detail",
                "Built for long-term value",
              ].map((item, index) => (
                <li key={index} className="flex items-center justify-start">
                  <FaCheckCircle className="h-6 w-6 text-[#2596BE] mr-3" />
                  <span className="text-lg text-gray-700 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 px-6 bg-gradient-to-r from-[#155b73] via-[#1c7ea1] to-[#2596BE] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <CircuitBackground />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let's build something amazing together. Get in touch with our team
            today.
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
