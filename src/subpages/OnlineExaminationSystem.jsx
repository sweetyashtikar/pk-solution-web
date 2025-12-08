import React, { useState, useEffect } from "react";
import {
  Monitor,
  Users,
  Award,
  CheckCircle,
  Lock,
  Settings,
  Clock,
  BarChart3,
  Globe,
  Shield,
  TrendingUp,
  FileText,
  Zap,
  Languages,
} from "lucide-react";

export default function ExamPlatformLanding() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { number: "10+", label: "Global Presence Countries" },
    { number: "5000+", label: "Domestic Segment Clients" },
    { number: "200+", label: "Universities" },
    { number: "2000+", label: "Colleges" },
    { number: "100+", label: "Political Parties, Survey & Others" },
    { number: "2900+", label: "Coaching" },
    { number: "25 Cr+", label: "OMR Sheets Evaluated" },
    { number: "30+", label: "Years of Excellence" },
  ];

  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Online Examination Platform Setup",
      description:
        "End-to-end implementation of secure online exam systems for remote & center-based assessments.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Device & Low-Bandwidth Compatibility",
      description:
        "Online exam system optimized for all screens and low-bandwidth environments with seamless reconnect and auto-save features.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Question Bank Management",
      description:
        "Create, import, randomize, and manage large databases of MCQs and subjective questions.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Exam Scheduling & Candidate Management",
      description:
        "Automated candidate registration, slot management, hall ticket generation, and notifications.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Live Monitoring & Audit Trails",
      description:
        "Real-time test monitoring, browser lockdown, IP restriction, and detailed activity logs without AI proctoring.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Auto & Manual Evaluation",
      description:
        "Visual performance analysis, student-wise reports, and result exports for smarter decisions.",
    },
  ];

  const features = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "100% Secure & AI-Free Exam Environment",
      description:
        "Conduct exams without AI proctoring using browser lockdown, IP restrictions, and user authentication.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Supports Objective & Descriptive Questions",
      description:
        "Create multiple formats: MCQs, short answers, essays, case-based or image-based questions.",
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Customizable Exam Workflow",
      description:
        "Define exam structure, timings, difficulty levels, negative marking, randomization, and more.",
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Multi-Device Compatibility",
      description:
        "Accessible on desktops, laptops, tablets, and smartphones with adaptive UI for all devices.",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Real-Time Monitoring & Activity Logs",
      description:
        "Get live status of examinees, prevent switching, and maintain detailed logs without invading privacy.",
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Instant Result Generation",
      description:
        "Automated scoring and grading system with performance analytics and downloadable results.",
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Candidate Dashboard & Notifications",
      description:
        "Personalized login, exam schedule display, and automated SMS/email alerts.",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Multilingual Support",
      description:
        "Conduct exams in Hindi, English, or any Indian regional language with complete Unicode compatibility.",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Role-Based Admin Access",
      description:
        "Multi-level admin access for examiners, evaluators, moderators, and super admins.",
    },
  ];

  const solutions = [
    {
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      title: "Universities & Colleges",
    },
    {
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop",
      title: "Schools & Coaching Institutes",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      title: "Corporates & HR Teams",
    },
  ];

  const trustReasons = [
    {
      icon: <Award className="w-10 h-10" />,
      title: "30+ Years of Assessment Form Expertise",
      description:
        "Trusted by over 200 institutions, we bring deep experience in exam automation and evaluation.",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Secure & AI-Free Platform",
      description:
        "Ensure data privacy with browser lockdown and human-centric monitoring without AI proctoring.",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "End-to-End Exam Lifecycle Support",
      description:
        "From question bank creation to result generation - we manage it all under one platform.",
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Supports All Exam Types",
      description:
        "MCQs, descriptive, image and case-study questions supported across multiple formats and devices.",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Scalable for Mass Examinations",
      description:
        "Test thousands to lakhs of candidates simultaneously without system lag or crashes.",
    },
    {
      icon: <Languages className="w-10 h-10" />,
      title: "Custom Branding & White Label Options",
      description:
        "Offer a seamless, branded test experience under your institution or organization's name.",
    },
    {
      icon: <Languages className="w-10 h-10" />,
      title: "Multilingual & Mobile-Friendly",
      description:
        "Conduct exams in regional languages and let candidates take tests on desktop, tablet, or mobile.",
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Real-Time Analytics & Detailed Reporting",
      description:
        "Track performance, attendance, question difficulty, and candidate-wise results instantly.",
    },
  ];

  const workflowSteps = [
    {
      number: "#1",
      title: "Create Question Bank",
      description:
        "Upload or build your question paper using our test builder. Support for MCQs, subjective, image-based, and more.",
    },
    {
      number: "#2",
      title: "Schedule the Exam",
      description:
        "Define exam dates, time slots, duration, candidate groups, languages, and access rules.",
    },
    {
      number: "#3",
      title: "Candidate Login",
      description:
        "Students/candidates receive credentials to log in securely. Verification through email/SMS/IP/device control.",
    },
    {
      number: "#4",
      title: "Conduct the Test",
      description:
        "The exam is launched with features like browser lockdown, question randomization, and timer-based navigation.",
    },
    {
      number: "#5",
      title: "Live Monitoring & Control",
      description:
        "Track candidate activity in real-time, monitor completion status, and access audit trails—no AI proctoring required.",
    },
    {
      number: "#6",
      title: "Result Processing",
      description:
        "Automatic evaluation for objective questions. Manual marking for descriptive answers. View performance analytics.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
<section
  className="pt-6 pb-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative min-h-[200px]"
  style={{ backgroundImage: "url('/Schoollog Exam.jpg')" }}
>
  <div className="absolute inset-0 bg-black/50"></div>  {/* Increased opacity here */}
  <div className="relative max-w-7xl mx-auto min-h-screen flex items-center justify-center px-4">
    <div className="max-w-3xl bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-4 overflow-auto text-center">
      <h1
        className="text-4xl md:text-4xl font-bold leading-tight mb-4"
        style={{ color: "#1a498b" }}
      >
        Conduct Seamless, Secure & Scalable Online Exams with Our Platform
      </h1>
      <p
        className="text-lg mb-6 leading-snug font-bold"
        style={{ color: "black" }}
      >
        Streamline your exam process with our robust Online Examination.
        Deliver objective or descriptive tests, conduct large-scale
        assessments, generate instant results, and ensure complete data
        confidentiality—without AI proctoring. Trusted by top
        universities, PSUs, and corporates.
      </p>
      <button className="bg-[#FF7A1A] text-white px-4 py-2 rounded-full text-sm font-semibold transition shadow-lg hover:shadow-xl transform hover:scale-105 font-bold inline-block">
        Get Started for Free
      </button>
    </div>
  </div>
</section>
      {/* Stats Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">
              Our Expertise, Reach, Performance, Trust & Reliability
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our expertise reflects deep industry knowledge, proven capability,
              and trusted performance. Our presence demonstrates reliable reach,
              strong market positioning, and consistent delivery across diverse
              sectors with excellence and credibility.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                <div className="text-4xl font-bold text-teal-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
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
                src="/about-exam.png"
                alt="Exam Interface"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-4">
              <div
                className="text-xs font-semibold uppercase tracking-wide"
                style={{ color: "#1a498b" }}
              >
                What is Online Exam?
              </div>
              <h2 className="text-3xl font-bold" style={{ color: "#1a498b" }}>
                Conduct Tests with Real-Time Monitoring, Instant Results, and
                Zero Manual Effort.
              </h2>
              <p className="text-sm" style={{ color: "#1a498b" }}>
                An Online Examination is a secure digital method for conducting
                tests where candidates can appear either remotely or at
                designated centers using computers or mobile devices. It
                eliminates the need for physical paperwork, enabling a smoother,
                scalable, and more efficient testing process.
              </p>
              <p className="text-sm" style={{ color: "#1a498b" }}>
                Multigraphics' Online Exam system supports multiple question
                formats including MCQs and descriptive responses, allows
                randomization, sectional timing, and instant result processing.
                It ensures real-time monitoring, browser lockdown, and
                role-based dashboards—making it suitable for universities,
                corporates, and government exams without using AI-based
                proctoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <div className="space-y-6">
              <h1
                className="text-4xl font-bold leading-tight"
                style={{ color: "#1a498b" }}
              >
                Comprehensive Online Examination Services
              </h1>
              <p
                className="leading-relaxed font-bold"
                style={{ color: "black" }}
              >
                We offer a full suite of Online Exam services tailored to
                institutions, corporates, and government agencies. Our platform
                supports secure, scalable, and customizable assessments with
                features like automated evaluation, instant result generation,
                browser lockdown, and real-time monitoring ensuring a seamless
                experience for both administrators and candidates.
              </p>
              <img
                src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&h=450&fit=crop"
                alt="E-learning platform"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl flex flex-col items-center text-center shadow-sm border border-[#1a498b]/10 ring-1 ring-[#1a498b]/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-teal-50 border-2 border-[#FF7A1A] rounded-full flex items-center justify-center mb-3 text-[#FF7A1A]">
                    {service.icon}
                  </div>
                  <h3
                    className="text-lg font-extrabold mb-1"
                    style={{ color: "#FF7A1A" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed font-bold"
                    style={{ color: "#1a498b" }}
                  >
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              TOP FEATURES
            </div>
            <h2
              className="text-4xl font-bold mb-6 max-w-4xl mx-auto"
              style={{ color: "#1a498b" }}
            >
              Powerful, Secure Testing built for Education, Recruitment and
              Corporate Needs.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 text-center rounded-2xl shadow-sm border border-[#1a498b]/10 ring-1 ring-[#1a498b]/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div style={{ color: "#FF7A1A" }}>{feature.icon}</div>
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "#1a498b" }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "#1a498b" }}
            >
              Perfect Solution for Universities, Corporates & Government Bodies
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Our Online Exam Software is designed to serve a wide range of
              users who need reliable, scalable, and secure testing
              environments—without AI proctoring.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg group"
              >
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center px-4">
                    {solution.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Section */}
      <section className="py-20 bg-[#F3F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT SIDE GRID WITH SCROLL – MATCHED CARD STYLE */}
            <div
              className="p-6 rounded-2xl 
                   overflow-y-scroll"
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
                    className="bg-[#F8FAFF] p-4 rounded-xl border border-[#1a498b]/20 shadow-sm 
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-[#FF7A1A] rounded-full flex items-center justify-center mb-3 text-white text-2xl">
                      {reason.icon}
                    </div>

                    <h3
                      className="text-lg font-semibold mb-1"
                      style={{ color: "#1a498b" }}
                    >
                      {reason.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE TEXT + IMAGE SECTION – SAME DESIGN BOX */}
            <div className=" p-6 rounded-2xl">
              <h2
                className="text-4xl font-bold mb-5"
                style={{ color: "#1a498b" }}
              >
                Why Top Institutions Trust Our Online Exam Platform
              </h2>

              <p className="text-gray-700 mb-6">
                Reliable. Secure. Scalable. Everything you need to conduct
                high-stakes exams with confidence.
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

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "#1a498b" }}
            >
              How Our Online Examination Platform Works
            </h2>
            <p className="text-gray-600">
              Conduct Exams in just a Few Simple Steps—Secure, Smooth and
              Scalable.
            </p>
          </div>

          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {workflowSteps.slice(0, 3).map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Number */}
                <div className="w-12 h-12 bg-white border-4 border-[#FF7A1A] rounded-full flex items-center justify-center shadow-md text-lg font-bold mb-4">
                  {step.number}
                </div>

                {/* Card */}
                <div
                  className="bg-white p-5 rounded-xl shadow-lg border border-[#1a498b]/30 
                          hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full"
                >
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "#1a498b" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#1a498b]/80">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* TIMELINE (Exactly like your image) */}
          <div className="relative w-full flex justify-between items-center my-16">
            {/* Horizontal Line */}
            <div
              className="absolute top-1/2 left-0 right-0 h-[2px] 
                      bg-[#1a768b] -translate-y-1/2"
            ></div>

            {/* Ticks (3 top, 3 bottom) */}
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center w-full"
              >
                {/* Upper ticks for first 3 */}
                {i < 3 && <div className="w-[2px] h-8 bg-[#1a768b] mb-1"></div>}

                {/* Lower ticks for last 3 */}
                {i >= 3 && (
                  <div className="w-[2px] h-8 bg-[#1a768b] mt-1"></div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {workflowSteps.slice(3, 6).map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Number */}
                <div className="w-12 h-12 bg-white border-4 border-[#FF7A1A] rounded-full flex items-center justify-center shadow-md text-lg font-bold mb-4">
                  {step.number}
                </div>

                {/* Card */}
                <div
                  className="bg-white p-5 rounded-xl shadow-lg border border-[#1a498b]/30 
                          hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full"
                >
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "#1a498b" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#1a498b]/80">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Final Award Icon */}
          <div className="flex justify-center mt-16">
            <div className="w-16 h-16 bg-white shadow-xl border-2 border-[#FF7A1A] rounded-full flex items-center justify-center">
              <Award className="w-10 h-10 text-[#FF7A1A]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
