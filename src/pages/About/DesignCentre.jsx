import React from "react";
import { motion } from "framer-motion";
import designCentreBanner from "../../assets/Design-Center-Banner.webp";
import designCenterImage from "../../assets/DesignCentre-Frame.webp";

const DesignCentre = () => {
  return (
    <section className="w-full bg-gray-100">
      <motion.section
        className="relative h-[45vh] sm:h-[55vh] lg:h-[70vh] w-full overflow-hidden"
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src={designCentreBanner}
          alt="Design Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative z-10 h-full flex items-end
                     text-white font-bold
                     text-4xl sm:text-5xl lg:text-6xl
                     px-4 sm:px-6 lg:px-10 py-8 "
        >
          Design Centre
        </motion.h1>
      </motion.section>
      <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.h1
            className="text-center font-bold mb-8
                       text-3xl sm:text-4xl lg:text-[48px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Design Centre
            <div className="w-40 sm:w-56 lg:w-64 h-0.5 bg-blue mx-auto mt-4" />
          </motion.h1>

          {/* Top Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-base sm:text-[17px]
                       leading-relaxed sm:leading-[28px]
                       text-justify text-gray-700"
          >
            The Design Centre at Renny Strips Ltd is the nucleus of our
            engineering innovation, enabling the development of highly
            customized, project-specific solutions in scaffolding, formwork
            systems, steel structures, solar frameworks, livestock enclosures,
            and precision tubes. Our in-house design team undertakes a wide
            spectrum of functions, including custom component development, 3D
            CAD modeling, structural load and stress analysis, reverse
            engineering, die and fixture design, as well as product validation
            through prototyping and pilot runs.
          </motion.p>

          {/* Image with proper spacing & size */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="my-10"
          >
            <img
              src={designCenterImage}
              alt="Quality Centre Inspection Process"
              className="w-full h-auto max-h-[520px] object-contain mx-auto"
            />
          </motion.div>

          {/* Bottom Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base sm:text-[17px]
                       leading-relaxed sm:leading-[28px]
                       text-justify text-gray-700"
          >
            Equipped with advanced design platforms such as AutoCAD, SolidWorks,
            and CAM tools for CNC/VMC programming, the centre ensures precise
            design execution and seamless integration with manufacturing. Our
            flexible design process allows us to modify material grades (ranging
            from 235 MPa to 460 MPa), wall thicknesses, diameters, profiles,
            finishes, and connection mechanisms—delivering fully engineered
            systems rather than off-the-shelf components. Close collaboration
            with in-house forging, fabrication, and tube-forming teams ensures
            rapid transition from concept to production, while custom-developed
            Poka-Yoke fixtures and gauges guarantee quality, consistency, and
            repeatability in every solution we deliver.
          </motion.p>
        </div>
      </section>
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-1 lg:grid-cols-[30%_70%]
                    gap-10 sm:gap-12 lg:gap-16 items-start"
          >
            {/* ================= LEFT : STATS (30%) ================= */}
            <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
              {/* STAT BOX 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-sm"
              >
                {/* Back layer */}
                <div className="absolute -bottom-3 -left-3 w-full h-full bg-[#292c44]" />

                {/* Front layer */}
                <div className="relative bg-[#292c44] text-white px-6 sm:px-8 py-8 sm:py-10">
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-3">
                    46
                  </h3>
                  <p className="uppercase text-xs sm:text-sm tracking-wide mb-3">
                    Innovation Rewards Received
                  </p>
                  <p className="text-sm leading-relaxed text-white/80">
                    Our dedication to innovation has been recognized with 46
                    prestigious awards, reinforcing our leadership.
                  </p>
                </div>
              </motion.div>

              {/* STAT BOX 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative w-full max-w-sm"
              >
                {/* Back layer */}
                <div className="absolute -bottom-3 -left-3 w-full h-full bg-[#292c44]" />

                {/* Front layer */}
                <div className="relative bg-[#292c44] text-white px-6 sm:px-8 py-8 sm:py-10">
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-3">
                    98%
                  </h3>
                  <p className="uppercase text-xs sm:text-sm tracking-wide mb-3">
                    Client Satisfaction Rate
                  </p>
                  <p className="text-sm leading-relaxed text-white/80">
                    Reflected in an outstanding satisfaction rate among our
                    clients.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ================= RIGHT : CONTENT (70%) ================= */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
                Strive to be Pioneer in Innovation
              </h2>

              <p
                className="text-gray-700 text-base sm:text-[17px]
                     leading-relaxed sm:leading-[30px]
                     text-justify max-w-3xl mb-8"
              >
                Equipped with advanced design platforms such as AutoCAD,
                SolidWorks, and CAM tools for CNC/VMC programming, the centre
                ensures precise design execution and seamless integration with
                manufacturing. Our flexible design process allows us to modify
                material grades (ranging from 235 MPa to 460 MPa), wall
                thicknesses, diameters, profiles, finishes, and connection
                mechanisms—delivering fully engineered systems rather than
                off-the-shelf components. Close collaboration with in-house
                forging, fabrication, and tube-forming teams ensures rapid
                transition from concept to production, while custom-developed
                Poka-Yoke fixtures and gauges guarantee quality, consistency,
                and repeatability in every solution we deliver.
              </p>

              <button
                className="border border-black px-6 py-2 text-sm
                     uppercase tracking-wide
                     hover:bg-black hover:text-white transition"
              >
                Read More
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DesignCentre;
