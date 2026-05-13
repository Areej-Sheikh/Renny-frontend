import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

// images (keep yours)
import MS from "../assets/product-1.webp";
import Scaffolding from "../assets/product-2.webp";
import ERW from "../assets/product-3.webp";
import Coil from "../assets/hr-coil.png";
import rods from "../assets/product-5.webp";

const ProductCarousel = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const products = [
    { title: "MS Billets", image: MS, link: "/ms-billets" },
    { title: "Wire Rods", image: rods, link: "/wire-rods" },
    { title: "HR Coils", image: Coil, link: "/narrow-hrcoil" },
    { title: "ERW Pipes", image: ERW, link: "/erw-pipes-and-tubes" },
    {
      title: "Scaffolding Formwork",
      image: Scaffolding,
      link: "/scaffolding-formwork",
    },
  ];

  // 🔹 Scroll to slide
  const scrollToIndex = (index) => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.offsetWidth;

    container.scrollTo({
      left: index * width,
      behavior: "smooth",
    });
  };

  // 🔹 Buttons
  const nextSlide = () => {
    const next = Math.min(currentIndex + 1, products.length - 1);
    setCurrentIndex(next);
    scrollToIndex(next);
  };

  const prevSlide = () => {
    const prev = Math.max(currentIndex - 1, 0);
    setCurrentIndex(prev);
    scrollToIndex(prev);
  };

  // 🔹 Sync index on manual scroll (optimized)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const width = container.offsetWidth;
          if (width === 0) return;

          const index = Math.round(container.scrollLeft / width);
          setCurrentIndex(index);

          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 🔹 Auto slide when visible
  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1 >= products.length ? 0 : prev + 1;
        scrollToIndex(next);
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [inView]);

  // 🔹 Progress bar
  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={ref} className="w-full font-helvetica">
      <div className="relative w-full h-[85vh] overflow-hidden">
        {/* Slides */}
        <div
          ref={containerRef}
          className="flex w-full h-full overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {products.map((item, index) => (
            <section
              key={index}
              onClick={() => navigate(item.link)}
              className="min-w-full h-full snap-start relative cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="absolute bottom-10 left-6 md:left-20 z-10 text-white">
                <motion.h2
                  className="text-3xl md:text-5xl font-bold mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                >
                  {item.title}
                </motion.h2>

                <button className="border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition">
                  Know More →
                </button>
              </div>
            </section>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 
             flex items-center justify-center 
             w-12 h-12 md:w-14 md:h-14
             text-white hover:scale-110 active:scale-95
             transition-all duration-300"
        >
          <i className="ri-arrow-left-line text-xl md:text-2xl font-bold"></i>
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 
             flex items-center justify-center 
             w-12 h-12 md:w-14 md:h-14
             text-white hover:scale-110 active:scale-95
             transition-all duration-300"
        >
          <i className="ri-arrow-right-line text-xl md:text-2xl font-bold"></i>
        </button>
      </div>
    </section>
  );
};

export default ProductCarousel;
