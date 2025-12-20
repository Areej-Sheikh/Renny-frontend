import { Link } from 'react-router-dom';
import RennyLogo from '../assets/RennyLogo.png';

const Footer = () => {
  const socialLinks = [
    {
      iconClass: 'ri-twitter-x-line',
      url: 'https://x.com/rennystrips?t=Zv74JfuWaVw3CHAxPHAQSA&s=08',
    },
    {
      iconClass: 'ri-facebook-fill',
      url: 'https://www.facebook.com/rennypvtltd?mibextid=ZbWKwL',
    },
    {
      iconClass: 'ri-linkedin-fill',
      url: 'https://www.linkedin.com/company/rennystrips/',
    },
    {
      iconClass: 'ri-instagram-line',
      url: 'https://www.instagram.com/rennystrips/?igsh=MW03cndlYWlwdm9vcg%3D%3D#',
    },
  ];

  return (
    <footer className="bg-gray-200 text-black py-10 px-5 font-helvetica">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_0.6fr] gap-10">
        <div className="space-y-4 ">
          <img src={RennyLogo} alt="Logo" className="h-16" />
          <p>
            In 1996, Renny Strips Ltd embarked on its dynamic journey. Founded
            under the prudent leadership of Mr. Binny Gupta, Renny Strips Ltd.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:translate-x-1 text-gray-700 hover:text-blue-800"
              >
                <i className={`${link.iconClass} text-2xl`} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 - About Us */}
        <div className="space-y-2 flex flex-col items-start">
          <h2 className="font-semibold">About Us</h2>
          <Link
            to="/company-overview-2"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            Company Overview
          </Link>
          <Link
            to="/manufacturing-units"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            Manufacturing Process
          </Link>
          <Link
            to="/timeline"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            Timeline
          </Link>
          <Link
            to="/network"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            Network
          </Link>
          <Link
            to="/quality-standard"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            Quality & Standard
          </Link>
          <Link
            to="/design-centre"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            Design Centre
          </Link>
        </div>

        {/* Column 3 - Products */}
        <div className="space-y-2">
          <h2 className="font-semibold">Products</h2>
          <Link
            to="/MS-billets"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            MS Billets
          </Link>
          <Link
            to="/wire-rods-2"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            Wire Rods
          </Link>
          <Link
            to="/narrow-hrcoil"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            Narrow-width HR Coils
          </Link>
          <Link
            to="/erw-pipes-and-tubes"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            ERW Black & Galvanized Pipes & Tubes
          </Link>
          <Link
            to="/scaffolding-formwork"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            Scaffolding & Formwork System
          </Link>
        </div>

        {/* Column 4 - Investor Relations */}
        <div className="space-y-2">
          <h2 className="font-semibold">Investor Relations</h2>
          <Link
            to="/financials"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            Financials
          </Link>
          <Link
            to="/corporate-governance"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            Corporate Governance
          </Link>
          <Link
            to="/industry-report"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            Industry Report
          </Link>
          <Link
            to="/ipo"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            IPO Documents
          </Link>
          <Link
            to="/ipo-audio-visual"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            IPO Audio Visual
          </Link>
          <Link
            to="/Share-holding-pattern"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            Shareholding Pattern
          </Link>
          <Link
            to="/our-policies"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            Our Policies
          </Link>
        </div>

        {/* Column 5 - EC & Sustainability */}
        <div className="space-y-4 mb-25">
          <div>
            <h2 className="font-semibold">EC</h2>
            <p>EC</p>
          </div>
          <div>
            <h2 className="font-semibold">Sustainability</h2>
            <Link
              to="/community-development"
              className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
            >
              Community Development
            </Link>
            <Link
              to="/sustainability"
              className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
            >
              Sustainability
            </Link>
          </div>
        </div>

        {/* Column 6 - Media, Career, Contact */}
        <div className="space-y-4 mb-15">
          <div>
            <h2 className="font-semibold">Media</h2>
            <Link
              to="/blog"
              className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
            >
              Blog
            </Link>
            <Link
              to="/events"
              className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
            >
              Events
            </Link>
          </div>
          <div>
            <h2 className="font-semibold">Career</h2>
            <Link
              to="/careers"
              className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
            >
              Career
            </Link>
          </div>
          <div>
            <h2 className="font-semibold">Contact Us</h2>
            <Link
              to="/contact"
              className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
