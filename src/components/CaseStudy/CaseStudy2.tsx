import React from 'react';
import Booking from '../../assets/Demo/Booking-Flight1.jpeg';


const CaseStudy2: React.FC = () => {
  return (
          <section id="featured-project" className="w-full max-w-4xl mx-auto my-10 px-6 py-10 bg-[#22252F] rounded-xl shadow-lg text-white">
            <div className="flex items-center justify-end">
        <div className="relative group">
          <button
            className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600"
          >
            <span
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            ></span>
            <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
              <div className="relative z-10 flex items-center space-x-3">
                <span
                  className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
                  >More Detail</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-5 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
                >
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  ></path>
                </svg>
              </div>
            </span>
          </button>
        </div>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-left leading-tight">
        RoamFree App - Booking Flight App
      </h2>
      
      <div className="mb-8 rounded-lg overflow-hidden shadow-md">
        <img
          src={Booking}
          alt="Booking Flight"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="space-y-6 text-[#BBBBBB]">
        <p className="text-lg leading-relaxed">
        In 2024, as online travel platforms grew increasingly complex and cluttered, I initiated RoamFree to explore how a clean, real-time flight booking experience could look. The aim was to let users quickly search, filter, and view flight results with minimal latency, while still being easy to use across devices.
        </p>
        <p className="text-lg leading-relaxed">
        led development end-to-end, integrating an external Flight API to fetch live data, designing efficient backend caching strategies to handle large datasets, and building a Next.js front-end for server-side rendering and SEO. The toughest part was optimizing query performance so results appeared in real-time without overwhelming the system.
        </p>
        <p className="text-lg leading-relaxed">
        The project served as a strong case study in API integration, caching optimization, and real-time data handling—all crucial skills for building scalable applications.
        </p>

        <div className="mt-8 pt-6 border-t border-gray-700">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Technologies Used:</h3>
          <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-2 text-base">
            <li>Front-End: Next.js, Tailwind CSS</li>
            <li>Back-End: Node.js, Express.js</li>
            <li>Database: MongoDB (with caching layer)</li>
            <li>API: Amadeus API / AviationStack</li>
            <li>Deployment: Vercel, Mongo Atlas</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy2;