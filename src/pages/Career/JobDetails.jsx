import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdWorkOutline, MdCurrencyRupee } from 'react-icons/md';
import banner from '../../assets/careerbanner.png';

/* ================= JOB DATA ================= */
const jobsData = {
  'web-dev': {
    title: 'Web Developer',
    department: 'IT',
    type: 'Full Time',
    salary: '40,000 INR / Monthly',
    description: `Renny, headquartered in Ludhiana, is a steel pipes, Formwork & scaffolding manufacturer renowned for its excellence in this dynamic industry landscape. With 3 strategically located, +state-of-the-art manufacturing facilities in Punjab, Renny boasts a production capacity of 250,000 MTPA. Serving both national & international markets through a strong network of distributors, the company is certified with ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018.

Specializing in the production of ERW Pipes & Tubes, Formwork & scaffolding crafted from premium quality HR Coils, Renny, adheres to core values of rigorous standards, excellence in innovation, sustainable manufacturing processes & unwavering customer satisfaction. The company's diverse & cost-effective product portfolio includes over 1,000 SKUs, establishing it as one of the foremost ERW Pipes & Tubes, Formwork & Scaffolding manufacturers in North India.

Renny is at the forefront of driving India's industrial modernization, with a mission to open new markets through cutting-edge, eco-friendly innovations. The company operates across 4 divisions: Coil Division, Pipe division (producing MS black, Galvanized, Hollow sections such as Circular, Square & Rectangular), Formwork & Scaffolding & Industrial Paints. Renny caters to a broad spectrum of domestic & international needs. With a global presence, Renny serves clients in 40 Countries across 6 Continents.

With a commitment to the highest industry standards and a visionary approach, Renny continues to propel forward, shaping the future of the Structural Steel Building Sector. `,
    key: 'Creating dynamic websites',
  },

  'product-manager': {
    title: 'Product Manager',
    department: 'Engineering',
    type: 'Full Time',
    salary: '60,000 INR / Monthly',
    description: `Renny, headquartered in Ludhiana, is a steel pipes, Formwork & scaffolding manufacturer renowned for its excellence in this dynamic industry landscape. With 3 strategically located, +state-of-the-art manufacturing facilities in Punjab, Renny boasts a production capacity of 250,000 MTPA. Serving both national & international markets through a strong network of distributors, the company is certified with ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018.

Specializing in the production of ERW Pipes & Tubes, Formwork & scaffolding crafted from premium quality HR Coils, Renny, adheres to core values of rigorous standards, excellence in innovation, sustainable manufacturing processes & unwavering customer satisfaction. The company's diverse & cost-effective product portfolio includes over 1,000 SKUs, establishing it as one of the foremost ERW Pipes & Tubes, Formwork & Scaffolding manufacturers in North India.

Renny is at the forefront of driving India's industrial modernization, with a mission to open new markets through cutting-edge, eco-friendly innovations. The company operates across 4 divisions: Coil Division, Pipe division (producing MS black, Galvanized, Hollow sections such as Circular, Square & Rectangular), Formwork & Scaffolding & Industrial Paints. Renny caters to a broad spectrum of domestic & international needs. With a global presence, Renny serves clients in 40 Countries across 6 Continents.

With a commitment to the highest industry standards and a visionary approach, Renny continues to propel forward, shaping the future of the Structural Steel Building Sector.`,
    key: 'Manage the Product, Analyse the data',
  },
};

const JobDetails = () => {
  const { jobId } = useParams();
  const job = jobsData[jobId];

  if (!job) {
    return <div className="p-10 text-center">Job not found</div>;
  }

  return (
    <section className="w-full bg-gray-100 ">
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
          Job Details
        </motion.h1>
      </motion.section>
      <div className="max-w-4xl mx-auto text-center mb-20">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            {job.department}
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold mt-2">
            {job.title}
          </h1>
        </motion.div>

        {/* ================= GRID 1 : JOB INFO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-md p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 items-center gap-6 mb-12"
        >
          <div>
            <p className="text-sm text-gray-500 mb-1">Job Type</p>
            <div className="flex items-center justify-center  gap-2 font-medium">
              <MdWorkOutline />
              {job.type}
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Salary</p>
            <div className="flex items-center justify-center md:justify-start gap-2 font-medium">
              <MdCurrencyRupee />
              {job.salary}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-black text-white rounded-md font-medium transition justify-self-center md:justify-self-end"
          >
            Apply Now
          </motion.button>
        </motion.div>

        {/* ================= GRID 2 : CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-xl shadow-md p-6 md:p-8 text-left w-full"
        >
          {/* About Company */}
          <h2 className="text-lg font-semibold mb-3">About Company</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-8">
            {job.description}
          </p>

          {/* Key Responsibility */}
          <h3 className="text-base font-semibold mb-2">Job Description</h3>
          <p className="text-sm text-gray-600 mb-10">{job.key}</p>

          {/* Bottom Apply Button */}
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-9 py-3 bg-black text-white rounded-md font-medium transition"
            >
              Apply Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JobDetails;
