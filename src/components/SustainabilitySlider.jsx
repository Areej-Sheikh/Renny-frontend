import React, { useState, useEffect } from 'react';

import sustainability1 from '../assets/Sustainability1.webp';
import sustainability3 from '../assets/Sustainability3.webp';
import sustainability4 from '../assets/Sustainability4.webp';

const SustainabilitySlider = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "CBAM & Sustainable Market Access",
      description: "Renny Strips Ltd. strengthens its European presence through CBAM-aligned practices, delivering high-quality steel products with strong ROI. Fully in-house production enables rapid execution while maintaining a significantly lower carbon footprint.",
      image: sustainability1
    },
    {
      title: "Industry-Best Low-Emission Standards",
      description: "Renny integrates sustainability through its vertically integrated manufacturing ecosystem and 22 MW solar power plant, meeting nearly 30% of energy needs while reducing emissions, improving resource efficiency, and supporting responsible manufacturing.",
      image: sustainability3
    },
    {
      title: "Circular Economy & Stewardship",
      description: "Renny Strips Ltd. prioritizes effective waste management and collaborates with local authorities. The company continually invests in innovative recycling solutions and environmentally responsible practices.",
      image: sustainability4
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl lg:rounded-4xl shadow-2xl bg-white">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full shrink-0 h-full">
            <div className="flex flex-col lg:flex-row h-full">
              
              {/* Image Container: Order 1 on mobile, Order 2 on desktop */}
              <div className="w-full lg:w-2/5 h-114 lg:h-82 order-1 lg:order-2 shrink-0 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Container: Order 2 on mobile, Order 1 on desktop */}
              <div className="w-full lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center order-2 lg:order-1">
                <h3 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-gray-900">
                  {slide.title}
                </h3>
                <p className="text-gray-700 text-md lg:text-base leading-relaxed">
                  {slide.description}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Progress Indicators (Dots) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === i ? "w-6 bg-blue-900" : "w-2 bg-gray-300"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SustainabilitySlider;