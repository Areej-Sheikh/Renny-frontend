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
{/* 2. Renny's Journey Section */}
<section className="py-20 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto bg-white flex flex-col items-center">
  
  {/* Centered Header with Blend and Full Underline */}
  <ScrollReveal direction="up">
    <div className="mb-10 flex flex-col items-center">
      <div className="relative w-fit">
        <h2 
          className="font-bold pb-3 whitespace-nowrap text-center"
          style={{ 
            fontFamily: 'var(--font-helvetica)', 
            fontSize: '48px',
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
      Lorem ipsum dolor sit amet consectetur. Sapien eget amet nunc ornare turpis enim. Tempor tortor dictum eu vel nec aliquam. Mi tristique ullamcorper aliquet amet viverra eu lectus elit. Amet nunc sit elementum penatibus ultrices tortor. Elementum et sollicitudin a vel massa massa at tellus. Vestibulum amet quis nulla imperdiet scelerisque porttitor nulla. Ut a quam feugiat quis dui habitasse turpis. In in non consectetur aliquam. Lectus condimentum pellentesque nisl elit. Eu amet dolor id sit cursus egestas tempus nunc. Facilisis porta interdum etiam habitant blandit ligula. Velit quam morbi at bibendum purus. Pulvinar elementum adipiscing elementum viverra molestie mauris.
    </p>
  </ScrollReveal>
</section>
    </div>
  );
};

export default SustainabilityContent;