import React, { useState } from "react";
import {
  FaCheckCircle,
  FaMobileAlt,
  FaGlobe,
  FaCog,
  FaCloudUploadAlt,
  FaListAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserPlus, CheckSquare, Calculator, ArrowRight } from "lucide-react";

const services = [
  {
    img: "/onscreen-home-new.webp",
    title: "Oscan OMR Software ",
    desc: "Advanced OMR form reading and evaluation software designed for accurate, fast, and large-scale data processing used by exam boards, institutes, and government bodies.",
  },
  {
    img: "/oscan-home.webp",
    title: "On Screen Marking Solution",
    desc: "A scalable, feature-rich LMS for institutions and corporates — supporting content delivery, assessments, tracking, and certification in one unified platform.",
  },
  {
    img: "/printing-home-new.webp",
    title: "Confidential Exam Printing",
    desc: "High-security printing of question papers, OMR sheets, and ballots with tamper-proof tech, encrypted workflows, and custom packaging.",
  },
  {
    img: "/scanning-home.webp",
    title: "OMR Scanning and Result Processing",
    desc: "Fast, accurate scanning and result generation of OMR sheets — ideal for entrance exams, recruitments, and academic evaluations.",
  },
  {
    img: "/lms-home-new.webp",
    title: "Learning Management System",
    desc: "A scalable, feature-rich LMS for institutions and corporates — supporting content delivery, assessments, tracking, and certification in one unified platform.",
  },
];

const servicesNew = [
  {
    title: "OMR Division",
    description:
      "OSCAN OMR Software | Olympiad End to End Solutions | OMR Printing | Result Process processing | Analytics Report | OMR Sheet Scanning",
    link: "/services/omr-scanning",
  },
  {
    title: "EdTech Products",
    description:
      "E-Learning Software | Online Exam | Question Bank Management System | LMS | CRM | On Screen Marking Solution",
    link: "/products/online-examination-system",
  },
  {
    title: "Printing",
    description:
      "OMR Sheets | Answer Booklet Printing | Degree mark-sheet Printing | Book Printing and Brochure | Certificates Printing | Confidential Printing",
    link: "/services/confidential-printing",
  },
  {
    title: "Digital Solutions",
    description:
      "Mobile App Development for Android & iOS | Web Development | Digital Marketing",
    link: "/services/digital-marketing",
  },
];
// Services Data
const servicesData = [
  {
    title: "Comprehensive Exam Management",
    description:
      "End-to-end solutions from printing to result processing for seamless exam administration.",
    icon: FaListAlt,
  },
  {
    title: "Secure Printing & Delivery",
    description:
      "Confidential printing with tamper-evident packaging and tracked delivery to exam centers.",
    icon: FaCloudUploadAlt,
  },
  {
    title: "Data Accuracy & Validation",
    description:
      "Multi-layer quality checks to ensure error-free data entry and result accuracy.",
    icon: FaCog,
  },
  {
    title: "Online & Offline Exam Support",
    description:
      "Robust platforms for online exams and logistical support for offline assessments.",
    icon: FaGlobe,
  },
  {
    title: "24/7 Customer Support",
    description:
      "Dedicated support team available around the clock to assist institutions.",
    icon: FaMobileAlt,
  },
];

