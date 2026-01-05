import { Routes, Route } from 'react-router-dom';
/* Pages */
import Home from './pages/Home';

/* About */
import About from './pages/About/About';
import Manufacturing from './pages/About/Manufacturing';
import Quality from './pages/About/Quality';
import DesignCentre from './pages/About/DesignCentre';

/* Products */
import MSBillets from './pages/Products/MSBillets';
import WireRods from './pages/Products/WireRods';
import HRCoils from './pages/Products/HRCoils';
import ERW from './pages/Products/ERW';
import Scaffolding from './pages/Products/Scaffolding';

/* Investor Relations */
import Financials from './pages/Investors/Financials';
import Governance from './pages/Investors/Governance';
import Industry from './pages/Investors/Industry';
import IPODocs from './pages/Investors/IPODocs';
import IPOAV from './pages/Investors/IPOAV';
import Shareholding from './pages/Investors/Shareholding';
import Policies from './pages/Investors/Policies';

/* EC */
import EC from './pages/EC/EC';

/* Sustainability */
import Sustainability from './pages/Sustainability/Sustainability';
import Community from './pages/Sustainability/Community';

/* Media */
import News from './pages/Media/News';
import Blogs from './pages/Media/Blogs';
import Events from './pages/Media/Events';

/* Career */
import Career from './pages/Career/Career';
import JobDetails from './pages/Career/JobDetails';

