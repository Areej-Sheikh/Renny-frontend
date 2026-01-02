

import community from '../../assets/community.jpg';
import community1 from '../../assets/community1.jpg';
import community2 from '../../assets/community2.jpg';
// import community3 from '../../assets/community3.jpg';
// import community4 from '../../assets/community4.jpg';
// import community5 from '../../assets/community5.jpg';
import quotes from '../../assets/quotes.png';
// import DesignCentre from './../About/DesignCentre';
const Community = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="relative w-full">
        {/* Image */}
        <img
          src={community}
          alt="Community"
          className="w-full h-full object-cover"
        />

        {/* Text overlay */}
        <h1 className="absolute bottom-26 left-10 text-white text-7xl md:text-5xl tracking-wide">
          COMMUNITY DEVELOPMENT
        </h1>
      </section>

      {/* Quote Section */}
      <section className="relative bg-white">
        {/* Quotes icon – top left */}
        <img
          src={quotes}
          alt="Quotes"
          className="absolute top-6 left-6 w-16 md:w-20 z-10"
        />

        {/* Background image container */}
        <div className="relative flex items-center justify-center h-[100vh]">
          <img
            src={community1}
            alt="Community Activity 1"
            className=" h-full object-cover object-center"
          />

          {/* Quote + underline + author */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black px-6">
            <h1 className="text-2xl md:text-3xl font-semibold max-w-3xl">
              “Sustainable development is impossible without community
              involvement.”
            </h1>

            <div className="mt-4 h-1 w-1/4 bg-blue opacity-80" />

            <h2 className="mt-3 text-base md:text-lg font-medium">
              Kofi Annan (Former UN Secretary-General)
            </h2>
          </div>
        </div>
      </section>

      <section className="relative w-full">
        <div className="relative">
          {/* Background image */}
          <img
            src={community2}
            alt="Community Activity 2"
            className="w-full h-full object-cover"
          />

          {/* Left-aligned text overlay */}
          <div className="absolute inset-0 flex items-center ">
            <div className="ml-8 md:ml-16 max-w-xs text-left text-white">
              <h4 className="text-4xl font-semibold mb-3">
                Shaping a Good Life
              </h4>
              <div className="m-4 h-1 w-3/4 bg-green-500 opacity-80"></div>
              <p className="text-xl md:text-base leading-relaxed">
                Renny’s commitment to a Better, Greener &amp; Stronger Community
                is evident through various initiatives, from public asset
                building to healthcare. These efforts reflect Renny’s deep
                dedication to uplifting the community and fostering sustainable
                development.
              </p>
            </div>
          </div>

          {/* Optional dark overlay for readability */}
        </div>
      </section>
    </div>
  );
};

export default Community;
