import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

import aboutVideo from '../../assets/01-aboutVideo.webm';
import worldmap from '../../assets/World-Map.webm';
import { image } from 'framer-motion/client';
//images
import t1996 from '../../assets/1996.jpeg'; //changing part of images
import t2005 from '../../assets/2005.webp'; //changing part of images
import t2016 from '../../assets/2016.webp'; //changing part of images
import t2018 from '../../assets/2018.jpg'; //changing part of images
import t2019 from '../../assets/2019.jpg'; //changing part of images
import t2021 from '../../assets/2021.jpg'; //changing part of images
import t2023 from '../../assets/2023.jpg'; //changing part of images
import t2024 from '../../assets/2024.webp'; //changing part of images
import t2025 from '../../assets/2025.png';

import g1 from '../../assets/g1.jpg'; //changing part of images
import g2 from '../../assets/g2.jpg'; //changing part of images
import g3 from '../../assets/g3.webp'; //changing part of images
import g4 from '../../assets/g4.jpg'; //changing part of images

import banner from '../../assets/Image.webp';
/* ================= TIMELINE DATA ================= */
const timelineData = [
  {
    year: '1996',
    title: 'Incorporation of our Company\nCommenced trading of MS Billets.',
    image: t1996,
  },
  {
    year: '2005',
    title:
      'Setting up a rolling mill at Unit I and commenced manufacturing of wire rods.',
    image: t2005,
  },
  {
    year: '2016',
    title: 'Export of galvanized iron fully threaded rods to U.A.E.',
    image: t2016,
  },
  {
    year: '2018',
    title: 'Set up of continuous casting machine and rolling mill at Unit I.',
    image: t2018,
  },
  {
    year: '2019',
    title:
      'Set up of continuous casting machine and induction melting furnace at Unit II.',
    image: t2019,
  },
  { year: '2021', title: 'Expansion of Unit I.', image: t2021 },
  {
    year: '2023',
    title: 'Installation of 66Kva Sub-station at Unit I.',
    image: t2023,
  },
  {
    year: '2024',
    title: 'Commencement of production of HR coils.',
    image: t2024,
  },
  {
    year: '2025',
    title: `Set up of Unit III and commencement of production of ERW pipes and tubes and Scaffolding and Formwork systems.

    Company acquired land for Proposed Unit IV.

    Exported Scaffolding and Formwork systems to 13 countries.
    Initiated installation of 22 MW solar power plant.`,
    image: t2025,
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  /* ===== AUTO TIMELINE ===== */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev === timelineData.length - 1 ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  /* ===== COUNTUP ===== */
  const { ref: statsRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const galleryImages = [g1, g2, g3, g4];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide(prev =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }, 2000);
    return () => clearInterval(slider);
  }, []);

  return (
    <div className="w-full bg-black text-white font-helvetica">
      {/* ================= HERO ================= */}
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

        <div className="relative z-10 flex items-end h-full px-6 md:px-20 pb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Company Overview
          </motion.h2>
        </div>
      </section>

      {/* ================= COMPANY OVERVIEW ================= */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={banner}
          alt="About Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10  mx-auto grid lg:grid-cols-[65%_35%] gap-16 px-6 md:px-16 py-20 text-white">
          {/* LEFT CONTENT */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1
              className="text-3xl md:text-4xl font-semibold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              Renny Strips Ltd: One of India’s Key Manufacturers of Customized
              Green Steel Solutions
            </motion.h1>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-base md:text-lg text-gray-200 leading-relaxed"
              >
                Founded in 1996, Renny Strips Limited is a fully integrated
                structural products manufacturer headquartered in Ludhiana,
                Punjab. The Company operates 3 integrated manufacturing units,
                providing end-to-end finished products. Renny operates three
                induction furnaces with a total melting capacity of 199,200 TPA
                (versus an industry average of 65,000–75,000 TPA), supported by
                two continuous casting lines and two rolling mills producing MS
                billets, wire rods, and narrow-width HR coils. A downstream unit
                manufactures ERW black and galvanized pipes and tubes, along
                with scaffolding and formwork systems, using largely in-house
                inputs, positioning Renny among the few vertically integrated
                players in India across this value chain. The Company’s
                scaffolding and formwork portfolio exceeds 1,000 SKUs, supplied
                to customers across 5 continents and serves the construction,
                automotive, water, oil & gas, and fabrication sectors.
              </motion.p>

              <motion.ol
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="list-decimal list-inside space-y-2 text-gray-100 pt-5"
              >
                <li>MS billets</li>
                <li>Wire rods</li>
                <li>Narrow-width HR coils</li>
                <li>ERW pipes and tubes</li>
                <li>Scaffolding and formwork systems</li>
              </motion.ol>
            </motion.div>
          </motion.div>

          {/* RIGHT STATS */}
          <motion.div
            ref={statsRef}
            className="flex flex-col items-center space-y-10 pt-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {[
              { value: 1000, label: 'SKUs' },
              { value: 199200, label: 'Annual Production', separator: ',' },
              { value: 1000, label: 'Workforce' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-5xl font-light text-sky-400">
                  {inView ? (
                    <CountUp end={item.value} separator={item.separator} />
                  ) : (
                    0
                  )}
                  +
                </p>
                <p className="text-orange-400 mt-2">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="bg-[#F8F8F8] py-24 text-black">
        <div className=" mx-auto px-6 md:px-16">
          {/* HEADING */}
          <motion.h1
            className="text-[48px] font-bold mb-5 w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Renny's Timeline
            <div className="w-80 h-0.5 bg-blue mx-auto rounded-full mb-10" />
          </motion.h1>

          {/* TIMELINE */}
          <div className="relative mb-20">
            {/* HORIZONTAL LINE */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-300" />

            <div className="flex justify-between relative">
              {timelineData.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  // ✅ UPDATED: made relative
                  <div
                    key={index}
                    className="relative flex flex-col items-center"
                  >
                    {/* YEAR */}
                    <span
                      className={`mb-10 text-lg font-semibold transition ${
                        isActive ? 'text-blue' : 'text-gray-400'
                      }`}
                    >
                      {item.year}
                    </span>

                    {/* DOT – NOW ON THE LINE */}
                    <motion.div
                      className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${
                        isActive ? 'bg-blue' : 'bg-gray-400'
                      }`}
                      animate={{ scale: isActive ? 1.4 : 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* CONTENT */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid lg:grid-cols-2 gap-20"
          >
            <div>
              <h3 className="text-3xl font-semibold mb-4">
                {timelineData[activeIndex].year}
              </h3>
              <p className="text-lg whitespace-pre-line text-gray-700">
                {timelineData[activeIndex].title}
              </p>
            </div>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="h-[420px] rounded-xl overflow-hidden"
            >
              <img
                src={timelineData[activeIndex].image}
                alt={timelineData[activeIndex].year}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative w-screen h-[600px] overflow-hidden">
        {/* IMAGE */}
        <motion.img
          key={currentSlide}
          src={galleryImages[currentSlide]}
          alt="Gallery"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </section>

      {/* ================= OUR NETWORK ================= */}
      <section className="bg-white py-24 text-black">
        <div className=" mx-auto px-6 md:px-16">
          <motion.h1
            className="text-[48px] font-bold mb-5 w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Network
            <div className="w-60 h-0.5 bg-blue mx-auto rounded-full mb-10" />
          </motion.h1>

          <motion.video
            src={worldmap}
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-2xl"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </div>
      </section>
    </div>
  );
};

export default About;
