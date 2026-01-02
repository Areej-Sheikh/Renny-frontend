import React from "react";

import hrCoilsBG from "../../assets/HR-Coil-scaled.jpg";
import hrCoilsSide from "../../assets/narrow-HR-Coil-min-scaled.jpg";

const HRCoils = () => {
  return (
    <div className="relative w-full overflow-x-hidden font-jost">

      {/* ================= FIXED BACKGROUND IMAGE ================= */}
      <div className="fixed inset-0 -z-10">
        <img
          src={hrCoilsBG}
          alt="HR Coils Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* ================= HERO SECTION ================= */}
      <div className="h-screen flex items-end text-white">
        <div className="px-6 md:px-20 pb-14">
          <h1 className="text-4xl md:text-6xl font-medium">
            Narrow-width HR coils
          </h1>
        </div>
      </div>

      {/* ================= WHITE INTRO SECTION ================= */}
      <div className="bg-white text-black py-24">
        <div className="px-6 md:px-20">

          <h2 className="text-3xl font-medium text-orange-500 mb-6">
            Narrow-width HR Coils
          </h2>

          <div className="max-w-[1100px]">
            <span className="block text-gray-600 font-normal leading-[1.7] tracking-[0.2px]">
              Renny Strips Ltd. is recognized as a high-quality Narrow HR Coil
              producer in North India, supported by state-of-the-art manufacturing
              processes. Renny has engineered specially designed blooms for flat
              hot rolled steel coil production, resulting in coils with
              exceptional surface finish, ensuring unmatched quality and
              reliability. All production processes strictly comply with IS:
              10748 &amp; 2062 standards, delivering consistent and high-quality
              output across applications.
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
              Renny Strips Ltd. offers Narrow-width HR coils in multiple thicknesses
              and grades to meet diverse industrial requirements. Our advanced
              manufacturing technology ensures precision, high productivity, and
              cost efficiency in every coil.
            </p>

            <ol className="list-decimal list-inside space-y-2 font-normal mb-6">
              <li>
                <span className="font-medium">Grade:</span> S 235 to S 460
              </li>
              <li>
                <span className="font-medium">Thickness:</span> 1.2 mm to 6 mm
              </li>
            </ol>

            <p className="leading-[1.7] font-normal">
              Engineered for precision and performance, Renny HR Coils deliver
              consistent quality, superior flatness, and excellent formability
              for versatile industrial applications.
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
              Core Strengths
            </h2>

            <ol className="list-decimal list-inside space-y-4 mb-10 leading-[1.7] font-normal">
              <li>
                <span className="font-medium">Fully Automated Production:</span>{" "}
                Manufactured using advanced fully automated hot rolling mills for
                consistent quality and precision.
              </li>

              <li>
                <span className="font-medium">Stringent Quality Control:</span>{" "}
                Every coil undergoes rigorous testing and dimensional checks to
                ensure compliance with Indian and global standards.
              </li>

              <li>
                <span className="font-medium">Exceptional Quality:</span>{" "}
                Known for superior surface finish, mechanical strength, and
                dimensional accuracy.
              </li>

              <li>
                <span className="font-medium">Customized Grades Available:</span>{" "}
                Tailored coil grades offered based on required strength,
                formability, and specific application needs.
              </li>

              <li>
                <span className="font-medium">Cost-Effective Performance:</span>{" "}
                Delivers high performance at an affordable price for value-driven
                industries.
              </li>

              <li>
                <span className="font-medium">Versatile Applications:</span>{" "}
                Engineered for construction, fabrication, automotive, and
                infrastructure sectors.
              </li>

              <li>
                <span className="font-medium">Reliable Supply:</span>{" "}
                Supported by robust infrastructure ensuring timely delivery and
                batch-to-batch consistency.
              </li>
            </ol>

            <h2 className="text-4xl font-medium mb-6">
              Application Arena
            </h2>

            <p className="leading-[1.7] font-normal">
              Narrow Hot Rolled Coils are extensively used in tube manufacturing,
              scaffolding and formwork systems, automotive components, furniture
              fabrication, and construction hardware. With excellent formability
              and weldability, these coils support roll forming, stamping, and
              structural fabrication in light and medium engineering applications.
            </p>

          </div>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="w-full h-full">
          <img
            src={hrCoilsSide}
            alt="Narrow HR Coils"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default HRCoils;
