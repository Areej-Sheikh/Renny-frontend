import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const SIDEBAR_LINKS = [
  { title: 'Financials', path: '/financials' },
  { title: 'Corporate Governance', path: '/corporate-governance' },
  { title: 'Industry Report', path: '/industry-report' },
  { title: 'IPO Documents', path: '/ipo' },
  { title: 'IPO Audio Visual', path: '/ipo-audio-visual' },
  { title: 'Shareholding Pattern', path: '/Share-holding-pattern' },
  { title: 'Our Policies', path: '/our-policies' },
];

const InvestorSidebar = () => {
  const location = useLocation();
  const brandColor = '#292C44';
  const subHeadingFont =
    "font-['Helvetica','Arial',sans-serif] text-[15px] font-semibold";
  const mainHeadingFont =
    "font-['Helvetica','Arial',sans-serif] text-[27px] font-semibold";
  const btnClass =
    "text-white px-5 py-2.5 rounded-lg text-[14px] font-medium hover:opacity-90 transition-all duration-300 font-['Helvetica','Arial',sans-serif]";

  const normalizePath = path => path.replace(/\/$/, '');

  return (
    <aside className="col-span-12 lg:col-span-4 bg-gradient-to-t to-[#262731] from-[#879cefe6] px-10 py-5 lg:py-5 rounded-3xl lg:sticky top-20">
      <motion.h4
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={`${mainHeadingFont} mb-10 text-white`}
      >
        Other Information
      </motion.h4>

      <div className="flex flex-col gap-5 text-sm">
        {SIDEBAR_LINKS.filter(
          item => normalizePath(item.path) !== normalizePath(location.pathname)
        ).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="bg-white border  border-gray-100 rounded-xl px-6 py-3 flex items-center justify-between shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className={subHeadingFont}>{item.title}</h3>
            <Link to={item.path}>
              <button
                className={btnClass}
                style={{ backgroundColor: brandColor }}
              >
                View
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </aside>
  );
};

export default InvestorSidebar;
