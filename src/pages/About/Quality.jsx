import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import qualityBanner from "../../assets/Quality-Section-1.webp";
import qualityImage from "../../assets/Quality-Section-1.webp";

import bgImage from "../../assets/Quality-Background.webp";

import img1 from "../../assets/Quality-Section-1.webp";
import img2 from "../../assets/Quality-Section-1.webp";
import img3 from "../../assets/Quality-Section-1.webp";
// import img4 from "../../assets/Quality-Section-1.webp";
// import img5 from "../../assets/Quality-Section-1.webp";
// import img6 from "../../assets/Quality-Section-1.webp";
// import img7 from "../../assets/Quality-Section-1.webp";
// import img8 from "../../assets/Quality-Section-1.webp";
// import img9 from "../../assets/Quality-Section-1.webp";
// import img10 from "../../assets/Quality-Section-1.webp";

import iconMiddle from "../../assets/Icon-Middle.webp";

import icon1 from "../../assets/Icon-1.webp";
import icon2 from "../../assets/Icon-2.webp";
import icon3 from "../../assets/Icon-3.webp";
import icon4 from "../../assets/Icon-4.webp";
import icon5 from "../../assets/Icon-5.webp";

//certificate
import cert1 from "../../assets/Certificate-1.webp";
import cert2 from "../../assets/Certificate-2.webp";
import cert3 from "../../assets/Certificate-3.webp";
import cert3_1 from "../../assets/Certificate-3-1.webp";
import cert4 from "../../assets/Certificate-4.webp";
import cert5 from "../../assets/Certificate-5.webp";
import cert6 from "../../assets/Certificate-6.webp";
import cert7 from "../../assets/Certificate-7.webp";
import CertificateCard from "../../components/CertificateCard";

