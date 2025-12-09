// ConfidentialPrinting.js
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
const faqs = [
  {
    q: "How does Multigraphics ensure document security?",
    a: "We operate from ISO-certified secure facilities with biometric access controls, CCTV surveillance, and data encryption protocols throughout the printing and dispatch workflow to ensure complete confidentiality.",
  },
  {
    q: "Can I send files securely for printing?",
    a: "Yes. We provide a secure file transfer system with role-based access and encrypted data handling, ensuring all files remain confidential from submission to delivery.",
  },
  {
    q: "What types of documents can you print securely?",
    a: "We specialize in printing OMR sheets, question papers, admit cards, certificates, ballot papers, recruitment materials, and other confidential corporate or academic documents.",
  },
  {
    q: "Do you offer pan-India delivery?",
    a: "Absolutely. We provide secure packaging and real-time GPS tracking for reliable delivery to examination centers, government institutions, and corporate offices across India.",
  },
  {
    q: "Is barcode and variable data printing available?",
    a: "Yes. We offer barcode, QR code, and variable data printing to personalize and track every document, ensuring accuracy and traceability.",
  },
  {
    q: "How fast can you print and deliver confidential documents?",
    a: "Turnaround time varies by volume and customization level. However, we specialize in quick, secure delivery without compromising on quality or safety.",
  },
  {
    q: "Who are your typical clients?",
    a: "Our clients include universities, government departments, election commissions, PSUs, recruitment boards, and corporate institutions with high-security requirements.",
  },
  {
    q: "Is an NDA required before starting the project?",
    a: "Yes. Every confidential printing engagement begins with a Non-Disclosure Agreement (NDA) to ensure trust and formalize data protection protocols.",
  },
  {
    q: "How can I get a quote?",
    a: "You can contact us directly or request a secure printing quote through our website form or customer support channels.",
  },
];

