import React from 'react';
import Navbar from '../components/Navbar';
import HomepageBanner from '../assets/HomepageBanner.mp4';
import Footer from '../components/Footer';
import mission from '../assets/mission.png';
import vision from '../assets/vision.png';
import values from '../assets/values.png';
import MS from '../assets/MS-Billets.png';
import Scaffolding from '../assets/Scaffolding-Formwork.png';
import ERW from '../assets/ERW-Black-Galvanized-Pipes.png';
import Coil from '../assets/Narrow-width-Coils.png';
import rods from '../assets/Wire-Rods.png';
const Home = () => {
  return (
    <div className="flex flex-col font-helvetica h-screen">
      <Navbar />

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
      <section className="flex flex-col items-center font-helvetica justify-center px-6 py-16">
        <h1 className="text-3xl font-bold mb-10">Our Products</h1>
        <div className="flex gap-2">
          <img
            src={MS}
            alt=""
            className="h-[95%] transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={rods}
            alt=""
            className="h-[95%] transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={Coil}
            alt=""
            className="h-[95%] transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={ERW}
            alt=""
            className="h-[95%] transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={Scaffolding}
            alt=""
            className="h-[95%] transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
