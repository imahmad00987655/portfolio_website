'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';

// Project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "web",
    image: "/placeholder.jpg",
    description: "A full-stack e-commerce platform built with Next.js and Node.js",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    demo: "https://demo.com",
    github: "https://github.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    category: "web",
    image: "/placeholder.jpg",
    description: "A collaborative task management application with real-time updates",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    demo: "https://demo.com",
    github: "https://github.com",
    featured: true
  },
  {
    id: 3,
    title: "AI Image Generator",
    category: "ai",
    image: "/placeholder.jpg",
    description: "An AI-powered image generation tool using Stable Diffusion",
    technologies: ["Python", "TensorFlow", "React"],
    demo: "https://demo.com",
    github: "https://github.com",
    featured: true
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "design",
    image: "/placeholder.jpg",
    description: "A modern portfolio website with smooth animations",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    demo: "https://demo.com",
    github: "https://github.com",
    featured: false
  },
  {
    id: 5,
    title: "Weather Dashboard",
    category: "web",
    image: "/placeholder.jpg",
    description: "Real-time weather dashboard with location tracking",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    demo: "https://demo.com",
    github: "https://github.com",
    featured: false
  },
  {
    id: 6,
    title: "Chat Application",
    category: "web",
    image: "/placeholder.jpg",
    description: "Real-time chat application with end-to-end encryption",
    technologies: ["Socket.io", "React", "Node.js"],
    demo: "https://demo.com",
    github: "https://github.com",
    featured: false
  }
];

const categories = [
  { id: 'all', name: 'All Projects', icon: '✨' },
  { id: 'web', name: 'Web Development', icon: '🌐' },
  { id: 'ai', name: 'AI/ML', icon: '🤖' },
  { id: 'design', name: 'Design', icon: '🎨' }
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
    <section id="projects" className="py-20 relative overflow-hidden min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating orbs with enhanced animations */}
      {isClient && orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
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
          <motion.h2 
            className="text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
              My Projects
            </span>
          </motion.h2>

          {/* Enhanced Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Enhanced Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  {/* Project Image with enhanced hover effect */}
                  <div className="relative aspect-video overflow-hidden">
                    <motion.div 
                      className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-white"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      Project Image
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Info with enhanced animations */}
                  <div className="p-6">
                    <motion.h3 
                      className="text-xl font-semibold text-white mb-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                    
                    {/* Enhanced Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <motion.span 
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        View Details
                      </motion.button>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-colors"
                      >
                        GitHub
                      </motion.a>
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
                  className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
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
                <motion.div 
                  className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center text-white overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  Project Image
                </motion.div>
                
                <motion.p 
                  className="text-gray-300 mb-6 leading-relaxed"
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
                          className="px-3 py-1 rounded-full bg-white/10 text-gray-300"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
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
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-center font-medium hover:opacity-90 transition-opacity"
                    >
                      Live Demo
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