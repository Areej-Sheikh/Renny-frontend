import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

import banner from '../../assets/eventsbanner.webp';
import newsvideo from '../../assets/newsvideo.webm';
import MobileMediaVideo from '../../assets/MobileMediaVideo.webm'

import EventCard from '../../components/EventCard';

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
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Banner parallax
  const { scrollYProgress } = useScroll();
  const bannerY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  // ---------------- FETCH EVENTS ----------------
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/events`);
        const json = await res.json();

        if (!json.success) throw new Error('Failed to fetch events');

        const formatted = json.data.map(item => ({
          id: item._id,
          title: item.title,
          date: item.date,
          video: item.videoUrl,
          desc: item.description,
          order: item.order,
        }));

        setEventsData(formatted);
      } catch (err) {
        console.error('EVENT FETCH ERROR:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center font-helvetica">
        <p className="text-lg">Loading events...</p>
      </div>
    );
  }

  return (
    <motion.div className="font-helvetica overflow-hidden min-h-screen">
      {/* Banner */}
      <motion.section
        className="relative h-[50vh] md:h-[100vh] w-full overflow-hidden mb-12"
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative z-10 text-white text-4xl md:text-6xl lg:text-7xl font-bold 
                     flex items-end h-full py-10 px-6 md:px-10"
        >
          Events
        </motion.h1>
      </motion.section>

      {/* Spotlight section */}
      <section className="flex items-center justify-center px-6">
        <div className="relative h-[400px] md:h-[550px] w-full max-w-6xl mt-12 md:mt-20 rounded-4xl overflow-hidden">
          {/* Background Video */}
          <video
            src={newsvideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />

          {/* Content (FIXED: animate on mount) */}
          <section className="relative z-20 p-8 md:p-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4 md:space-y-6"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-5xl mt-10 md:mt-20 font-bold text-white text-center"
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
