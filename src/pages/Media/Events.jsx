import { motion, useScroll, useTransform } from 'framer-motion';

import events1 from '../../assets/events1.mp4';
import events2 from '../../assets/events2.mp4';
import events3 from '../../assets/events3.mp4';
import events4 from '../../assets/events4.mp4';
import banner from '../../assets/eventsbanner.png';

import EventCard from '../../components/EventCard';

const eventsData = [
  {
    id: 1,
    title: 'Renny @ bauma CONEXPO INDIA 2024',
    date: 'December 21, 2024',
    video: events1,
    desc: `Renny marked a strong presence at bauma CONEXPO INDIA 2024 by unveiling 
      its latest innovations in scaffolding and formwork systems. The event brought 
      together industry leaders, engineers, and construction professionals from 
      across the country.`,
  },
  {
    id: 2,
    title: 'Strengthening Tomorrow',
    date: 'October 19, 2024',
    video: events2,
    desc: `The “Strengthening Tomorrow” initiative, organized with the Bureau of 
      Indian Standards, focused on quality benchmarks and evolving construction 
      standards.`,
  },
  {
    id: 3,
    title: 'World Nature Conservation Day',
    date: 'October 19, 2024',
    video: events3,
    desc: `On World Nature Conservation Day, Renny emphasized environmental 
      responsibility through sustainability initiatives and awareness programs.`,
  },
  {
    id: 4,
    title: 'Diwali Celebration',
    date: 'October 20, 2025',
    video: events4,
    desc: `The Diwali celebration at Renny brought employees together in a vibrant 
      display of culture, unity, and gratitude.`,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const Events = () => {
  const { scrollYProgress } = useScroll();
  const bannerY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <motion.div className="font-helvetica  overflow-hidden  min-h-screen ">
      {/* ---------------- Banner ---------------- */}
      <motion.section
        className="relative h-[70vh] w-full overflow-hidden  mb-12"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <img
          src={banner}
          alt="Blogs Banner"
          className="absolute inset-0 w-full h-full  object-cover"
        />
        <div className="absolute inset-0  bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 text-white text-6xl md:text-7xl font-bold 
                 flex items-end justify-start h-full py-10 px-10"
        >
          Events
        </motion.h1>
      </motion.section>

      {/* ---------------- Event Cards ---------------- */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-24"
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
