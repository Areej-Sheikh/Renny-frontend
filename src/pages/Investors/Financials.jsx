import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../../components/Navbar"; 
import Footer from "../../components/Footer"; 
import InvestorSidebar from "../../components/InvestorSidebar"; 
import financialsHero from "../../assets/investorbanner.webp";

// 1. HARDCODED TABS: These will always show, even if the database is empty
const FIXED_TABS = [
  { key: "audited", label: "Audited Financials of the Company" },
  { key: "creditors", label: "Outstanding Dues to Material Creditors" },
  { key: "renny-casting", label: "Renny Steel Casting Pvt Limited" },
  { key: "noval-paints", label: "Noval Paints (India) Limited" },
  { key: "annual-returns", label: "Annual Returns" },
];

const Financials = () => {
  const [activeTab, setActiveTab] = useState("audited");
  const [groupedDocs, setGroupedDocs] = useState({}); // Stores docs grouped by label
  const [isLoading, setIsLoading] = useState(true);

  const brandColor = "#292C44";
  const mainHeadingFont = "font-['Helvetica','Arial',sans-serif] text-[37px] font-semibold";
  const subHeadingFont = "font-['Helvetica','Arial',sans-serif] text-[18px] font-semibold";
  const btnClass = "text-white px-5 py-2.5 rounded-lg text-[14px] font-medium hover:opacity-90 transition-all duration-300";

  useEffect(() => {
    const fetchAndGroupFinancials = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/financials");
        const data = response.data;

        // 2. GROUPING LOGIC: Map multiple database records to the same label
        const groups = {};
        data.forEach(item => {
          // We use the label as the key to group documents
          if (!groups[item.label]) {
            groups[item.label] = [];
          }
          // Flatten the documents array from the record into our group
          if (item.documents) {
            groups[item.label].push(...item.documents);
          }
        });

        setGroupedDocs(groups);
      } catch (error) {
        console.error("Error fetching financials:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAndGroupFinancials();
  }, []);

  // Find documents for the current active tab's label
  const currentLabel = FIXED_TABS.find(t => t.key === activeTab)?.label;
  const activeDocuments = groupedDocs[currentLabel] || [];

  if (isLoading) return null;

  return (
    <>
      <Navbar />
      <section className="relative w-full h-[60vh] overflow-hidden">
        <img src={financialsHero} alt="Financials" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-16 left-0 w-full px-10 md:px-20 z-10">
          <motion.h1 className={`text-white ${mainHeadingFont}`}>Financials</motion.h1>
        </div>
      </section>

      <motion.section className="pt-20 pb-32 bg-white px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-12 items-start">
          <div className="col-span-12 lg:col-span-8">
            <h2 className={`${mainHeadingFont} mb-10 text-gray-900`}>Financials</h2>
            
            {/* ALL BUTTONS ALWAYS SHOW HERE */}
            <div className="flex flex-wrap gap-3 mb-10">
              {FIXED_TABS.map((tab) => (
                <button 
                  key={tab.key} 
                  onClick={() => setActiveTab(tab.key)} 
                  className={`px-5 py-3 rounded-lg text-[14px] font-medium transition-all ${activeTab === tab.key ? "text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`} 
                  style={activeTab === tab.key ? { backgroundColor: brandColor } : {}}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* DOCUMENTS LIST */}
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                {activeDocuments.length > 0 ? (
                  activeDocuments.map((doc, i) => (
                    <div key={i} className="flex justify-between items-center p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <span className={subHeadingFont}>{doc.title}</span>
                      <a href={doc.fileUrl} target="_blank" rel="noreferrer">
                        <button className={btnClass} style={{ backgroundColor: brandColor }}>Download</button>
                      </a>
                    </div>
                  ))
                ) : (
                  <div className="p-10 text-center text-gray-400 italic bg-gray-50 rounded-xl border border-dashed border-gray-200">
                    No documents uploaded for this category yet.
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="col-span-12 lg:col-span-4 sticky top-28">
             <InvestorSidebar />
          </div>
        </div>
      </motion.section>
   
    </>
  );
};

export default Financials;