'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';

const skills = [
  { name: 'React', level: 90, color: '#61DAFB', icon: '⚛️', description: 'Building modern UIs' },
  { name: 'JavaScript', level: 85, color: '#F7DF1E', icon: '📜', description: 'Core language expertise' },
  { name: 'TypeScript', level: 80, color: '#3178C6', icon: '📘', description: 'Type-safe development' },
  { name: 'Node.js', level: 75, color: '#339933', icon: '🟢', description: 'Backend development' },
  { name: 'HTML5', level: 95, color: '#E34F26', icon: '🌐', description: 'Web structure' },
  { name: 'CSS3', level: 90, color: '#264DE4', icon: '🎨', description: 'Styling and animations' },
  { name: 'Bootstrap 5', level: 85, color: '#7952B3', icon: '🎯', description: 'Responsive design' },
  { name: 'Tailwind CSS', level: 85, color: '#06B6D4', icon: '🎨', description: 'Utility-first CSS' },
  { name: 'Vue.js', level: 80, color: '#41B883', icon: '🟢', description: 'Progressive framework' },
  { name: 'PHP', level: 75, color: '#777BB4', icon: '🐘', description: 'Server-side scripting' },
  { name: 'Python/Django', level: 70, color: '#092E20', icon: '🐍', description: 'Backend development' },
  { name: 'Flutter', level: 65, color: '#02569B', icon: '📱', description: 'Cross-platform development' },
];

const About = () => {
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

  return (
    <section id="about" className="py-20 relative overflow-hidden min-h-screen">
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

      <motion.div
        ref={ref}
        style={{ y, opacity }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 
          className="text-6xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
            About Me
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left side - Image and Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Profile Image with enhanced decorative elements */}
            <div className="relative w-full aspect-square max-w-md mx-auto mt-8">
              {/* Multiple rotating borders */}
              {isClient && [...Array(3)].map((_, i) => (
                <motion.div
                  key={`border-${i}`}
                  className="absolute inset-0 rounded-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 20 + i * 5, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-white/20"></div>
                </motion.div>
              ))}

              {/* Glowing background with pulse */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse opacity-20"></div>
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white/20">
                <Image
                  src="/about.png"
                  alt="About photo"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  priority
                />

                {/* Enhanced shine effect */}
                {isClient && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </div>

              {/* Enhanced decorative elements */}
              {isClient && (
                <>
                  <motion.div 
                    className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div 
                    className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [0.5, 0.3, 0.5],
                      rotate: [360, 180, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </>
              )}
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold text-white">Who am I?</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating
              beautiful, functional web applications. With expertise in modern web technologies and
              a strong foundation in both frontend and backend development, I strive to build
              seamless user experiences that make a difference.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">My Skills</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'React', 'JavaScript', 'TypeScript', 'Node.js', 
                  'HTML5', 'CSS3', 'Bootstrap 5', 'Tailwind CSS',
                  'Vue.js', 'PHP', 'Python/Django', 'Flutter'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-white/5 text-white text-sm hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Tools & Software</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'VS Code 💻', 'Visual Studio 🛠️', 'DBeaver Community 🗄️', 'Postman 📮', 
                  'Power BI 📊', 'Android Studio 📱', 'PyCharm 🐍', 'Docker 🐳'
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-full bg-white/5 text-white text-sm hover:bg-white/10 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 