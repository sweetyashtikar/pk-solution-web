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
  CreditCard,
  Mail,
  MessageCircle,
  Video,
  ShieldCheck,
  Users,
  Settings,
  GitBranch,
  Handshake,
} from "lucide-react";
import { Link } from "react-router-dom";
const cards = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-[#1a498b] mb-4" />,
    title: "30+ Years of Domain Expertise",
    desc: "Proven track record in delivering complex software solutions across industries.",
  },
  {
    icon: <Users className="h-10 w-10 text-[#1a498b] mb-4" />,
    title: "In-House Development Team",
    desc: "Skilled engineers, designers, and project managers — all under one roof!",
  },
  {
    icon: <Settings className="h-10 w-10 text-[#1a498b] mb-4" />,
    title: "Custom-Built for Your Needs",
    desc: "Every solution is tailored to fit your business workflows and long-term goals.",
  },
  {
    icon: <Lock className="h-10 w-10 text-[#1a498b] mb-4" />,
    title: "Secure & Compliant Systems",
    desc: "Ensure your data stays protected, with adherence to industry standards.",
  },
  {
    icon: <GitBranch className="h-10 w-10 text-[#1a498b] mb-4" />,
    title: "Scalable Architecture",
    desc: "Software that evolves with your business — UX, integrations, and flexibility.",
  },
  {
    icon: <Handshake className="h-10 w-10 text-[#1a498b] mb-4" />,
    title: "Transparent & Collaborative Approach",
    desc: "Regular updates, milestone reviews, and ongoing support you can count on.",
  },
];

