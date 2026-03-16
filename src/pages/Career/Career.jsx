import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdSearch,
  MdOutlineBusinessCenter,
  MdFilterList,
  MdLocationOn,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/careerBanner.webp";
import CareerCarousel from "../../components/CareerCarousel";

const jobTypes = ["Full-time", "Part-time", "Contract", "Remote", "Trainee"];
const departments = [
  "Engineering",
  "IT & Software",
  "Operations",
  "Sales & Marketing",
  "Quality Control",
];

const Career = () => {
  const [jobsData, setJobsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeDepartment, setActiveDepartment] = useState("IT & Software");
  const [activeType, setActiveType] = useState("Full-time");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

 const CMS_API = `${import.meta.env.VITE_API_URL}/api/career/jobs`;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(CMS_API);
        if (res.data.success) setJobsData(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = jobsData.filter((job) => {
    return (
      job.department === activeDepartment &&
      job.jobType === activeType &&
      job.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <section className="w-full bg-[#f8f9fa] font-helvetica">
      {/* HERO */}
      <section className="relative h-[50vh] md:h-[100vh] overflow-hidden">
        <img
          src={banner}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Career"
        />
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="relative z-10 h-full flex items-end px-6 md:px-10 py-12 text-white text-4xl md:text-6xl font-bold">
          Career
        </h1>
      </section>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
        {/* SIDEBAR */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-3xl p-6 border border-gray-100 h-fit lg:sticky lg:top-24"
        >
          <div className="mb-6">
            <div className="flex items-center gap-2 text-xs font-black uppercase text-gray-400 mb-2">
              <MdSearch /> Search
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search jobs"
              className="w-full px-4 py-3 bg-gray-50 rounded-xl font-bold text-sm outline-none"
            />
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs font-black uppercase text-gray-400 mb-3">
              <MdFilterList /> Department
            </div>
            <div className="flex flex-col gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDepartment(dept)}
                  className={`text-left px-4 py-2 rounded-lg font-bold text-sm transition ${activeDepartment === dept
                      ? "bg-[#292c44] text-white"
                      : "text-gray-500 hover:bg-gray-100"
                    }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase text-gray-400 mb-3">
              <MdOutlineBusinessCenter /> Job Type
            </div>
            <div className="flex flex-wrap gap-2">
              {jobTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-4 py-2 rounded-lg text-[11px] font-black uppercase transition ${activeType === type
                      ? "bg-[#292c44] text-white"
                      : "text-gray-500 hover:bg-gray-100"
                    }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </motion.aside>

        {/* JOB LIST */}
        <section>
          {loading ? (
            <div className="py-24 text-center text-gray-300 font-bold">
              Loading opportunities…
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="py-24 text-center text-gray-400 font-bold">
              No positions found
            </div>
          ) : (
            <AnimatePresence>
              <div className="flex flex-col gap-6">
                {filteredJobs.map((job) => (
                  <motion.div
                    key={job._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-3xl p-8 border border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-sm hover:shadow-xl transition"
                  >
                    <div>
                      <h2 className="text-2xl font-bold text-[#292c44]">
                        {job.title}
                      </h2>
                      <p className="text-sm font-bold text-gray-400 uppercase mt-1">
                        {job.department} • {job.jobType} • {job.location}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-xs font-black uppercase text-green-600 bg-green-50 px-3 py-1 rounded-md">
                        <MdLocationOn /> Open
                      </span>
                      <button
                        onClick={() => navigate(`/careers/${job._id}`)}
                        //add hover and tap effects to button
                        className="px-10 py-3 bg-[#292c44] text-white rounded-xl font-bold transition shadow-lg shadow-[#292c44]/20"
                      >
                        Apply
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          )}
        </section>
      </div>

      {/* Success Stories */}
      <section className="bg-[#eff6ff] py-10">
        <div className=" mx-auto px-6">
          {/* Heading */}
          <motion.h1
            className="text-[32px] md:text-[48px] font-bold mb-5 w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Success Stories
            <div className="w-32 md:w-46 h-0.5 bg-blue mx-auto rounded-full mb-10" />
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
