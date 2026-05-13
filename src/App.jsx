import { lazy, Suspense, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Parallax from "./components/ParallaxSection";
import ScrollToTop from "./components/ScrollToTop.jsx";
import PageSpinner from "./components/PageSpinner.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

/* ── Pages ── */
const Home = lazy(() => import("./pages/Home"));

/* About */
const About        = lazy(() => import("./pages/About/About"));
const Manufacturing = lazy(() => import("./pages/About/Manufacturing"));
const Quality      = lazy(() => import("./pages/About/Quality"));
const DesignCentre = lazy(() => import("./pages/About/DesignCentre"));

/* Products */
const MSBillets    = lazy(() => import("./pages/Products/MSBillets"));
const WireRods     = lazy(() => import("./pages/Products/WireRods"));
const HRCoils      = lazy(() => import("./pages/Products/HRCoils"));
const ERW          = lazy(() => import("./pages/Products/ERW"));
const Scaffolding  = lazy(() => import("./pages/Products/Scaffolding"));
const ProductRange  = lazy(() => import("./pages/Products/ProductRange.jsx"));
const ProductRange2 = lazy(() => import("./pages/Products/ProductRange2.jsx"));

/* Investor Relations */
const Financials  = lazy(() => import("./pages/Investors/Financials"));
const Governance  = lazy(() => import("./pages/Investors/Governance"));
const Industry    = lazy(() => import("./pages/Investors/Industry"));
const IPODocs     = lazy(() => import("./pages/Investors/IPODocs"));
const IPOAV       = lazy(() => import("./pages/Investors/IPOAV"));
const Shareholding = lazy(() => import("./pages/Investors/Shareholding"));
const Policies    = lazy(() => import("./pages/Investors/Policies"));

/* EC */
const EC = lazy(() => import("./pages/EC/EC"));

/* Sustainability */
const Sustainability = lazy(() => import("./pages/Sustainability/Sustainability"));

/* Media */
const News       = lazy(() => import("./pages/Media/News"));
const Blogs      = lazy(() => import("./pages/Media/Blogs"));
const BlogDetail = lazy(() => import("./pages/Media/BlogDetail"));
const Events     = lazy(() => import("./pages/Media/Events"));

/* Career */
const Career     = lazy(() => import("./pages/Career/Career"));
const JobDetails = lazy(() => import("./pages/Career/JobDetails"));
const JobApply   = lazy(() => import("./pages/Career/JobApply.jsx"));

/* Contact */
const Contact = lazy(() => import("./pages/Contact/Contact"));

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    // Show spinner for a short duration while page content gets rendered
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="App relative min-h-screen overflow-x-hidden font-helvetica clip scroll-smooth no-scrollbar">
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/company-overview" element={<About />} />
          <Route path="/manufacturing-units" element={<Manufacturing />} />
          <Route path="/quality-standard" element={<Quality />} />
          <Route path="/design-centre" element={<DesignCentre />} />

          {/* Products */}
          <Route path="/ms-billets" element={<MSBillets />} />
          <Route path="/wire-rods" element={<WireRods />} />
          <Route path="/narrow-hrcoil" element={<HRCoils />} />
          <Route path="/erw-pipes-and-tubes" element={<ERW />} />
          <Route path="/scaffolding-formwork" element={<Scaffolding />} />
          <Route path="/product-range" element={<ProductRange />} />
          <Route path="/product-range-2" element={<ProductRange2 />} />

          {/* Investor Relations */}
          <Route path="/financials" element={<Financials />} />
          <Route path="/corporate-governance" element={<Governance />} />
          <Route path="/industry-report" element={<Industry />} />
          <Route path="/ipo" element={<IPODocs />} />
          <Route path="/ipo-audio-visual" element={<IPOAV />} />
          <Route path="/share-holding-pattern" element={<Shareholding />} />
          <Route path="/our-policies" element={<Policies />} />

          {/* EC */}
          <Route path="/ec/" element={<EC />} />

          {/* Sustainability */}
          <Route path="/sustainability" element={<Sustainability />} />

          {/* Media */}
          <Route path="/news-room" element={<News />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/events" element={<Events />} />

         

          {/* Contact */}
          <Route path="/contact-us" element={<Contact />} />

          {/* Career */}
          <Route path="/careers" element={<Career />} />
          <Route path="/careers/:jobId" element={<JobDetails />} />
          <Route path="/careers/:jobId/apply" element={<JobApply />} /> 
        </Routes>
      </Suspense>
      <Parallax />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
