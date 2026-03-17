import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

import aboutVideo from "../../assets/01-aboutVideo.webm";
import worldmap from "../../assets/World-Map.webm";

// timeline images
import t1996 from "../../assets/1996.webp";
import t2005 from "../../assets/2005.webp";
import t2016 from "../../assets/2016.webp";
import t2018 from "../../assets/2018.webp";
import t2019 from "../../assets/2019.webp";
import t2021 from "../../assets/2021.webp";
import t2023 from "../../assets/2023.webp";
import t2024 from "../../assets/2024.webp";
import t2025 from "../../assets/2025.webp";

// gallery images
import g1 from "../../assets/g1.webp";
import g2 from "../../assets/g2.webp";
import g3 from "../../assets/g3.webp";
import g4 from "../../assets/g4.webp";

import banner from "../../assets/Image.webp";

/* ================= TIMELINE DATA ================= */
const timelineData = [
  {
    year: "1996",
    title: "Incorporation of our Company\nCommenced trading of MS Billets.",
    image: t1996,
  },
  {
    year: "2005",
    title:
      "Setting up a rolling mill at Unit I and commenced manufacturing of wire rods.",
    image: t2005,
  },
  {
    year: "2016",
    title: "Export of galvanized iron fully threaded rods to U.A.E.",
    image: t2016,
  },
  {
    year: "2018",
    title: "Set up of continuous casting machine and rolling mill at Unit I.",
    image: t2018,
  },
  {
    year: "2019",
    title:
      "Set up of continuous casting machine and induction melting furnace at Unit II.",
    image: t2019,
  },
  { year: "2021", title: "Expansion of Unit I.", image: t2021 },
  {
    year: "2023",
    title: "Installation of 66Kva Sub-station at Unit I.",
    image: t2023,
  },
  {
    year: "2024",
    title: "Commencement of production of HR coils.",
    image: t2024,
  },
  {
    year: "2025",
    title: `Set up of Unit III and commencement of production of ERW pipes and tubes and Scaffolding and Formwork systems.

Company acquired land for Proposed Unit IV.

Exported Scaffolding and Formwork systems to 13 countries.
Initiated installation of 22 MW solar power plant.`,
    image: t2025,
  },
];

const About = () => {
  /* ================= TIMELINE STATE ================= */
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimeoutRef = useRef(null);

  /* ================= AUTO TIMELINE (SAFE) ================= */
  useEffect(() => {
    if (isPaused) return;

    const timeout = setTimeout(() => {
      setActiveIndex((prev) =>
        prev === timelineData.length - 1 ? 0 : prev + 1,
      );
    }, 3500);

    return () => clearTimeout(timeout);
  }, [activeIndex, isPaused]);

  const handleTimelineClick = (index) => {
    setActiveIndex(index);
    setIsPaused(true);

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  /* ================= COUNTUP ================= */
  const { ref: statsRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const [viewKey, setViewKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setViewKey((prev) => prev + 1);
    }
  }, [inView]);
  /* ================= GALLERY SLIDER ================= */
  const galleryImages = [g1, g2, g3, g4];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1,
      );
    }, 3600); // intentionally different from timeline

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black text-white font-helvetica">
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[50vh] md:h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={aboutVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex items-end h-full px-6 md:px-20 pb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Company Overview
          </motion.h2>
        </div>
      </section>

      {/* ================= COMPANY OVERVIEW ================= */}
      <section className="relative min-h-screen overflow-hidden">
        <img
          src={banner}
          alt="About Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-[65%_35%] gap-16 px-6 md:px-16 py-20">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-semibold">
              Renny Strips Ltd: One of India’s Key Manufacturers of Customized
              Green Steel Solutions
            </h1>

            <p className="text-gray-200 leading-relaxed">
              Founded in 1996, Renny Strips Limited is a fully integrated
              structural products manufacturer headquartered in Ludhiana,
              Punjab. The Company operates 3 integrated manufacturing units,
              providing end-to-end finished products. Renny operates three
              induction furnaces with a total melting capacity of 199,200 TPA
              (versus an industry average of 65,000–75,000 TPA), supported by
              two continuous casting lines and two rolling mills producing MS
              billets, wire rods, and narrow-width HR coils. A downstream unit
              manufactures ERW black and galvanized pipes and tubes, along with
              scaffolding and formwork systems, using largely in-house inputs,
              positioning Renny among the few vertically integrated players in
              India across this value chain. The Company’s scaffolding and
              formwork portfolio exceeds 1,000 SKUs, supplied to customers
              across 5 continents and serves the construction, automotive,
              water, oil & gas, and fabrication sectors.
            </p>
          </motion.div>

          <motion.div
            ref={statsRef}
            className="flex flex-col items-center space-y-10"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {[
              { value: 1000, label: "SKUs" },
              { value: 199200, label: "Annual Production", separator: "," },
              { value: 1000, label: "Workforce" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-5xl text-sky-400">
                  {inView ? (
                    <CountUp
                      key={viewKey}
                      end={item.value}
                      separator={item.separator}
                    />
                  ) : (
                    0
                  )}
                  +
                </p>
                <p className="text-orange-400">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="bg-[#F8F8F8]  text-black">
        <div className="mx-auto px-6 md:px-16">
          <motion.h1
            className="text-[32px]  md:text-[48px] font-bold w-full text-center py-3 "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Timeline
          </motion.h1>

          <div className="relative mb-20">
            <div className="relative w-full mt-16">
              {/* Horizontal line */}
              <div className="absolute top-[45%] left-0 w-full h-[2px] bg-gray-300 -translate-y-1/2" />

              {/* Timeline items */}
              <div className="relative flex justify-between items-center overflow-x-auto pb-4 gap-8 min-w-[800px] md:min-w-0">
                {timelineData.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleTimelineClick(index)}
                    className="flex flex-col items-center relative shrink-0"
                  >
                    {/* Year */}
                    <span
                      className={`mb-6 text-sm font-medium ${
                        activeIndex === index
                          ? "text-blue scale-110 font-extrabold"
                          : "text-gray-400"
                      }`}
                    >
                      {item.year}
                    </span>

                    {/* Dot */}
                    <span
                      className={`w-5 h-5 rounded-full z-10 mb-10 transition-all ${
                        activeIndex === index
                          ? "bg-blue scale-110"
                          : "bg-gray-400"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            key={activeIndex}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div>
              <h3 className="text-3xl font-semibold mb-4">
                {timelineData[activeIndex].year}
              </h3>
              <p className="whitespace-pre-line text-gray-700">
                {timelineData[activeIndex].title}
              </p>
            </div>

            <img
              src={timelineData[activeIndex].image}
              alt=""
              className="h-[300px] md:h-[420px] w-full object-cover bg-amber-500 rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="relative w-full h-[300px] md:h-[550px] overflow-hidden">
        <motion.img
          key={currentSlide}
          src={galleryImages[currentSlide]}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
        />
      </section>

      {/* ================= NETWORK ================= */}
      <section className="bg-white py-3 text-black">
        <div className="mx-auto px-6 md:px-16">
          <h1 className="text-4xl font-bold text-center mb-10">Our Network</h1>

          <video
            src={worldmap}
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-2xl"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
