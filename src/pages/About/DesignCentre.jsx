import React from "react";
import { motion } from "framer-motion";
import designCentreBanner from "../../assets/Design-Center-Banner.webp";
import designCenterImage from "../../assets/DesignCentre-Frame.webp";

const DesignCentre = () => {
  return (
    <section className="w-full bg-gray-100">
      <motion.section
        className="relative h-[100vh] w-full overflow-hidden"
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src={designCentreBanner}
          alt="Design Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />


        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative z-10 text-white text-6xl md:text-7xl font-bold flex items-end h-full px-10 py-10 "
        >
          Design Centre
        </motion.h1>
      </motion.section>
      <section className="w-full bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.h1
            className="text-[48px] font-bold mb-10 w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Design Centre
            <div className="w-70 h-0.5 bg-blue mx-auto rounded-full mb-10" />
          </motion.h1>

          {/* Top Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-black-700 md:text-[17px] leading-relaxed md:leading-[28px] text-justify"
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
            className="my-8"
          >
            <img
              src={designCenterImage}
              alt="Quality Centre Inspection Process"
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Bottom Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-black-700 md:text-[17px] leading-relaxed md:leading-[28px] text-justify"
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
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-16 items-start">
            {/* LEFT SIDE – CUBE STAT BOXES */}
            <div className="flex flex-col gap-20">
              {/* STAT BOX 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-xs"
              >
                {/* Back layer – LEFT + BOTTOM */}
                <div className="absolute -bottom-4 -left-4 w-full h-full bg-[#292c44]"></div>

                {/* Front layer */}
                <div className="relative bg-[#292c44] text-white px-8 py-10">
                  <p className="uppercase text-lg font-bold tracking-wide mb-4">
                    Total Number of Engineers
                  </p>
                  <p className="text-sm leading-relaxed text-white/80">
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nulla deserunt error incidunt sint repellendus. Sunt quidem voluptatibus doloribus nostrum.
                  </p>
                </div>
              </motion.div>

              {/* STAT BOX 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative w-full max-w-xs"
              >
                {/* Back layer – LEFT + BOTTOM */}
                <div className="absolute -bottom-4 -left-4 w-full h-full bg-[#292c44]"></div>

                {/* Front layer */}
                <div className="relative bg-[#292c44] text-white px-8 py-10">
                  <p className="uppercase text-lg font-bold tracking-wide mb-4">
                    Total number of Products
                  </p>
                  <p className="text-sm leading-relaxed text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto illo veniam enim culpa reiciendis perferendis dolorem tenetur assumenda blanditiis reprehenderit.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE – CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-semibold text-black mb-6">
                Strive to be Pioneer in Innovation
              </h1>
              {/* <motion.h1
                className="text-[48px] font-bold  mb-5 w-full text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Strive to be Pioneer in Innovation
                <div className="w-180 h-0.5 bg-blue mx-auto rounded-full mb-10" />
              </motion.h1> */}

              <p className=" text-gray-700 text-base md:text-[17px] leading-7 md:leading-[30px] text-justify max-w-3xl mb-8">
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

              <button className="border border-black px-6 py-2 text-sm uppercase tracking-wide hover:bg-black hover:text-white transition">
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