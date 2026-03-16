import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";


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
  const mainHeadingFont = "font-['Helvetica','Arial',sans-serif] text-2xl lg:text-[37px] font-semibold";
  const subHeadingFont = "font-['Helvetica','Arial',sans-serif] text-[18px] font-semibold";
  const btnClass = "text-white px-5 py-2.5 rounded-lg text-[14px] font-medium hover:opacity-90 transition-all duration-300";

  useEffect(() => {
    const fetchAndGroupFinancials = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/financials`);
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
      {/* Banner */}
      <motion.section
        className="relative h-[50vh] md:h-[100vh] w-full overflow-hidden mb-12"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <img
          src={financialsHero}
          alt="Financials Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 text-white text-4xl md:text-6xl lg:text-7xl font-bold flex items-end justify-start h-full py-10 px-6 md:px-10"
        >
          Financials
        </motion.h1>
      </motion.section>

      <motion.section className="pt-20 pb-32 bg-white px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-1 lg:col-span-8">
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
                    <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <span className={subHeadingFont}>{doc.title}</span>
                      <a href={doc.fileUrl} target="_blank" rel="noreferrer" className="w-full md:w-auto">
                        <button className={`${btnClass} w-full md:w-auto`} style={{ backgroundColor: brandColor }}>Download</button>
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
          <div className="col-span-1 lg:col-span-4">
            <InvestorSidebar />
          </div>
        </div>
      </motion.section>

    </>
  );
};

export default Financials;