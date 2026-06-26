// React
import React from "react";

// Icons
import {
  FiCheckCircle,
  FiFileText,
  FiBarChart2,
  FiShield,
  FiHome,
  FiAward,
  FiBriefcase,
  FiDollarSign,
  FiBox,
  FiPackage,
  FiInfo,
} from "react-icons/fi";
import { PiColumnsBold, PiSquaresFourBold } from "react-icons/pi";
// Animation libraries
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Image assets
import heroSrc from "../../assets/CBAMHero.webp";
import CBAMImage from "../../assets/CBAM1.webp";
import CBAMImage1 from "../../assets/What Changed in 2026.webp";
import CBAMImage2 from "../../assets/CBAM.svg";
import logo from "../../assets/RennyLogo.webp";
import CostSavingCalculator from "../../assets/CBAM Cost Saving Calculator.webp";
import global from "../../assets/Global_5.webp";
import img1 from "../../assets/1.webp";
import img2 from "../../assets/3.webp";
import HowToComply from "../../assets/How To Comply.webp";
import R from "../../assets/R.webp";

// Animation viewport settings
const viewportConfig = {
  once: true,
  amount: 0.2,
};

// Container animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
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

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Content animation variants
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

// Image animation variants
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

// DATA ARRAYS
const credentials = [
  {
    icon: FiCheckCircle,
    text: (
      <>
        Nearly <span className="font-semibold text-green">40%</span> lower
        emissions than conventional industry benchmarks.
      </>
    ),
  },
  {
    icon: FiAward,
    text: (
      <>
        <span className="font-semibold text-green">5-Star</span> Green Steel
        Manufacturing Rating.
      </>
    ),
  },
  {
    icon: FiShield,
    text: (
      <>
        Greenhouse gas emissions independently verified by{" "}
        <span className="font-semibold text-green">TÜV Rheinland.</span>
      </>
    ),
  },
  {
    icon: FiFileText,
    text: (
      <>
        Verified under{" "}
        <span className="font-semibold text-green">ISO 14064-3:2019</span> and
        the Greenhouse Gas Protocol.
      </>
    ),
  },
  {
    icon: FiBarChart2,
    text: (
      <>
        Emission intensity reported at{" "}
        <span className="font-semibold text-green">0.395 tCO₂e</span> per tonne
        for the Steel Division and{" "}
        <span className="font-semibold text-green">0.065 tCO₂e</span> per tonne
        for the Infra Division.
      </>
    ),
  },
];

const cards = [
  {
    icon: FiBriefcase,
    title: "Conventional Steel\nCarbon Impact",
    value: "~€165.79",
    unit: "per MT",
    valueColor: "text-slate-800",
    border: "border-orange-500",
    iconBg: "bg-slate-100",
  },
  {
    icon: FiCheckCircle,
    title: "Renny Green Steel\nCarbon Impact",
    value: "~€48.11",
    unit: "per MT",
    valueColor: "text-green",
    border: "border-green",
    iconBg: "bg-green/10",
  },
  {
    icon: FiDollarSign,
    title: "Estimated Savings",
    value: "~€117.67",
    unit: "per MT",
    valueColor: "text-blue",
    border: "border-blue",
    iconBg: "bg-blue-50",
  },
];
const products = [
  {
    title: "Structural Steel",
    description:
      "Steel products used in construction, infrastructure, and industrial applications.",
    image: img1,
    Icon: PiColumnsBold, // Clean structural beam representation
  },
  {
    title: "Construction Material",
    description:
      "Cement and other construction materials essential for building and infrastructure.",
    image: img2,
    Icon: PiSquaresFourBold, // Clean material block layout
  },
];

