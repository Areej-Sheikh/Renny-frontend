import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

import events1 from '../../assets/events1.mp4';
import events2 from '../../assets/events2.mp4';
import events3 from '../../assets/events3.mp4';
import events4 from '../../assets/events4.mp4';
import banner from '../../assets/eventsbanner.webp';
import newsvideo from '../../assets/newsvideo.webm';

import EventCard from '../../components/EventCard';

const eventsData = [
  {
    id: 1,
    title: 'Renny @ bauma CONEXPO INDIA 2024',
    date: 'December 21, 2024',
    video: events1,
    desc: `Renny marked a strong presence at bauma CONEXPO INDIA 2024 by unveiling 
    its latest innovations in scaffolding and formwork systems.`,
  },
  {
    id: 2,
    title: 'Strengthening Tomorrow',
    date: 'October 19, 2024',
    video: events2,
    desc: `The “Strengthening Tomorrow” initiative focused on quality benchmarks 
    and evolving construction standards.`,
  },
  {
    id: 3,
    title: 'World Nature Conservation Day',
    date: 'October 19, 2024',
    video: events3,
    desc: `Renny emphasized environmental responsibility through sustainability 
    initiatives and awareness programs.`,
  },
  {
    id: 4,
    title: 'Diwali Celebration',
    date: 'October 20, 2025',
    video: events4,
    desc: `The Diwali celebration brought employees together in a vibrant display 
    of culture and unity.`,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Events = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });

  const { scrollYProgress } = useScroll();
  const bannerY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <motion.div className="font-helvetica overflow-hidden min-h-screen">
      {/* Banner */}
      <motion.section
        className="relative h-[100vh] w-full overflow-hidden mb-12"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <motion.img
          src={banner}
          alt="Events Banner"
          style={{ y: bannerY }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative z-10 text-white text-6xl md:text-7xl font-bold 
                     flex items-end h-full py-10 px-10"
        >
          Events
        </motion.h1>
      </motion.section>

      {/* Spotlight section */}
      <section className="flex items-center justify-center">
        <div className="relative h-[550px] w-6xl mt-20 rounded-4xl overflow-hidden ">
          {/* Background Video */}
          <video
            src={newsvideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0  w-full h-full object-cover z-0"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />

          {/* Content */}
          <section ref={ref} className="relative z-20  p-20 md:p-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="space-y-6"
            >
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl mt-20 font-bold text-white text-center"
              >
                Celebrating Moments That Matter
              </motion.h2>

              <motion.h3
                variants={itemVariants}
                className="text-2xl md:text-3xl font-semibold text-white/90 text-center"
              >
                Through Our Company Events
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="text-white/80 text-center md:text-lg leading-relaxed max-w-3xl mx-auto"
              >
                Our events reflect the culture, values, and spirit that define
                Renny Strips. From industry exhibitions and leadership
                engagements to internal celebrations and community initiatives,
                each event marks a step in our journey of growth, collaboration,
                and excellence.
              </motion.p>
            </motion.div>
          </section>
        </div>
      </section>

      {/* Event Cards */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" mx-auto px-6 py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {eventsData.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Events;
