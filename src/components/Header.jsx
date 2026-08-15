import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, FileText, Send } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll events: background blur, progress bar, and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check which section is currently in view
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top scroll progress indicator */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[60] bg-transparent pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-nebula-cyan via-nebula-blue to-nebula-purple shadow-[0_0_10px_rgba(0,242,254,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-space-darker/80 backdrop-blur-xl border-b border-space-border/80 py-3.5 shadow-2xl shadow-black/60'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Brand Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2.5 text-white font-outfit font-bold text-xl group cursor-pointer"
          >
            <div className="p-2 rounded-xl bg-gradient-to-tr from-nebula-purple/80 via-nebula-blue/80 to-nebula-cyan/80 text-white shadow-lg shadow-nebula-cyan/20 group-hover:shadow-nebula-cyan/40 transition-all duration-300 relative overflow-hidden">
              <Code2 size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white font-extrabold tracking-tight flex items-center gap-1">
                Aashu<span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-cyan to-nebula-blue">.dev</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyber-emerald animate-ping" />
              </span>
              <span className="text-[9px] font-mono text-gray-400 tracking-wider -mt-1 hidden sm:block">
                // software engineer
              </span>
            </div>
          </motion.button>

          {/* Desktop navigation bar */}
          <nav className="hidden md:flex items-center space-x-1 p-1.5 rounded-full glass-panel border border-space-border/80 shadow-lg">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                    isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-nebula-cyan/15 to-nebula-purple/15 border border-nebula-cyan/40 shadow-[0_0_15px_rgba(0,242,254,0.2)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Action buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('contact')}
              className="px-4 py-2 text-xs font-semibold tracking-wider rounded-xl border border-nebula-cyan/40 text-nebula-cyan hover:bg-nebula-cyan/10 hover:border-nebula-cyan transition-all duration-300 shadow-[0_0_15px_rgba(0,242,254,0.1)] hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] flex items-center gap-1.5 cursor-pointer shimmer-sweep"
            >
              <Send size={12} />
              <span>Hire Me</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              href="/Resume.pdf"
              download="Aashutosh_Kumar_Singh_Resume.pdf"
              className="px-4 py-2 text-xs font-bold tracking-wider rounded-xl bg-gradient-to-r from-nebula-cyan to-nebula-blue text-space-black hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] transition-all duration-300 flex items-center gap-1.5 cursor-pointer shimmer-sweep"
            >
              <FileText size={13} />
              <span>Resume</span>
            </motion.a>
          </div>

          {/* Mobile menu toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-gray-300 hover:text-white glass-panel border border-space-border transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>

        {/* Mobile menu drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden glass-panel border-t border-space-border mt-3 py-6 px-6 shadow-2xl"
            >
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.button
                    key={link.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                      activeSection === link.id
                        ? 'bg-nebula-cyan/10 text-nebula-cyan font-semibold border-l-2 border-nebula-cyan'
                        : 'text-gray-400 hover:text-white hover:bg-space-dark/50'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}

                <div className="pt-4 grid grid-cols-2 gap-3 border-t border-space-border/60">
                  <button
                    onClick={() => handleNavClick('contact')}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-nebula-cyan to-nebula-blue text-space-black font-bold text-xs shadow-md shadow-nebula-cyan/20 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send size={13} />
                    <span>Hire Me</span>
                  </button>

                  <a
                    href="/Resume.pdf"
                    download="Aashutosh_Kumar_Singh_Resume.pdf"
                    className="w-full py-2.5 rounded-xl border border-nebula-cyan/40 text-nebula-cyan font-semibold text-xs hover:bg-nebula-cyan/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <FileText size={13} />
                    <span>Resume</span>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