const CBAM = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  return (
    <div className="relative w-full overflow-x-hidden font-helvetica">
      {/* Hero Banner */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={imageZoom}
        className="relative h-screen w-full overflow-hidden"
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

      {/* What Changed in 2026 */}
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
                  <span className="font-bold text-green">0.6385 tCO₂</span> per
                  metric ton compared to the conventional industry average of
                  nearly{" "}
                  <span className="font-bold text-[#162456]">2.2 tCO₂</span> per
                  metric ton.
                </p>

                <p className="mt-8">
                  This can help buyers reduce carbon-linked import exposure by
                  nearly <span className="font-bold text-green">€118</span> per
                  metric ton and strengthen their ESG and compliance
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
                className="text-[12px] tracking-[3px] font-semibold text-green uppercase"
              >
                Renny Strips' Green Steel
              </motion.p>

              {/* 0.6385 */}
              <motion.div variants={fadeUp} className="mt-1">
                <h3 className="text-green font-extrabold leading-none text-[65px] md:text-[70px]">
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
                <div className="flex-1 h-[1px] bg-green" />
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
                <h3 className="text-[#081B58] font-extrabold leading-none mt-2 text-[65px] md:text-[70px]">
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

                <p className="mt-10 uppercase tracking-[1.5px] text-green font-bold text-[14px]">
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

      {/* Carbon Credentials */}
      <section className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-20 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Left Side */}
            <motion.div variants={slideLeft} className="flex justify-center">
              <motion.img
                src={logo}
                alt="Renny Logo"
                className="w-full max-w-md object-contain"
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.4,
                }}
              />
            </motion.div>

            {/* Right Side */}
            <motion.div variants={slideRight} className="max-w-xl">
              <motion.h2
                variants={fadeUp}
                className="text-4xl font-bold text-[#0A2342]"
              >
                Renny's Carbon Credentials
              </motion.h2>

              <motion.div
                variants={fadeUp}
                className="mt-4 w-[240px] h-[2px] bg-[#CFCFCF] relative"
              >
                <div className="absolute left-0 top-0 w-14 h-full bg-[#162456]" />
              </motion.div>

              <motion.div variants={staggerContainer} className="space-y-2">
                {credentials.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      variants={fadeUp}
                      whileHover={{
                        x: 6,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="flex gap-5 items-start border-b border-gray-200 py-1"
                    >
                      <div className="w-14 h-14 rounded-full bg-green/10 flex items-center justify-center shrink-0">
                        <Icon size={28} className="text-green" />
                      </div>

                      <p className="text-gray-700 leading-7">{item.text}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cost Saving Calculator */}
      <section className="py-12 bg-white overflow-hidden selection:bg-green/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <motion.div
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-10"
          >
            <motion.h2
              variants={fadeUp}
              className="text-[30px] md:text-[40px] font-bold text-black"
            >
              CBAM Cost Saving Calculator
              <div className="w-64 md:w-130 h-0.5 bg-blue mx-auto mt-2" />
            </motion.h2>

            {/* Kept this original element but removed heavy styles to let the h2 absolute border handle styling gracefully */}
            <motion.div variants={fadeUp} className="hidden" />

            <motion.p
              variants={fadeUp}
              className="mt-6 text-gray-500 text-sm sm:text-base tracking-wide"
            >
              Real savings through lower carbon emissions.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid lg:grid-cols-[1fr_1.3fr] gap-6 items-stretch"
          >
            {/* LEFT IMAGE */}
            <motion.div
              variants={slideLeft}
              className="rounded-xl overflow-hidden shadow-sm border border-gray-100 min-h-[340px] lg:min-h-auto relative"
            >
              <motion.img
                src={CostSavingCalculator}
                alt="Cost Saving Calculator"
                className="w-full h-full object-cover absolute inset-0"
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.5,
                }}
              />
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              variants={slideRight}
              className="flex flex-col justify-between gap-5"
            >
              {/* Top Cards */}
              <motion.div
                variants={staggerContainer}
                className="grid sm:grid-cols-3 gap-4"
              >
                {cards.map((card, index) => {
                  const Icon = card.icon;

                  return (
                    <motion.div
                      key={index}
                      variants={fadeUp}
                      whileHover={{
                        y: -4,
                      }}
                      className={`bg-white rounded-xl border-b-[3px] ${card.border} shadow-sm px-4 py-6 text-center flex flex-col justify-between min-h-[220px]`}
                    >
                      <div>
                        <div
                          className={`w-12 h-12 rounded-full ${card.iconBg} flex items-center justify-center mx-auto mb-4 border border-gray-50`}
                        >
                          <Icon size={22} className="text-[#1d2b4f]" />
                        </div>

                        <h3 className="text-xs font-semibold text-gray-700 tracking-wide leading-tight whitespace-pre-line">
                          {card.title}
                        </h3>
                      </div>

                      <div className="mt-4">
                        <div
                          className={`text-2xl xl:text-3xl font-bold tracking-tight ${card.valueColor}`}
                        >
                          <CountUp
                            end={parseFloat(
                              String(card.value).replace(/[^\d.-]/g, ""),
                            )}
                            duration={2}
                            separator=","
                            decimals={
                              String(card.value).includes(".")
                                ? String(card.value).split(".")[1].length
                                : 0
                            }
                            prefix="€"
                            enableScrollSpy
                            scrollSpyOnce
                          />
                        </div>

                        <p className="text-[11px] font-medium uppercase tracking-wider text-gray-400 mt-0.5">
                          {card.unit}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Bottom Savings */}
              <motion.div
                variants={fadeUp}
                whileHover={{
                  scale: 1.005,
                }}
                className="rounded-xl border border-green/20 bg-gradient-to-br from-green/20 to-[#f0f4eb] p-6 shadow-sm flex-grow flex items-center"
              >
                <div className="flex items-center justify-between gap-6 w-full">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green/20 border border-green/10 flex items-center justify-center shrink-0">
                      <FiHome size={26} className="text-green" />
                    </div>

                    <div>
                      <p className="text-gray-600 text-xs sm:text-sm font-medium tracking-wide">
                        Estimated Savings per 25 MT Export Container
                      </p>

                      <h3 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-green mt-1 tracking-tight">
                        ~
                        <CountUp
                          end={2941.75}
                          duration={2.5}
                          separator=","
                          decimals={2}
                          prefix="€"
                          enableScrollSpy
                          scrollSpyOnce
                        />
                      </h3>
                    </div>
                  </div>

                  <FiPackage
                    size={100}
                    className="text-green/40 hidden md:block shrink-0 stroke-[1.2]"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex justify-center items-center gap-1.5 mt-8 text-gray-400 text-xs text-center px-4"
          >
            <FiInfo className="text-gray-400 shrink-0" size={14} />

            <p className="leading-normal">
              Savings are indicative and based on current CBAM carbon pricing
              assumptions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Covered Under CBAM */}
      <section className="py-10 bg-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-14"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-[#1d2b4f] tracking-tight inline-block relative after:content-[''] after:absolute after:-bottom-3 after:left-1 after:right-1 after:h-[2px] after:bg-[#1d2b4f]"
            >
              Products Covered Under CBAM
            </motion.h2>
          </motion.div>

          {/* Cards Grid Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto"
          >
            {products.map((product, index) => {
              const IconComponent = product.Icon;

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group"
                >
                  {/* Image Section */}
                  <div className="h-[240px] sm:h-[280px] w-full overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Content Section with Intersecting Floating Badge */}
                  <div className="relative pt-12 pb-10 px-6 sm:px-10 text-center flex-grow flex flex-col items-center bg-white">
                    {/* Absolute Badge Container Intersecting the Image Frame */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-16 h-16 rounded-full bg-[#f3f5f9] border-[4px] border-white shadow-md flex items-center justify-center text-[#1d2b4f]">
                        <IconComponent size={24} />
                      </div>
                    </div>

                    {/* Title & Accent underline */}
                    <h3 className="text-xl font-bold text-[#1d2b4f] tracking-tight">
                      {product.title}
                    </h3>

                    <div className="w-8 h-[2px] bg-[#1d2b4f] my-3.5 rounded-full" />

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      
    </div>
  );
};

export default CBAM;
