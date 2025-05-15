'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  const [showExperienceBanner, setShowExperienceBanner] = useState(true);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [orbs, setOrbs] = useState([]);
  const [particles, setParticles] = useState([]);
  const [animatedElements, setAnimatedElements] = useState([]);
  const [mounted, setMounted] = useState(false);
  const emailRef = useRef('imahmadkhan1029@gmail.com');

  useEffect(() => {
    setMounted(true);
    
    // Generate fixed values for orbs
    setOrbs([
      {
        width: 200,
        height: 200,
        left: '20%',
        top: '20%',
        xMove: 30,
        yMove: 20,
        duration: 20
      },
      {
        width: 250,
        height: 250,
        right: '20%',
        top: '30%',
        xMove: -30,
        yMove: 30,
        duration: 25
      },
      {
        width: 180,
        height: 180,
        left: '50%',
        bottom: '20%',
        xMove: 20,
        yMove: -20,
        duration: 22
      }
    ]);
    
    // Generate fixed values for particles
    const newParticles = [];
    for (let i = 0; i < 6; i++) {
      newParticles.push({
        left: `${20 + (i * 15)}%`,
        top: `${30 + (i * 10)}%`,
        duration: 2 + i
      });
    }
    setParticles(newParticles);
    
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
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "PHP/Laravel", "Python", "Vue.js" ],
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
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js"],
      impact: "Contributed to team success through collaborative development and implementation of responsive web solutions"
    }
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('https://formspree.io/f/xdkgynap', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        });
        setIsSubmitting(false);
        if (response.ok) {
          setShowSuccess(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setShowSuccess(false), 3000);
        } else {
          setErrors({ general: 'Failed to send message. Please try again later.' });
        }
      } catch (error) {
        setIsSubmitting(false);
        setErrors({ general: 'Failed to send message. Please try again later.' });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(emailRef.current);
    setShowCopySuccess(true);
    setTimeout(() => setShowCopySuccess(false), 2000);
  };

  const openEmailClient = () => {
    window.location.href = `mailto:${emailRef.current}`;
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating orbs with fixed positions */}
      {mounted && (
        <>
          {orbs.map((orb, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
              style={{
                width: `${orb.width}px`,
                height: `${orb.height}px`,
                left: orb.left,
                right: orb.right,
                top: orb.top,
                bottom: orb.bottom,
                position: 'absolute'
              }}
              animate={{
                x: [0, orb.xMove, 0],
                y: [0, orb.yMove, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: orb.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </>
      )}

      {/* Animated particles with fixed positions */}
      {mounted && (
        <>
          {particles.map((particle, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: particle.left,
                top: particle.top,
                position: 'absolute'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </>
      )}

      {/* Enhanced Work Experience Banner */}
      <AnimatePresence>
        {showExperienceBanner && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed top-0 left-0 right-0 z-50"
            >
              <div className="relative bg-gradient-to-r from-blue-600/95 via-purple-600/95 to-pink-600/95 backdrop-blur-md border-b border-white/10 shadow-xl">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                  {animatedElements.map((elem, i) => (
                    <motion.div
                      key={`bg-elem-${i}`}
                      className="absolute rounded-full bg-white/10"
                      style={{
                        width: `${elem.width}px`,
                        height: `${elem.height}px`,
                        left: elem.left,
                        top: elem.top,
                        position: 'absolute'
                      }}
                      animate={{
                        x: [0, elem.xMove],
                        y: [0, elem.yMove],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: elem.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>

                <div className="container mx-auto px-4 py-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                        Professional Experience
                      </h3>
                      <p className="text-white/60 text-sm mt-1">Click on a role to view details</p>
                    </motion.div>
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setShowExperienceBanner(false)}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {workExperience.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        <div className="relative bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-white font-semibold text-lg">{exp.position}</h4>
                              <p className="text-white/80 text-sm mt-1">{exp.company}</p>
                              <p className="text-white/60 text-xs mt-1">{exp.period}</p>
                              <p className="text-white/60 text-xs mt-1">{exp.location}</p>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setSelectedExperience(exp)}
                              className="px-4 py-2 bg-white/10 rounded-lg text-white/90 hover:text-white hover:bg-white/20 transition-colors"
                            >
                              View Details
                            </motion.button>
                          </div>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {exp.technologies.slice(0, 3).map((tech, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80"
                              >
                                {tech}
                              </motion.span>
                            ))}
                            {exp.technologies.length > 3 && (
                              <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/60">
                                +{exp.technologies.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

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
                        <div className="flex justify-between items-start mb-8">
                          <div>
                            <h3 className="text-3xl font-extrabold text-white mb-1 tracking-tight drop-shadow-lg">{selectedExperience.position}</h3>
                            <p className="text-white/90 text-lg font-medium mb-1">{selectedExperience.company}</p>
                            <p className="text-white/70 text-sm mb-1">{selectedExperience.period}</p>
                            <p className="text-white/60 text-sm">{selectedExperience.location}</p>
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

                        <div className="mb-8">
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

                        <div className="mb-8">
                          <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedExperience.technologies.map((tech, index) => (
                              <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 * index }}
                                className="px-4 py-1 bg-white/20 rounded-full text-sm text-white/90 font-medium shadow-sm backdrop-blur"
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
          </>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
              Get in Touch
            </span>
          </motion.h2>

          <motion.p 
            className="text-gray-300 text-center mb-12 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have a question or want to work together? Send me a message!
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Enhanced Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl shadow-blue-500/5"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.name ? 'border-red-500 focus:ring-red-500/50' : 'border-white/10 focus:ring-blue-500/50'
                      }`}
                      placeholder="Your name"
                    />
                  </motion.div>
                  {errors.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.email ? 'border-red-500 focus:ring-red-500/50' : 'border-white/10 focus:ring-blue-500/50'
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                  {errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.subject ? 'border-red-500 focus:ring-red-500/50' : 'border-white/10 focus:ring-blue-500/50'
                      }`}
                      placeholder="What's this about?"
                    />
                  </motion.div>
                  {errors.subject && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500"
                    >
                      {errors.subject}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.message ? 'border-red-500 focus:ring-red-500/50' : 'border-white/10 focus:ring-blue-500/50'
                      }`}
                      placeholder="Your message..."
                    />
                  </motion.div>
                  {errors.message && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                {errors.general && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.general}
                  </motion.p>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </div>
                </motion.button>
              </form>
            </motion.div>

            {/* Enhanced Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl shadow-purple-500/5"
            >
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <p className="text-white font-medium">{emailRef.current}</p>
                  </div>
                </motion.div>

                <div className="flex gap-4">
                  <motion.button
                    onClick={copyEmail}
                    className="flex-1 px-4 py-2 bg-white/5 text-white rounded-lg font-medium hover:bg-white/10 transition-colors relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      Copy Email
                    </div>
                  </motion.button>
                  <motion.button
                    onClick={openEmailClient}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Open Mail
                    </div>
                  </motion.button>
                </div>

                <div className="pt-6 border-t border-white/10">
                  {/* Social icons and 'Connect with me' heading removed as requested */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Messages */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg backdrop-blur-sm border border-white/10"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Message sent successfully!
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCopySuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-lg backdrop-blur-sm border border-white/10"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              Email copied to clipboard!
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactForm; 