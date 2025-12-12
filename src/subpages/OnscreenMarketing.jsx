// ConfidentialPrinting.js
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Cloud,
  MonitorCheck,
  Users,
  Shield,
  Workflow,
  Calculator,
  FileScan,
  Lock,
} from "lucide-react";

const faqs = [
  {
    q: "How is it different from traditional paper-based evaluation?",
    a: "Unlike manual evaluation, onscreen marking eliminates physical handling of scripts, reduces logistical delays, improves accuracy, and allows remote evaluation from anywhere.",
  },
  {
    q: "Is it suitable for evaluating subjective answer sheets?",
    a: "Yes, onscreen marking is ideal for subjective and descriptive answers. Evaluators can add comments, annotations, and marks directly on scanned copies of answer sheets.",
  },
  {
    q: "Is student information kept confidential during evaluation?",
    a: "Absolutely. The system uses digital masking to hide student identities, ensuring unbiased and anonymous evaluation.",
  },
  {
    q: "Can evaluators work remotely using this system?",
    a: "Yes. Evaluators can securely log in from any location and evaluate scripts assigned to them, making it highly convenient and scalable.",
  },
  {
    q: "How secure is the onscreen marking platform?",
    a: "Pk Solution system follows strict data security protocols with end-to-end encryption, role-based access, and auto backup, ensuring full protection of evaluation data.",
  },
  {
    q: " How long does implementation take?",
    a: "Deployment depends on the size of the institution, but the system can typically be set up within 5–7 working days, including training and testing.",
  },
  {
    q: "Does the system support moderation and re-evaluation?",
    a: "Yes. It allows multi-level workflows including moderation by senior evaluators, re-checking, and quality audits.",
  },
  {
    q: "Can this system be integrated with our result processing software?",
    a: "Yes, Pk Solution platform supports easy integration via APIs with most result processing or ERP systems.",
  },
  {
    q: "9. Who can use this system?",
    a: "The solution is ideal for universities, colleges, education boards, government exam bodies, and private assessment agencies conducting large-scale subjective evaluations.",
  },
];
const services = [
  {
    title: "Cloud-Based Platform",
    desc: "Access the system anytime, anywhere with secure cloud hosting and centralized data management.",
    icon: <Cloud className="w-10 h-10 text-[#1a498b]" />,
  },
  {
    title: "Real-Time Monitoring Dashboard",
    desc: "Track the status of evaluation, performance of evaluators, and live report generation with ease.",
    icon: <MonitorCheck className="w-10 h-10 text-[#1a498b]" />,
  },
  {
    title: "Role-Based User Access",
    desc: "Define roles for evaluators, moderators, admin controllers, and more with activity tracking.",
    icon: <Users className="w-10 h-10 text-[#1a498b]" />,
  },
  {
    title: "Digital Masking of Student Identity",
    desc: "Ensure unbiased evaluation by automatically hiding student names and roll numbers from evaluators.",
    icon: <Shield className="w-10 h-10 text-[#1a498b]" />,
  },
  {
    title: "Multi-Level Evaluation Workflow",
    desc: "Supports chief examiners, moderators, re-evaluation, and escalation levels for quality assurance.",
    icon: <Workflow className="w-10 h-10 text-[#1a498b]" />,
  },
  {
    title: "Auto-Totalling and Annotations",
    desc: "Built-in tools for automatic mark calculation, comments, and highlighting help reduce human error.",
    icon: <Calculator className="w-10 h-10 text-[#1a498b]" />,
  },
  {
    title: "Compatible with Multiple Formats",
    desc: "Supports scanned scripts in PDF, JPEG, TIFF, and integrates with document scanning systems.",
    icon: <FileScan className="w-10 h-10 text-[#1a498b]" />,
  },
  {
    title: "Auto-Backup & Data Encryption",
    desc: "All data is securely encrypted and automatically backed up to prevent any loss or breach.",
    icon: <Lock className="w-10 h-10 text-[#1a498b]" />,
  },
];

