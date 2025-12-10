import React from "react";
import {
  FaCheckCircle,
  FaMobileAlt,
  FaGlobe,
  FaCog,
  FaCloudUploadAlt,
  FaListAlt,
} from "react-icons/fa";

// Enhanced Circuit Pattern Background Component
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

    {/* Left side circuit lines */}
    <g opacity="0.6" filter="url(#glow)">
      {/* Horizontal lines left */}
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

      {/* Vertical connectors left */}
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

      {/* Connection nodes left */}
      <circle cx="100" cy="150" r="6" fill="#3aabcd" />
      <circle cx="200" cy="250" r="6" fill="#2596BE" />
      <circle cx="300" cy="350" r="6" fill="#3aabcd" />
      <circle cx="100" cy="450" r="6" fill="#2596BE" />
      <circle cx="200" cy="550" r="6" fill="#3aabcd" />
      <circle cx="300" cy="650" r="6" fill="#2596BE" />
      <circle cx="100" cy="750" r="6" fill="#3aabcd" />
    </g>

    {/* Right side circuit lines */}
    <g opacity="0.6" filter="url(#glow)">
      {/* Horizontal lines right */}
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

      {/* Vertical connectors right */}
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

      {/* Connection nodes right */}
      <circle cx="1820" cy="150" r="6" fill="#3aabcd" />
      <circle cx="1720" cy="250" r="6" fill="#2596BE" />
      <circle cx="1620" cy="350" r="6" fill="#3aabcd" />
      <circle cx="1820" cy="450" r="6" fill="#2596BE" />
      <circle cx="1720" cy="550" r="6" fill="#3aabcd" />
      <circle cx="1620" cy="650" r="6" fill="#2596BE" />
      <circle cx="1820" cy="750" r="6" fill="#3aabcd" />
    </g>

    {/* Animated pulse effect */}
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

// Services Data
const servicesData = [
  {
    icon: FaMobileAlt,
    title: "Secure & Confidential Operations",
    description:
      "Strict handling, printing, and dispatch procedures to protect examination integrity.",
  },
  {
    icon: FaGlobe,
    title: "Accuracy & Reliability",
    description:
      "Every step—from printing to result processing—is backed by quality checks.",
  },
  {
    icon: FaCog,
    title: "End-to-End Solutions",
    description:
      "Complete exam cycle support under one roof ensures convenience and transparency.",
  },
  {
    icon: FaCloudUploadAlt,
    title: "Scalable for High Volume",
    description:
      "Capable of managing exams for boards, universities, and large recruitment bodies.",
  },
  {
    icon: FaListAlt,
    title: "Timely & Professional Delivery",
    description:
      "Committed to meeting institutional timelines without compromising quality.",
  },
];

export default function TechOnTime() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Hero Section with Circuit Background */}
    <div className="relative w-full bg-white flex items-center overflow-hidden">
  {/* Circuit Pattern Background */}
  <div className="absolute inset-0 pointer-events-none opacity-50">
    <CircuitBackground />
  </div>

  <div className="container mx-auto px-6 md:px-16 flex flex-col-reverse md:flex-row items-center relative z-10">
    {/* Left Side Content */}
    <div className="w-full md:w-1/2 space-y-6 mt-6 md:mt-0 text-center md:text-left">
      <h1
        className="text-4xl md:text-5xl font-extrabold leading-tight"
        style={{ color: "#1a498b" }}
      >
        PK Solutions – Delivering Secure & Trusted Examination Services
      </h1>

      <p className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
        We provide reliable and confidential examination services tailored
        for institutions of all sizes.
      </p>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-2 justify-center md:justify-start">
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-6 py-3 rounded-lg transition mb-4 md:mb-0">
          LEARN MORE
        </button>
      </div>
    </div>

    {/* Right Side Image */}
    <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
      <div className="w-full max-w-lg h-auto flex items-center justify-center">
        <img src="/5259588.jpg" alt="" className="w-full h-auto object-contain" />
      </div>
    </div>
  </div>
