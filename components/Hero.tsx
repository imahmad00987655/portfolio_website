'use client';

import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { useCallback } from 'react';
import { Particles } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Container, Engine } from '@tsparticles/engine';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const el = useRef(null);
  const [orbs, setOrbs] = useState([]);
  const [particles, setParticles] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [displayedName, setDisplayedName] = useState('');
  const fullName = "M Ahmad Khan";

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Technical Project Manager 📋',
        'Software Engineer 💻',
        'Agile Project Delivery 🚀',
        'Data Visualization & Reporting 📊',
        'System & API Architecture 🔌',
        'Cross-Functional Team Leadership 🤝'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    // Generate random values for orbs on client-side only
    const newOrbs = [...Array(3)].map(() => ({
      width: Math.random() * 200 + 100,
      height: Math.random() * 200 + 100,
      left: Math.random() * 100,
      top: Math.random() * 100,
      x: Math.random() * 50 - 25,
      y: Math.random() * 50 - 25,
      duration: Math.random() * 15 + 15
    }));
    setOrbs(newOrbs);

    // Generate random values for particles
    const newParticles = [...Array(4)].map((_, i) => ({
      left: 50 + 45 * Math.cos(i * Math.PI / 2),
      top: 50 + 45 * Math.sin(i * Math.PI / 2),
      delay: i * 0.3
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    let i = 0;
    setDisplayedName('');
    const interval = setInterval(() => {
      setDisplayedName(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Solid background - no gradients */}
      
      {/* Floating orbs - solid color */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {orbs.map((orb, i) => (
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
              }}
              transition={{
                duration: orb.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      <Particles
        id="tsparticles"
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: false,
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 100,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                width: 800,
                height: 800
              },
              value: 40,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: false,
        }}
        className="absolute inset-0"
      />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.p
                className="text-blue-400 text-sm md:text-base font-medium mb-4 tracking-wider uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Welcome to my Portfolio
              </motion.p>
              
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="text-blue-400">
                    {displayedName}
                  </span>
                </span>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-6 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                I'm a{' '}
                <span 
                  ref={el} 
                  className="text-blue-400 font-semibold"
                />
              </motion.h2>

              <motion.p 
                className="text-gray-300 text-lg md:text-xl mb-6 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Technical Project Manager with Full Stack Development experience, skilled in Agile delivery, stakeholder coordination, and technical execution. My engineering background enables me to bridge the gap between business and development teams to deliver scalable, high-quality solutions.
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold overflow-hidden transition-all duration-300 text-lg hover:bg-blue-500"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10">Get In Touch</span>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg font-semibold border-2 border-white/30 text-white hover:border-white/50 hover:bg-white/5 transition-all duration-300 text-lg backdrop-blur-sm"
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  projectsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Profile Picture */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem]">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20"></div>
              </motion.div>

              {/* Inner rotating ring */}
              <motion.div
                className="absolute inset-4 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20"></div>
              </motion.div>

              {/* Simple border */}
              <div className="absolute inset-0 rounded-full border-2 border-white/30"></div>

              {/* Profile picture container with hover effect */}
              <motion.div 
                className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Replace with your profile picture */}
                <Image
                  src="/profile.jpg.png"
                  alt="Profile photo"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  priority
                  className="rounded-2xl"
                />

                {/* Shine effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"
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
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"
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

              {/* Floating particles around the profile picture */}
              {isClient && particles.map((particle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: particle.delay,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* Glowing dots at the corners */}
              {isClient && [...Array(4)].map((_, i) => (
                <motion.div
                  key={`corner-${i}`}
                  className="absolute w-3 h-3 bg-white rounded-full"
                  style={{
                    left: i < 2 ? '0%' : '100%',
                    top: i % 2 === 0 ? '0%' : '100%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 