import pti from '../../assets/pti.webp';
import et from '../../assets/et.webp';
import bs from '../../assets/bs.webp';
import mc from '../../assets/mc.webp';
import bt from '../../assets/bt.webp';
import newsimg from '../../assets/newsimg.webp';

import newsbanner from '../../assets/newsbanner.webp';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import newsvideo from '../../assets/newsvideo.webm';

const News = () => {
  const newsData = [
    {
      id: 1,
      title:
        'Renny Strips Limited, a vertically integrated and sustainability-focused manufacturer of structural steel products has officially filed its Draft Red Herring Prospectus (DRHP) for a Main Board IPO.',
      desc: 'Company operates a vertically integrated, sustainability-focused structural products business manufacturing MS billets, wire rods, HR coils, ERW pipes and tubes, and engineered scaffolding and formwork systems. Our energy-efficient cascading production model reduces costs and enhances quality, supported by automation and digital quality monitoring. ',
      link: 'https://www.linkedin.com/posts/credalis-capital_ipo-mainboardipo-rennystripslimited-activity-7405536132534415360-AJFL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFHfNUUBjQFe8h87fXxTHlZAp0_QWM5CAk4',
      img: newsimg,
    },
    {
      id: 2,
      title:
        'Renny Strips files IPO papers with SEBI, seeks to raise up to Rs 300 crore via fresh issue',
      desc: 'Renny Strips IPO | The company proposed to raise Rs 300 crore by issuing fresh shares, while promoters Dev Raj Gupta, and Usha Gupta plan to offload 1.2 crore equity shares via offer-for-sale.',
      link: 'https://www.moneycontrol.com/news/business/ipo/renny-strips-files-ipo-papers-with-sebi-seeks-to-raise-up-to-rs-300-crore-via-fresh-issue-13726597.html',
      img: mc,
    },
    {
      id: 3,
      title:
        'Renny Strips files DRHP to launch its IPO with Sebi, check details',
      desc: 'Renny Strips files DRHP for IPO with Rs 300 crore fresh issue and 12 million shares OFS; Pantomath Capital Advisors is sole lead manager. Book building, BSE/NSE listing planned.',
      link: 'https://www.businesstoday.in/markets/ipo-corner/story/renny-strips-files-drhp-to-launch-its-ipo-with-sebi-check-details-506711-2025-12-15',
      img: bt,
    },
    {
      id: 4,
      title: 'Renny Strips Ltd IPO Details',
      desc: 'Funding the capital expenditure requirements of the Company. Prepayment or re-payment, in full or in part, of certain outstanding borrowings availed by its Company. General corporate purposes.',
      link: 'https://www.business-standard.com/markets/ipo/renny-strips-ltd-ipo-35303',
      img: bs,
    },
    {
      id: 5,
      title:
        'Renny Strips files IPO papers with Sebi; targets to raise Rs 300 cr via fresh issue',
      desc: 'NEW DELHI: (Dec 15) Renny Strips Ltd, a steel structural products manufacturing company, has filed preliminary papers with markets regulator Sebi to raise funds through an initial public offering (IPO), comprising fresh issue of shares worth Rs 300 crore.',
      link: 'https://www.ptinews.com/story/business/renny-strips-files-ipo-papers-with-sebi-targets-to-raise-rs-300-cr-via-fresh-issue/3191154',
      img: pti,
    },
    {
      id: 6,
      title:
        'Structural products maker Renny Strips files DRHP for IPO; seeks Rs 300 crore via fresh equity sale',
      desc: 'Structural products manufacturer Renny Strips has taken the first formal step toward the capital markets, filing its draft red herring prospectus with the capital markets Sebi India for an IPO. The Ludhiana-based company plans to raise up to Rs 300 crore through a fresh issue of equity shares, along with an offer for sale of up to 1.2 crore shares by existing shareholders.',
      link: 'https://economictimes.indiatimes.com/markets/ipos/fpos/structural-products-maker-renny-strips-files-drhp-for-ipo-seeks-rs-300-crore-via-fresh-equity-sale/articleshow/125978899.cms?from=mdr',
      img: et,
    },
  ];

  // Latest news shown by default
const [activeNews, setActiveNews] = useState(newsData[0]);

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
    <div className=" min-h-screen font-helvetica">
      {/* Banner */}
      <motion.section
        className="relative h-[100vh] w-full overflow-hidden "
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <img
          src={newsbanner}
          alt="News Banner"
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
          News
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

      {/* NEWS Panel */}
      <div className="flex flex-col lg:flex-row gap-8 mb-40 mt-16">
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
                className="w-72 h-72 object-fit rounded-2xl mb-6"
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