/* Contact */
import Contact from './pages/Contact/Contact';
/* Media Blogs */
import KwikstageScaffolding from './pages/Media/Blogs/KwikstageScaffolding';
import ScaffoldingFormworksInnovation from './pages/Media/Blogs/ScaffoldingFormworksInnovation';
import ScaffoldingSteelPropsJacks from './pages/Media/Blogs/ScaffoldingSteelPropsJacks';
import WireRodManufacturersIndia from './pages/Media/Blogs/WireRodManufacturersIndia';
import TopRinglockScaffolding from './pages/Media/Blogs/TopRinglockScaffolding';
import SquareHollowPipe from './pages/Media/Blogs/SquareHollowPipe';
import ForgingBillets from './pages/Media/Blogs/ForgingBillets';
import DesignCentreBlog from './pages/Media/Blogs/DesignCentreBlog';
import ScaffoldingFormworkCompany from './pages/Media/Blogs/ScaffoldingFormworkCompany';
import ERWPipeManufacturer from './pages/Media/Blogs/ERWPipeManufacturer';
import SustainableFuture from './pages/Media/Blogs/SustainableFuture';
import BestScaffoldingFormwork from './pages/Media/Blogs/BestScaffoldingFormwork';
import GIPipesTubes from './pages/Media/Blogs/GIPipesTubes';
import NarrowHRCoilManufacturing from './pages/Media/Blogs/NarrowHRCoilManufacturing';
import MSBlackRoundPipes from './pages/Media/Blogs/MSBlackRoundPipes';
import GlobalScaffolding from './pages/Media/Blogs/GlobalScaffolding';
import PrecisionEngineering from './pages/Media/Blogs/PrecisionEngineering';
import ForgingBilletsPrecision from './pages/Media/Blogs/ForgingBilletsPrecision';
import WireRodsPrecision from './pages/Media/Blogs/WireRodsPrecision';
import ERWPipesTrends from './pages/Media/Blogs/ERWPipesTrends';
import ConstructionRevolution from './pages/Media/Blogs/ConstructionRevolution';
import GlobalERWPipes from './pages/Media/Blogs/GlobalERWPipes';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Parallax from './components/ParallaxSection';
import ScrollToTop from './components/ScrollToTop.jsx';
const App = () => {
  return (
    <div className="App relative min-h-screen overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/company-overview-2/" element={<About />} />
        <Route path="/manufacturing-units/" element={<Manufacturing />} />
        <Route path="/quality-standard/" element={<Quality />} />
        <Route path="/design-centre/" element={<DesignCentre />} />

        {/* Products */}
        <Route path="/MS-billets/" element={<MSBillets />} />
        <Route path="/wire-rods-2/" element={<WireRods />} />
        <Route path="/narrow-hrcoil/" element={<HRCoils />} />
        <Route path="/erw-pipes-and-tubes/" element={<ERW />} />
        <Route path="/scaffolding-formwork/" element={<Scaffolding />} />

        {/* Investor Relations */}
        <Route path="/financials/" element={<Financials />} />
        <Route path="/corporate-governance/" element={<Governance />} />
        <Route path="/industry-report/" element={<Industry />} />
        <Route path="/ipo/" element={<IPODocs />} />
        <Route path="/ipo-audio-visual/" element={<IPOAV />} />
        <Route path="/Share-holding-pattern/" element={<Shareholding />} />
        <Route path="/our-policies/" element={<Policies />} />

        {/* EC */}
        <Route path="/ec/" element={<EC />} />

        {/* Sustainability */}
        <Route path="/sustainability/" element={<Sustainability />} />
        <Route path="/community-development/" element={<Community />} />

        {/* Media */}
        <Route path="/news-room/" element={<News />} />
        <Route path="/blog/" element={<Blogs />} />
        <Route path="/events/" element={<Events />} />

        {/* Media Blogs */}
        <Route
          path="/kwikstage-scaffolding/"
          element={<KwikstageScaffolding />}
        />
        <Route
          path="/scaffolding-formworks-innovation/"
          element={<ScaffoldingFormworksInnovation />}
        />
        <Route
          path="/scaffolding-steel-props-jacks/"
          element={<ScaffoldingSteelPropsJacks />}
        />
        <Route
          path="/wire-rod-manufacturers-india/"
          element={<WireRodManufacturersIndia />}
        />
        <Route
          path="/top-ringlock-scaffolding-manufacturer/"
          element={<TopRinglockScaffolding />}
        />
        <Route
          path="/square-hollow-pipe-manufacturers/"
          element={<SquareHollowPipe />}
        />
        <Route path="/forging-billets/" element={<ForgingBillets />} />
        <Route path="/ltd-design-centre/" element={<DesignCentreBlog />} />
        <Route
          path="/scaffolding-and-formwork-company/"
          element={<ScaffoldingFormworkCompany />}
        />
        <Route
          path="/the-right-erw-pipe-manufacturer/"
          element={<ERWPipeManufacturer />}
        />
        <Route
          path="/building-a-strong-sustainable-future/"
          element={<SustainableFuture />}
        />
        <Route
          path="/best-scaffolding-formwork-manufacturers/"
          element={<BestScaffoldingFormwork />}
        />
        <Route path="/gi-pipes-tubes/" element={<GIPipesTubes />} />
        <Route
          path="/key-narrow-hr-coil-manufacturing/"
          element={<NarrowHRCoilManufacturing />}
        />
        <Route path="/ms-black-round-pipes/" element={<MSBlackRoundPipes />} />
        <Route
          path="/global-powerhouse-in-scaffolding-formwork/"
          element={<GlobalScaffolding />}
        />
        <Route
          path="/precision-engineering-for-structural-excellence/"
          element={<PrecisionEngineering />}
        />
        <Route
          path="/forging-billets-precision-engineered/"
          element={<ForgingBilletsPrecision />}
        />
        <Route
          path="/wire-rods-precision-performance/"
          element={<WireRodsPrecision />}
        />
        <Route
          path="/trends-and-market-dynamics-of-erw-pipes/"
          element={<ERWPipesTrends />}
        />
        <Route
          path="/revolutionizing-the-construction-industry/"
          element={<ConstructionRevolution />}
        />
        <Route
          path="/global-trends-in-erw-ms-black-pipes/"
          element={<GlobalERWPipes />}
        />

        {/* Career */}
        <Route path="/career/" element={<Career />} />

        {/* Contact */}
        <Route path="/contact-us/" element={<Contact />} />
        <Route path="/careers/:jobId" element={<JobDetails />} />
      </Routes>
      <Parallax />
      <Footer />
    </div>
  );
};

export default App;
