// import React from "react";
// import { Smartphone, Play, Settings, Shield, Camera } from "lucide-react";
// import { FaCheckCircle } from "react-icons/fa";

// // Enhanced Circuit Pattern Background Component - Home Style
// const CircuitBackground = () => (
//   <svg
//     className="absolute inset-0 w-full h-full"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 1920 1080"
//     preserveAspectRatio="xMidYMid slice"
//   >
//     <defs>
//       <linearGradient id="circuitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
//         <stop offset="0%" style={{ stopColor: "#2596BE", stopOpacity: 0.8 }} />
//         <stop offset="50%" style={{ stopColor: "#1e7a9f", stopOpacity: 0.6 }} />
//         <stop
//           offset="100%"
//           style={{ stopColor: "#175d7d", stopOpacity: 0.4 }}
//         />
//       </linearGradient>

//       <filter id="glow">
//         <feGaussianBlur stdDeviation="3" result="coloredBlur" />
//         <feMerge>
//           <feMergeNode in="coloredBlur" />
//           <feMergeNode in="SourceGraphic" />
//         </feMerge>
//       </filter>
//     </defs>

//     {/* Left side circuit lines */}
//     <g opacity="0.6" filter="url(#glow)">
//       {/* Horizontal lines left */}
//       <line
//         x1="0"
//         y1="150"
//         x2="400"
//         y2="150"
//         stroke="#2596BE"
//         strokeWidth="2"
//       />
//       <line
//         x1="0"
//         y1="250"
//         x2="350"
//         y2="250"
//         stroke="#3aabcd"
//         strokeWidth="2"
//       />
//       <line
//         x1="0"
//         y1="350"
//         x2="450"
//         y2="350"
//         stroke="#2596BE"
//         strokeWidth="2"
//       />
//       <line
//         x1="0"
//         y1="450"
//         x2="300"
//         y2="450"
//         stroke="#3aabcd"
//         strokeWidth="2"
//       />
//       <line
//         x1="0"
//         y1="550"
//         x2="400"
//         y2="550"
//         stroke="#2596BE"
//         strokeWidth="2"
//       />
//       <line
//         x1="0"
//         y1="650"
//         x2="350"
//         y2="650"
//         stroke="#3aabcd"
//         strokeWidth="2"
//       />
//       <line
//         x1="0"
//         y1="750"
//         x2="420"
//         y2="750"
//         stroke="#2596BE"
//         strokeWidth="2"
//       />

//       {/* Vertical connectors left */}
//       <line
//         x1="100"
//         y1="150"
//         x2="100"
//         y2="750"
//         stroke="#2596BE"
//         strokeWidth="2"
//       />
//       <line
//         x1="200"
//         y1="200"
//         x2="200"
//         y2="700"
//         stroke="#3aabcd"
//         strokeWidth="2"
//       />
//       <line
//         x1="300"
//         y1="250"
//         x2="300"
//         y2="650"
//         stroke="#2596BE"
//         strokeWidth="2"
//       />

//       {/* Connection nodes left */}
//       <circle cx="100" cy="150" r="6" fill="#3aabcd" />
//       <circle cx="200" cy="250" r="6" fill="#2596BE" />
//       <circle cx="300" cy="350" r="6" fill="#3aabcd" />
//       <circle cx="100" cy="450" r="6" fill="#2596BE" />
//       <circle cx="200" cy="550" r="6" fill="#3aabcd" />
//       <circle cx="300" cy="650" r="6" fill="#2596BE" />
//       <circle cx="100" cy="750" r="6" fill="#3aabcd" />
//     </g>

//     {/* Right side circuit lines */}
//     <g opacity="0.6" filter="url(#glow)">
//       {/* Horizontal lines right */}
//       <line
//         x1="1520"
//         y1="150"
//         x2="1920"
//         y2="150"
//         stroke="#2596BE"
//         strokeWidth="2"
//       />
//       <line
//         x1="1570"
//         y1="250"
//         x2="1920"
//         y2="250"
//         stroke="#3aabcd"
//         strokeWidth="2"
//       />
//       <line
//         x1="1470"
//         y1="350"
//         x2="1920"
//         y2="350"
//         stroke="#2596BE"
//         strokeWidth="2"
//       />
//       <line
//         x1="1620"
//         y1="450"
//         x2="1920"
//         y2="450"
//         stroke="#3aabcd"
//         strokeWidth="2"
//       />
//       <line
//         x1="1520"
//         y1="550"
//         x2="1920"
//         y2="550"
//         stroke="#2596BE"
//         strokeWidth="2"
//       />
//       <line
//         x1="1570"
//         y1="650"
//         x2="1920"
//         y2="650"
//         stroke="#3aabcd"
//         strokeWidth="2"
//       />
//       <line
//         x1="1500"
//         y1="750"
//         x2="1920"
//         y2="750"
//         stroke="#2596BE"
//         strokeWidth="2"
//       />

