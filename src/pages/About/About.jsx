import React from 'react';
import aboutVideo from '../../assets/01-aboutVideo.webm';
import CountUp from 'react-countup';
import { useState } from 'react';

import icons1 from '../../assets/1a-about.svg';
import icons2 from '../../assets/2a-about.svg';
import icons3 from '../../assets/3a-about.svg';
const About = () => {
  const features = [
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
  ];
  const [openIndex, setOpenIndex] = useState(null);
  const toggleCard = index => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-full font-helvetica bg-black text-white">
      {/* ================= FULL SCREEN VIDEO ================= */}
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
          <section className="flex justify-center px-6 py-16 font-helvetica">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl w-full">
              {features.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`
          rounded-2xl border
          transition-all duration-500 ease-in-out
          overflow-hidden
          ${
            isOpen
              ? 'bg-[#0C183E] border-[#0C183E] shadow-xl'
              : 'bg-white border-gray-200 shadow-md hover:shadow-lg'
          }
        `}
                  >
                    {/* Header */}
                    <div className="px-8 pt-10 pb-6 flex flex-col items-center text-center">
                      {/* Icon */}
                      <img
                        src={item.icon}
                        alt={item.title}
                        className={`
              h-18 w-18 mb-6
              transition-all duration-500
              ${isOpen ? 'scale-110 brightness-0 invert' : 'scale-100'}
            `}
                      />

                      {/* Title */}
                      <h3
                        className={`
              text-lg font-semibold mb-6
              transition-colors duration-300
              ${isOpen ? 'text-white' : 'text-gray-800'}
            `}
                      >
                        {item.title}
                      </h3>

                      {/* Toggle Button */}
                      <button
                        onClick={() => toggleCard(index)}
                        className={`
              w-10 h-10 
              flex items-center justify-center
              transition-all duration-300
              ${
                isOpen
                  ? 'border-white text-white'
                  : 'border-gray-300 text-gray-600 hover:border-gray-500'
              }
            `}
                      >
                        <i
                          className={`
                ri-arrow-${isOpen ? 'up' : 'down'}-s-line
                text-2xl
                transition-transform duration-300
                ${isOpen ? 'rotate-180' : 'rotate-0'}
              `}
                        />
                      </button>
                    </div>

                    {/* Expandable Description */}
                    <div
                      className={`
            px-8
            overflow-hidden
            transition-all duration-500 ease-in-out
            ${isOpen ? 'max-h-48 pb-10 opacity-100' : 'max-h-0 opacity-0'}
          `}
                    >
                      <p
                        className={`
              text-sm leading-relaxed
              transition-colors duration-300
              ${isOpen ? 'text-gray-200' : 'text-gray-600'}
            `}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default About;
