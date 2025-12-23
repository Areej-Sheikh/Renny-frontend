import React from "react";
//Video
import aboutVideo from "../../assets/01-aboutVideo.webm";
import manufacturingVideo from "../../assets/OurManufacturingProcess.mp4"
// import images
import unit1 from "../../assets/Unit-1.jpg";
import unit3 from "../../assets/Unit-3.jpg";

const Manufacturing = () => {
  return (
    <div className="w-full bg-black text-white">
      {/* ================= VIDEO SECTION ================= */}
      <section className="relative w-screen h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={aboutVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex items-end h-full transform -translate-y-6">
          <div className="px-6 md:px-20 pb-12 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Manufacturing Process
            </h2>
          </div>
        </div>
      </section>

      {/* ================= 50–50 SECTION ================= */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="bg-[#414042] text-white px-6 md:px-20 py-16">
          <h3 className="text-3xl font-semibold mb-6">
            Our Manufacturing Process
          </h3>

          <p className="mb-5 text-lg leading-relaxed">
            Renny Strips Ltd. manufacturing process lies in its integrated steel
            production process engineered for precision, performance &
            sustainability. It begins with raw material melting, followed by
            billet casting and hot rolling to produce narrow hot-rolled coils
            and wire rods, which form the foundation for all downstream
            production.
          </p>

          <p className="mb-5 text-lg leading-relaxed">
            ERW black and galvanized pipes and tubes are manufactured directly
            from narrow HR coils using advanced tubing mills. Scaffolding and
            formwork systems are then developed through a precise combination of
            narrow-width HR coils, wire rods and ERW black and galvanized pipes
            and tubes processed across multiple stages with state-of-the-art
            technology and stringent quality controls. MS Billets used specially
            for forging components. Each component is meticulously crafted to
            meet specific technical standards, ensuring superior strength,
            durability & performance.
          </p>

          <p className="mb-5 text-lg leading-relaxed">
            Seamless internal logistics across integrated facilities ensure
            efficient movement of semi-finished goods, which are then precision
            cut, formed, coated, and assembled. The process concludes with the
            manufacturing of customized finished products, followed by final
            inspection, secure packaging, and timely dispatch delivering Renny’s
            high-performance steel solutions to clients across industries and
            global markets.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="bg-[#ffe0d0] px-6 md:px-20 py-16 space-y-12">
          {/* UNIT 1 */}
          <div>
            <img
              src={unit1}
              alt="Unit 1 & 2"
              className="w-full h-[280px] object-cover shadow-lg"
            />
            <p className="mt-5 text-sm font-bold text-[#54595F]">
              Unit 1 & 2: Village Mangarh Machiwara Road, Kohara, Ludhiana –
              141112, India
            </p>
          </div>

          {/* UNIT 3 */}
          <div>
            <img
              src={unit3}
              alt="Unit 3"
              className="w-full h-[280px] object-cover shadow-lg"
            />
            <p className="mt-3 text-sm font-bold text-[#54595F]">
              Unit 3: Lakhowal Road, Opposite PSPCL House, Kohara, Ludhiana –
              141112, India
            </p>
          </div>
        </div>
      </section>
      {/* ================= FULL SCREEN VIDEO SECTION ================= */}
      <section className="w-screen h-screen overflow-hidden">
        <video
          className=""
          src={manufacturingVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </section>
    </div>
  );
};

export default Manufacturing;
