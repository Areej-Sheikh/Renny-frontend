import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import InvestorSidebar from "../../components/InvestorSidebar";
import Navbar from "../../components/Navbar"; 
import Footer from "../../components/Footer"; 
import shareholdingHero from "../../assets/Share Holding Pattern.webp"; // Using consistent hero placeholder

const SIDEBAR_LINKS = [
  { title: "Financials", path: "/financials" },
  { title: "Corporate Governance", path: "/corporate-governance" },
  { title: "Industry Report", path: "/industry-report" },
  { title: "IPO Documents", path: "/ipo" },
  { title: "IPO Audio Visual", path: "/ipo-audio-visual" },
  { title: "Shareholding Pattern", path: "/Share-holding-pattern" },
  { title: "Our Policies", path: "/our-policies" },
];

// Structured to easily append quarterly or annual patterns in the future
const SHAREHOLDING_DATA = [
  {
    title: "Share holding pattern of Renny Strips Limited",
    url: "https://drive.google.com/file/d/1zTLDS39FpiRimvcZBHYjYPrpE79POeDK/view?usp=sharing"
  }
];

const Shareholding = () => {
  const location = useLocation();

  const brandColor = "#292C44";
  const mainHeadingFont = "font-['Helvetica','Arial',sans-serif] text-[37px] font-semibold";
  const subHeadingFont = "font-['Helvetica','Arial',sans-serif] text-[18px] font-semibold";
  const btnClass = "text-white px-5 py-2.5 rounded-lg text-[14px] font-medium hover:opacity-90 transition-all duration-300 font-['Helvetica','Arial',sans-serif]";

  const normalizePath = (path) => path.replace(/\/$/, "");

  return (
    <div className="font-['Helvetica','Arial',sans-serif]">
      <Navbar />
      
      {/* -------------------- HERO SECTION -------------------- */}
      <section className="relative w-full h-[55vh] overflow-hidden">
        <img src={shareholdingHero} alt="Share Holding Pattern" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center px-6 lg:px-20">
          <div className="max-w-7xl w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
              className={`text-white ${mainHeadingFont}`}
            >
              Share Holding Pattern
            </motion.h1>
            <nav className="mt-4 text-sm text-gray-300 flex gap-2">
              <Link to="/" className="hover:text-white transition">Home</Link> 
              <span>&gt;</span> 
              <Link to="/investor-relations" className="hover:text-white transition">Investor Relations</Link> 
              <span>&gt;</span> 
              <span className="text-white font-medium">Share Holding Pattern</span>
            </nav>
          </div>
        </div>
      </section>

      {/* -------------------- MAIN CONTENT SECTION -------------------- */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-20 pb-32 bg-white px-6"
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-12">
          
          <div className="col-span-12 lg:col-span-8">
            <div 
              className="inline-block text-white px-5 py-1.5 rounded-md mb-6 font-semibold text-[13px] tracking-wide" 
              style={{ backgroundColor: brandColor }}
            >
              INVESTOR RELATIONS
            </div>
            <h2 className={`${mainHeadingFont} mb-12 text-gray-900`}>Share Holding Pattern</h2>

            {/* Share Holding Pattern Badge - Color Matched to Brand */}
            <div className="mb-8">
               <button 
                  className="text-white px-6 py-2 rounded font-bold text-[14px] shadow-sm cursor-default"
                  style={{ backgroundColor: brandColor }}
               >
                  Share Holding Pattern
               </button>
            </div>
            
            {/* DOCUMENT LIST */}
            <div className="space-y-4">
              {SHAREHOLDING_DATA.map((doc, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex justify-between items-center p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className={subHeadingFont}>{doc.title}</span>
                  <a href={doc.url} target="_blank" rel="noreferrer">
                    <button className={btnClass} style={{ backgroundColor: brandColor }}>
                      Click here
                    </button>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* -------------------- SIDEBAR SECTION -------------------- */}
          <aside className="col-span-12 lg:col-span-4">
            <motion.h4 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              className={`${mainHeadingFont} mb-10 text-gray-900`}
            >
              Other Information
            </motion.h4>
            <div className="flex flex-col gap-5">
              {SIDEBAR_LINKS
                .filter(item => normalizePath(item.path) !== normalizePath(location.pathname))
                .map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: 30 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-gray-100 rounded-xl p-6 flex items-center justify-between shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className={subHeadingFont}>{item.title}</h3>
                  <Link to={item.path}>
                    <button className={btnClass} style={{ backgroundColor: brandColor }}>View</button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </aside>
        </div>
      </motion.section>

     
    </div>
  );
};

export default Shareholding;