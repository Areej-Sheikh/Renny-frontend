import React, { useState, useEffect } from 'react';

import sustainability1 from '../assets/Sustainability1.webp';
import sustainability3 from '../assets/Sustainability3.webp';
import sustainability4 from '../assets/Sustainability4.webp';

const SustainabilitySlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % 3);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-4xl shadow-2xl">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {/* ===== CARD 1 ===== */}
        <div className="w-full shrink-0">
          <div className="flex flex-col lg:flex-row bg-white  shadow-lg overflow-hidden">
            <div className="lg:w-3/5 p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-6">
                CBAM & Sustainable Market Access
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Renny Strips Ltd. strengthens its European presence through
                CBAM-aligned practices, delivering high-quality steel products
                with strong ROI. Fully in-house production enables rapid
                execution while maintaining a significantly lower carbon
                footprint than industry standards.
              </p>
            </div>
            <div className="lg:w-2/5 h-72 lg:h-auto">
              <img
                src={sustainability1}
                alt="CBAM Sustainability"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ===== CARD 2 ===== */}

        <div className="w-full shrink-0">
          <div className="flex flex-col lg:flex-row bg-white  shadow-lg overflow-hidden">
            <div className="lg:w-3/5 p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-6">
                Industry-Best Low-Emission Standards
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Renny Strips Ltd. tracks emissions from raw materials to
                finished products, thanks to fully integrated production
                facilities. In-house manufacturing of HR coils, tubes, and wire
                rods reduces logistical emissions and ensures comprehensive
                carbon accountability.
              </p>
            </div>
            <div className="lg:w-2/5 h-72 lg:h-auto">
              <img
                src={sustainability3}
                alt="CBAM Sustainability"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* ===== CARD 3 ===== */}
        <div className="w-full shrink-0">
          <div className="flex flex-col lg:flex-row bg-white  shadow-lg overflow-hidden">
            <div className="lg:w-3/5 p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-6">
                Circular Economy and Environmental Stewardship
              </h3>
              <p className="text-gray-700 leading-relaxed">
             Renny Strips Ltd. prioritizes effective waste management and collaborates with local authorities, including the Department of Forest, Punjab, and the National Highway Authority, to expand green cover.Renny’s commitment to fostering a more sustainable  ecosystem.
              </p>
            </div>
            <div className="lg:w-2/5 h-72 lg:h-auto">
              <img
                src={sustainability4}
                alt="CBAM Sustainability"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilitySlider;
