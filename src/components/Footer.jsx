import { Link } from "react-router-dom";
const RennyLogo = "/assets/RennyLogo.webp";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Footer = () => {
  return (
    <footer className="bg-gray-200 font-helvetica text-gray-800">
      {/* ================= MAIN FOOTER ================= */}
      <motion.div
        className="mx-auto px-6 md:pr-16 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={item} className="space-y-4">
          <img
            src={RennyLogo}
            alt="Renny Logo"
            width={155}
            height={125}
            className="h-[100px] w-auto object-contain"
          />
          <p className="text-sm text-gray-600">
            In 1996, Renny Strips Ltd embarked on its dynamic journey. Founded
            under the prudent leadership of Mr. Binny Gupta, Renny Strips Ltd.
          </p>
        </motion.div>

        {/* COL 2 */}
        <motion.div variants={item} className="space-y-3">
          <h3 className="font-semibold">About Us</h3>
          <FooterLink to="/company-overview">Company Overview</FooterLink>
          <FooterLink to="/manufacturing-units">
            Manufacturing Process
          </FooterLink>
          <FooterLink to="/quality-standard">Quality & Standard</FooterLink>
          <FooterLink to="/design-centre">Design Centre</FooterLink>
        </motion.div>

        {/* COL 3 */}
        <motion.div variants={item} className="space-y-2">
          <h2 className="font-semibold">Products</h2>
          <FooterLink
            to="/erw-pipes-and-tubes"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            ERW Black & Galvanized Pipes & Tubes
          </FooterLink>
          <FooterLink
            to="/scaffolding-formwork"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            Scaffolding & Formwork System
          </FooterLink>
          <FooterLink
            to="/narrow-hrcoil"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            Narrow-width HR Coils
          </FooterLink>
          <FooterLink
            to="/wire-rods"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            Wire Rods
          </FooterLink>
          <FooterLink
            to="/ms-billets"
            className="block hover:translate-x-1 transition-transform text-[13px] uppercase font-medium text-gray-700 "
          >
            MS Billets
          </FooterLink>
        </motion.div>

        {/* COL 4 */}
        <motion.div variants={item} className="space-y-3">
          <h3 className="font-semibold">Investor Relations</h3>
          <FooterLink to="/financials">Financials</FooterLink>
          <FooterLink to="/corporate-governance">
            Corporate Governance
          </FooterLink>
          <FooterLink to="/industry-report">Industry Report</FooterLink>
          <FooterLink to="/ipo">IPO Documents</FooterLink>
          <FooterLink to="/ipo-audio-visual">IPO Audio Visual</FooterLink>
          <FooterLink to="/share-holding-pattern">
            Shareholding Pattern
          </FooterLink>
          <FooterLink to="/our-policies">Our Policies</FooterLink>
        </motion.div>

        {/* COL 5 */}
        <motion.div variants={item} className="space-y-5">
          <div className="space-y-3">
            <h3 className="font-semibold">EC</h3>
            <FooterLink to="/ec">EC</FooterLink>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Sustainability</h3>
            <FooterLink to="/sustainability">Sustainability</FooterLink>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Media</h3>
            <FooterLink to="/news-room">News Room</FooterLink>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/events">Events</FooterLink>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Career</h3>
            <FooterLink to="/careers">Career</FooterLink>
          </div>
        </motion.div>

        {/* COL 6 */}
        <motion.div variants={item} className="space-y-4">
          <h3 className="font-semibold">Connect with us</h3>

          <div className="flex justify-center gap-2">
            <a
              href="https://x.com/rennystrips?t=Zv74JfuWaVw3CHAxPHAQSA&s=08"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Renny Strips on X"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-black hover:opacity-80 transition-opacity shadow-md"
            >
              <span className="text-white text-md font-bold">𝕏</span>
            </a>

            <a
              href="https://www.facebook.com/rennypvtltd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Renny Strips on Facebook"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1877F2] hover:opacity-80 transition-opacity shadow-md"
            >
              <span className="text-white text-lg font-bold">
                <svg
                  className="w-5 h-5 mx-auto"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.487-.14-2.812-.14C12 2 10 3.2 10 6.5v3H7.5v4H10V22h4v-8.5z" />
                </svg>
              </span>
            </a>

            <a
              href="https://www.instagram.com/rennystrips/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Renny Strips on Instagram"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-80 transition-opacity shadow-md"
            >
              <span className="text-white text-md">
                <svg
                  className="w-5 h-5 mx-auto"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.22 2.428.47a4.902 4.902 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.25.637.42 1.363.47 2.428.047 1.066.058 1.405.058 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.22 1.79-.47 2.428a4.902 4.902 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.638.25-1.363.42-2.428.47-1.066.047-1.405.058-4.122.058-2.717 0-3.056-.01-4.122-.058-1.065-.05-1.79-.22-2.428-.47a4.902 4.902 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.637-.42-1.363-.47-2.428C2.01 15.056 2 14.717 2 12c0-2.717.01-3.056.058-4.122.05-1.065.22-1.79.47-2.428a4.9 4.9 0 0 1 1.15-1.77 4.9 4.9 0 0 1 1.77-1.15c.637-.25 1.363-.42 2.428-.47C8.944 2.01 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.25-3.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />
                </svg>
              </span>
            </a>

            <a
              href="https://www.linkedin.com/company/rennystrips/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Renny Strips on LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0077B5] hover:opacity-80 transition-opacity shadow-md"
            >
              <span className="text-white text-md font-bold">
                <svg
                  className="w-5 h-5 mx-auto"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.5 21.5h-5v-13h5v13zM4 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm17.5 15h-5v-7c0-2.28-1-3.5-3-3.5-2 0-3 1.25-3 3.5v7h-5v-13h5v1.82c.9-1.32 2.5-2.07 4.5-2.07 4 0 7 2.5 7 7.75v5.5z" />
                </svg>
              </span>
            </a>
          </div>

          <motion.div
            variants={item}
            className="space-y-1 text-sm text-gray-600"
          >
            <p className="font-semibold text-gray-800">Contact us</p>
            <p>+91 11 52526620-50, 1800 208 25166</p>
            <p>info@rennystrips.com</p>
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
        <div className="mx-auto px-6 md:px-16 py-4 flex flex-col sm:flex-row justify-between text-sm text-gray-600 gap-2">
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
      <svg
        className="w-3.5 h-3.5 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
      </svg>
      {children}
    </Link>
  </motion.div>
);

export default Footer;
