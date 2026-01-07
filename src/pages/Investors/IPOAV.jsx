import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import Navbar from '../../components/Navbar';
import ipoHero from '../../assets/investorbanner.jpeg';
import InvestorSidebar from '../../components/InvestorSidebar';

const IPOAV = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const brandColor = '#292C44';
  const mainHeadingFont =
    "font-['Helvetica','Arial',sans-serif] text-[37px] font-semibold";
  const subHeadingFont =
    "font-['Helvetica','Arial',sans-serif] text-[18px] font-semibold";

  // LOGIC TO CONVERT DRIVE LINK TO EMBED LINK
  const getEmbedUrl = driveUrl => {
    if (!driveUrl) return '';
    return driveUrl.replace(/\/view.*$/, '/preview');
  };

  useEffect(() => {
    const fetchVideos = async () => {
      const data = [
        {
          title: 'DRHP Statutory AV - English',
          driveUrl:
            'https://drive.google.com/file/d/1aTuU8Kj31PcgptbbV7yk-Mgo6VpPMYMa/view',
        },
        {
          title: 'DRHP Statutory AV - Hindi',
          driveUrl:
            'https://drive.google.com/file/d/1wrHiuYyk-CN_7PxuqRAWTzhqw07O058P/view',
        },
      ];
      setVideos(data);
      setIsLoading(false);
    };
    fetchVideos();
  }, []);

  if (isLoading) return null;

  return (
    <div className="font-['Helvetica','Arial',sans-serif]">
      <Navbar />

      {/* -------------------- HERO SECTION -------------------- */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <img
          src={ipoHero}
          alt="IPO Audio Visual"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Heading positioned at the bottom left */}
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

      {/* -------------------- MAIN CONTENT SECTION -------------------- */}
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

            {/* VIDEO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {videos.map((video, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-100">
                    <iframe
                      width="100%"
                      height="100%"
                      src={getEmbedUrl(video.driveUrl)}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <h3 className="mt-5 text-center text-[16px] font-bold text-gray-800 leading-snug">
                    {video.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* REUSABLE STICKY SIDEBAR */}
          <div className="col-span-12 lg:col-span-4 sticky top-28">
            <InvestorSidebar />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default IPOAV;
