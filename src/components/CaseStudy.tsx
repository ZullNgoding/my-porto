import React from "react";
import { motion } from "framer-motion";
import Kamus from "../assets/Demo/Kamus.png";
import Booking from "../assets/Demo/Booking-Flight1.jpeg";
import Coffee from "../assets/Demo/Coffee1.jpeg";
import Saas from "../assets/Demo/Saas2.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

interface Project {
  id: string;
  title: string;
  image: string;
  description: string[];
  tech: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: "project-kamus",
    title: "Kamus Indonesia - Inggris App",
    image: Kamus,
    description: [
      "In 2024, seeing a lack of a modern, ad-free, and simple digital dictionary for Indonesian and English speakers, this project was initiated. The goal was to create a fast and user-friendly web application for seamless two-way translation, accessible on all devices.",
      "My role involved full-stack development, from architecting the back-end logic to designing the intuitive front-end user interface. Key challenges included sourcing a comprehensive and reliable dictionary API, optimizing data retrieval for minimal latency, and ensuring a fully responsive layout that looks great on both desktop and mobile.",
      "This project not only provided a valuable tool for language learners but also demonstrated a strong blend of API integration, responsive web design, and user-centric development.",
    ],
    tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase", "Dictionary API", "Git & GitHub"],
    link: "#",
  },
  {
    id: "project-roamfree",
    title: "RoamFree App - Booking Flight App",
    image: Booking,
    description: [
      "In 2024, as online travel platforms grew increasingly complex and cluttered, I initiated RoamFree to explore how a clean, real-time flight booking experience could look. The aim was to let users quickly search, filter, and view flight results with minimal latency, while still being easy to use across devices.",
      "I led development end-to-end, integrating an external Flight API to fetch live data, designing efficient backend caching strategies to handle large datasets, and building a Next.js front-end for server-side rendering and SEO. The toughest part was optimizing query performance so results appeared in real-time without overwhelming the system.",
      "The project served as a strong case study in API integration, caching optimization, and real-time data handling—all crucial skills for building scalable applications.",
    ],
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Amadeus API", "Vercel", "Mongo Atlas"],
    link: "#",
  },
  {
    id: "project-coffeeverse",
    title: "CoffeeVerse - E-Commerce Coffee Shop",
    image: Coffee,
    description: [
      "In 2024, inspired by the booming coffee culture and the importance of seamless online shopping, I developed CoffeeVerse, an e-commerce platform tailored for coffee lovers. The goal was to showcase how a modern web store can provide intuitive browsing, cart management, and secure online payments.",
      "I handled the full-stack development, from designing the product catalog UI to building the backend logic for orders and user accounts. A key milestone was integrating Stripe Checkout for secure payments, ensuring transactions remained smooth and user-friendly.",
      "This project underscored my skills in e-commerce workflows, payment gateway integration, and responsive UI design, making it a strong example of building consumer-facing platforms.",
    ],
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Stripe", "Vercel", "Railway"],
    link: "#",
  },
  {
    id: "project-teamflow",
    title: "TeamFlow Collab Hub - SaaS",
    image: Saas,
    description: [
      "In 2024, recognizing the need for lightweight, user-friendly tools that combine project management and team communication, I built TeamFlow, a SaaS prototype designed to help small teams organize tasks and chat in real-time. The goal was to create a streamlined platform that integrates Kanban boards with live chat, enabling teams to manage projects without switching between multiple tools.",
      "My role covered full-stack development, from building secure user authentication to designing an intuitive Kanban drag-and-drop interface. The biggest challenges were implementing real-time communication with Socket.io and ensuring smooth synchronization of tasks across multiple clients.",
      "This project highlighted my ability to design scalable back-end systems and intuitive UIs, while demonstrating how real-time features can significantly improve collaboration.",
    ],
    tech: ["React", "Tailwind CSS", "shadcn/ui", "Node.js", "Express.js", "PostgreSQL", "Socket.io", "JWT", "Vercel", "Railway"],
    link: "#",
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      id={project.id}
      className="relative bg-[#22252F] rounded-2xl shadow-lg overflow-hidden border border-[#2E323E]/60"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600" />

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8">
        <div className="md:w-2/5 shrink-0 flex flex-col">
          <div className="rounded-xl overflow-hidden border border-[#2E323E] shadow-md bg-[#1A1C23]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full bg-[#1A1C23] text-xs text-[#AAAAAA] border border-[#333842] hover:border-emerald-500/40 hover:text-emerald-300 transition-colors duration-200"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-4">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1A1C23] border border-[#2E323E] text-sm font-medium text-white hover:border-emerald-500/50 hover:text-emerald-300 transition-all duration-300 group"
            >
              More Detail
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="md:w-3/5 flex flex-col justify-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">
            {project.title}
          </h3>

          <div className="space-y-3">
            {project.description.map((para, i) => (
              <p key={i} className="text-sm sm:text-base text-[#BBBBBB] leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const CaseStudy: React.FC = () => {
  return (
    <section id="work" className="w-full max-w-5xl mx-auto my-10 px-6 py-10">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex items-center gap-4 mb-10"
      >
        <div className="w-2 h-10 bg-gradient-to-b from-emerald-500 to-sky-600 rounded-full" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="space-y-6"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default CaseStudy;

