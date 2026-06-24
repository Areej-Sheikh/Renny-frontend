import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import heroSrc from "../../assets/CBAMHero.webp";
import CBAMImage from "../../assets/CBAM1.webp";
import CBAMImage1 from "../../assets/What Changed in 2026.webp";
import CBAMImage2 from "../../assets/CBAM.svg";

const viewportConfig = {
  once: true,
  amount: 0.2,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const slideLeft = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const slideRight = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const imageReveal = {
  hidden: {
    opacity: 0,
    scale: 1.08,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const imageZoom = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const CBAM = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  return (
    <div className="relative w-full overflow-x-hidden font-helvetica">
      {/* Banner Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={imageZoom}
        className="relative h-screen w-full overflow-hidden mb-10"
      >
        <img
          src={heroSrc}
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          variants={containerVariants}
          className="relative z-10 flex flex-col justify-end h-full px-6 md:px-10 pb-10 max-w-5xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-white text-4xl md:text-7xl font-bold"
          >
            CBAM-Ready Steel for a Low-Carbon Future
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-white text-lg md:text-2xl max-w-3xl"
          >
            Lower carbon footprint. Verified emissions data. Stronger compliance
            for European imports.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* WHAT IS CBAM */}
      <section className="bg-gray-100 py-10 sm:py-14 lg:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            variants={fadeUp}
            className="text-center font-bold mb-6 text-3xl sm:text-4xl lg:text-[48px]"
          >
            What is CBAM?
            <div className="w-64 md:w-90 h-0.5 bg-blue mx-auto mt-4" />
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-black-700 text-center md:text-[17px]"
          >
            The Carbon Border Adjustment Mechanism (CBAM) is a European Union
            regulation that imposes carbon-related costs on imported goods based
            on their embedded emissions. It promotes low-carbon manufacturing
            and greater carbon transparency across global supply chains.
          </motion.p>

          <motion.div variants={imageReveal} className="my-10">
            <img
              src={CBAMImage}
              alt="Quality Centre Inspection Process"
              className="w-full rounded-3xl h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* WHAT CHANGED */}
      <section className="bg-white py-10 sm:py-14 lg:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            variants={fadeUp}
            className="text-center font-bold mb-6 text-3xl sm:text-4xl lg:text-[48px]"
          >
            What Changed in 2026
            <div className="w-64 md:w-90 h-0.5 bg-blue mx-auto mt-4" />
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-black-700 text-center md:text-[17px]"
          >
            Strengthening our commitment to low-carbon manufacturing through
            renewable energy integration and sustainable operations.
          </motion.p>

          <motion.div variants={imageReveal} className="my-10">
            <img
              src={CBAMImage1}
              alt="What Changed in 2026"
              className="w-full rounded-3xl h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* DOES CBAM APPLY TO YOU */}
      <section className="relative bg-[#F5F5F5] py-24 overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto px-6 lg:px-12"
        >
          {/* Top Content */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20 items-start">
            <motion.div variants={slideLeft}>
              <motion.h2
                variants={fadeUp}
                className="text-5xl mt-10 md:text-4xl font-bold text-black"
              >
                Does CBAM <br />
                Apply To You?
              </motion.h2>
            </motion.div>

            <motion.div variants={slideRight}>
              <motion.p
                variants={fadeUp}
                className="text-[#2D334A] text-xl md:text-2xl max-w-2xl"
              >
                CBAM applies to manufacturers and importers exporting products
                such as structural steel and construction materials to Europe.
                These businesses must disclose embedded emissions associated
                with their products and comply with carbon transparency
                requirements.
              </motion.p>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            variants={imageReveal}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.4 },
            }}
            className="my-10 overflow-hidden rounded-3xl"
          >
            <motion.img
              src={CBAMImage2}
              alt="CBAM Compliance"
              className="w-full h-auto object-contain"
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            />
          </motion.div>
        </motion.div>
      </section>


      {/* CBAM Benefit */}
      <section
        ref={ref}
        className="relative overflow-hidden bg-white min-h-screen flex items-center"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <div
            className="absolute right-0 top-0 h-full w-full"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,0,0,.08) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full"
        >
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT CONTENT */}
            <motion.div variants={slideLeft}>
              <motion.h2
                variants={fadeUp}
                className="text-[30px] md:text-[40px] font-bold text-black"
              >
                Renny’s CBAM Benefit
              </motion.h2>

              <motion.div
                variants={fadeUp}
                className="mt-4 w-[240px] h-[2px] bg-[#CFCFCF] relative"
              >
                <div className="absolute left-0 top-0 w-14 h-full bg-[#162456]" />
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-8 text-[#2D3652] text-base md:text-lg leading-relaxed"
              >
                <p>
                  Renny Strips’ Green Steel has a carbon footprint of only{" "}
                  <span className="font-bold text-[#18852D]">0.6385 tCO₂</span>{" "}
                  per metric ton compared to the conventional industry average
                  of nearly{" "}
                  <span className="font-bold text-[#162456]">2.2 tCO₂</span> per
                  metric ton.
                </p>

                <p className="mt-8">
                  This can help buyers reduce carbon-linked import exposure by
                  nearly <span className="font-bold text-[#18852D]">€118</span>{" "}
                  per metric ton and strengthen their ESG and compliance
                  positioning.
                </p>
              </motion.div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              variants={slideRight}
              className="relative flex flex-col items-center justify-center  h-[90vh] text-center"
            >
              {/* TOP LABEL */}
              <motion.p
                variants={fadeUp}
                className="text-[12px] tracking-[3px] mt-10 font-semibold text-[#1E7D2B] uppercase"
              >
                Renny Strips' Green Steel
              </motion.p>

              {/* 0.6385 */}
              <motion.div variants={fadeUp} className="mt-1">
                <h3 className="text-[#18852D] font-extrabold leading-none text-[70px] md:text-[90px]">
                  {inView && (
                    <CountUp
                      start={0}
                      end={0.6385}
                      decimals={4}
                      duration={2.5}
                    />
                  )}
                </h3>

                <div className="text-[#162456] text-[22px] md:text-[24px] font-bold tracking-[2px]">
                  tCO₂/MT
                </div>
              </motion.div>

              {/* VS */}
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-4 my-5 w-full max-w-[280px]"
              >
                <div className="flex-1 h-[1px] bg-[#4EA658]" />
                <span className="font-bold text-[#162456] text-[30px]">vs</span>
                <div className="flex-1 h-[1px] bg-[#9CA3AF]" />
              </motion.div>

              {/* INDUSTRY LABEL */}
              <motion.p
                variants={fadeUp}
                className="uppercase tracking-[3px] text-[11px] text-[#80889A] font-semibold"
              >
                Conventional Industry Average
              </motion.p>

              {/* 2.2 */}
              <motion.div variants={fadeUp}>
                <h3 className="text-[#081B58] font-extrabold leading-none mt-2 text-[70px] md:text-[90px]">
                  {inView && (
                    <CountUp start={0} end={2.2} decimals={1} duration={2.5} />
                  )}
                </h3>

                <div className="text-[#081B58] text-[22px] md:text-[24px] font-bold tracking-[2px]">
                  tCO₂/MT
                </div>
              </motion.div>

              {/* Divider */}
              <motion.div
                variants={fadeUp}
                className="h-10 w-[2px] bg-[#C8CDD5] my-3"
              />

              {/* €118 */}
              <motion.div
                variants={fadeUp}
                className="relative flex flex-col items-center mb-20"
              >
                <div className="absolute -z-10 text-[130px] md:text-[170px] font-black text-[#DDE8DF] leading-none">
                  €{inView && <CountUp start={0} end={118} duration={2.5} />}
                </div>

                <p className="mt-10 uppercase tracking-[1.5px] text-[#1E7D2B] font-bold text-[14px]">
                  Carbon-Linked Import Exposure Reduction
                </p>

                <p className="text-[#081B58] text-[36px] md:text-[44px] font-bold leading-tight">
                  per metric ton
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CBAM;
