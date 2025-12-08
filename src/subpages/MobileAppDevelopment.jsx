import React from "react";

export default function MobileAppDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}

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


      <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
                  alt="Mobile App Analytics"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <p className="text-teal-700 font-semibold text-lg mb-4">ABOUT US</p>
              <h1 className="text-4xl md:text-5xl font-bold text-teal-900 leading-tight mb-6">
                End-to-End Mobile App Solutions Built for Performance & Growth
              </h1>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  At Multigraphics, we are committed to delivering high-quality mobile applications for both Android and iOS platforms. Our expert team transforms your ideas into scalable, secure, and engaging mobile solutions that drive real business results.
                </p>
                <p>
                  We offer end-to-end development services—from ideation and design to deployment and maintenance. Whether you need a native app or a cross-platform solution, we ensure a smooth user experience, high performance, and on-time delivery.
                </p>
                <p>
                  Partner with us to build apps that not only look great but also work flawlessly across devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-right mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mb-4">
              Mobile App Development Services for Android & iOS
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl ml-auto">
              At Multigraphics, we specialize in creating high-performance mobile applications tailored to your business needs. Whether you're launching a consumer app, an internal business tool, or an education-based solution, our team delivers seamless experiences across both Android and iOS platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Cards */}
            {[
              {
                icon: "🎨",
                title: "Custom App Development",
                desc: "Tailored mobile apps designed for your unique business goals and user needs."
              },
              {
                icon: "⚙️",
                title: "Native Android & iOS Development",
                desc: "Robust, high-performance apps built using platform-specific technologies."
              },
              {
                icon: "📈",
                title: "Cross-Platform App Development",
                desc: "Single-codebase solutions that work seamlessly on both Android and iOS devices."
              },
              {
                icon: "🎨",
                title: "UI/UX Design",
                desc: "Intuitive and modern interface designs that enhance user satisfaction and engagement."
              },
              {
                icon: "🔧",
                title: "App Testing & Quality Assurance",
                desc: "Thorough testing across devices to ensure stability, speed, and security."
              },
              {
                icon: "🚀",
                title: "App Store & Play Store Deployment",
                desc: "Complete support for launching your app on Google Play and the Apple App Store."
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white border-2 border-teal-600 rounded-2xl p-6 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-teal-700 rounded-full flex items-center justify-center text-2xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-teal-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Right side image */}
          <div className="mt-12 flex justify-end">
            <div className="w-full md:w-1/2 lg:w-2/5">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=800&fit=crop"
                alt="Mobile App Development"
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
                alt="Mobile Features"
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>

            {/* Right - Features List */}
            <div>
              <h2 className="text-4xl font-bold text-teal-900 mb-4">
                What Sets Our Android & iOS Apps Apart
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Bringing Innovation to Life with Custom Android & iOS Apps
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: "✈️",
                    title: "Cross-Platform Compatibility",
                    desc: "Apps that run flawlessly across Android and iOS devices with consistent performance."
                  },
                  {
                    icon: "⚡",
                    title: "High Performance & Speed",
                    desc: "Optimized code and architecture for fast loading, smooth transitions, and seamless interactions."
                  },
                  {
                    icon: "📊",
                    title: "Scalable Architecture",
                    desc: "Built to handle growing user bases and future feature expansions with ease."
                  },
                  {
                    icon: "🔒",
                    title: "Secure & Reliable",
                    desc: "End-to-end data protection, encryption, and secure backend integration."
                  },
                  {
                    icon: "📡",
                    title: "Offline Functionality",
                    desc: "Enable core app features even without internet connectivity."
                  },
                  {
                    icon: "🔔",
                    title: "Push Notifications & Alerts",
                    desc: "Engage users with real-time updates, promotions, and personalized messages."
                  },
                  {
                    icon: "📈",
                    title: "App Analytics Integration",
                    desc: "Track user behavior, app performance, and ROI through in-app analytics."
                  },
                  {
                    icon: "🔗",
                    title: "Third-Party API Integration",
                    desc: "Connect your app with payment gateways, CRMs, social media, maps, and more."
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 bg-teal-700 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-teal-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mb-4">
            Target Users of Our Mobile App Development Services
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            Empowering Every Digital Experience — From Startups to Enterprises
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop",
                title: "Schools & K-12 Institutions"
              },
              {
                image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop",
                title: "Colleges & Universities"
              },
              {
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
                title: "Corporate Training Departments"
              }
            ].map((user, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-3xl shadow-xl h-80">
                <img
                  src={user.image}
                  alt={user.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8">
                  <h3 className="text-2xl font-bold text-white">{user.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mb-4">
            Why Clients Choose Multigraphics for Android & iOS Apps
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            Transform User Engagement with Feature-Rich, Future-Ready Mobile Apps
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💡",
                number: "1",
                title: "Expertise in Android & iOS Development",
                desc: "Our team specializes in building high-performance apps for both platforms using the latest technologies"
              },
              {
                icon: "🎯",
                number: "2",
                title: "Custom Solutions Tailored to Your Needs",
                desc: "We don't use one-size-fits-all templates, every app is designed to meet your specific goals."
              },
              {
                icon: "🎨",
                number: "3",
                title: "UI/UX-First Approach",
                desc: "We prioritize user experience with intuitive, modern, and responsive app designs."
              },
              {
                icon: "⚙️",
                number: "4",
                title: "Agile Development Process",
                desc: "Fast, flexible, and transparent workflows that keep you involved every step of the way."
              },
              {
                icon: "🔧",
                number: "5",
                title: "App Store & Play Store Success",
                desc: "We ensure your app meets all guidelines and is fully optimized for visibility and downloads."
              },
              {
                icon: "🔄",
                number: "6",
                title: "Post-Launch Support & Maintenance",
                desc: "From updates to scaling, we stay with you even after your app goes live."
              }
            ].map((reason, idx) => (
              <div key={idx} className="relative bg-gradient-to-br from-teal-50 to-white border-2 border-teal-200 rounded-3xl p-8 hover:shadow-2xl transition-all">
                <div className="absolute -top-4 -right-4 text-8xl font-bold text-teal-100 opacity-50">
                  {reason.number}
                </div>
                <div className="relative">
                  <div className="w-16 h-16 bg-teal-700 rounded-2xl flex items-center justify-center text-3xl mb-4">
                    {reason.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-teal-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 text-lg">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-700 to-teal-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Dream Mobile App?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's transform your vision into a powerful mobile experience
          </p>
          <button className="bg-white text-teal-900 px-10 py-4 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}