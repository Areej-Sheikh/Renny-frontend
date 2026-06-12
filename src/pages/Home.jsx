import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Added for integration

import HomepageBanner from "../assets/HomepageBanner.webm";
import SEO from "../components/SEO";
import SchemaMarkup from "../components/SchemaMarkup";
import homeSchema from "../schema/homeSchema";

import MS from "../assets/product-1.webp";
import Scaffolding from "../assets/product-2.webp";
import ERW from "../assets/product-3.webp";
import Coil from "../assets/hr-coil.webp";
import rods from "../assets/product-5.webp";

import sustainability2 from "../assets/CBAM.webm";

import CountUp from "react-countup";

import icons1 from "../assets/1a-about.svg";
import icons2 from "../assets/2a-about.svg";
import icons3 from "../assets/3a-about.svg";

import blog1 from "../assets/blog1.webp";
import blog2 from "../assets/blog2.webp";
import blog3 from "../assets/blog3.webp";
import blog4 from "../assets/blog4.webp";

import { AnimatePresence } from "framer-motion";
import AboutUs from "../assets/about-3.webp";
import AboutUsMobile from "../assets/AboutUsMobile.webp";

import SustainabilitySlider from "../components/SustainabilitySlider";
import MapPage from "./MapPage";
import { buildApiUrl } from "../lib/api";
import ProductCarousel from "../components/ProductCarousel";
const Home = () => {
  const navigate = useNavigate();

  // --- BACKEND INTEGRATION STATES ---
  const [newsData, setNewsData] = useState([]);
  const [activeNews, setActiveNews] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [contentError, setContentError] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const [newsRes, blogsRes] = await Promise.all([
          axios.get(buildApiUrl("/api/news")),
          axios.get(buildApiUrl("/api/blogs")),
        ]);

        const newsArray =
          newsRes.data.data || newsRes.data.news || newsRes.data;
        if (Array.isArray(newsArray) && newsArray.length > 0) {
          setNewsData(newsArray);
          setActiveNews(newsArray[0]);
        } else {
          setNewsData([]);
          setActiveNews(null);
        }

        const blogArray =
          blogsRes.data.data || blogsRes.data.blogs || blogsRes.data;
        if (Array.isArray(blogArray)) {
          const sortedBlogs = blogArray.sort((a, b) => {
            const dateA = new Date(a.date || a.publishedAt || a.createdAt);
            const dateB = new Date(b.date || b.publishedAt || b.createdAt);
            return dateB - dateA;
          });
          setBlogs(sortedBlogs);
        }
      } catch {
        setContentError("Some homepage content is temporarily unavailable.");
      }
    };
    fetchContent();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const products = [
    { title: "MS Billets", image: MS, link: "/MS-billets" },
    { title: "Wire Rods", image: rods, link: "/wire-rods" },
    { title: "HR Coils", image: Coil, link: "/narrow-hrcoil" },
    { title: "ERW Pipes", image: ERW, link: "/erw-pipes-and-tubes" },
    {
      title: "Scaffolding & Formwork Systems",
      image: Scaffolding,
      link: "/scaffolding-formwork",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
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
  const [viewKey, setViewKey] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const sustainabilityVideoRef = useRef(null);

  const scrollToNext = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <SchemaMarkup schema={homeSchema} />
      <SEO
        title="CBAM-Compliant Structural Steel Company in India | Renny Strips"
        description="Renny Strips is a CBAM-compliant structural steel company manufacturing high-quality steel products for infrastructure, engineering, and industrial applications."
        keywords="structural steel company, structural steel manufacturer, green steel, CBAM, structural steel fabricators"
        url="https://rennystrips.com"
        image={HomepageBanner}
      />
      <div className="relative flex flex-col font-helvetica ">
        {/* 1. Banner Section */}
        <section className="w-full min-h-screen relative flex items-center py-12 md:py-0 overflow-hidden">
          <div className="w-full flex flex-col nest-hub:flex-row items-center justify-center px-4 md:px-0 gap-6 md:gap-0">
            {/* Left Content */}
            <motion.div
              className="flex flex-col justify-center h-auto ml-0 md:ml-10 mb-2  text-center md:text-left"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h1
                className="
    font-semibold
    text-blue
    font-jost
    leading-tight

    text-[28px]

    iphone-SE:text-[36px]
    iphone-SE:mt-8
    iphone-XR:text-[56px]
    iphone-12pro:text-[50px]
    iphone-14promax:text-[60px]

    samsungGalaxy-S8:text-[45px]
    samsungGalaxy-S20:text-[60px]

    ipad-mini:text-[80px]
    ipad-pro:text-[80px]
    nest-hub:mb-30
    nest-hub:ml-5

  "
              >
                Building <br />
                <span className="font-semibold text-gray-500 bg-clip-text">
                  A Future
                </span>
                <br />
                <span className="text-blue">Together</span>
              </h1>
            </motion.div>

            {/* Right Content */}
            <motion.div
              className="w-full mr-0 md:mr-1 max-w-full relative flex flex-col items-start"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: true }}
            >
              {/* Video Container - Preserved your hover logic and desktop widths */}
              <div className="w-full flex items-center justify-center mt-4 md:mt-8 pr-0 md:pr-[5%] pl-0 md:pl-[2%]">
                <video
                  className="w-[90%] md:w-[600px] lg:w-[calc(100vw-850px)] xl:w-[500px] h-48 sm:h-64 md:h-80 
                     ml-0 md:ml-20 mb-4 rounded-2xl md:rounded-4xl object-cover 
                     transition-all duration-700 ease-out 
                     hover:scale-110 lg:hover:w-[calc(100vw-460px)] 
                     hover:mt-0 md:hover:mt-16 hover:ml-0 md:hover:ml-10"
                  src={HomepageBanner}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              <div className="flex flex-col w-full items-center md:items-start   nest-hub:items-center nest-hub:justify-center nest-hub:text-center">
                <p
                  className="
    text-gray-600
    text-[20px]
    iphone-12pro:text-[22px]
    iphone-14promax:text-[26px]
    ipad-mini:text-[28px]
    iphone-SE:text-[15px]
    ipad-mini:text-center
    ipad-mini:px-10
    nest-hub:text-[22px]
    nest-hub-max:text-2xl
    mt-4 md:mt-8
    mb-10 md:mb-12
    text-center md:text-left
  "
                >
                  Proudly recognized with the prestigious 5-Star Green Steel
                  Manufacturing Rating, that reflects excellence in sustainable
                  manufacturing.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div
            onClick={scrollToNext}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-800 text-3xl md:text-4xl animate-bounce cursor-pointer"
          >
            <i className="ri-arrow-down-line"></i>
          </div>
        </section>

        {/* 2. About Us Section */}
        <motion.section
          className="flex flex-col h-full items-center justify-center font-helvetica min-h-[100vh] md:h-full overflow-hidden"
          id="next-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: {} }}
        >
          <div className="relative w-full min-h-[100vh] md:h-full overflow-hidden">
            <picture className="absolute inset-0">
              {/* Desktop Image */}
              <source
                media="(min-width: 768px)"
                srcSet={AboutUs}
                type="image/webp"
              />

              {/* Mobile Image (default) */}
              <img
                src={AboutUsMobile}
                alt="About Us"
                width="1534"
                height="1080"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </picture>

            <div className="absolute inset-0  bg-gradient-to-t from-black/80 via-black/60 to-black/80 "></div>
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-6 py-12 md:py-0">
              <div className="bg-transparent  rounded-xl px-6 py-8 md:px-10 md:py-10 max-w-3xl w-full text-center">
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  About Us
                </motion.h2>

                <motion.p
                  className="text-sm sm:text-base md:text-base text-white mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                >
                  Founded in 1996, Renny Strips Limited delivers innovative,
                  sustainable and industry-ready structural products at
                  competitive prices. Headquartered in Ludhiana, Punjab, the
                  Company serves the infrastructure, construction and industrial
                  sectors across India with fully integrated manufacturing
                  capabilities and three induction furnaces with a melting
                  capacity of <span className="font-bold">199,200 TPA</span>.
                </motion.p>

                <motion.p
                  className="text-sm sm:text-base md:text-base text-white mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                >
                  Renny Strips operates three integrated manufacturing units
                  offering end-to-end production, ensuring consistent quality,
                  operational efficiency and reliable delivery to meet evolving
                  market demands.
                </motion.p>

                <motion.p
                  className="text-sm sm:text-base md:text-base text-white leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
                >
                  Committed to sustainable manufacturing and environmental
                  responsibility, the Company adopts eco-friendly practices,
                  optimizes resource use and aligns with national sustainability
                  goals to reduce its environmental impact.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 3. Our Products Section */}
        <section className="w-full font-helvetica">
          {/* Heading */}
          <motion.h2
            className="text-3xl text-blue py-8 sm:text-4xl md:text-[48px] font-bold  w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Products
            <div className="w-36 sm:w-48 md:w-60 h-0.5 bg-blue mx-auto rounded-full" />
          </motion.h2>

          {/* Horizontal Scroll Container */}
          <ProductCarousel />
        </section>

        {/* 4. Our Network Section */}
        <motion.section
          className="flex flex-col items-center font-helvetica bg-white justify-center px-4 sm:px-6 py-12 md:py-16 panel"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl text-blue sm:text-4xl md:text-[48px] font-bold ml-0 md:ml-20 w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Network
            <div className="w-36 sm:w-48 md:w-60 h-0.5 bg-blue mx-auto rounded-full" />
          </motion.h2>

          <MapPage />

          <motion.div
            ref={ref}
            className="flex flex-wrap items-center justify-center gap-6 mt-8 md:mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={staggerContainer}
          >
            {[
              { value: 1000, suffix: "+", label: "SKUs", duration: 2 },
              {
                value: 199200,
                suffix: " TPA",
                label: "Annual Production",
                duration: 3,
                separator: ",",
              },
              { value: 1000, suffix: "+", label: "Work Force", duration: 2 },
              {
                value: 22,
                suffix: " MW",
                label: "Captive Solar Power",
                duration: 2,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="border-t-2 border-b-2 px-4 sm:px-6 py-4 text-center w-full sm:w-auto"
                variants={listItem}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-light text-blue">
                  {inView ? (
                    <CountUp
                      key={viewKey}
                      end={item.value}
                      duration={item.duration}
                      separator={item.separator}
                    />
                  ) : (
                    0
                  )}
                  {item.suffix}
                </p>

                <p className="text-base sm:text-lg md:text-xl text-blue-900 mt-2">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* 5. Features Section */}
        <section className="flex justify-center px-6 py-16 font-helvetica bg-[#f0f6ff]">
          <motion.section
            className="flex justify-center w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10  w-full">
              {[
                {
                  id: 0,
                  icon: icons1,
                  alt: "Innovation",
                  title: "Precision Engineering and Manufacturing",
                  desc: "Specializes in manufacturing high-precision, safety-critical components as per specifications.",
                },
                {
                  id: 1,
                  icon: icons2,
                  alt: "Sustainability",
                  title: "Fabrication and Forging",
                  desc: "Advanced sheet metal processing with EN 1090 & ISO 3834 compliance.",
                },
                {
                  id: 2,
                  icon: icons3,
                  alt: "Quality",
                  title: "Customized Excellence",
                  desc: "Tailored solutions backed by an in-house raw material ecosystem.",
                },
                {
                  id: 3,
                  icon: icons1,
                  alt: "Innovation",
                  title: "CNC Machining and Finishing",
                  desc: "Automated precision machining for consistent, high-quality output.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  className={`rounded-2xl border overflow-hidden transition-all duration-500 cursor-pointer ${openIndex === i ? "bg-gray-600 text-white shadow-xl" : "bg-white text-gray-800 border-gray-200 shadow-md hover:bg-gray-600 hover:text-white"}`}
                  onClick={() => toggleCard(i)}
                >
                  <div className="px-8 pt-10 pb-6 flex flex-col items-center text-center relative">
                    <img
                      src={card.icon}
                      alt={card.alt}
                      width="72"
                      height="72"
                      className={`h-18 w-18 mb-6 transition-all duration-500 ${openIndex === i ? "scale-110 brightness-0 invert" : ""}`}
                    />
                    <h3 className="text-lg font-semibold mb-4">{card.title}</h3>
                    <i
                      className={`ri-arrow-down-s-line text-2xl transition-transform absolute bottom-4`}
                      style={{
                        transform:
                          openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </div>
                  <div
                    className={`px-8 overflow-hidden transition-all duration-500 ${openIndex === i ? "max-h-48 pb-10 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="text-sm text-white">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </section>

        {/* 6. News and Investor Section - BACKEND INTEGRATED */}
        <section className="font-helvetica bg-gray-100 py-14 md:py-20 px-4 sm:px-6 panel">
          {contentError && (
            <div className="mx-auto mb-6 max-w-6xl rounded-xl bg-white px-4 py-3 text-sm text-[#292c44] shadow-sm">
              {contentError}
            </div>
          )}
          {/* Heading */}
          <motion.h2
            className="text-3xl text-blue sm:text-4xl md:text-[48px] font-bold ml-0 md:ml-20 mb-8 md:mb-10 w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            News & Investor Relations
            <div className="w-40 sm:w-60 md:w-140 h-0.5 bg-blue mx-auto rounded-full mb-6 md:mb-10" />
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* ================= NEWS LIST (LEFT) ================= */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full lg:w-1/4 bg-white rounded-2xl shadow p-4 space-y-3"
            >
              {newsData.length > 0 ? (
                newsData.map((news) => (
                  <motion.button
                    key={news._id}
                    variants={listItem}
                    onClick={() => setActiveNews(news)}
                    whileHover={{ scale: 1.02 }}
                    className={`group relative flex items-center gap-3 sm:gap-4 w-full p-3 rounded-2xl text-left transition ${
                      activeNews?._id === news._id
                        ? "bg-gray-100"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {activeNews?._id === news._id && (
                      <motion.span
                        layoutId="active-indicator-home"
                        className="absolute left-0 top-0 h-full w-1 bg-black rounded-r"
                      />
                    )}

                    <img
                      src={news.imageUrl}
                      alt={news.title}
                      className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded flex-shrink-0"
                    />

                    <p className="text-sm font-medium line-clamp-2">
                      {news.title}
                    </p>
                  </motion.button>
                ))
              ) : (
                <div className="text-center py-10 text-gray-400 text-sm italic">
                  Fetching latest updates...
                </div>
              )}
            </motion.div>

            {/* ================= NEWS PREVIEW (CENTER) ================= */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full lg:w-2/4 bg-white rounded-2xl shadow p-4 sm:p-6 min-h-auto lg:min-h-[500px] flex items-center justify-center"
            >
              <AnimatePresence mode="wait">
                {activeNews ? (
                  <motion.div
                    key={activeNews._id}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="flex flex-col items-center text-center w-full"
                  >
                    <motion.img
                      variants={scaleFade}
                      src={activeNews.imageUrl}
                      alt={activeNews.title}
                      className="w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-contain rounded-2xl mb-4 sm:mb-6 shadow-sm"
                    />

                    <motion.h2
                      variants={fadeUp}
                      className="text-lg sm:text-xl font-bold mb-3 sm:mb-4"
                    >
                      {activeNews.title}
                    </motion.h2>

                    <motion.p
                      variants={fadeUp}
                      className="text-sm sm:text-base text-gray-700 mb-5 sm:mb-6 leading-relaxed text-justify lg:text-center"
                    >
                      {activeNews.description}
                    </motion.p>

                    <motion.div variants={fadeUp}>
                      <a
                        href={activeNews.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 sm:px-8 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition font-bold text-sm sm:text-base"
                      >
                        Read Full Article →
                      </a>
                    </motion.div>
                  </motion.div>
                ) : (
                  <div className="animate-pulse text-gray-300 font-bold uppercase tracking-widest text-sm">
                    Loading Preview...
                  </div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* ================= INVESTOR RELATIONS (RIGHT) ================= */}
            <motion.div
              className="w-full lg:w-1/4 bg-white rounded-2xl shadow p-4 sm:p-6 flex flex-col items-center justify-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <h2 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6 text-center">
                Investor Relations
              </h2>

              <div className="flex flex-col gap-4 mb-6">
                {[
                  { title: "Financials", path: "/financials" },
                  { title: "Industry Report", path: "/industry-report" },
                  { title: "IPO Documents", path: "/ipo" },
                  { title: "IPO Audio Visual", path: "/ipo-audio-visual" },
                  { title: "Our Policies", path: "/our-policies" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between bg-gray-50 rounded-xl p-4 hover:shadow transition"
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <span className="text-sm mr-10 font-medium">
                      {item.title}
                    </span>
                    <Link to={item.path}>
                      <button className="bg-blue text-white px-4 py-2 rounded-lg text-xs hover:bg-blue-800 transition font-bold">
                        View
                      </button>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* <div className="mt-auto flex justify-around border-t pt-4">
                <div className="text-center">
                  <p className="text-xs text-gray-500 font-bold tracking-tighter uppercase">
                    BSE
                  </p>
                  <p className="text-sm font-semibold text-[#292C44]">₹93.90</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 font-bold tracking-tighter uppercase">
                    NSE
                  </p>
                  <p className="text-sm font-semibold text-[#292C44]">₹93.63</p>
                </div>
              </div> */}
            </motion.div>
          </div>
        </section>

        {/* 7. Sustainability Section */}
        <section className="flex flex-col items-center font-helvetica justify-center px-4 sm:px-6 py-12 md:py-16 bg-white panel min-h-screen lg:h-screen">
          <motion.h2
            className="text-3xl font-helvetica text-blue sm:text-4xl md:text-[48px] ml-0 md:ml-20 font-bold mb-8 md:mb-10 w-full text-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Engineering a{" "}
            <span className="font-semibold text-gray-500 bg-clip-text">
              Sustainable Tomorrow
            </span>
            <div className="w-40 sm:w-64 md:w-200 h-0.5 bg-blue mx-auto rounded-full mb-6 md:mb-10" />
          </motion.h2>

          <motion.div
            className="flex flex-col lg:flex-row items-stretch justify-center gap-6 sm:gap-8 md:gap-10 w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }} // Reduced amount for better mobile triggering
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Slider Container */}
            <motion.div
              className="w-full lg:w-3/5" // Removed fixed h-80 to allow content to dictate height
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <SustainabilitySlider />
            </motion.div>

            {/* Video Container */}
            <motion.div
              className="w-full lg:w-2/5 flex"
              initial={{ opacity: 0, x: 20, scale: 0.98 }} // Reduced X and scale for smoother mobile entry
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              onAnimationComplete={() => {
                if (sustainabilityVideoRef.current) {
                  sustainabilityVideoRef.current.play().catch((err) => {
                    console.warn("Autoplay failed:", err);
                  });
                }
              }}
            >
              <video
                ref={sustainabilityVideoRef}
                src={sustainability2}
                /* Changed h-135 to aspect-video for mobile 
         lg:h-auto + object-cover ensures it fills the column height on desktop
      */
                className="w-full h-auto aspect-video lg:aspect-auto lg:h-full object-fill shadow-lg rounded-3xl lg:rounded-4xl"
                muted={true}
                loop={true}
                autoPlay={true}
                playsInline={true}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* 8. Blog Section - BACKEND INTEGRATED */}
        <motion.section
          className="bg-gray-100 px-6 py-10 font-helvetica panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          <motion.h2
            className="text-[48px] text-blue font-bold w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Blogs
            <div className="w-25 h-0.5 bg-blue mx-auto rounded-full mb-10" />
          </motion.h2>

          <motion.div
            className="mx-auto flex flex-col lg:flex-row gap-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            {/* Latest Blog */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl text-blue font-bold mb-6 w-full text-left">
                Latest Blog
              </h2>
              {blogs.length > 0 ? (
                <Link
                  to={`/blog/${blogs[0].slug}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                >
                  {/* FIX: Use mainImage to match your Mongoose Schema */}
                  <img
                    src={blogs[0].mainImage || blog1}
                    alt={blogs[0].title}
                    className="w-full h-64 md:h-80 object-fill   object-center"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-blue group-hover:text-blue-900 transition">
                      {blogs[0].title}
                    </h2>
                    <span className="block text-sm text-gray-500 mt-2">
                      {formatDate(
                        blogs[0].date ||
                          blogs[0].publishedAt ||
                          blogs[0].createdAt,
                      )}
                    </span>
                    <p className="text-gray-600 mt-4 line-clamp-4">
                      {blogs[0].excerpt}
                    </p>
                    <span className="inline-block mt-4 font-medium text-blue group-hover:text-blue-900 transition">
                      Read More →
                    </span>
                  </div>
                </Link>
              ) : (
                <div className="text-gray-400 italic">No blogs published.</div>
              )}
            </div>

            {/* Other Blogs */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl text-blue font-bold mb-6 w-full text-left">
                Other Blogs
              </h2>
              <div className="space-y-6">
                {blogs.length > 1
                  ? blogs.slice(1, 4).map((blog, index) => (
                      <Link
                        key={blog._id}
                        to={`/blog/${blog.slug}`}
                        className="group flex gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                      >
                        {/* FIX: Use mainImage and flex-shrink-0 for perfect fitting */}
                        <img
                          src={blog.mainImage || [blog2, blog3, blog4][index]}
                          alt={blog.title}
                          className="w-42 h-24 object-cover rounded-md flex-shrink-0"
                        />
                        <div>
                          <h2 className="font-semibold text-gray-800 group-hover:text-blue-900 transition line-clamp-2">
                            {blog.title}
                          </h2>
                          <span className="block text-sm text-gray-500 mt-1">
                            {formatDate(
                              blog.date || blog.publishedAt || blog.createdAt,
                            )}
                          </span>
                          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                            {blog.excerpt}
                          </p>
                          <span className="text-sm font-medium text-blue group-hover:text-blue-900 transition">
                            Read More →
                          </span>
                        </div>
                      </Link>
                    ))
                  : blogs.length === 1 && (
                      <div className="text-gray-400 italic">
                        Check back soon for more!
                      </div>
                    )}
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
};

export default Home;
