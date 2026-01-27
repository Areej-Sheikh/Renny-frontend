import { useState, useEffect } from "react"; // Added useEffect
import axios from "axios"; // Ensure axios is installed
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../../components/Navbar"; 
import Footer from "../../components/Footer"; 
import industryHero from "../../assets/investorbanner.webp"; 
import InvestorSidebar from "../../components/InvestorSidebar"; 

const IndustryReport = () => {
  const location = useLocation();

  // 1. STATE FOR DYNAMIC DATA
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const brandColor = "#292C44";
  const mainHeadingFont = "font-['Helvetica','Arial',sans-serif] text-[37px] font-semibold";
  const subHeadingFont = "font-['Helvetica','Arial',sans-serif] text-[18px] font-semibold";
  const btnClass = "text-white px-5 py-2.5 rounded-lg text-[14px] font-medium hover:opacity-90 transition-all duration-300 font-['Helvetica','Arial',sans-serif]";

  // 2. FETCH DATA FROM BACKEND
  useEffect(() => {
    const fetchReports = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get("http://localhost:3000/api/industry-report");
        
        // Assuming the backend returns the array directly or inside a 'reports' key
        setReports(response.data); 
      } catch (error) {
        console.error("Error fetching industry reports:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="font-['Helvetica','Arial',sans-serif]">
      <Navbar />
      
      {/* -------------------- HERO SECTION -------------------- */}
      <section className="relative w-full h-[55vh] overflow-hidden">
        <img src={industryHero} alt="Industry Report" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="absolute bottom-16 left-0 w-full px-6 lg:px-20 z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            className={`text-white ${mainHeadingFont}`}
          >
            Industry Report
          </motion.h1>
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
            
            {/* DOCUMENT LIST */}
            <div className="space-y-4">
              {isLoading ? (
                <div className="text-gray-500 animate-pulse">Loading reports...</div>
              ) : reports.length > 0 ? (
                reports.map((doc, i) => (
                  <motion.div 
                    key={doc._id || i} // Use MongoDB _id for better stability
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
                ))
              ) : (
                <div className="text-gray-500 italic">No industry reports found.</div>
              )}
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