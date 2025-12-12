import React, { useState } from "react";
import {
  Zap,
  Target,
  BarChart3,
  ClipboardList,
  Lock,
  Wallet,
  Plus,
  Minus,
  Printer,
  Scan,
  Database,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
const faqs = [
  {
    q: " What is OMR Scanning and how does it work?",
    a: "OMR Scanning is a process that reads marked bubbles on OMR sheets using software or scanners. It extracts data and processes results for exams, surveys, and feedback forms with high accuracy.    ",
  },
  {
    q: "Can we get a free demo of your OMR Scanning solution?",
    a: "Yes! Contact us today for a free demo and consultation customized to your institution's needs.",
  },
  {
    q: "How fast can OMR sheets be processed?",
    a: "Our solution can process thousands of OMR sheets per hour, depending on scanner speed and sheet quality — ideal for large-scale exams.",
  },
  {
    q: "Can we generate reports and result analysis?",
    a: "Absolutely. Our system generates scorecards, merit lists, rankings, and graphical reports instantly in PDF or Excel format. ",
  },
  {
    q: "Can the software handle negative marking and optional questions?",
    a: "Yes, the result processing engine is customizable to match any marking scheme — including negative marking, sectional scoring, or optional questions.",
  },
];

const steps = [
  {
    number: "1",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "Cross-Scanner Compatible",
    description:
      "Supports flatbed, ADF, and high-speed document scanners no specialized hardware required.",
  },
  {
    number: "2",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    title: "Customisable Evaluation",
    description:
      "Supports negative marking, optional questions, sectional scoring, and more based on exam rules.",
  },
  {
    number: "3",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Bulk OMR Sheet Processing",
    description:
      "Upload and process thousands of sheets in a single batch for faster turnaround.",
  },
  {
    number: "4",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
        />
      </svg>
    ),
    title: "Secure Data Processing",
    description:
      "Fully encrypted data handling ensures compliance with government and institutional standards.",
  },
  {
    number: "5",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
    title: "Multi-format Export",
    description:
      "Export results in Excel, PDF, and other formats for easy sharing and record-keeping.",
  },
  {
    number: "6",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Real-Time Result Generation",
    description:
      "Generate instant scorecards, rankings, cut-offs, and graphical reports with a single click.",
  },
];

export default function OMRScanning() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const visibleFaqs = showMore ? faqs : faqs.slice(0, 4);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section
        className="pt-10 pb-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200')",
        }}
      >
        <div className="absolute inset-0 bg-black/35"></div>

        <div className="relative max-w-7xl mx-auto flex justify-center">
          <div className="w-full max-w-3xl min-h-[40vh] bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-10 md:p-12 flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 text-[#1a498b]">
              Accurate & Fast OMR Scanning Services for Exams & Evaluations
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-8 font-medium text-gray-800">
              Boost assessment efficiency with our advanced OMR sheet scanning
              solutions trusted by universities, schools, government bodies, and
              corporate organizations. Process lakhs of OMR sheets with 99.9%
              accuracy and quick turnaround time.
            </p>

            
                        <Link
                          to='/services'
                          className="bg-orange-600  text-white px-6 py-3 rounded-full 
                               text-base sm:text-lg font-bold shadow-lg 
                               hover:shadow-xl transition transform hover:scale-105"
                        >
                          Get Started for Free
                        </Link>
          </div>
        </div>
      </section>

      {/* What is OMR Section */}
      <WhatIsOMR />

      {/* Multigraphics Section */}
      <MultigraphicsSection />

      {/* Top Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8  bg-[#1a498b]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Top Features of OMR Scanning & Result Processing Software
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Streamline Your Evaluations with a Fast, Accurate & Scalable OMR
              Processing Solution
            </p>
          </div>

          {/* Process Steps Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="
        relative flex flex-col items-center text-center
        bg-white rounded-2xl p-8 shadow-xl
        text-[#1a498b]
      "
              >
                {/* Icon Box */}
                <div className="bg-orange-600 p-4 rounded-2xl mb-4 relative z-10 flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>

                {/* Large Number Behind */}
                <div className="absolute top-0 text-[90px] md:text-[180px] font-bold opacity-10 leading-none select-none pointer-events-none">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 relative z-10">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm relative z-10 max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It's Done Section */}
      <HowItsDone />

      {/* FAQ Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#1a498b]">
             <div className="max-w-3xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
               <h2 className="text-4xl font-bold mb-8 text-white">
                 Frequently Asked Questions
               </h2>
     
               <div className="space-y-3 w-full">
                 {visibleFaqs.map((item, index) => (
                   <div key={index} className="bg-white rounded-xl shadow-md w-full">
                     <button
                       className="w-full flex justify-between items-center px-5 py-4 text-center md:text-left"
                       onClick={() => toggleFAQ(index)}
                     >
                       <span className="text-lg font-medium text-gray-900 w-full md:w-auto">
                         {index + 1}. {item.q}
                       </span>
     
                       <span className="ml-auto md:ml-0">
                         {openIndex === index ? (
                           <Minus className="w-5 h-5 text-[#1B3376]" />
                         ) : (
                           <Plus className="w-5 h-5 text-[#1B3376]" />
                         )}
                       </span>
                     </button>
     
                     {openIndex === index && (
                       <div className="px-5 pb-4 text-gray-700 text-base leading-relaxed text-center md:text-left">
                         {item.a}
                       </div>
                     )}
                   </div>
                 ))}
               </div>
     
     
               {/* Show More Button */}
               {!showMore && faqs.length > 4 && (
                 <div className="mt-5 w-full flex justify-center">
                   <button
                     onClick={() => setShowMore(true)}
                     className="bg-orange-600 text-white px-4 py-2 rounded-lg border border-orange-700 hover:bg-orange-700 transition-all duration-300 font-bold"
                   >
                     Show More
                   </button>
                 </div>
               )}
     
               {/* Show Less Button */}
               {showMore && (
                 <div className="mt-5 w-full flex justify-center">
                   <button
                     onClick={() => setShowMore(false)}
                     className="text-white underline text-base font-medium"
                   >
                     Show Less
                   </button>
                 </div>
               )}
             </div>
           </section>

      {/* common code */}
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

                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-6 py-3 rounded-lg transition">
                  EXPLORE
                </Link>

                <Link
                  to="/contact"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-6 py-3 rounded-lg transition">
                  CONTACT
                </Link>
              </div>
      </div>
    </div>
  );
}

