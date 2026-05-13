// ========== Imports ==========
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";

import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

import axios from "axios";

import { toast } from "react-toastify";

// ========== Hooks ==========
import usePageHero from "../../hooks/usePageHero";

// ========== Utilities ==========
import { buildApiUrl } from "../../lib/api";

// ========== Assets ==========
import banner from "../../assets/contactusbanner.webp";
import rennylocation from "../../assets/renny's-location.webp";
import unit1 from "../../assets/Unit-1.webp";
import unit3 from "../../assets/Unit-3.webp";

// ========== Hardcoded Plants ==========
const hardcodedPlants = [
  {
    title: "Unit I & II",

    address:
      "Village Mangarh, Machhiwara Road, Kohara,\nDistrict Ludhiana, Punjab – 141112, India.",

    image: unit1,

    order: 1,
  },

  {
    title: "Unit III",

    address:
      "Lakhowal Road, Opposite PSPCL House, Kohara,\nLudhiana, Punjab – 141112, India.",

    image: unit3,

    order: 2,
  },
];

const Contact = () => {
  // ========== Hero Content ==========
  const { heroSrc, heroHeading } = usePageHero(
    "contact-us",
    "Contact Us",
    banner,
  );

  // ========== Backend State ==========
  const [loading, setLoading] = useState(false);

  const [serverPlants, setServerPlants] = useState([]);

  const [contactInfo, setContactInfo] = useState(null);

  const [pageError, setPageError] = useState("");

  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: "",
  });

  // ========== Form Data ==========
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    enquiryType: "",
    message: "",
  });

  // ========== Handle Input Change ==========
  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  // ========== Fetch Plants ==========
  const fetchPlants = async () => {
    try {
      const res = await axios.get(buildApiUrl("/api/plants"));

      const data = res.data?.data || res.data;

      if (Array.isArray(data)) {
        setServerPlants(data);
      }
    } catch {
      setPageError("Some location details are temporarily unavailable.");
    }
  };

  // ========== Fetch Contact Info ==========
  const fetchContactInfo = async () => {
    try {
      const res = await axios.get(buildApiUrl("/api/contact-info"));

      if (res.data.success && res.data.data) {
        setContactInfo(res.data.data);
      }
    } catch {
      setPageError("Some contact details are temporarily unavailable.");
    }
  };

  // ========== Initial Data Load ==========
  useEffect(() => {
    fetchPlants();
    fetchContactInfo();
  }, []);

  // ========== Plants Data ==========
  const plants = (() => {
    const mappedServer = serverPlants.map((p) => ({
      title: p.title,

      image: p.image,

      address: p.address,

      order: p.order || 0,
    }));

    return [
      ...mappedServer,

      ...hardcodedPlants.filter(
        (h) => !mappedServer.some((s) => s.title === h.title),
      ),
    ].sort((a, b) => (a.order || 0) - (b.order || 0));
  })();

  // ========== Form Submit ==========
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setSubmitStatus({
      type: "",
      message: "",
    });

    try {
      const res = await axios.post(
        buildApiUrl("/api/contact/submit"),
        formData,
      );

      if (res.data.success) {
        const successMessage = "Your enquiry has been submitted successfully.";

        setSubmitStatus({
          type: "success",
          message: successMessage,
        });

        toast.success(successMessage);

        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          enquiryType: "",
          message: "",
        });
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "We could not send your enquiry right now. Please try again shortly.";

      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });

      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
   const imageZoom = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  return (
    <>
      <SEO
        title="Contact Renny Strips | Get in Touch With Our Team"
        description="Contact Renny Strips for product enquiries, partnerships, collaborations, and industrial solutions. Reach our offices, manufacturing plants, and support team across India."
        keywords="Contact Renny Strips, steel manufacturer contact, industrial plant contact, scaffolding solutions India, product enquiry, partnership enquiry, Ludhiana manufacturing company"
        url="https://rennystrips.com/contact-us"
        image={banner}
      />
      {/* Banner */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={imageZoom}
        className="relative h-[100vh] w-full overflow-hidden mb-10"
      >
        {heroSrc && (heroSrc.endsWith(".webm") || heroSrc.endsWith(".mp4")) ? (
          <video
            key={heroSrc}
            src={heroSrc}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <img
            key={heroSrc || "fallback"}
            src={heroSrc || aboutVideo}
            alt="Hero Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <motion.h1
          variants={fadeUp}
          className="relative z-10 text-white text-4xl md:text-7xl font-bold
                flex items-end justify-start h-full py-10 px-6 md:px-10"
        >
          {heroHeading}
        </motion.h1>
      </motion.section>

      <section className="w-full bg-white text-black px-6 md:px-20 ">
        {/* Heading */}
        <motion.h2
          className="text-[32px] md:text-[48px] font-bold mb-5 w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch With Us
          <div className="w-64 md:w-86 h-0.5 bg-blue mx-auto rounded-full mb-20" />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <motion.div
            className="flex flex-col gap-6 w-full md:max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-semibold leading-tight"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            ></motion.h2>

            <motion.p
              className="text-base md:text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
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
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
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
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              {submitStatus.message && (
                <div
                  className={`rounded-xl px-4 py-3 text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
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
                transition={{ duration: 0.5, ease: "easeOut" }}
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
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
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
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
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
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
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
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              />

              <motion.div
                className="flex justify-center pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true }}
              >
                <button
                  type="submit"
                  disabled={loading}
                  className="px-10 py-2.5 text-sm tracking-wide rounded-lg transition-all duration-300 hover:opacity-90 disabled:bg-gray-400"
                  style={{
                    backgroundColor: "#292c44",
                    border: "1px solid #292c44",
                    color: "#ffffff",
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
        {pageError && (
          <div className="max-w-6xl mx-auto mb-6 rounded-xl bg-white/80 px-4 py-3 text-sm text-[#292c44] shadow-sm">
            {pageError}
          </div>
        )}
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
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="bg-gray-200 hover:bg-white rounded-2xl p-8 space-y-4  shadow-sm hover:shadow-xl  transition-all duration-300"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-[#292c44]">
              Get in Touch
            </h2>

            {/* Emails – CMS or fallback */}
            {(contactInfo?.emails?.length
              ? contactInfo.emails
              : ["info@rennystrips.com", "exports@rennystrips.com"]
            ).map((email, i) => (
              <div key={i} className="flex items-center gap-3">
                <MdEmail size={22} />
                <span>{email}</span>
              </div>
            ))}

            {/* Phones – CMS or fallback */}
            {(contactInfo?.phones?.length
              ? contactInfo.phones
              : ["+91-82880-01300", "+91-9688001300"]
            ).map((phone, i) => (
              <div key={i} className="flex items-center gap-3">
                <MdPhone size={22} />
                <span>{phone}</span>
              </div>
            ))}
          </motion.div>

          {/* Office Boxes – CMS or fallback */}
          {(contactInfo?.offices?.length
            ? contactInfo.offices
            : [
                {
                  type: "Registered Office",
                  title: "Lakhowal Road, Opposite PSPCL",
                  addressLine1: "House- Kohara, Ludhiana,",
                  cityStateZip: "Punjab-141112, India",
                },
                {
                  type: "Site Office",
                  title: "Near Dholewal Chowk",
                  addressLine1: "Industrial Area-B,",
                  cityStateZip: "Ludhiana, Punjab 141003",
                },
              ]
          ).map((office, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="bg-gray-200 hover:bg-white rounded-2xl p-8 space-y-4  shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-3">
                <MdLocationOn size={28} className="text-[#292c44]" />
                <h2 className="text-2xl font-semibold text-[#292c44]">
                  {office.type}
                </h2>
              </div>
              {office.title && (
                <h2 className="text-lg md:text-xl font-semibold text-black leading-snug">
                  {office.title}
                </h2>
              )}
              <p className="text-sm leading-relaxed text-gray-600">
                {office.addressLine1}
                {office.addressLine2 && (
                  <>
                    <br />
                    {office.addressLine2}
                  </>
                )}
                {office.cityStateZip && (
                  <>
                    <br />
                    {office.cityStateZip}
                  </>
                )}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Industrial Plant Sections */}
      <section className="w-full bg-blue-50 px-6 md:px-10 relative">
        <motion.h2
          className="text-[32px] md:text-[48px] font-bold mt-10 mb-10 w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Industrial plant
          <div className="w-48 md:w-68 h-0.5 bg-blue mx-auto rounded-full mb-10" />
        </motion.h2>

        <section className="relative overflow-hidden ">
          {plants.map((plant, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 ${index === plants.length - 1 ? "mb-20" : "mb-28"} gap-10 md:gap-16 items-center`}
              >
                {isEven ? (
                  <>
                    {/* Image First for Even Items */}
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.03 }}
                      className="rounded-2xl overflow-hidden shadow-md"
                    >
                      <img
                        src={plant.image}
                        alt={plant.title}
                        className="w-full h-full object-cover transition-transform duration-500"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="space-y-6 p-6 border-l-4 border-[#292c44]"
                    >
                      <div className="flex  items-center gap-3">
                        <MdLocationOn size={30} className="text-[#292c44]" />
                        <h3 className="text-2xl md:text-3xl font-semibold text-[#292c44]">
                          {plant.title}
                        </h3>
                      </div>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {plant.address}
                      </p>
                      <div className="w-16 h-[2px] bg-[#292c44]" />
                    </motion.div>
                  </>
                ) : (
                  <>
                    {/* Content First for Odd Items */}
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="space-y-6 p-6 border-l-4 border-[#292c44] order-2 md:order-1"
                    >
                      <div className="flex items-center gap-3">
                        <MdLocationOn size={30} className="text-[#292c44]" />
                        <h3 className="text-2xl md:text-3xl font-semibold text-[#292c44]">
                          {plant.title}
                        </h3>
                      </div>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {plant.address}
                      </p>
                      <div className="w-16 h-[2px] bg-[#292c44]" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.03 }}
                      className="rounded-2xl overflow-hidden shadow-md order-1 md:order-2"
                    >
                      <img
                        src={plant.image}
                        alt={plant.title}
                        className="w-full h-full object-cover transition-transform duration-500"
                      />
                    </motion.div>
                  </>
                )}
              </div>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default Contact;
