import BlogCard from '../../components/BlogCard.jsx';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import blog1 from '../../assets/blog1.jpeg';
import blog2 from '../../assets/blog2.jpeg';
import blog3 from '../../assets/blog3.jpeg';
import blog4 from '../../assets/blog4.jpeg';
import blog5 from '../../assets/blog5.jpg';
import blog6 from '../../assets/blog6.jpg';
import blog7 from '../../assets/blog7.jpg';
import blog8 from '../../assets/blog8.jpg';
import blog9 from '../../assets/blog9.jpeg';
import blog10 from '../../assets/blog10.jpg';
import blog11 from '../../assets/blog11.png';
import blog12 from '../../assets/blog12.png';
import blog13 from '../../assets/blog13.png';
import blog14 from '../../assets/blog14.jpg';
import blog15 from '../../assets/blog15.jpeg';
import blog16 from '../../assets/blog16.jpg';
import blog17 from '../../assets/blog17.jpg';
import blog18 from '../../assets/blog18.jpg';
import blog19 from '../../assets/blog19.jpg';
import blog20 from '../../assets/blog20.jpg';
import blog21 from '../../assets/blog21.jpg';
import blog22 from '../../assets/blog22.jpg';
import { useScroll, useTransform, useInView } from 'framer-motion';
import blogsbanner from '../../assets/blogsbanner.webp';
import newsvideo from '../../assets/newsvideo.webm';
const blogsData = [
  {
    id: 1,
    title:
      'Kwikstage Scaffolding Expert Insights for Better Construction Performance',
    date: 'December 9, 2025',
    excerpt:
      'Construction projects demand dependable systems that can adapt to diverse site challenges while ensuring productivity and worker safety. Kwikstage Scaffolding has emerged as one of the most reliable modular choices in modern construction.',
    image: blog1,
    link: '/kwikstage-scaffolding/',
  },
  {
    id: 2,
    title:
      'Scaffolding and Formworks Frames Innovations Driving Faster and Safer Building',
    date: 'November 29, 2025',
    excerpt:
      'Construction projects are getting more demanding as structures rise higher, timelines shrink, and safety expectations grow stronger.',
    image: blog2,
    link: '/scaffolding-formworks-innovation/',
  },
  {
    id: 3,
    title:
      'Ultimate Guide to Scaffolding Steel Props and Jacks for Strength and Safety',
    date: 'November 18, 2025',
    excerpt:
      'Reliable propping systems can often make the difference between a smooth operation and one fraught with instability.',
    image: blog3,
    link: '/scaffolding-steel-props-jacks/',
  },
  {
    id: 4,
    title:
      'Explore the Leading Wire Rod Manufacturers in India for Superior Industrial Applications',
    date: 'November 14, 2025',
    excerpt:
      'Industry professionals look beyond availability — they seek precision in manufacturing and steel solutions that genuinely perform.',
    image: blog4,
    link: '/wire-rod-manufacturers-india/',
  },
  {
    id: 5,
    title:
      'Top Qualities to Look for in a Reliable Ringlock Scaffolding Manufacturer in India',
    date: 'October 23, 2025',
    excerpt:
      'When it comes to selecting a dependable Ringlock Scaffolding Manufacturer in India, the decision goes far beyond just comparing prices or delivery timelines. The right manufacturer ensures your construction project stands on a foundation of safety, strength, and sustainability. ',
    image: blog5,
    link: '/top-ringlock-scaffolding-manufacturer/',
  },
  {
    id: 6,
    title:
      'GI Square Hollow Pipe Manufacturers in India Providing Durable Solutions for Industries',
    date: 'October 22, 2025',
    excerpt:
      'GI Square Hollow Pipe Manufacturers in India play a pivotal role in supplying high-quality steel solutions that meet the demanding requirements of multiple industries.',
    image: blog6,
    link: '/square-hollow-pipe-manufacturers',
  },
  {
    id: 7,
    title: 'Renny Forging Billets: Precision-Engineered for Performance',
    date: 'September 24, 2025',
    excerpt:
      'Renny Strips stands among the foremost manufacturers of forging billets in India, delivering high-performance billets and blooms that meet the stringent demands of global industries. ',
    image: blog7,
    link: '/forging-billets',
  },
  {
    id: 8,
    title:
      'Renny Strips Ltd Design Centre: One of India’s Key Hubs for Customized Green Steel Solutions',
    date: 'September 22, 2025',
    excerpt:
      'Renny Strips Ltd stands among a select league of globally driven Indian structural steel manufacturers with complete vertical integration from hot rolling and forging to scaffolding and formwork systems, tube forming & precision fabrication.',
    image: blog8,
    link: '/ltd-design-centre',
  },
  {
    id: 9,
    title:
      'Trusted Scaffolding and Formwork Company in India Delivering Safety and Strength',
    date: 'September 16, 2025',
    excerpt:
      'Renny Strips stands out as a leading Scaffolding and Formwork Company in India, committed to providing robust construction solutions that prioritize both safety and structural strength. ',
    image: blog9,
    link: '/scaffolding-and-formwork-company',
  },
  {
    id: 10,
    title: 'How to Choose the Right ERW Pipe Manufacturer in India',
    date: 'August 28, 2025',
    excerpt:
      'When it comes to construction, infrastructure, oil & gas, and industrial projects, ERW (Electric Resistance Welded) pipes play a vital role. They are used for structural strength, fluid transportation, and precision engineering. With so many ERW pipe manufacturers in India, selecting the right partner can feel overwhelming.',
    image: blog10,
    link: '/the-right-erw-pipe-manufacturer',
  },
  {
    id: 11,
    title:
      'India Rising: Renny’s Role in Building a Strong, Sustainable Future',
    date: 'August 22, 2025',
    excerpt:
      'India is still young, vibrant, and evolving—its ambitions stretching as far as its horizons. Every day, the nation grows stronger, driven by an unshakable vision of progress.',
    image: blog11,
    link: '/building-a-strong-sustainable-future',
  },
  {
    id: 12,
    title:
      'Top Qualities That Set the Best Scaffolding & Formwork Manufacturers in India Apart',
    date: 'August 20, 2025',
    excerpt:
      'Spend even a day on a construction site where deadlines are slipping, and you’ll quickly realize, poor scaffolding can bring everything to a halt. Shaky joints, missing parts, unstable platforms, it’s not just frustrating, it’s risky.',
    image: blog12,
    link: '/best-scaffolding-formwork-manufacturers',
  },
  {
    id: 13,
    title:
      'Renny GI Pipes & Tubes: Engineered for India’s Rising Infrastructure Demands',
    date: 'July 28, 2025',
    excerpt:
      'Renny, one of India’s leading manufacturers of GI Pipes and Tubes, is driving the future of infrastructure with precision-engineered solutions that deliver unmatched strength, corrosion resistance, and longevity.',
    image: blog13,
    link: '/gi-pipes-tubes',
  },
  {
    id: 14,
    title: 'Renny: Key Narrow HR Coil Manufacturing in India',
    date: 'July 17, 2025',
    excerpt:
      'In today’s dynamic industrial landscape, the demand for high-performance steel coils is evolving rapidly. Industries are no longer satisfied with basic functionality—they require materials that offer precision, strength and adaptability to meet modern design complexities and production efficiencies. ',
    image: blog14,
    link: '/key-narrow-hr-coil-manufacturing',
  },
  {
    id: 15,
    title:
      'Renny MS Black Round Pipes – Powering the Backbone of New Age Construction',
    date: 'July 9, 2025',
    excerpt:
      'Renny Strips Ltd. stands at the forefront of steel innovation, proudly leading the MS Black Pipe manufacturing sector in India. With decades of expertise and a relentless focus on quality, Renny is one of North India’s most prominent integrated steel manufacturers, with in-house production facilities ensuring consistency, strength, and timely supply.',
    image: blog15,
    link: '/ms-black-round-pipes',
  },
  {
    id: 16,
    title:
      'India’s Rise as a Global Powerhouse in Scaffolding & Formwork Sourcing',
    date: 'July 5, 2025',
    excerpt:
      'Renny Strips is a leading manufacturer of scaffolding and formwork systems in India, driving the industry’s growth with world-class engineering, integrated manufacturing, and a global outlook.',
    image: blog16,
    link: '/global-powerhouse-in-scaffolding-formwork',
  },
  {
    id: 17,
    title: 'Precision Engineering for Structural Excellence',
    date: 'June 24, 2025',
    excerpt:
      'Renny: India’s Trusted Partner for High-Performance Machine Components in Scaffolding & Formwork Systems. In today’s high-speed construction landscape, the demand for durable, accurate & adaptable machine components more critical than ever. Whether it’s a metro tunnel in progress or a multi-story commercial tower rising its foundations, precision components form the hidden strength behind every successful formwork and  structure.',
    image: blog17,
    link: '/precision-engineering-for-structural-excellence',
  },
  {
    id: 18,
    title: 'Renny Forging Billets: Precision-Engineered for Performance',
    date: 'June 14, 2025',
    excerpt:
      'Renny Strips stands among the foremost manufacturers of forging billets in India, delivering high-performance billets and blooms that meet the stringent demands of global industries. Our premium-grade billets are engineered for exceptional forgeability, strength, and structural integrity—making them the preferred choice across sectors such as automotive, railways, construction, oil & gas & heavy engineering.',
    image: blog18,
    link: '/forging-billets-precision-engineered',
  },
  {
    id: 19,
    title:
      'Renny Wire Rods: Precision, Performance & Trust — Engineered for the Future of Industry',
    date: 'May 16, 2025',
    excerpt:
      'In today’s rapidly evolving industrial ecosystem, wire rods play a pivotal role as a foundational material across sectors like automotive, construction, engineering, and electricals. The demand for wire rods is driven by increasing production volumes, tighter tolerance requirements, greater mechanical consistency and cost-efficiency across manufacturing lines.',
    image: blog19,
    link: '/wire-rods-precision-performance',
  },
  {
    id: 20,
    title:
      'Trends and Market Dynamics of ERW Pipes in India: Renny Strips Leading the Way as one of best Manufacturer of ERW Pipes in India',
    date: 'May 8, 2025',
    excerpt:
      'The Electric Resistance Welded (ERW) pipes industry in India is undergoing remarkable growth and evolution, propelled by significant infrastructure investments, innovative manufacturing practices, and dynamic market demands. ',
    image: blog20,
    link: '/trends-and-market-dynamics-of-erw-pipes',
  },
  {
    id: 21,
    title: 'Renny: Revolutionizing The Construction Industry',
    date: 'April 24, 2025',
    excerpt:
      'India’s Scaffolding & Formwork sector is experiencing a significant transformation in 2025, propelled by Technological Advancements, Sustainable Practices & a Surge in Infrastructure & Housing Projects.',
    image: blog21,
    link: '/revolutionizing-the-construction-industry',
  },
  {
    id: 22,
    title:
      'Global Trends in ERW MS Black Pipes – Renny Strips, India’s Leading Manufacturer, Powering Progress & Redefining Structural Excellence',
    date: 'April 17, 2024',
    excerpt:
      'As the infrastructure, construction & manufacturing sectors surge globally, the demand for high-quality ERW MS (Mild Steel) Black Pipes is stronger than ever. From skyscrapers and industrial sheds to pipelines and machinery, these pipes are the backbone of countless engineering and structural applications. ',
    image: blog22,
    link: '/global-trends-in-erw-ms-black-pipes',
  },
];

