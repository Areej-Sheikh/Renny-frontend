import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import HomepageBanner from '../assets/HomepageBanner.webm';

import MS from '../assets/MS-Billets.webp';
import Scaffolding from '../assets/Scaffolding-Formwork.webp';
import ERW from '../assets/ERW-Black-Galvanized-Pipes.webp';
import Coil from '../assets/Narrow-width-Coils.webp';
import rods from '../assets/Wire-Rods.webp';

import sustainability2 from '../assets/Sustainability2.webp';

import CountUp from 'react-countup';
import worldmap from '../assets/World-Map.webm';

import icons1 from '../assets/1a-about.svg';
import icons2 from '../assets/2a-about.svg';
import icons3 from '../assets/3a-about.svg';

import blog1 from '../assets/blog1.webp';
import blog2 from '../assets/blog2.webp';
import blog3 from '../assets/blog3.webp';
import blog4 from '../assets/blog4.webp';

import bs from '../assets/bs.webp';
import et from '../assets/et.webp';
import mc from '../assets/mc.webp';
import bt from '../assets/bt.webp';
import newsimg from '../assets/newsimg.webp';

import emission from '../assets/emmisionSection.webm';

import { AnimatePresence } from 'framer-motion';
import AboutUs from '../assets/AboutUs.png';

