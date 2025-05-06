'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResumeDownload = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
              Download My Resume
            </span>
          </motion.h2>

          <motion.p 
            className="text-gray-300 mb-12 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get a detailed overview of my skills, experience, and achievements
          </motion.p>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Download Button */}
            <motion.a
              href="/mycv.pdf"
              download="Ahmad_Khan_Resume.pdf"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </div>
            </motion.a>

            {/* Preview Button */}
            <motion.button
              onClick={() => setIsPreviewOpen(true)}
              className="group relative px-8 py-4 bg-white/5 text-white rounded-lg font-medium overflow-hidden border border-white/10 hover:border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Preview Resume
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Resume Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsPreviewOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg h-[90vh] sm:h-[80vh] md:h-[85vh] lg:h-[80vh] bg-gray-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10 flex flex-col mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                <div className="flex justify-between items-center">
                  <motion.h3 
                    className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Resume Preview
                  </motion.h3>
                  <motion.button
                    onClick={() => setIsPreviewOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors p-2"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="flex-1 p-2 sm:p-4 md:p-6 overflow-hidden">
                <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                  <iframe
                    src="/mycv.pdf"
                    className="w-full h-full"
                    title="Resume Preview"
                  />
                </div>
              </div>

              {/* Download Button */}
              <div className="p-4 sm:p-6 border-t border-white/10 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
                <motion.a
                  href="/mycv.pdf"
                  download="Ahmad_Khan_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ResumeDownload; 