import React from "react";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import contactBanner from "../../assets/contactBanner.jpg";
import rennylocation from "../../assets/renny's-location.png";
import unit1 from "../../assets/Unit-1.jpg";
import unit3 from "../../assets/Unit-3.jpg";

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
        {/* <div className="relative z-10 h-full flex items-center  px-6 md:px-20">
          <h1 className="text-4xl md:text-5xl font-semibold text-white ">
            Renny's
          </h1>
        </div> */}
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
      {/* ================= CONTACT INFO WITH ANIMATION ================= */}
      <section className="w-full bg-gray-100 text-black px-6 md:px-20 py-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
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
            className="bg-white border border-white rounded-xl p-6 space-y-4"
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
            className="bg-white border border-white rounded-xl p-6 space-y-4 text-center"
          >
            <div className="flex items-center justify-center gap-3">
              <MdLocationOn size={28} className="text-[#292c44]" />
              <h1 className="text-2xl md:text-3xl font-semibold text-[#292c44]">
                Unit I
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
            className="bg-white border border-white rounded-xl p-6 space-y-4 text-center"
          >
            <div className="flex items-center justify-center gap-3">
              <MdLocationOn size={28} className="text-[#292c44]" />
              <h1 className="text-2xl md:text-3xl font-semibold text-[#292c44]">
                Unit II
              </h1>
            </div>

            <h2 className="text-lg md:text-xl font-semibold text-black leading-snug">
              Renny Strips Ltd.
              <br />
              <span className="text-base md:text-lg font-medium">
                (Furnace Division)
              </span>
            </h2>

            <p className="text-sm leading-relaxed text-gray-600">
              Village Mangarh, Machhiwara Road, Kohara,
              <br />
              District Ludhiana, Punjab – 141112, India.
            </p>
          </motion.div>

          {/* BOX 4 – Unit III */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="bg-white border border-white rounded-xl p-6 space-y-4 text-center"
          >
            <div className="flex items-center justify-center gap-3">
              <MdLocationOn size={28} className="text-[#292c44]" />
              <h1 className="text-2xl md:text-3xl font-semibold text-[#292c44]">
                Unit III
              </h1>
            </div>

            <h2 className="text-lg md:text-xl font-semibold text-black leading-snug">
              Renny Strips Ltd.
              <br />
              <span className="text-base md:text-lg font-medium">
                (Furnace Division)
              </span>
            </h2>

            <p className="text-sm leading-relaxed text-gray-600">
              Lakhowal Road, Opposite PSPCL House, Kohara,
              <br />
              Ludhiana, Punjab – 141112, India.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="w-full bg-white px-6 md:px-20 py-20">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Industrial Plant
        </motion.h2>

        {/* ===== UNIT I ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full h-[360px] rounded-xl overflow-hidden"
          >
            <img
              src={unit1}
              alt="Unit I Plant"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-5"
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
          </motion.div>
        </div>

        {/* ===== UNIT II ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-5 order-2 md:order-1"
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
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full h-[360px] rounded-xl overflow-hidden order-1 md:order-2"
          >
            <img
              src={unit3}
              alt="Unit II Plant"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
