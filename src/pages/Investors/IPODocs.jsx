import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../../components/Navbar"; 
import Footer from "../../components/Footer"; 
import ipoHero from "../../assets/investorbanner.webp"; 
import InvestorSidebar from "../../components/InvestorSidebar";

const IPODocs = () => {
  const [docs, setDocs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Modal States
  const [showModal, setShowModal] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");

  const brandColor = "#292C44";
  const mainHeadingFont = "font-['Helvetica','Arial',sans-serif] text-[37px] font-semibold";
  const subHeadingFont = "font-['Helvetica','Arial',sans-serif] text-[18px] font-semibold";
  const btnClass = "text-white px-5 py-2.5 rounded-lg text-[14px] font-medium hover:opacity-90 transition-all duration-300 font-['Helvetica','Arial',sans-serif]";

  useEffect(() => {
    const fetchIpoDocs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/ipo-documents");
        setDocs(response.data);
      } catch (error) {
        console.error("Error fetching IPO Docs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchIpoDocs();
  }, []);

  const handleOpenDisclaimer = (url) => {
    setSelectedUrl(url);
    setShowModal(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const handleConfirm = () => {
    setShowModal(false);
    document.body.style.overflow = "unset";
    window.open(selectedUrl, "_blank", "noreferrer");
  };

  const handleCancel = () => {
    setShowModal(false);
    document.body.style.overflow = "unset";
    setSelectedUrl("");
  };

  return (
    <div className="font-['Helvetica','Arial',sans-serif]">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[55vh] overflow-hidden">
        <img src={ipoHero} alt="IPO Documents" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-16 left-0 w-full px-6 lg:px-20 z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            className={`text-white ${mainHeadingFont}`}
          >
            IPO Documents
          </motion.h1>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-20 pb-32 bg-white px-6"
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-8">
            <div className="inline-block text-white px-5 py-1.5 rounded-md mb-6 font-semibold text-[13px] tracking-wide" style={{ backgroundColor: brandColor }}>
              INVESTOR RELATIONS
            </div>
            <h2 className={`${mainHeadingFont} mb-12 text-gray-900`}>IPO Documents</h2>

            <div className="mb-8">
               <button className="text-white px-6 py-2 rounded font-bold text-[14px] shadow-sm cursor-default" style={{ backgroundColor: brandColor }}>
                  Offer Documents
               </button>
            </div>
            
            <div className="space-y-4">
              {isLoading ? (
                <div className="text-gray-400 animate-pulse">Loading documents...</div>
              ) : docs.length > 0 ? (
                docs.map((doc, i) => (
                  <motion.div 
                    key={doc._id || i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex justify-between items-center p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className={subHeadingFont}>{doc.title}</span>
                    <button 
                      onClick={() => handleOpenDisclaimer(doc.url)}
                      className={btnClass} 
                      style={{ backgroundColor: brandColor }}
                    >
                      Click here
                    </button>
                  </motion.div>
                ))
              ) : (
                <div className="text-gray-400 italic">No offer documents available.</div>
              )}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 sticky top-28">
             <InvestorSidebar />
          </div>
        </div>
      </motion.section>

      {/* DISCLAIMER MODAL */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">Disclaimer</h2>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-8 overflow-y-auto text-gray-700 text-[14px] leading-relaxed space-y-4 text-justify">
                <p className="font-bold text-gray-900 uppercase">
                  PLEASE READ THIS NOTICE CAREFULLY. IT APPLIES TO ALL PERSONS WHO VIEW THIS WEBSITE. THESE MATERIALS ARE NOT DIRECTED AT OR INTENDED TO BE ACCESSED BY PERSONS LOCATED OUTSIDE INDIA.
                </p>
                <p>
                  The prospectus is being made available on this website to comply with Securities and Exchange Board of India (Issue of Capital and Disclosure Requirements) Regulations, 2018, as amended (“SEBI ICDR Regulations”).
                </p>
                <p className="font-bold text-gray-900">
                  IMPORTANT: You must read and agree with the terms and conditions of the following disclaimer before continuing.
                </p>
                <p>
                  The following disclaimer applies to the draft red herring prospectus of Renny Strips Limited (the “Company”) dated December 12, 2025 (the “Draft Red Herring Prospectus”) filed with the Securities and Exchange Board of India (“SEBI”) and BSE Limited and National Stock Exchange of India Limited and is hosted on this website, in relation to the initial public offering of the equity shares bearing face value of ₹5 each (“Equity Shares”) of the Company (“Offer”).
                </p>
                <p>
                  You are advised to read this disclaimer carefully before reading, accessing or making any other use of the Draft Red Herring Prospectus. In accessing the Draft Red Herring Prospectus, you agree to be bound by the following terms and conditions, including any modifications to them from time to time.
                </p>
                <p>
                  The Draft Red Herring Prospectus is directed at, and is intended for distribution to, and use by, residents of India only. The information in this portion of our website, including the Draft Red Herring Prospectus, is not for publication or distribution, directly or indirectly, in or into the United States.
                </p>
                <p>
                  No part of the contents of the Draft Red Herring Prospectus shall be copied or duplicated in any form by any means, or redistributed. The information contained in the Draft Red Herring Prospectus may not be updated since its original publication date and may not reflect the latest updates. Access to the Draft Red Herring Prospectus does not constitute a recommendation by the Company, the members of the Syndicate (as defined in the Draft Red Herring Prospectus) or any of their respective affiliates or any other person to subscribe to the Equity Shares offered in the Offer.
                </p>
                <p>
                  The Draft Red Herring Prospectus has been hosted on this website as prescribed under Regulation 26(1) of the SEBI ICDR Regulations. You are reminded that documents transmitted in electronic form may be altered or changed during the process of transmission and consequently, neither the Company nor any of its affiliates accepts any liability or responsibility whatsoever in respect of alterations or changes which have taken place during the course of transmission of electronic data.
                </p>
                <p>
                  To access this information, you must confirm by pressing on the button marked "I Confirm" that, at the time of access you are located in India. If you cannot make this confirmation, you must press the button marked "I Do Not Confirm".
                </p>
                <p className="italic text-gray-500">
                  The documentation contained in these pages is posted solely to comply with Indian legal and regulatory requirements. Making the information contained herein available in electronic format does not constitute an offer to sell, the solicitation of an offer to buy, or a recommendation to buy or sell securities of the Company in the United States or in any other jurisdiction, including without limitation, India.
                </p>
              </div>

              {/* Modal Footer (Buttons) */}
              <div className="p-6 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row justify-end gap-3">
                <button 
                  onClick={handleCancel}
                  className="px-8 py-2.5 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  I Do Not Confirm
                </button>
                <button 
                  onClick={handleConfirm}
                  className="px-8 py-2.5 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#0066b2" }} // Standard blue from image
                >
                  I Confirm
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    
    </div>
  );
};

export default IPODocs;