'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type BlogPost = {
  id: number;
  title: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  tags: string[];
};

// Sample blog data - replace with your actual data source
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building AI-Powered Applications: A Comprehensive Guide',
    content: `
      <h2>Introduction to AI in Modern Applications</h2>
      <p>Artificial Intelligence has revolutionized how we build and interact with applications. From simple chatbots to complex recommendation systems, AI capabilities are becoming essential in modern software development.</p>

      <h2>Key Components of AI Integration</h2>
      <ul>
        <li>Machine Learning Models</li>
        <li>Natural Language Processing</li>
        <li>Computer Vision</li>
        <li>Predictive Analytics</li>
      </ul>

      <h2>Getting Started with AI Development</h2>
      <p>To begin integrating AI into your applications, you'll need to understand the following:</p>
      <ul>
        <li>Basic machine learning concepts</li>
        <li>Popular AI frameworks and libraries</li>
        <li>Data preprocessing and model training</li>
        <li>API integration with AI services</li>
      </ul>

      <h2>Best Practices for AI Implementation</h2>
      <p>When implementing AI features, consider these important aspects:</p>
      <ul>
        <li>Data privacy and security</li>
        <li>Model performance optimization</li>
        <li>Error handling and fallback mechanisms</li>
        <li>User experience considerations</li>
      </ul>

      <h2>Real-World Examples</h2>
      <p>Here are some practical examples of AI integration:</p>
      <ul>
        <li>Sentiment analysis for customer feedback</li>
        <li>Image recognition for product categorization</li>
        <li>Personalized content recommendations</li>
        <li>Automated customer support systems</li>
      </ul>

      <h2>Conclusion</h2>
      <p>AI integration is no longer optional for modern applications. By following best practices and understanding the fundamentals, developers can create more intelligent and responsive applications that better serve their users.</p>
    `,
    category: 'AI/ML',
    date: '2024-03-20',
    readTime: '12 min read',
    image: '/blog/ai-apps.jpg',
    author: {
      name: 'Ahmad Khan',
      avatar: '/authors/ahmad.jpg',
      role: 'Senior Developer'
    },
    tags: ['AI', 'Machine Learning', 'Web Development', 'Technology']
  },
  {
    id: 2,
    title: 'Mastering API Development and Integration',
    content: `
      <h2>Understanding RESTful API Design</h2>
      <p>RESTful APIs form the backbone of modern web applications. Learn the principles of REST architecture and how to design scalable, maintainable APIs.</p>

      <h2>Essential API Components</h2>
      <ul>
        <li>Resource-based endpoints</li>
        <li>HTTP methods and status codes</li>
        <li>Request/response formats</li>
        <li>Authentication and authorization</li>
      </ul>

      <h2>API Security Best Practices</h2>
      <p>Security is crucial in API development. Implement these practices:</p>
      <ul>
        <li>JWT authentication</li>
        <li>Rate limiting</li>
        <li>Input validation</li>
        <li>CORS configuration</li>
      </ul>

      <h2>API Documentation</h2>
      <p>Clear documentation is essential for API adoption. Learn how to:</p>
      <ul>
        <li>Write comprehensive API documentation</li>
        <li>Use tools like Swagger/OpenAPI</li>
        <li>Create interactive documentation</li>
        <li>Maintain version control</li>
      </ul>

      <h2>Testing and Monitoring</h2>
      <p>Ensure your API's reliability through:</p>
      <ul>
        <li>Unit testing</li>
        <li>Integration testing</li>
        <li>Performance monitoring</li>
        <li>Error tracking</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Mastering API development requires understanding both technical and practical aspects. By following these guidelines, you can create robust, secure, and maintainable APIs that serve your application's needs effectively.</p>
    `,
    category: 'Development',
    date: '2024-03-18',
    readTime: '10 min read',
    image: '/blog/api-dev.jpg',
    author: {
      name: 'Ahmad Khan',
      avatar: '/authors/ahmad.jpg',
      role: 'Senior Developer'
    },
    tags: ['API', 'Backend', 'Web Development', 'Security']
  },
  {
    id: 3,
    title: 'Creating Interactive Dashboards with Modern Tools',
    content: `
      <h2>Introduction to Modern Dashboards</h2>
      <p>Interactive dashboards have become essential tools for data visualization and business intelligence. Learn how to create powerful, user-friendly dashboards using modern web technologies.</p>

      <h2>Key Technologies and Tools</h2>
      <ul>
        <li>React and Vue.js for UI components</li>
        <li>Chart.js and D3.js for data visualization</li>
        <li>Real-time data updates with WebSocket</li>
        <li>Responsive design principles</li>
      </ul>

      <h2>Dashboard Design Principles</h2>
      <p>Create effective dashboards by following these principles:</p>
      <ul>
        <li>Clear information hierarchy</li>
        <li>Intuitive navigation</li>
        <li>Consistent color schemes</li>
        <li>Interactive elements</li>
      </ul>

      <h2>Performance Optimization</h2>
      <p>Ensure your dashboard performs well with:</p>
      <ul>
        <li>Data caching strategies</li>
        <li>Lazy loading components</li>
        <li>Efficient data processing</li>
        <li>Optimized rendering</li>
      </ul>

      <h2>Real-World Implementation</h2>
      <p>Learn from practical examples:</p>
      <ul>
        <li>Analytics dashboards</li>
        <li>Project management tools</li>
        <li>Financial reporting systems</li>
        <li>Monitoring platforms</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Modern dashboards combine powerful technology with user-centered design to deliver valuable insights. By following these guidelines, you can create dashboards that are both functional and engaging.</p>
    `,
    category: 'Development',
    date: '2024-03-15',
    readTime: '8 min read',
    image: '/blog/dashboards.jpg',
    author: {
      name: 'Ahmad Khan',
      avatar: '/authors/ahmad.jpg',
      role: 'Senior Developer'
    },
    tags: ['Dashboard', 'Data Visualization', 'React', 'Vue.js']
  },
  {
    id: 4,
    title: 'Full-Stack Development Roadmap 2024',
    content: `
      <h2>The Modern Full-Stack Developer</h2>
      <p>Full-stack development continues to evolve with new technologies and best practices. This comprehensive roadmap will guide you through the essential skills and knowledge needed in 2024.</p>

      <h2>Frontend Development</h2>
      <ul>
        <li>Modern JavaScript (ES6+)</li>
        <li>React/Vue.js frameworks</li>
        <li>TypeScript fundamentals</li>
        <li>CSS frameworks and methodologies</li>
      </ul>

      <h2>Backend Development</h2>
      <p>Master these backend technologies:</p>
      <ul>
        <li>Node.js and Express</li>
        <li>Python with Django/Flask</li>
        <li>Database design and optimization</li>
        <li>API development and security</li>
      </ul>

      <h2>DevOps and Deployment</h2>
      <p>Essential DevOps skills include:</p>
      <ul>
        <li>Docker and containerization</li>
        <li>CI/CD pipelines</li>
        <li>Cloud platforms (AWS, Azure, GCP)</li>
        <li>Monitoring and logging</li>
      </ul>

      <h2>Soft Skills and Best Practices</h2>
      <p>Develop these crucial soft skills:</p>
      <ul>
        <li>Version control with Git</li>
        <li>Agile methodologies</li>
        <li>Code review practices</li>
        <li>Documentation writing</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The full-stack development landscape is constantly evolving. Stay current with these technologies and practices to build robust, scalable applications in 2024 and beyond.</p>
    `,
    category: 'Career',
    date: '2024-03-12',
    readTime: '15 min read',
    image: '/blog/fullstack.jpg',
    author: {
      name: 'Ahmad Khan',
      avatar: '/authors/ahmad.jpg',
      role: 'Senior Developer'
    },
    tags: ['Full-Stack', 'Career', 'Web Development', 'DevOps']
  },
  {
    id: 5,
    title: 'The Future of Web Development: Trends to Watch',
    content: `
      <h2>Emerging Web Technologies</h2>
      <p>The web development landscape is rapidly evolving with new technologies and approaches. Let's explore the most promising trends shaping the future of web development.</p>

      <h2>Key Trends in 2024</h2>
      <ul>
        <li>WebAssembly for high-performance applications</li>
        <li>Edge computing and serverless architecture</li>
        <li>Progressive Web Apps (PWAs)</li>
        <li>AI-powered development tools</li>
      </ul>

      <h2>Frontend Evolution</h2>
      <p>Frontend development is advancing with:</p>
      <ul>
        <li>Component-driven architecture</li>
        <li>Micro-frontends</li>
        <li>CSS-in-JS solutions</li>
        <li>Build tool optimization</li>
      </ul>

      <h2>Backend Innovations</h2>
      <p>Backend development is transforming through:</p>
      <ul>
        <li>GraphQL adoption</li>
        <li>Real-time capabilities</li>
        <li>Serverless functions</li>
        <li>Database innovations</li>
      </ul>

      <h2>Development Workflow</h2>
      <p>Modern development practices include:</p>
      <ul>
        <li>Automated testing and deployment</li>
        <li>Low-code/no-code platforms</li>
        <li>AI-assisted development</li>
        <li>Enhanced security measures</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Staying ahead in web development requires continuous learning and adaptation. By understanding these trends, developers can prepare for the future of web development.</p>
    `,
    category: 'Technology',
    date: '2024-03-10',
    readTime: '7 min read',
    image: '/blog/web-future.jpg',
    author: {
      name: 'Ahmad Khan',
      avatar: '/authors/ahmad.jpg',
      role: 'Senior Developer'
    },
    tags: ['Web Development', 'Technology', 'Trends', 'Future']
  },
  {
    id: 6,
    title: 'Building Scalable Backend Systems',
    content: `
      <h2>Understanding Scalability</h2>
      <p>Scalable backend systems are crucial for modern applications. Learn how to design and implement systems that can handle growing user bases and increasing data loads.</p>

      <h2>Architecture Patterns</h2>
      <ul>
        <li>Microservices architecture</li>
        <li>Event-driven design</li>
        <li>Load balancing strategies</li>
        <li>Database sharding</li>
      </ul>

      <h2>Performance Optimization</h2>
      <p>Optimize your backend with:</p>
      <ul>
        <li>Caching strategies</li>
        <li>Database indexing</li>
        <li>Query optimization</li>
        <li>Resource management</li>
      </ul>

      <h2>Security Considerations</h2>
      <p>Ensure your system's security through:</p>
      <ul>
        <li>Authentication and authorization</li>
        <li>Data encryption</li>
        <li>API security</li>
        <li>Regular security audits</li>
      </ul>

      <h2>Monitoring and Maintenance</h2>
      <p>Keep your system running smoothly with:</p>
      <ul>
        <li>Performance monitoring</li>
        <li>Error tracking</li>
        <li>Automated backups</li>
        <li>Disaster recovery plans</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Building scalable backend systems requires careful planning and implementation. By following these guidelines, you can create robust systems that grow with your application's needs.</p>
    `,
    category: 'Development',
    date: '2024-03-08',
    readTime: '11 min read',
    image: '/blog/backend.jpg',
    author: {
      name: 'Ahmad Khan',
      avatar: '/authors/ahmad.jpg',
      role: 'Senior Developer'
    },
    tags: ['Backend', 'Scalability', 'Architecture', 'Performance']
  },
  {
    id: 7,
    title: 'Career Growth in Tech: From Junior to Senior Developer',
    content: `
      <h2>The Developer Career Path</h2>
      <p>Navigating your career in technology requires strategic planning and continuous learning. Learn how to progress from a junior to senior developer role effectively.</p>

      <h2>Essential Skills Development</h2>
      <ul>
        <li>Technical expertise</li>
        <li>Problem-solving abilities</li>
        <li>Communication skills</li>
        <li>Leadership qualities</li>
      </ul>

      <h2>Career Advancement Strategies</h2>
      <p>Advance your career through:</p>
      <ul>
        <li>Continuous learning</li>
        <li>Mentorship opportunities</li>
        <li>Project leadership</li>
        <li>Community involvement</li>
      </ul>

      <h2>Building Your Professional Brand</h2>
      <p>Develop your professional presence:</p>
      <ul>
        <li>GitHub portfolio</li>
        <li>Technical blogging</li>
        <li>Conference speaking</li>
        <li>Open source contributions</li>
      </ul>

      <h2>Work-Life Balance</h2>
      <p>Maintain a healthy balance with:</p>
      <ul>
        <li>Time management</li>
        <li>Stress management</li>
        <li>Continuous learning</li>
        <li>Networking</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Career growth in technology is a journey of continuous learning and adaptation. By following these guidelines, you can build a successful and fulfilling career in software development.</p>
    `,
    category: 'Career',
    date: '2024-03-05',
    readTime: '9 min read',
    image: '/blog/career.jpg',
    author: {
      name: 'Ahmad Khan',
      avatar: '/authors/ahmad.jpg',
      role: 'Senior Developer'
    },
    tags: ['Career', 'Development', 'Professional Growth', 'Technology']
  },
  {
    id: 8,
    title: 'Modern Frontend Development with React and Vue',
    content: `
      <h2>Frontend Framework Comparison</h2>
      <p>React and Vue.js are two of the most popular frontend frameworks. Learn about their strengths, use cases, and how to choose the right one for your project.</p>

      <h2>Framework Fundamentals</h2>
      <ul>
        <li>Component architecture</li>
        <li>State management</li>
        <li>Routing solutions</li>
        <li>Build tools</li>
      </ul>

      <h2>Performance Considerations</h2>
      <p>Optimize your application with:</p>
      <ul>
        <li>Code splitting</li>
        <li>Lazy loading</li>
        <li>Virtual DOM optimization</li>
        <li>Bundle size reduction</li>
      </ul>

      <h2>Development Workflow</h2>
      <p>Streamline your development process:</p>
      <ul>
        <li>Component testing</li>
        <li>State management</li>
        <li>Styling solutions</li>
        <li>Build optimization</li>
      </ul>

      <h2>Best Practices</h2>
      <p>Follow these guidelines for success:</p>
      <ul>
        <li>Code organization</li>
        <li>Performance optimization</li>
        <li>Accessibility standards</li>
        <li>Security measures</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Both React and Vue.js offer powerful solutions for modern frontend development. Understanding their differences and best practices will help you build better applications.</p>
    `,
    category: 'Development',
    date: '2024-03-03',
    readTime: '8 min read',
    image: '/blog/frontend.jpg',
    author: {
      name: 'Ahmad Khan',
      avatar: '/authors/ahmad.jpg',
      role: 'Senior Developer'
    },
    tags: ['Frontend', 'React', 'Vue.js', 'Web Development']
  }
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
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link href="/blog" className="inline-flex items-center text-gray-300 hover:text-white mb-8 group font-poppins transition-colors duration-300">
                <svg
                  className="w-6 h-6 mr-3 transform group-hover:-translate-x-2 transition-transform duration-300"
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-4 text-sm text-gray-300 mb-8 font-poppins"
            >
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm">{post.category}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-tight leading-tight"
            >
              {post.title}
            </motion.h1>

            {/* Author Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-6 mb-16"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-[2px]">
                <div className="w-full h-full rounded-full bg-black">
                  {/* Add author avatar here */}
                </div>
              </div>
              <div>
                <p className="font-poppins text-lg font-medium">{post.author.name}</p>
                <p className="text-sm text-gray-300 font-poppins">{post.author.role}</p>
              </div>
            </motion.div>
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
              transition={{ duration: 0.8, delay: 1 }}
              className="prose prose-invert prose-lg max-w-none font-poppins prose-headings:font-playfair prose-headings:text-3xl prose-headings:font-bold prose-headings:mb-6 prose-p:text-gray-300 prose-p:leading-relaxed prose-ul:text-gray-300 prose-ul:leading-relaxed prose-li:marker:text-blue-400"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-16 pt-8 border-t border-white/10"
            >
              <h3 className="font-playfair text-2xl font-semibold mb-6">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-6 py-2.5 rounded-xl bg-white/5 text-sm text-gray-300 hover:bg-white/10 transition-colors font-poppins backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Share Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-16 pt-8 border-t border-white/10"
            >
              <h3 className="font-playfair text-2xl font-semibold mb-6">Share this article</h3>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'Facebook'].map((platform) => (
                  <motion.button
                    key={platform}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm"
                  >
                    <span className="sr-only font-poppins">Share on {platform}</span>
                    {/* Add social media icons here */}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost; 