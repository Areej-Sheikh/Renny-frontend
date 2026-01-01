import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../../components/Navbar"; 
import Footer from "../../components/Footer"; 
import industryHero from "../../assets/Industry Report.webp"; // Using your hero placeholder
import InvestorSidebar from "../../components/InvestorSidebar"; 
const SIDEBAR_LINKS = [
  { title: "Financials", path: "/financials" },
  { title: "Corporate Governance", path: "/corporate-governance" },
  { title: "Industry Report", path: "/industry-report" },
  { title: "IPO Documents", path: "/ipo" },
  { title: "IPO Audio Visual", path: "/ipo-audio-visual" },
  { title: "Shareholding Pattern", path: "/Share-holding-pattern" },
  { title: "Our Policies", path: "/our-policies" },
];

// This is structured to easily accept backend data later
const INDUSTRY_DOCS = [
  {
    title: "Industry Report",
    url: "https://drive.google.com/file/d/1mdCK5ZZ7pOBlTvofdVYJBGL7VOU7YEr_/view?usp=sharing"
  }
];

const IndustryReport = () => {
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
        <img src={industryHero} alt="Industry Report" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center px-6 lg:px-20">
          <div className="max-w-7xl w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
              className={`text-white ${mainHeadingFont}`}
            >
              Industry Report
            </motion.h1>
            <nav className="mt-4 text-sm text-gray-300 flex gap-2">
              <Link to="/" className="hover:text-white transition">Home</Link> 
              <span>&gt;</span> 
              <Link to="/investor-relations" className="hover:text-white transition">Investor Relations</Link> 
              <span>&gt;</span> 
              <span className="text-white font-medium">Industry Report</span>
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
            <h2 className={`${mainHeadingFont} mb-12 text-gray-900`}>Industry Report</h2>
            
            {/* DOCUMENT LIST (Matching Financials Style) */}
            <div className="space-y-4">
              {INDUSTRY_DOCS.map((doc, i) => (
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
                      Download PDF
                    </button>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* REUSABLE STICKY SIDEBAR */}
          <div className="col-span-12 lg:col-span-4 sticky top-28">
             <InvestorSidebar />
          </div>
        </div>
      </motion.section>

      
    </div>
  );
};

export default IndustryReport;