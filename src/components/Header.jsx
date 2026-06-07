import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = ['home', 'about', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-space-black/70 backdrop-blur-md border-b border-space-border py-4 shadow-lg shadow-black/20'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-2 text-white font-outfit font-bold text-xl group"
        >
          <div className="p-1.5 rounded-lg bg-gradient-to-tr from-nebula-purple to-nebula-cyan text-white shadow-md shadow-nebula-cyan/20 group-hover:scale-105 transition-transform duration-300">
            <Terminal size={18} />
          </div>
          <span>
            Aashu<span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-cyan to-nebula-blue font-light">.dev</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                activeSection === link.id
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-gradient-to-r from-nebula-cyan to-nebula-blue rounded-full shadow-lg shadow-nebula-cyan/50 animate-pulse" />
              )}
            </button>
          ))}
          
          <button
            onClick={() => handleNavClick('contact')}
            className="ml-4 px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full border border-nebula-cyan/50 text-nebula-cyan hover:bg-nebula-cyan/10 hover:border-nebula-cyan transition-all duration-300 shadow-[0_0_15px_rgba(0,242,254,0.1)] hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:-translate-y-0.5"
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-space-dark/50 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass-panel border-t border-space-border py-6 transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col space-y-3 px-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-left py-2 text-base font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-nebula-cyan font-semibold pl-2 border-l-2 border-nebula-cyan'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full mt-4 text-center py-2.5 rounded-lg bg-gradient-to-r from-nebula-cyan to-nebula-blue text-white font-semibold shadow-md shadow-nebula-cyan/20 hover:opacity-90 transition-opacity"
          >
            Hire Me
          </button>
        </nav>
      </div>
    </header>
  );
}
