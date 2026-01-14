import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from '../../components/Navbar';
import governanceHero from '../../assets/investorbanner.webp';
import InvestorSidebar from '../../components/InvestorSidebar';

// Profile Image Imports
import binnyImg from '../../assets/Binny-Gupta.webp';
import chetnaImg from '../../assets/Chetna-Gupta.webp';
import hetviImg from '../../assets/Hetvi.jpeg.webp';
import rajneeshImg from '../../assets/Rajneesh.webp';
import sunilImg from '../../assets/Sunil-suri.webp';
import vishwaImg from '../../assets/Vishwa-bandhu.webp';

const GOVERNANCE_TABS = [
  { key: 'board', label: 'Board of Directors' },
  { key: 'committee', label: 'Committee Composition of Board' },
  { key: 'contact', label: 'Investor Contacts' },
];

const Governance = () => {
  const [activeTab, setActiveTab] = useState('board');
  const location = useLocation();

  const brandColor = '#292C44';
  const mainHeadingFont =
    "font-['Helvetica','Arial',sans-serif] text-[37px] font-semibold";
  const subHeadingFont =
    "font-['Helvetica','Arial',sans-serif] text-[18px] font-semibold";
  const btnClass =
    "text-white px-5 py-2.5 rounded-lg text-[14px] font-medium hover:opacity-90 transition-all duration-300 font-['Helvetica','Arial',sans-serif]";

  // 1. BOARD OF DIRECTORS RENDERER
  const renderBoard = () => (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {[
        { name: 'Binny Gupta', role: 'Managing Director', img: binnyImg },
        { name: 'Chetna Gupta', role: 'Whole-time Director', img: chetnaImg },
        {
          name: 'Rajneesh Gupta',
          role: 'Chief Financial Officer',
          img: rajneeshImg,
        },
        { name: 'Sunil Suri', role: 'Independent Director', img: sunilImg },
        {
          name: 'Hetvi Ketan Sheth',
          role: 'Independent Director',
          img: hetviImg,
        },
        { name: 'Vishva Bandhu', role: 'Independent Director', img: vishwaImg },
      ].map((member, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: 'easeOut' },
            },
          }}
          className="flex items-center gap-5 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-100 flex-shrink-0">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div>
            <h4 className="text-[18px] font-bold text-gray-900 leading-tight">
              {member.name}
            </h4>
            <p className="text-[14px] text-gray-500 mt-1 font-medium">
              {member.role}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  // 2. COMMITTEES RENDERER
  const renderCommittee = () => (
    <div className="grid grid-cols-1 gap-8">
      {[
        {
          title: 'AUDIT COMMITTEE',
          members: [
            {
              n: 'Hetvi Ketan Sheth',
              p: 'Chairman',
              d: 'Independent Director',
            },
            { n: 'Sunil Suri', p: 'Member', d: 'Independent Director' },
            {
              n: 'Binny Gupta',
              p: 'Member',
              d: 'Chairman and Managing Director',
            },
          ],
        },
        {
          title: 'NOMINATION & REMUNERATION COMMITTEE',
          members: [
            { n: 'Vishva Bandhu', p: 'Chairman', d: 'Independent Director' },
            { n: 'Sunil Suri', p: 'Member', d: 'Independent Director' },
            { n: 'Hetvi Ketan Sheth', p: 'Member', d: 'Independent Director' },
          ],
        },
        {
          title: 'STAKEHOLDER RELATIONSHIP COMMITTEE',
          members: [
            { n: 'Vishva Bandhu', p: 'Chairman', d: 'Independent Director' },
            { n: 'Binny Gupta', p: 'Member', d: 'Managing Director' },
            { n: 'Chetna Gupta', p: 'Member', d: 'Whole Time Director' },
          ],
        },
        {
          title: 'CORPORATE SOCIAL RESPONSIBILITY',
          members: [
            { n: 'Binny Gupta', p: 'Chairman', d: 'Managing Director' },
            { n: 'Chetna Gupta', p: 'Member', d: 'Whole-time Director' },
            { n: 'Vishva Bandhu', p: 'Member', d: 'Independent Director' },
          ],
        },
        {
          title: 'RISK MANAGEMENT COMMITTEE',
          members: [
            { n: 'Binny Gupta', p: 'Chairman', d: 'Managing director' },
            { n: 'Chetna Gupta', p: 'Member', d: 'Whole-time Director' },
            { n: 'Vishva Bandhu', p: 'Member', d: 'Independent Director' },
          ],
        },
        {
          title: 'IPO COMMITTEE',
          members: [
            { n: 'Binny Gupta', p: 'Chairman', d: 'Managing director' },
            { n: 'Chetna Gupta', p: 'Member', d: 'Whole-time Director' },
            { n: 'Vishva Bandhu', p: 'Member', d: 'Independent Director' },
          ],
        },
      ].map((comm, i) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          key={i}
          className="p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm"
        >
          <h3 className="text-[16px] font-bold mb-6 text-[#292C44] border-b border-gray-200 pb-3 tracking-wide uppercase">
            {comm.title}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[14px]">
              <thead>
                <tr className="text-gray-400 font-medium">
                  <th className="pb-4 pr-4">Name of Director</th>
                  <th className="pb-4 pr-4">Position in Committee</th>
                  <th className="pb-4">Designation</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {comm.members.map((m, idx) => (
                  <tr key={idx} className="border-t border-gray-200/60">
                    <td className="py-4 pr-4 font-semibold">{m.n}</td>
                    <td
                      className={`py-4 pr-4 font-medium ${
                        m.p === 'Chairman' ? 'text-blue-600' : ''
                      }`}
                    >
                      {m.p}
                    </td>
                    <td className="py-4 italic text-gray-500">{m.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      ))}
    </div>
  );

  // 3. INVESTOR CONTACT RENDERER
  const renderContact = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-10 bg-[#292C44] text-white rounded-2xl shadow-xl relative overflow-hidden"
    >
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-1">Sakshi Srivastava</h3>
        <p className="text-[15px] opacity-80 mb-6 font-medium">
          Company Secretary and Compliance Officer
        </p>
        <p className="text-[15px] font-bold mb-6">Renny Strips Limited</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-white/10">
          <div>
            <h5 className="text-[12px] uppercase tracking-widest opacity-60 mb-2">
              Direct Contact
            </h5>
            <p className="text-[16px] font-semibold">
              compliance@rennystrips.com
            </p>
            <p className="text-[16px] font-semibold mt-1">+91 6283368523</p>
          </div>
          <div>
            <h5 className="text-[12px] uppercase tracking-widest opacity-60 mb-2">
              Registered & Corporate Office
            </h5>
            <p className="text-[14px] leading-relaxed opacity-90">
              Khasra No 34//6/2 (0-8)-7 (8-0)-9 and Khata No 121/127,
              <br />
              Lakhowal Road, Kohara,
              <br />
              Ludhiana-141112
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
    </motion.div>
  );

  return (
    <div className="font-['Helvetica','Arial',sans-serif]">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[100vh] overflow-hidden">
        <img
          src={governanceHero}
          alt="Hero"
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
            Corporate Governance
          </motion.h1>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="pt-20 pb-32 bg-white px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-8">
            <div
              className="inline-block text-white px-5 py-1.5 rounded-md mb-6 font-semibold text-[13px] tracking-wide"
              style={{ backgroundColor: brandColor }}
            >
              INVESTOR RELATIONS
            </div>
            <h2 className={`${mainHeadingFont} mb-12 text-gray-900`}>
              Governance Overview
            </h2>

            {/* TABS MENU */}
            <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-100 pb-2">
              {GOVERNANCE_TABS.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-3 rounded-t-lg text-[14px] font-bold transition-all relative ${
                    activeTab === tab.key
                      ? 'text-[#292C44]'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.key && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#292C44]"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* DYNAMIC TAB CONTENT */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'board' && renderBoard()}
                {activeTab === 'committee' && renderCommittee()}
                {activeTab === 'contact' && renderContact()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* REUSABLE STICKY SIDEBAR */}
          <div className="col-span-12 lg:col-span-4 sticky top-28">
            <InvestorSidebar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Governance;
