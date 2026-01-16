import msBilletsBG from "../../assets/msBilletsBG.png";
import msBillets1 from "../../assets/msBillets1.jpg";

const MSBillets = () => {
  return (
    <div className="relative w-full overflow-x-hidden font-jost">

      {/* ================= FIXED BACKGROUND IMAGE ================= */}
      <div className="fixed inset-0 -z-10">
        <img
          src={msBilletsBG}
          alt="MS Billets Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* ================= HERO SECTION ================= */}
      <div className="h-screen flex items-end text-white">
        <div className="px-6 md:px-20 pb-14">
          <h1 className="text-4xl md:text-6xl font-medium">
            MS Billets
          </h1>
        </div>
      </div>

     {/* ================= WHITE INTRO SECTION ================= */}
<div className="bg-white text-black py-24">
  <div className="px-6 md:px-20">

    <h2 className="text-3xl font-medium text-orange-500 mb-6">
      MS billets
    </h2>

    <div className="max-w-[1100px]">
      <span className="block text-gray-600 font-normal leading-[1.7] tracking-[0.2px]">
        Renny Strips Ltd. specializes in manufacturing billets and blooms in a
        wide range of alloy, carbon & mild steel grades, catering to industries
        such as automotive, railways, construction, oil & gas & heavy engineering.
        Renny billets meet the highest industry standards, ensuring exceptional
        forgeability, strength & structural integrity.
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

            <p className="leading-relaxed font-normal mb-6">
              Renny’s MS billet range is designed for superior internal soundness,
              uniform composition, and high structural integrity ideal for
              critical applications in automotive, industrial, and heavy
              engineering sectors.
            </p>

            <ol className="list-decimal list-inside space-y-2 font-normal mb-6">
              <li>Billets: 100 × 100 mm to 130 × 130 mm</li>
              <li>Blooms: 250 × 200 mm</li>
            </ol>

            <p className="leading-relaxed font-normal">
              Renny MS Billets are manufactured with controlled chemistry, uniform
              microstructure, and excellent surface quality ensuring optimal forge
              response and mechanical properties for critical applications.
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

            <ol className="list-decimal list-inside space-y-4 mb-12 leading-relaxed font-normal">
              <li>
                <strong>Advanced De-Scaling Technology:</strong>{" "} <br></br>
                High-efficiency de-scalers remove gaseous elements like hydrogen,
                oxygen, and nitrogen, enhancing steel purity, ductility, and
                toughness.
              </li>

              <li>
                <strong>Precision Continuous Casting Machines (CCM):</strong>{" "}<br></br>
                Enables production of billets and blooms with excellent
                dimensional accuracy, uniform grain structure, and a superior
                surface finish.
              </li>

              <li>
                <strong>Advanced Refining for Steel Purity:</strong>{" "}<br></br>
                Multi-stage refining with Eccentric Bottom Tapping (EBT) ensures
                slag-free liquid steel, precise alloy adjustments, and reduced
                inclusions for cleaner, high-purity output.
              </li>

              <li>
                <strong>Unmatched Production Capacity:</strong>{" "}<br></br>
                Large-scale billet output ensures the ability to meet bulk and
                urgent requirements across forging, re-rolling, and heavy
                engineering sectors.
              </li>

              <li>
                <strong>Integrated Logistics Network:</strong>{" "}<br></br>
                Robust supply chain infrastructure ensures on-time delivery to
                both domestic and international destinations.
              </li>

              <li>
                <strong>Preferred Industry Partner:</strong>{" "}<br></br>
                Trusted by leading fabrication, forging, and infrastructure
                companies for consistent quality, scalable supply, and dependable
                service.
              </li>
            </ol>

            <h2 className="text-4xl font-medium mb-6">
              Application Arena
            </h2>

            <p className="leading-relaxed font-normal">
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