//       {/* Vertical connectors right */}
//       <line
//         x1="1820"
//         y1="150"
//         x2="1820"
//         y2="750"
//         stroke="#2596BE"
//         strokeWidth="2"
//       />
//       <line
//         x1="1720"
//         y1="200"
//         x2="1720"
//         y2="700"
//         stroke="#3aabcd"
//         strokeWidth="2"
//       />
//       <line
//         x1="1620"
//         y1="250"
//         x2="1620"
//         y2="650"
//         stroke="#2596BE"
//         strokeWidth="2"
//       />

//       {/* Connection nodes right */}
//       <circle cx="1820" cy="150" r="6" fill="#3aabcd" />
//       <circle cx="1720" cy="250" r="6" fill="#2596BE" />
//       <circle cx="1620" cy="350" r="6" fill="#3aabcd" />
//       <circle cx="1820" cy="450" r="6" fill="#2596BE" />
//       <circle cx="1720" cy="550" r="6" fill="#3aabcd" />
//       <circle cx="1620" cy="650" r="6" fill="#2596BE" />
//       <circle cx="1820" cy="750" r="6" fill="#3aabcd" />
//     </g>

//     {/* Animated pulse effect */}
//     <g opacity="0.4">
//       <circle cx="200" cy="250" r="8" fill="#3aabcd">
//         <animate
//           attributeName="opacity"
//           values="0.4;1;0.4"
//           dur="2s"
//           repeatCount="indefinite"
//         />
//       </circle>
//       <circle cx="1720" cy="350" r="8" fill="#2596BE">
//         <animate
//           attributeName="opacity"
//           values="0.4;1;0.4"
//           dur="2.5s"
//           repeatCount="indefinite"
//         />
//       </circle>
//     </g>
//   </svg>
// );

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section - Home Style */}
//       <div className="relative w-full min-h-[600px] bg-gradient-to-r from-[#155b73] via-[#1c7ea1] to-[#2596BE] flex items-center overflow-hidden">
//         {/* Soft dark overlay for depth */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent mix-blend-multiply"></div>

//         {/* Circuit Pattern Background */}
//         <div className="absolute inset-0 pointer-events-none opacity-75">
//           <CircuitBackground />
//         </div>

//         <div className="container mx-auto px-6 md:px-16 flex flex-col-reverse md:flex-row items-center relative z-10">
//           {/* Left Side Content - Centered on Mobile */}
//           <div className="w-full md:w-1/2 space-y-6 mt-8 md:mt-0 text-center md:text-left">
//             <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
//               About PK Solutions - Your Trusted Technology Partner
//             </h1>

//             <p className="text-white/90 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
//               PK Solutions is a Pune-based IT technology company dedicated to
//               transforming ideas into practical digital solutions. We deliver
//               smart, innovative, and reliable technology services for modern
//               businesses.
//             </p>

//             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-2 justify-center md:justify-start">
//               <button
//                 onClick={() => (window.location.href = "/services")}
//                 className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 w-[220px] mx-auto sm:mx-0"
//               >
//                 LEARN MORE
//               </button>
//             </div>
//           </div>

//           {/* Right Side Image - Centered on Mobile */}
//        {/* Right Side Image - Perfect Mobile Responsive */}
// <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
//   <div className="w-full max-w-sm flex items-center justify-center">
//     <img
//       src="/3566801.jpg"
//       alt="About PK Solutions"
//       className="w-full h-auto object-contain"
//     />
//   </div>
// </div>

//         </div>
//       </div>

//       {/* Vision and Expertise Section */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2
//               className="font-extrabold mb-2"
//               style={{ color: "#1b3376", fontSize: "3.5rem" }}
//             >
//               Our Vision & Expertise
//             </h2>

//             <p className="text-lg text-gray-600 font-bold">
//               Empowering businesses with innovative digital solutions
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Our Vision */}
//             <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-xl border-l-4 border-orange-500 shadow-md hover:shadow-xl transition-shadow">
//               <h2 className="text-3xl font-extrabold mb-4 text-[#1b3376] text-center">
//                 Our Vision
//               </h2>

