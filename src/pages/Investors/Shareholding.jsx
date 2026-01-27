import { useState, useEffect } from "react";
import axios from "axios"; // Added axios for backend communication
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import InvestorSidebar from "../../components/InvestorSidebar";
import Navbar from "../../components/Navbar"; 
import Footer from "../../components/Footer"; 
import shareholdingHero from "../../assets/investorbanner.webp";

const Shareholding = () => {
  const location = useLocation();

  // 1. STATE FOR DYNAMIC DATA
  const [shareholdingDocs, setShareholdingDocs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const brandColor = "#292C44";
  const mainHeadingFont = "font-['Helvetica','Arial',sans-serif] text-[37px] font-semibold";
  const subHeadingFont = "font-['Helvetica','Arial',sans-serif] text-[18px] font-semibold";
  const btnClass = "text-white px-5 py-2.5 rounded-lg text-[14px] font-medium hover:opacity-90 transition-all duration-300 font-['Helvetica','Arial',sans-serif]";

  // 2. FETCH DATA FROM BACKEND (Port 3000)
  useEffect(() => {
    const fetchShareholding = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/shareholding-pattern");
        setShareholdingDocs(response.data);
      } catch (error) {
        console.error("Error fetching shareholding pattern:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchShareholding();
  }, []);

  return (
    <div className="font-['Helvetica','Arial',sans-serif]">
      <Navbar />
      
      {/* -------------------- HERO SECTION -------------------- */}
      <section className="relative w-full h-[55vh] overflow-hidden">
        <img src={shareholdingHero} alt="Share Holding Pattern" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="absolute bottom-16 left-0 w-full px-6 lg:px-20 z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            className={`text-white ${mainHeadingFont}`}
          >
            Share Holding Pattern
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
            <h2 className={`${mainHeadingFont} mb-12 text-gray-900`}>Share Holding Pattern</h2>

            <div className="mb-8">
               <button 
                  className="text-white px-6 py-2 rounded font-bold text-[14px] shadow-sm cursor-default"
                  style={{ backgroundColor: brandColor }}
               >
                  Share Holding Pattern
               </button>
            </div>
            
            {/* DOCUMENT LIST - Renders from Backend */}
            <div className="space-y-4">
              {isLoading ? (
                <div className="text-gray-400 animate-pulse">Loading patterns...</div>
              ) : shareholdingDocs.length > 0 ? (
                shareholdingDocs.map((doc, i) => (
                  <motion.div 
                    key={doc._id || i}
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
                ))
              ) : (
                <div className="text-gray-400 italic">No shareholding patterns available.</div>
              )}
            </div>
          </div>

          <aside className="col-span-12 lg:col-span-4 sticky top-28">
            <InvestorSidebar />
          </aside>
        </div>
      </motion.section>
     
    </div>
  );
};

export default Shareholding;