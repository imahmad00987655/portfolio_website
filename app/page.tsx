import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Courses from '../components/Courses';
import ResumeDownload from '../components/ResumeDownload';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Projects />
      <Courses />
      <ResumeDownload />
      <ContactForm />
    </main>
  );
} 