'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

// Sample blog data - replace with your actual data source
const blogPosts = [
  {
    id: 1,
    title: 'Building AI-Powered Applications: A Comprehensive Guide',
    excerpt: 'Learn how to integrate AI capabilities into your applications, from basic machine learning models to advanced natural language processing.',
    category: 'AI/ML',
    date: '2024-03-20',
    readTime: '12 min read',
    image: '/blog/ai-apps.jpg',
  },
  {
    id: 2,
    title: 'Mastering API Development and Integration',
    excerpt: 'A deep dive into RESTful API design, authentication, rate limiting, and best practices for building scalable APIs.',
    category: 'Development',
    date: '2024-03-18',
    readTime: '10 min read',
    image: '/blog/api-dev.jpg',
  },
  {
    id: 3,
    title: 'Creating Interactive Dashboards with Modern Tools',
    excerpt: 'Explore the best practices for building real-time dashboards using React, Vue.js, and data visualization libraries.',
    category: 'Development',
    date: '2024-03-15',
    readTime: '8 min read',
    image: '/blog/dashboards.jpg',
  },
  {
    id: 4,
    title: 'Full-Stack Development Roadmap 2024',
    excerpt: 'A comprehensive guide to becoming a full-stack developer, covering frontend, backend, and DevOps essentials.',
    category: 'Career',
    date: '2024-03-12',
    readTime: '15 min read',
    image: '/blog/fullstack.jpg',
  },
  {
    id: 5,
    title: 'The Future of Web Development: Trends to Watch',
    excerpt: 'Discover emerging technologies and trends shaping the future of web development in 2024 and beyond.',
    category: 'Technology',
    date: '2024-03-10',
    readTime: '7 min read',
    image: '/blog/web-future.jpg',
  },
  {
    id: 6,
    title: 'Building Scalable Backend Systems',
    excerpt: 'Learn about microservices architecture, database optimization, and best practices for building robust backend systems.',
    category: 'Development',
    date: '2024-03-08',
    readTime: '11 min read',
    image: '/blog/backend.jpg',
  },
  {
    id: 7,
    title: 'Career Growth in Tech: From Junior to Senior Developer',
    excerpt: 'Essential skills, mindset shifts, and strategies for advancing your career in software development.',
    category: 'Career',
    date: '2024-03-05',
    readTime: '9 min read',
    image: '/blog/career.jpg',
  },
  {
    id: 8,
    title: 'Modern Frontend Development with React and Vue',
    excerpt: 'Comparing React and Vue.js for modern web applications, including performance, ecosystem, and use cases.',
    category: 'Development',
    date: '2024-03-03',
    readTime: '8 min read',
    image: '/blog/frontend.jpg',
  }
];

const categories = ['All', 'Development', 'AI/ML', 'Technology', 'Career'];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-playfair text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-tight"
            >
              Blog & Articles
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-poppins text-gray-300 text-lg md:text-xl mb-12 leading-relaxed"
            >
              Explore the latest insights, tutorials, and updates from the world of web development and design.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative max-w-xl mx-auto mb-16"
            >
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 text-white placeholder-gray-400 font-poppins text-lg shadow-lg shadow-blue-500/5"
              />
              <svg
                className="absolute right-8 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </motion.div>

            {/* Category Filter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-8 py-3 rounded-xl text-sm font-medium transition-all duration-300 font-poppins ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 shadow-xl shadow-blue-500/5"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="aspect-video relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-sm font-medium px-6 py-2 rounded-full bg-black/50 font-poppins backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4 font-poppins">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="font-playfair text-2xl font-semibold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-300">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 line-clamp-2 font-poppins leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-300 text-xl font-poppins">
                No articles found matching your criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage; 