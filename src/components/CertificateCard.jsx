import React, { useState } from "react";

const CertificateCard = ({ certificateDetails }) => {
  const [viewClicked, setViewClicked] = useState(false);

  const handleClick = () => {
    setViewClicked(prev => !prev);
  };


  return (
    <div className="h-90 flex bg-gray-100 flex-col rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-2xl
">
      {viewClicked ? (
        <div className="h-full flex flex-col w-full">
          <div className="flex flex-row w-full flex-1">
          <p className="flex-1 bg-gray-100 p-3 text-sm overflow-y-auto">
            {certificateDetails.description}
          </p>
            <button
            onClick={handleClick}
            className="relative index-50 top-2 right-2 z-10 h-8 w-8 mt-2 mr-1 bg-gray-200 hover:bg-gray-300 text-sm rounded-full text-xl font-semibold cursor-pointer"
          >
            x
          </button>
          </div>
          

          <a
            href={certificateDetails.img}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 flex items-center justify-center bg-[#292c44] text-white text-sm"
          >
            Full Image
          </a>

          
        </div>
      ) : (
        <div className="h-full flex flex-col cursor-pointer" onClick={handleClick}>
          <div className="h-11/12 bg-emerald-200 flex items-center justify-center">
            <img
              className="object-contain max-w-full"
              src={certificateDetails.img}
              alt="certificate"
            />
          </div>

          <div className="h-1/12 bg-[#292c44] text-white text-sm flex flex-row justify-between place-items-center place-content-center p-2 cursor-pointer">
            <p>{certificateDetails.title}</p>
            <button>
            View
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateCard;