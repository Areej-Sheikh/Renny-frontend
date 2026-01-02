import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-gray-100 w-full py-16 px-16 ">
      <div className="bg-white rounded-2xl shadow-lg h-full p-10 flex flex-col items-center justify-between gap-10">
        {/* Text */}
        <div className="text-left">
          <h1 className="text-3xl text-center font-semibold text-blue hover:text-blue-800 transition-colors">
            Join Our News Letter
          </h1>
          <p className="mt-3 text-gray-600 text-center max-w-md">
            Stay updated with the latest insights, industry trends, and expert
            guidance from Renny Strips delivered straight to your inbox.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="
        w-56
        px-4 py-3
        rounded-lg border
        focus:outline-none
        focus:ring-2 focus:ring-blue-500
      "
          />

          <input
            type="email"
            placeholder="Your Email"
            className="
        w-64
        px-4 py-3
        rounded-lg border
        focus:outline-none
        focus:ring-2 focus:ring-blue-500
      "
          />

          <button
            type="submit"
            className="
        px-8 py-3
        bg-blue text-white
        rounded-lg font-semibold
        hover:bg-blue-800
        transition-colors
        whitespace-nowrap
      "
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
