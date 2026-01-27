import BlogCard from '../../components/BlogCard.jsx';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import { useScroll, useTransform, useInView } from 'framer-motion';

// Assets
import blogsbanner from '../../assets/blogsbanner.webp';
import newsvideo from '../../assets/newsvideo.webm';

const Blogs = () => {
  // 1. State for Dynamic Data
  const [blogsData, setBlogsData] = useState([]);
  const [activeBlog, setActiveBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [sortType, setSortType] = useState('All');
  const [dateSortOrder, setDateSortOrder] = useState('newest');
  const [open, setOpen] = useState(false);
  
  const leftRefs = useRef([]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });

  // 2. Fetch Data from Backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/blogs');
        const fetchedBlogs = res.data.data || [];
        setBlogsData(fetchedBlogs);
        if (fetchedBlogs.length > 0) {
          setActiveBlog(fetchedBlogs[0]);
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // 3. Updated Filter Logic
  const filteredBlogs = blogsData
    .filter(blog => {
      const blogDate = blog.publishedAt || blog.createdAt;
      if (sortType === 'All') return true;
      return new Date(blogDate).getFullYear().toString() === sortType;
    })
    .sort((a, b) => {
      const dateA = new Date(a.publishedAt || a.createdAt);
      const dateB = new Date(b.publishedAt || b.createdAt);
      return dateSortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

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

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="font-helvetica overflow-hidden min-h-screen">
      {/* Banner */}
      <motion.section
        className="relative h-[70vh] w-full overflow-hidden mb-12"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <img src={blogsbanner} alt="Blogs Banner" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 text-white text-6xl md:text-7xl font-bold flex items-end justify-start h-full py-10 px-10"
        >
          Blogs
        </motion.h1>
      </motion.section>

      {/* Spotlight section */}
      <section className="flex items-center justify-center">
        <div className="relative h-[550px] w-6xl mt-20 rounded-4xl overflow-hidden ">
          <video src={newsvideo} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <section ref={ref} className="relative z-20 p-20 md:p-16">
            <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="space-y-6">
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl mt-20 font-bold text-white text-center">
                Sharing Ideas That Matter
              </motion.h2>
              <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-white/90 text-center">
                Through Industry Insights
              </motion.h3>
              <motion.p variants={itemVariants} className="text-white/80 text-center md:text-lg leading-relaxed max-w-3xl mx-auto">
                Our blog is a space where knowledge meets experience. At Renny Strips, we share insights...
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
          <div className="bg-white rounded-2xl shadow p-4 mb-4 flex gap-2 flex-wrap">
            {['All', '2026', '2025', '2024'].map(year => (
              <button
                key={year}
                className={`px-4 py-2 rounded-2xl font-medium transition ${sortType === year ? 'bg-blue text-white' : 'bg-gray-100'}`}
                onClick={() => setSortType(year)}
              >
                {year}
              </button>
            ))}

            <div className="relative">
              <button onClick={() => setOpen(!open)} className="px-4 py-2 pr-10 rounded-2xl bg-gray-100 font-medium text-sm flex items-center justify-between gap-2 w-[180px]">
                {dateSortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
                <span className="text-xl"><i className="ri-arrow-down-s-line"></i></span>
              </button>

              {open && (
                <div className="absolute mt-2 w-full bg-white rounded-2xl shadow-lg z-50 overflow-hidden">
                  {[{ label: 'Newest First', value: 'newest' }, { label: 'Oldest First', value: 'oldest' }].map(option => (
                    <button
                      key={option.value}
                      onClick={() => { setDateSortOrder(option.value); setOpen(false); }}
                      className={`w-full text-left px-4 py-2 font-medium transition ${dateSortOrder === option.value ? 'bg-blue text-white' : 'bg-gray-100'}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-4 space-y-4 max-h-[90vh] overflow-y-auto">
            {filteredBlogs.length === 0 && <p className="text-gray-500">No blogs found.</p>}
            {filteredBlogs.map((blog, index) => {
              const isActive = activeBlog?._id === blog._id;
              return (
                <motion.button
                  key={blog._id}
                  ref={el => (leftRefs.current[index] = el)}
                  onClick={() => setActiveBlog(blog)}
                  className={`relative flex items-center gap-4 w-full p-3 rounded-2xl text-left ${isActive ? 'bg-gray-100' : 'bg-transparent'}`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inViewIndexes.includes(index) ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                >
                  {isActive && <span className="absolute left-0 top-1/2 -translate-y-1/2 h-20 w-1 bg-blue rounded-full" />}
                  <img src={blog.mainImage} alt={blog.title} className="w-16 h-16 object-cover rounded-2xl" />
                  <p className="text-sm font-medium line-clamp-2">{blog.title}</p>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Right Panel */}
        <div className="lg:w-2/3 bg-white rounded-2xl shadow p-6">
          <AnimatePresence mode="wait">
            {activeBlog && (
              <motion.div
                key={activeBlog._id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center"
              >
                <img src={activeBlog.mainImage} alt={activeBlog.title} className="w-full h-72 object-cover rounded-2xl mb-6" />
                <h2 className="text-2xl font-bold mb-2 text-center">{activeBlog.title}</h2>
                <p className="text-gray-500 mb-4">
                   {new Date(activeBlog.publishedAt || activeBlog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed text-center max-w-3xl">
                  {activeBlog.excerpt}
                </p>
                <Link
                  to={`/blog/${activeBlog.slug}`}
                  className="inline-block px-6 py-3 bg-black text-white rounded-2xl hover:bg-gray-800 transition"
                >
                  Read Full Article →
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Blogs;