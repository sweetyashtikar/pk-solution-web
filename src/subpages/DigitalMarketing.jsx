// DigitalMarketing.js
import React from "react";
import {
  Target,
  Users,
  FileText,
  Mail,
  BarChart3,
  Shield,
  Zap,
  ClipboardCheck,
  Layers,
  Smartphone,
  Plug,
} from "lucide-react";
import { Link } from "react-router-dom";
const features = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "ROI-Focused PPC Advertising & Google Ads",
    description:
      "Generate instant visibility and conversions with expert Google Ads and PPC campaign management.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Targeted Social Media Marketing Campaigns",
    description:
      "Grow your online community and increase engagement across platforms like Facebook, Instagram, and LinkedIn.",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "SEO-Friendly Content Marketing",
    description:
      "Engage your audience with high-quality blog posts, landing pages, and brand content that ranks.",
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Automated Email & WhatsApp Marketing",
    description:
      "Reach your audience directly with personalized, data-driven email campaigns and WhatsApp messaging.",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Real-Time Conversion Tracking & Analytics",
    description:
      "Measure performance across channels with detailed analytics and conversion tracking tools.",
  },
];
const services = [
  {
    img: "/seo.webp",
    title: "Search Engine Optimization (SEO)",
    desc: "Rank higher on Google with technical SEO, on-page, off-page, and local SEO that drives organic traffic.",
  },
  {
    img: "/ppc.webp",
    title: "PPC Services & Google Ads Management",
    desc: "Maximize ROI with data-driven PPC advertising and Google Ads campaigns that deliver real-time leads.",
  },
  {
    img: "/smm.webp",
    title: "Social Media Marketing (SMM)",
    desc: "Build strong brand presence with impactful strategies on Facebook, Instagram & LinkedIn.",
  },
  {
    img: "/content.webp",
    title: "Content Marketing",
    desc: "Create SEO-rich blogs, videos, and guides to engage, educate, and convert your target audience.",
  },
  {
    img: "/email-new.webp",
    title: "Email & WhatsApp Marketing",
    desc: "Automated, personalized email and WhatsApp campaigns ideal for nurturing & retargeting.",
  },
  {
    img: "/ppc.webp",
    title: "Performance Marketing & Analytics",
    desc: "Optimize campaigns, measure performance, and improve ROAS with strong analytics.",
  },
  {
    img: "/mobile-apps.webp",
    title: "Mobile App Development",
    desc: "Design intuitive Android & iOS applications that enhance engagement and business growth.",
  },
  {
    img: "/software.webp",
    title: "Software Development",
    desc: "Build scalable, secure, and business-specific applications for digital success.",
  },
];

export default function DigitalMarketing() {
  {
    /* Split features in two rows */
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section
        className="pt-10 pb-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200')",
        }}
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
              Result-Driven Digital Marketing Services to Grow Your Business
              Online{" "}
            </h1>

            <p className="text-lg leading-relaxed mb-8 font-medium text-gray-800">
              Get more traffic, qualified leads, and sales with PK Solutions -
              India's leading digital marketing company offering SEO, PPC,
              social media marketing, and more.
            </p>
