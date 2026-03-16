import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import axios from 'axios'; // Added for connection
import banner from '../../assets/contactusbanner.webp';
import rennylocation from "../../assets/renny's-location.webp";
import unit1 from '../../assets/Unit-1.webp';
import unit3 from '../../assets/Unit-3.webp';

const Contact = () => {
  // --- BACKEND INTEGRATION STATE ---
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    enquiryType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Endpoint should match your backend route
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact/submit`, formData);

      if (res.data.success) {
        alert("Enquiry submitted successfully!");
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          enquiryType: '',
          message: ''
        });
      }
    } catch (err) {
      alert(err.response?.data?.message || "Failed to send enquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Banner */}
      <motion.section
        className="relative h-[50vh] md:h-[100vh] w-full overflow-hidden mb-12"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <img
          src={banner}
          alt="Blogs Banner"
          className="absolute inset-0 w-full h-full  object-cover"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 text-white text-4xl md:text-7xl font-bold 
                       flex items-end justify-start h-full py-10 px-6 md:px-10"
        >
          Contact Us
        </motion.h1>
      </motion.section>

      <section className="w-full bg-white text-black px-6 md:px-20 ">
        {/* Heading */}
        <motion.h1
          className="text-[32px] md:text-[48px] font-bold mb-5 w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch With Us
          <div className="w-64 md:w-86 h-0.5 bg-blue mx-auto rounded-full mb-20" />
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <motion.div
            className="flex flex-col gap-6 w-full md:max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-semibold leading-tight"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            ></motion.h2>

            <motion.p
              className="text-base md:text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true }}
            >
              We believe in building strong partnerships rooted in trust,
              transparency, and collaboration. Our team focuses on understanding
              your needs and delivering solutions that exceed expectations.
              <br />
              <br />
              With open communication, thoughtful execution, and attention to
              detail, we ensure every interaction is smooth, efficient, and
              meaningful.
            </motion.p>

            {/* Image */}
            <motion.div
              className="w-full h-[260px] rounded-lg overflow-hidden mb-12"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              viewport={{ once: true }}
            >
              <img
                src={rennylocation}
                alt="Renny Location"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE – Form Submission */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              <motion.input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-black px-1 py-2 outline-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true }}
              />
              <motion.input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-black px-1 py-2 outline-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true }}
              />
              <motion.input
                type="tel"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full bg-transparent border-b border-black px-1 py-2 outline-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }}
              />

              <motion.select
                name="enquiryType"
                required
                value={formData.enquiryType}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-black px-1 py-2 outline-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
                viewport={{ once: true }}
              >
                <option value="">Enquiry Type</option>
                <option value="General Enquiry">General Enquiry</option>
                <option value="Product Enquiry">Product Enquiry</option>
                <option value="Partnership">Partnership</option>
                <option value="Collaboration">Collaboration</option>
              </motion.select>

              <motion.textarea
                rows="3"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full bg-transparent border-b border-black px-1 py-2 outline-none resize-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
                viewport={{ once: true }}
              />

              <motion.div
                className="flex justify-center pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                viewport={{ once: true }}
              >
                <button
                  type="submit"
                  disabled={loading}
                  className="px-10 py-2.5 text-sm tracking-wide rounded-lg transition-all duration-300 hover:opacity-90 disabled:bg-gray-400"
                  style={{
                    backgroundColor: '#292c44',
                    border: '1px solid #292c44',
                    color: '#ffffff',
                  }}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="w-full px-6 md:px-20 py-20 bg-gradient-to-t to-[#262731] from-[#879cefe6]">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* BOX 1 – Email & Phone */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
            className="bg-gray-200 hover:bg-white rounded-2xl p-8 space-y-4 text-center shadow-sm hover:shadow-xl  transition-all duration-300"
          >
            <h1 className="text-2xl md:text-3xl font-semibold text-[#292c44]">
              Get in Touch
            </h1>

            <div className="flex items-center gap-3">
              <MdEmail size={22} />
              <span>info@rennystrips.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MdEmail size={22} />
              <span>exports@rennystrips.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MdPhone size={22} />
              <span>+91-82880-01300</span>
            </div>

            <div className="flex items-center gap-3">
              <MdPhone size={22} />
              <span>+91-9688001300</span>
            </div>
          </motion.div>

          {/* BOX 2 – Registered Office */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
            className="bg-gray-200 hover:bg-white rounded-2xl p-8 space-y-4 text-center shadow-sm hover:shadow-xl  transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-3">
              <MdLocationOn size={28} className="text-[#292c44]" />
              <h1 className="text-2xl md:text-2xl font-semibold text-[#292c44]">
                Registered Office
              </h1>
            </div>

            <h2 className="text-lg md:text-xl font-semibold text-black">
              Lakhowal Road, Opposite PSPCL
            </h2>

            <p className="text-sm leading-relaxed text-gray-600">
              House- Kohara, Ludhiana,
              <br />
              Punjab-141112, India
            </p>
          </motion.div>

          {/* BOX 3 – Site Office */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
            className="bg-gray-200 hover:bg-white rounded-2xl p-8 space-y-4 text-center shadow-sm hover:shadow-xl  transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-3">
              <MdLocationOn size={28} className="text-[#292c44]" />
              <h1 className="text-2xl md:text-2xl font-semibold text-[#292c44]">
                Site Office
              </h1>
            </div>

            <h2 className="text-lg md:text-xl font-semibold text-black leading-snug">
              Near Dholewal Chowk
            </h2>

            <p className="text-sm leading-relaxed text-gray-600">
              Industrial Area-B,
              <br />
              Ludhiana, Punjab 141003
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Industrial Plant Sections */}
      <section className="w-full bg-blue-50 px-6 md:px-10 relative">
        <motion.h1
          className="text-[32px] md:text-[48px] font-bold mt-10 mb-10 w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Industrial plant
          <div className="w-48 md:w-68 h-0.5 bg-blue mx-auto rounded-full mb-10" />
        </motion.h1>

        <section className="relative overflow-hidden ">
          {/* UNIT I & II */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-28">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src={unit1}
                alt="Unit I Plant"
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="space-y-6 p-6 border-l-4 border-[#292c44]"
            >
              <div className="flex  items-center gap-3">
                <MdLocationOn size={30} className="text-[#292c44]" />
                <h3 className="text-2xl md:text-3xl font-semibold text-[#292c44]">
                  Unit I & II
                </h3>
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Village Mangarh, Machhiwara Road, Kohara,
                <br />
                District Ludhiana, Punjab – 141112, India.
              </p>
              <div className="w-16 h-[2px] bg-[#292c44]" />
            </motion.div>
          </div>

          {/* UNIT III */}
          <div className="grid grid-cols-1 md:grid-cols-2 mb-20 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="space-y-6 p-6 border-l-4 border-[#292c44] order-2 md:order-1"
            >
              <div className="flex items-center gap-3">
                <MdLocationOn size={30} className="text-[#292c44]" />
                <h3 className="text-2xl md:text-3xl font-semibold text-[#292c44]">
                  Unit III
                </h3>
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Lakhowal Road, Opposite PSPCL House, Kohara,
                <br />
                Ludhiana, Punjab – 141112, India.
              </p>
              <div className="w-16 h-[2px] bg-[#292c44]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="border-amber-500 rounded-2xl overflow-hidden shadow-md order-1 md:order-2"
            >
              <img
                src={unit3}
                alt="Unit III Plant"
                className=" rounded-2xl object-cover transition-transform duration-500"
              />
            </motion.div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;