const steps = [
  {
    title: "Idea & Analysis Gathering",
    icon: <UserPlus className="w-5 h-5" />,
    heading: "Idea & Analysis Gathering",
    descBold: "We begin by understanding your goals, audience, and challenges.",
    desc: "Our team collaborates with you to gather insights, define requirements, and brainstorm effective digital solutions.",
  },
  {
    title: "Designing & Developing",
    icon: <CheckSquare className="w-5 h-5" />,
    heading: "Designing & Developing",
    descBold:
      "Your ideas come to life with modern UI/UX and robust development.",
    desc: "We create wireframes, design interfaces, and develop the product using the best tech stack to ensure quality.",
  },
  {
    title: "Testing & Launching",
    icon: <Calculator className="w-5 h-5" />,
    heading: "Testing & Launching",
    descBold: "We ensure everything is smooth, bug-free, and ready for users.",
    desc: "After testing, your digital product goes live with complete support and optimization.",
  },
];
export default function TechOnTime() {
  const [active, setActive] = useState(0);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Hero Section with Circuit Background */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-gray-50">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 opacity-60 z-0"
          style={{
            backgroundImage:
              "url(/group-people-working-out-business-plan-office.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-2 py-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Left Content Box */}
            <div
              className="
      bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl 
      max-w-xl w-full               /* width increased */
      mx-auto                       /* mobile: center */
      lg:mx-0 lg:justify-self-start /* desktop: left */
      text-center lg:text-left      /* mobile center, desktop left */
    "
            >
              <h1 className="text-[#1a498b] text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                Welcome to PK Solutions Where Excellence Meets Examination
                Services
              </h1>

              <div className="space-y-1 mb-5">
                <p className="text-gray-700 text-base font-bold">
                  <span className="text-[#1a498b]">Your Assessment</span>, Our
                  Precision.
                </p>
                <p className="text-gray-700 text-base font-bold">
                  <span className="text-[#1a498b]">Your Learning</span>, Our
                  Platform.
                </p>
                <p className="text-gray-700 text-base font-bold">
                  <span className="text-[#1a498b]">Your Prints</span>, Our
                  Promise.
                </p>
              </div>

              <div className="pt-1">
                <Link
                  to="/contact"
                  className="inline-block bg-[#1a498b] hover:bg-[#0a5268] text-white font-bold text-sm px-6 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Get Started For Free
                </Link>
              </div>
            </div>

            {/* Right Services Box */}
            <div
              className="
      bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-5 
      max-w-md w-full
      mx-auto                  /* mobile center */
      lg:mx-0 lg:justify-self-end   /* desktop right */
      text-center lg:text-left       /* mobile center, desktop left */
    "
            >
              <h2 className="text-[#1a498b] text-xl font-extrabold mb-4">
                Our Products & Services
              </h2>

              <div className="space-y-3">
                {servicesNew.map((service, index) => (
                  <Link
                    key={index}
                    to={service.link}
                    className="group block bg-[#1a498b] p-4 rounded-xl transition-all duration-300 shadow-md border border-[#1a498b]/20 text-white"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-white text-lg font-bold mb-1">
                          {service.title}
                        </h3>
                        <p className="text-white text-xs leading-snug">
                          {service.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white ml-3 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2  services */}
      <section className="py-20 px-4 bg-[#1a498b]">
        <div className="max-w-7xl mx-auto text-white space-y-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center">
            What We Have For You
          </h2>

          <p className="text-lg md:text-xl font-medium text-gray-200 mx-auto">
            We deliver scalable, secure, and customizable EduTech and business
            solutions complete with seamless integration, real-time updates, and
            24/7 accessibility to meet the evolving needs of educational
            institutions and enterprises.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-10">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-30 object-cover"
                />

                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold text-[#1a498b]">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Center Button */}
                  <div className="flex justify-center mt-8">
                    <button className="text-[#1a498b] font-bold px-4 py-2">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3*/}
      <section className="max-w-8xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#1a498b] rounded-2xl overflow-hidden">
          {/* LEFT CONTENT */}
          <div className="p-4 lg:p-6 text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-snug">
              India's Leading <br />
              <span className="text-gray-200 font-semibold">
                EdTech Solution Provider
              </span>
            </h1>

            <p className="text-lg font-semibold mt-3">
              We don't just build tech — we build results.
            </p>

            <p className="mt-2 text-gray-200 text-[15px] leading-relaxed">
              PK Solutions Group builds scalable solutions across EdTech,
              training, and exam tech.
            </p>

            <p className="mt-2 text-gray-200 text-[15px] leading-relaxed">
              We help institutions and businesses automate, digitize, and grow.
            </p>

            <ul className="space-y-1.5 mt-3 text-gray-100 text-[15px]">
              <li className="flex items-start gap-1.5">
                <span className="text-lg">🛠️</span>
                Simplify complex operations with custom-built tech
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-lg">📈</span>
                Scalable smart digital tools for growth
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-lg">🎧</span>
                Reach wider audiences with online infrastructure
              </li>
            </ul>

            <button className="mt-4 bg-orange-600 text-white font-bold px-4 py-2 rounded-full shadow hover:bg-gray-100 transition">
              Learn more
            </button>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="h-[250px] lg:h-full">
            <img
              src="/group-people-working-out-business-plan-office.jpg"
              alt="Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-12 px-6 bg-gradient-to-b from-[#1a498b] to-[#0f325f]">
        {/* HEADING CENTER */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-5xl font-bold text-white">Our Working Process</h2>
          <p className="text-gray-200 mt-2 text-[18px] leading-relaxed">
            Our process blends strategy, creativity, and technology — aligned
            with your goals, timeline, and audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          {/* LEFT SIDE TABS - CENTERED */}
          <div className="space-y-4 flex flex-col justify-center">
            {steps.map((item, index) => (
              <div
                key={index}
                onClick={() => setActive(index)}
                className={`cursor-pointer flex items-center gap-4 p-5 rounded-xl transition-all
            ${active === index
                    ? "bg-white text-[#1a498b] font-bold shadow-xl"
                    : "bg-white/80 text-gray-800 hover:bg-white shadow"
                  }
          `}
              >
                {/* ORANGE ICON CIRCLE */}
                <div className="bg-orange-600 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl shadow-md">
                  {item.icon}
                </div>

                <h3 className="font-semibold text-[16px]">{item.title}</h3>
              </div>
            ))}
          </div>

          {/* RIGHT CONTENT - CENTERED */}
          <div className="border border-white rounded-2xl p-8 shadow-xl bg-white/95 backdrop-blur text-center">
            <h3 className="text-2xl font-bold text-[#1a498b]">
              {steps[active].heading}
            </h3>

            <p className="font-semibold text-gray-900 mt-3 text-[16px]">
              {steps[active].descBold}
            </p>

            <p className="text-gray-700 mt-3 text-[15px] leading-relaxed">
              {steps[active].desc}
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="py-16 px-6 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-[#1a498b]">
            Industries We Serve
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* REUSABLE CARD */}
          {[
            {
              img: "/education-icon.webp",
              title: "Online Education",
              desc:
                "Empowering schools, colleges, coaching institutes, and training platforms with comprehensive digital learning tools — including LMS, online exams, content hosting, progress tracking, and certification management.",
            },
            {
              img: "/healthcare-icon.webp",
              title: "Healthcare",
              desc:
                "Delivering secure software solutions for medical institutions and training providers — scalable platforms for assessments, portals, and onboarding solutions.",
            },
            {
              img: "/ecommerce-icon.webp",
              title: "E-Commerce",
              desc:
                "Custom web and mobile app solutions for growing e-commerce brands — digitizing operations, tracking customers, and building secure online stores that convert.",
            },
            {
              img: "/realestate-icon.webp",
              title: "Real Estate",
              desc:
                "Helping property developers and real estate agencies showcase listings, automate inquiries, and manage leads with custom portals.",
            },
            {
              img: "/corporate-staff.webp",
              title: "Corporates",
              desc:
                "Corporate training, recruitment, internal assessments — with LMS, digital onboarding, mobile apps, and secure exam tools tailored to corporate needs.",
            },
            {
              img: "/bank-new.webp",
              title: "Government",
              desc:
                "Digital solutions for public sector organizations — online exam systems, OMR evaluation, digital portals, and workflow automation for transparency and scalability.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#1a498b] text-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-[1.02] transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 mb-4"
              />

              <h3 className="text-3xl font-extrabold mb-2">{item.title}</h3>

              <p className="text-white/90 leading-relaxed text-[15px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* 6 Our Values & Promise Section */}
      <section className="bg-white">
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
      </section>
    </div>
  );
}
