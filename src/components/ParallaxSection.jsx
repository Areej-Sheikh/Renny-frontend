import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import parallaxImg from '../assets/RENNY.png';

const ParallaxSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-35%', '35%']);

  return (
    <motion.section
      ref={ref}
      className="relative h-[80vh] overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Parallax Image */}
      <motion.img
        src={parallaxImg}
        alt="Parallax divider"
        className="absolute inset-0 w-full h-full object-cover scale-70"
        style={{ y }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h2 className="text-white text-4xl font-bold font-helvetica">
          Building A Future Together
        </h2>
      </div>
    </motion.section>
  );
};

export default ParallaxSection;
