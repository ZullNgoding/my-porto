import React from 'react';
import Kamus from '../../assets/Demo/Kamus.png';


const CaseStudy1: React.FC = () => {
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
        Kamus Indonesia - Inggris App
      </h2>
      
      <div className="mb-8 rounded-lg overflow-hidden shadow-md">
        <img
          src={Kamus}
          alt="Kamus App Demo"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="space-y-6 text-[#BBBBBB]">
        <p className="text-lg leading-relaxed">
        In 2024, seeing a lack of a modern, ad-free, and simple digital dictionary for Indonesian and English speakers, this project was initiated. The goal was to create a fast and user-friendly web application for seamless two-way translation, accessible on all devices.
        </p>
        <p className="text-lg leading-relaxed">
        My role involved full-stack development, from architecting the back-end logic to designing the intuitive front-end user interface. Key challenges included sourcing a comprehensive and reliable dictionary API, optimizing data retrieval for minimal latency, and ensuring a fully responsive layout that looks great on both desktop and mobile.
        </p>
        <p className="text-lg leading-relaxed">
        This project not only provided a valuable tool for language learners but also demonstrated a strong blend of API integration, responsive web design, and user-centric development.
        </p>

        <div className="mt-8 pt-6 border-t border-gray-700">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Technologies Used:</h3>
          <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-2 text-base">
            <li>Front-End: React, Tailwind CSS</li>
            <li>Back-End: Node.js, Express.js</li>
            <li>Database: MongoDB, Firebase</li>
            <li>API: Dictionary API</li>
            <li>Git & GitHub (Version Control)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy1;