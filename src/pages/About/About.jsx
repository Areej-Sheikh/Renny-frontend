import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

import aboutVideo from "../../assets/01-aboutVideo.webm";
import worldmap from "../../assets/World-Map.webm";

import bgCompanyOverview from "../../assets/BG-companyoverview.jpeg";

import t1996 from "../../assets/1996.jpeg";
import t2005 from "../../assets/2005.webp";
import t2016 from "../../assets/2016.webp";
import t2018 from "../../assets/2018.jpg";
import t2019 from "../../assets/2019.jpg";
import t2021 from "../../assets/2021.jpg";
import t2023 from "../../assets/2023.jpg";
import t2024 from "../../assets/2024.webp";
import t2025 from "../../assets/2025.png";

import g1 from "../../assets/g1.jpg";
import g2 from "../../assets/g2.jpg";
import g3 from "../../assets/g3.webp";
import g4 from "../../assets/g4.jpg";

const timelineData = [
  { year: "1996", title: "Incorporation of our Company\nCommenced trading of MS Billets.", image: t1996 },
  { year: "2005", title: "Setting up a rolling mill at Unit I and commenced manufacturing of wire rods.", image: t2005 },
  { year: "2016", title: "Export of galvanized iron fully threaded rods to U.A.E.", image: t2016 },
  { year: "2018", title: "Set up of continuous casting machine and rolling mill at Unit I.", image: t2018 },
  { year: "2019", title: "Set up of continuous casting machine and induction melting furnace at Unit II.", image: t2019 },
  { year: "2021", title: "Expansion of Unit I.", image: t2021 },
  { year: "2023", title: "Installation of 66Kva Sub-station at Unit I.", image: t2023 },
  { year: "2024", title: "Commencement of production of HR coils.", image: t2024 },
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { ref: statsRef, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const galleryImages = [g1, g2, g3, g4];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === timelineData.length - 1 ? 0 : prev + 1
      );
    }, 3500);
    return () => clearInterval(interval);
  }, [timelineData.length]);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }, 2000);
    return () => clearInterval(slider);
  }, [galleryImages.length]);

  return (
    <div className="w-full bg-black text-white font-helvetica">
      {/* VIDEO HERO */}
      <section className="relative w-screen h-screen overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover" src={aboutVideo} autoPlay loop muted playsInline />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-end h-full px-6 md:px-20 pb-12">
          <motion.h2 className="text-4xl md:text-5xl font-bold" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Company Overview
          </motion.h2>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgCompanyOverview})` }}>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[65%_35%] gap-16 px-6 md:px-16 py-20">
          <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            {/* text content unchanged */}
          </motion.div>

          <motion.div ref={statsRef} className="flex flex-col items-center space-y-10 pt-6">
            {[{ value: 1000, label: "SKUs" }, { value: 199200, label: "Annual Production", separator: "," }, { value: 1000, label: "Workforce" }].map(
              (item, i) => (
                <div key={i} className="text-center">
                  <p className="text-5xl font-light text-sky-400">
                    {inView ? <CountUp end={item.value} separator={item.separator} /> : 0}+
                  </p>
                  <p className="text-orange-400 mt-2">{item.label}</p>
                </div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-[#F8F8F8] py-24 text-black">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="relative mb-20">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-300" />
            <div className="flex justify-between relative">
              {timelineData.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <div key={index} className="relative flex flex-col items-center">
                    <span className={`mb-10 text-lg font-semibold ${isActive ? "text-orange-500" : "text-gray-500"}`}>
                      {item.year}
                    </span>
                    <motion.div
                      className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${
                        isActive ? "bg-orange-500" : "bg-gray-400"
                      }`}
                      animate={{ scale: isActive ? 1.4 : 1 }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* NETWORK */}
      <section className="bg-white py-24 text-black">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.video src={worldmap} autoPlay loop muted playsInline className="w-full rounded-2xl" />
        </div>
      </section>
    </div>
  );
};

export default About;
