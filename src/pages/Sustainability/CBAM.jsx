import React from "react";
  const imageZoom = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.18 },
    },
  };
const CBAM = () => {
  return (
    <div className="relative w-full overflow-x-hidden font-helvetica">
      {" "}
      {/* ================= BANNER SECTION ================= */}
  
    </div>
  );
};

export default CBAM;
