import React, { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import ProfilePic from "../assets/ProfileSaya.png";
import PfpAlt from "../assets/pfp.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST API", "JWT Auth", "Socket.io"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "Firebase", "Mongoose"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Vercel", "Railway", "Postman", "Figma"],
  },
];

const certificates = [
  {
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Coursera)",
    year: "2024",
    description:
      "Comprehensive training in modern front-end development with React, UX/UI principles, and version control.",
    backDetails: "Completed 9-course specialization covering React Advanced Concepts, UX/UI Design, and Frontend Capstone.",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    description:
      "Foundational knowledge of AWS cloud services, architecture, security, and billing best practices.",
    backDetails: "Mastered core AWS services: EC2, S3, RDS, Lambda, CloudFront, and IAM security fundamentals.",
  },
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Google (Coursera)",
    year: "2023",
    description:
      "Core IT skills including troubleshooting, customer service, networking, operating systems, and security.",
    backDetails: "5-course program covering Linux administration, networking protocols, and cybersecurity basics.",
  },
  {
    name: "MongoDB Node.js Developer Path",
    issuer: "MongoDB University",
    year: "2024",
    description:
      "Hands-on course covering MongoDB fundamentals, data modeling, and integration with Node.js applications.",
    backDetails: "Built full-stack apps with MongoDB Atlas aggregation pipelines and advanced schema design patterns.",
  },
];

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  front,
  back,
  className = "",
  containerClassName = "",
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const rotateY = useMotionValue(0);

  const handleClick = () => {
    const next = isFlipped ? 0 : 180;
    animate(rotateY, next, {
      type: "spring",
      stiffness: 260,
      damping: 20,
    });
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`relative cursor-pointer ${containerClassName}`}
      style={{ perspective: 1000 }}
      onClick={handleClick}
    >
      <motion.div
        style={{
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative w-full h-full ${className}`}
      >
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          {front}
        </div>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
};

const AnimatedCounter: React.FC<{ target: number; suffix?: string; label: string }> = ({
  target,
  suffix = "",
  label,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  React.useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, target, count]);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="flex flex-col items-center"
    >
      <div className="text-4xl md:text-5xl font-extrabold text-white">
        <motion.span>{rounded}</motion.span>
        <span className="text-emerald-400">{suffix}</span>
      </div>
      <div className="mt-1 text-sm text-[#888888] font-medium tracking-wide uppercase">
        {label}
      </div>
    </motion.div>
  );
};

const SkillTag: React.FC<{ name: string }> = ({ name }) => (
  <motion.span
    variants={scaleIn}
    whileHover={{ scale: 1.12, y: -3 }}
    className="px-4 py-1.5 rounded-full bg-[#1F2026] text-sm text-[#BBBBBB] border border-[#333842] cursor-default select-none transition-colors duration-200 hover:border-emerald-500/60 hover:text-emerald-300 hover:shadow-[0_0_12px_rgba(16,185,129,0.15)]"
    style={{ willChange: "transform" }}
  >
    {name}
  </motion.span>
);

const ProfileFlip: React.FC = () => {
  const frontContent = (
    <div className="w-full h-full rounded-full overflow-hidden bg-[#1A1C23] border-2 border-[#22252F]">
      <img
        src={ProfilePic}
        alt="Muhammad Zulfan"
        className="w-full h-full object-cover"
        loading="lazy"
        draggable={false}
      />
    </div>
  );

  const backContent = (
    <div className="w-full h-full rounded-full overflow-hidden bg-[#1A1C23] border-2 border-[#22252F]">
      <img
        src={PfpAlt}
        alt="Muhammad Zulfan Alternate"
        className="w-full h-full object-cover"
        loading="lazy"
        draggable={false}
      />
    </div>
  );

  return (
    <div className="relative group">
      <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-emerald-500 via-cyan-500 to-sky-600 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow duration-300" />
      
      <div className="relative w-28 h-28 md:w-32 md:h-32">
        <FlipCard
          front={frontContent}
          back={backContent}
          containerClassName="w-full h-full"
          className="rounded-full"
        />
      </div>

      <span className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-400 border-2 border-[#22252F] rounded-full z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
      >
        <span className="text-[10px] text-[#666] uppercase tracking-wider font-medium">Click to flip</span>
      </motion.div>
    </div>
  );
};

interface CertificateData {
  name: string;
  issuer: string;
  year: string;
  description: string;
  backDetails: string;
}

const CertificateFlipCard: React.FC<CertificateData> = ({
  name,
  issuer,
  year,
  description,
  backDetails,
}) => {
  const frontContent = (
    <div className="relative w-full h-full bg-[#1A1C23] rounded-xl p-6 border border-[#2E323E] hover:border-emerald-500/40 transition-colors duration-300 flex flex-col">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 rounded-t-xl" />
      
      <div className="flex items-start justify-between mb-3">
        <h4 className="text-lg font-semibold text-white leading-snug pr-2">{name}</h4>
        <span className="shrink-0 px-2.5 py-1 rounded-md bg-[#22252F] text-xs font-medium text-[#AAAAAA]">
          {year}
        </span>
      </div>
      <p className="text-sm text-emerald-400 font-medium mb-3">{issuer}</p>
      <p className="text-sm text-[#888888] leading-relaxed flex-grow">{description}</p>
      
      <div className="mt-4 pt-3 border-t border-[#2E323E]/50 flex items-center gap-1.5 text-[#555]">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <span className="text-[10px] uppercase tracking-wider font-medium">Click to flip</span>
      </div>
    </div>
  );

  const backContent = (
    <div className="relative w-full h-full bg-[#1A1C23] rounded-xl p-6 border border-emerald-500/30 flex flex-col items-center justify-center text-center">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 rounded-t-xl" />
      
      <div className="w-12 h-12 mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center">
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      <h4 className="text-base font-semibold text-white mb-2">{name}</h4>
      <p className="text-sm text-[#AAAAAA] leading-relaxed">{backDetails}</p>
      
      <div className="mt-4 pt-3 border-t border-[#2E323E]/50 flex items-center gap-1.5 text-[#555]">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <span className="text-[10px] uppercase tracking-wider font-medium">Click to flip back</span>
      </div>
    </div>
  );

  return (
    <div className="relative h-[240px]">
      <FlipCard
        front={frontContent}
        back={backContent}
        containerClassName="w-full h-full"
        className="rounded-xl"
      />
    </div>
  );
};

const Info: React.FC = () => {
  return (
    <section id="info" className="w-full max-w-5xl mx-auto my-10 px-6 py-10">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="bg-[#22252F] rounded-2xl shadow-lg p-8 md:p-12 mb-12 overflow-hidden relative"
      >
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="shrink-0"
          >
            <ProfileFlip />
          </motion.div>

          <div className="text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold text-white mb-2"
            >
              Muhammad Zulfan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-xl text-[#AAAAAA] font-medium"
            >
              FullStack Developer
            </motion.p>
          </div>
        </div>

        <div className="relative z-10 space-y-5 text-[#BBBBBB] text-lg leading-relaxed">
          {[
            "I'm a passionate FullStack Developer with a strong focus on building scalable, high-performance web applications. My journey into software development started with a curiosity for how things work on the web, which quickly evolved into a deep love for turning ideas into real, impactful products.",
            "Over the years, I've worked across the entire development lifecycle—from designing intuitive user interfaces and crafting robust RESTful APIs to optimizing database queries and deploying production-ready applications. I thrive in environments where clean code, user-centric design, and system scalability are top priorities.",
            "Whether it's integrating third-party APIs, implementing real-time features with WebSockets, or architecting databases for growing user bases, I enjoy solving complex problems and continuously learning new technologies to stay ahead in this fast-paced industry.",
          ].map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
            >
              {para.split(" ").map((word, wi) => (
                <span key={wi} className={word === "FullStack" || word === "Developer" ? "text-white font-semibold" : ""}>
                  {word}{" "}
                </span>
              ))}
            </motion.p>
          ))}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative z-10 mt-10 pt-8 border-t border-[#2E323E] grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <AnimatedCounter target={3} suffix="+" label="Years Experience" />
          <AnimatedCounter target={15} suffix="+" label="Projects Built" />
          <AnimatedCounter target={4} label="Certifications" />
          <AnimatedCounter target={99} suffix="%" label="Client Satisfaction" />
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="bg-[#22252F] rounded-2xl shadow-lg p-8 md:p-12 mb-12"
      >
        <div className="flex items-center gap-4 mb-10">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            className="w-2 h-10 bg-gradient-to-b from-emerald-500 to-sky-600 rounded-full"
          />
          <h3 className="text-3xl sm:text-4xl font-bold text-white">Skills & Technologies</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <h4 className="text-lg font-semibold text-[#EDEDED] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {category.title}
              </h4>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2.5"
              >
                {category.skills.map((skill) => (
                  <SkillTag key={skill} name={skill} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="bg-[#22252F] rounded-2xl shadow-lg p-8 md:p-12"
      >
        <div className="flex items-center gap-4 mb-10">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            className="w-2 h-10 bg-gradient-to-b from-emerald-500 to-sky-600 rounded-full"
          />
          <h3 className="text-3xl sm:text-4xl font-bold text-white">Certificates</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <CertificateFlipCard key={cert.name} {...cert} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Info;

