'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Courses', path: '#courses' },
    { name: 'Resume', path: '#resume' },
    { name: 'Contact', path: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl shadow-lg shadow-purple-500/10' 
          : 'bg-transparent'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient" />
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('#home')}
            className="relative group"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
            >
              M Ahmad Khan
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className="relative group text-gray-300 hover:text-white"
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <svg
              className="w-6 h-6 text-white relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-pink-500/10" />
            <nav className="container mx-auto px-4 py-4 relative">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className="relative group p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-left"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    />
                  </button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header; 