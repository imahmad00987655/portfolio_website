'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';

// Project data
const projects = [
  // 1️⃣ ZepTechLogix Projects (Technical PM)
  {
    id: 1,
    title: "Visa Consultancy CRM",
    category: "web",
    description: "Developed a specialized CRM system for visa consultancy and advisory services using PHP/Laravel. Features include client visa application tracking, document management, appointment scheduling, case status updates, automated email notifications, and multi-country visa requirement database. Led technical design and development, coordinated team, ensured proper architecture, security, and workflow automation.",
    technologies: ["PHP", "Laravel", "MySQL", "Vue.js", "Bootstrap", "Redis", "WebSockets", "AWS S3"],
    github: "https://github.com/imahmad00987655/CRM_in_php",
    featured: true
  },
  {
    id: 2,
    title: "Security Firm Application",
    category: "mobile",
    description: "Cross-platform mobile app for managing security operations, shifts, patrol verification, and incident workflows. Oversaw architecture, modular design, agile workflow, real-time communication, scalability, and documentation standards. Built using Flutter and Firebase for smooth Android/iOS experience.",
    technologies: ["Flutter", "React", "MongoDB", "Firebase"],
    github: "https://github.com/imahmad00987655",
    featured: true
  },

  // 2️⃣ Master Group Projects (Customer/CS Focused)
  {
    id: 3,
    title: "AI-Powered Travel App",
    category: "mobile",
    description: "Cross-platform travel app with AI-powered personalized recommendations, route optimization, and smart itinerary planning. Provided technical guidance and implemented real-time solutions using Flutter and Node.js.",
    technologies: ["Flutter", "Node.js", "AI/ML", "REST APIs", "Firebase"],
    github: "https://github.com/imahmad00987655/AI_travel_mobile_application",
    featured: true
  },
  {
    id: 4,
    title: "CS Chatbot",
    category: "web",
    description: "Developed AI chatbot for customer support using OpenAI and FireCrawl APIs. Features runtime customer data training from Excel/Word, voice interaction, and real-time answers for CS agents. Integrated uploader for custom datasets and voice-to-text responses.",
    technologies: ["OpenAI API", "FireCrawl API", "JavaScript", "Node.js", "React", "Voice-to-Text"],
    github: "https://github.com/imahmad00987655/CS_Chatbot",
    featured: true
  },

  // 3️⃣ Programmer / Software Development Projects
  {
    id: 5,
    title: "Evaluation Flow Central System",
    category: "web",
    description: "Comprehensive full-stack evaluation and QA system for call centers with analytics, performance tracking, role-based access. Built with modern technologies for efficient operations and seamless UX.",
    technologies: ["React", "TypeScript", "PHP", "MySQL", "Tailwind CSS", "Chart.js", "RESTful API"],
    github: "https://github.com/imahmad00987655/Evaluation-Management-System",
    featured: true
  },
  {
    id: 6,
    title: "Dashboards",
    category: "web",
    description: "Developed interactive dashboards for customer services department; real-time metrics, visualizations, and performance tracking. Technologies include React, Vue.js, Power BI, Node.js.",
    technologies: ["React", "Vue.js", "Power BI", "Node.js", "Data Visualization"],
    demo: "https://drive.google.com/drive/folders/1411zyfDO-W_5lp2YXf1C2UDWrmJapwNI",
    github: "https://github.com/imahmad00987655",
    featured: true
  },
  {
    id: 7,
    title: "Callback Disposition System",
    category: "web",
    description: "Automated callback disposition form system to track and manage customer interaction history. Features automated scheduling, interaction logging, and performance analytics.",
    technologies: ["Next.js", "PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    github: "https://github.com/imahmad00987655/disposition_system",
    featured: true
  },
  {
    id: 8,
    title: "Graphic Website",
    category: "web",
    description: "Portfolio website for graphic designers with project galleries, client testimonials, and interactive showcases. Built modern responsive UI using Vue.js and React.",
    technologies: ["Vue.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/imahmad00987655/Makers",
    featured: true
  },
  {
    id: 9,
    title: "API Integration Framework",
    category: "web",
    description: "Robust API integration and testing framework with automated testing, data validation, and seamless data transfer between systems.",
    technologies: ["Node.js", "Express", "MySQL", "MongoDB", "Postman"],
    github: "https://github.com/imahmad00987655/Customer_service_api",
    featured: true
  },
  {
    id: 10,
    title: "Personal Portfolio",
    category: "web",
    description: "Modern responsive portfolio website with smooth animations, dark mode, and interactive project showcases.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/imahmad00987655/portfolio_website",
    featured: true
  }
];

const categories = [
  { id: 'all', name: 'All Projects', icon: '✨' },
  { id: 'web', name: 'Web Development', icon: '🌐' },
  { id: 'mobile', name: 'Mobile Development', icon: '📱' },
  { id: 'ai', name: 'AI/ML & Chatbot', icon: '🤖' },
  { id: 'design', name: 'Design & UI/UX', icon: '🎨' }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const [orbs, setOrbs] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Generate random values for orbs on client-side only
    const newOrbs = [...Array(5)].map(() => ({
      width: Math.random() * 400 + 100,
      height: Math.random() * 400 + 100,
      left: Math.random() * 100,
      top: Math.random() * 100,
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
      duration: Math.random() * 15 + 15
    }));
    setOrbs(newOrbs);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-12 relative overflow-hidden bg-black">
      {/* Solid background - no gradients */}
      <div className="absolute inset-0 bg-black" />

      {/* Floating orbs - solid color */}
      {isClient && orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500/10 blur-3xl"
          style={{
            width: `${orb.width}px`,
            height: `${orb.height}px`,
            left: `${orb.left}%`,
            top: `${orb.top}%`,
          }}
          animate={{
            x: [0, orb.x],
            y: [0, orb.y],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Parallax stars */}
      {isClient && [...Array(20)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          style={{ y, opacity }}
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-blue-400 text-sm font-medium mb-4 tracking-wider uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              My Work
            </motion.p>
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Featured Projects
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              A collection of projects I've worked on, showcasing my skills and experience
            </motion.p>
          </motion.div>

          {/* Enhanced Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-base">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Enhanced Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-all duration-300"></div>

                  {/* Project Info with enhanced animations */}
                  <div className="p-6 relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <motion.h3 
                        className="text-xl font-bold text-white group-hover:text-blue-400 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ rotate: 45 }}
                      >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.div>
                    </div>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
                    
                    {/* Enhanced Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-xs rounded-lg bg-white/10 text-gray-200 border border-white/20 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 text-xs rounded-lg bg-white/5 text-gray-400 border border-white/10">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors text-center border border-white/10"
                      >
                        View Code
                      </motion.a>
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors"
                      >
                        Details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-2xl w-full bg-[#181f2a]/95 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/20 my-8 flex flex-col"
              style={{ maxHeight: '90vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 p-6 border-b border-white/10 bg-[#181f2a]/95 z-10 flex justify-between items-start">
                <motion.h3 
                  className="text-2xl font-semibold text-blue-400"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {selectedProject.title}
                </motion.h3>
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 80px)' }}>
                
                
                <motion.p 
                  className="text-gray-200 mb-6 leading-relaxed text-base"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {selectedProject.description}
                </motion.p>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <motion.span 
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/15 text-gray-200 border border-white/20 font-medium"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.25)" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <motion.a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg text-center font-medium hover:bg-blue-500 transition-colors"
                    >
                      Demo
                    </motion.a>
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-6 py-3 bg-white/10 text-white rounded-lg text-center font-medium hover:bg-white/20 transition-colors"
                    >
                      View Code
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects; 