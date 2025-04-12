import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import { Switch } from "@headlessui/react";
import "tailwindcss/tailwind.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const trail = document.createElement("div");
    trail.className = "glitter-trail";
    document.body.appendChild(trail);

    const moveTrail = (e) => {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = `${e.pageX}px`;
      sparkle.style.top = `${e.pageY}px`;
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 700);
    };

    document.addEventListener("mousemove", moveTrail);
    return () => document.removeEventListener("mousemove", moveTrail);
  }, []);

  const skillCategories = {
    "Languages & Frameworks": [ "Java", "JavaScript","ReactJS", "Node.js", "Next.js", "C", "C++", "R", "SQL", "Python"],
    "Tools": [ "Git", "Azure DevOps", "AWS", "Google Cloud", "Docker", "Postman", "CI/CD", "Agile Methodologies"],
    "Software & Analytics": ["IntelliJ IDEA", "VS Code", "Android Studio", "RStudio", "CLion", "Power BI", "CSS", "REST APIs"],
    "Databases": ["MongoDB", "DynamoDB", "SQLite", "Neo4j"]
  };

  const navItems = [
    //{ label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Volunteering", href: "#volunteering" },
  ];

  const cardStyle = `${darkMode ? "bg-gray-100 text-black" : "bg-white text-gray-800"} shimmer-card`;

  return (
    <div className={`min-h-screen relative scroll-smooth ${darkMode ? "bg-gray-900 text-white" : "bg-pink-50 text-gray-800"}`}>  {/* Fixed here */}
      <div className="absolute top-0 left-0 w-full min-h-screen -z-10">
        <div className="absolute w-[50vw] h-[50vw] bg-pink-200 opacity-30 blur-3xl rounded-full top-[-20%] left-[-25%] animate-pulse"></div>
        <div className="absolute w-[45vw] h-[45vw] bg-purple-200 opacity-30 blur-3xl rounded-full top-[60%] right-[-30%] animate-pulse"></div>
        <div className="absolute w-[35vw] h-[35vw] bg-yellow-100 opacity-20 blur-2xl rounded-full bottom-[-10%] left-[20%] animate-pulse"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-8 py-12 relative z-10">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-16 w-full gap-y-4">
          <nav className="flex flex-wrap justify-center gap-6 text-sm sm:text-base font-semibold">
            {navItems.map(({ label, href }) => (
              <a key={label} href={href} className="hover:text-pink-500 transition-colors duration-300">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Dhvani-Thakkar" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:text-pink-500 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/dhvanithakkar29/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-pink-500 transition duration-300" />
            </a>
            <a href="mailto:dhvanithakkar2003@gmail.com">
              <FaEnvelope className="text-xl hover:text-pink-500 transition duration-300" />
            </a>
            <Switch
              checked={darkMode}
              onChange={setDarkMode}
              className={`${
                darkMode ? "bg-pink-300" : "bg-gray-300"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  darkMode ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
        </header>

        <style>{`
          html, body {
            height: 100%;
            scroll-behavior: smooth;
            overflow-x: hidden;
          }
          section {
            padding-top: 2rem;  /* reduced top padding */
            padding-bottom: 2rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          }
          section h3 {
            font-size: 1.5rem;
            font-weight: 700;
            position: relative;
            display: inline-block;
            margin-bottom: 1.5rem;
            animation: fadeSlideUp 0.8s ease-out both;
          }
          section h3::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 4px;
            background: #f472b6;
            left: 0;
            bottom: -8px;
            border-radius: 9999px;
          }
          .sparkle {
            position: absolute;
            width: 8px;
            height: 8px;
            background: radial-gradient(circle, #f9a8d4, transparent);
            border-radius: 9999px;
            pointer-events: none;
            opacity: 0.8;
            animation: glitterPop 0.7s ease-out forwards;
            z-index: 50;
          }
          @keyframes glitterPop {
            0% { transform: scale(0.5); opacity: 0.8; }
            100% { transform: scale(1.5); opacity: 0; }
          }
          @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .shimmer-card {
            background-image: linear-gradient(135deg, rgba(255,255,255,0.05) 25%, transparent 25%), linear-gradient(225deg, rgba(255,255,255,0.05) 25%, transparent 25%), linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%), linear-gradient(315deg, rgba(255,255,255,0.05) 25%, transparent 25%);
            background-size: 20px 20px;
            background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
            animation: shimmer 2.5s infinite linear;
            color: black !important;
          }
        `}</style>

        {/* Hero Section */}
        <motion.section
          id="about"
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/profile.jpg"
            alt="Dhvani Thakkar"
            className="w-32 h-32 rounded-full mx-auto shadow-lg mb-6"
          />
          <h2 className="text-4xl font-semibold mb-4">
            Hi, I'm <span className="text-pink-500">Dhvani Thakkar</span> ✨
          </h2>
          <p className="text-lg max-w-xl mx-auto">
            A passionate fourth year Computer Science and Statistics student at University of Manitoba with a flair for building beautiful, efficient, and impactful web and software solutions.
          </p>
          <div className="mt-6">
            <a
              href="/Dhvani_Thakkar_Resume.pdf"
              className="bg-pink-500 text-white px-4 py-2 rounded-full shadow hover:bg-pink-400"
              download
            >
              Download Resume
            </a>
          </div>
        </motion.section>

        {/* About Me
        <motion.section
          className="mb-20 text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-2">About Me</h3>
          <p className="max-w-2xl">
            I'm a fourth-year Computer Science student at the University of Manitoba, minoring in Statistics. I love blending technology with creativity—whether it's building tools for government teams, running student groups, or learning new frameworks!
          </p>
        </motion.section> */}

        {/* Skills */}
        <section id="skills" className="mb-20">
          <h3 className="text-2xl font-bold mb-4">Skills</h3>
          <div className="space-y-6">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category}>
                <h4 className="text-xl font-semibold mb-2">{category}</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className={`px-4 py-2 rounded-full shadow text-sm transition-colors duration-200 ${
                        darkMode
                          ? "bg-gray-800 text-white hover:bg-pink-100 hover:text-black"
                          : "bg-white text-gray-800 hover:bg-pink-100"
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center">Professional Experience</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-pink-300 rounded-full"></div>
            <ul className="space-y-10 pl-12">
              {[
                {
                  title: "Junior Systems Analyst (Internship)",
                  company: "Government of Manitoba",
                  duration: "May 2024 – Present",
                  bullets: [
                    "Analyze and streamline systems, boosting efficiency by 20% to enhance productivity and reduce resource use.",
                    "Conduct system testing and troubleshooting on 4 internal tools, optimizing performance and ensuring high availability.",
                    "Prepare technical documentation to support system upgrades and serve as a reference for a team of 8."
                  ]
                },
                {
                  title: "Applications Assistant (Internship)",
                  company: "Antec Controls – Price Industries",
                  duration: "May 2023 – Sep 2023",
                  bullets: [
                    "Executed 30+ product and integration tests in benchtop environments, detecting critical issues early to maintain design specifications.",
                    "Collaborated with engineering to resolve critical integration challenges, leading to a 30% reduction in prototype development time and accelerating the project cycle.",
                    "Documented 10+ testing results in detail to guide product refinements, enabling data-driven improvements for enhanced reliability."
                  ]
                }
              ].map((exp, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="relative ml-4 bg-white dark:bg-gray-100 text-black p-6 rounded-lg shadow transition-all duration-300"
                >
                  <span className="absolute -left-6 top-6 w-4 h-4 bg-pink-400 border-4 border-white rounded-full shadow-md"></span>
                  <h4 className="text-xl font-semibold">{exp.title}</h4>
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm italic text-pink-600">{exp.company}</p>
                    <p className="text-sm italic text-gray-500">{exp.duration}</p>
                  </div>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {exp.bullets.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>


        {/* Projects */}
        <section id="projects" className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center">Projects</h3>
          <ul className="space-y-10">
            {[
              {
                title: "EduNova Web Interface",
                tech: "ReactJs, Node.js, DynamoDB, AWS S3, Ollama",
                duration: "Jan 2025 – Apr 2025",
                bullets: [
                  "Implemented a web-based educational chatbot with a team of 3 for the Government of Canada.",
                  "Enabled self-paced learning and reduced instructor dependency through automated, conversational explanations."
                ]
              },
              {
                title: "ReShop Android App",
                tech: "Java, SQL, HTML, CSS, Agile Methodologies",
                duration: "May 2024 – Aug 2024",
                bullets: [
                  "Created an e-commerce platform with a team of 5 members.",
                  "Integrated user authentication and dynamic item listings using Agile development methodology."
                ]
              },
              {
                title: "FIFA 2022 Players Database",
                tech: "Java, SQL",
                duration: "Sep 2023 – Dec 2023",
                bullets: [
                  "Developed efficient SQL scripts for extracting large datasets from a normalized database of over 19,000 entries.",
                  "Improved data usability for fast insights during analysis."
                ]
              }
            ].map((proj, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.02 }}
                className="relative bg-white dark:bg-gray-100 text-black p-6 rounded-lg shadow transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold">{proj.title}</h4>
                    <p className="text-sm italic text-pink-600">{proj.tech}</p>
                  </div>
                  <p className="text-sm italic text-gray-500">{proj.duration}</p>
                </div>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {proj.bullets.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Volunteering */}
        <section id="volunteering" className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center">Volunteer Experience</h3>
          <ul className="space-y-10">
            {[
              {
                role: "Vice President",
                org: "UMWICS",
                duration: "May 2023 – Apr 2025",
                bullets: [
                  "Lead mentorship programs and host events to connect 65+ women and nonbinary individuals with mentors in tech.",
                  "Fostered meaningful professional development through speaker series and community engagement."
                ]
              },
              {
                role: "Director of Communications",
                org: "CCUBED",
                duration: "Mar 2023 – Apr 2024",
                bullets: [
                  "Designed promotional materials using Adobe Photoshop and Canva.",
                  "Increased attendance to over 150 participants per major event through targeted campaigns."
                ]
              },
              {
                role: "Social Media Coordinator",
                org: "UMWICS",
                duration: "May 2022 – Apr 2023",
                bullets: [
                  "Enhanced online presence with social media strategy and scheduling tools like Buffer.",
                  "Boosted follower count by 85% through consistent content and graphics."
                ]
              }
            ].map((vol, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.02 }}
                className="relative bg-white dark:bg-gray-100 text-black p-6 rounded-lg shadow transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold">{vol.role} – {vol.org}</h4>
                  <p className="text-sm italic text-gray-500">{vol.duration}</p>
                </div>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {vol.bullets.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ul>
        </section>

        <footer className="text-center text-sm opacity-70 mt-10">
          © 2025 Dhvani Thakkar.
        </footer>
      </div>
    </div>
  );
}
