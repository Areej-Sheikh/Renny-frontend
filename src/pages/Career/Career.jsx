import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdLocationOn, MdSearch } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import banner from '../../assets/careerBanner.webp';
import CareerCarousel from '../../components/CareerCarousel';
const jobsData = [
  {
    id: 'web-dev',
    title: 'Web Developer',
    department: 'IT',
    location: 'India',
    type: 'Full Time',
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    department: 'Engineering',
    location: 'India',
    type: 'Full Time',
  },
];

const jobTypes = ['Full Time', 'Part Time', 'Contract', 'Temporary', 'Trainee'];

const Career = () => {
  const [activeDepartment, setActiveDepartment] = useState('IT');
  const [activeType, setActiveType] = useState('Full Time');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredJobs = jobsData
    .filter(job => job.type === activeType)
    .filter(job => job.title.toLowerCase().includes(search.toLowerCase()));

  const handleDepartmentChange = dept => {
    setActiveDepartment(dept);
    setActiveType('Full Time'); // reset job type
    setSearch(''); // reset search
  };

  return (
    <section className="w-full bg-blue-50 ">
      {/* Banner */}
      <motion.section
        className="relative h-[70vh] w-full overflow-hidden  mb-12"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <img
          src={banner}
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
          Career
        </motion.h1>
      </motion.section>
      {/* Career Section */}
      <div className="px-6 md:px-20 py-16 h-screen">
        <motion.div
          className="flex flex-wrap items-center gap-8 mb-12 "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Department */}
          <div className="flex items-center gap-6">
            <span className="font-medium text-gray-700">Department</span>

            <button
              onClick={() => handleDepartmentChange('IT')}
              className={`text-lg font-semibold transition ${
                activeDepartment === 'IT'
                  ? 'text-[#292c44] border-b-2 border-[#292c44]'
                  : 'text-gray-400'
              }`}
            >
              IT
            </button>

            <button
              onClick={() => handleDepartmentChange('Engineering')}
              className={`text-lg font-semibold transition ${
                activeDepartment === 'Engineering'
                  ? 'text-[#292c44] border-b-2 border-[#292c44]'
                  : 'text-gray-400'
              }`}
            >
              Engineering
            </button>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <MdLocationOn />
            <span>India</span>
          </div>

          <div className="flex flex-wrap gap-3">
            {jobTypes.map(type => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-1.5 rounded-full text-sm transition ${
                  activeType === type
                    ? 'bg-[#292c44] text-white'
                    : 'bg-white border border-gray-300 text-gray-500'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="relative ml-auto">
            <MdSearch className="absolute top-2.5 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border-gray-300 border bg-white rounded-lg outline-none"
            />
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {filteredJobs.length === 0 ? (
            <p className="text-gray-500">
              No jobs available for this selection.
            </p>
          ) : (
            filteredJobs.map(job => (
              <motion.div
                key={job.id}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-6 rounded-xl flex justify-between items-center"
              >
                <div>
                  <h2 className="text-xl font-semibold">{job.title}</h2>
                  <p className="text-sm text-gray-500 mt-1">{job.type}</p>
                </div>

                <button
                  onClick={() => navigate(`/careers/${job.id}`)}
                  className="px-6 py-2 rounded-lg text-sm text-white bg-[#292c44] hover:opacity-90 transition"
                >
                  Details
                </button>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
      {/* Success Stories */}
      <section className="bg-[#eff6ff] py-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.h1
            className="text-[37px] font-bold mb-5 w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Success Stories
            <div className="w-46 h-0.5 bg-blue mx-auto rounded-full mb-10" />
          </motion.h1>
          <h1 className="text-2xl text-center font-bold text-[#292c44] mb-3">
            Where careers are built to last
          </h1>

          <span className="block max-w-3xl mx-auto text-center text-sm md:text-base text-black leading-relaxed md:leading-7">
            At RENNY Strips, we invest in our people with the same commitment we
            bring to our products. Through hands-on experience, collaboration,
            and real-world challenges, we create an environment where talent
            grows, innovation thrives, and long-term careers are built on trust
            and expertise. Our teams work on meaningful projects that shape
            industries while continuously developing their skills, confidence,
            and professional capabilities.
          </span>

          {/* Carousel here */}
          <CareerCarousel />
        </div>
      </section>
    </section>
  );
};

export default Career;
