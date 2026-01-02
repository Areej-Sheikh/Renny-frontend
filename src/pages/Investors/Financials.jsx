import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from '../../components/Navbar';
import InvestorSidebar from '../../components/InvestorSidebar';
import financialsHero from '../../assets/Financials.webp';

/* -------------------- TABS & DATA -------------------- */
const TABS = [
  { key: 'audited', label: 'Audited Financials of the Company' },
  { key: 'creditors', label: 'Outstanding Dues to Material Creditors' },
  { key: 'renny-casting', label: 'Renny Steel Casting Pvt Limited' },
  { key: 'noval-paints', label: 'Noval Paints (India) Limited' },
  { key: 'annual-returns', label: 'Annual Returns' },
];

const MOCK_DOCUMENTS = {
  audited: [
    {
      title: 'Financial Year 2024–2025',
      url: 'https://drive.google.com/file/d/1tLJzM-m5gCYEtwnRJgfIPuZUPqCRQMVn/view?usp=sharing',
    },
    {
      title: 'Financial Year 2023–2024',
      url: 'https://drive.google.com/file/d/1mYaC6COEz580dHvE-mbFLtj8n6liHZms/view?usp=sharing',
    },
    {
      title: 'Financial Year 2022–2023',
      url: 'https://drive.google.com/file/d/1K5Lu58_F8qEOwsObj04mYISPhkKmQy0B/view?usp=sharing',
    },
  ],
  creditors: [
    {
      title: 'Outstanding dues to Material Creditors',
      url: 'https://drive.google.com/file/d/1vmRq875SIDwnez6ZeCsXiLqpZEl__-wt/view?usp=sharing',
    },
  ],
  'renny-casting': [
    {
      title: 'Financial Year 2024–2025',
      url: 'https://drive.google.com/file/d/1YsYw4THXGEUUkmPmFyuLeugtzYT5ezRh/view?usp=sharing',
    },
  ],
  'noval-paints': [
    {
      title: 'Financial Year 2024–2025',
      url: 'https://drive.google.com/file/d/1vdV5RQgIBfb2i9bzbc7msBZA4bajZNsG/view?usp=sharing',
    },
  ],
  'annual-returns': [
    {
      title: 'Financial Year 2024–2025',
      url: 'https://drive.google.com/file/d/1wt3c9JxebwtfKfds9KttVCQme-2H4kfl/view?usp=sharing',
    },
  ],
};

const Financials = () => {
  const [activeTab, setActiveTab] = useState('audited');

  // Design Constants
  const brandColor = '#292C44';
  const mainHeadingFont =
    "font-['Helvetica','Arial',sans-serif] text-[37px] font-semibold";
  const subHeadingFont =
    "font-['Helvetica','Arial',sans-serif] text-[18px] font-semibold";
  const btnClass =
    "text-white px-5 py-2.5 rounded-lg text-[14px] font-medium hover:opacity-90 transition-all duration-300 font-['Helvetica','Arial',sans-serif]";

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <img
          src={financialsHero}
          alt="Financials"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Heading positioned at the bottom left */}
        <div className="absolute bottom-16 left-0 w-full px-10 md:px-20 z-10">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-white ${mainHeadingFont}`}
          >
            Financials
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
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-12 items-start">
          <div className="col-span-12 lg:col-span-8">
            <div
              className="inline-block text-white px-6 py-2 rounded-md mb-6 font-semibold text-[14px]"
              style={{ backgroundColor: brandColor }}
            >
              Investor Relations
            </div>
            <h2 className={`${mainHeadingFont} mb-10 text-gray-900`}>
              Financials
            </h2>

            {/* Tabs Row */}
            <div className="flex flex-wrap gap-3 mb-10">
              {TABS.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-5 py-3 rounded-lg text-[14px] font-medium transition-all ${
                    activeTab === tab.key
                      ? 'text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  style={
                    activeTab === tab.key ? { backgroundColor: brandColor } : {}
                  }
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Documents List */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {MOCK_DOCUMENTS[activeTab]?.map((doc, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className={subHeadingFont}>{doc.title}</span>
                    <a href={doc.url} target="_blank" rel="noreferrer">
                      <button
                        className={btnClass}
                        style={{ backgroundColor: brandColor }}
                      >
                        Download
                      </button>
                    </a>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* REUSABLE STICKY SIDEBAR */}
          <div className="col-span-12 lg:col-span-4 sticky top-28">
            <InvestorSidebar />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Financials;
