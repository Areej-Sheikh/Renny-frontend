// ========== Imports ==========
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// ========== Hooks ==========
import usePageHero from "../../hooks/usePageHero";

// ========== Utilities ==========
import { buildApiUrl } from "../../lib/api";

// ========== Components ==========
import SEO from "../../components/SEO";

// ========== Assets ==========
import banner from "../../assets/Ms Billet.webm";

import AdvancedTechnology from "../../assets/advanced de scaling technology.webp";
import Precision from "../../assets/Precision Continuous Casting Machines.webp";
import AdvancedRefining from "../../assets/Advanced Refining for Steel Purity.webp";
import ProductionCapacity from "../../assets/Unmatched Production Capacity.webp";
import LogisticsNetwork from "../../assets/Integrated Logistics Network.webp";
import IndustryPartner from "../../assets/Preferred Industry Partner.webp";

import Automotive from "../../assets/Automotive.webp";
import Railway from "../../assets/Railway.webp";
import Areospace from "../../assets/Aerospace.webp";
import Defence from "../../assets/Defence.webp";
import Heavy from "../../assets/heavy engineering.webp";

import msBilletsSection2 from "../../assets/ms billets section 2.jpeg";
import manufacturingProcess from "../../assets/manufacturingProcess-1.png";
import Information from "../../assets/Information1-1.png";
const MSBillets = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };
  const sectionVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };
  const cards = [
    {
      img: AdvancedTechnology,
      title: "Advanced De-Scaling Technology",
      desc: "High-efficiency de-scalers remove gaseous elements like hydrogen, oxygen, and nitrogen, enhancing steel purity, ductility, and toughness.",
      bg: "bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-white",
    },
    {
      img: Precision,
      title: "Precision CCM",
      desc: "Enables production of billets and blooms with excellent dimensional accuracy, uniform grain structure, and a superior surface finish.",
      bg: "bg-white hover:bg-blue",
      textHover: "group-hover:text-white",
    },
    {
      img: AdvancedRefining,
      title: "Advanced Refining",
      desc: "Multi-stage refining with Eccentric Bottom Tapping (EBT) ensures slag-free liquid steel, precise alloy adjustments, and reduced inclusions for cleaner, high-purity output.",
      bg: "bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-white",
    },
    {
      img: ProductionCapacity,
      title: "High Production Capacity",
      desc: "Large-scale billet output ensures the ability to meet bulk and urgent requirements across forging, re-rolling, and heavy engineering sectors.",
      bg: "bg-white hover:bg-blue",
      textHover: "group-hover:text-white",
    },
    {
      img: LogisticsNetwork,
      title: "Logistics Network",
      desc: "Robust supply chain infrastructure ensures on-time delivery to both domestic and international destinations.",
      bg: "bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-white",
    },
    {
      img: IndustryPartner,
      title: "Industry Partner",
      desc: "Trusted by leading fabrication, forging, and infrastructure companies for consistent quality, scalable supply, and dependable service.",
      bg: "bg-white hover:bg-blue",
      textHover: "group-hover:text-white",
    },
  ];

  const tabs = [
    "MANUFACTURING PROCESS",
    "PRODUCT SPECIFICATIONS",
    "CORE STRENGTH",
    "APPLICATIONS",
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [pageData, setPageData] = useState(null);
  const { heroSrc, heroHeading } = usePageHero(
    "ms-billets",
    "MS Billets",
    banner,
  );
  const imageZoom = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          buildApiUrl("/api/product-content/ms-billets"),
        );
        if (res.data && res.data.data) {
          setPageData(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching page data:", err);
      }
    };
    fetchData();
  }, []);

  const displayCapacity =
    pageData?.capacity || "Annualised Capacity: 1,89,000 MTPA";
  const displayDescription =
    pageData?.description &&
    pageData.description.length > 0 &&
    pageData.description[0].trim() !== ""
      ? pageData.description
      : [
          "MS Billets are the foundational semi-finished steel product at Renny Strips the starting point of our entire integrated value chain. Produced by melting raw materials in high-capacity induction furnaces, our billets serve as the primary feedstock for wire rod rolling, HR coil production, and ultimately ERW pipes and scaffolding systems.",
          "The majority of our billets are consumed captively within our own rolling mills. Surplus production is sold to external re-rollers, wire drawing units, and steel processors.",
        ];
  const displayHighlightsImg = pageData?.highlightsImage || msBilletsSection2;
  const displayHighlights =
    pageData?.highlights &&
    pageData.highlights.length > 0 &&
    pageData.highlights[0]?.text?.trim() !== ""
      ? pageData.highlights
      : [
          { text: "High-Capacity Melting" },
          { text: "Controlled Chemistry" },
          { text: "Multiple Cross-Sections" },
          { text: "Foundation of Integration" },
          { text: "BIS \n Certified" },
        ];
  const displayManufacturingImg =
    pageData?.manufacturingImage || manufacturingProcess;
  const displayManufacturingDesc =
    pageData?.manufacturingProcess &&
    pageData.manufacturingProcess.length > 0 &&
    pageData.manufacturingProcess[0].trim() !== ""
      ? pageData.manufacturingProcess
      : [
          "Billet production begins at our steel melting shop (Unit I), where carefully selected material are charged into high-capacity induction furnaces. The furnaces melt the charge at precisely controlled temperatures, and the molten steel is refined to achieve the target chemical composition.",
          "The molten steel is then poured into continuous casting machines to form billets of the required cross-section. The casting process is monitored for consistent solidification, minimizing internal defects such as porosity and segregation. After casting, transferred directly to our rolling mills (hot charging), saving reheating cost which gives Renny an edge over other manufacturers.",
          "This captive billet production is the backbone of Renny Strips cost advantage and quality control. By producing our own billets, we eliminate the price volatility and quality inconsistency associated with buying from external suppliers.",
        ];
  const displayCards =
    pageData?.coreStrengths &&
    pageData.coreStrengths.length > 0 &&
    pageData.coreStrengths[0]?.title?.trim() !== ""
      ? pageData.coreStrengths
      : cards;
  const displaySpecs =
    pageData?.specifications &&
    pageData.specifications.length > 0 &&
    pageData.specifications[0]?.parameter?.trim() !== ""
      ? pageData.specifications
      : [
          {
            parameter: "Cross-Section",
            details:
              "125.00 mm × 125.00 mm to 160.00 mm × 160.00 mm and 250.00 mm × 150.00 mm",
          },
          { parameter: "Standards", details: "IS 14650:2023" },
        ];
  const displayAppIntro =
    pageData?.applicationsIntro ||
    "MS billets are essential in the manufacturing of high-strength components used across automotive, railway, aerospace, defence, and heavy engineering sectors.";
  const displayApps =
    pageData?.applications &&
    pageData.applications.length > 0 &&
    pageData.applications[0]?.label?.trim() !== ""
      ? pageData.applications
      : [
          { img: Automotive, label: "Automotive" },
          { img: Railway, label: "Railway" },
          { img: Areospace, label: "Aerospace" },
          { img: Defence, label: "Defence", scale: 1.5 },
          { img: Heavy, label: "Heavy Engineering" },
        ];

  return (
    <>
      <SEO
        title="MS Billets Manufacturer | Renny Strips"
        description="Renny Strips manufactures high-quality MS billets engineered for strength, durability, and superior performance across steel rolling and industrial applications."
        keywords="MS billets manufacturer, mild steel billets, steel billets India, industrial steel products, Renny Strips, billet supplier"
        url="https://rennystrips.com/ms-billets"
        image={heroSrc}
      />
      <div className="relative w-full overflow-x-hidden font-helvetica">
        {/* ================= BANNER SECTION ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageZoom}
          className="relative h-[100vh] w-full overflow-hidden mb-10"
        >
          {heroSrc &&
          (heroSrc.endsWith(".webm") || heroSrc.endsWith(".mp4")) ? (
            <video
              key={heroSrc}
              src={heroSrc}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <img
              key={heroSrc || "fallback"}
              src={heroSrc || aboutVideo}
              alt="Hero Banner"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          <motion.h1
            variants={fadeUp}
            className="relative z-10 text-white text-4xl md:text-7xl font-bold
                   flex items-end justify-start h-full py-10 px-6 md:px-10"
          >
            {heroHeading}
          </motion.h1>
        </motion.section>

        {/* ================= INTRO SECTION ================= */}
        <section className="bg-white">
          {/* ================= INTRO SECTION ================= */}
          <section className="bg-white">
            {/* ================= WHITE INTRO SECTION ================= */}
            <div className="bg-white text-black py-10 md:py-16">
              <div className="px-6 md:px-20 max-w-7xl mx-auto">
                <motion.h2
                  className="text-[28px] sm:text-[36px] md:text-[48px] text-blue font-bold w-full text-center leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                >
                  {pageData?.title || "MS Billets"}
                  <div className="w-20 md:w-40 h-1 bg-blue mx-auto rounded-full mt-4 mb-8 md:mb-10" />
                </motion.h2>

                <motion.div
                  className="text-center md:text-left space-y-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="font-bold text-lg md:text-xl text-gray-900">
                    <p>{displayCapacity}</p>
                  </div>

                  <div className="space-y-4">
                    {displayDescription.map((desc, idx) => (
                      <p
                        key={idx}
                        className="text-gray-600 text-sm md:text-base lg:text-lg font-normal "
                      >
                        {desc}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* ================= WINDOW (IMAGE SECTION) ================= */}
            <section className="px-4 md:px-10 lg:px-20 pb-10">
              <motion.div
                className="relative w-full min-h-[50vh] flex items-center min-[879px]:items-end justify-center py-10 md:py-0 bg-cover bg-center bg-scroll md:bg-fixed rounded-[30px] md:rounded-[60px] overflow-hidden"
                style={{ backgroundImage: `url('${displayHighlightsImg}')` }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
              >
                {/* Overlay: Semi-transparent for mobile readability */}
                <div className="absolute inset-0 bg-black/40 min-[879px]:bg-transparent min-[879px]:bg-gradient-to-t min-[879px]:from-black/70 min-[879px]:to-transparent" />

                {/* Content Container: flex-col below 879px, flex-row above */}
                <div className="relative z-10 flex flex-col min-[879px]:flex-row items-center min-[879px]:items-end justify-center gap-10 min-[879px]:gap-0 px-6 min-[879px]:pb-20 w-full">
                  {displayHighlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className={`
            flex items-center justify-center min-[879px]:items-start h-full w-full min-[879px]:w-auto
            /* Border-right: Applied to ALL highlights only on screens 879px and wider */
            min-[879px]:border-r-4 border-blue-highlight
            text-white px-6
          `}
                    >
                      <p className="text-[18px] md:text-[20px] lg:text-[22px] font-bold leading-tight text-center min-[879px]:text-left w-full min-[879px]:max-w-[180px] whitespace-pre-line">
                        {highlight.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>
          </section>
        </section>

        {/* ================= TABS SECTION ================= */}
        <section className="w-full py-12 px-6 md:px-20 min-h-screen">
          {/* Tabs - Mobile Scrollable */}
          <div className="flex overflow-x-auto no-scrollbar md:justify-center gap-4 mb-10 border-b border-gray-100 pb-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? "text-blue border-b-2 border-blue"
                    : "text-gray-500 border-b-2 border-transparent hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* MANUFACTURING PROCESS */}
              {activeTab === "MANUFACTURING PROCESS" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div className="w-full">
                    <img
                      src={displayManufacturingImg}
                      alt="Manufacturing Process"
                      className="w-full rounded-xl shadow-lg object-cover aspect-video md:aspect-auto"
                    />
                  </div>
                  <div className="space-y-4">
                    {displayManufacturingDesc.map((desc, idx) => (
                      <p
                        key={idx}
                        className="text-gray-600 text-sm md:text-base leading-relaxed"
                      >
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* CORE STRENGTH */}
              {activeTab === "CORE STRENGTH" && (
                <motion.div
                  className="w-full"
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                    {displayCards.map((card, i) => (
                      <motion.div
                        key={i}
                        variants={fadeUp}
                        className={`flex flex-col items-center text-center p-8 transition-all duration-300 group min-h-[250px] justify-center ${
                          i % 2 === 0
                            ? "bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-white"
                            : "bg-white hover:bg-blue hover:text-white"
                        }`}
                      >
                        <img
                          src={card.img || cards[i % cards.length]?.img}
                          alt=""
                          className="w-16 h-16 mb-4 transition duration-300 group-hover:brightness-0 group-hover:invert"
                        />
                        <h2 className="font-bold text-lg md:text-xl mb-2">
                          {card.title}
                        </h2>
                        <p className="text-sm md:text-base leading-snug opacity-90">
                          {card.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* PRODUCT SPECIFICATIONS */}
              {activeTab === "PRODUCT SPECIFICATIONS" && (
                <div className="py-6">
                  <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-blue text-white">
                          <th className="px-6 py-4 font-semibold text-lg">
                            Parameter
                          </th>
                          <th className="px-6 py-4 font-semibold text-lg border-l border-blue-400">
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {displaySpecs.map((spec, idx) => (
                          <tr
                            key={idx}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <th className="px-6 py-4 bg-gray-50/50 font-bold text-gray-700 w-1/3">
                              {spec.parameter}
                            </th>
                            <td className="px-6 py-4 text-gray-600">
                              {spec.details}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* APPLICATIONS */}
              {activeTab === "APPLICATIONS" && (
                <div className="space-y-10">
                  <p className="text-gray-600 text-sm md:text-lg leading-relaxed text-justify md:text-left">
                    {displayAppIntro}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
                    {displayApps.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeUp}
                        className="flex flex-col items-center group"
                      >
                        <div className="relative w-full aspect-square max-w-[180px] flex flex-col items-center justify-center rounded-2xl bg-gray-50 transition-all duration-300 group-hover:scale-105 group-hover:bg-white group-hover:shadow-xl border border-transparent group-hover:border-blue/20">
                          <div className="w-16 h-16 md:w-20 md:h-20 mb-3">
                            <img
                              src={item.img}
                              alt={item.label}
                              className="w-full h-full object-contain group-hover:drop-shadow-md"
                              style={
                                item.scale
                                  ? { transform: `scale(${item.scale})` }
                                  : {}
                              }
                            />
                          </div>
                          <p className="text-center font-bold text-xs md:text-sm text-gray-800 px-2 group-hover:text-blue">
                            {item.label}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </section>
        {/* ================= Get Detailed Information ================= */}
        <section className="bg-blue text-white w-full py-12 md:py-20 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">
          {/* LEFT CONTENT */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h2
              className="text-[1.75rem] md:text-[2.5rem] font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get Detailed Information
              <div className="w-52 md:w-72 lg:w-96 h-0.5 bg-white rounded-full mt-2 mx-auto lg:mx-0" />
            </motion.h2>

            <p className="text-sm md:text-base leading-7 text-gray-100 max-w-2xl mx-auto lg:mx-0">
              Looking for more information? We’re here to help. Reach out and
              get all the answers you need.
            </p>

            <Link
              to="/contact-us"
              className="inline-block px-8 py-3 md:py-4 hover:text-white bg-gray-400 text-black rounded-full mt-6 md:mt-8 font-medium hover:scale-105 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <img
              src={Information}
              alt="Detailed product information"
              className="
               w-full
               max-w-md
               lg:max-w-xl
               h-64
               md:h-80
               lg:h-[30rem]
               object-fit
               rounded-2xl
               md:rounded-3xl
             "
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default MSBillets;
