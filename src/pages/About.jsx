import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 opacity-60 z-0"
          style={{
            backgroundImage:
              "url(/woman-typing-computer-chatting-with-ai-assistant.jpg)",
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
                Welcome to PK Solutions — Where Excellence Meets Examination
                Services
              </p>

              <h1 className="text-gray-500 text-lg font-bold leading-relaxed mb-6">
                At PK Solutions, we support institutions with reliable, secure,
                and high-quality examination and assessment solutions. Our goal
                is to simplify and strengthen the complete exam lifecycle
                through accuracy, confidentiality, and professional execution.
              </h1>

              <button
                className="bg-orange-600 hover:bg-orange-600 text-white font-bold 
text-base px-4 py-2 rounded-lg transition mr-8"
              >
                EXPLOR OUR SERVICES
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-10">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-[#1a498b] text-6xl font-bold mb-0 text-center">
              Our Mission & Vision
            </h2>
            <p className="text-gray-800 text-xl leading-relaxed max-w-6xl mx-auto text-center font-bold">
              At PK Solutions, we are driven by purpose and guided by long-term
              impact, reshaping education and assessment through technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column – Text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {[
                {
                  title: "Who We Are",
                  desc: "A tech-driven company delivering LMS, OMR, and digital platforms that simplify education, training, and assessment.",
                },
                {
                  title: "What Do We Do",
                  desc: "We strive to make learning accessible and efficient through secure solutions that empower institutions and learners.",
                },
                {
                  title: "How Do We Help",
                  desc: "From OMR evaluation to training portals and automation tools, we help you digitize with precision and purpose.",
                },
                {
                  title: "What We Aim For",
                  desc: "To become the most trusted EdTech and assessment partner enabling a smarter, connected future for workforce development.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-lg shadow-lg text-center bg-[#1a498b] text-white"
                >
                  <svg
                    className="mx-auto mb-3 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    width={32}
                    height={32}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>

                  <h3 className="text-white text-2xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-white text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column – Image Grid */}
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                  className="w-full h-56 object-cover"
                  alt="Students learning"
                />
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500"
                  className="w-full h-36 object-cover"
                  alt="Digital learning"
                />
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500"
                  className="w-full h-36 object-cover"
                  alt="Assessment tools"
                />
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500"
                  className="w-full h-36 object-cover"
                  alt="Team collaboration"
                />
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500"
                  className="w-full h-36 object-cover"
                  alt="Partnership"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="py-12 bg-[#1a498b]">
        <div className="max-w-7xl mx-auto px-3">
          {/* Team Icon and Title */}
          <div className="flex flex-col items-center mb-8">
           <div className="mb-6">
  <svg
    className="w-32 h-32"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d="M32 12a8 8 0 0 1 8 8c0 4-3 7-6 7s-6-3-6-7a8 8 0 0 1 8-8z"
      stroke="#3AC9C9"
      strokeWidth="3"
      fill="none"
    />
    <path d="M32 20v6" stroke="#000" />
    <path d="M28 26h8" stroke="#000" />

    <line x1="32" y1="6" x2="32" y2="2" stroke="#000" />
    <line x1="26" y1="8" x2="23" y2="4" stroke="#000" />
    <line x1="38" y1="8" x2="41" y2="4" stroke="#000" />

    <circle cx="14" cy="44" r="9" stroke="#000" />
    <circle cx="32" cy="44" r="9" stroke="#000" />
    <circle cx="50" cy="44" r="9" stroke="#000" />

    <path d="M5 55h18" stroke="#000" strokeWidth="2.5" />
    <path d="M23 55h18" stroke="#000" strokeWidth="2.5" />
    <path d="M41 55h18" stroke="#000" strokeWidth="2.5" />
  </svg>
</div>


            <h2 className="text-white text-5xl font-bold mb-4">OUR TEAM</h2>

            <p className="text-white text-lg max-w-2xl text-center leading-relaxed font-semibold">
              Led by engineers and IIT alumni, our team works around the clock
              to ensure seamless planning and execution—delivering end-to-end,
              trouble-free tech solutions on time.
            </p>
          </div>

          {/* Value Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              "CLIENT CENTRIC",
              "QUALITY DRIVEN",
              "INNOVATIVE",
              "RELIABLE",
              "ISO 9001:2015",
              "TRUSTWORTHY",
            ].map((value, i) => (
              <div
                key={i}
                className="px-6 py-3 bg-white text-[#1a498b] font-extrabold rounded-full text-sm"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Our Community Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Team Photo */}
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                  alt="PK Solutions Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

           {/* Right - Content */}
<div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
  <h2 className="text-[#1a498b] text-5xl font-bold leading-tight">
    Join Our Community
  </h2>

  <p className="text-gray-700 text-xl leading-relaxed font-bold max-w-lg">
    Be a Part of a Purpose-Driven Team. At PK Solutions, we believe
    great work happens when passionate minds come together. We value
    creativity, collaboration, and the drive to build meaningful
    solutions that uplift institutions and learners. Join us as we
    innovate, experiment, and grow—together.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full justify-center md:justify-start">
    <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-6 py-3 rounded-lg transition">
      EXPLORE
    </button>

    <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-6 py-3 rounded-lg transition">
      CONTACT US
    </button>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}