import SustainabilitySlider from '../components/SustainabilitySlider';
import RENNY from '../assets/RENNY-removebg-preview.webp';
import { image } from 'framer-motion/client';
import rennyimg from '../assets/RENNY-removebg-preview.webp';
const Home = () => {
  const navigate = useNavigate();
  const newsData = [
    {
      id: 1,
      title:
        'Renny Strips Limited, manufacturer of structural steel products has officially filed its Draft Red Herring Prospectus (DRHP) for a Main Board IPO.',
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
        'Structural products maker Renny Strips files DRHP for IPO; seeks Rs 300 crore via fresh equity sale',
      desc: 'Structural products manufacturer Renny Strips has taken the first formal step toward the capital markets, filing its draft red herring prospectus with the capital markets Sebi India for an IPO. The Ludhiana-based company plans to raise up to Rs 300 crore through a fresh issue of equity shares, along with an offer for sale of up to 1.2 crore shares by existing shareholders.',
      link: 'https://economictimes.indiatimes.com/markets/ipos/fpos/structural-products-maker-renny-strips-files-drhp-for-ipo-seeks-rs-300-crore-via-fresh-equity-sale/articleshow/125978899.cms?from=mdr',
      img: et,
    },
  ];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const products = [
    {
      title: 'MS Billets',
      image: MS,
      link: '/MS-billets/',
    },
    {
      title: 'Wire Rods',
      image: rods,
      link: '/wire-rods-2/',
    },
    {
      title: 'HR Coils',
      image: Coil,
      link: '/narrow-hrcoil/',
    },
    {
      title: 'ERW Pipes',
      image: ERW,
      link: '/erw-pipes-and-tubes/',
    },
    {
      title: 'Scaffolding Formwork',
      image: Scaffolding,
      link: '/scaffolding-formwork/',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const toggleCard = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleFade = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };
  const [activeNews, setActiveNews] = useState(newsData[0]);

  return (
    <div className="relative flex flex-col  font-helvetica bg-blue-50">
      {/* Banner */}
      <section className=" panel  w-full relative h-125 flex flex-col md:flex-row items-center mt-20 mb-25 ">
        {/* Left Text Column */}
        <motion.div
          className="flex flex-col px-5 justify-center h-full ml-10 mb-30 "
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h1 className="text-8xl font-semibold text-black mt-30 font-jost ">
            Building <br /> A<span className="text-green-600"> Future</span>{' '}
            <br /> Together
          </h1>
          <div>
            <img src={rennyimg} alt="" className="w-xs mt-5 ml-10" />
          </div>
        </motion.div>

        {/* Right Video Column */}
        <motion.div
          className="md:w-3/2 mr-1 relative overflow-hidden flex flex-col items-start"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          viewport={{ once: true }}
        >
          <video
            className="w-125 h-80 ml-70 mb-10  rounded-4xl object-cover mask-origin-fill transition-all duration-700 ease-out hover:scale-110 hover:w-180 hover:mt-20 hover:ml-10 "
            src={HomepageBanner}
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Emissions */}
          <div className=" max-w-full">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6 leading-tight">
              <span className="text-green-600 font-bold">
                40% Lower Emissions
              </span> {" "}
              Compared to Industry Average
            </h1>

            <p className="text-gray-600 text-base leading-relaxed">
              Our vertically integrated model reduces waste, minimizes energy
              loss, and ensures consistent quality. We believe in lower
              emissions and building a stronger foundation for the future.
            </p>
          </div>
        </motion.div>
      </section>

      {/* About Us */}
      <motion.section
        className="flex flex-col items-center font-helvetica justify-center h-full  overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        <div className="relative w-full h-full overflow-hidden">
          {/* Background Image */}
          <img
            src={AboutUs}
            alt="About Us"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Text Content */}
          <div className="absolute  inset-0 flex flex-col items-center justify-center text-center px-6">
            {/* Heading */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              About Us
            </motion.h1>

            {/* Paragraph 1 */}
            <motion.p
              className="text-white max-w-3xl mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              viewport={{ once: true }}
            >
              In 1996, Renny Strips Ltd embarked on its dynamic journey. Renny
              Strips Ltd. aimed to carve a niche in producing Innovative,
              Sustainable & Industry-fit Steel Products at Competitive Prices.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              className="text-white max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              viewport={{ once: true }}
            >
              Founded in 1996, Renny Strips Limited is a fully integrated
              structural products manufacturer headquartered in Ludhiana,
              Punjab. The Company operates 3 integrated manufacturing units,
              providing end-to-end finished products.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Our Products */}
      <motion.section
        className="flex flex-col items-center font-helvetica w-full justify-center py-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Heading */}
        <motion.h1
          className="text-[48px] font-bold mb-5 w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Products
          <div className="w-65 h-0.5 bg-blue mx-auto rounded-full mb-10" />
        </motion.h1>

        <div className="flex min-h-[400px] overflow-hidden w-full ">
          {products.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.link)}
              className="
          group relative flex-1 hover:flex-5
          transition-all duration-500 ease-in-out
          cursor-pointer overflow-hidden
        "
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />

              <div
                className="
            relative z-10 h-full w-full
            flex items-end justify-end
            group-hover:justify-center
            transition-all duration-500
            p-6
          "
              >
                <div
                  className="
              w-full text-white
              flex flex-col items-end
              group-hover:items-center
              text-right group-hover:text-center
              transition-all duration-500
            "
                >
                  <h1
                    className="text-lg font-semibold tracking-wide [writing-mode:vertical-rl] 
    [text-orientation:mixed] group-hover:[writing-mode:horizontal-tb] transition-all duration-500
  "
                  >
                    {item.title}
                  </h1>

                  <button
                    className="
                mt-4 px-4 py-2 border border-white text-sm
                opacity-0 translate-y-4
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-500 delay-150
              "
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Our Networks*/}

      <motion.section
        className="flex flex-col items-center font-helvetica bg-white justify-center px-6 py-16 panel  "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Heading */}
        <motion.h1
          className="text-[48px] font-bold ml-20 mb-10 w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Network
          <div className="w-60 h-0.5 bg-blue mx-auto rounded-full mb-10" />
        </motion.h1>

        {/* Video */}
        <motion.video
          src={worldmap}
          className="w-full  max-h-[75vh] object-cover"
          autoPlay
          loop
          muted
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {/* Stats */}
        <motion.div
          ref={ref}
          className="flex flex-wrap items-center justify-center gap-6 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {[
            { value: 1000, suffix: '+', label: 'SKUs', duration: 2 },
            {
              value: 199200,
              suffix: ' TPA',
              label: 'Annual Production',
              duration: 3,
              separator: ',',
            },
            { value: 1000, suffix: '+', label: 'Work Force', duration: 2 },
            { value: 22, suffix: ' MW', label: 'Solar Panel', duration: 2 },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="border-t-2 border-b-2 px-6 py-4 text-center"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <p className="text-5xl font-light text-blue">
                {inView ? (
                  <CountUp
                    end={item.value}
                    duration={item.duration}
                    separator={item.separator}
                  />
                ) : (
                  0
                )}
                {item.suffix}
              </p>
              <p className="text-xl text-blue-900 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="flex justify-center px-6 py-16 font-helvetica bg-[#f0f6ff]">
        <motion.section
          className="flex justify-center w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10  w-full">
            {/* CARD 1 */}
            <motion.div
              className={`rounded-2xl border overflow-hidden transition-all duration-500 cursor-pointer
          ${
            openIndex === 0
              ? 'bg-blue text-white shadow-xl'
              : 'bg-white text-gray-800 border-gray-200 shadow-md hover:bg-blue hover:text-white hover:shadow-lg'
          }
        `}
              onClick={() => toggleCard(0)}
            >
              <div className="px-8 pt-10 pb-6 flex flex-col items-center text-center relative">
                <img
                  src={icons1}
                  className={`h-18 w-18 mb-6 transition-all duration-500 ${
                    openIndex === 0 ? 'scale-110 brightness-0 invert' : ''
                  }`}
                />
                <h3 className="text-lg font-semibold mb-4">
                  Precision Engineering and Manufacturing
                </h3>

                {/* Arrow Icon */}
                <i
                  className={`ri-arrow-down-s-line text-2xl transition-transform absolute bottom-4`}
                  style={{
                    transform:
                      openIndex === 0 ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </div>

              <div
                className={`px-8 overflow-hidden transition-all duration-500 ${
                  openIndex === 0
                    ? 'max-h-48 pb-10 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm text-white">
                  Specializes in manufacturing high-precision, safety-critical
                  components as per specifications.
                </p>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              className={`rounded-2xl border overflow-hidden transition-all duration-500 cursor-pointer
          ${
            openIndex === 1
              ? 'bg-blue text-white shadow-xl'
              : 'bg-white text-gray-800 border-gray-200 shadow-md hover:bg-blue hover:text-white hover:shadow-lg'
          }
        `}
              onClick={() => toggleCard(1)}
            >
              <div className="px-8 pt-10 pb-6 flex flex-col items-center text-center relative">
                <img
                  src={icons2}
                  className={`h-18 w-18 mb-6 transition-all duration-500 ${
                    openIndex === 1 ? 'scale-110 brightness-0 invert' : ''
                  }`}
                />
                <h3 className="text-lg font-semibold mb-4 px-2">
                  Fabrication and Forging
                </h3>

                {/* Arrow Icon */}
                <i
                  className={`ri-arrow-down-s-line text-2xl transition-transform absolute bottom-1`}
                  style={{
                    transform:
                      openIndex === 1 ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </div>

              <div
                className={`px-8 overflow-hidden transition-all duration-500 ${
                  openIndex === 1
                    ? 'max-h-48 pb-10 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm text-white">
                  Advanced sheet metal processing with EN 1090 & ISO 3834
                  compliance.
                </p>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              className={`rounded-2xl border overflow-hidden transition-all duration-500 cursor-pointer
          ${
            openIndex === 2
              ? 'bg-blue text-white shadow-xl'
              : 'bg-white text-gray-800 border-gray-200 shadow-md hover:bg-blue hover:text-white hover:shadow-lg'
          }
        `}
              onClick={() => toggleCard(2)}
            >
              <div className="px-8 pt-10 pb-6 flex flex-col items-center text-center relative">
                <img
                  src={icons3}
                  className={`h-18 w-18 mb-6 transition-all duration-500 ${
                    openIndex === 2 ? 'scale-110 brightness-0 invert' : ''
                  }`}
                />
                <h3 className="text-lg font-semibold mb-10">
                  Customized Excellence
                </h3>

                {/* Arrow Icon */}
                <i
                  className={`ri-arrow-down-s-line text-2xl transition-transform absolute bottom-1`}
                  style={{
                    transform:
                      openIndex === 2 ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </div>

              <div
                className={`px-8 overflow-hidden transition-all duration-500 ${
                  openIndex === 2
                    ? 'max-h-48 pb-10 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm text-white">
                  Tailored solutions backed by an in-house raw material
                  ecosystem.
                </p>
              </div>
            </motion.div>

            {/* CARD 4 */}
            <motion.div
              className={`rounded-2xl border overflow-hidden transition-all duration-500 cursor-pointer
          ${
            openIndex === 3
              ? 'bg-blue text-white shadow-xl'
              : 'bg-white text-gray-800 border-gray-200 shadow-md hover:bg-blue hover:text-white hover:shadow-lg'
          }
        `}
              onClick={() => toggleCard(3)}
            >
              <div className="px-8 pt-10 pb-6 flex flex-col items-center text-center relative">
                <img
                  src={icons1}
                  className={`h-18 w-18 mb-6 transition-all duration-500 ${
                    openIndex === 3 ? 'scale-110 brightness-0 invert' : ''
                  }`}
                />
                <h3 className="text-lg font-semibold mb-4">
                  CNC Machining and Finishing
                </h3>

                {/* Arrow Icon */}
                <i
                  className={`ri-arrow-down-s-line text-2xl transition-transform absolute bottom-1`}
                  style={{
                    transform:
                      openIndex === 3 ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </div>

              <div
                className={`px-8 overflow-hidden transition-all duration-500 ${
                  openIndex === 3
                    ? 'max-h-48 pb-10 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm text-white">
                  Automated precision machining for consistent, high-quality
                  output.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </section>

      {/* News and investor Section */}
      <section className="font-helvetica bg-gray-100 py-20 px-6 panel  ">
        {/* Heading */}
        <motion.h1
          className="text-[48px] font-bold ml-20 mb-10 w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          News & Investor Relations
          <div className="w-140 h-0.5 bg-blue mx-auto rounded-full mb-10" />
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ================= NEWS LIST (LEFT) ================= */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/4 bg-white rounded-2xl shadow p-4 space-y-3"
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
                {activeNews.id === news.id && (
                  <motion.span
                    layoutId="active-indicator"
                    className="absolute left-0 top-0 h-full w-1 bg-black rounded-r"
                  />
                )}

                <img
                  src={news.img}
                  alt={news.title}
                  className="w-14 h-14 object-cover rounded"
                />

                <p className="text-sm font-medium line-clamp-2">{news.title}</p>
              </motion.button>
            ))}
          </motion.div>

          {/* ================= NEWS PREVIEW (CENTER) ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-2/4 bg-white rounded-2xl shadow p-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNews.id}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col items-center text-center"
              >
                <motion.img
                  variants={scaleFade}
                  src={activeNews.img}
                  alt={activeNews.title}
                  className="w-64 h-64 object-contain rounded-2xl mb-6"
                />

                <motion.h2 variants={fadeUp} className="text-xl font-bold mb-4">
                  {activeNews.title}
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="text-gray-700 mb-6 leading-relaxed"
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

          {/* ================= INVESTOR RELATIONS (RIGHT) ================= */}
          <motion.div
            className="lg:w-1/4 bg-white rounded-2xl shadow p-6 flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <h2 className="text-xl font-bold mb-6 text-center">
              Investor Relations
            </h2>

            <div className="flex flex-col gap-4 mb-6">
              {[
                { title: 'Financials', path: '/financials/' },
                { title: 'Industry Report', path: '/industry-report/' },
                {
                  title: 'Corporate Governance',
                  path: '/corporate-governance/',
                },
                { title: 'IPO Documents', path: '/ipo/' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 rounded-xl p-4 hover:shadow transition"
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <span className="text-sm font-medium">{item.title}</span>
                  <Link to={item.path}>
                    <button className="bg-blue text-white px-4 py-2 rounded-lg text-xs hover:bg-blue-800 transition">
                      View
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Stock Prices */}
            <div className="mt-auto flex justify-around border-t pt-4">
              <div className="text-center">
                <p className="text-xs text-gray-500">BSE</p>
                <p className="text-sm font-semibold">₹93.90</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">NSE</p>
                <p className="text-sm font-semibold">₹93.63</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="flex flex-col items-center font-helvetica justify-center px-6 py-16 bg-white panel h-screen ">
        {/* Heading */}
        <motion.h1
          className="text-[48px] ml-20 font-bold mb-10 w-full text-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Engineering a
          <span className="text-green-700"> Sustainable Tomorrow</span>
          <div className="w-200 h-0.5 bg-blue mx-auto rounded-full mb-10" />
        </motion.h1>

        {/* Content */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-10  w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Slider */}
          <motion.div
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <SustainabilitySlider />
          </motion.div>

          {/* Side Image */}
          <motion.div
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          >
            <img
              src={sustainability2}
              alt="Sustainability"
              className="w-full h-full object-cover shadow-lg rounded-xl"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Blog Section */}
      <motion.section
        className="bg-gray-100 px-6 py-16 font-helvetica  panel"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: 'easeOut',
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          className=" mx-auto flex flex-col lg:flex-row gap-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
          {/* ================= Latest Blog ================= */}
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold mb-6 w-full text-left">
              Latest Blog
            </h1>
            <Link
              to="/kwikstage-scaffolding/"
              className="
          group block bg-white rounded-xl overflow-hidden
          shadow-md hover:shadow-2xl
          transform hover:-translate-y-2
          transition-all duration-300
        "
            >
              <img
                src={blog1}
                alt="Kwikstage Scaffolding"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl font-semibold text-blue group-hover:text-blue-800 transition">
                  Kwikstage Scaffolding Expert Insights for Better Construction
                  Performance
                </h2>

                <span className="block text-sm text-gray-500 mt-2">
                  December 9, 2025
                </span>

                <p className="text-gray-600 mt-4 line-clamp-4">
                  Construction projects demand dependable systems that can adapt
                  to diverse site challenges while ensuring productivity and
                  worker safety. Kwikstage Scaffolding has emerged as one of the
                  most reliable modular choices in modern construction.
                </p>

                <span className="inline-block mt-4 font-medium text-blue group-hover:text-blue-800 transition">
                  Read More →
                </span>
              </div>
            </Link>
          </div>

          {/* ================= Other Blogs ================= */}
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold mb-6 w-full text-left">
              Other Blogs
            </h1>

            <div className="space-y-6">
              {/* Blog Card */}
              <Link
                to="/scaffolding-formworks-innovation/"
                className="
            group flex gap-4 bg-white rounded-xl p-4
            shadow-sm hover:shadow-lg
            transform hover:-translate-y-1
            transition-all duration-300
          "
              >
                <img
                  src={blog2}
                  alt=""
                  className="w-32 h-24 object-fit rounded-md"
                />

                <div>
                  <h2 className="font-semibold text-gray-800 group-hover:text-blue-800 transition">
                    Scaffolding and Formworks Frames Innovations Driving Faster
                    and Safer Building
                  </h2>

                  <span className="block text-sm text-gray-500 mt-1">
                    November 29, 2025
                  </span>

                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    Construction projects are getting more demanding as
                    structures rise higher...
                  </p>

                  <span className="text-sm font-medium text-blue group-hover:text-blue-800 transition">
                    Read More →
                  </span>
                </div>
              </Link>

              {/* Blog Card */}
              <Link
                to="/scaffolding-steel-props-jacks/"
                className="
            group flex gap-4 bg-white rounded-xl p-4
            shadow-sm hover:shadow-lg
            transform hover:-translate-y-1
            transition-all duration-300
          "
              >
                <img
                  src={blog3}
                  alt=""
                  className="w-32 h-24 object-fit rounded-md"
                />

                <div>
                  <h2 className="font-semibold text-gray-800 group-hover:text-blue-800 transition">
                    Ultimate Guide to Scaffolding Steel Props and Jacks for
                    Strength and Safety
                  </h2>

                  <span className="block text-sm text-gray-500 mt-1">
                    November 18, 2025
                  </span>

                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    Reliable propping systems can often make the difference
                    between a smooth operation...
                  </p>

                  <span className="text-sm font-medium text-blue group-hover:text-blue-800 transition">
                    Read More →
                  </span>
                </div>
              </Link>

              {/* Blog Card */}
              <Link
                to="/wire-rod-manufacturers-india/"
                className="
            group flex gap-4 bg-white rounded-xl p-4
            shadow-sm hover:shadow-lg
            transform hover:-translate-y-1
            transition-all duration-300
          "
              >
                <img
                  src={blog4}
                  alt=""
                  className="w-32 h-24 object-fit rounded-md"
                />

                <div>
                  <h2 className="font-semibold text-gray-800 group-hover:text-blue-800 transition">
                    Explore the Leading Wire Rod Manufacturers in India for
                    Superior Industrial Applications
                  </h2>

                  <span className="block text-sm text-gray-500 mt-1">
                    November 14, 2025
                  </span>

                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    Industry professionals look beyond availability — they seek
                    precision and performance...
                  </p>

                  <span className="text-sm font-medium text-blue group-hover:text-blue-800 transition">
                    Read More →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;
