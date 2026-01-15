import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

// Asset Imports
import envSustainabilityImg from "../../assets/Environmental Sustainability.webp";
import sustainableDevImg from "../../assets/Sustainable_Development.webp";
import greenLeafBG from "../../assets/GreenLeaf.webp";

/* --------------------------------------------------------------------------
   Animation Components (Reference-based)
   -------------------------------------------------------------------------- */
const AnimatedSection = ({ children, xValue = 0, yValue = 0, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    isInView ? controls.start("visible") : controls.start("hidden");
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.8, delay: delay * 0.2, ease: "easeOut" },
        },
        hidden: { opacity: 0, x: xValue, y: yValue },
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

/* --------------------------------------------------------------------------
   Main Component
   -------------------------------------------------------------------------- */
const EnvironmentalAndReport = () => {
  const [activeBox, setActiveBox] = useState(0);
  const recaptchaRef = useRef();

  const stewardshipData = [
    {
      title: "Go Green with Solar",
      desc: "At Renny Strips, sustainability is more than a goal—it’s a responsibility. Our 22MW solar power setup helps minimize conventional energy use and supports our journey towards a greener tomorrow.",
    },
    {
      title: "CBAM & Sustainable Market Access",
      desc: " Renny Strips Ltd. strengthens its European presence through CBAM-aligned practices, delivering high-quality steel productswith strong ROI. Fully in-house production enables rapid execution while maintaining a significantly lower carbon footprint than industry standards.",
    },
    {
      title: "Low-Emission Manufacturing Excellence",
      desc: "With vertically integrated facilities, Renny tracks emission from raw materials to finished goods. In-house HR coils, tubes, and wire rods reduce logistics emissions,control costs,and ensure complete carbon accountability",
    },
    {
      title: "Circular Economy & Green Stewardship",
      desc: "Committed to circular economy principles, Renny prioritize waste optimization and partners with government bodies to expandgreen cover. These initiatives support ecological restoration and long-term environmental resilience.",
    },
  ];

  const handleDownload = (e) => {
    e.preventDefault();
    const token = recaptchaRef.current.getValue();
    if (!token) {
      alert("Please verify that you are not a robot.");
      return;
    }
    alert("Captcha Verified! Download starting...");
  };

  return (
    <div className="bg-white overflow-hidden">
   {/* 7. Environmental Stewardship Section */}
 <section className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-16 bg-white overflow-hidden">
    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
      
      {/* Left Side: Restored to original compact card sizes */}
      <div className="w-full lg:w-1/2 shrink-0 ">
        <AnimatedSection xValue={-100}>
          <div className="mb-8 relative w-fit m">
            <h2
              className="font-bold pb-4 tracking-tight"
              style={{
                fontFamily: "var(--font-helvetica)",
                fontSize: "48px",
                background: "linear-gradient(90deg, #000000 0%, #00A63E 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: "1.2",
                whiteSpace: "nowrap",
                display: "block",
              }}
            >
              Environmental Stewardship
            </h2>
            <div className="w-full h-0.5 bg-blue mx-auto rounded-full mt-1" />
          </div>

          {/* space-y-4 restored for tighter vertical spacing */}
          <div className="space-y-4">
            {stewardshipData.map((item, index) => {
              const isActive = activeBox === index;
              return (
                <motion.div
                  key={index}
                  onClick={() => setActiveBox(index)}
                  /* p-4 and rounded-lg restored for previous card height */
                  className={`group p-4 rounded-lg border transition-all duration-300 cursor-pointer shadow-sm ${
                    isActive
                      ? "bg-[#292c44] border-[#292c44]"
                      : "bg-[#f8faff] border-gray-200 hover:bg-[#292c44]"
                  }`}
                >
                  <h3
                    /* text-[17px] restored */
                    className={`text-[17px] font-bold mb-2 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-black group-hover:text-white"
                    }`}
                    style={{ fontFamily: "var(--font-helvetica)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    /* text-[14px] restored */
                    className={`text-[14px] leading-relaxed transition-colors duration-300 ${
                      isActive ? "text-gray-200" : "text-gray-600 group-hover:text-gray-200"
                    }`}
                    style={{ fontFamily: "var(--font-helvetica)" }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>

      {/* Right Side: Remains large and square to fill the section space */}
      <div className="w-full lg:w-1/2 flex justify-end">
        <AnimatedSection xValue={100} delay={1}>
          <div
            className="overflow-hidden rounded-[2.5rem] shadow-2xl w-full"
            style={{
              height: "clamp(500px, 50vw, 650px)",
            }}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={envSustainabilityImg}
              alt="Environmental Sustainability"
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
      {/* 8. Download Emission Report Section */}
      <section className="py-20 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Left: SDG Grid Image */}
          <div className="w-full lg:w-3/5">
            <AnimatedSection xValue={-50}>
              <img
                src={sustainableDevImg}
                alt="SDG Goals"
                className="w-full h-auto object-contain"
              />
            </AnimatedSection>
          </div>

          {/* Right: Background Leaf Image with Centered Form */}
          <div className="w-full lg:w-2/5 relative min-h-[650px] flex items-center justify-center rounded-[32px] overflow-hidden shadow-2xl">
            {/* Background Image Container */}
            <div
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${greenLeafBG})` }}
            >
              <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
            </div>

            {/* Perfect Center Centering for Form */}
            <div className="relative z-10 w-full flex items-center justify-center p-6">
              <AnimatedSection yValue={50} delay={2}>
                <div className="w-full max-w-[400px] bg-white/85 backdrop-blur-lg rounded-[24px] p-8 shadow-xl border border-white/50">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full border-2 border-[#19d366] overflow-hidden bg-white shadow-sm">
                      <img
                        src={sustainableDevImg}
                        alt="logo"
                        className="scale-[3.5] mt-1"
                      />
                    </div>
                    <h2
                      className="text-2xl font-bold text-gray-800 leading-tight"
                      style={{ fontFamily: "var(--font-helvetica)" }}
                    >
                      Download <br /> Emission Report
                    </h2>
                  </div>

                  <form onSubmit={handleDownload} className="space-y-4">
                    <div className="space-y-1 text-left">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter Name"
                        className="w-full p-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#19d366] outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1 text-left">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="email@company.com"
                        className="w-full p-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#19d366] outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1 text-left">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 00000 00000"
                        className="w-full p-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#19d366] outline-none transition-all"
                      />
                    </div>

                    <div className="py-2 flex justify-center scale-[0.8] origin-center">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#3d6b3d] hover:bg-[#2a4d2a] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md"
                      style={{ fontFamily: "var(--font-helvetica)" }}
                    >
                      DOWNLOAD REPORT <span className="text-xl">›</span>
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentalAndReport;