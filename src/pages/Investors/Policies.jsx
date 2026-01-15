import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from '../../components/Navbar';
import InvestorSidebar from '../../components/InvestorSidebar';
import policiesHero from '../../assets/investorbanner.webp';

const Policies = () => {
  const [policies, setPolicies] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const scrollRef = useRef(null);
  const location = useLocation();

  const brandColor = '#292C44';
  const mainHeadingFont =
    "font-['Helvetica','Arial',sans-serif] text-[48px] font-semibold";
  const subHeadingFont =
    "font-['Helvetica','Arial',sans-serif] text-[18px] font-semibold";
  const btnClass =
    "text-white px-5 py-2.5 rounded-lg text-[14px] font-medium hover:opacity-90 transition-all duration-300 font-['Helvetica','Arial',sans-serif]";

  useEffect(() => {
    const getPolicies = () => {
      const data = [
        {
          id: 1,
          slug: 'archival',
          label: 'Archival Policy',
          docName: 'Policy on Preservation of Documents and Archival Policy',
          url: 'https://drive.google.com/file/d/1rTlvMqNdmopSON-KaoizTVPmLDCvaxAp/view?usp=sharing',
        },
        {
          id: 2,
          slug: 'independent',
          label: 'Terms of an Independent Director’s Appointment',
          docName: 'Terms of an Independent Director’s Appointment',
          url: 'https://drive.google.com/file/d/10XwlHt6EcbyiXsxDPCxtoMUl9wXCKmnk/view?usp=sharing',
        },
        {
          id: 3,
          slug: 'party',
          label: 'Policy on Material Related Party Transaction',
          docName: 'Policy on Party Transactions',
          url: 'https://drive.google.com/file/d/1qvjf6arPjoMNtPZ7HD6gtoJ-rYFtD-LF/view?usp=sharing',
        },
        {
          id: 4,
          slug: 'disclosure',
          label: 'Policy on Disclosure on Material Event Information',
          docName:
            'Policy on Determination of Materiality for Disclosure of Events and Information',
          url: 'https://drive.google.com/file/d/1_ubCoQVAWt6pemHCv7gSbzZAJ9HlhOJ9/view?usp=sharing',
        },
        {
          id: 5,
          slug: 'whistle',
          label: 'Whistle Blower Policy',
          docName: 'Whistle Blower Policy',
          url: 'https://drive.google.com/file/d/1EFTz07E27CMZbIpL8MuSF05MN0nHEwBy/view?usp=sharing',
        },
        {
          id: 6,
          slug: 'nomination',
          label: 'Nomination & Remuneration Policy',
          docName: 'Nomination & Remuneration Policy',
          url: 'https://drive.google.com/file/d/1aeB-akhAZ2Q4UPd6r7BrjvlvBXvixAZ1/view?usp=sharing',
        },
        {
          id: 7,
          slug: 'familiarisation',
          label: 'Familiarisation Programme for Independent Directors',
          docName: 'Familiarisation programme for independent directors',
          url: 'https://drive.google.com/file/d/1FWxz7VYC8HesgMgrGsLP0zE5r2o971d-/view?usp=sharing',
        },
        {
          id: 8,
          slug: 'conduct',
          label: 'Code of Conduct for Board & Senior Managements',
          docName: 'Code of Conduct for Board & Senior Managements',
          url: 'https://drive.google.com/file/d/1lOLyjRW12-Idtrttk8sE-qTKmpU8Pj9W/view?usp=sharing',
        },
        {
          id: 9,
          slug: 'risk',
          label: 'Risk Management Policy',
          docName: 'Risk Management Policy',
          url: 'https://drive.google.com/file/d/1RumfGAeCTSTyJkpgMInWui42Ir3uql_v/view?usp=sharing',
        },
        {
          id: 10,
          slug: 'fair',
          label: 'Code of Fair Disclosure',
          docName:
            'Code of Practices and Procedures for Fair Disclosure of Unpublished Price Sensitive Information',
          url: 'https://drive.google.com/file/d/1QzHyUp8RrazoS_yFhGjbCpdTjSS8Hgmo/view?usp=sharing',
        },
        {
          id: 11,
          slug: 'csr',
          label: 'Corporate Social Responsibility Policy',
          docName: 'Corporate Social Responsibility Policy',
          url: 'https://drive.google.com/file/d/1QQWtgSStUjVcWRI7K_xIcsYdxInV0TXi/view?usp=sharing',
        },
        {
          id: 12,
          slug: 'succession',
          label: 'Succession Policy',
          docName: 'Policy on Succession Planning',
          url: 'https://drive.google.com/file/d/1kseOHN2fBWjMsqpFD8ApVHxrrKjXy8od/view?usp=sharing',
        },
        {
          id: 13,
          slug: 'posh',
          label: 'Policy on Prevention of Sexual Harassment at Workplace',
          docName: 'Policy on Prevention of Sexual Harassment at Workplace',
          url: 'https://drive.google.com/file/d/1r2ujD8GX-_lQ81kXvz4mswCgK38XWKjy/view?usp=sharing',
        },
        {
          id: 14,
          slug: 'dividend',
          label: 'Dividend Policy',
          docName: 'Dividend Distribution Policy',
          url: 'https://drive.google.com/file/d/1e5yvBefkSTgP63TOBwd3EmFfps5jMml0/view?usp=sharing',
        },
        {
          id: 15,
          slug: 'trading',
          label: 'Code of Conduct to Regulate Monitor and Report Trading',
          docName:
            'Code of conduct to regulate, monitor and report trading by designated persons',
          url: 'https://drive.google.com/file/d/13earjRevRx955JDi8U1ZEvwXmwsImYS-/view?usp=sharing',
        },
        {
          id: 16,
          slug: 'evaluation',
          label: 'Board Evaluation Policy',
          docName: 'Policy for Evaluation of the Board',
          url: 'https://drive.google.com/file/d/1LOfers9FBbIu0MThCqOb9fEtSXEyWAQq/view?usp=sharing',
        },
        {
          id: 17,
          slug: 'diversity',
          label: 'Policy on Diversity of the Board',
          docName: 'Policy on Diversity of the Board',
          url: 'https://drive.google.com/file/d/1W1Ivv-i-FfVzU4E6WDPTIQveH5T9QLKZ/view?usp=sharing',
        },
      ];
      setPolicies(data);
      if (data.length > 0) setActiveTab(data[0].slug);
      setIsLoading(false);
    };
    getPolicies();
  }, []);

  const scroll = direction => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo =
        direction === 'left' ? scrollLeft - 350 : scrollLeft + 350;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const activePolicy = policies.find(p => p.slug === activeTab);

  if (isLoading) return null;

  return (
    <div className="font-['Helvetica','Arial',sans-serif]">
      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[100vh] overflow-hidden">
        <img
          src={policiesHero}
          alt="Policies"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Heading positioned bottom-left */}
        <div className="absolute bottom-16 left-0 w-full px-6 lg:px-20 z-10">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-white ${mainHeadingFont}`}
          >
            Our Policies
          </motion.h1>
        </div>
      </section>

      <section className="pt-20 pb-32 bg-white px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-12 items-start">
          <div className="col-span-12 lg:col-span-8">
            <div
              className="inline-block text-white px-5 py-1.5 rounded-md mb-6 font-semibold text-[13px]"
              style={{ backgroundColor: brandColor }}
            >
              INVESTOR RELATIONS
            </div>
            <h2 className={`${mainHeadingFont} mb-12 text-gray-900`}>
              Our Policies
            </h2>

            {/* TAB SCROLLER */}
            <div className="relative mb-12 group flex items-center">
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 z-20 p-2 bg-white/90 shadow-lg rounded-full -ml-4 opacity-0 group-hover:opacity-100 transition-opacity border border-gray-100"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={brandColor}
                  strokeWidth="3"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-3 pb-2 no-scrollbar scroll-smooth w-full px-2"
              >
                {policies.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.slug)}
                    className={`whitespace-nowrap px-6 py-3 rounded-lg text-[14px] font-bold transition-all border ${
                      activeTab === item.slug
                        ? 'text-white shadow-lg border-transparent'
                        : 'bg-gray-50 text-gray-400 border-gray-100 hover:bg-gray-100'
                    }`}
                    style={
                      activeTab === item.slug
                        ? { backgroundColor: brandColor }
                        : {}
                    }
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => scroll('right')}
                className="absolute right-0 z-20 p-2 bg-white/90 shadow-lg rounded-full -mr-4 opacity-0 group-hover:opacity-100 transition-opacity border border-gray-100"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={brandColor}
                  strokeWidth="3"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activePolicy && (
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-10 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-8"
                >
                  <div className="flex-1">
                    <h3
                      className={`${subHeadingFont} text-gray-900 mb-2 leading-snug`}
                    >
                      {activePolicy.docName}
                    </h3>
                    <p className="text-[13px] text-gray-400 font-medium italic">
                      Category: {activePolicy.label}
                    </p>
                  </div>
                  <a
                    href={activePolicy.url}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0"
                  >
                    <button
                      className={btnClass}
                      style={{ backgroundColor: brandColor }}
                    >
                      Download PDF
                    </button>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="col-span-12 lg:col-span-4 sticky top-28">
            <InvestorSidebar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policies;
