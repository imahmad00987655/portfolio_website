'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Sample blog data - replace with your actual data source
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 14',
    content: `
      <p>Next.js 14 introduces several groundbreaking features that make building React applications even more powerful and efficient. In this article, we'll explore the key improvements and how to leverage them in your projects.</p>
      
      <h2>The New App Router</h2>
      <p>The App Router is one of the most significant changes in Next.js 14. It provides a more intuitive way to organize your application's routing structure and enables powerful features like nested layouts and loading states.</p>
      
      <h2>Server Components</h2>
      <p>Server Components are a game-changer for performance optimization. They allow you to render components on the server, reducing the JavaScript bundle size sent to the client and improving initial page load times.</p>
      
      <h2>Enhanced Data Fetching</h2>
      <p>Next.js 14 introduces improved data fetching capabilities, making it easier to fetch and cache data at various levels of your application.</p>
    `,
    category: 'Development',
    date: '2024-03-15',
    readTime: '5 min read',
    author: {
      name: 'Ahmad Khan',
      avatar: '/authors/ahmad.jpg',
      role: 'Senior Developer'
    },
    tags: ['Next.js', 'React', 'Web Development', 'JavaScript']
  },
  // Add more blog posts as needed
];

const BlogPost = () => {
  const params = useParams();
  const post = blogPosts.find(p => p.id === Number(params.id));

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-400 hover:text-blue-300">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

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
            className="max-w-4xl mx-auto"
          >
            <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 group font-poppins">
              <svg
                className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Blog
            </Link>

            <div className="flex items-center gap-4 text-sm text-gray-400 mb-6 font-poppins">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span className="px-3 py-1 rounded-full bg-white/5">{post.category}</span>
            </div>

            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-tight">
              {post.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-[2px]">
                <div className="w-full h-full rounded-full bg-black">
                  {/* Add author avatar here */}
                </div>
              </div>
              <div>
                <p className="font-poppins font-medium">{post.author.name}</p>
                <p className="text-sm text-gray-400 font-poppins">{post.author.role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-invert prose-lg max-w-none font-poppins"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="font-playfair text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-white/5 text-sm text-gray-400 hover:bg-white/10 transition-colors font-poppins"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="font-playfair text-lg font-semibold mb-4">Share this article</h3>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'Facebook'].map((platform) => (
                  <motion.button
                    key={platform}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <span className="sr-only font-poppins">Share on {platform}</span>
                    {/* Add social media icons here */}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost; 