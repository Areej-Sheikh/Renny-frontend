import { useState } from 'react';
import { motion } from 'framer-motion';

import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import HomepageBanner from '../assets/HomepageBanner.mp4';

import AboutUs from '../assets/AboutUs.png';

import MS from '../assets/MS-Billets.jpeg';
import Scaffolding from '../assets/Scaffolding-Formwork.png';
import ERW from '../assets/ERW-Black-Galvanized-Pipes.jpeg';
import Coil from '../assets/Narrow-width-Coils.png';
import rods from '../assets/Wire-Rods.png';

import sustainability2 from '../assets/Sustainability2.jpg';

import CountUp from 'react-countup';
import worldmap from '../assets/World-Map.webm';

import icons1 from '../assets/1a-about.svg';
import icons2 from '../assets/2a-about.svg';
import icons3 from '../assets/3a-about.svg';

import blog1 from '../assets/blog1.jpeg';
import blog2 from '../assets/blog2.jpeg';
import blog3 from '../assets/blog3.jpeg';
import blog4 from '../assets/blog4.jpeg';

import bs from '../assets/bs.png';
import et from '../assets/et.jfif';
import mc from '../assets/mc.jfif';
import bt from '../assets/bt.jfif';

import SustainabilitySlider from '../components/SustainabilitySlider';
const Home = () => {
  const navigate = useNavigate();

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

  const toggleCard = index => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const newsData = [
    {
      id: 1,
      title:
        'Structural products maker Renny Strips files DRHP for IPO; seeks Rs 300 crore via fresh equity sale',
      desc: 'Structural products manufacturer Renny Strips has taken the first formal step toward the capital markets, filing its draft red herring prospectus with the capital markets Sebi India for an IPO. The Ludhiana-based company plans to raise up to Rs 300 crore through a fresh issue of equity shares, along with an offer for sale of up to 1.2 crore shares by existing shareholders.',
      link: 'https://economictimes.indiatimes.com/markets/ipos/fpos/structural-products-maker-renny-strips-files-drhp-for-ipo-seeks-rs-300-crore-via-fresh-equity-sale/articleshow/125978899.cms?from=mdr',
      img: et,
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
  ];

  return (
    <div className="relative flex flex-col  font-helvetica">
      {/* Banner */}
      <section className="w-full relative h-125 flex flex-col md:flex-row items-center mt-15 ">
        {/* Left Text Column */}
        <motion.div
          className="md:w-1/2 flex flex-col justify-center px-6 md:px-12 h-full"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h1 className="text-8xl font-semibold text-black mb-4 font-jost">
            Building <br /> A Future <br /> Together
          </h1>
        </motion.div>

        {/* Right Video Column */}
        <motion.div
          className="md:w-3/2 h-full relative overflow-hidden"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          viewport={{ once: true }}
        >
          <video
            className="w-full h-full rounded-4xl object-cover"
            src={HomepageBanner}
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>
      </section>

      {/* About Us */}
      <motion.section
        className="flex flex-col items-center font-helvetica justify-center mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        <div className="relative w-full h-125 overflow-hidden">
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
        className="flex flex-col items-center font-helvetica justify-center px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className="text-[37px] font-bold ml-20 mb-10 w-full text-left">
          Our Products
        </h1>

        <div className="flex min-h-[400px] overflow-hidden w-full max-w-7xl">
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
        className="flex flex-col items-center font-helvetica justify-center px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Heading */}
        <motion.h1
          className="text-[37px] font-bold ml-20 mb-10 w-full text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Network
        </motion.h1>

        {/* Video */}
        <motion.video
          src={worldmap}
          className="w-full max-w-7xl rounded-xl"
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
      <section className="flex justify-center px-6 py-16 font-helvetica">
        <motion.section
          className="flex justify-center w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl w-full"
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
            {/* CARD 1 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className={`
          rounded-2xl border overflow-hidden transition-all duration-500
          ${
            openIndex === 0
              ? 'bg-[#0C183E] border-[#0C183E] shadow-xl'
              : 'bg-white border-gray-200 shadow-md hover:shadow-lg'
          }
        `}
            >
              <div className="px-8 pt-10 pb-6 flex flex-col items-center text-center">
                <img
                  src={icons1}
                  className={`h-18 w-18 mb-6 transition-all duration-500 ${
                    openIndex === 0 ? 'scale-110 brightness-0 invert' : ''
                  }`}
                />
                <h3
                  className={`text-lg font-semibold mb-6 ${
                    openIndex === 0 ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  Precision Engineering and Manufacturing
                </h3>
                <button onClick={() => toggleCard(0)}>
                  <i
                    className={`ri-arrow-${
                      openIndex === 0 ? 'up' : 'down'
                    }-s-line text-2xl transition-transform ${
                      openIndex === 0 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              <div
                className={`px-8 overflow-hidden transition-all duration-500 ${
                  openIndex === 0
                    ? 'max-h-48 pb-10 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm text-gray-200">
                  Specializes in manufacturing high precision, safety-critical
                  components as per specifications.
                </p>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className={`
          rounded-2xl border overflow-hidden transition-all duration-500
          ${
            openIndex === 1
              ? 'bg-[#0C183E] border-[#0C183E] shadow-xl'
              : 'bg-white border-gray-200 shadow-md hover:shadow-lg'
          }
        `}
            >
              <div className="px-8 pt-10 pb-6 flex flex-col items-center text-center">
                <img
                  src={icons2}
                  className={`h-18 w-18 mb-6 transition-all duration-500 ${
                    openIndex === 1 ? 'scale-110 brightness-0 invert' : ''
                  }`}
                />
                <h3
                  className={`text-lg font-semibold mb-7 ${
                    openIndex === 1 ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  Fabrication and Forging
                </h3>
                <button onClick={() => toggleCard(1)}>
                  <i
                    className={`ri-arrow-${
                      openIndex === 1 ? 'up' : 'down'
                    }-s-line text-2xl transition-transform ${
                      openIndex === 1 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              <div
                className={`px-8 overflow-hidden transition-all duration-500 ${
                  openIndex === 1
                    ? 'max-h-48 pb-10 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm text-gray-200">
                  Advanced sheet metal processing with EN 1090 & ISO 3834
                  compliance.
                </p>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className={`
          rounded-2xl border overflow-hidden transition-all duration-500
          ${
            openIndex === 2
              ? 'bg-[#0C183E] border-[#0C183E] shadow-xl'
              : 'bg-white border-gray-200 shadow-md hover:shadow-lg'
          }
        `}
            >
              <div className="px-8 pt-10 pb-6 flex flex-col items-center text-center">
                <img
                  src={icons3}
                  className={`h-18 w-18 mb-6 transition-all duration-500 ${
                    openIndex === 2 ? 'scale-110 brightness-0 invert' : ''
                  }`}
                />
                <h3
                  className={`text-lg font-semibold mb-14 ${
                    openIndex === 2 ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  Customized Excellence
                </h3>
                <button onClick={() => toggleCard(2)}>
                  <i
                    className={`ri-arrow-${
                      openIndex === 2 ? 'up' : 'down'
                    }-s-line text-2xl transition-transform ${
                      openIndex === 2 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              <div
                className={`px-8 overflow-hidden transition-all duration-500 ${
                  openIndex === 2
                    ? 'max-h-48 pb-10 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm text-gray-200">
                  Tailored solutions backed by an in-house raw material
                  ecosystem.
                </p>
              </div>
            </motion.div>

            {/* CARD 4 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className={`
          rounded-2xl border overflow-hidden transition-all duration-500
          ${
            openIndex === 3
              ? 'bg-[#0C183E] border-[#0C183E] shadow-xl'
              : 'bg-white border-gray-200 shadow-md hover:shadow-lg'
          }
        `}
            >
              <div className="px-8 pt-10 pb-6 flex flex-col items-center text-center">
                <img
                  src={icons1}
                  className={`h-18 w-18 mb-6 transition-all duration-500 ${
                    openIndex === 3 ? 'scale-110 brightness-0 invert' : ''
                  }`}
                />
                <h3
                  className={`text-lg font-semibold mb-6 ${
                    openIndex === 3 ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  CNC Machining and Finishing
                </h3>
                <button onClick={() => toggleCard(3)}>
                  <i
                    className={`ri-arrow-${
                      openIndex === 3 ? 'up' : 'down'
                    }-s-line text-2xl transition-transform ${
                      openIndex === 3 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              <div
                className={`px-8 overflow-hidden transition-all duration-500 ${
                  openIndex === 3
                    ? 'max-h-48 pb-10 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm text-gray-200">
                  Automated precision machining for consistent, high-quality
                  output.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </section>
      {/* News Section */}
      <section className="font-helvetica bg-gray-100 py-20 px-6">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start justify-between"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* ================= News Section ================= */}
          <div className="w-full lg:w-3/4 flex flex-col items-center">
            <motion.h1
              className="text-[37px] font-bold mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              News
            </motion.h1>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              {newsData.map(news => (
                <motion.div
                  key={news.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-lg transition"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <img
                    src={news.img}
                    alt={news.title}
                    className="w-full h-40 object-fill"
                    loading="lazy"
                  />

                  <div className="p-6 flex flex-col">
                    <h3 className="text-base font-semibold mb-3 line-clamp-2">
                      {news.title}
                    </h3>

                    <p className="text-sm text-gray-600 line-clamp-3">
                      {news.desc}
                    </p>

                    <a
                      href={news.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block font-medium text-blue group-hover:text-blue-800 transition"
                    >
                      Read More →
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ================= Investor Relations ================= */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <motion.h1
              className="text-[37px] font-bold mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Investor Relations
            </motion.h1>

            {/* Investor Cards */}
            <motion.div
              className="flex flex-col gap-6 w-full max-w-xl mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
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
                  className="bg-white border-gray-100 rounded-xl p-6 flex items-center justify-between shadow-sm hover:shadow-lg transition"
                  variants={{
                    hidden: { opacity: 0, x: 40 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>

                  <Link to={item.path}>
                    <button className="bg-blue text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-800 transition">
                      View
                    </button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Stock Prices */}
            <motion.div
              className="bg-white w-full max-w-xl rounded-xl p-6 flex justify-around shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">BSE</p>
                <p className="text-lg font-semibold">₹93.90</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">NSE</p>
                <p className="text-lg font-semibold">₹93.63</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Sustainability Section */}
      <section className="flex flex-col items-center font-helvetica justify-center px-6 py-16 bg-white">
        {/* Heading */}
        <motion.h1
          className="text-[37px] ml-20 font-bold mb-10 w-full text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Engineering a{' '}
          <span className="text-green-700">Sustainable Tomorrow</span>
        </motion.h1>

        {/* Content */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-7xl w-full"
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
        className="bg-gray-100 px-6 py-16 font-helvetica"
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
          className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10"
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