const Blogs = () => {
  const [activeBlog, setActiveBlog] = useState(blogsData[0]);
  const [sortType, setSortType] = useState('All');
  const leftRefs = useRef([]);
  const [dateSortOrder, setDateSortOrder] = useState('newest'); // default
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  // Filter blogs by year
  const filteredBlogs = blogsData
    .filter(blog => {
      if (sortType === 'All') return true;
      return new Date(blog.date).getFullYear().toString() === sortType;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return dateSortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

  // Track which blogs are in view for animations
  const [inViewIndexes, setInViewIndexes] = useState([]);

  useEffect(() => {
    const observers = leftRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInViewIndexes(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach(obs => obs && obs.disconnect());
  }, [filteredBlogs]);

  return (
    <div className="font-helvetica overflow-hidden  min-h-screen">
      {/* Banner */}
      <motion.section
        className="relative h-[100vh] w-full overflow-hidden  mb-12"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <img
          src={blogsbanner}
          alt="Blogs Banner"
          className="absolute inset-0 w-full h-full  object-cover"
        />
        <div className="absolute inset-0  bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 text-white text-6xl md:text-7xl font-bold 
           flex items-end justify-start h-full py-10 px-10"
        >
          Blogs
        </motion.h1>
      </motion.section>
      {/* Spotlight section */}
      <section className="flex items-center justify-center">
        <div className="relative h-[550px] w-6xl mt-20 rounded-4xl overflow-hidden ">
          {/* Background Video */}
          <video
            src={newsvideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0  w-full h-full object-cover z-0"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />

          {/* Content */}
          <section ref={ref} className="relative z-20  p-20 md:p-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="space-y-6"
            >
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl mt-20 font-bold text-white text-center"
              >
                Sharing Ideas That Matter
              </motion.h2>

              <motion.h3
                variants={itemVariants}
                className="text-2xl md:text-3xl font-semibold text-white/90 text-center"
              >
                Through Industry Insights
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="text-white/80 text-center md:text-lg leading-relaxed max-w-3xl mx-auto"
              >
                Our blog is a space where knowledge meets experience. At Renny
                Strips, we share insights on industry trends, innovations,
                leadership perspectives, and company milestones. Each article
                reflects our commitment to excellence, continuous learning, and
                contributing meaningful thought leadership to the evolving steel
                industry.
              </motion.p>
            </motion.div>
          </section>
        </div>
      </section>
      <motion.div
        className="flex flex-col lg:flex-row mb-20 mt-20 gap-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
      >
        {/* Left Panel */}
        <div className="lg:w-1/3 space-y-4">
          {/* Sorting */}
          <div className="bg-white rounded-2xl shadow p-4 mb-4 flex gap-2 flex-wrap">
            {['All', '2026', '2025', '2024'].map(year => (
              <button
                key={year}
                className={`px-4 py-2 rounded-2xl font-medium transition ${
                  sortType === year ? 'bg-blue text-white' : 'bg-gray-100'
                }`}
                onClick={() => setSortType(year)}
              >
                {year}
              </button>
            ))}

            {/* Custom Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="px-4 py-2 pr-10 rounded-2xl bg-gray-100 font-medium text-sm flex items-center justify-between gap-2 w-[180px]"
              >
                {dateSortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
                <span className="text-xl">
                  <i className="ri-arrow-down-s-line"></i>
                </span>
              </button>

              {open && (
                <div className="absolute mt-2 w-full bg-white rounded-2xl shadow-lg z-50 overflow-hidden">
                  {[
                    { label: 'Newest First', value: 'newest' },
                    { label: 'Oldest First', value: 'oldest' },
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setDateSortOrder(option.value);
                        setOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 font-medium transition ${
                        dateSortOrder === option.value
                          ? 'bg-blue text-white'
                          : 'bg-gray-100'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Scrollable Blog List */}
          <div className="bg-white rounded-2xl shadow p-4 space-y-4 max-h-[90vh] overflow-y-auto">
            {filteredBlogs.length === 0 && (
              <p className="text-gray-500">
                No blogs found for this selection.
              </p>
            )}

            {filteredBlogs.map((blog, index) => {
              const isActive = activeBlog.id === blog.id;

              return (
                <motion.button
                  key={blog.id}
                  ref={el => (leftRefs.current[index] = el)}
                  onClick={() => setActiveBlog(blog)}
                  className={`
            relative flex items-center gap-4 w-full p-3 rounded-2xl text-left
            ${isActive ? 'bg-gray-100' : 'bg-transparent'}
          `}
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    inViewIndexes.includes(index) ? { opacity: 1, x: 0 } : {}
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                  whileHover={false}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-20 w-1 bg-blue rounded-full" />
                  )}

                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-16 h-16 object-cover rounded-2xl"
                  />

                  <p className="text-sm font-medium line-clamp-2">
                    {blog.title}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Right Panel */}
        <div className="lg:w-2/3 bg-white rounded-2xl  shadow p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBlog.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center"
            >
              <img
                src={activeBlog.image}
                alt={activeBlog.title}
                className="w-full h-72 object-cover rounded-2xl mb-6"
              />
              <h2 className="text-2xl font-bold mb-2 text-center">
                {activeBlog.title}
              </h2>
              <p className="text-gray-500 mb-4">{activeBlog.date}</p>
              <p className="text-gray-700 mb-6 leading-relaxed text-center max-w-3xl">
                {activeBlog.excerpt}
              </p>
              <Link
                to={activeBlog.link}
                className="inline-block px-6 py-3 bg-black text-white rounded-2xl hover:bg-gray-800 transition"
              >
                Read Full Article →
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Blogs;

{
  /* 
 1 <Link to="/kwikstage-scaffolding/" ></Link>

 2 <Link to="/scaffolding-formworks-innovation/" ></Link>

 3 <Link to="/scaffolding-steel-props-jacks/" ></Link>

 4 <Link to="/wire-rod-manufacturers-india/" ></Link>

 5 <Link to="/top-ringlock-scaffolding-manufacturer/" ></Link>

 6 <Link to="/square-hollow-pipe-manufacturers" ></Link>
  
 7 <Link to="/forging-billets" ></Link>
  
 8 <Link to="/ltd-design-centre" ></Link>
  
 9 <Link to="/scaffolding-and-formwork-company" ></Link>
  
 10 <Link to="/the-right-erw-pipe-manufacturer" ></Link>
  
 11 <Link to="/building-a-strong-sustainable-future" ></Link>
  
 12 <Link to="/best-scaffolding-formwork-manufacturers" ></Link>
  
 13 <Link to="/gi-pipes-tubes" ></Link>
  
 14 <Link to="/key-narrow-hr-coil-manufacturing" ></Link>
  
 15 <Link to="/ms-black-round-pipes" ></Link>
  
  16 <Link to="/global-powerhouse-in-scaffolding-formwork" ></Link>
  
  17 <Link to="/precision-engineering-for-structural-excellence" ></Link>
  
  18 <Link to="/forging-billets-precision-engineered" ></Link>
  
 19 <Link to="/wire-rods-precision-performance" ></Link>
  
  20 <Link to="/trends-and-market-dynamics-of-erw-pipes" ></Link>
  
  21 <Link to="/revolutionizing-the-construction-industry" ></Link>
  
  22<Link to="/global-trends-in-erw-ms-black-pipes"></Link> */
}
