import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const EventSection = ({ event, index }) => {
  const ref = useRef();
  const inView = useInView(ref, { margin: '-30% 0px', once: false });
  const controls = useAnimation();

  const isLeft = index % 2 === 0;

  const textVariants = {
    hidden: { opacity: 0, x: isLeft ? -150 : 150 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.6 } },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.6 } },
  };

  // Handle scroll-triggered animation and video autoplay
  useEffect(() => {
    if (inView) {
      controls.start('visible');
      if (ref.current) {
        const video = ref.current.querySelector('video');
        if (video) video.play().catch(() => {});
      }
    } else {
      controls.start('hidden');
      if (ref.current) {
        const video = ref.current.querySelector('video');
        if (video) video.pause();
      }
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      exit="exit"
      className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-24 gap-12 "
    >
      {/* Text */}
      <motion.div
        className={`flex-1 ${isLeft ? 'lg:text-left' : 'lg:text-left'}`}
        variants={textVariants}
      >
        <motion.h2 className="text-4xl font-bold mb-4">{event.title}</motion.h2>
        <motion.p className="text-gray-600 mb-2 text-sm">{event.date}</motion.p>
        <motion.p className="text-gray-900 leading-relaxed">
          {event.desc}
        </motion.p>
      </motion.div>

      {/* Video */}
      <motion.div className="flex-1" variants={videoVariants}>
        <video
          src={event.video}
          muted
          playsInline
          loop
          className="w-full rounded-xl shadow-xl object-cover h-[300px] lg:h-[400px]"
        />
      </motion.div>
    </motion.section>
  );
};

export default EventSection;
