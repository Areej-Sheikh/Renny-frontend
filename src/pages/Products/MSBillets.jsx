import msBilletsBG from "../../assets/msbilletBanner.webm";
import msBillets1 from "../../assets/msBillets1.webp";
import { motion } from "framer-motion";
import AdvancedTechnology from "../../assets/advanced de scaling technology.webp";
import Precision from "../../assets/Precision Continuous Casting Machines.webp";
import AdvancedRefining from "../../assets/Advanced Refining for Steel Purity.webp";
import ProductionCapacity from "../../assets/Unmatched Production Capacity.webp";
import LogisticsNetwork from "../../assets/Integrated Logistics Network.webp";
import IndustryPartner from "../../assets/Preferred Industry Partner.webp";
import Automotive from "../../assets/Automotive.jpg";
import Railway from "../../assets/Railway.webp";
import Areospace from "../../assets/Aerospace.webp";
import Defence from "../../assets/Defence.webp";
import Heavy from "../../assets/heavy engineering.webp";
const MSBillets = () => {
  return (
    <div className="relative w-full overflow-x-hidden font-jost">
      {/* ================= BANNER SECTION ================= */}
      <section>
        {/* ================= FIXED BACKGROUND IMAGE ================= */}
        <div className="fixed inset-0 -z-10">
          <video
            src={msBilletsBG}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* ================= HERO SECTION ================= */}
        <div className="h-screen flex items-end text-white">
          <div className="flex items-end h-full px-6 md:px-20 pb-12">
            <motion.h2
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              MS Billets
            </motion.h2>
          </div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section>
        {/* ================= WHITE INTRO SECTION ================= */}
        <div className="bg-white text-black pt-10 pb-20">
          <div className="px-6 md:px-20">
            <motion.h1
              className="text-[32px]  md:text-[48px] font-bold w-full text-center py-3 "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              MS Billets
              <div className="w-36 sm:w-24 md:w-40 h-0.5 bg-black mx-auto rounded-full mb-8 md:mb-10" />
            </motion.h1>

            <div className="max-w-[1100px]">
              <span className="block text-gray-600 text-xl font-normal leading-[1.7] tracking-[0.2px]">
                Renny Strips Ltd. specializes in manufacturing billets and
                blooms in a wide range of alloy, carbon & mild steel grades,
                catering to industries such as automotive, railways,
                construction, oil & gas & heavy engineering. Renny billets meet
                the highest industry standards, ensuring exceptional
                forgeability, strength & structural integrity.
              </span>
            </div>
          </div>
        </div>
        {/* ================= WINDOW ================= */}
        <section className="relative w-full overflow-hidden ">
          <div className="bg-transparent w-full h-[70vh] flex items-end justify-center gap-10 text-3xl">
            <div className="border-r-4 border-blue-highlight   text-white font-bold w-45 leading-relaxed mb-20">
              <p>Superior Internal soundness</p>
            </div>
            <div className="border-r-4 mb-20 border-blue-highlight   text-white font-bold w-45 leading-relaxed">
              <p>Precision controlled chemistry</p>
            </div>
            <div className="border-r-4 mb-20 border-blue-highlight   text-white font-bold w-60">
              <p>Uniform Microstructures for better performance</p>
            </div>
            <div className=" mb-20  text-white font-bold w-57">
              <p>Wide size range with excellent surface quality</p>
            </div>
          </div>
          <div className="h-[20vh] bg-white"></div>
          <div className="absolute right-0 top-[15%] -translate-y-[35%] h-[87vh] w-20 bg-white"></div>
          <div className="absolute left-0 top-[15%] -translate-y-[35%] h-[87vh] w-20 bg-white"></div>
        </section>
      </section>

      {/* ================= CORE STRENGTH ================= */}
      <div className="bg-gray-100 min-h-screen px-20 pb-20">
        <motion.h1
          className="text-[32px]  md:text-[48px] font-bold w-full text-center py-3 "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Core Strengths
          <div className="w-36 sm:w-34 md:w-70 h-0.5 bg-black mx-auto rounded-full mb-8 md:mb-10" />
        </motion.h1>
        <div className="grid grid-cols-3">
          {/* NOW GRAY CARD (was white) */}
          <div className="h-75 flex items-center justify-center  bg-gray-200 text-gray-700  hover:text-white  group hover:bg-gray-700 transition duration-300">
            <div className="px-10 py-20 flex flex-col items-center text-center justify-center">
              <img
                src={AdvancedTechnology}
                alt=""
                className="w-40 h-40 transition duration-300 group-hover:brightness-0 group-hover:invert "
              />
              <h2 className="font-bold text-[16px] transition duration-300">
                Advanced De-Scaling Technology
              </h2>
              <p className="text-sm transition duration-300">
                High-efficiency de-scalers remove gaseous elements like
                hydrogen, oxygen, and nitrogen, enhancing steel purity,
                ductility, and toughness.
              </p>
            </div>
          </div>

          {/* NOW WHITE CARD (was gray) */}
          <div className="h-75 flex items-center justify-center bg-white group hover:bg-blue transition duration-300">
            <div className="px-10 py-20 flex flex-col items-center justify-center text-center">
              <img
                src={Precision}
                alt=""
                className="w-40 h-40 transition duration-300 group-hover:brightness-0 group-hover:invert"
              />
              <h2 className="font-bold text-[16px] transition duration-300 group-hover:text-white">
                Precision Continuous Casting Machines (CCM)
              </h2>
              <p className="text-sm transition duration-300 group-hover:text-white">
                Enables production of billets and blooms with excellent
                dimensional accuracy, uniform grain structure, and a superior
                surface finish.
              </p>
            </div>
          </div>

          {/* NOW GRAY CARD */}
          <div className="h-75 flex items-center justify-center  bg-gray-200 text-gray-700  hover:text-white  group hover:bg-gray-700 transition duration-300">
            <div className="px-10 py-20 flex flex-col items-center justify-center text-center">
              <img
                src={AdvancedRefining}
                alt=""
                className="w-40 h-40 transition duration-300 group-hover:brightness-0 group-hover:invert  "
              />
              <h2 className="font-bold text-[16px] transition duration-300">
                Advanced Refining for Steel Purity
              </h2>
              <p className="text-sm transition duration-300">
                Multi-stage refining with Eccentric Bottom Tapping (EBT) ensures
                slag-free liquid steel, precise alloy adjustments, and reduced
                inclusions for cleaner, high-purity output.
              </p>
            </div>
          </div>

          {/* NOW WHITE CARD */}
          <div className="h-75 flex items-center justify-center bg-white group hover:bg-blue transition duration-300">
            <div className="px-10 py-20 flex flex-col items-center justify-center text-center">
              <img
                src={ProductionCapacity}
                alt=""
                className="w-40 h-40 transition duration-300 group-hover:brightness-0 group-hover:invert"
              />
              <h2 className="font-bold text-[16px] transition duration-300 group-hover:text-white">
                Unmatched Production Capacity
              </h2>
              <p className="text-sm transition duration-300 group-hover:text-white">
                Large-scale billet output ensures the ability to meet bulk and
                urgent requirements across forging, re-rolling, and heavy
                engineering sectors.
              </p>
            </div>
          </div>

          {/* NOW GRAY CARD */}
          <div className="h-75 flex items-center justify-center  bg-gray-200 text-gray-700  hover:text-white  group hover:bg-gray-700 transition duration-300">
            <div className="px-10 py-20 flex flex-col items-center justify-center text-center">
              <img
                src={LogisticsNetwork}
                alt=""
                className="w-40 h-40 transition duration-300 group-hover:brightness-0 group-hover:invert "
              />
              <h2 className="font-bold text-[16px] transition duration-300">
                Integrated Logistics Network
              </h2>
              <p className="text-sm transition duration-300">
                Robust supply chain infrastructure ensures on-time delivery to
                both domestic and international destinations.
              </p>
            </div>
          </div>

          {/* NOW WHITE CARD */}
          <div className="h-75 flex items-center justify-center bg-white group hover:bg-blue transition duration-300">
            <div className="px-10 py-20 flex flex-col items-center justify-center text-center">
              <img
                src={IndustryPartner}
                alt=""
                className="w-40 h-40 transition duration-300 group-hover:brightness-0 group-hover:invert"
              />
              <h2 className="font-bold text-[16px] transition duration-300 group-hover:text-white">
                Preferred Industry Partner
              </h2>
              <p className="text-sm transition duration-300 group-hover:text-white">
                Trusted by leading fabrication, forging, and infrastructure
                companies for consistent quality, scalable supply, and
                dependable service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= APPLICATION ARENA ================= */}
      <section className="h-screen bg-white px-20 pb-20 pt-10">
        <motion.h1
          className="text-[32px]  md:text-[48px] font-bold w-full text-center py-3 "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Application Arena
          <div className="w-36 sm:w-34 md:w-70 h-0.5 bg-black mx-auto rounded-full mb-8 md:mb-10" />
        </motion.h1>
        <p className="text-xl mb-10">
          MS billets are essential in the manufacturing of high-strength
          components used across automotive, railway, aerospace, defence, and
          heavy engineering sectors. With excellent metallurgical integrity and
          uniform grain structure, these billets are ideal for producing
          crankshafts, gears, axle beams, flanges, and other load-bearing parts
          that demand superior strength, toughness, and fatigue resistance.
        </p>
        <div className="flex items-center justify-center gap-15">
          <div
            className="w-40 h-40 flex items-center justify-center flex-col 
                hover:scale-110 
                transition-all duration-300 ease-in-out 
                hover:shadow-[0_0_30px_rgba(59,130,246,0.9)] 
                cursor-pointer rounded-xl"
          >
            <img src={Automotive} alt="" className="  w-100 h-100 " />
            <p>Automotive</p>
          </div>
          <div
            className="w-40 h-40 flex items-center justify-center flex-col 
                hover:scale-110 
                transition-all duration-300 ease-in-out 
                hover:shadow-[0_0_30px_rgba(59,130,246,0.9)] 
                cursor-pointer rounded-xl"
          >
            <img src={Railway} alt="" className="  w-40 h-40 " />
            <p>Railway</p>
          </div>
          <div
            className="w-40 h-40 flex items-center justify-center flex-col 
                hover:scale-110 
                transition-all duration-300 ease-in-out 
                hover:shadow-[0_0_30px_rgba(59,130,246,0.9)] 
                cursor-pointer rounded-xl"
          >
            <img src={Areospace} alt="" className="  w-40 h-40 " />
            <p>Aerospace</p>
          </div>
          <div
            className="w-40 h-40 flex items-center justify-center flex-col 
                hover:scale-110 
                transition-all duration-300 ease-in-out 
                hover:shadow-[0_0_30px_rgba(59,130,246,0.9)] 
                cursor-pointer rounded-xl"
          >
            <img src={Defence} alt="" className="  w-40 h-40 " />
            <p>Defence</p>
          </div>
          <div
            className="w-40 h-40 flex items-center justify-center flex-col hover:scale-110 hover:scale-110 
                transition duration-300 
                hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]"
          >
            <img src={Heavy} alt="" className="  w-40 h-40 " />
            <p>Heavy Engineering</p>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT RANGE (RIGHT SIDE) ================= */}
      <div className="relative py-32 text-white">
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative px-6 md:px-20 flex justify-end">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Product Range & Specification
            </h2>

            <p className=" text-sm   leading-relaxed font-normal mb-6">
              Renny’s MS billet range is designed for superior internal
              soundness, uniform composition, and high structural
              integrity—ideal for critical applications in automotive,
              industrial, and heavy engineering sectors.
            </p>

            <ol className="list-decimal list-inside space-y-2 font-normal mb-6">
              <li>Billets: 100 × 100 mm to 130 × 130 mm</li>
              <li>Blooms: 250 × 200 mm</li>
            </ol>

            <p className=" text-sm   leading-relaxed font-normal">
              Renny MS Billets are manufactured with controlled chemistry,
              uniform microstructure, and excellent surface quality—ensuring
              optimal forge response and mechanical properties for critical
              applications.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        {/* LEFT – TEXT */}
        <div className="bg-[#4a4a4a] text-white px-6 md:px-20 py-16 flex items-center">
          <div className="px-10 py-20 flex flex-col items-center justify-center">
            <h2 className="text-4xl font-medium mb-6">Core Strengths</h2>

            <ol className="list-decimal list-inside space-y-4 mb-12 leading-relaxed font-normal">
              <li>
                <strong>Advanced De-Scaling Technology:</strong> <br></br>
                High-efficiency de-scalers remove gaseous elements like
                hydrogen, oxygen, and nitrogen, enhancing steel purity,
                ductility, and toughness.
              </li>

              <li>
                <strong>Precision Continuous Casting Machines (CCM):</strong>{" "}
                <br></br>
                Enables production of billets and blooms with excellent
                dimensional accuracy, uniform grain structure, and a superior
                surface finish.
              </li>

              <li>
                <strong>Advanced Refining for Steel Purity:</strong> <br></br>
                Multi-stage refining with Eccentric Bottom Tapping (EBT) ensures
                slag-free liquid steel, precise alloy adjustments, and reduced
                inclusions for cleaner, high-purity output.
              </li>

              <li>
                <strong>Unmatched Production Capacity:</strong> <br></br>
                Large-scale billet output ensures the ability to meet bulk and
                urgent requirements across forging, re-rolling, and heavy
                engineering sectors.
              </li>

              <li>
                <strong>Integrated Logistics Network:</strong> <br></br>
                Robust supply chain infrastructure ensures on-time delivery to
                both domestic and international destinations.
              </li>

              <li>
                <strong>Preferred Industry Partner:</strong> <br></br>
                Trusted by leading fabrication, forging, and infrastructure
                companies for consistent quality, scalable supply, and
                dependable service.
              </li>
            </ol>

            <h2 className="text-4xl font-medium mb-6">Application Arena</h2>

            <p className=" text-sm   leading-relaxed font-normal">
              MS billets are essential in the manufacturing of high-strength
              components used across automotive, railway, aerospace, defence,
              and heavy engineering sectors. With excellent metallurgical
              integrity and uniform grain structure, these billets are ideal for
              producing crankshafts, gears, axle beams, flanges, and other
              load-bearing parts that demand superior strength, toughness, and
              fatigue resistance.
            </p>
          </div>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="w-full h-full">
          <img
            src={msBillets1}
            alt="MS Billets"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MSBillets;
