import React from "react";
import Slider from "../../components/Slider";

const timelineData = [
  {
    year: "1996",
    title: "Incorporation of our Company",
    description: "Commenced trading of MS Billets.",
  },
  {
    year: "2005",
    title:
      "Setting up a rolling mill at Unit I and commenced manufacturing of wire rods.",
  },
  {
    year: "2016",
    title: "Export of galvanized iron fully threaded rods to U.A.E.",
  },
  {
    year: "2018",
    title: "Set up of continuous casting machine and rolling mill at Unit I.",
  },
  {
    year: "2019",
    title:
      "Set up of continuous casting machine and induction melting furnace at Unit II.",
  },
  {
    year: "2021",
    title: "Expansion of Unit I.",
  },
  {
    year: "2023",
    title: "Installation of 66Kva Sub-station at Unit I.",
  },
  {
    year: "2024",
    title: "Commencement of production of HR coils.",
  },
  {
    year: "2025",
    title: `Set up of Unit III and commencement of production of ERW pipes and tubes and Scaffolding and Formwork systems.


Company has acquired the land in Ludhiana for setting up a new manufacturing unit i.e. Proposed Unit IV.

Received first export order for Scaffolding and Formwork systems.

Exported Scaffolding and Formwork systems to 13 countries.

Initiated installation of 22 MW solar power plant.`,
  },
];

function Timeline() {
  return (
    <div className="min-h-screen bg-[#414042] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Timeline Heading */}
        <h2 className="text-4xl font-bold text-center mb-16 text-[#FFA800]">
          Timeline
        </h2>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-white h-full"></div>

          {timelineData.map((event, index) => {
            const isRight = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex w-full mb-16 group ${
                  isRight ? "justify-end" : "justify-start"
                }`}
              >
                {/* Card */}
                <div
                  className={`w-5/12 ${isRight ? "pl-10" : "pr-10"} text-left`}
                >
                  <div className="relative overflow-hidden bg-white p-6 rounded-lg border border-gray-300 shadow-md cursor-pointer">
                    
                    {/* Hover Overlay */}
                    <div
                      className="absolute inset-0 bg-[#0C183E] -translate-x-full 
                      group-hover:translate-x-0 transition-transform duration-500 ease-out"
                    ></div>

                    {/* Content */}
                    <div className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      <h3 className="text-2xl font-bold">{event.year}</h3>

                      {/* Preserve spacing & line breaks */}
                      <h4 className="text-xl mt-2 whitespace-pre-line">
                        {event.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-6 h-6 
                  bg-white rounded-full border-4 border-gray-500 shadow
                  transition-all duration-300
                  group-hover:scale-125 group-hover:bg-[#0C183E] group-hover:border-white z-10"
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
