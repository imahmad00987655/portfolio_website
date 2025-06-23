'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';

// Courses data
const courses = [
  {
    id: 1,
    title: "Project Management",
    platform: "Udemy",
    description: "Comprehensive project management course covering Agile methodologies, project planning, risk management, and team leadership. Learned essential skills for managing software development projects effectively.",
    skills: ["Agile", "Scrum", "Project Planning", "Risk Management", "Team Leadership", "Stakeholder Management"],
    certificate: "https://udemy.com/certificate/example1",
    completionDate: "2024",
    featured: true
  },
  {
    id: 2,
    title: "SQL Database Course",
    platform: "Udemy",
    description: "In-depth SQL database course covering database design, query optimization, data modeling, and advanced SQL techniques. Gained practical experience with real-world database scenarios.",
    skills: ["SQL", "Database Design", "Query Optimization", "Data Modeling", "MySQL", "PostgreSQL"],
    certificate: "https://udemy.com/certificate/example2",
    completionDate: "2024",
    featured: true
  }
];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
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
    const newOrbs = [...Array(3)].map(() => ({
      width: Math.random() * 300 + 100,
      height: Math.random() * 300 + 100,
      left: Math.random() * 100,
      top: Math.random() * 100,
      x: Math.random() * 150 - 75,
      y: Math.random() * 150 - 75,
      duration: Math.random() * 12 + 12
    }));
    setOrbs(newOrbs);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section id="courses" className="py-20 relative overflow-hidden min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating orbs with enhanced animations */}
      {isClient && orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-3xl"
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
      {isClient && [...Array(15)].map((_, i) => (
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 animate-gradient-x">
              Certifications & Courses
            </span>
          </motion.h2>

          {/* Enhanced Courses Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence>
              {courses.map((course) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  {/* Course Info with enhanced animations */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <motion.h3 
                        className="text-xl font-semibold text-white"
                        whileHover={{ scale: 1.02 }}
                      >
                        {course.title}
                      </motion.h3>
                      <span className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                        {course.platform}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">{course.description}</p>
                    
                    {/* Enhanced Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.skills.map((skill) => (
                        <motion.span 
                          key={skill}
                          className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    {/* Course Details */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>Completed: {course.completionDate}</span>
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedCourse(course)}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        View Details
                      </motion.button>
                      <motion.a
                        href={course.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-colors"
                      >
                        Certificate
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Course Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-2xl w-full bg-[#181f2a]/95 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-green-500/20 my-8 flex flex-col"
              style={{ maxHeight: '90vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 p-6 border-b border-white/10 bg-[#181f2a]/95 z-10 flex justify-between items-start">
                <div>
                  <motion.h3 
                    className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {selectedCourse.title}
                  </motion.h3>
                  <p className="text-gray-400 text-sm mt-1">{selectedCourse.platform}</p>
                </div>
                <motion.button
                  onClick={() => setSelectedCourse(null)}
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
                  className="text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {selectedCourse.description}
                </motion.p>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <h4 className="text-white font-semibold mb-3">Skills Acquired</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCourse.skills.map((skill) => (
                        <motion.span 
                          key={skill}
                          className="px-3 py-1 rounded-full bg-white/10 text-gray-300"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                        >
                          {skill}
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
                      href={selectedCourse.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg text-center font-medium hover:opacity-90 transition-opacity"
                    >
                      View Certificate
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

export default Courses; 