export default function SoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section
        className="pt-10 pb-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/person-working-html-computer.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/35"></div>

        {/* Centered content */}
        <div className="relative max-w-7xl mx-auto flex justify-center items-center min-h-[60vh]">
          {/* Content Box */}
          <div className="max-w-xl bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-10 flex flex-col justify-center text-center">
            <h1
              className="text-xl md:text-3xl font-extrabold leading-tight mb-6"
              style={{ color: "#1a498b" }}
            >
              Transform Your Business with Smart Software Solutions
            </h1>

            <p className="text-lg leading-relaxed mb-8 font-medium text-gray-800">
              We build software that's not just functional — it's
              transformative. From custom enterprise tools to scalable SaaS
              platforms, Multigraphics delivers solutions that streamline
              operations and drive growth.
            </p>

            <button className="bg-orange-600 text-white px-4 py-2 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition transform hover:scale-105 w-max mx-auto">
              Get Started for Free
            </button>
          </div>
        </div>
      </section>

      {/* What is Online Exam Section */}

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
                High-Performance, Custom-Built Softwares That Drive Business
                Growth
              </h2>

              <p className="text-lg mb-4" style={{ color: "black" }}>
                With over 20 years of experience in technology and innovation,
                we have empowered 1000+ clients across diverse industries with
                dynamic, high-performance websites tailored to their goals
              </p>

              <p className="text-lg mb-4" style={{ color: "black" }}>
                Whether you're a startup looking for an impressive online debut,
                an educational institution needing a student portal, or a brand
                aiming to scale through e-commerce — our team combines
                creativity, code, and strategy to deliver measurable impact.
              </p>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-2xl">
                <img
                  src="/about-development.webp"
                  alt="Exam Interface"
                  className="w-full h-auto"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1a498b]/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 section */}
      <HowItsDone />

      {/* 5 */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#1a498b]">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          {/* Heading */}

          <h2 className="text-5xl font-extrabold text-[white]">
            Top Reasons to Choose Our Software Development Solutions
          </h2>
          <p className="text-xl font-semibold text-white">
            Six key strengths that define our software services.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 md:px-0">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 flex flex-col items-center text-center
        shadow-[0_10px_45px_rgba(0,0,0,0.35)]
        border border-gray-200 transition-all duration-300"
              >
                {/* ICON WITH ORANGE BG + WHITE COLOR */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-600 text-white mb-4">
                  {card.icon}
                </div>

                <h3 className="text-2xl md:text-2xl font-bold text-[#1b3376]">
                  {card.title}
                </h3>

                <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*6 */}

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            {/* LEFT CONTENT */}
            <div className="space-y-6 text-black">
           <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[#1a498b] text-center">
  Powerful Features of Our Custom Software Solutions
</h2>

<p className="text-base md:text-lg leading-relaxed text-gray-700 text-center">
  From dynamic business websites to institutional portals and
  e-commerce platforms, we build secure, scalable, and fully
  customized web solutions. Our development approach focuses on
  speed, responsiveness, SEO optimization, and long-term
  maintainability — delivering measurable results for every
  client.
</p>

              <img
                src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&auto=format"
                alt="Software Solutions"
                className="rounded-xl shadow-xl border border-gray-200 hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* RIGHT CONTENT (FEATURE LIST) */}
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Enterprise-Grade Security",
                "High Performance & Speed",
                "Online Examination & Assessment Tools",
                "Fully Customizable Modules",
                "Mobile & Cross-Platform Compatibility",
                "Easy Integration with Existing Systems",
              ].map((title, index) => (
                <div
                  key={index}
                  className="bg-[#1a498b] shadow-lg rounded-xl p-6 flex flex-col items-center text-center space-y-2"
                >
                  <h3 className="text-white font-bold text-lg">{title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {index === 0 &&
                      "Advanced authentication, encryption, and role-based access control to protect your data."}
                    {index === 1 &&
                      "Optimized backend and frontend for seamless, fast, and reliable user experience."}
                    {index === 2 &&
                      "Conduct live tests with real-time results & analytics."}
                    {index === 3 &&
                      "Solutions tailored to your exact business processes, departments, and goals."}
                    {index === 4 &&
                      "Access your software from any device — desktop, tablet, or smartphone."}
                    {index === 5 &&
                      "Connect with CRMs, ERPs, APIs, databases, and third-party tools effortlessly."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*  7*/}

      <section className="py-16 px-6 lg:px-12 bg-[#1a498b]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT BOX GRID */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition text-center">
              <CreditCard className="w-10 h-10 mb-4 mx-auto text-white bg-orange-600 p-2 rounded-full" />
              <h3 className="font-bold text-xl text-[#1a498b]">
                Payment Gateway Integration
              </h3>
              <p className="text-sm text-[black] mt-2 opacity-80">
                Enable secure and frictionless transactions across multiple
                modes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition text-center">
              <Mail className="w-10 h-10 mb-4 mx-auto text-white bg-orange-600 p-2 rounded-full" />
              <h3 className="font-bold text-xl text-[#1a498b]">
                Email & SMS Automation
              </h3>
              <p className="text-sm text-[black] mt-2 opacity-80">
                Send timely updates automatically — at scale and on schedule.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition text-center">
              <MessageCircle className="w-10 h-10 mb-4 mx-auto text-white bg-orange-600 p-2 rounded-full" />
              <h3 className="font-bold text-xl text-[#1a498b]">
                WhatsApp Chatbots
              </h3>
              <p className="text-sm text-[black] mt-2 opacity-80">
                Automate common queries & lead interactions 24/7.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition text-center">
              <Video className="w-10 h-10 mb-4 mx-auto text-white bg-orange-600 p-2 rounded-full" />
              <h3 className="font-bold text-xl text-[#1a498b]">
                Zoom Integration
              </h3>
              <p className="text-sm text-[black] mt-2 opacity-80">
                Launch live classes with built-in Zoom support.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE TEXT + IMAGE */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug mb-4 text-center">
  Intelligent Integrations That Make a Difference
</h2>

<p className="text-white/90 mb-6 text-center">
  Boost efficiency and engagement with built-in features. All
  integrations are designed to work together and scale with your
  business.
</p>


            <img
              src="/ai-robot-interacting-with-futuristic-data-interface.jpg"
              alt="Automation"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
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
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a498b] mb-4 text-center">
          OMR Sheet Scanning to Result Generation:
          <br />
          How It's Done
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Power Your Evaluations with a Fast, Accurate & Scalable OMR Processing
          System
        </p>

        {/* Flex container: Left steps, Right image */}
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          {/* Left: Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-[#1a498b] rounded-lg p-4 text-white flex flex-col items-center text-center shadow-md"
              >
                <div className="bg-orange-600 p-1.5 rounded-full mb-2 text-white flex items-center justify-center">
                  {React.cloneElement(step.icon, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                <p className="text-white/90 text-xs leading-snug">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500"
              alt="OMR Scanning Process"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
