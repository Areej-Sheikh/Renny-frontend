import React from 'react';
import { motion } from 'framer-motion';

// Asset Imports
import adoptionSchool from '../../assets/Adoption_School.webp';
import infrastructure from '../../assets/Infrastructure.webp';
import medicalSupport from '../../assets/Medical.webp';
import publicPond from '../../assets/Public_Pond.webp';

const FeaturedProjects = () => {
  const projects = [
    { img: adoptionSchool, title: "Adoption of School" },
    { img: infrastructure, title: "Infrastructure Development" },
    { img: medicalSupport, title: "Medical Support by Conducting Medical Camps" },
    { img: publicPond, title: "Adoption of Public Pond" }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

return (
  <>
    {/* 6. Featured Projects Section */}
    <section className="py-20 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto bg-white">
  
  {/* Header Section */}
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }}
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    }}
    className="mb-16 flex flex-col items-center"
  >
    {/* Heading: Centered with Color Blend and Full Underline */}
    <div className="mb-6 w-fit flex flex-col items-center">
      <h2 
        className="font-bold pb-2 whitespace-nowrap text-center"
        style={{ 
          fontFamily: 'var(--font-helvetica)', 
          fontSize: '48px',
          lineHeight: '1.2',
          background: "linear-gradient(90deg, #000000 0%, #00A63E 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block"
        }}
      >
        Featured Projects
      </h2>
      {/* Continuous Underline matched to text width */}
      <div className="w-full h-0.5 bg-blue mx-auto rounded-full mt-1" />
    </div>
    
    {/* Single Line Description */}
    <p 
      className="text-[16px] md:text-[18px] text-[#333] whitespace-nowrap text-center"
      style={{ fontFamily: 'var(--font-helvetica)' }}
    >
      Our featured projects showcase real-world actions that involve sustainability, empower communities, and promote responsible growth.
    </p>
  </motion.div>

  {/* Projects Grid with Staggered Animation */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {projects.map((project, index) => (
      <motion.div 
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 15, 
          delay: index * 0.1 
        }}
        className="flex flex-col items-center text-center"
      >
        {/* Image Container with Hover */}
        <div className="w-full overflow-hidden rounded-2xl mb-6 shadow-md border border-gray-100">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            src={project.img} 
            alt={project.title} 
            className="w-full h-[220px] object-cover cursor-pointer"
          />
        </div>

        {/* Project Title */}
        <h4 
          className="text-[18px] md:text-[20px] font-bold leading-snug px-2"
          style={{ color: '#000', fontFamily: 'var(--font-helvetica)' }}
        >
          {project.title}
        </h4>
      </motion.div>
    ))}
  </div>
      </section>
    </>
  );
};

export default FeaturedProjects;