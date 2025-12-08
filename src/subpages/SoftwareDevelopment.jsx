// SoftwareDevelopment.js
import React from "react";

export default function SoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section
        className="pt-10 pb-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/5133768.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/35"></div>

        <div className="relative max-w-7xl mx-auto flex justify-start">
          {/* Smaller Right Content Box */}
          <div
            className="max-w-xl min-h-[40vh] bg-white/95 backdrop-blur-md 
               rounded-3xl shadow-2xl p-8 md:p-10 flex flex-col justify-center"
          >
            <h1
              className="text-xl md:text-3xl font-extrabold leading-tight mb-6"
              style={{ color: "#1a498b" }}
            >
              Transform Your Business with Smart Software Solutions
            </h1>

            <p className="text-lg leading-relaxed mb-8 font-medium text-gray-800">
              We build software that’s not just functional — it’s
              transformative. From custom enterprise tools to scalable SaaS
              platforms, Multigraphics delivers solutions that streamline
              operations and drive growth.
            </p>

            <button
              className="bg-[#FF7A1A] text-white px-4 py-2 rounded-full 
                 text-lg font-semibold shadow-lg hover:shadow-xl 
                 transition transform hover:scale-105 w-max"
            >
              Get Started for Free
            </button>
          </div>
        </div>
      </section>

      {/* What is Online Exam Section */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(to bottom right, #e7f1f5, #d0e2e8)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img
                src="/about-development.webp"
                alt="Exam Interface"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-4">
              <div
                className="text-xs font-semibold uppercase tracking-wide"
                style={{ color: "#1a498b" }}
              >
                About us
              </div>
              <h2 className="text-3xl font-bold" style={{ color: "#1a498b" }}>
                High-Performance, Custom-Built Softwares That Drive Business
                Growth
              </h2>
              <p className="text-sm" style={{ color: "#1a498b" }}>
                With over 20 years of experience in technology and innovation,
                we have empowered 1000+ clients across diverse industries with
                dynamic, high-performance websites tailored to their goals
                
              </p>
              <p className="text-sm" style={{ color: "#1a498b" }}>
                Whether you're a startup looking for an impressive online debut, an educational institution needing a student portal, or a brand aiming to scale through e-commerce — our team combines creativity, code, and strategy to deliver measurable impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
