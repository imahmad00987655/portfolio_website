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
      strings: ['Frontend Developer', 'UI/UX Designer', 'React Developer'],
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
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient-shift"></div>
      
      {/* Floating orbs */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {orbs.map((orb, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl"
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
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
                    {displayedName}
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  />
                </span>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl md:text-3xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                I'm a{' '}
                <span 
                  ref={el} 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x"
                />
              </motion.h2>

              <motion.p 
                className="text-gray-300 text-lg mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Passionate about creating beautiful and functional web experiences. 
                Let's build something amazing together!
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold overflow-hidden transition-all duration-300"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Hire Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex gap-4 justify-center md:justify-start mt-8"
            >
              
            </motion.div>
          </motion.div>

          {/* Right side - Profile Picture */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
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

              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              </div>

              {/* Profile picture container with hover effect */}
              <motion.div 
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Replace with your profile picture */}
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-white text-lg">
                  Add Your Photo
                </div>

                {/* Shine effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
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