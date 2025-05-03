import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import ResumeDownload from '../components/ResumeDownload';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Projects />
      <ResumeDownload />
      <ContactForm />
    </main>
  );
} 