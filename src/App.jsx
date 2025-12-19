import { Routes, Route } from 'react-router-dom';

/* Pages */
import Home from './pages/Home';

/* About */
import About from './pages/About/About';
import Timeline from './pages/About/Timeline';
import Manufacturing from './pages/About/Manufacturing';
import Network from './pages/About/Network';
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

/* Contact */
import Contact from './pages/Contact/Contact';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* About */}
      <Route path="/company-overview-2/" element={<About />} />
      <Route path="/timeline/" element={<Timeline />} />
      <Route path="/manufacturing-units/" element={<Manufacturing />} />
      <Route path="/network/" element={<Network />} />
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

      {/* Career */}
      <Route path="/careers/" element={<Career />} />

      {/* Contact */}
      <Route path="/contact/" element={<Contact />} />
    </Routes>
  );
};

export default App;
