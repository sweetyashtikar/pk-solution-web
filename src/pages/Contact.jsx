import React, { useState } from "react";
import { MapPin, Mail, Globe, Phone, Send } from "lucide-react";

// Circuit Background Component
const CircuitBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1920 1080"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g opacity="0.5" filter="url(#glow)">
      <line
        x1="0"
        y1="150"
        x2="400"
        y2="150"
        stroke="#1A439B"
        strokeWidth="2"
      />
      <line
        x1="0"
        y1="350"
        x2="450"
        y2="350"
        stroke="#f97316"
        strokeWidth="2"
      />
      <line
        x1="0"
        y1="550"
        x2="400"
        y2="550"
        stroke="#1A439B"
        strokeWidth="2"
      />

      <line
        x1="100"
        y1="150"
        x2="100"
        y2="750"
        stroke="#1A439B"
        strokeWidth="2"
      />
      <line
        x1="300"
        y1="250"
        x2="300"
        y2="650"
        stroke="#f97316"
        strokeWidth="2"
      />

      <circle cx="100" cy="150" r="6" fill="#f97316" />
      <circle cx="300" cy="350" r="6" fill="#1A439B" />
      <circle cx="100" cy="550" r="6" fill="#f97316" />
    </g>

    <g opacity="0.5" filter="url(#glow)">
      <line
        x1="1520"
        y1="150"
        x2="1920"
        y2="150"
        stroke="#1A439B"
        strokeWidth="2"
      />
      <line
        x1="1470"
        y1="350"
        x2="1920"
        y2="350"
        stroke="#f97316"
        strokeWidth="2"
      />
      <line
        x1="1520"
        y1="550"
        x2="1920"
        y2="550"
        stroke="#1A439B"
        strokeWidth="2"
      />

      <line
        x1="1820"
        y1="150"
        x2="1820"
        y2="750"
        stroke="#1A439B"
        strokeWidth="2"
      />
      <line
        x1="1620"
        y1="250"
        x2="1620"
        y2="650"
        stroke="#f97316"
        strokeWidth="2"
      />

      <circle cx="1820" cy="150" r="6" fill="#f97316" />
      <circle cx="1620" cy="350" r="6" fill="#1A439B" />
      <circle cx="1820" cy="550" r="6" fill="#f97316" />
    </g>

    <g opacity="0.4">
      <circle cx="300" cy="350" r="8" fill="#f97316">
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="1620" cy="350" r="8" fill="#1A439B">
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.msg);

      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Orange Top Border */}
      <div className="h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>

      <section
        className="relative py-32 px-6" // py-32 = अधिक vertical spacing
        style={{ backgroundColor: "#1A439B" }}
      >
        <CircuitBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-transparent to-slate-900/70"></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6">
            <h1 className="text-4xl md:text-4xl font-bold text-white mb-2">

              Need Assistance?

            </h1>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-2">
             Let's Connect
            </h1>
            <br />
            <div className="h-1 bg-gradient-to-r from-orange-400 to-orange-600 w-32 mx-auto"></div>
          </div>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto leading-relaxed">
            We're here to assist you and help your business grow. Whether you
            have questions about our services or need support, feel free to
            reach out. We'd love to hear from you!
          </p>
        </div>
      </section>


      {/* Main Content Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Information */}
            <div className="h-full flex flex-col">
              <h2
                className="text-3xl font-bold mb-3 text-center lg:text-left"
                style={{ color: "#1A439B" }}
              >
                Reach Out to Us
              </h2>
              <div className="h-1 bg-gradient-to-r from-orange-400 to-orange-600 w-24 mb-6 mx-auto lg:mx-0"></div>
              <p className="text-gray-600 text-base mb-8 leading-relaxed text-center lg:text-left">
                We're always ready to help and answer your questions. Get in
                touch with us through any of the channels below.
              </p>

              {/* Office Address */}
              <div className="mb-6 flex flex-col items-center lg:flex-row lg:items-start gap-4 p-4 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl border-l-4 border-orange-500 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Office Address
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Inspiria Mall, Nigdi
                    <br />
                    Pune, Maharashtra 411044
                    <br />
                    India
                  </p>
                </div>
              </div>

              {/* Email Support */}
              <div className="mb-6 flex flex-col items-center lg:flex-row lg:items-start gap-4 p-4 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl border-l-4 border-blue-600 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                    <Mail className="w-6 h-6" style={{ color: "#1A439B" }} />
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Email Support
                  </h3>
                  <a
                    href="mailto:info@pksolutionspune.com"
                    className="text-orange-500 text-base hover:underline font-medium"
                  >
                    info@pksolutionspune.com
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Website */}
              <div className="mb-6 flex flex-col items-center lg:flex-row lg:items-start gap-4 p-4 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl border-l-4 border-orange-500 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                    <Globe className="w-6 h-6 text-orange-500" />
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Website
                  </h3>
                  <a
                    href="https://www.pksolutionspune.com"
                    className="text-orange-500 text-base hover:underline font-medium"
                  >
                    www.pksolutionspune.com
                  </a>
                </div>
              </div>

              {/* Phone Contact */}
              <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4 p-4 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl border-l-4 border-blue-600 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                    <Phone className="w-6 h-6" style={{ color: "#1A439B" }} />
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Phone Contact
                  </h3>
                  <p className="text-orange-500 text-base font-semibold">
                    Prabhakar Kadam - 7387103365
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Available Mon-Sat, 10 AM - 7 PM
                    <br />
                    Call us for immediate assistance
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="h-full flex flex-col">
              <h2
                className="text-3xl font-bold mb-3 text-center lg:text-left"
                style={{ color: "#1A439B" }}
              >
                Send Us a Message
              </h2>
              <div className="h-1 bg-gradient-to-r from-orange-400 to-orange-600 w-24 mb-6 mx-auto lg:mx-0"></div>

              <div className="flex-1 bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-xl shadow-lg">
                <div className="space-y-5">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-500 resize-none transition-colors"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full font-semibold uppercase tracking-wide transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Submit Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
   
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
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-6 py-3 rounded-lg transition">
            Explore
          </button>

          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-6 py-3 rounded-lg transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
