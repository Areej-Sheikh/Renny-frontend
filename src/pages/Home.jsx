import React from 'react';

import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import HomepageBanner from '../assets/HomepageBanner.mp4';

import mission from '../assets/mission.png';
import vision from '../assets/vision.png';
import values from '../assets/values.png';

import MS from '../assets/MS-Billets.png';
import Scaffolding from '../assets/Scaffolding-Formwork.png';
import ERW from '../assets/ERW-Black-Galvanized-Pipes.png';
import Coil from '../assets/Narrow-width-Coils.png';
import rods from '../assets/Wire-Rods.png';

import CountUp from 'react-countup';
import worldmap from '../assets/worldmap.png';

import icons1 from '../assets/1a-about.svg';
import icons2 from '../assets/2a-about.svg';
import icons3 from '../assets/3a-about.svg';

import sustainability1 from '../assets/Sustainability1.png';
import sustainability2 from '../assets/Sustainability2.png';
import career1 from '../assets/career1.png';

import blog1 from '../assets/blog1.jpeg';
import blog2 from '../assets/blog2.jpeg';
import blog3 from '../assets/blog3.jpeg';
import blog4 from '../assets/blog4.jpeg';
const Home = () => {
  const navigate = useNavigate();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="flex flex-col font-helvetica h-screen">
      <Navbar />
      {/* Banner */}
      <div className="relative w-full h-[90%]">
        <video
          className="w-full h-full object-cover"
          src={HomepageBanner}
          autoPlay
          loop
          muted
        />
        <h1 className="absolute inset-10 flex items-end justify-start text-white text-5xl font-bold">
          Building A Future Together
        </h1>
      </div>
      {/* About Us */}
      <section className="flex flex-col items-center font-helvetica justify-center px-6 py-16">
        <h1 className="text-3xl font-bold mb-10">About Us</h1>
        <div className="flex flex-row items-start gap-10 max-w-7xl">
          {/* Left Content */}
          <div className="w-[65%] space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Founded in 1996, Renny Strips Limited is a fully integrated
              structural products manufacturer headquartered in Ludhiana,
              Punjab. The Company operates 3 integrated manufacturing units,
              providing end-to-end finished products.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Renny operates three induction furnaces with a total melting
              capacity of 199,200 TPA (versus an industry average of
              65,000–75,000 TPA), supported by two continuous casting lines and
              two rolling mills producing MS billets, wire rods, and
              narrow-width HR coils. A downstream unit manufactures ERW black
              and galvanized pipes and tubes, along with scaffolding and
              formwork systems, using largely in-house inputs, positioning Renny
              among the few vertically integrated players in India across this
              value chain.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Company’s scaffolding and formwork portfolio exceeds 1,000
              SKUs, supplied to customers across 5 continents and serves the
              construction, automotive, water, oil & gas, and fabrication
              sectors.
            </p>
            <button className="bg-[#20ADCD] text-white px-6 py-2 rounded-lg hover:bg-[#1b98b4] transition">
              Know More
            </button>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col w-[35%]">
            {/* Mission */}
            <div className="shadow-xl rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <img
                  src={mission}
                  alt="Mission"
                  className="bg-[#20ADCD] p-3 rounded-lg"
                />
                <div>
                  <p className="text-[#20ADCD] text-xs font-semibold">
                    MISSION
                  </p>
                  <h2 className="font-bold mb-2">
                    Building Stronger Foundations
                  </h2>
                  <p className="text-sm text-gray-600">
                    To manufacture high-quality steel products through
                    integrated processes, innovation, and operational
                    excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="shadow-xl rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <img
                  src={vision}
                  alt="Vision"
                  className="bg-[#20ADCD] p-3 rounded-lg"
                />
                <div>
                  <p className="text-[#20ADCD] text-xs font-semibold">VISION</p>
                  <h2 className="font-bold mb-2">
                    Leading the Future of Steel
                  </h2>
                  <p className="text-sm text-gray-600">
                    To become a globally trusted steel solutions provider known
                    for sustainability and reliability.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="shadow-xl rounded-xl p-6 hover:scale-105 transition-transform duration-300 sm:col-span-2">
              <div className="flex items-start gap-4">
                <img
                  src={values}
                  alt="Values"
                  className="bg-[#20ADCD] p-3 rounded-lg"
                />
                <div>
                  <p className="text-[#20ADCD] text-xs font-semibold">VALUES</p>
                  <h2 className="font-bold mb-2">
                    Driven by Strong Principles
                  </h2>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Quality & Consistency</li>
                    <li>Integrity & Transparency</li>
                    <li>Safety & Responsibility</li>
                    <li>Innovation & Growth</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Products */}
      <section className="flex flex-col items-center font-helvetica justify-center px-6 py-16">
        <h1 className="text-3xl font-bold mb-10">Our Products</h1>
        <div className="flex gap-2">
          <img
            src={MS}
            alt="MS Billets"
            className="h-[95%] transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
            onClick={() => navigate('/MS-billets/')}
          />
          <img
            src={rods}
            alt="Wire Rods"
            className="h-[95%] transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
            onClick={() => navigate('/wire-rods-2/')}
          />
          <img
            src={Coil}
            alt="HR Coils"
            className="h-[95%] transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
            onClick={() => navigate('/narrow-hrcoil/')}
          />
          <img
            src={ERW}
            alt="ERW Pipes"
            className="h-[95%] transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
            onClick={() => navigate('/erw-pipes-and-tubes/')}
          />
          <img
            src={Scaffolding}
            alt="Scaffolding"
            className="h-[95%] transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
            onClick={() => navigate('/scaffolding-formwork/')}
          />
        </div>
      </section>
      {/* Our Networks*/}
      <section className="flex flex-col items-center font-helvetica justify-center px-6 py-16">
        <h1 className="text-3xl font-bold mb-10">Our Networks</h1>
        <img src={worldmap} alt="World Map" className="h-full" />

        <div ref={ref} className="flex items-center justify-center gap-6 mt-6">
          <div className="border-t-2 border-b-2 px-6 py-4 text-center">
            <p className="text-5xl font-light text-blue">
              {inView ? <CountUp end={1000} duration={2} /> : 0} +
            </p>
            <p className="text-xl text-blue-900  mt-2">SKUs</p>
          </div>

          <div className="border-t-2 border-b-2 px-6 py-4 text-center">
            <p className="text-5xl font-light text-blue">
              {inView ? <CountUp end={199200} duration={3} separator="," /> : 0}{' '}
              TPA
            </p>
            <p className="text-xl text-blue-900  mt-2">Annual Production</p>
          </div>

          <div className="border-t-2 border-b-2 px-6 py-4 text-center">
            <p className="text-5xl font-light text-blue">
              {inView ? <CountUp end={1000} duration={2} /> : 0} +
            </p>
            <p className="text-xl text-blue-900  mt-2">Work Force</p>
          </div>

          <div className="border-t-2 border-b-2 px-6 py-4 text-center">
            <p className="text-5xl font-light text-blue">
              {inView ? <CountUp end={50} duration={2} /> : 0} +
            </p>
            <p className="text-xl text-blue-900  mt-2">Years of Experience</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center font-helvetica justify-center px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              icon: icons1,
              title: 'Precision Engineering and Manufacturing',
              desc: 'Specializes in manufacturing high precision, safety-critical components as per product specifications.',
            },
            {
              icon: icons2,
              title: 'Fabrication and Forging',
              desc: 'Advanced sheet metal processing with certified welding ensuring EN 1090 & ISO 3834 compliance.',
            },
            {
              icon: icons3,
              title: 'Customized Excellence',
              desc: 'Tailored solutions backed by a predominantly in-house raw material ecosystem ensuring consistent quality.',
            },
            {
              icon: icons1,
              title: 'CNC Machining and Finishing',
              desc: 'Automated precision engineering for consistent, high-quality components.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] p-12 text-center
                 hover:shadow-xl transition-shadow duration-500"
            >
              {/* Hover Overlay (diagonal fade-in) */}
              <div
                className="absolute inset-0 bg-[#0C183E] opacity-0 transform rotate-12 scale-0
                   group-hover:opacity-100 group-hover:scale-150 group-hover:rotate-0
                   transition-all duration-500 ease-out"
              />

              {/* Card Content */}
              <div className="relative z-10">
                <div className="mb-10 flex justify-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-20 w-20 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-300 mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex gap-9 items-center font-helvetica justify-center px-6 py-16 bg-gray-100">
        <div className=" w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-10">News</h1>
        </div>
        <div className="w-full flex flex-col items-center justify-center px-6 py-16">
          <h1 className="text-3xl font-bold mb-10">Investor Relation</h1>

          {/* Cards stacked vertically */}
          <div className="flex flex-col gap-6 w-full max-w-lg mb-8">
            {/* Card 1 */}
            <div className="border rounded-lg p-6 flex justify-between items-center shadow hover:shadow-xl transition-shadow duration-300">
              <div>
                <h3 className="text-lg font-semibold mb-2">Financials</h3>
                <p className="text-sm text-gray-500">Q1 (2025–26)</p>
              </div>
              <div>
                <button className="bg-blue text-white px-4 py-2 rounded hover:bg-blue transition">
                  Download
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border rounded-lg p-6 flex justify-between items-center shadow hover:shadow-xl transition-shadow duration-300">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Corporate Governance
                </h3>
                <p className="text-sm text-gray-500">Q1 (2025–26)</p>
              </div>
              <div>
                <button className="bg-blue text-white px-4 py-2 rounded hover:bg-blue transition">
                  Download
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border rounded-lg p-6 flex justify-between items-center shadow hover:shadow-xl transition-shadow duration-300">
              <div>
                <h3 className="text-lg font-semibold mb-2">Industry Report</h3>
                <p className="text-sm text-gray-500">Q1 (2025–26)</p>
              </div>
              <div>
                <button className="bg-blue text-white px-4 py-2 rounded hover:bg-blue transition">
                  Download
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="border rounded-lg p-6 flex justify-between items-center shadow hover:shadow-xl transition-shadow duration-300">
              <div>
                <h3 className="text-lg font-semibold mb-2">IPO Documents</h3>
                <p className="text-sm text-gray-500">Q4 (2024–25)</p>
              </div>
              <div>
                <button className="bg-blue text-white px-4 py-2 rounded hover:bg-blue transition">
                  Download
                </button>
              </div>
            </div>
          </div>

          {/* Stock Prices */}
          <div className="bg-gray-200 w-lg max-w-3xl rounded-lg p-4 flex justify-around text-lg font-semibold">
            <div>BSE: 93.90</div>
            <div>NSE: 93.63</div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center font-helvetica justify-center px-6 py-16 bg-white">
        <h1 className="text-3xl font-bold mb-10">Sustainability</h1>

        <div className="w-full max-w-7xl">
          <h2 className="text-2xl font-semibold mb-8 text-center">CBAM</h2>

          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              src={sustainability1}
              alt="Sustainability 1"
              className="w-full max-w-md rounded-lg shadow-md hover:shadow-2xl   transform hover:-translate-y-2   transition-all duration-300 ease-out"
            />

            <div className=" flex flex-col justify-center text-center lg:text-left max-w-md   bg-white rounded-xl p-8   shadow-md hover:shadow-2xl   transform hover:-translate-y-2   transition-all duration-300 ease-out">
              <div className="flex items-center justify-center lg:justify-between gap-6 mb-4">
                <p className="text-lg font-semibold">Careers</p>

                <Link to="/careers">
                  <img
                    src={career1}
                    alt="Career"
                    className="h-16 cursor-pointer "
                  />
                </Link>
              </div>

              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium esse natus quas impedit reiciendis rem deserunt
                ipsum eos delectus eum.
              </p>

              <Link to="/careers">
                <button className="mt-6 bg-blue text-white px-8 py-4 rounded-md  hover:bg-blue-800 transition">
                  Visit our career page
                </button>
              </Link>
            </div>

            <img
              src={sustainability2}
              alt="Sustainability 2"
              className="w-full max-w-md rounded-lg shadow-md hover:shadow-2xl   transform hover:-translate-y-2   transition-all duration-300 ease-out"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 px-6 py-16 font-helvetica">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* ================= Latest Blog ================= */}
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold mb-6">Latest Blog</h1>

            <Link
              to="/kwikstage-scaffolding/"
              className="
          group block bg-white rounded-xl overflow-hidden
          shadow-md hover:shadow-2xl
          transform hover:-translate-y-2
          transition-all duration-300
        "
            >
              <img
                src={blog1}
                alt="Kwikstage Scaffolding"
                className="w-full h-64 object-fit"
              />

              <div className="p-6">
                <h2 className="text-xl font-semibold text-blue group-hover:text-blue-800 transition">
                  Kwikstage Scaffolding Expert Insights for Better Construction
                  Performance
                </h2>

                <span className="block text-sm text-gray-500 mt-2">
                  December 9, 2025
                </span>

                <p className="text-gray-600 mt-4 line-clamp-4">
                  Construction projects demand dependable systems that can adapt
                  to diverse site challenges while ensuring productivity and
                  worker safety. Kwikstage Scaffolding has emerged as one of the
                  most reliable modular choices in modern construction.
                </p>

                <span className="inline-block mt-4 font-medium text-blue group-hover:text-blue-800 transition">
                  Read More →
                </span>
              </div>
            </Link>
          </div>

          {/* ================= Other Blogs ================= */}
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold mb-6">Other Blogs</h1>

            <div className="space-y-6">
              {/* Blog Card */}
              <Link
                to="/scaffolding-formworks-innovation/"
                className="
            group flex gap-4 bg-white rounded-xl p-4
            shadow-sm hover:shadow-lg
            transform hover:-translate-y-1
            transition-all duration-300
          "
              >
                <img
                  src={blog2}
                  alt=""
                  className="w-32 h-24 object-fit rounded-md"
                />

                <div>
                  <h2 className="font-semibold text-gray-800 group-hover:text-blue-800 transition">
                    Scaffolding and Formworks Frames Innovations Driving Faster
                    and Safer Building
                  </h2>

                  <span className="block text-sm text-gray-500 mt-1">
                    November 29, 2025
                  </span>

                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    Construction projects are getting more demanding as
                    structures rise higher...
                  </p>

                  <span className="text-sm font-medium text-blue group-hover:text-blue-800 transition">
                    Read More →
                  </span>
                </div>
              </Link>

              {/* Blog Card */}
              <Link
                to="/scaffolding-steel-props-jacks/"
                className="
            group flex gap-4 bg-white rounded-xl p-4
            shadow-sm hover:shadow-lg
            transform hover:-translate-y-1
            transition-all duration-300
          "
              >
                <img
                  src={blog3}
                  alt=""
                  className="w-32 h-24 object-fit rounded-md"
                />

                <div>
                  <h2 className="font-semibold text-gray-800 group-hover:text-blue-800 transition">
                    Ultimate Guide to Scaffolding Steel Props and Jacks for
                    Strength and Safety
                  </h2>

                  <span className="block text-sm text-gray-500 mt-1">
                    November 18, 2025
                  </span>

                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    Reliable propping systems can often make the difference
                    between a smooth operation...
                  </p>

                  <span className="text-sm font-medium text-blue group-hover:text-blue-800 transition">
                    Read More →
                  </span>
                </div>
              </Link>

              {/* Blog Card */}
              <Link
                to="/wire-rod-manufacturers-india/"
                className="
            group flex gap-4 bg-white rounded-xl p-4
            shadow-sm hover:shadow-lg
            transform hover:-translate-y-1
            transition-all duration-300
          "
              >
                <img
                  src={blog4}
                  alt=""
                  className="w-32 h-24 object-fit rounded-md"
                />

                <div>
                  <h2 className="font-semibold text-gray-800 group-hover:text-blue-800 transition">
                    Explore the Leading Wire Rod Manufacturers in India for
                    Superior Industrial Applications
                  </h2>

                  <span className="block text-sm text-gray-500 mt-1">
                    November 14, 2025
                  </span>

                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    Industry professionals look beyond availability — they seek
                    precision and performance...
                  </p>

                  <span className="text-sm font-medium text-blue group-hover:text-blue-800 transition">
                    Read More →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
