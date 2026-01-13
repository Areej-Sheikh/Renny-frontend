import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import aboutVideo from '../../assets/01-aboutVideo.webm';
import unit1 from '../../assets/Unit-1.webp';
import unit2 from '../../assets/Unit-3.webp';
import image from '../../assets/ManufacturingImg.webp';
import video from '../../assets/Our-Manufacturing-Process-8.webm';
import rawimg from '../../assets/RawtoRemarkable.webp';
import carbonFootprint from '../../assets/carbonFootprint.webp';

const Manufacturing = () => {
  const [activeUnit, setActiveUnit] = useState('unit1');

  const unitData = {
    unit1: {
      title: 'Unit 1',
      address:
        'Village Mangarh Machiwara Road, Kohara, Ludhiana - 141112, India',
      image: unit1,
    },
    unit2: {
      title: 'Unit 2',
      address:
        'Lakhowal Road, Opposite PSPCL House, Kohara, Ludhiana, Punjab - 141112, India',
      image: unit2,
    },
  };

  const currentUnit = unitData[activeUnit];

  /* ================= ANIMATIONS ================= */

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.18 },
    },
  };

  const imageZoom = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  /* ================= COMPONENT ================= */

  return (
    <div className="relative flex flex-col font-helvetica">
      {/* ================= BANNER ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={imageZoom}
        className="relative h-[90vh] w-full overflow-hidden mb-10"
      >
        <video
          src={aboutVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

        <motion.h1
          variants={fadeUp}
          className="relative z-10 text-white text-6xl md:text-7xl font-bold
          flex items-end justify-start h-full py-10 px-10"
        >
          Manufacturing Process
        </motion.h1>
      </motion.section>

      {/* ================= INTEGRATED MANUFACTURING ================= */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="m-10 flex flex-col items-center justify-center"
      >
        <motion.h1
          variants={fadeUp}
          className="text-[37px] font-bold ml-20 w-full text-center"
        >
          Integrated Manufacturing
          <motion.div
            variants={fadeUp}
            className="w-96 h-0.5 bg-blue mx-auto rounded-full mb-10"
          />
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          className="text-[27px] font-bold ml-20 mb-5 w-full text-center"
        >
          Intelligent Engineering. Infinite Possibilities.
        </motion.h2>

        <motion.p variants={fadeUp} className="text-left mb-10">
          Renny Strips Ltd. operates an integrated steel manufacturing ecosystem
          built for precision, performance and sustainability. Our process
          begins with raw material melting, billet casting and hot rolling to
          produce narrow HR coils and wire rods, forming the base for ERW pipes,
          scaffolding systems, formwork components and forged parts. Advanced
          tubing mills, coating lines and multi-stage processing ensure
          consistent mechanical properties, durability and high structural
          integrity.
        </motion.p>

        <motion.div
          variants={imageZoom}
          className="w-full h-[550px] rounded-4xl overflow-hidden mb-10"
        >
          <img src={image} alt="" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={container}
        >
          <motion.p variants={fadeUp} className="text-left mb-5">
            Our in-house design and engineering centre drives product innovation
            through custom component development, 3D CAD modelling, structural
            analysis, reverse engineering and rapid prototyping. Powered by
            AutoCAD, SolidWorks and CAM tools for CNC/VMC programming, we ensure
            seamless integration from design to production.
          </motion.p>

          <motion.p variants={fadeUp} className="text-left mb-5">
            With a robust technology backbone, induction furnaces, CCM, rolling
            mills, CNC machines, robotic welding, electro-galvanizing facilities
            and DiFOC-enabled digital furnace control—we manufacture products
            across diverse grades (235–460 MPa), thicknesses, diameters and
            profiles. This enables high customizability and fast scale-up for
            varied industry needs.
          </motion.p>

          <motion.p variants={fadeUp} className="text-left mb-5">
            Our integrated framework, internal logistics and stringent quality
            controls ensure efficient processing, precise forming, secure
            packaging and timely dispatch, delivering high-performance steel
            solutions for global markets.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* ================= UNITS ================= */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full space-y-8 px-10"
      >
        <motion.div variants={fadeUp} className="flex justify-center gap-4">
          {Object.keys(unitData).map(key => (
            <button
              key={key}
              onClick={() => setActiveUnit(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeUnit === key
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {unitData[key].title}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={imageZoom}
          className="w-full h-[500px] rounded-4xl overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentUnit.image}
              src={currentUnit.image}
              alt={currentUnit.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </motion.div>

        <motion.div variants={fadeUp} className="text-left mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentUnit.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-2">
                {currentUnit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {currentUnit.address}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.section>

      {/* ================= MANUFACTURING PROCESS VIDEO ================= */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="px-10"
      >
        <motion.h1
          variants={fadeUp}
          className="text-[37px] font-bold ml-20 w-full text-center"
        >
          Our Manufacturing Process
          <motion.div
            variants={fadeUp}
            className="w-96 h-0.5 bg-blue mx-auto rounded-full mb-10"
          />
        </motion.h1>

        <motion.div
          variants={imageZoom}
          className="w-full rounded-4xl overflow-hidden mb-10"
        >
          <video
            muted
            autoPlay
            loop
            playsInline
            src={video}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.section>

      {/* ================= RAW TO REMARKABLE ================= */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="px-10"
      >
        <motion.h1
          variants={fadeUp}
          className="text-[37px] font-bold ml-20 w-full text-center"
        >
          From Raw to Remarkable
          <motion.div
            variants={fadeUp}
            className="w-96 h-0.5 bg-blue mx-auto rounded-full mb-10"
          />
        </motion.h1>

        <motion.div
          variants={imageZoom}
          className="w-full h-[550px] rounded-4xl overflow-hidden mb-10"
        >
          <img src={rawimg} alt="" className="w-full h-full object-cover" />
        </motion.div>
      </motion.section>

      {/*=================  Carbon Footprint  ================= */}
      <section className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen ">
        {/* Left Content */}
        <div className="md:w-[40%] w-full h-[450px] bg-gray-200 flex items-center justify-center px-10 py-16">
          <div className="space-y-16">
            <h1 className="text-4xl font-bold text-gray-900">Capacity</h1>

            <h1 className="text-4xl text-black font-bold leading-relaxed">
              Carbon Footprint
            </h1>

          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-3/4 w-full h-full overflow-hidden mr-1">
          <img
            src={carbonFootprint}
            alt="Carbon Footprint"
            className="w-220 h-125 rounded-4xl object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;
