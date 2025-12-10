import { useState } from "react";
import {
  Smartphone,
  CheckCircle,
  BookOpen,
  Printer,
  Shield,
  Target,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
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
    title: "OMR Division",
    icon: <CheckCircle className="w-8 h-8" />,
    description:
      "OSCAN OMR Software | Olympiad End to End Solutions | OMR Printing | Result Process processing | Analytics Report | OMR Sheet Scanning",
    color: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
  },
  {
    title: "EdTech Products",
    icon: <BookOpen className="w-8 h-8" />,
    description:
      "E-Learning Software | Online Exam | Question Bank Management System | LMS | CRM | On Screen Marking Solution",
    color: "from-emerald-50 to-teal-50",
    borderColor: "border-emerald-200",
  },
  {
    title: "Printing",
    icon: <Printer className="w-8 h-8" />,
    description:
      "OMR Sheets | Answer Booklet Printing | Degree mark-sheet Printing | Book Printing and Brochure | Certificates Printing | Confidential Printing",
    color: "from-violet-50 to-purple-50",
    borderColor: "border-violet-200",
  },
  {
    title: "Digital Solutions",
    icon: <Smartphone className="w-8 h-8" />,
    description:
      "Mobile App Development for Android & iOS | Web Development | Digital Marketing",
    color: "from-amber-50 to-orange-50",
    borderColor: "border-amber-200",
  },
];

const quickServices = [
  "Confidential Printing",
  "OMR Scanning",
  "Mobile App Development",
  "Software Development",
  "Digital Marketing",
];

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 opacity-60 z-0"
          style={{
            backgroundImage:
              "url(/performance.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content Box */}
            <div className="bg-white p-8 rounded-3xl shadow-2xl backdrop-blur-lg max-w-xl mx-auto text-center">
              <p className="text-[#1a498b] text-4xl font-extrabold mb-5">
                Welcome to PK Solutions Where Excellence Meets Examination
              </p>

              <h1 className="text-gray-500 text-lg font-bold leading-relaxed mb-6">
                Services At PK Solutions, we support institutions with reliable,
                secure, and high-quality examination and assessment solutions.
                Our goal is to simplify and strengthen the complete exam
                lifecycle through accuracy, confidentiality, and professional
                execution
              </h1>

              <div className="flex justify-center pt-6">
                <Link
                  to="/products/online-examination-system"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-6 py-4 rounded-lg transition text-center"
                >
                  EXPLORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-[#1a498b] mb-6">
            Welcome to PK Solutions
          </h2>
          <p className="text-3xl font-semibold text-black mb-4">
            Where Excellence Meets Examination Services
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            At PK Solutions, we support institutions with reliable, secure, and high-quality examination and assessment solutions. Our goal is to simplify and strengthen the complete exam lifecycle through accuracy, confidentiality, and professional execution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {/* Card 1 */}
          <div className="bg-[#1a498b] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">

            {/* Icon */}
            <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Shield className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              Reliability
            </h3>

            <p className="text-white/90">
              Trusted by institutions for secure and accurate examination management with proven track record of excellence.
            </p>
          </div>


          {/* Card 2 */}
          <div className="bg-[#1a498b] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">

            <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Target className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              Precision
            </h3>

            <p className="text-white/90">
              Advanced technology and meticulous processes ensure zero-error results and complete data accuracy.
            </p>
          </div>


          {/* Card 3 */}
          <div className="bg-[#1a498b] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">

            <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Award className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              Excellence
            </h3>

            <p className="text-white/90">
              Committed to delivering professional services that exceed expectations and support educational success.
            </p>
          </div>

        </div>

      </div>

      {/* Main Services Grid */}
      <div className="lg:col-span-3 bg-[#1a498b] p-10 rounded-2xl">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Our Products & Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white overflow-hidden group"
            >
              <div className="p-8 text-center">
                {" "}
                {/* CENTER ADDED */}
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="bg-orange-600 p-3 rounded-xl shadow-md text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                {/* Title */}
                <h3 className="text-3xl font-bold text-[#1a498b] mb-4">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-[#1a498b] text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-white py-20 flex flex-col items-center text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a498b] mb-6">
          Need Secure & Reliable Examination Services?
        </h2>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed mb-10">
          Connect with us to discuss how we can support your institution with
          end-to-end exam management—from confidential printing to complete
          result processing.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <Link
            to="/services"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-6 py-3 rounded-lg transition"
          >
            EXPLORE
          </Link>

          <Link
            to="/contact"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-6 py-3 rounded-lg transition"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}
