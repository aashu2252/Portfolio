import DeveloperBackground from './components/DeveloperBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import SkillsMatrix from './components/SkillsMatrix';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen text-gray-200 bg-space-black selection:bg-nebula-cyan/20 selection:text-nebula-cyan">
      {/* Background canvas and ambient effects */}
      <DeveloperBackground />

      {/* Main layout container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Education />
          <SkillsMatrix />
          <Projects />
          <Achievements />
          <Contact />
        </main>
      </div>
    </div>
  );
}