//               <p className="text-gray-700 text-base leading-relaxed text-center lg:text-center">
//                 To be a leading technology partner that empowers businesses with
//                 innovative digital solutions, driving growth and transformation
//                 in the modern digital landscape.
//               </p>
//             </div>

//             {/* Our Expertise */}
//             <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-xl border-l-4 border-[#2596BE] shadow-md hover:shadow-xl transition-shadow">
//               <h2 className="text-3xl font-extrabold mb-4 text-[#1b3376] text-center lg:text-center">
//                 Our Expertise
//               </h2>
//               <ul className="space-y-3">
//                 <li className="flex items-center gap-3 text-gray-700 text-base ml-8">
//                   <span className="text-orange-500 text-xl">●</span>
//                   <span>Mobile and web application development</span>
//                 </li>
//                 <li className="flex items-center gap-3 text-gray-700 text-base ml-8">
//                   <span className="text-orange-500 text-xl">●</span>
//                   <span>Cloud infrastructure and deployment</span>
//                 </li>
//                 <li className="flex items-center gap-3 text-gray-700 text-base ml-8">
//                   <span className="text-orange-500 text-xl">●</span>
//                   <span>Quality Engineering & Testing support</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why PK Solutions Banner - Home Style */}
//       <div className="bg-[#2596BE] text-white py-20 md:py-28">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
//           <div className="max-w-5xl md:max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
//             {" "}
//             {/* max-w वाढवला, padding वाढवली */}
//             <div className="max-w-3xl mx-auto space-y-3">
//               <h2
//                 className="text-5xl font-extrabold mb-2 text-center"
//                 style={{ color: "#1b3376" }}
//               >
//                 Why We Stand Ahead <br />
//                 PK Solutions
//               </h2>
//               <p className="text-xl font-bold text-cyan-100">
//                 We combine technology, creativity, and deliver to truly matter.
//               </p>
//               <br />
//               <br />
//             </div>
//             {/* Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 md:px-0">
//               {/* Card 1 */}
//               <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-200">
//                 <FaCheckCircle className="h-10 w-10 text-orange-400 mb-4" />
//                 <h3 className="text-2xl font-bold text-[#1b3376]">
//                   Reliable & Transparent Partnership
//                 </h3>
//                 <p className="text-gray-600 text-sm mt-3 leading-relaxed">
//                   We believe in clear communication, honest timelines, and
//                   complete transparency at every stage of the project. You
//                   always know what we are working on, how your project is
//                   progressing, and what results to expect. Our reliable working
//                   style builds trust and long-term client relationships.
//                 </p>
//               </div>

//               {/* Card 2 */}
//               <div
//                 className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center text-center
//                hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-200"
//               >
//                 <FaCheckCircle className="h-10 w-10 text-orange-400 mb-4" />
//                 <h3 className="text-2xl font-bold text-[#1b3376]">
//                   Innovation That Drives Growth
//                 </h3>
//                 <p className="text-gray-600 text-sm mt-3 leading-relaxed">
//                   Every solution we create is designed with future growth in
//                   mind. We blend creativity, smart technology, and strategic
//                   thinking to deliver systems that not only solve problems but
//                   also help your business scale. Our innovation ensures that
//                   your digital investment continues to add long-term value.
//                 </p>
//               </div>

//               {/* Card 3 */}
//               <div
//                 className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center text-center
//                hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-200"
//               >
//                 <FaCheckCircle className="h-10 w-10 text-orange-400 mb-4" />
//                 <h3 className="text-2xl font-bold text-[#1b3376]">
//                   End-to-End Development Excellence
//                 </h3>
//                 <p className="text-gray-600 text-sm mt-3 leading-relaxed">
//                   From understanding your requirements to designing, developing,
//                   testing, and supporting your solution—everything is handled
//                   in-house by our skilled team. This ensures quality control,
//                   faster delivery, and a seamless experience with one dedicated
//                   partner you can depend on.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Solutions Icons Section */}
//       <section className="py-16 px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2
//               className="text-5xl font-extrabold mb-2 text-center"
//               style={{ color: "#1b3376" }}
//             >
//               {" "}
//               What We Offer
//             </h2>
//             <p className="text-2xl text-gray-600 font-bold mb-12 text-center">
//               Comprehensive technology solutions for your business
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
//             {/* Mobile App Development */}
//             <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md border-2 border-gray-500 text-center transform hover:scale-105 hover:shadow-lg hover:border-[#2596BE]/40 transition-all duration-300">
//               <div className="flex items-center justify-center h-16 w-16 mb-4 bg-[#2596BE]/10 rounded-full">
//                 <Smartphone className="w-8 h-8 text-[#2596BE]" />
//               </div>
//               <h3 className="font-bold text-lg text-gray-800">
//                 Mobile App
//                 <br />
//                 Development
//               </h3>
//             </div>

