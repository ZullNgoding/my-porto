import React from 'react';
import Saas from '../../assets/Demo/Saas2.jpeg';


const CaseStudy4: React.FC = () => {
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
        TeamFlow Collab Hub - Saas 
      </h2>
      
      <div className="mb-8 rounded-lg overflow-hidden shadow-md">
        <img
          src={Saas}
          alt="Saas Collab hub"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="space-y-6 text-[#BBBBBB]">
        <p className="text-lg leading-relaxed">
        In 2024, recognizing the need for lightweight, user-friendly tools that combine project management and team communication, I built TeamFlow, a SaaS prototype designed to help small teams organize tasks and chat in real-time. The goal was to create a streamlined platform that integrates Kanban boards with live chat, enabling teams to manage projects without switching between multiple tools.
        </p>
        <p className="text-lg leading-relaxed">
        My role covered full-stack development, from building secure user authentication to designing an intuitive Kanban drag-and-drop interface. The biggest challenges were implementing real-time communication with Socket.io and ensuring smooth synchronization of tasks across multiple clients.
        </p>
        <p className="text-lg leading-relaxed">
        This project highlighted my ability to design scalable back-end systems and intuitive UIs, while demonstrating how real-time features can significantly improve collaboration.
        </p>

        <div className="mt-8 pt-6 border-t border-gray-700">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Technologies Used:</h3>
          <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-2 text-base">
            <li>Front-End: React, Tailwind CSS, shadcn/ui</li>
            <li>Back-End: Node.js, Express.js</li>
            <li>Database: PostgreSQL</li>
            <li>Real-Time: Socket.io</li>
            <li>Authentication: JWT</li>
            <li>Delpoyment: Vercel, Railway</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy4;