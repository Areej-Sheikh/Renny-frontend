import news1 from '../../assets/news1.jpg';
import news2 from '../../assets/news2.jpeg';
import news3 from '../../assets/news3.png';
import news4 from '../../assets/news4.jpg';
import news5 from '../../assets/news5.jpg';
import news6 from '../../assets/news6.jpeg';
import news7 from '../../assets/news7.png';
import news8 from '../../assets/news8.png';
import news9 from '../../assets/news9.jpg';
import banner from '../../assets/Image.webp';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const News = () => {
  // 🔒 News data LEFT UNTOUCHED (as requested)
  const newsData = [
    {
      id: 1,
      title:
        'Renny Strips reshapes construction with sustainable scaffolding and formwork solutions',
      desc: 'Renny Strips is driving India’s urban revolution on a sustainable basis by providing cutting-edge scaffolding and formwork solutions that prioritise safety, reduce carbon footprint, and enable smart vertical growth across the country.',
      link: 'https://aceupdate.com/renny-strips-reshapes-construction-with-sustainable-scaffolding-and-formwork-solutions/',
      img: news1,
    },
    {
      id: 2,
      title:
        'Renny Strips Sets New Benchmarks in Scaffolding Safety and Reliability',
      desc: 'Steel formwork and scaffolding are the cornerstones of contemporary construction, infusing strength, efficiency, and security. Steel scaffolding offers a safe working platform at heights, enhances accessibility, and facilitates free movement of material and equipment.',
      link: 'https://odishabiznewz.com/news/renny-strips-sets-new-benchmarks-in-scaffolding-safety-and-reliability/',
      img: news2,
    },
    {
      id: 3,
      title:
        'Renny Strips Sets New Benchmarks in Scaffolding Safety and Reliability',
      desc: 'Steel formwork and scaffolding are the cornerstones of contemporary construction, infusing strength, efficiency, and security.',
      link: 'https://businessnewsthisweek.com/business/renny-strips-sets-new-benchmarks-in-scaffolding-safety-and-reliability/',
      img: news3,
    },
    {
      id: 4,
      title:
        'Renny Strips leads sustainable manufacturing with 22 MW solar power plant',
      desc: "Renny Strips, India's exclusive manufacturer of customised green steel solutions for the scaffolding and formwork industry, has installed a cutting-edge 22 MW solar power plant across 100 acres.",
      link: 'https://www.projectstoday.com/News/Renny-Strips-leads-sustainable-manufacturing-with-22-MW-solar-power-plant',
      img: news4,
    },
    {
      id: 5,
      title: 'Renny Strips Powers Ahead with 22MW Solar Energy Initiative',
      desc: 'Renny Strips Pvt. Ltd., with its specialized expertise in fabrication and forging, stands as India’s exclusive manufacturer of end-to-end customized green steel solutions for the scaffolding and formwork industry.',
      link: 'https://electronicsera.in/renny-strips-powers-ahead-with-22mw-solar-energy-initiative/',
      img: news5,
    },
    {
      id: 6,
      title: 'First-ever 1000 MW thermal power plant commissioned in India',
      desc: 'First-ever 1000 MW thermal power plant commissioned in India at Tamnar.',
      link: 'https://pdf.equipmentindia.com//Monthly-Edition/PDF-version/January-2025/index.html',
      img: news6,
    },
    {
      id: 7,
      title:
        'Rennystrips to Showcase Premium Solutions at Bauma Conexpo India 2024',
      desc: 'Rennystrips Pvt. Ltd. announced its participation in Bauma Conexpo India 2024, taking place from December 11–14 at the India Expo Centre, Greater Noida.',
      link: 'https://gyanmuse.com/rennystrips-to-showcase-premium-solutions-at-bauma-conexpo-india-2024/',
      img: news7,
    },
    {
      id: 8,
      title: 'Renny Strips Shines at bauma CONEXPO INDIA',
      desc: 'Renny Strips, a pioneer in the building material industry, proudly participated in bauma CONEXPO INDIA.',
      link: 'https://www.apnnews.com/renny-strips-shines-at-bauma-conexpo-india/',
      img: news8,
    },
    {
      id: 9,
      title: 'Renny Strips Shines at bauma CONEXPO INDIA',
      desc: 'Held from 11th to 14th December at the India Expo Centre, Greater Noida, bauma CONEXPO INDIA is a vital platform for innovation and global industry connections.',
      link: 'https://www.apnnews.com/renny-strips-shines-at-bauma-conexpo-india/',
      img: news9,
    },
  ];

  // Latest news shown by default
  const [activeNews, setActiveNews] = useState(newsData[newsData.length - 1]);
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
  // Subtle zoom effect on background
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });

  // Container variants for staggering
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Item variants
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };
  return (
    <div className="bg-gray-100 min-h-screen px-6 py-12 font-helvetica">
      <section className="relative h-[70vh] mt-10 w-full rounded-2xl overflow-hidden">
        <motion.img
          src={banner}
          alt="News Banner"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="absolute inset-0  w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="relative z-10 flex items-center justify-center h-full"
        >
          <h1 className="text-white text-6xl md:text-7xl font-bold tracking-[0.35em]">
            NEWS
          </h1>
        </motion.div>
      </section>
      <section ref={ref} className="max-w-6xl mx-auto rounded-2xl px-6 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-6"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 text-center"
          >
            Showcasing Our Journey
          </motion.h2>

          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold text-gray-700 text-center"
          >
            Through the Spotlight
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-center md:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            At Renny Strips, our work and leadership continue to inspire stories
            of growth, innovation, and resilience. From prestigious awards to
            industry recognitions and leadership features, our journey has been
            highlighted across respected media platforms. This coverage not only
            reflects our achievements but also reinforces our commitment to
            shaping the future of the steel industry with excellence and
            integrity.
          </motion.p>
        </motion.div>
      </section>

      <div className="flex flex-col lg:flex-row gap-8 mt-16">
        {/* ---------------- Left Panel ---------------- */}
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
              className={`group relative flex items-center gap-4 w-full p-3 rounded-2xl text-left transition
        ${activeNews.id === news.id ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
            >
              {/* Active indicator */}
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

              <p className="text-sm font-medium line-clamp-2 group-hover:text-black">
                {news.title}
              </p>
            </motion.button>
          ))}
        </motion.div>

        {/* ---------------- Right Panel (Preview) ---------------- */}
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
              {/* Image */}
              <motion.img
                variants={scaleFade}
                src={activeNews.img}
                alt={activeNews.title}
                className="w-full h-72 object-cover rounded-2xl mb-6"
              />

              {/* Title */}
              <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-4">
                {activeNews.title}
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="text-gray-700 mb-6 leading-relaxed max-w-3xl"
              >
                {activeNews.desc}
              </motion.p>

              {/* CTA */}
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