//             {/* End to End Development */}
//             <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md border-2 border-gray-500 text-center transform hover:scale-105 hover:shadow-lg hover:border-[#2596BE]/40 transition-all duration-300">
//               <div className="flex items-center justify-center h-16 w-16 mb-4 bg-[#2596BE]/10 rounded-full">
//                 <Play className="w-8 h-8 text-[#2596BE]" />
//               </div>
//               <h3 className="font-bold text-lg text-gray-800">
//                 End-to-End
//                 <br />
//                 Development
//               </h3>
//             </div>

//             {/* Custom Solutions */}
//             <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md border-2 border-gray-500 text-center transform hover:scale-105 hover:shadow-lg hover:border-[#2596BE]/40 transition-all duration-300">
//               <div className="flex items-center justify-center h-16 w-16 mb-4 bg-[#2596BE]/10 rounded-full">
//                 <Settings className="w-8 h-8 text-[#2596BE]" />
//               </div>
//               <h3 className="font-bold text-lg text-gray-800">
//                 Custom
//                 <br />
//                 Solutions
//               </h3>
//             </div>

//             {/* Secure Solutions */}
//             <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md border-2 border-gray-500 text-center transform hover:scale-105 hover:shadow-lg hover:border-[#2596BE]/40 transition-all duration-300">
//               <div className="flex items-center justify-center h-16 w-16 mb-4 bg-[#2596BE]/10 rounded-full">
//                 <Shield className="w-8 h-8 text-[#2596BE]" />
//               </div>
//               <h3 className="font-bold text-lg text-gray-800">
//                 Secure &<br />
//                 Reliable
//               </h3>
//             </div>

//             {/* Innovative Tech */}
//             <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md border-2 border-gray-500 text-center transform hover:scale-105 hover:shadow-lg hover:border-[#2596BE]/40 transition-all duration-300">
//               <div className="flex items-center justify-center h-16 w-16 mb-4 bg-[#2596BE]/10 rounded-full">
//                 <Camera className="w-8 h-8 text-[#2596BE]" />
//               </div>
//               <h3 className="font-bold text-lg text-gray-800">
//                 Latest
//                 <br />
//                 Technologies
//               </h3>
//             </div>
//           </div>        </div>
//       </section>

//       {/* Our Values & Promise - Home Style */}
//       <div
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
//         style={{ minHeight: "450px" }}
//       >
//         <div className="flex flex-col lg:flex-row lg:space-x-12">
//           {/* Left Side Content */}
//           <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left lg:ml-20">
//             <h3
//               className="text-4xl font-extrabold leading-tight mb-6"
//               style={{ color: "#1b3376" }}
//             >
//               Our Values & Promise
//             </h3>

//             <p className="text-gray-600 text-lg mb-8 leading-relaxed">
//               PK Solutions stands for integrity, quality, innovation, and
//               business understanding — delivering solutions that truly matter.
//             </p>

//             <p className="text-xl font-semibold text-gray-700 mt-6">
//               Your growth is our priority — and our solutions help you scale
//               effortlessly.
//             </p>
//           </div>

//           {/* Right Side Checklist */}
//           <div className="lg:w-1/2 lg:ml-20">
//             {" "}
//             {/* lg:ml-20 वापरून अजून उजवीकडे */}
//             <ul className="space-y-5 pl-16 md:pl-0">
//               {[
//                 "Deliver long-lasting digital solutions",
//                 "Maintain full transparency",
//                 "Work with discipline & precision",
//                 "Support clients throughout the journey",
//                 "Continuously upgrade with modern technologies",
//               ].map((item, index) => (
//                 <li key={index} className="flex items-center justify-start">
//                   <FaCheckCircle className="h-6 w-6 text-[#2596BE] mr-3" />
//                   <span className="text-lg text-gray-700 font-medium">
//                     {item}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Call to Action Section - Home Style */}
//       <div className="relative py-20 px-6 bg-gradient-to-r from-[#155b73] via-[#1c7ea1] to-[#2596BE] overflow-hidden">
//         <div className="absolute inset-0 pointer-events-none opacity-30">
//           <CircuitBackground />
//         </div>

//         <div className="max-w-4xl mx-auto text-center relative z-10">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Ready to Start Your Project?
//           </h2>
//           <p className="text-xl text-white/90 mb-10">
//             Let's discuss how we can help transform your business with our
//             innovative solutions
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <button
//               onClick={() => (window.location.href = "/contact")}
//               className="group px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
//             >
//               GET STARTED
//             </button>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
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
                Welcome to PK Solutions — Where Excellence Meets Examination Services
              </p>

              <h1 className="text-gray-500 text-lg font-bold leading-relaxed mb-6">
                At PK Solutions, we support institutions with reliable, secure, and high-quality
                examination and assessment solutions. Our goal is to simplify and strengthen the
                complete exam lifecycle through accuracy, confidentiality, and professional execution.
              </h1>

              <button className="bg-orange-600 hover:bg-orange-600 text-white font-bold 
text-base px-4 py-2 rounded-lg transition mr-8">
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
            <div className="grid grid-cols-2 gap-10">
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
                  className="p-6 border border-gray-700 rounded-lg shadow-lg text-center"
                >
                  <svg
                    className="mx-auto mb-3 text-[#1a498b]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    width={32}
                    height={32}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>

                  <h3 className="text-[#1a498b] text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
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
      <div className="py-12"
        style={{
          background: "linear-gradient(135deg, #48B1E4 0%, #1B3376 100%)",
        }}

      >
        <div className="max-w-7xl mx-auto px-3">

          {/* Team Icon and Title */}
          <div className="flex flex-col items-center mb-8">
            <div className="mb-6">
              <svg
                className="w-24 h-24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Lightbulb outline */}
                <path
                  d="M32 12a8 8 0 0 1 8 8c0 4-3 7-6 7s-6-3-6-7a8 8 0 0 1 8-8z"
                  stroke="#3AC9C9"
                  strokeWidth="3"
                  fill="none"
                />
                {/* Lightbulb filament */}
                <path d="M32 20v6" stroke="#000" />
                <path d="M28 26h8" stroke="#000" />
                {/* Light rays */}
                <line x1="32" y1="6" x2="32" y2="2" stroke="#000" />
                <line x1="26" y1="8" x2="23" y2="4" stroke="#000" />
                <line x1="38" y1="8" x2="41" y2="4" stroke="#000" />

                {/* People heads - bigger size */}
                <circle cx="14" cy="44" r="9" stroke="#000" />
                <circle cx="32" cy="44" r="9" stroke="#000" />
                <circle cx="50" cy="44" r="9" stroke="#000" />

                {/* People bodies - wider lines and longer */}
                <path d="M5 55h18" stroke="#000" strokeWidth="2.5" />
                <path d="M23 55h18" stroke="#000" strokeWidth="2.5" />
                <path d="M41 55h18" stroke="#000" strokeWidth="2.5" />
              </svg>
            </div>

            <h2 className="text-white text-5xl font-bold mb-4">OUR TEAM</h2>

            <p className="text-white text-lg max-w-2xl text-center leading-relaxed font-semibold">
              Led by engineers and IIT alumni, our team works around the clock to ensure seamless planning and execution—delivering end-to-end, trouble-free tech solutions on time.
            </p>
          </div>

          {/* Value Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['CLIENT CENTRIC', 'QUALITY DRIVEN', 'INNOVATIVE', 'RELIABLE', 'ISO 9001:2015', 'TRUSTWORTHY'].map((value, i) => (
              <div key={i} className="px-6 py-3 bg-white text-[#1a498b] font-extrabold rounded-full text-sm">
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
            <div className="space-y-6">
              <h2 className="text-[#1a498b] text-5xl font-bold leading-tight">
                Join Our Community
              </h2>

              <p className="text-gray-700 text-xl leading-relaxed font-bold">
Be a Part of a Purpose-Driven Team
At PK Solutions, we believe great work happens when passionate minds come together. We value creativity, collaboration, and the drive to build meaningful solutions that uplift institutions and learners. Join us as we innovate, experiment, and grow—together.              </p>

              <div className="flex gap-4 pt-4">
               
            <button className="bg-orange-600 hover:bg-orange-600 text-white font-semibold text-lg px-6 py-3 rounded-lg transition">
              EXPLORE
            </button>

                
            <button className="bg-orange-600 hover:bg-orange-600 text-white font-semibold text-lg px-6 py-3 rounded-lg transition">
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