const steps = [
  {
    number: "1",
    icon: (
      <svg
        className="w-8 h-8 text-white"
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
    title: "Requirement Analysis & NDA Signing",
    description:
      "We understand your document security needs and sign a Non-Disclosure Agreement (NDA) to initiate a confidential partnership.",
  },
  {
    number: "2",
    icon: (
      <svg
        className="w-8 h-8 text-white"
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
    title: "Secure File Submission",
    description:
      "Clients upload encrypted files via our secure file transfer system with role-based accesscontrol.",
  },
  {
    number: "3",
    icon: (
      <svg
        className="w-8 h-8 text-white"
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
    title: "Pre-Press Document Setup",
    description:
      "Content is formatted and coded using barcode generation, QR integration, and variable data setup under strict supervision.",
  },
  {
    number: "4",
    icon: (
      <svg
        className="w-8 h-8 text-white"
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
    title: "Confidential Printing & Finishing",
    description:
      "Documents are printed in biometric-secured zones with surveillance, then processed withtamper-proof finishing (e.g., microtext, seals).",
  },
  {
    number: "5",
    icon: (
      <svg
        className="w-8 h-8 text-white"
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
    title: "Secure Packaging & Dispatch",
    description:
      "Materials are packed in tamper-evident packets, labeled with unique codes, and sealed with tracking-enabled dispatch",
  },
  {
    number: "6",
    icon: (
      <svg
        className="w-8 h-8 text-white"
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
    title: "Delivery & Tracking",
    description:
      "Real-time tracking is shared with the client, and documents are delivered through GPS-monitored logistics partners.",
  },
];

export default function ConfidentialPrinting() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const visibleFaqs = showMore ? faqs : faqs.slice(0, 4);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section
        className="pt-10 pb-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
        style={{ backgroundImage: "url('/5133768.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/35"></div>

        <div className="relative w-full flex justify-center">
          {/* Centered Content Box */}
          <div
            className="max-w-3xl min-h-[50vh] bg-white/95 backdrop-blur-md 
      rounded-3xl shadow-2xl p-10 md:p-12 
      flex flex-col items-center text-center justify-center"
          >
            <h1
              className="text-3xl md:text-4xl font-extrabold leading-tight mb-8"
              style={{ color: "#1a498b" }}
            >
              Secure & Confidential Printing Solutions for Exams, Government &
              Corporate Needs
            </h1>

            <p className="text-xl leading-relaxed mb-6 font-medium text-gray-800">
              Delivering high-security printing of question papers, OMR sheets,
              ballot papers, and more with tamper-proof technology, custom
              packaging, and end-to-end data confidentiality. Serving
              universities, government bodies, recruitment agencies, and
              corporates across India with ISO certified secure printing.
            </p>

            <button
              className="bg-[#FF7A1A] text-white px-6 py-3 rounded-full 
        text-lg font-semibold shadow-lg hover:shadow-xl 
        transition transform hover:scale-105"
            >
              Get Started for Free
            </button>
          </div>
        </div>
      </section>

      {/* Key Confidential Printing Services Section */}
      <section className="py-12 px-6 flex flex-col items-center text-center">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
              <span style={{ color: "#1a498b" }}>Key Confidential</span>
              <br />
              <span className="text-[#1a498b]">Printing Services</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center font-bold">
              Discover the key features that ensure secure, tamper-proof, and
              confidential printing. From encrypted file handling to custom
              packaging and delivery tracking — everything is managed with
              end-to-end protection.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* OMR Sheet Printing */}
            <div
              className="rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow text-center"
              style={{ backgroundColor: "#1a498b" }}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="bg-[#FF7A1A] p-3 rounded-lg">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold">OMR Sheet Printing</h3>

                <p className="text-white/90">
                  High-precision, scannable OMR sheets for exams and surveys,
                  available in customizable formats.
                </p>
              </div>
            </div>

            {/* Question Paper Printing */}
            <div
              className="rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow text-center"
              style={{ backgroundColor: "#1a498b" }}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="bg-[#FF7A1A] p-3 rounded-lg">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold">
                  Question Paper Printing & Packaging
                </h3>

                <p className="text-white/90">
                  Secure question paper printing with barcode tracking, unique
                  coding, and tamper-evident packaging.
                </p>
              </div>
            </div>

            {/* Ballot Paper */}
            <div
              className="rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow text-center"
              style={{ backgroundColor: "#1a498b" }}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="bg-[#FF7A1A] p-3 rounded-lg">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold">
                  Ballot Paper & Document Printing
                </h3>

                <p className="text-white/90">
                  High-security printing for elections, including ballot papers,
                  voter slips, and ID documents.
                </p>
              </div>
            </div>

            {/* Admit Card */}
            <div
              className="rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow text-center"
              style={{ backgroundColor: "#1a498b" }}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="bg-[#FF7A1A] p-3 rounded-lg">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold">
                  Admit Card & Certificate Printing
                </h3>

                <p className="text-white/90">
                  Personalized admit cards, hall tickets, and certificates with
                  advanced security features like QR codes and microtext.
                </p>
              </div>
            </div>

            {/* Secure Packaging */}
            <div
              className="rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow text-center"
              style={{ backgroundColor: "#1a498b" }}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="bg-[#FF7A1A] p-3 rounded-lg">
                  <svg
                    className="w-10 h-10"
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
                </div>

                <h3 className="text-2xl font-bold">
                  Secure Packaging & Logistics
                </h3>

                <p className="text-white/90">
                  Custom sealing, secure dispatch, and real-time tracking to
                  ensure safe, on-time delivery of sensitive documents.
                </p>
              </div>
            </div>

            {/* Barcode & Variable Data */}
            <div
              className="rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow text-center"
              style={{ backgroundColor: "#1a498b" }}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="bg-[#FF7A1A] p-3 rounded-lg">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold">
                  Barcode & Variable Data Printing
                </h3>

                <p className="text-white/90">
                  Print jobs with dynamic data, unique IDs, and security
                  patterns to prevent duplication.
                </p>
              </div>
            </div>

            {/* Degree Printing */}
            <div
              className="rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow text-center"
              style={{ backgroundColor: "#1a498b" }}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="bg-[#FF7A1A] p-3 rounded-lg">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold">Degree Printing</h3>

                <p className="text-white/90">
                  Secure degree printing with holograms, QR codes, and
                  anti-counterfeit features.
                </p>
              </div>
            </div>

            {/* Marksheet Printing */}
            <div
              className="rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow text-center"
              style={{ backgroundColor: "#1a498b" }}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="bg-[#FF7A1A] p-3 rounded-lg">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold">Marksheet Printing</h3>

                <p className="text-white/90">
                  Tamper-proof marksheets with barcodes, holograms, and secure
                  verified records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Confidential Printing Process Section */}
      <section
        className="py-12 px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(135deg, #48B1E4 0%, #1B3376 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl font-bold mb-6 text-white">
              How Our Confidential Printing Process Ensures 100% Security
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Ensure Exam Integrity with Secure, Confidential & Scalable
              Printing Services
            </p>
          </div>

          {/* Process Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-start text-left">
                  {/* Icon with background */}
                  <div className="bg-orange-600 p-4 rounded-2xl mb-4 relative z-10">
                    {step.icon}
                  </div>

                  {/* Large background number */}
                  <div className="absolute top-0 right-0 text-[100px] font-bold text-[#E8E8E8] opacity-20 leading-none select-none pointer-events-none">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-white relative z-10">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-200 text-sm relative z-10">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From File to Delivery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <h2
                className="text-3xl md:text-4xl font-extrabold leading-tight"
                style={{ color: "#1a498b" }}
              >
                From File to Delivery:
                <span className="block mt-1 text-[#FF7A1A]">
                  What Sets Our Confidential Printing Apart
                </span>
              </h2>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Experience tamper-proof, secure, and confidential printing with
                complete tracking — from encrypted file upload to sealed
                dispatch.
              </p>

              <img
                src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&auto=format"
                alt="Secure Printing"
                className="rounded-xl shadow-xl border border-gray-200 hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* RIGHT CONTENT (FEATURE LIST) */}
            <div className="space-y-8">
              {/* Feature Reusable Block */}
              {[
                {
                  title: "ISO-Certified Secure Printing Facility",
                  text: "Controlled access zones with CCTV surveillance, biometric entry, and strict monitoring.",
                },
                {
                  title: "Tamper-Proof Printing & Packaging",
                  text: "Security inks, QR codes, microtext, and sealed packets ensure authenticity.",
                },
                {
                  title: "End-to-End Confidentiality",
                  text: "Encrypted transfers, restricted access, and secure logistics at every step.",
                },
                {
                  title: "Barcode & Variable Data Printing",
                  text: "Each sheet receives a unique identity code for tracking and security.",
                },
                {
                  title: "Custom Print Formats & Sizes",
                  text: "Designed for universities, recruitment boards, corporate testing, and more.",
                },
                {
                  title: "Real-Time Monitoring & Tracking",
                  text: "Live status of printing, sealing, and dispatch ensures transparency.",
                },
              ].map((feature, index) => (
                <div key={index}>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#1a498b] rounded-full mt-2"></div>
                    <div>
                      <h3
                        className="text-xl font-bold mb-1"
                        style={{ color: "#1a498b" }}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-[15px] leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  </div>

                  {/* Divider except after last item */}
                  {index !== 5 && <hr className="border-gray-300" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Our Confidential Printing Process Section */}
      <section
        className="py-12 px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(135deg, #48B1E4 0%, #1B3376 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-4xl font-bold mb-8 text-white">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {visibleFaqs.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md">
                <button
                  className="w-full flex justify-between items-center px-5 py-4 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {index + 1}. {item.q}
                  </span>

                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#1B3376]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#1B3376]" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-5 pb-4 text-gray-700 text-base leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {!showMore && faqs.length > 4 && (
            <div className="text-center mt-5">
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
            <div className="text-center mt-5">
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
      <div className="w-full bg-gray-100 py-20 flex flex-col items-center text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a498b] mb-6">
          Need Secure & Reliable Examination Services?
        </h2>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed mb-10">
          Connect with us to discuss how we can support your institution with
          end-to-end exam management—from confidential printing to complete
          result processing.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-orange-600 hover:bg-orange-600 text-white font-semibold text-lg px-6 py-3 rounded-lg transition">
            Join Us
          </button>

          <button className="bg-orange-600 hover:bg-orange-600 text-white font-semibold text-lg px-6 py-3 rounded-lg transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
