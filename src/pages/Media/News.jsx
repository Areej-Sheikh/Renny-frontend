import newsbanner from '../../assets/newsbanner.webp';
import newsvideo from '../../assets/newsvideo.webm';
import MobileMediaVideo from '../../assets/MobileMediaVideo.webm'

import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [activeNews, setActiveNews] = useState(null);
  const [loading, setLoading] = useState(true);

  // ---------------- FETCH NEWS ----------------
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/news`);
        const data = await res.json();

        const formatted = data.map(item => ({
          id: item._id,
          title: item.title,
          desc: item.description,
          link: item.externalLink,
          img: item.imageUrl,
          order: item.order,
          date: item.date,
        }));

        setNewsData(formatted);
        setActiveNews(formatted[0] || null);
      } catch (err) {
        console.error('NEWS FETCH ERROR:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // ---------------- ANIMATIONS ----------------
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const scaleFade = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  /* Removed unused inView */

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

  // ---------------- LOADING STATE ----------------
  if (loading || !activeNews) {
    return (
      <div className="min-h-screen flex items-center justify-center font-helvetica">
        <p className="text-lg">Loading news...</p>
      </div>
    );
  }

  // ---------------- UI ----------------
  return (
    <div className="min-h-screen font-helvetica">
      {/* Banner */}
      <motion.section
        className="relative h-[50vh] md:h-[100vh] w-full overflow-hidden"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <img
          src={newsbanner}
          alt="News Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 text-white text-4xl md:text-6xl lg:text-7xl font-bold flex items-end justify-start h-full py-10 px-6 md:px-10"
        >
          News
        </motion.h1>
      </motion.section>

      {/* Spotlight */}
      <section className="flex items-center justify-center px-6">
        <div className="relative h-[400px] md:h-[550px] w-full max-w-6xl mt-12 md:mt-20 rounded-4xl overflow-hidden">
          <video
            src={newsvideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />

          <section className="relative z-20 p-8 md:p-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-5xl mt-10 md:mt-20 font-bold text-white text-center"
              >
                Showcasing Our Journey
              </motion.h2>

              <motion.h3
                variants={itemVariants}
                className="text-2xl md:text-3xl font-semibold text-white/90 text-center"
              >
                Through the Spotlight
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="text-white/80 text-center md:text-lg leading-relaxed max-w-3xl mx-auto"
              >
                At Renny Strips, our work and leadership continue to inspire
                stories of growth, innovation, and resilience. From prestigious
                awards to industry recognitions and leadership features, our
                journey has been highlighted across respected media platforms.
                This coverage not only reflects our achievements but also
                reinforces our commitment to shaping the future of the steel
                industry with excellence and integrity.
              </motion.p>
            </motion.div>
          </section>

        </div>
      </section>

      {/* NEWS PANEL */}
      <div className="flex flex-col lg:flex-row gap-8 mb-40 mt-16 px-6">
        {/* Left Panel */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:w-1/3 bg-white rounded-2xl shadow p-4 space-y-3"
        >
          {newsData.map(news => (
            <motion.button
              key={news.id}
              variants={listItem}
              onClick={() => setActiveNews(news)}
              whileHover={{ scale: 1.02 }}
              className={`group relative flex items-center gap-4 w-full p-3 rounded-2xl text-left transition ${activeNews.id === news.id ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
            >
              {activeNews.id === news.id && (
                <motion.span
                  layoutId="active-indicator"
                  className="absolute left-0 top-0 h-full w-1 bg-black rounded-r"
                />
              )}

              <motion.img
                src={news.img}
                alt={news.title}
                className="w-16 h-16 object-cover rounded"
                whileHover={{ scale: 1.05 }}
              />

              <p className="text-sm font-medium line-clamp-2">
                {news.title}
              </p>
            </motion.button>
          ))}
        </motion.div>

        {/* Right Panel */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:w-2/3 bg-white rounded-2xl shadow p-6"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNews.id}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col items-center text-center"
            >
              <motion.img
                variants={scaleFade}
                src={activeNews.img}
                alt={activeNews.title}
                className="w-72 h-72 object-fit rounded-2xl mb-6"
              />

              <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-4">
                {activeNews.title}
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-gray-700 mb-6 leading-relaxed max-w-3xl"
              >
                {activeNews.desc}
              </motion.p>

              <motion.div variants={fadeUp}>
                <Link
                  to={activeNews.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
                >
                  Read Full Article →
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
