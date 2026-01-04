import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdLocationOn, MdSearch } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import banner from '../../assets/Image.webp';

const jobsData = [
  {
    id: "web-dev",
    title: "Web Developer",
    department: "IT",
    location: "India",
    type: "Full Time",
  },
  {
    id: "product-manager",
    title: "Product Manager",
    department: "Engineering",
    location: "India",
    type: "Full Time",
  },
];

const jobTypes = ['Full Time', 'Part Time', 'Contract', 'Temporary', 'Trainee'];

const Career = () => {
  const [activeDepartment, setActiveDepartment] = useState("IT");
  const [activeType, setActiveType] = useState("Full Time");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredJobs = jobsData
    .filter(job => job.type === activeType)
    .filter(job => job.title.toLowerCase().includes(search.toLowerCase()));

  const handleDepartmentChange = (dept) => {
    setActiveDepartment(dept);
    setActiveType("Full Time"); // reset job type
    setSearch(""); // reset search
  };

  return (
    <section className="w-full bg-gray-50 ">
      {/* Banner */}
      <motion.section
        className="relative h-[70vh] w-full overflow-hidden  mb-12"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        {/* Department */}
        <div className="flex items-center gap-6">
          <span className="font-medium text-gray-700">Department</span>

          <button
            onClick={() => handleDepartmentChange("IT")}
            className={`text-lg font-semibold transition ${
              activeDepartment === "IT"
                ? "text-[#292c44] border-b-2 border-[#292c44]"
                : "text-gray-400"
            }`}
          >
            IT
          </button>

          <button
            onClick={() => handleDepartmentChange("Engineering")}
            className={`text-lg font-semibold transition ${
              activeDepartment === "Engineering"
                ? "text-[#292c44] border-b-2 border-[#292c44]"
                : "text-gray-400"
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
          {jobTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 py-1.5 rounded-full text-sm transition ${
                activeType === type
                  ? "bg-[#292c44] text-white"
                  : "bg-white border border-gray-300 text-gray-500"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

            <button
              onClick={() => handleDepartmentChange('Engineering')}
              className={`text-lg font-semibold transition ${
                activeDepartment === 'Engineering'
                  ? 'text-[#292c44] border-b-2 border-[#292c44]'
                  : 'text-gray-400'
              }`}
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
    </section>
  );
};

export default Career;
