// ConfidentialPrinting.js
import React from "react";

export default function ConfidentialPrinting() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section
        className="pt-10 pb-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/5133768.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/35"></div>

        <div className="relative max-w-7xl mx-auto flex justify-end">
          {/* Much Bigger Right Content Box */}
          <div className="max-w-2xl min-h-[70vh] bg-white/95 backdrop-blur-md 
                      rounded-3xl shadow-2xl p-10 md:p-12 flex flex-col justify-center">
            <h1
              className="text-4xl md:text-5xl font-extrabold leading-tight mb-8"
              style={{ color: "#1a498b" }}
            >
              Secure & Confidential Printing Solutions for Exams, Government & Corporate Needs
            </h1>

            <p className="text-xl leading-relaxed mb-10 font-medium text-gray-800">
              Delivering high-security printing of question papers, OMR sheets, ballot papers, and more with tamper-proof technology, custom packaging, and end-to-end data confidentiality. Serving universities, government bodies, recruitment agencies, and corporates across India with ISO certified, foolproof secure printing.
            </p>

            <button className="bg-[#FF7A1A] text-white px-4 py-2 rounded-full 
                           text-lg font-semibold shadow-lg hover:shadow-xl 
                           transition transform hover:scale-105 w-max">
              Get Started for Free
            </button>
          </div>
        </div>
      </section>

      {/* Key Confidential Printing Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span style={{ color: "#1a498b" }}>Key Confidential</span>
              <br />
              <span className="text-[#FF7A1A]">Printing Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Discover the key features that ensure secure, tamper-proof, and confidential
              printing. From encrypted file handling to custom packaging and delivery
              tracking — everything is managed with end-to-end protection.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* OMR Sheet Printing */}
            <div className="bg-teal-700 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#FF7A1A] p-3 rounded-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">OMR Sheet Printing</h3>
                  <p className="text-white/90">
                    High-precision, scannable OMR sheets for exams and surveys, available
                    in customizable formats.
                  </p>
                </div>
              </div>
            </div>

            {/* Question Paper Printing */}
            <div className="bg-teal-700 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#FF7A1A] p-3 rounded-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Question Paper Printing & Packaging</h3>
                  <p className="text-white/90">
                    Secure question paper printing with barcode tracking, unique coding,
                    and tamper-evident packaging.
                  </p>
                </div>
              </div>
            </div>

            {/* Ballot Paper */}
            <div className="bg-teal-700 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#FF7A1A] p-3 rounded-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Ballot Paper & Document Printing</h3>
                  <p className="text-white/90">
                    High-security printing for elections, including ballot papers, voter slips,
                    and ID documents.
                  </p>
                </div>
              </div>
            </div>

            {/* Admit Card */}
            <div className="bg-teal-700 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#FF7A1A] p-3 rounded-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Admit Card & Certificate Printing</h3>
                  <p className="text-white/90">
                    Personalized admit cards, hall tickets, and certificates with advanced
                    security features like QR codes and microtext.
                  </p>
                </div>
              </div>
            </div>

            {/* Secure Packaging */}
            <div className="bg-teal-700 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#FF7A1A] p-3 rounded-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Secure Packaging & Logistics</h3>
                  <p className="text-white/90">
                    Custom sealing, secure dispatch, and real-time tracking to ensure safe,
                    on-time delivery of sensitive documents.
                  </p>
                </div>
              </div>
            </div>

            {/* Barcode & Variable Data */}
            <div className="bg-teal-700 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#FF7A1A] p-3 rounded-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Barcode & Variable Data Printing</h3>
                  <p className="text-white/90">
                    Print jobs with dynamic data, unique IDs, and security patterns to
                    prevent duplication and unauthorized access.
                  </p>
                </div>
              </div>
            </div>

            {/* Degree Printing */}
            <div className="bg-teal-700 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#FF7A1A] p-3 rounded-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Degree Printing</h3>
                  <p className="text-white/90">
                    Secure degree printing with holograms, QR codes, and anti-counterfeit
                    features for guaranteed authenticity.
                  </p>
                </div>
              </div>
            </div>

            {/* Marksheet Printing */}
            <div className="bg-teal-700 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#FF7A1A] p-3 rounded-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Marksheet Printing</h3>
                  <p className="text-white/90">
                    Tamper-proof marksheets with barcodes, holograms, and secure data
                    for verified academic records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Confidential Printing Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#1a498b" }}>
              How Our Confidential Printing Process Ensures 100% Security
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ensure Exam Integrity with Secure, Confidential & Scalable Printing Services
            </p>
          </div>

          {/* Process Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-700 p-4 rounded-2xl mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="absolute top-0 right-0 text-9xl font-bold text-gray-200 -z-10">1</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#1a498b" }}>
                  Requirement Analysis & NDA Signing
                </h3>
                <p className="text-gray-600">
                  We understand your document security needs and sign a Non-Disclosure Agreement (NDA) to initiate a confidential partnership.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-700 p-4 rounded-2xl mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="absolute top-0 right-0 text-9xl font-bold text-gray-200 -z-10">2</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#1a498b" }}>
                  Secure File Submission
                </h3>
                <p className="text-gray-600">
                  Clients upload encrypted files via our secure file transfer system with role-based access control.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-700 p-4 rounded-2xl mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="absolute top-0 right-0 text-9xl font-bold text-gray-200 -z-10">3</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#1a498b" }}>
                  Pre-Press Document Setup
                </h3>
                <p className="text-gray-600">
                  Content is formatted and coded using barcode generation, QR integration, and variable data setup under strict supervision.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-700 p-4 rounded-2xl mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                </div>
                <div className="absolute top-0 right-0 text-9xl font-bold text-gray-200 -z-10">4</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#1a498b" }}>
                  Confidential Printing & Finishing
                </h3>
                <p className="text-gray-600">
                  Documents are printed in biometric-secured zones with surveillance, then processed with tamper-proof finishing (e.g., microtext, seals).
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-700 p-4 rounded-2xl mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="absolute top-0 right-0 text-9xl font-bold text-gray-200 -z-10">5</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#1a498b" }}>
                  Secure Packaging & Dispatch
                </h3>
                <p className="text-gray-600">
                  Materials are packed in tamper-evident packets, labeled with unique codes, and sealed with tracking-enabled dispatch.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-700 p-4 rounded-2xl mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div className="absolute top-0 right-0 text-9xl font-bold text-gray-200 -z-10">6</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#1a498b" }}>
                  Delivery & Tracking
                </h3>
                <p className="text-gray-600">
                  Real-time tracking is shared with the client, and documents are delivered through GPS-monitored logistics partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From File to Delivery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#1a498b" }}>
                From File to Delivery: What Sets Our Confidential Printing Apart
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                See how we deliver tamper-proof printing with complete confidentiality. Secure, compliant, and traceable from file upload to final dispatch.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&auto=format" 
                alt="Secure Printing" 
                className="rounded-2xl shadow-xl"
              />
            </div>

            {/* Right Content - Features List */}
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "#1a498b" }}>
                    ISO-Certified Secure Printing Facility
                  </h3>
                  <p className="text-gray-600">
                    Controlled access zones with 24/7 surveillance, biometric entry, and CCTV monitoring.
                  </p>
                </div>
              </div>

              <hr className="border-gray-300" />

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "#1a498b" }}>
                    Tamper-Proof Printing & Packaging
                  </h3>
                  <p className="text-gray-600">
                    Documents are printed with security inks, microtext, QR codes, and tamper-evident seals.
                  </p>
                </div>
              </div>

              <hr className="border-gray-300" />

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "#1a498b" }}>
                    End-to-End Confidentiality
                  </h3>
                  <p className="text-gray-600">
                    From encrypted file transfers to secure dispatch, we maintain data integrity at every step.
                  </p>
                </div>
              </div>

              <hr className="border-gray-300" />

              {/* Feature 4 */}
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "#1a498b" }}>
                    Barcode & Variable Data Printing
                  </h3>
                  <p className="text-gray-600">
                    Every sheet is uniquely identifiable to prevent duplication or unauthorized usage.
                  </p>
                </div>
              </div>

              <hr className="border-gray-300" />

              {/* Feature 5 */}
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "#1a498b" }}>
                    Custom Print Formats & Sizes
                  </h3>
                  <p className="text-gray-600">
                    Tailored to the needs of universities, boards, recruitment agencies, and corporate testing.
                  </p>
                </div>
              </div>

              <hr className="border-gray-300" />

              {/* Feature 6 */}
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "#1a498b" }}>
                    Real-Time Monitoring & Tracking
                  </h3>
                  <p className="text-gray-600">
                    Live updates and tracking of print, pack, and dispatch processes ensure accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}