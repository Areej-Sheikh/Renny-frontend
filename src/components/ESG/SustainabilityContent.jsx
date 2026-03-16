import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Asset Import
import esgBanner from '../../assets/ESG_Banar.webp';

/* --------------------------------------------------------------------------
    REUSABLE ANIMATION COMPONENT: ScrollReveal
    (As per your provided logic)
-------------------------------------------------------------------------- */
const ScrollReveal = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: delay * 0.15,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
      {children}
    </motion.div>
  );
};

/* --------------------------------------------------------------------------
    COMPONENT: SustainabilityContent
    (Rename to avoid conflict with Sustainability.jsx)
-------------------------------------------------------------------------- */
const SustainabilityContent = () => {
  return (
    <div className="w-full bg-white overflow-x-hidden">

      {/* 1. HERO BANNER SECTION */}
      {/* Banner */}
      <motion.section
        className="relative h-[50vh] md:h-[100vh] w-full overflow-hidden mb-12"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <img
          src={esgBanner}
          alt="ESG Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 text-white text-4xl md:text-6xl lg:text-7xl font-bold flex items-end justify-start h-full py-10 px-6 md:px-10"
        >
          ESG
        </motion.h1>
      </motion.section>

      {/* 2. Renny's Journey Section */}
      <section className="py-20 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto bg-white flex flex-col items-center">

        {/* Centered Header with Blend and Full Underline */}
        <ScrollReveal direction="up">
          <div className="mb-10 flex flex-col items-center">
            <div className="relative w-fit">
              <h2
                className="font-bold pb-3 whitespace-nowrap text-center text-3xl md:text-5xl lg:text-[48px]"
                style={{
                  fontFamily: 'var(--font-helvetica)',
                  lineHeight: '1.2',
                  // Fix for visibility: Use a tighter gradient and explicit color
                  background: "linear-gradient(90deg, #000000 0%, #00A63E 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block"
                }}
              >
                Renny's Journey
              </h2>

              {/* Continuous Underline for all text */}
              <div className="w-full h-0.5 bg-blue mx-auto rounded-full mt-1" />
            </div>
          </div>
        </ScrollReveal>

        {/* Content Paragraph - Kept exactly as previous */}
        <ScrollReveal direction="up" delay={2}>
          <p
            className="text-[16px] md:text-[18px] leading-[1.8] text-[#333] text-left max-w-6xl"
            style={{ fontFamily: 'var(--font-helvetica)', letterSpacing: '-0.01em' }}
          >
            Renny Strips Limited is committed to sustainable manufacturing through energy-efficient operations and cleaner technologies, achieving carbon emissions up to 40% lower than the industry average. The Company’s sustainability practices are aligned with global standards, including the Carbon Border Adjustment Mechanism. Beyond environmental performance, Renny Strips Limited supports community development through initiatives in education, medical support, and rainwater harvesting, contributing to a greener, stronger, and more sustainable future.
          </p>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default SustainabilityContent;