export default function OnscreenMarketing() {
      const [openIndex, setOpenIndex] = useState(null);
      const [showMore, setShowMore] = useState(false);
    
        const visibleFaqs = showMore ? faqs : faqs.slice(0, 4);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* 1st section */}
      <section
        className="pt-10 pb-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/colleagues-preparing-business-strategies.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative w-full flex justify-center">
          {/* Center Content Box */}
          <div
            className="w-full max-w-xl sm:max-w-2xl 
                 bg-white/95 backdrop-blur-md rounded-2xl 
                 shadow-xl p-6 sm:p-8 md:p-10 
                 text-center flex flex-col items-center"
          >
            <h1
              className="text-2xl sm:text-3xl md:text-4xl 
                   font-extrabold leading-snug mb-5"
              style={{ color: "#1a498b" }}
            >
              Onscreen Marking System for Digital Evaluation of Answer Sheets
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl 
                    leading-relaxed mb-6 font-medium text-gray-800"
            >
              Speed up exam result processing with Pk Solution secure and
              AI-powered onscreen evaluationsoftware — trusted by universities,
              examination boards, and government institutions across India.Say
              goodbye to manual checking delays and errors.
            </p>

            <Link
              to="/services"
              className="bg-orange-600  text-white px-6 py-3 rounded-full 
                   text-base sm:text-lg font-bold shadow-lg 
                   hover:shadow-xl transition transform hover:scale-105"
            >
              Get Started for Free
            </Link>
          </div>
        </div>
      </section>

      {/* 2nd section */}
      <WhatIsOMR />

      {/* 3rd Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
              <h2
                className="text-3xl md:text-4xl font-extrabold leading-tight"
                style={{ color: "#1a498b" }}
              >
                Advantages of Using
                <span className="block mt-1 text-[#FF7A1A]">
                  Onscreen Marking System
                </span>
              </h2>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
                Transforming Manual Evaluation into a Digital, Error-Free
                Process
              </p>

              <div className="w-full flex justify-center md:justify-start">
                <img
                  src="/advantage.webp"
                  alt="Secure Printing"
                  className="rounded-xl shadow-xl border border-gray-200 hover:scale-105 transition-transform duration-300 max-w-full"
                />
              </div>
            </div>

            {/* RIGHT CONTENT (FEATURE LIST) */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Faster Result Processing",
                  text: "Digitally evaluated scripts mean no physical transportation delays, enabling quicker result declaration.",
                },
                {
                  title: "Enhanced Accuracy",
                  text: "Auto-totalling, comment tools, and real-time checks eliminate manual errors in marking.",
                },
                {
                  title: "Complete Transparency",
                  text: "Digital masking of student details ensures unbiased evaluation, while audit logs record every action.",
                },
                {
                  title: "Anywhere, Anytime Evaluation",
                  text: "Examiners can access the online marking platform remotely, improving convenience and flexibility.",
                },
                {
                  title: "Multi-Level Moderation",
                  text: "Support for multiple reviewers, chief examiners, and re-evaluation workflows — all in one system.",
                },
                {
                  title: "Real-Time Monitoring & Reports",
                  text: "Admins and controllers can track evaluation status live and generate customizable reports.",
                },
                {
                  title: "Secure & ConfidentialCost-Effective & Eco-Friendly",
                  text: "No need for physical copies, travel, or manual logistics — reducing cost and paper usage significantly.",
                },
                {
                  title: "Secure and Scalable",
                  text: "Built with enterprise-grade security and flexible enough to support thousands of scripts simultaneously.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#1a498b] text-white rounded-xl p-6 flex flex-col items-center text-center shadow-lg"
                >
                  {/* Heading */}
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>

                  {/* Paragraph */}
                  <p className="text-white/90 text-sm leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4th section */}


      <div className="bg-[#1a498b] p-6 rounded-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="p-5 text-center flex flex-col items-center gap-3">
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-orange-600 rounded-full">
                  <div className="text-white">{item.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-[#1a498b] mt-3">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
{/* 5th section */}

      {/* From File to Delivery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
              <h2
                className="text-3xl md:text-4xl font-extrabold leading-tight"
                style={{ color: "#1a498b" }}
              >
                From Scanning

                <span className="block mt-1 text-[#FF7A1A]">
                  to Result:
How Onscreen Marking Works

                </span>
              </h2>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
               Understand how our platform transforms answer sheet evaluation.
Fast, accurate, and fully trackable — from scan to score.


              </p>

              <div className="w-full flex justify-center md:justify-start">
                <img
                  src="/working.webp"
                  alt="Secure Printing"
                  className="rounded-xl shadow-xl border border-gray-200 hover:scale-105 transition-transform duration-300 max-w-full"
                />
              </div>
            </div>

            {/* RIGHT CONTENT (FEATURE LIST) */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Scanning of Answer Sheets ",

                  text: "Answer booklets are scanned using high-speed scanners and converted into secure digital files (PDF/JPEG). Each script is tagged with a unique ID.",
                },
                {
                  title: "Secure Upload to the Evaluation Platform",
                  text: "Scanned copies are uploaded to the cloud-based onscreen evaluation portal, where access is restricted and encrypted.",
                },
                {
                  title: "Allocation to Evaluators",
                  text: "Scripts are auto-assigned to registered evaluators with masked student identities to ensure fair and unbiased checking.",
                },
                {
                  title: "Digital Evaluation & Marking",
                  text: "Evaluators log in and digitally mark the answer sheets using annotation tools, comment boxes, and auto-totalling features.",
                },
                {
                  title: "Moderation & Quality Review",

                  text: "Scripts can go through chief examiners or moderators for cross-checking and second-level reviews to maintain marking accuracy.",
                },
                {
                  title: "Marks Extraction & Report Generation",
                  text: "Once evaluated, marks are auto-calculated and exported into result processing systems. Reports can be generated in various formats instantly.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#1a498b] text-white rounded-xl p-6 flex flex-col items-center text-center shadow-lg"
                >
                  {/* Heading */}
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>

                  {/* Paragraph */}
                  <p className="text-white/90 text-sm leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6th Section */}

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
              A Smarter, Faster, and More Transparent Way to Evaluate Answer
              Sheets
            </h2>

            <p className="text-lg mb-4" style={{ color: "black" }}>
              Onscreen Marking is a secure, digital method of evaluating scanned
              answer scripts using an online evaluation platform. Instead of
              physically handling paper copies, evaluators log in to a secure
              portal and assess scripts on-screen — enabling remote evaluation,
              real-time tracking, and faster result processing.
            </p>

            <p className="text-lg mb-4" style={{ color: "black" }}>
              Pk Solution Onscreen Evaluation System eliminates manual errors,
              reduces time taken in logistics, and ensures confidentiality
              through masking of student details. It's widely used by
              universities, examination boards, and government organizations to
              streamline their assessment process.
            </p>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <img
                src="/Rectangle.webp"
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