</div>


      {/* 2. Who We Are Section */}
      <div className="py-16 px-8 border-t border-gray-200 bg-[#1a498b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold mb-2 text-center text-white">
            Why Institutions Choose Us{" "}
          </h2>

          <p className="text-2xl text-gray-200 font-semibold mb-12 text-center">
            Committed to providing safe, seamless, and error-free examination
            support.{" "}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-6 bg-white border-2 border-transparent rounded-2xl shadow-lg text-center hover:border-[#48B1E4] hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-center h-16 w-16 mb-4 bg-[#48B1E4]/10 rounded-full group-hover:bg-[#48B1E4]/20 transition-all duration-300">
                  <service.icon
                    className="h-7 w-7 text-[#48B1E4] group-hover:rotate-6 transition-all duration-300"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-base font-bold text-gray-800 mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-snug">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Our Values & Promise Section */}
      <section className="bg-white">
        <div className="bg-white py-16 md:py-16">
          {/* 3.1 */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
            {/* White Card Heading Box */}
            <div className="max-w-3xl mx-auto bg-white">
              <h2 className="text-5xl md:text-5xl font-extrabold text-[#1b3376]">
                Our Core Strengths
              </h2>
              <p className="text-xl font-semibold text-gray-700 mt-2">
                Three key pillars that define our examination services.
              </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 md:px-0">
              {/* Card 1 */}
              <div
                className="bg-white rounded-2xl p-8 flex flex-col items-center text-center
    shadow-[0_10px_45px_rgba(0,0,0,0.35)]
    border border-gray-400 transition-all duration-300"
              >
                <FaCheckCircle className="h-10 w-10 text-[#1a498b] mb-4" />
                <h3 className="text-3xl font-bold text-[#1b3376]">
                  Secure Processes at Every Step
                </h3>
                <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                  From confidential printing to sealed delivery, every stage of
                  our workflow is tightly controlled. Only authorized staff
                  handle sensitive materials, ensuring full data protection and
                  exam integrity.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="bg-white rounded-2xl p-8 flex flex-col items-center text-center
    shadow-[0_10px_45px_rgba(0,0,0,0.35)]
    border border-gray-400 transition-all duration-300"
              >
                <FaCheckCircle className="h-10 w-10 text-[#1a498b] mb-4" />
                <h3 className="text-3xl font-bold text-[#1b3376]">
                  Accuracy That Builds Trust
                </h3>
                <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                  Every sheet, entry, and result goes through multiple quality
                  checks to avoid errors. Our strict validation process ensures
                  that institutions receive precise and dependable outcomes
                  every time.
                </p>
              </div>

              {/* Card 3 */}
              <div
                className="bg-white rounded-2xl p-8 flex flex-col items-center text-center
    shadow-[0_10px_45px_rgba(0,0,0,0.35)]
    border border-gray-400 transition-all duration-300"
              >
                <FaCheckCircle className="h-10 w-10 text-[#1a498b] mb-4" />
                <h3 className="text-3xl font-bold text-[#1b3376]">
                  Timely & Professional Delivery
                </h3>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  We understand the importance of exam timelines. That’s why we
                  plan, execute, and deliver every service with disciplined
                  scheduling—ensuring institutions never face delays or
                  disruptions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3.2 Our Values & Promise */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#1a498b]">
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            {/* Left Side Content */}
            <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left lg:ml-20">
              <h3 className="text-5xl font-extrabold leading-tight mb-6 text-white">
                Our Values & Promise
              </h3>

              <p className="text-white text-lg mb-8 leading-relaxed font-bold">
                PK Solutions stands for security, accuracy, integrity, and
                professionalism — delivering examination services that
                institutions can trust. We ensure confidentiality in every
                process and commitment in every task, maintaining the highest
                standards throughout the examination lifecycle.
              </p>

              <p className="text-xl font-semibold text-gray-100 mt-6">
                Your trust is our priority — and our services help you conduct
                exams smoothly, securely, and without errors.
              </p>
            </div>

            {/* Right Side Checklist */}
            <div className="lg:w-1/2 lg:ml-20">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <ul className="space-y-5 pl-16 md:pl-0">
                  {[
                    "We ensure complete confidentiality in all examination processes",
                    "We follow disciplined workflows for error-free results",
                    "We maintain transparency and quality at every stage",
                    "We support institutions from printing to final result processing",
                    "We uphold strict accuracy standards for reliable outcomes",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center justify-start">
                      <FaCheckCircle className="h-6 w-6 text-[#1a498b] mr-3" />
                      <span className="text-lg text-gray-800 font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 3.3 Our Values & Promise */}
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
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-6 py-3 rounded-lg transition">
              Explore
            </button>

            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-6 py-3 rounded-lg transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
