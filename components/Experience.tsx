'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [animatedElements, setAnimatedElements] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Generate fixed values for animated elements
    const newAnimatedElements = [];
    for (let i = 0; i < 5; i++) {
      newAnimatedElements.push({
        width: 100 + i * 30,
        height: 100 + i * 30,
        left: `${i * 20}%`,
        top: `${i * 20}%`,
        xMove: i * 10,
        yMove: i * 10,
        duration: 10 + i
      });
    }
    setAnimatedElements(newAnimatedElements);
  }, []);

  // Work experience data
  const workExperience = [
    {
      company: "ZepTechLogix",
      position: "Assistant Technical Project Manager",
      period: "Jan 2025 - Present(Part-time)",
      location: "Lahore, Punjab, Pakistan",
      achievements: [
        "Supported a software development team in delivering projects using Agile practices",
        "Assisted in system design, followed coding guidelines, and worked with tools like CI/CD and Docker",
        "Helped team members by reviewing code and sharing suggestions to improve their work",
        "Took part in managing multiple tasks and keeping track of deadlines using Jira",
        "Communicated with both technical and business teams to understand requirements and break them into clear steps"
      ],
      technologies: ["Agile", "CI/CD", "Docker", "Jira"],
      impact: "Enhanced project delivery efficiency through effective team support and process management"
    },
    {
      company: "Master Molty Foam",
      position: "Software Developer",
      period: "Feb 2024 - Present",
      location: "",
      achievements: [
        "Maintained and updated the company's legacy website, ensuring functionality and performance improvements",
        "Developed various custom websites and dashboards, tailored to departmental needs for improved data visualization and accessibility",
        "Designed and implemented multiple forms for the department's internal website, optimizing workflows and information collection",
        "Created and customized Power BI dashboards to present data insights effectively, aiding decision-making"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "PHP/Laravel", "Python/Flask", "Vue.js", "React.js" ],
      impact: "Improved departmental efficiency through custom solutions and data-driven insights"
    },
    {
      company: "Programmers Force",
      position: "Front-End Developer Intern",
      period: "Nov 2022 - Jan 2023",
      location: "",
      achievements: [
        "Developed high end websites, utilizing HTML, CSS, JavaScript, Bootstrap and node.js, php, python to create an interactive, user-friendly interface",
        "Applied responsive design principles and UX best practices to ensure a seamless user experience across various devices and browsers",
        "Engaged in collaborative coding and peer review processes, participating in version control and team discussions to enhance code quality and ensure consistent standards across projects",
        "Gained foundational experience in frontend technologies, enhancing problem-solving skills and developing a deeper understanding of the frontend development lifecycle"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Vue.js"],
      impact: "Contributed to team success through collaborative development and implementation of responsive web solutions"
    }
  ];

  return (
    <section id="experience" className="py-12 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-blue-400 text-sm font-medium mb-2 tracking-wider uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Experience
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional Experience
          </motion.h2>
          <motion.p
            className="text-gray-300 text-base max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Combining technical development with project management expertise. Click on a role to view detailed information.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {workExperience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] rounded-xl p-5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col">
                  <div className="mb-3">
                    <h4 className="text-white font-semibold text-lg mb-1">{exp.position}</h4>
                    <p className="text-white/80 text-sm">{exp.company}</p>
                    <p className="text-white/60 text-xs mt-1">{exp.period}</p>
                    {exp.location && (
                      <p className="text-white/60 text-xs mt-1">{exp.location}</p>
                    )}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2 mb-3">
                    {exp.technologies.slice(0, 3).map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i }}
                        className="px-2 py-1 bg-white/10 rounded-lg text-xs text-white/80 border border-white/10"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {exp.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 rounded-lg text-xs text-white/60 border border-white/10">
                        +{exp.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedExperience(exp)}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity mt-auto"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Details Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-[6px] z-40 flex items-center justify-center p-4"
              onClick={() => setSelectedExperience(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-white/20 bg-white/10 backdrop-blur-2xl px-0 py-0">
                {/* Gradient overlay for glassmorphism */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/10" />
                {/* Glowing border */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-400/40 via-purple-500/40 to-pink-400/40 blur-lg opacity-60 pointer-events-none" />
                <div className="relative z-10 p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-extrabold text-white mb-1 tracking-tight drop-shadow-lg">{selectedExperience.position}</h3>
                      <p className="text-white/90 text-lg font-medium mb-1">{selectedExperience.company}</p>
                      <p className="text-white/70 text-sm mb-1">{selectedExperience.period}</p>
                      {selectedExperience.location && (
                        <p className="text-white/60 text-sm">{selectedExperience.location}</p>
                      )}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.15, rotate: 90 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedExperience(null)}
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 shadow-lg transition-colors border border-white/20 ml-4"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-3">Key Achievements</h4>
                    <ul className="space-y-2 pl-4 list-disc text-white/90">
                      {selectedExperience.achievements.map((achievement, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="text-base"
                        >
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * index }}
                          className="px-4 py-1 bg-white/20 rounded-full text-sm text-white/90 font-medium shadow-sm backdrop-blur border border-white/20"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-3">Impact</h4>
                    <p className="text-white/80 text-base leading-relaxed">{selectedExperience.impact}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;

