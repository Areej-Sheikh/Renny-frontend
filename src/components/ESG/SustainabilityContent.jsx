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
      <section className="relative w-full h-[100vh]">
        <img 
          src={esgBanner} 
          alt="ESG Banner" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        
        {/* Positioning ESG text at Left Bottom side */}
        <div className="absolute inset-0 flex items-end justify-start pb-12 pl-10 md:pl-16 lg:pl-24 z-10">
          <ScrollReveal direction="left">
            <h1 
              className="text-white font-bold"
              style={{ 
                fontFamily: 'var(--font-helvetica)', 
                fontSize: '48px',
                textShadow: '0px 4px 15px rgba(0,0,0,0.6)' 
              }}
            >
              ESG
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. RENNY'S JOURNEY SECTION */}
      <section className="py-20 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        
        {/* Header: Helvetica 48px, Animated from Left */}
        <ScrollReveal direction="left">
          <div className="inline-block border border-[#7e84a3] px-6 py-2 mb-10">
            <h2 
              className="font-normal uppercase" 
              style={{ 
                fontFamily: 'var(--font-helvetica)', 
                fontSize: '48px', 
                lineHeight: '1.1' 
              }}
            >
              <span style={{ color: 'var(--color-blue)' }}>Renny's </span>
              <span className="text-[#00A63E]">Journey</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Content Paragraph: Helvetica, Animated from Bottom */}
        <ScrollReveal direction="up" delay={2}>
          <p 
            className="text-[16px] md:text-[18px] leading-[1.8] text-[#333] text-left max-w-6xl"
            style={{ fontFamily: 'var(--font-helvetica)', letterSpacing: '-0.01em' }}
          >
            Lorem ipsum dolor sit amet consectetur. Sapien eget amet nunc ornare turpis enim. 
            Tempor tortor dictum eu vel nec aliquam. Mi tristique ullamcorper aliquet amet 
            viverra eu lectus elit. Amet nunc sit elementum penatibus ultrices tortor. 
            Elementum et sollicitudin a vel massa massa at tellus. Vestibulum amet quis 
            nulla imperdiet scelerisque porttitor nulla. Ut a quam feugiat quis dui habitasse 
            turpis. In in non consectetur aliquam. Lectus condimentum pellentesque nisl elit. 
            Eu amet dolor id sit cursus egestas tempus nunc. Facilisis porta interdum etiam 
            habitant blandit ligula. Velit quam morbi at bibendum purus. Pulvinar elementum 
            adipiscing elementum viverra molestie mauris.
          </p>
        </ScrollReveal>
      </section>

    </div>
  );
};

export default SustainabilityContent;