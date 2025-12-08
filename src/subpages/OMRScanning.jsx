import React, { useState } from "react";

export default function OMRScanning() {
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

        <div className="relative max-w-7xl mx-auto flex justify-end">
          <div className="max-w-2xl min-h-[70vh] bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-10 md:p-12 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8 text-[#1a498b]">
              Accurate & Fast OMR Scanning Services for Exams & Evaluations
            </h1>

            <p className="text-xl leading-relaxed mb-10 font-medium text-gray-800">
              Boost assessment efficiency with our advanced OMR sheet scanning
              solutions trusted by universities, schools, government bodies, and
              corporate organizations. Process lakhs of OMR sheets with 99.9%
              accuracy and quick turnaround time.
            </p>

            <button className="bg-[#FF7A1A] text-white px-4 py-2 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition transform hover:scale-105 w-max">
              Get Started for Free
            </button>
          </div>
        </div>
      </section>

      {/* What is OMR Section */}
      <WhatIsOMR />

      {/* Multigraphics Section */}
      <MultigraphicsSection />

      {/* Top Features Section */}
      <TopFeatures />

      {/* How It's Done Section */}
      <HowItsDone />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}

function WhatIsOMR() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a498b]">
              What is OMR Scanning & Result Processing?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              OMR Scanning (Optical Mark Recognition) is the process of capturing marked data from OMR sheets used in exams, surveys, and evaluations.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Candidates fill bubbles, which are then scanned using OMR software or scanners to read responses with high accuracy.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Result Processing involves evaluating these responses using automated systems to generate scorecards, merit lists, rankings, and analytics—saving time, reducing errors, and increasing transparency.
            </p>
            <p className="text-lg text-gray-700">
              Ideal for schools, universities, recruitment exams, and government assessments.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500"
                alt="OMR Scanning Process"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a498b]/20 to-transparent rounded-lg"></div>
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
      icon: "⚡",
      title: "High-Speed Evaluation",
      description: "Scan and evaluate thousands of OMR sheets per hour, reducing manual workload and delays."
    },
    {
      icon: "🎯",
      title: "99.9% Accuracy",
      description: "Eliminate human errors with automated OMR result processing, ensuring reliable outcomes."
    },
    {
      icon: "📊",
      title: "Instant Reports & Analytics",
      description: "Get detailed scorecards, merit lists, and performance analytics in minutes."
    },
    {
      icon: "📋",
      title: "Ideal for All Assessments",
      description: "Perfect for competitive exams, academic tests, recruitment exams, and surveys."
    },
    {
      icon: "🔒",
      title: "Data Security & Compliance",
      description: "Secure data handling with ISO-certified systems and encrypted workflows."
    },
    {
      icon: "💰",
      title: "Cost & Time Efficient",
      description: "Cut costs on manpower, logistics, and manual data entry with end-to-end automation."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border-2 border-[#1a498b] rounded-xl p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-[#1a498b] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a498b]">
              Multigraphics: OMR Sheet Checking & Evaluation System
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Multigraphics offers high-speed OMR scanning and result processing solutions trusted by schools, universities, recruitment boards, and government organizations.
            </p>
            <p className="text-lg text-gray-700">
              With over 25 years of expertise, we deliver accurate, secure, and scalable evaluation systems that streamline assessments, automate result generation, and ensure timely reporting.
            </p>
            <div className="mt-6">
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

function TopFeatures() {
  const features = [
    {
      icon: "💡",
      title: "Cross-Scanner Compatible",
      description: "Supports flatbed, ADF, and high-speed document scanners no specialized hardware required."
    },
    {
      icon: "⚙️",
      title: "Customisable Evaluation",
      description: "Supports negative marking, optional questions, sectional scoring, and more based on exam rules."
    },
    {
      icon: "☁️",
      title: "Bulk OMR Sheet Processing",
      description: "Upload and process thousands of sheets in a single batch for faster turnaround."
    },
    {
      icon: "🔍",
      title: "Secure Data Processing",
      description: "Fully encrypted data handling ensures compliance with government and institutional standards."
    },
    {
      icon: "🔧",
      title: "Multi-format Export",
      description: "Export results in Excel, PDF, and other formats for easy sharing and record-keeping."
    },
    {
      icon: "⚡",
      title: "Real-Time Result Generation",
      description: "Generate instant scorecards, rankings, cut-offs, and graphical reports with a single click."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#1a498b]">
          Top Features of OMR Scanning & Result Processing Software
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Streamline Your Evaluations with a Fast, Accurate & Scalable OMR Processing Solution
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#1a498b] mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItsDone() {
  const steps = [
    {
      icon: "🖨️",
      title: "OMR Sheet Design & Printing",
      description: "Design custom OMR sheets using predefined templates or client-specific layouts. Print them using regular printers."
    },
    {
      icon: "📝",
      title: "Sheet Distribution & Response Marking",
      description: "Distribute printed sheets to candidates for marking responses in exams, surveys, or feedback."
    },
    {
      icon: "📷",
      title: "OMR Sheet Scanning",
      description: "Scan completed OMR sheets using high-speed scanners or compatible flatbed scanners."
    },
    {
      icon: "💾",
      title: "Automated Data Extraction",
      description: "The OMR software reads marked bubbles, extracts data, and flags any discrepancies or multiple markings."
    },
    {
      icon: "✅",
      title: "Result Processing",
      description: "Apply custom marking logic (including negative marking, optional questions, etc.) and calculate scores."
    },
    {
      icon: "📊",
      title: "Report Generation & Export",
      description: "Generate detailed scorecards, rankings, analytics, and export results in Excel, PDF, or other formats."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#1a498b]">
          OMR Sheet Scanning to Result Generation: How It's Done
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Power Your Evaluations with a Fast, Accurate & Scalable OMR Processing System
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500"
              alt="OMR Scanning Process"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-3xl flex-shrink-0">{step.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a498b] mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      question: "What is OMR Scanning and how does it work?",
      answer: "OMR Scanning is a process that reads marked bubbles on OMR sheets using software or scanners. It extracts data and processes results for exams, surveys, and feedback forms with high accuracy."
    },
    {
      question: "Can we get a free demo of your OMR Scanning solution?",
      answer: "Yes, we offer free demos to help you understand our OMR scanning capabilities and features."
    },
    {
      question: "How fast can OMR sheets be processed?",
      answer: "Our high-speed scanners can process thousands of OMR sheets per hour, significantly reducing manual workload."
    },
    {
      question: "Can we generate reports and result analysis?",
      answer: "Yes, our system generates detailed scorecards, merit lists, rankings, and performance analytics instantly."
    },
    {
      question: "Can the software handle negative marking and optional questions?",
      answer: "Absolutely! Our software supports negative marking, optional questions, sectional scoring, and custom evaluation rules."
    },
    {
      question: "Is the data secure?",
      answer: "Yes, we use ISO-certified systems with encrypted workflows to ensure complete data security and compliance."
    },
    {
      question: "Can we use the software for feedback forms or surveys?",
      answer: "Yes, our OMR solution is perfect for exams, surveys, feedback forms, and various assessment types."
    },
    {
      question: "What file formats are supported for exporting results?",
      answer: "Results can be exported in Excel, PDF, and other popular formats for easy sharing and record-keeping."
    },
    {
      question: "Why should I choose Multigraphics over other agencies?",
      answer: "With over 25 years of expertise, we provide accurate, secure, scalable solutions trusted by leading institutions."
    }
  ];

  const visibleFAQs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a498b]">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {visibleFAQs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-semibold text-gray-800">{index + 1}. {faq.question}</span>
                <span className="text-2xl text-[#1a498b]">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-50 border-t">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        {!showAll && faqs.length > 5 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="bg-[#1a498b] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}