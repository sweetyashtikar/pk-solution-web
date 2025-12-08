// DigitalMarketing.js
import React from "react";

export default function DigitalMarketing() {
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
              Secure & Confidential Printing Solutions for Exams, Government & Corporate Needs       </h1>

            <p className="text-xl leading-relaxed mb-10 font-medium text-gray-800">
              Delivering high-security printing of question papers, OMR sheets, ballot papers, and more with tamper-proof technology, custom packaging, and end-to-end data confidentiality. Serving universities, government bodies, recruitment agencies, and corporates across India with ISO certified, foolproof secure printing.        </p>

            <button className="bg-[#FF7A1A] text-white px-4 py-2 rounded-full 
                       text-lg font-semibold shadow-lg hover:shadow-xl 
                       transition transform hover:scale-105 w-max">
              Get Started for Free
            </button>

          </div>
        </div>
      </section>
    </div>
  );
}
