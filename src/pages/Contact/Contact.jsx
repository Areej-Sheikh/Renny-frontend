import React from "react";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import contactBanner from "../../assets/contactBanner.webp";
import rennylocation from "../../assets/renny's-location.webp";
import unit1 from "../../assets/Unit-1.webp";
import unit3 from "../../assets/Unit-3.webp";

const Contact = () => {
  return (
    <>
      <section className="relative w-full h-[25vh] md:h-[50vh] overflow-hidden">
        <img
          src={contactBanner}
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text */}
        <div className="relative z-10 h-full flex items-center  px-6 md:px-20">
          <h1 className="text-4xl md:text-5xl font-semibold text-white ">
            Contact Us
          </h1>
        </div>
      </section>
      <section className="w-full bg-white text-black px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <motion.div
            className="flex flex-col gap-6 max-w-xl"
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
            >
              Get In Touch With Us
            </motion.h2>

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
              className="w-full h-[260px] rounded-lg overflow-hidden"
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

          {/* RIGHT SIDE – */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <form className="space-y-8">
              {[
                { type: "text", placeholder: "Full Name" },
                { type: "email", placeholder: "Email Address" },
                { type: "tel", placeholder: "Phone Number" },
              ].map((field, i) => (
                <motion.input
                  key={i}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full bg-transparent border-b border-black px-1 py-2 outline-none"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: i * 0.1,
                  }}
                  viewport={{ once: true }}
                />
              ))}

              <motion.select
                className="w-full bg-transparent border-b border-black px-1 py-2 outline-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
              >
                <option value="">Enquiry Type</option>
                <option>General Enquiry</option>
                <option>Product Enquiry</option>
                <option>Partnership</option>
                <option>Collaboration</option>
              </motion.select>

              <motion.textarea
                rows="3"
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
                  className="px-10 py-2.5 text-sm tracking-wide rounded-lg transition-all duration-300 hover:opacity-90"
                  style={{
                    backgroundColor: "#292c44",
                    border: "1px solid #292c44",
                    color: "#ffffff",
                  }}
                >
                  Submit
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>
      <section className="w-full bg-gradient-to-br from-[#292c44] to-[#1f2238] text-black px-6 md:px-20 py-20">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
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
            className="bg-gray-100 rounded-2xl p-8 space-y-4 shadow-sm"
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

          {/* BOX 2 – Unit I */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="bg-gray-100 rounded-2xl p-8 space-y-4 text-center shadow-sm"
          >
            <div className="flex items-center justify-center gap-3">
              <MdLocationOn size={28} className="text-[#292c44]" />
              <h1 className="text-2xl md:text-2xl font-semibold text-[#292c44]">
                Registered Office
              </h1>
            </div>

            <h2 className="text-lg md:text-xl font-semibold text-black">
              Renny Strips Ltd.
            </h2>

            <p className="text-sm leading-relaxed text-gray-600">
              Village Mangarh, Machhiwara Road, Kohara,
              <br />
              District Ludhiana, Punjab – 141112, India.
            </p>
          </motion.div>

          {/* BOX 3 – Unit II */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="bg-gray-100 rounded-2xl p-8 space-y-4 text-center shadow-sm"
          >
            <div className="flex items-center justify-center gap-3">
              <MdLocationOn size={28} className="text-[#292c44]" />
              <h1 className="text-2xl md:text-2xl font-semibold text-[#292c44]">
                Site Office
              </h1>
            </div>

            <h2 className="text-lg md:text-xl font-semibold text-black leading-snug">
              Renny Strips Ltd.
              {/* <br />
              <span className="text-base md:text-lg font-medium">
                (Furnace Division)
              </span> */}
            </h2>

            <p className="text-sm leading-relaxed text-gray-600">
              Village Mangarh, Machhiwara Road, Kohara,
              <br />
              District Ludhiana, Punjab – 141112, India.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="w-full bg-white px-6 md:px-20 py-24 relative border-t-4 border-[#292c44]">
        {/* Top decorative element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-[3px] bg-[#292c44]" />

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-center mb-24 text-[#292c44] tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Industrial Plant
        </motion.h2>

        {/* ================= UNIT I & II ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-28">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="w-full h-[380px] rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src={unit1}
              alt="Unit I Plant"
              className="w-full h-full object-cover transition-transform duration-500"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6 p-6 border-l-4 border-[#292c44]"
          >
            <div className="flex items-center gap-3">
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

        {/* ================= UNIT III ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Content */}
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

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="w-full h-[380px] rounded-2xl overflow-hidden shadow-md order-1 md:order-2"
          >
            <img
              src={unit3}
              alt="Unit III Plant"
              className="w-full h-full object-cover transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
