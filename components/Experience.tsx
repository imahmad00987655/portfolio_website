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
      position: "Technical Project Manager (Part_Time)", 
      period: "Feb 2025 - present",
      location: "Lahore, Punjab, Pakistan",
      achievements: [
        "Coordinated with clients and stakeholders to gather requirements, define project scope, and translate business needs into technical tasks",
        "Led cross-functional teams including developers and SQA engineers, ensuring smooth sprint execution and timely project delivery",
        "Managed project workflows using Jira and ClickUp, tracking progress, risks, and deadlines across multiple projects",
        "Oversaw deployment processes, post-release validation, and client handover to ensure successful production delivery",
        "Prepared project documentation, task breakdowns, and technical specifications to align team execution with project goals",
        "Acted as a bridge between technical teams and business stakeholders, improving communication efficiency and delivery clarity"
      ],
      technologies: ["Agile", "Jira", "ClickUp", "CI/CD", "Docker", "Project Documentation"],
      impact: "Improved delivery coordination and stakeholder alignment by implementing structured project tracking and communication processes"
    },
    {
      company: "Master Molty Foam (Master Group)",
      position: "Software Developer",
      period: "Feb 2023 - present",
      location: "Lahore, Pakistan",
      achievements: [
        "Developed and maintained custom web applications, dashboards, and internal systems to support multiple business departments",
        "Designed data visualization solutions using Power BI and custom-coded dashboards to provide actionable insights for decision-making",
        "Managed server deployments, feature updates, and system enhancements to ensure performance, scalability, and reliability",
        "Provided technical support to end users, resolved system issues, and implemented new features based on business requirements",
        "Built internal tools and automation workflows that improved operational efficiency and reduced manual processes",
        "Worked across full-stack technologies to deliver scalable and user-focused solutions aligned with organizational needs"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "PHP/Laravel", "Python/Flask", "Vue.js", "React.js", "Power BI"],
      impact: "Enhanced departmental productivity through customized digital solutions, automation, and data-driven reporting"
    },
    {
      company: "Programmers Force",
      position: "Front-End Developer Intern",
      period: "Nov 2022 - Jan 2023",
      location: "Lahore, Pakistan",
      achievements: [
        "Developed responsive web interfaces using modern frontend technologies to improve usability and user engagement",
        "Applied UI/UX best practices and responsive design principles across multiple projects and devices",
        "Collaborated with development teams through version control and peer reviews to maintain code quality standards",
        "Gained hands-on experience in frontend development lifecycle, debugging, and collaborative engineering workflows"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Vue.js"],
      impact: "Contributed to delivery of user-friendly web solutions through collaborative development practices"
    },
    {
      company: "Pseudosquare",
      position: "Developer Intern",
      period: "2022",
      location: "Lahore, Pakistan",
      achievements: [
        "Built 6+ interactive prototypes, increasing client approval rates by approximately 40%",
        "Enhanced existing web applications with custom JavaScript features and performance improvements",
        "Developed responsive user interfaces that improved mobile engagement by nearly 50%",
        "Collaborated with senior developers to translate client requirements into functional prototypes"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      impact: "Improved client satisfaction through rapid prototyping and enhanced user experience design"
    }
  ];

  return (
    <section id="experience" className="py-12 relative overflow-hidden bg-black">
      {/* Background - no gradients */}
      <div className="absolute inset-0 bg-black" />

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
              <div className="relative bg-white/5 rounded-xl p-5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
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
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors mt-auto"
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
                {/* Simple overlay */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none bg-white/5" />
                <div className="absolute -inset-1 rounded-3xl border border-white/20 pointer-events-none" />
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
                    <h4 className="text-xl font-semibold text-blue-400 mb-3">Key Achievements</h4>
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
                    <h4 className="text-xl font-semibold text-blue-400 mb-3">Technologies Used</h4>
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
                    <h4 className="text-xl font-semibold text-blue-400 mb-3">Impact</h4>
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

