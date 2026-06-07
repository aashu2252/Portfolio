import SpaceBackground from './components/SpaceBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SkillsMatrix from './components/SkillsMatrix';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen text-gray-200">
      {/* Floating Starfield Canvas */}
      <SpaceBackground />

      {/* Main Page Elements */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <SkillsMatrix />
          <Projects />
          <Achievements />
          <Contact />
        </main>
      </div>
    </div>
  );
}
