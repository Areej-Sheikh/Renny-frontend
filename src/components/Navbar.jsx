import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarImage from '../assets/NavbarImage.jpg';

const MENU = [
  {
    key: 'about',
    title: 'About us',
    description:
      'In 1996, Renny Strips Ltd embarked on its dynamic journey. Renny Strips Ltd. aimed to carve a niche in producing Innovative, Sustainable & Industry-fit Steel Products at Competitive Prices.',
    links: [
      { label: 'Access the page', to: '/company-overview-2/' },
      { label: 'Timeline', to: '/timeline/' },
      { label: 'Manufacturing Process', to: '/manufacturing-units/' },
      { label: 'Network', to: '/network/' },
      { label: 'Quality & Standard', to: '/quality-standard/' },
      { label: 'Design Centre', to: '/design-centre/' },
    ],
  },
  {
    key: 'products',
    title: 'Products',
    description:
      'Renny offers a diverse product portfolio across MS billets, Wire rods, Narrow-width HR coils, ERW black and galvanized pipes and tubes, Scaffolding and formwork system.',
    links: [
      { label: 'MS billets', to: '/MS-billets/' },
      { label: 'Wire rods', to: '/wire-rods-2/' },
      { label: 'Narrow-width HR coils', to: '/narrow-hrcoil/' },
      {
        label: 'ERW black and galvanized pipes and tubes',
        to: '/erw-pipes-and-tubes/',
      },
      {
        label: 'Scaffolding and formwork system',
        to: '/scaffolding-formwork/',
      },
    ],
  },
  {
    key: 'investor',
    title: 'Investor Relations',
    description:
      'Access our financial reports, corporate governance standards, IPO documents, and shareholder information.',
    links: [
      { label: 'Financials', to: '/financials/' },
      { label: 'Corporate Governance', to: '/corporate-governance/' },
      { label: 'Industry Report', to: '/industry-report/' },
      { label: 'IPO Documents', to: '/ipo/' },
      { label: 'IPO Audio Visual', to: '/ipo-audio-visual/' },
      { label: 'Shareholding Pattern', to: '/Share-holding-pattern/' },
      { label: 'Our Policies', to: '/our-policies/' },
    ],
  },
  {
    key: 'ec',
    title: 'EC',
    description: '',
    links: [{ label: 'EC', to: '/ec/' }],
  },
  {
    key: 'sustainability',
    title: 'Sustainability',
    description:
      'Renny is a committed force in sustainable manufacturing and community development, advancing industry with responsibility and purpose.',
    links: [
      { label: 'Community Development', to: '/community-development/' },
      { label: 'Sustainability', to: '/sustainability/' },
    ],
  },
  {
    key: 'media',
    title: 'Media',
    description:
      'Stay informed with Renny’s latest updates insights, press features, and project milestones.',
    links: [
      { label: 'News Room', to: '/news-room/' },
      { label: 'Blogs', to: '/blog/' },
      { label: 'Event', to: '/events/' },
    ],
  },
  {
    key: 'career',
    title: 'Career',
    description:
      'At Renny, a career goes beyond a job—it’s a journey of growth, purpose, and impact.',
    links: [{ label: 'Career', to: '/careers/' }],
  },
  {
    key: 'contact',
    title: 'Contact us',
    description:
      'Connect with Renny where every conversation shapes a stronger, smarter future.',
    links: [{ label: 'Contact us', to: '/contact/' }],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const activeData = MENU.find(m => m.key === activeSection);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-6 left-6 z-50 bg-[#0C183E] p-3 rounded"
        >
          <i className="ri-menu-3-fill text-white text-2xl font-helvetica" />
        </button>
      )}

      <div
        className={`fixed inset-0 z-40 bg-[#0C183E] text-white transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 left-6 z-50 p-3"
          >
            <i className="ri-close-large-line text-xl" />{' '}
            <span className="text-xl text-white font-helvetica">Close</span>
          </button>
        )}

        <div className="grid grid-cols-12 h-full">
          <div className="col-span-4 flex flex-col pt-24">
            {MENU.map(item => (
              <div
                key={item.key}
                onMouseEnter={() => setActiveSection(item.key)}
                className="px-10 py-4 font-helvetica flex justify-between items-center cursor-pointer hover:bg-white hover:text-black transition"
              >
                <span className="text-xl">{item.title}</span>
                <i className="ri-arrow-right-line text-xl" />
              </div>
            ))}
          </div>

          <div
            className={`col-span-4 font-helvetica px-10 py-8 transition-colors duration-300 ${
              activeSection ? 'bg-white text-[#0C183E]' : 'bg-[#0C183E]'
            }`}
          >
            {activeData && (
              <>
                <h2 className="text-2xl font-helvetica mb-4">
                  {activeData.title}
                </h2>
                {activeData.description && (
                  <p className="mb-6 text-sm text-gray-500">
                    {activeData.description}
                  </p>
                )}
                <ul className="space-y-4">
                  {activeData.links.map(link => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="flex justify-between font-helvetica items-center hover:scale-105 transition-transform duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                        <i className="ri-arrow-right-line" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className="col-span-4 h-full">
            <img
              src={NavbarImage}
              alt="Navbar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
