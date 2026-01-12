import { Link } from 'react-router-dom';
import RennyLogo from '../assets/RennyLogo.png';
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa6';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const socialLinks = [
  {
    icon: FaXTwitter,
    url: 'https://x.com/rennystrips?t=Zv74JfuWaVw3CHAxPHAQSA&s=08',
    color: 'text-black',
  },
  {
    icon: FaFacebookF,
    url: 'https://www.facebook.com/rennypvtltd',
    color: 'text-[#1877F2]',
  },
  {
    icon: FaLinkedinIn,
    url: 'https://www.linkedin.com/company/rennystrips/',
    color: 'text-[#0A66C2]',
  },
  {
    icon: FaInstagram,
    url: 'https://www.instagram.com/rennystrips/',
    color: 'text-[#E4405F]',
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-200 font-helvetica text-gray-800">
      {/* ================= MAIN FOOTER ================= */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* COL 1 */}
        <motion.div variants={item} className="space-y-4">
          <img src={RennyLogo} alt="Renny Logo" className="h-25" />
          <p className="text-sm text-gray-600">
            In 1996, Renny Strips Ltd embarked on its dynamic journey. Founded
            under the prudent leadership of Mr. Binny Gupta, Renny Strips Ltd.
          </p>
        </motion.div>

        {/* COL 2 */}
        <motion.div variants={item} className="space-y-3">
          <h3 className="font-semibold">About Us</h3>
          <FooterLink to="/company-overview-2">Company Overview</FooterLink>
          <FooterLink to="/manufacturing-units">
            Manufacturing Process
          </FooterLink>
          <FooterLink to="/quality-standard">Quality & Standard</FooterLink>
          <FooterLink to="/design-centre">Design Centre</FooterLink>
        </motion.div>

        {/* COL 3 */}
        <motion.div variants={item} className="space-y-3">
          <h3 className="font-semibold">Products</h3>
          <FooterLink>MS Billets</FooterLink>
          <FooterLink>Wire Rods</FooterLink>
          <FooterLink>Narrow-width HR Coils</FooterLink>
          <FooterLink>ERW Black & Galvanized Pipes & Tubes</FooterLink>
          <FooterLink>Scaffolding & Formwork</FooterLink>
        </motion.div>

        {/* COL 4 */}
        <motion.div variants={item} className="space-y-3">
          <h3 className="font-semibold">Investor Relations</h3>
          <FooterLink to="/financials/">Financials</FooterLink>
          <FooterLink to="/corporate-governance/">
            Corporate Governance
          </FooterLink>
          <FooterLink to="/industry-report/">Industry Report</FooterLink>
          <FooterLink to="/ipo/">IPO Documents</FooterLink>
          <FooterLink to="/ipo-audio-visual/">IPO Audio Visual</FooterLink>
          <FooterLink to="/Share-holding-pattern/">
            Shareholding Pattern
          </FooterLink>
          <FooterLink to="/our-policies/">Our Policies</FooterLink>
        </motion.div>

        {/* COL 5 */}
        <motion.div variants={item} className="space-y-5">
          <div>
            <h3 className="font-semibold">EC</h3>
            <p className="text-sm text-gray-600">EC</p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Sustainability</h3>
            <FooterLink>Sustainability</FooterLink>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Media</h3>
            <FooterLink to="/news-room">News Room</FooterLink>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/events">Events</FooterLink>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Career</h3>
            <FooterLink to="/career">Career</FooterLink>
          </div>
        </motion.div>

        {/* COL 6 */}
        <motion.div variants={item} className="space-y-4">
          <h3 className="font-semibold">Connect with us</h3>

          <motion.div variants={container} className="flex gap-4">
            {socialLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center  rounded-tr-lg bg-gray-100 ${item.color} hover:bg-gray-200 transition-all duration-300`}
                  variants={item}
                >
                  <Icon className="text-lg" />
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            variants={item}
            className="space-y-1 text-sm text-gray-600"
          >
            <p className="font-semibold text-gray-800">Contact us</p>
            <p>+91 11 52526620-50, 1800 208 25166</p>
            <p>info@renny.com</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ================= BOTTOM BAR ================= */}
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="border-t border-gray-300"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between text-sm text-gray-600 gap-2">
          <div>© Renny</div>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-blue-800">
              Privacy Notice
            </Link>
            <Link to="/terms" className="hover:text-blue-800">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-blue-800">
              Cookie Policy
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

const FooterLink = ({ to, children }) => (
  <motion.div variants={item}>
    <Link
      to={to}
      className="flex items-center gap-1 text-[13px] uppercase font-medium text-gray-700 hover:font-semibold hover:text-blue-900 hover:translate-x-1 transition-all"
    >
      <i className="ri-arrow-right-s-line text-sm" />
      {children}
    </Link>
  </motion.div>
);

export default Footer;
