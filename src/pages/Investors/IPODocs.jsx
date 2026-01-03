import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from '../../components/Navbar';
import ipoHero from '../../assets/IPO Documents.webp';
import InvestorSidebar from '../../components/InvestorSidebar';

const IPO_DOCUMENTS = [
  {
    title: 'DRHP',
    url: 'https://drive.google.com/file/d/1N9JlBjHE0lPGAZ_bL-a5BteP7ptmobCe/view?usp=sharing',
  },
];

const IPODocs = () => {
  const location = useLocation();

  const brandColor = '#292C44';
  const mainHeadingFont =
    "font-['Helvetica','Arial',sans-serif] text-[37px] font-semibold";
  const subHeadingFont =
    "font-['Helvetica','Arial',sans-serif] text-[18px] font-semibold";
  const btnClass =
    "text-white px-5 py-2.5 rounded-lg text-[14px] font-medium hover:opacity-90 transition-all duration-300 font-['Helvetica','Arial',sans-serif]";

  return (
    <div className="font-['Helvetica','Arial',sans-serif]">
      <Navbar />

      {/* -------------------- HERO SECTION -------------------- */}
      <section className="relative w-full h-[55vh] overflow-hidden">
        <img
          src={ipoHero}
          alt="IPO Documents"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Heading positioned at the bottom left */}
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
            <h2 className={`${mainHeadingFont} mb-12 text-gray-900`}>
              IPO Documents
            </h2>

            {/* Offer Documents Badge */}
            <div className="mb-8">
              <button
                className="text-white px-6 py-2 rounded font-bold text-[14px] shadow-sm cursor-default"
                style={{ backgroundColor: brandColor }}
              >
                Offer Documents
              </button>
            </div>

            {/* DOCUMENT LIST */}
            <div className="space-y-4">
              {IPO_DOCUMENTS.map((doc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex justify-between items-center p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className={subHeadingFont}>{doc.title}</span>
                  <a href={doc.url} target="_blank" rel="noreferrer">
                    <button
                      className={btnClass}
                      style={{ backgroundColor: brandColor }}
                    >
                      Click here
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

export default IPODocs;
