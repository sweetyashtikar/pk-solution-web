import React from "react";
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
  Bell,
  Link,
} from "lucide-react";

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

const trustReasons = [
  {
    icon: <Zap size={28} />,
    title: "Cross-Platform Compatibility",
    description:
      "Apps that run flawlessly across Android and iOS devices with consistent performance.",
  },
  {
    icon: <Target size={28} />,
    title: "High Performance & Speed",
    description:
      "Optimized code and architecture for fast loading, smooth transitions, and seamless interactions.",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Scalable Architecture",
    description:
      "Built to handle growing user bases and future feature expansions with ease.",
  },
  {
    icon: <Lock size={28} />,
    title: "Secure & Reliable",
    description:
      "End-to-end data protection, encryption, and secure backend integration.",
  },
  {
    icon: <Bell size={28} />,
    title: "Offline Functionality",
    description: "Enable core app features even without internet connectivity.",
  },
  {
    icon: <Link size={28} />,
    title: "Third-Party API Integration",
    description:
      "Connect your app with payment gateways, CRMs, social media, maps, and more.",
  },
];

export default function MobileAppDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}

      <section
        className="pt-10 pb-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('/program-development-concept-young-indian-man-working-with-computer.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/35"></div>

        <div className="relative max-w-7xl mx-auto flex justify-center">
          <div className="w-full max-w-3xl min-h-[40vh] bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-10 md:p-12 flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 text-[#1a498b]">
              Secure & Confidential Printing Solutions for Exams, Government &
              Corporate Needs
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-8 font-medium text-gray-800">
              Delivering high-security printing of question papers, OMR sheets,
              ballot papers, and more with tamper-proof technology, custom
              packaging, and end-to-end data confidentiality. Serving
              universities, government bodies, recruitment agencies, and
              corporates across India with ISO certified, foolproof secure
              printing.
            </p>

            <button className="bg-orange-600  text-white px-5 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition transform hover:scale-105">
              Get Started for Free
            </button>
          </div>
        </div>
      </section>

      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 items-stretch">
            {/* Left - Image */}
            <div className="relative flex justify-center h-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl w-full max-w-md h-full">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
                  alt="Mobile App Analytics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right - Content Card */}
            <div className="text-center md:text-center h-full flex flex-col justify-center">
              <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 text-gray-700 text-center space-y-4 border border-gray-100 h-full flex flex-col justify-center">
                <h1 className="text-4xl md:text-4xl font-extrabold leading-tight mb-6 text-[#1a498b]">
                  End-to-End Mobile App Solutions Built for Performance & Growth
                </h1>

                <p>
                  At Multigraphics, we are committed to delivering high-quality
                  mobile applications for both Android and iOS platforms. Our
                  expert team transforms your ideas into scalable, secure, and
                  engaging mobile solutions that drive real business results.
                </p>

                <p>
                  We offer end-to-end development services—from ideation and
                  design to deployment and maintenance. Whether you need a
                  native app or a cross-platform solution, we ensure a smooth
                  user experience, high performance, and on-time delivery.
                </p>

                <p>
                  Partner with us to build apps that not only look great but
                  also work flawlessly across devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <MultigraphicsSection />

      {/* How Our Confidential Printing Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8  bg-[#1a498b]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              How Our Confidential Printing Process Ensures 100% Security
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Ensure Exam Integrity with Secure, Confidential & Scalable
              Printing Services
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

      {/* Features Section */}
      <section className="py-20 bg-[#F3F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT SIDE GRID WITH SCROLL */}
            <div
              className="p-6 rounded-2xl overflow-y-scroll"
              style={{
                maxHeight: "520px",
                scrollbarWidth: "none",
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              <div className="grid md:grid-cols-2 gap-5">
                {trustReasons.map((reason, index) => (
                  <div
                    key={index}
                    className="bg-[#1a498b] text-white p-5 rounded-xl flex flex-col items-center text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center mb-3">
                      {reason.icon}
                    </div>

                    {/* Heading */}
                    <h3 className="text-lg font-semibold mb-1">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/90 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE TEXT + IMAGE */}
            <div className="p-6 rounded-2xl">
              <h2 className="text-4xl font-bold mb-5 text-[#1a498b]">
                What Sets Our Android & iOS Apps Apart
              </h2>

              <p className="text-gray-700 mb-6">
                Bringing Innovation to Life with Custom Android & iOS Apps
              </p>

              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
                alt="Education"
                className="w-full rounded-xl shadow-lg border border-[#1a498b]/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
     <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#1a498b" }}>
  <div className="max-w-7xl mx-auto text-center text-white">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Target Users of Our Mobile App Development Services
    </h2>
    <p className="text-xl mb-16">
      Empowering Every Digital Experience — From Startups to Enterprises
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          image:
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop",
          title: "Schools & K-12 Institutions",
        },
        {
          image:
            "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop",
          title: "Colleges & Universities",
        },
        {
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
          title: "Corporate Training Departments",
        },
      ].map((user, idx) => (
        <div
          key={idx}
          className="relative group overflow-hidden rounded-3xl shadow-xl h-80"
        >
          <img
            src={user.image}
            alt={user.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent flex items-end p-8">
            <h3 className="text-2xl font-bold text-white">
              {user.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Why Choose Us Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mb-4">
            Why Clients Choose Multigraphics for Android & iOS Apps
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            Transform User Engagement with Feature-Rich, Future-Ready Mobile
            Apps
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💡",
                number: "1",
                title: "Expertise in Android & iOS Development",
                desc: "Our team specializes in building high-performance apps for both platforms using the latest technologies",
              },
              {
                icon: "🎯",
                number: "2",
                title: "Custom Solutions Tailored to Your Needs",
                desc: "We don't use one-size-fits-all templates, every app is designed to meet your specific goals.",
              },
              {
                icon: "🎨",
                number: "3",
                title: "UI/UX-First Approach",
                desc: "We prioritize user experience with intuitive, modern, and responsive app designs.",
              },
              {
                icon: "⚙️",
                number: "4",
                title: "Agile Development Process",
                desc: "Fast, flexible, and transparent workflows that keep you involved every step of the way.",
              },
              {
                icon: "🔧",
                number: "5",
                title: "App Store & Play Store Success",
                desc: "We ensure your app meets all guidelines and is fully optimized for visibility and downloads.",
              },
              {
                icon: "🔄",
                number: "6",
                title: "Post-Launch Support & Maintenance",
                desc: "From updates to scaling, we stay with you even after your app goes live.",
              },
            ].map((reason, idx) => (
              <div
                key={idx}
                className="relative bg-gradient-to-br from-teal-50 to-white border-2 border-teal-200 rounded-3xl p-8 hover:shadow-2xl transition-all"
              >
                <div className="absolute -top-4 -right-4 text-8xl font-bold text-teal-100 opacity-50">
                  {reason.number}
                </div>
                <div className="relative">
                  <div className="w-16 h-16 bg-teal-700 rounded-2xl flex items-center justify-center text-3xl mb-4">
                    {reason.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-teal-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
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

function MultigraphicsSection() {
  const features = [
    {
      icon: <Zap size={40} />,
      title: "Custom App Development",
      description:
        "Scan and evaluate thousands of OMR sheets per hour, reducing manual workload and delays.",
    },
    {
      icon: <Target size={40} />,
      title: "Native Android & iOS Development",
      description:
        "Eliminate human errors with automated OMR result processing, ensuring reliable outcomes.",
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Cross-Platform App Development",
      description:
        "Get detailed scorecards, merit lists, and performance analytics in minutes.",
    },
    {
      icon: <ClipboardList size={40} />,
      title: "UI/UX Design",
      description:
        "Perfect for competitive exams, academic tests, recruitment exams, and surveys.",
    },
    {
      icon: <Lock size={40} />,
      title: "App Testing & Quality Assurance",
      description:
        "Secure data handling with ISO-certified systems and encrypted workflows.",
    },
    {
      icon: <Wallet size={40} />,
      title: "App Store & Play Store Deployment",
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
              Mobile App Development Services for Android & iOS
            </h2>

            <p className="text-lg text-gray-700 mb-4">
              At Multigraphics, we specialize in creating high-performance
              mobile applications tailored to your business needs. Whether
              you're launching a consumer app, an internal business tool, or an
              education-based solution, our team delivers seamless experiences
              across both Android and iOS platforms.
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
