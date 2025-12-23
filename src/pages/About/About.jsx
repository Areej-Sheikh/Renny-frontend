import React from 'react';
import aboutVideo from '../../assets/01-aboutVideo.webm';
import CountUp from 'react-countup';
import icons1 from '../../assets/1a-about.svg';
import icons2 from '../../assets/2a-about.svg';
import icons3 from '../../assets/3a-about.svg';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
const About = () => {
  return (
    <div className="w-full font-helvetica bg-black text-white">
      {/* ================= FULL SCREEN VIDEO ================= */}
      <Navbar />
      <section className="relative w-screen h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={aboutVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex items-end h-full">
          <div className="px-6 md:px-20 pb-12 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Company Overview
            </h2>
          </div>
        </div>
      </section>

      {/* 50 / 50 SECTION */}
      <section className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="bg-[#3f3f41] text-white px-6 md:px-16 py-16 space-y-8">
          <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
            Renny Strips Ltd: One of India’s Key Manufacturers of Customized
            Green Steel Solutions
          </h1>

          <p className="text-gray-200 leading-relaxed">
            Founded in 1996, Renny Strips Limited is a fully integrated
            structural products manufacturer headquartered in Ludhiana, Punjab.
            The Company operates three integrated manufacturing units, providing
            end-to-end finished products.
          </p>

          <p className="text-gray-200 leading-relaxed">
            Renny operates three induction furnaces with a total melting
            capacity of 199,200 TPA, supported by continuous casting lines and
            rolling mills. A downstream unit manufactures ERW pipes, tubes,
            scaffolding, and formwork systems using largely in-house inputs.
          </p>

          <p className="text-gray-200 leading-relaxed">
            Renny operates three induction furnaces with a total melting
            capacity of 199,200 TPA (versus an industry average of 65,000–75,000
            TPA), supported by two continuous casting lines and two rolling
            mills producing MS billets, wire rods, and narrow-width HR coils. A
            downstream unit manufactures ERW black and galvanized pipes and
            tubes, along with scaffolding and formwork systems, using largely
            in-house inputs, positioning Renny among the few vertically
            integrated players in India across this value chain.
          </p>

          <p className="text-gray-200 leading-relaxed">
            The Company’s scaffolding and formwork portfolio exceeds 1,000 SKUs,
            supplied to customers across 5 continents and serves the
            construction, automotive, water, oil & gas, and fabrication sectors.
          </p>

          {/* Numbered List */}
          <ol className="list-decimal list-inside space-y-2 text-gray-100 pt-4">
            <li>MS billets</li>
            <li>Wire rods</li>
            <li>Narrow-width HR coils</li>
            <li>ERW black and galvanized pipes and tubes</li>
            <li>Scaffolding and formwork system</li>
          </ol>
        </div>

        {/* RIGHT STATS */}
        <div className="bg-[#fff4dc] flex flex-col items-center justify-center text-center px-6 py-16 space-y-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-orange-400">
            Renny’s Competitive Backbone
          </h2>

          <div className="space-y-12">
            <div>
              <p className="text-5xl font-light text-sky-400">
                <CountUp end={1000} duration={2} /> +{' '}
              </p>
              <p className="text-xl text-orange-400 mt-2">SKUs</p>
            </div>

            <div>
              <p className="text-5xl font-light text-sky-400">
                <CountUp end={199200} duration={3} separator="," /> TPA{' '}
              </p>
              <p className="text-xl text-orange-400 mt-2">Annual Production</p>
            </div>

            <div>
              <p className="text-5xl font-light text-sky-400">
                <CountUp end={1000} duration={2} /> +{' '}
              </p>
              <p className="text-xl text-orange-400 mt-2">Work Force</p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= 4 GRID SECTION ================= */}
      <section className="w-full bg-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
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
                className="relative group overflow-hidden rounded-2xl
                     border border-gray-300 bg-white
                     shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                     p-12 text-center"
              >
                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 bg-[#0C183E]
                       transform scale-x-0 group-hover:scale-x-100
                       origin-left transition-transform duration-500 ease-out"
                ></div>

                {/* Card Content */}
                <div className="relative z-10">
                  {/* SVG ICON (INCREASED SIZE) */}
                  <div className="mb-10 flex justify-center">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-20 w-20
                           transition-all duration-300
                           group-hover:brightness-0 group-hover:invert"
                    />
                  </div>

                  {/* TITLE (BIGGER) */}
                  <h3
                    className="text-xl font-semibold text-gray-800
                         group-hover:text-white transition-colors duration-300 mb-5"
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION (BIGGER & CLEAN) */}
                  <p
                    className="text-gray-600 group-hover:text-gray-200
                         transition-colors duration-300
                         leading-relaxed text-base"
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