function WhatIsOMR() {
  return (
    <section
      className="py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#1a498b" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE CARD */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center mx-auto max-w-xl">
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-6"
              style={{ color: "#1a498b" }}
            >
              What is OMR Scanning & Result Processing?
            </h2>

            <p className="text-lg mb-4" style={{ color: "black" }}>
              OMR Scanning (Optical Mark Recognition) is the process of
              capturing marked data from OMR sheets used in exams, surveys, and
              evaluations.
            </p>

            <p className="text-lg mb-4" style={{ color: "black" }}>
              Candidates fill bubbles, which are then scanned using OMR software
              or scanners to read responses with high accuracy.
            </p>

            <p className="text-lg mb-4" style={{ color: "black" }}>
              Result Processing evaluates these responses to generate
              scorecards, merit lists, rankings, and analytics.
            </p>

            <p className="text-lg" style={{ color: "black" }}>
              Ideal for schools, universities, recruitment exams, and government
              assessments.
            </p>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900"
                alt="OMR Scanning Process"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1a498b]/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MultigraphicsSection() {
  const features = [
    {
      icon: <Zap size={40} />,
      title: "High-Speed Evaluation",
      description:
        "Scan and evaluate thousands of OMR sheets per hour, reducing manual workload and delays.",
    },
    {
      icon: <Target size={40} />,
      title: "99.9% Accuracy",
      description:
        "Eliminate human errors with automated OMR result processing, ensuring reliable outcomes.",
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Instant Reports & Analytics",
      description:
        "Get detailed scorecards, merit lists, and performance analytics in minutes.",
    },
    {
      icon: <ClipboardList size={40} />,
      title: "Ideal for All Assessments",
      description:
        "Perfect for competitive exams, academic tests, recruitment exams, and surveys.",
    },
    {
      icon: <Lock size={40} />,
      title: "Data Security & Compliance",
      description:
        "Secure data handling with ISO-certified systems and encrypted workflows.",
    },
    {
      icon: <Wallet size={40} />,
      title: "Cost & Time Efficient",
      description:
        "Cut costs on manpower, logistics, and manual data entry with end-to-end automation.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#1a498b] text-white rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition"
              >
                <div className="text-5xl mb-3">{feature.icon}</div>

                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>

                <p className="text-sm opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-[#1a498b]">
              PK Solutions: OMR Sheet Checking & Evaluation System
            </h2>

            <p className="text-lg text-gray-700 mb-4">
              PK Solutions offers high-speed OMR scanning and result processing
              solutions trusted by schools, universities, recruitment boards,
              and government organizations.
            </p>

            <p className="text-lg text-gray-700">
              With over 25 years of expertise, we deliver accurate, secure, and
              scalable evaluation systems that streamline assessments, automate
              result generation, and ensure timely reporting.
            </p>

            <div className="mt-6 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400"
                alt="OMR Scanner System"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItsDone() {
  const steps = [
    {
      icon: <Printer size={40} />,
      title: "OMR Sheet Design & Printing",
      description:
        "Design custom OMR sheets using predefined templates or client-specific layouts. Print them using regular printers.",
    },
    {
      icon: <ClipboardList size={40} />,
      title: "Sheet Distribution & Response Marking",
      description:
        "Distribute printed sheets to candidates for marking responses in exams, surveys, or feedback.",
    },
    {
      icon: <Scan size={40} />,
      title: "OMR Sheet Scanning",
      description:
        "Scan completed OMR sheets using high-speed scanners or compatible flatbed scanners.",
    },
    {
      icon: <Database size={40} />,
      title: "Automated Data Extraction",
      description:
        "The OMR software reads marked bubbles, extracts data, and flags any discrepancies or multiple markings.",
    },
    {
      icon: <CheckCircle size={40} />,
      title: "Result Processing",
      description:
        "Apply custom marking logic (including negative marking, optional questions, etc.) and calculate scores.",
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Report Generation & Export",
      description:
        "Generate detailed scorecards, rankings, analytics, and export results in Excel, PDF, or other formats.",
    },
  ];
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-[#1a498b]">
          OMR Sheet Scanning to Result Generation: How It's Done
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Power Your Evaluations with a Fast, Accurate & Scalable OMR Processing
          System
        </p>
        <div className="grid md:grid-cols-2 gap-2 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500"
              alt="OMR Scanning Process"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-[#1a498b] rounded-lg p-4 text-white flex flex-col items-center text-center shadow-md"
              >
                {/* Extra Small Icon */}
                <div className="bg-orange-600 p-1.5 rounded-full mb-2 text-white flex items-center justify-center">
                  {React.cloneElement(step.icon, { className: "w-6 h-6" })}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-1">{step.title}</h3>

                {/* Description */}
                <p className="text-white/90 text-xs leading-snug">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
