# Modern Portfolio Website - Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Quick Start Guide](#quick-start-guide)
5. [Features](#features)
6. [File Structure](#file-structure)
7. [Customization](#customization)
8. [Theme Configuration](#theme-configuration)
9. [Components](#components)
10. [Data Management](#data-management)
11. [Styling](#styling)
12. [Animations](#animations)
13. [Responsive Design](#responsive-design)
14. [Performance Optimization](#performance-optimization)
15. [Deployment](#deployment)
16. [Troubleshooting](#troubleshooting)
17. [Frequently Asked Questions](#frequently-asked-questions)
18. [Support](#support)
19. [Changelog](#changelog)
20. [Credits](#credits)

## Introduction

The Modern Portfolio Website is a professional, responsive portfolio template built with Next.js 14, Tailwind CSS, and Framer Motion. This documentation will guide you through the installation, customization, and deployment process.

### What's Included
- Complete source code
- Documentation
- Sample content
- Support files

### Demo
- Live Demo: [https://your-portfolio-demo.com](https://your-portfolio-demo.com)
- Video Demo: [https://youtube.com/watch?v=your-video-id](https://youtube.com/watch?v=your-video-id)

## Requirements

### Server Requirements
- Node.js 18.0.0 or higher
- npm 9.0.0 or higher
- Git

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

### Development Tools
- VS Code (recommended)
- Git
- npm or yarn

## Installation

### Method 1: Using Git
```bash
# Clone the repository
git clone https://github.com/imahmad00987655/portfolio-template

# Navigate to project directory
cd portfolio

# Install dependencies
npm install
```

### Method 2: Using ZIP
1. Download the ZIP file
2. Extract the contents
3. Open terminal in the extracted folder
4. Run `npm install`

### Environment Setup
1. Create `.env.local` file in root directory
2. Add the following variables:
```env
NEXT_PUBLIC_EMAIL_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=your_public_key
```

## Quick Start Guide

1. **Start Development Server**
```bash
npm run dev
```

2. **Build for Production**
```bash
npm run build
```

3. **Start Production Server**
```bash
npm run start
```

4. **Access the Website**
- Development: [http://localhost:3000](http://localhost:3000)
- Production: deployed URL = portfolio-template-orpin-eta.vercel.app

## Features

### Core Features
- Modern, responsive design
- Interactive timeline
- Blog section with filtering
- Project showcase
- Contact form with validation
- Social media integration
- Resume download functionality

### Technical Features
- Next.js 14 with App Router
- Tailwind CSS for styling
- Framer Motion animations
- TypeScript support
- SEO optimization
- Performance optimization
- Responsive images
- Code splitting
- Environment variables
- Hot reloading

## File Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── projects/          # Projects pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── About.tsx         # About section
│   ├── Blog.tsx          # Blog section
│   ├── ContactForm.tsx   # Contact form
│   ├── Footer.tsx        # Footer component
│   ├── Hero.tsx          # Hero section
│   ├── Navbar.tsx        # Navigation bar
│   └── Projects.tsx      # Projects section
├── data/                 # Data files
│   ├── blog.ts          # Blog posts data
│   ├── experience.ts    # Experience data
│   └── projects.ts      # Projects data
├── public/              # Static files
│   └── images/         # Image assets
├── styles/             # Global styles
│   └── globals.css     # Global CSS
├── types/              # TypeScript types
├── utils/              # Utility functions
├── .env.local         # Environment variables
├── .gitignore         # Git ignore file
├── next.config.js     # Next.js configuration
├── package.json       # Project dependencies
├── tailwind.config.js # Tailwind configuration
└── tsconfig.json      # TypeScript configuration
```

## Customization

### Updating Content

1. **Projects**
Edit `data/projects.ts`:
```typescript
export const projects = [
  {
    id: "project-1",
    title: "Project Title",
    description: "Project description",
    image: "/images/project.jpg",
    technologies: ["React", "Node.js"],
    demoLink: "https://demo.com",
    githubLink: "https://github.com/username/project",
    featured: true
  }
];
```

2. **Blog Posts**
Edit `data/blog.ts`:
```typescript
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post Title",
    content: "Blog content",
    date: "2024-03-20",
    category: "Technology",
    image: "/images/blog.jpg",
    tags: ["React", "Next.js"],
    author: "Your Name",
    readTime: "5 min read"
  }
];
```

3. **Experience**
Edit `data/experience.ts`:
```typescript
export const experience = [
  {
    id: "exp-1",
    company: "Company Name",
    position: "Position Title",
    period: "2020 - Present",
    location: "City, Country",
    achievements: ["Achievement 1", "Achievement 2"],
    technologies: ["React", "Node.js"],
    impact: "Project impact description"
  }
];
```

### Font Configuration
```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }]
      }
    }
  }
};
```

## Components

### Navbar
The navigation bar includes:
- Logo
- Navigation links
- Mobile menu
- Social media links

```typescript
// components/Navbar.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      {/* Navbar content */}
    </nav>
  );
};
```

### Hero Section
Features:
- Animated text
- Background effects
- Call-to-action buttons
- Social media links

```typescript
// components/Hero.tsx
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      {/* Hero content */}
    </section>
  );
};
```

## Data Management

### Blog Posts
Store blog posts in `data/blog.ts`:
```typescript
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
  author: string;
  readTime: string;
  excerpt?: string;
  featured?: boolean;
}
```

### Projects
Store projects in `data/projects.ts`:
```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
  featured: boolean;
  category: string;
  date: string;
}
```

## Styling

### Global Styles
Edit `styles/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 48%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

## Animations

### Framer Motion
The project uses Framer Motion for animations:
```typescript
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.5 }}
>
  {/* Animated content */}
</motion.div>
```

## Responsive Design

### Breakpoints
The portfolio is optimized for:
- Desktop: 1920px and below
- Tablet: 1024px and below
- Mobile: 768px and below

### Media Queries
Use Tailwind's responsive classes:
```html
<div className="w-full md:w-1/2 lg:w-1/3">
  {/* Responsive content */}
</div>
```

## Performance Optimization

### Image Optimization
Use Next.js Image component:
```typescript
import Image from 'next/image';

<Image
  src="/images/project.jpg"
  alt="Project"
  width={800}
  height={600}
  priority
  quality={90}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Code Splitting
Next.js automatically handles code splitting. Use dynamic imports for large components:
```typescript
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});
```

## Deployment

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy

### Environment Variables
Required environment variables:
```env
NEXT_PUBLIC_EMAIL_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=your_public_key
```

## Troubleshooting

### Common Issues

1. **Build Errors**
- Clear `.next` folder
- Run `npm install` again
- Check for missing dependencies

2. **Styling Issues**
- Clear browser cache
- Check Tailwind configuration
- Verify class names

3. **Animation Issues**
- Check Framer Motion version
- Verify animation properties
- Ensure proper mounting

## Frequently Asked Questions

### General Questions

1. **How do I change the theme colors?**
Edit the `tailwind.config.js` file and update the color values.

2. **How do I add new blog posts?**
Add new entries to the `data/blog.ts` file.

3. **How do I customize the contact form?**
Edit the `components/ContactForm.tsx` file.

### Technical Questions

1. **How do I update dependencies?**
Run `npm update` to update all dependencies.

2. **How do I add new pages?**
Create new files in the `app` directory.

3. **How do I modify animations?**
Edit the Framer Motion configurations in the components.

## Support

For support, please:
1. Check the documentation
2. Search existing issues
3. Create a new issue with:
   - Description of the problem
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots if applicable

### Contact
- Email: imahmadkhan1029@gmail.com
- GitHub: Ahmad_Khan (https://github.com/imahmad00987655/portfolio-template)

## Changelog

### Version 1.0.0 (2024-03-20)
- Initial release
- Added all core features
- Implemented responsive design
- Added theme switching
- Added blog functionality
- Added project showcase
- Added contact form
- Added newsletter integration

## Credits

### Libraries and Tools
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Google Fonts](https://fonts.google.com/)

### Images and Icons
- [Icons8](https://icons8.com/)

### Fonts
- [Google Fonts](https://fonts.google.com/)
  - Playfair Display
  - Poppins
  - Inter