<Link
              to='/services'
              className="bg-orange-600  text-white px-6 py-3 rounded-full 
                   text-base sm:text-lg font-bold shadow-lg 
                   hover:shadow-xl transition transform hover:scale-105"
            >
              Get Started for Free
            </Link>
          </div>
        </div>
      </section>

      {/* 2 */}
      <AboutMultigraphics />

      {/* 3 */}

      <section className="py-20 px-4 bg-[#1a498b]">
        <div className="max-w-7xl mx-auto text-white space-y-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center">
            Our Digital Marketing Services
          </h2>

          <p className="text-lg md:text-xl font-medium text-gray-200 mx-auto">
            From Traffic to Conversions — Complete Digital Solutions Under One
            Roof
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />

                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold text-[#1a498b]">
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
      </section>

      {/* 4 */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* LOCAL FEATURES ARRAY – फक्त या section साठी */}
          {(() => {
            const features = [
              {
                title: "Enterprise-Grade Security",
                description:
                  "Advanced authentication, encryption, and role-based access control to protect your data.",
                icon: <Shield className="w-8 h-8" />,
              },
              {
                title: "High Performance & Speed",
                description:
                  "Optimized backend and frontend for seamless, fast, and reliable user experience.",
                icon: <Zap className="w-8 h-8" />,
              },
              {
                title: "Online Examination Tools",
                description:
                  "Conduct live tests with real-time results & analytics.",
                icon: <ClipboardCheck className="w-8 h-8" />,
              },
              {
                title: "Fully Customizable Modules",
                description:
                  "Solutions tailored to your exact business processes.",
                icon: <Layers className="w-8 h-8" />,
              },
              {
                title: "Mobile Compatibility",
                description:
                  "Access your software from any device — desktop, tablet, or smartphone.",
                icon: <Smartphone className="w-8 h-8" />,
              },
            ];

            const firstRow = features.slice(0, 3);
            const secondRow = features.slice(3);

            return (
              <>
                {/* Section Header */}
                <header className="text-center mb-8">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a498b]">
                    Key Features of Our Digital Marketing Services
                  </h2>
                </header>

                {/* ROW 1 – Always 3 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center mt-10">
                  {firstRow.map((feature, index) => (
                    <article
                      key={index}
                      className="bg-[#1a498b] w-[320px] rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                    >
                      <div className="flex flex-col items-center text-center gap-4">
                        <h3 className="text-2xl font-bold text-white mt-2">
                          {feature.title}
                        </h3>

                        <p className="text-white/90 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>

                {/* ROW 2 – Same Style + Center Align */}
                {secondRow.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center mt-10">
                    {secondRow.map((feature, index) => (
                      <article
                        key={index}
                        className="bg-[#1a498b] w-[320px] rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                      >
                        <div className="flex flex-col items-center text-center gap-4">
                          <h3 className="text-2xl font-bold text-white mt-2">
                            {feature.title}
                          </h3>

                          <p className="text-white/90 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </>
            );
          })()}
        </div>
      </section>

      {/* 5 */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#1a498b" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-white text-center">
                Why Choose PK Solutions for Digital Marketing?
              </h2>

              <p className="text-base md:text-lg text-white/90 leading-relaxed text-center">
                Targeted. Measurable. Impactful. Everything you need to grow
                your brand online with confidence.
              </p>

              <img
                src="/digital-target.webp"
                alt="Digital Marketing"
                className="rounded-xl shadow-xl border border-gray-200 hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* RIGHT CONTENT (FEATURE LIST) */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Feature Cards */}
              {[
                {
                  title: "30+ Years of Industry Experience",
                  desc: "We bring deep expertise in online marketing and technology, making us one of the most reliable names in the industry.",
                },
                {
                  title: "Result-Oriented Digital Strategies",
                  desc: "We focus on real results—increased traffic, lead generation, and conversion optimization to maximize ROI.",
                },
                {
                  title: "Customized Marketing Plans",
                  desc: "Every business is different. Our digital marketing strategy is personalized based on your goals, industry, and target audience.",
                },
                {
                  title: "Real-Time Tracking & Analytics",
                  desc: "We provide full transparency with conversion tracking, reporting dashboards, and campaign performance analytics.",
                },
                {
                  title: "Expertise Across Industries",
                  desc: "We serve startups, SMEs, enterprises, and institutions across education, healthcare, government, and more.",
                },
                {
                  title: "All-in-One Digital Marketing Agency",
                  desc: "From SEO and Google Ads to social media and email marketing, we manage everything under one roof.",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex flex-col space-y-2 bg-white p-6 rounded-xl shadow-md text-center"
                >
                  <h3 className="text-[#1a498b] font-extrabold text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
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

function AboutMultigraphics() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-10 rounded-3xl shadow-lg">
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left md:mx-0 mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#1a498b] leading-snug text-center">
              Performance-Driven Strategies to Boost Visibility, Traffic &
              Conversions
            </h2>

            <p className="text-gray-700 text-lg mb-4 text-center">
              PK Solutions is a leading provider of digital marketing services
              in India, helping brands improve their online visibility, generate
              quality leads, and drive website traffic through customized
              strategies.
            </p>

            <p className="text-gray-700 text-lg mb-4 text-center">
              We specialize in SEO, social media marketing, PPC advertising,
              content marketing, and email campaigns. With 20+ years of
              experience, we work with startups and enterprises across
              industries to deliver performance-based results.
            </p>

            <p className="text-gray-700 text-lg text-center">
              Whether you aim to rank higher on Google, engage your audience, or
              boost conversions, PK Solutions is your trusted digital growth
              partner.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="/progress-stock-figures-timeline-concept.jpg"
              alt="Digital Marketing"
              className="rounded-2xl shadow-xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