const Quality = () => {
  const specificationsData = [
    {
      image: img1,
      title: "Specifications",
      subtitle: "Advanced Testing Infrastructure",
      points: [
        "Spectrometers for chemical composition analysis",
        "Universal Testing Machines (UTM) for tensile, yield & elongation tests",
        "Brinell & Rockwell hardness testers for hardness evaluation",
        "Coating thickness meters for surface coating uniformity",
      ],
    },
    {
      image: img2,
      title: "Specifications",
      subtitle: "Precision Dimensional Testing",
      points: [
        "Micrometers, verniers & height gauges for dimensional accuracy",
        "Hydrostatic pressure testing machines for tube integrity validation",
        "GO/NO-GO gauges for scaffolding & formwork threads",
        "Eliminates on-site mismatch issues with precise tolerance control",
      ],
    },
    {
      image: img3,
      title: "Specifications",
      subtitle: "Weld Quality Assurance",
      points: [
        "Dye penetrant testing for surface defect detection",
        "Ultrasonic testing for internal & sub-surface flaw identification",
        "Certified welding procedures ensure structural reliability",
        "Meets international performance standards under dynamic load",
      ],
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCert, setActiveCert] = useState(null);

  const totalSlides = specificationsData.length;
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((i) => (i === totalSlides - 1 ? 0 : i + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [totalSlides]);


  const prevSlide = () =>
    setActiveIndex((i) => (i === 0 ? totalSlides - 1 : i - 1));

  const nextSlide = () =>
    setActiveIndex((i) => (i === totalSlides - 1 ? 0 : i + 1));
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const scrollAmount = sliderRef.current.offsetWidth * 0.8;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };


  return (
    <section className="w-full bg-white">
      {/* ================= Banner Section ================= */}
      <motion.section
        className="relative h-[45vh] sm:h-[55vh] lg:h-[70vh] w-full overflow-hidden"
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src={qualityBanner}
          alt="Quality Banner"
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
                     px-4 sm:px-6 lg:px-10 py-8"
        >
          Quality
        </motion.h1>
      </motion.section>

      <section className="bg-gray-100 py-10 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.h1
            className="text-center font-bold mb-6 text-3xl sm:text-4xl lg:text-[48px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Quality & Standard
            <div className="w-90 h-0.5 bg-blue mx-auto mt-4" />
          </motion.h1>
          {/* Top Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-black-700 md:text-[17px] leading-relaxed md:leading-[28px] text-justify"
          >
            At Renny Strips, quality is at the heart of everything we do. Our
            robust Quality Management System (QMS) is aligned with globally
            recognized certifications including ISO 9001:2015 for Quality
            Management, EN 1090 (Execution Class 2) for Structural Steel, ISO
            3834-2 for Fusion Welding of Metallic Materials, and CE Marking for
            compliance with European standards. Every production batch undergoes
            a rigorous three-stage inspection process. Raw Material Testing,
            In-Process Inspection & Final Product Verification. Enabled by a
            digitally integrated QMS, we ensure complete traceability from raw
            materials like billets, coils & wire rods to the finished product,
            with real-time documentation of test results, inspection reports,
            and certifications.
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
              src={qualityImage}
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
            className="text-black-700 text-base md:text-[17px] leading-relaxed md:leading-[28px] text-justify"
          >
            Our in-house Quality Centre is equipped with a comprehensive suite
            of advanced testing systems, including spectrometers for chemical
            composition analysis, Universal Testing Machines (UTM) for tensile
            strength, yield and elongation, Brinell and Rockwell hardness
            testers, and coating thickness meters. Precision tools such as
            micrometers, verniers and height gauges ensure dimensional accuracy,
            while hydrostatic pressure testing machines validate tube integrity.
            For scaffolding and formwork system, specialized thread gauges and
            GO/NO-GO fixtures are used to maintain exacting standards. Weld
            quality is verified through dye penetrant and ultrasonic testing
            methods. Our Poka-Yoke systems developed jointly by the NPD and
            Quality teams use customized gauges and fixtures to eliminate human
            error. Before full scale production, pilot runs are executed to
            confirm consistency, safety and performance. Supported by certified
            welding inspectors, NDT Level II technicians, metallurgists and
            process auditors, Renny Strips consistently upholds the highest
            standards of quality across every product and process.
          </motion.p>
        </div>
      </section>
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/*======== Title ======= */}
          {/* Heading */}
          <motion.h1
            className="text-center font-bold mb-12
                       text-3xl sm:text-4xl lg:text-[48px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Quality Assurance & Global Standards
            <div className="w-215 h-0.5 bg-blue mx-auto mt-4" />
          </motion.h1>

          {/* ================= GRID : 2 ROW × 3 COLUMN ================= */}
          <div
            className="grid grid-cols-1 lg:grid-cols-3
                          gap-x-8 md:gap-x-12 lg:gap-x-16
                          gap-y-10 md:gap-y-16"
          >
            {/* ========== COLUMN 1 ========== */}
            <div className="space-y-20">
              {/* Icon 1 */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex gap-6"
              >
                <img src={icon1} alt="" className="w-14 h-14" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Global Quality Certifications
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Renny Strips operates under globally accepted quality
                    frameworks including ISO 9001:2015, EN 1090 (Execution Class
                    2), ISO 3834-2 and CE Marking. These certifications reflect
                    our commitment to delivering products that meet
                    international norms for safety, reliability and performance.
                  </p>
                </div>
              </motion.div>

              {/* Icon 3 */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex gap-6"
              >
                <img src={icon3} alt="" className="w-14 h-14" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Three-Stage Inspection Protocol
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Every batch passes through a structured inspection flow—raw
                    material testing, in-process monitoring and final product
                    approval. This system ensures defect prevention, dimensional
                    accuracy and consistent mechanical properties across
                    production.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ========== COLUMN 2 ========== */}
            <div className="flex flex-col items-center space-y-17">
              {/* Center Image */}
              <motion.img
                src={iconMiddle}
                alt="Certifications"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex gap-6"
              />

              {/* Icon 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex gap-6"
              >
                <img src={icon4} alt="" className="w-14 h-14 mt-26" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 mt-26">
                    Error-Proofing & Process Control
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    We implement Poka-Yoke systems with in-house engineered
                    fixtures to eliminate human error during production. Pilot
                    batches precede mass manufacturing to validate stability,
                    safety and repeatability, ensuring zero compromise on
                    quality.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ========== COLUMN 3 ========== */}
            <div className="space-y-20">
              {/* Icon 2 */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex gap-7"
              >
                <img src={icon2} alt="" className="w-14 h-14" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Quality Management System (QMS)
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Our digitally integrated QMS ensures complete process
                    control from raw material intake to final dispatch. With
                    real-time documentation and traceability across every stage,
                    customers receive verified material with full test records
                    and compliance certificates.
                  </p>
                </div>
              </motion.div>

              {/* Icon 5 */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex gap-7"
              >
                <img src={icon5} alt="" className="w-14 h-14" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Skilled Technical Team
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Our quality workforce includes certified welding inspectors,
                    NDT Level-II experts, metallurgists and process auditors.
                    Their expertise drives continuous improvement and supports
                    consistent delivery of high-strength, compliant products.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background */}
        <img
          src={bgImage}
          alt="Quality Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT : IMAGE SLIDER */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={specificationsData[activeIndex].image}
                  alt={specificationsData[activeIndex].subtitle}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-auto max-h-[420px] sm:max-h-[480px] lg:max-h-[520px] object-contain mx-auto"
                />
              </AnimatePresence>

              {/* Controls */}
              <div className="flex justify-center gap-3 mt-6">
                <div className="flex gap-3">
                  {specificationsData.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`w-3 h-3 rounded-full ${activeIndex === i ? "bg-white" : "bg-gray-400/60"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT : CONTENT */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="text-white flex flex-col justify-center"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Heading */}
                <motion.h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  {specificationsData[activeIndex].title}
                </motion.h2>

                {/* Sub Heading */}
                <motion.h3
                  className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {specificationsData[activeIndex].subtitle}
                </motion.h3>

                {/* Points List */}
                <motion.ul
                  className="space-y-4 text-sm sm:text-base text-gray-200"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.12,
                        delayChildren: 0.3,
                      },
                    },
                  }}
                >
                  {specificationsData[activeIndex].points.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={{
                        hidden: { opacity: 0, x: 30 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      • {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ===== Title ===== */}
          <motion.h2
            className="text-center font-bold mb-12
                 text-3xl sm:text-4xl lg:text-[48px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Certificates
            <div className="w-75 h-0.5 bg-blue mx-auto mt-4" />
          </motion.h2>
          {/* ===== Slider Wrapper ===== */}
          <div className="relative">

            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10
                       bg-white shadow-md rounded-full p-2
                       hover:bg-gray-100 transition"
              aria-label="Scroll Left"
            >
              <MdChevronLeft size={28} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scroll("right")}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10
                       bg-white shadow-md rounded-full p-2
                       hover:bg-gray-100 transition"
              aria-label="Scroll Right"
            >
              <MdChevronRight size={28} />
            </button>


            {/* ===== Certificates Grid ===== */}
            <div
              ref={sliderRef}
              className="flex gap-6 sm:gap-8 lg:gap-10
             overflow-x-auto overflow-y-visible
             scroll-smooth no-scrollbar pb-6"
            >


              {[
                { id: 1, img: cert1, title: "IS 7887 : 1992", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt itaque provident exercitationem libero aperiam iste ut maxime placeat velit recusandae." },
                { id: 2, img: cert2, title: "IS 14650 : 1999", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt itaque provident exercitationem libero aperiam iste ut maxime placeat velit recusandae." },
                { id: 3, img: cert3, title: "IS 10748 : 2004", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt itaque provident exercitationem libero aperiam iste ut maxime placeat velit recusandae." },
                { id: 4, img: cert3_1, title: "IS 1239 - 1 : 2004", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt itaque provident exercitationem libero aperiam iste ut maxime placeat velit recusandae." },
                { id: 5, img: cert4, title: "IS 3601 : 2006", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt itaque provident exercitationem libero aperiam iste ut maxime placeat velit recusandae." },
                { id: 6, img: cert5, title: "IS 2062 : 2011", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt itaque provident exercitationem libero aperiam iste ut maxime placeat velit recusandae." },
                { id: 7, img: cert6, title: "IS 1161:2014", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt itaque provident exercitationem libero aperiam iste ut maxime placeat velit recusandae." },
                { id: 8, img: cert7, title: "IS 4923 : 2017", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt itaque provident exercitationem libero aperiam iste ut maxime placeat velit recusandae." },
              ].map((item, index) => (
                <motion.div
                  key={item.id}
                  className="min-w-[260px] sm:min-w-[300px] lg:min-w-[320px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <CertificateCard certificateDetails={item} key={item.id} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Quality;