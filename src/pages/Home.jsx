import { useState } from 'react';

import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import HomepageBanner from '../assets/HomepageBanner.mp4';

import AboutUs from '../assets/AboutUs.png';

import MS from '../assets/MS-Billets.jpeg';
import Scaffolding from '../assets/Scaffolding-Formwork.png';
import ERW from '../assets/ERW-Black-Galvanized-Pipes.jpeg';
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

import news1 from '../assets/news1.jpg';
import news2 from '../assets/news2.jpeg';
import news3 from '../assets/news3.png';
import news4 from '../assets/news4.jpg';

const Home = () => {
  const navigate = useNavigate();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const products = [
    {
      title: 'MS Billets',
      image: MS,
      link: '/MS-billets/',
    },
    {
      title: 'Wire Rods',
      image: rods,
      link: '/wire-rods-2/',
    },
    {
      title: 'HR Coils',
      image: Coil,
      link: '/narrow-hrcoil/',
    },
    {
      title: 'ERW Pipes',
      image: ERW,
      link: '/erw-pipes-and-tubes/',
    },
    {
      title: 'Scaffolding Formwork',
      image: Scaffolding,
      link: '/scaffolding-formwork/',
    },
  ];
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
  const newsData = [
    {
      id: 1,
      title:
        'Renny Strips reshapes construction with sustainable scaffolding and formwork solutions',
      desc: 'Renny Strips is driving India’s urban revolution on a sustainable basis by providing cutting-edge scaffolding and formwork solutions that prioritise safety, reduce carbon footprint, and enable smart vertical growth across the country.',
      link: 'https://aceupdate.com/renny-strips-reshapes-construction-with-sustainable-scaffolding-and-formwork-solutions/',
      img: news1,
    },
    {
      id: 2,
      title:
        'Renny Strips Sets New Benchmarks in Scaffolding Safety and Reliability',
      desc: 'Steel formwork and scaffolding are the cornerstones of contemporary construction, infusing strength, efficiency, and security. Steel scaffolding offers a safe working platform at heights, enhances accessibility, and facilitates free movement of material and equipment.',
      link: 'https://odishabiznewz.com/news/renny-strips-sets-new-benchmarks-in-scaffolding-safety-and-reliability/',
      img: news2,
    },
    {
      id: 3,
      title:
        'Renny Strips Sets New Benchmarks in Scaffolding Safety and Reliability',
      desc: 'Steel formwork and scaffolding are the cornerstones of contemporary construction, infusing strength, efficiency, and security.',
      link: 'https://businessnewsthisweek.com/business/renny-strips-sets-new-benchmarks-in-scaffolding-safety-and-reliability/',
      img: news3,
    },
    {
      id: 4,
      title:
        'Renny Strips leads sustainable manufacturing with 22 MW solar power plant',
      desc: "Renny Strips, India's exclusive manufacturer of customised green steel solutions for the scaffolding and formwork industry, has installed a cutting-edge 22 MW solar power plant across 100 acres.",
      link: 'https://www.projectstoday.com/News/Renny-Strips-leads-sustainable-manufacturing-with-22-MW-solar-power-plant',
      img: news4,
    },
  ];

  return (
    <div className="flex flex-col font-helvetica h-screen">
      <Navbar />
      {/* Banner */}
      <section className="w-full h-[500px] flex flex-col md:flex-row items-center mt-15">
        {/* Left Text Column */}
        <div className="md:w-1/2 flex flex-col justify-center px-6 md:px-12 h-full">
          <h1 className="text-4xl text-8xl font-semibold text-black mb-4 font-jost">
            Building <br /> A Future <br /> Together
          </h1>
        </div>

        {/* Right Video Column */}
        <div className="md:w-3/2 h-full relative overflow-hidden rounded-lg">
          <video
            className="w-full h-full object-cover"
            src={HomepageBanner}
            autoPlay
            loop
            muted
          />
          {/* Optional overlay */}
        </div>
      </section>

      {/* About Us */}
      <section className="flex flex-col items-center font-helvetica justify-center  mt-10">
        <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
          {/* Background Image */}
          <img
            src={AboutUs}
            alt="About Us"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-white max-w-3xl mb-4 leading-relaxed">
              In 1996, Renny Strips Ltd embarked on its dynamic journey. Renny
              Strips Ltd. aimed to carve a niche in producing Innovative,
              Sustainable & Industry-fit Steel Products at Competitive Prices.
            </p>
            <p className="text-white max-w-3xl leading-relaxed">
              Founded in 1996, Renny Strips Limited is a fully integrated
              structural products manufacturer headquartered in Ludhiana,
              Punjab. The Company operates 3 integrated manufacturing units,
              providing end-to-end finished products.
            </p>
          </div>
        </div>
      </section>
      {/* Our Products */}
      <section className="flex flex-col items-center font-helvetica justify-center px-6 py-16">
        <h1 className="text-3xl font-bold mb-10 w-full text-left">
          Our Products
        </h1>

        <div className="flex h-105 overflow-hidden w-full max-w-7xl">
          {products.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.link)}
              className="
          group relative flex-1 hover:flex-[5]
          transition-all duration-500 ease-in-out
          cursor-pointer overflow-hidden
        "
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />

              <div
                className="
            relative z-10 h-full w-full
            flex items-end justify-end
            group-hover:justify-center
            transition-all duration-500
            p-6
          "
              >
                <div
                  className="
              w-full text-white
              flex flex-col items-end
              group-hover:items-center
              text-right group-hover:text-center
              transition-all duration-500
            "
                >
                  <h1
                    className="text-lg font-semibold tracking-wide [writing-mode:vertical-rl] 
    [text-orientation:mixed] group-hover:[writing-mode:horizontal-tb] transition-all duration-500
  "
                  >
                    {item.title}
                  </h1>

                  <button
                    className="
                mt-4 px-4 py-2 border border-white text-sm
                opacity-0 translate-y-4
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-500 delay-150
              "
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Networks*/}
      <section className="flex flex-col items-center font-helvetica justify-center px-6 py-16">
        <h1 className="text-3xl font-bold mb-10 w-full text-left">
          Our Networks
        </h1>
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
      {/* Features Section */}
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
      {/* News Section */}
      <section className="font-helvetica bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start justify-between">
          {/* ================= News Section ================= */}
          <div className="w-full lg:w-3/4 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-12">News</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-xl">
              {newsData.map(news => (
                <div
                  key={news.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-lg transition"
                >
                  <img
                    src={news.img}
                    alt={news.title}
                    className="w-full h-40 object-cover"
                    loading="lazy"
                  />

                  <div className="p-6 flex flex-col">
                    <h3 className="text-base font-semibold mb-3 line-clamp-2">
                      {news.title}
                    </h3>

                    <p className="text-sm text-gray-600 line-clamp-3">
                      {news.desc}
                    </p>

                    <a
                      href={news.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block font-medium text-blue group-hover:text-blue-800 transition"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= Investor Relation ================= */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-12">Investor Relations</h1>

            {/* Investor Cards */}
            <div className="flex flex-col gap-6 w-full max-w-xl mb-12">
              {[
                { title: 'Financials', period: 'Q1 (2025–26)' },
                { title: 'Corporate Governance', period: 'Q1 (2025–26)' },
                { title: 'Industry Report', period: 'Q1 (2025–26)' },
                { title: 'IPO Documents', period: 'Q4 (2024–25)' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border-gray-100 rounded-xl p-6 flex items-center justify-between shadow-sm hover:shadow-lg transition"
                >
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.period}</p>
                  </div>

                  <button className="bg-blue text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-800 transition">
                    Download
                  </button>
                </div>
              ))}
            </div>

            {/* Stock Prices */}
            <div className="bg-white w-full max-w-xl rounded-xl p-6 flex justify-around shadow-sm">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">BSE</p>
                <p className="text-lg font-semibold">₹93.90</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">NSE</p>
                <p className="text-lg font-semibold">₹93.63</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="flex flex-col items-center font-helvetica justify-center px-6 py-16 bg-white">
        <h1 className="text-3xl font-bold mb-10 w-full text-left">
          Sustainability
        </h1>
        <div className="w-full max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full">
              <h2 className="text-2xl font-semibold mb-8 text-center">CBAM</h2>

              <img
                src={sustainability1}
                alt="Sustainability 1"
                className="w-full max-w-md rounded-lg shadow-md hover:shadow-2xl   transform hover:-translate-y-2   transition-all duration-300 ease-out"
              />
            </div>

            <div className="w-full">
              <h2 className="text-2xl font-semibold mb-8 text-center">CBAM</h2>
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
            </div>
            <div className="w-full">
              <h2 className="text-2xl font-semibold mb-8 text-center">CBAM</h2>

              <img
                src={sustainability2}
                alt="Sustainability 2"
                className="w-full max-w-md rounded-lg shadow-md hover:shadow-2xl   transform hover:-translate-y-2   transition-all duration-300 ease-out"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section */}
      <section className="bg-gray-100 px-6 py-16 font-helvetica">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* ================= Latest Blog ================= */}
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold mb-6 w-full text-left">
              Latest Blog
            </h1>
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
            <h1 className="text-2xl font-bold mb-6 w-full text-left">
              Other Blogs
            </h1>

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
