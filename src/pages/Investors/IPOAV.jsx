import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ipoHero from "../../assets/investorbanner.webp";
import InvestorSidebar from "../../components/InvestorSidebar";

const IPOAV = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const brandColor = "#292C44";
  const mainHeadingFont =
    "font-['Helvetica','Arial',sans-serif] text-[37px] font-semibold";

  const getDrivePreviewUrl = (url) => {
    if (!url) return "";

    // Match common Drive formats
    const match =
      url.match(/\/d\/([a-zA-Z0-9_-]+)/) || // /file/d/ID/
      url.match(/id=([a-zA-Z0-9_-]+)/); // open?id=ID

    if (!match || !match[1]) return "";

    return `https://drive.google.com/file/d/${match[1]}/preview`;
  };

  // ---------------- FETCH VIDEOS ----------------
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/ipo-av");
        setVideos(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching IPO videos:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="font-['Helvetica','Arial',sans-serif]">
      <Navbar />

      {/* ---------------- HERO ---------------- */}
      <section className="relative w-full h-[55vh] overflow-hidden">
        <img
          src={ipoHero}
          alt="IPO Audio Visual"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-16 left-0 w-full px-6 lg:px-20 z-10">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-white ${mainHeadingFont}`}
          >
            IPO Audio Visual
          </motion.h1>
        </div>
      </section>

      {/* ---------------- CONTENT ---------------- */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-20 pb-32 bg-white px-6"
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-12 items-start">
          <div className="col-span-12 lg:col-span-8">
            <div
              className="inline-block text-white px-5 py-1.5 rounded-md mb-6 font-semibold text-[13px] tracking-wide"
              style={{ backgroundColor: brandColor }}
            >
              INVESTOR RELATIONS
            </div>

            <h2 className={`${mainHeadingFont} mb-12 text-gray-900`}>
              IPO Audio Visual
            </h2>

            {/* ---------------- VIDEO GRID ---------------- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {isLoading ? (
                <div className="col-span-full text-gray-400 animate-pulse">
                  Loading library...
                </div>
              ) : videos.length > 0 ? (
                videos.map((video, i) => {
                  const url = video?.videoUrl || "";
                  const type = video?.type;

                  return (
                    <motion.div
                      key={video?._id || i}
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col"
                    >
                      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-black">
                        {/* ===== FILE UPLOAD (S3 / LOCAL) ===== */}
                        {type === "file" && url ? (
                          <video
                            controls
                            preload="metadata"
                            playsInline
                            className="w-full h-full object-cover"
                          >
                            <source src={url} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : type === "link" && url ? (
                          /* ===== EXTERNAL LINK ===== */
                          <iframe
                            src={
                              url.includes("drive.google.com")
                                ? getDrivePreviewUrl(url)
                                : url
                            }
                            title={video?.title || "Video"}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full text-gray-500 italic text-sm">
                            Video link unavailable
                          </div>
                        )}
                      </div>

                      <h3 className="mt-5 text-center text-[16px] font-bold text-gray-800 leading-snug">
                        {video?.title || "Untitled Video"}
                      </h3>
                    </motion.div>
                  );
                })
              ) : (
                <div className="col-span-full p-10 text-center text-gray-400 italic bg-gray-50 rounded-xl border border-dashed border-gray-200">
                  No audio-visual materials have been uploaded yet.
                </div>
              )}
            </div>
          </div>

          {/* ---------------- SIDEBAR ---------------- */}
          <div className="col-span-12 lg:col-span-4 sticky top-28">
            <InvestorSidebar />
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default IPOAV;
