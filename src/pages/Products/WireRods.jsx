import React from "react";

import wireRodsBG from "../../assets/wireRodsBG.jpg";
import wireRods1 from "../../assets/wireRods1.jpg";

const WireRods = () => {
  return (
    <div className="relative w-full overflow-x-hidden font-jost">

      {/* ================= FIXED BACKGROUND IMAGE ================= */}
      <div className="fixed inset-0 -z-10">
        <img
          src={wireRodsBG}
          alt="Wire Rods Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* ================= HERO SECTION ================= */}
      <div className="h-screen flex items-end text-white">
        <div className="px-6 md:px-20 pb-14">
          <h1 className="text-4xl md:text-6xl font-medium">
            Wire Rods
          </h1>
        </div>
      </div>

      {/* ================= WHITE INTRO SECTION ================= */}
      <div className="bg-white text-black py-24">
        <div className="px-6 md:px-20">

          <h2 className="text-3xl font-medium text-orange-500 mb-6">
            Wire Rods
          </h2>

          <div className="max-w-[1100px]">
            <span className="block text-gray-600 font-normal leading-[1.7] tracking-[0.2px]">
              Renny Strips Ltd. Wire Rods are premium hot-rolled long steel products
              designed for high performance across automotive, construction,
              manufacturing, and electrical industries. Manufactured using
              advanced hot rolling processes, our wire rods meet the highest
              industry standards with exceptional mechanical strength,
              dimensional accuracy & chemical consistency.
            </span>
          </div>

        </div>
      </div>

      {/* ================= PRODUCT RANGE (RIGHT SIDE) ================= */}
      <div className="relative py-32 text-white">
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative px-6 md:px-20 flex justify-end">
          <div className="w-full md:w-1/2">

            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Product Range & Specification
            </h2>

            <p className="leading-[1.7] font-normal mb-6">
              We manufacture various grades of wire rods including low carbon,
              cold heading (CHQ), medium carbon, and other alloy grades such as
              free-cutting steel and ball-bearing steel tailored to meet diverse
              customer requirements.
            </p>

            <ul className="space-y-2 font-normal mb-6">
              <li>
                <span className="font-medium">SAE 1010</span> – Balanced strength and ductility for general applications.
              </li>
              <li>
                <span className="font-medium">SAE 1012</span> – Superior weldability & formability.
              </li>
              <li>
                <span className="font-medium">SAE 1018</span> – Enhanced toughness and durability for demanding applications.
              </li>
            </ul>

            <p className="leading-[1.7] font-normal">
              With low sulphur & phosphorus content, Renny wire rods ensure high
              purity, reducing impurities for superior quality and performance.
            </p>

          </div>
        </div>
      </div>

      {/* ================= CORE STRENGTHS + APPLICATION ARENA ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">

        {/* LEFT – TEXT */}
        <div className="bg-[#4a4a4a] text-white px-6 md:px-20 py-16 flex items-center">
          <div>

            <h2 className="text-4xl font-medium mb-6">
              Core Strength
            </h2>

            <ol className="list-decimal list-inside space-y-4 mb-10 leading-[1.7] font-normal">
              <li>
                <span className="font-medium"><strong>State-of-the-Art Manufacturing:</strong></span>{" "} <br></br>
                Renny wire rods are produced using high-speed wire rod mills with
                advanced automation, ensuring dimensional accuracy and consistent
                quality through real-time monitoring and precision engineering.
              </li>

              <li>
                <span className="font-medium"><strong>Superior Mechanical Properties:</strong></span>{" "}<br></br>
                Designed for exceptional tensile strength, elongation, and
                uniformity, Renny wire rods meet stringent industry standards and
                deliver durability and flexibility for demanding applications.
              </li>

              <li>
                <span className="font-medium"><strong>Trusted Across Industries:</strong></span>{" "}<br></br>
                With rigorous quality checks and modern production techniques,
                Renny wire rods are widely used where precision and reliability
                are paramount.
              </li>
            </ol>

            <h2 className="text-4xl font-medium mb-6">
              Application Arena
            </h2>

            <p className="leading-[1.7] font-normal">
              Renny Wire Rods serve automobile, engineering, and spring
              applications, including suspension systems, engine parts,
              fasteners, wire ropes, tools, and bearings. Their superior strength
              and precision make them ideal for high-performance industrial
              needs.
            </p>

          </div>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="w-full h-full">
          <img
            src={wireRods1}
            alt="Wire Rods"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default WireRods;
