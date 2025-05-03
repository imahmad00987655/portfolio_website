'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

// Sample blog data - replace with your actual data source
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 14',
    excerpt: 'Learn about the latest features and improvements in Next.js 14, including the new App Router and Server Components.',
    category: 'Development',
    date: '2024-03-15',
    readTime: '5 min read',
    image: '/blog/nextjs.jpg',
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS',
    excerpt: 'A comprehensive guide to using Tailwind CSS effectively in your projects, from basic utilities to advanced techniques.',
    category: 'Design',
    date: '2024-03-10',
    readTime: '8 min read',
    image: '/blog/tailwind.jpg',
  },
  {
    id: 3,
    title: 'Building Modern Web Applications',
    excerpt: 'Explore the best practices and tools for building modern, scalable web applications in 2024.',
    category: 'Development',
    date: '2024-03-05',
    readTime: '10 min read',
    image: '/blog/web-dev.jpg',
  },
  // Add more blog posts as needed
];

const categories = ['All', 'Development', 'Design', 'Technology', 'Career'];

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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-tight">
              Blog & Articles
            </h1>
            <p className="font-poppins text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
              Explore the latest insights, tutorials, and updates from the world of web development and design.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto mb-12">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-full bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 text-white placeholder-gray-400 font-poppins"
              />
              <svg
                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
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
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 font-poppins ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
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
                className="group relative bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="aspect-video relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-sm font-medium px-4 py-2 rounded-full bg-black/50 font-poppins">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4 font-poppins">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="font-playfair text-xl font-semibold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-300">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 line-clamp-2 font-poppins leading-relaxed">
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
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg font-poppins">
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