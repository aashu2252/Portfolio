import { motion } from 'framer-motion';
import { Sparkles, ArrowDown, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import heroImg from '../assets/hero.png';

const roles = [
  'Full-Stack Developer',
  'React Enthusiast',
  'UI/UX Designer',
  'Problem Solver'
];

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && charIndex === activeRole.length) {
      typingSpeed = 2000; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      typingSpeed = 500; // Pause before typing next
    }

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex === activeRole.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setTypedText(
          isDeleting
            ? activeRole.substring(0, charIndex - 1)
            : activeRole.substring(0, charIndex + 1)
        );
        setCharIndex((prev) => (prev + (isDeleting ? -1 : 1)));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Floating Ambient Nebulas */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-nebula-purple/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-nebula-cyan/10 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      {/* Floating Geometric Orbs (Buoyant Physics) */}
      <motion.div
        className="absolute top-1/3 left-10 md:left-24 w-12 h-12 rounded-xl border border-nebula-cyan/30 bg-nebula-cyan/5 shadow-[0_0_15px_rgba(0,242,254,0.2)] pointer-events-none"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-16 md:left-40 w-16 h-16 rounded-full border border-nebula-purple/30 bg-nebula-purple/5 shadow-[0_0_20px_rgba(127,0,255,0.2)] pointer-events-none"
        animate={{
          y: [0, -25, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1/4 right-12 md:right-32 w-10 h-10 rounded-lg border border-nebula-pink/30 bg-nebula-pink/5 rotate-12 shadow-[0_0_15px_rgba(225,0,255,0.15)] pointer-events-none"
        animate={{
          y: [0, -12, 0],
          rotate: [12, -12, 12]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      <div className="max-w-7xl mx-auto px-6 z-10 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-center lg:text-left">
          
          {/* Left Column: Bio and Info */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start order-2 lg:order-1">
            {/* Intro Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-space-border bg-space-card backdrop-blur-md mb-6 shadow-inner"
            >
              <Sparkles size={14} className="text-nebula-cyan animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-gray-300">
                Undergraduate Software Developer in Indore, India
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl md:text-6xl font-outfit font-extrabold tracking-tight mb-4 leading-[1.1] text-white"
            >
              Elevating Code Beyond{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-cyan via-nebula-blue to-nebula-purple text-glow-cyan">
                Creative Limits
              </span>
            </motion.h1>

            {/* Subtitle / Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-base md:text-lg text-gray-300 font-light max-w-2xl mb-4 leading-relaxed"
            >
              Passionate about building scalable web applications and developing clean backend architectures. <span className="text-white font-medium">Actively seeking Software Engineering internships.</span>
            </motion.p>

            {/* Social Links (Prominent beneath headline and bio) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <a
                href="https://github.com/aashu2252"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-space-border bg-space-card/60 text-gray-300 hover:text-nebula-cyan hover:border-nebula-cyan/50 hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] hover:scale-110 transition-all duration-300 cursor-pointer"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/aashu2252"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-space-border bg-space-card/60 text-gray-300 hover:text-nebula-blue hover:border-nebula-blue/50 hover:shadow-[0_0_15px_rgba(0,100,255,0.3)] hover:scale-110 transition-all duration-300 cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </motion.div>

            {/* Animated Role Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="h-8 mb-8 flex items-center justify-center lg:justify-start"
            >
              <span className="text-base md:text-lg font-mono text-nebula-cyan">
                &gt; {typedText}
                <span className="animate-pulse font-bold">|</span>
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => handleScroll('projects')}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-nebula-cyan to-nebula-blue text-space-black font-semibold text-sm shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_30px_rgba(0,242,254,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown size={16} />
              </button>
              
              <button
                onClick={() => handleScroll('contact')}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-space-border bg-space-card text-white font-semibold text-sm hover:bg-space-dark hover:border-nebula-purple/50 hover:shadow-[0_0_20px_rgba(127,0,255,0.2)] hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Contact Me</span>
                <ExternalLink size={14} />
              </button>

              <a
                href="/Aashutosh_Singh_Resume.pdf"
                download="Aashutosh_Singh_Resume.pdf"
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-nebula-cyan/50 text-nebula-cyan font-semibold text-sm hover:bg-nebula-cyan/10 hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Download Resume</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Headshot Placeholder (Subtly styled image container) */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative group w-44 h-44 sm:w-60 sm:h-60"
            >
              {/* Outer Glow Backdrops */}
              <div className="absolute -inset-2 bg-gradient-to-r from-nebula-cyan via-nebula-blue to-nebula-purple rounded-full blur-xl opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />
              
              {/* Profile Image Circle */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-space-border/80 bg-space-card/40 backdrop-blur-lg flex items-center justify-center shadow-2xl">
                <img
                  src={heroImg}
                  alt="Aashutosh Singh"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 bg-gradient-to-br from-space-dark to-space-black flex-col items-center justify-center text-gray-400">
                  <svg className="w-16 h-16 text-nebula-cyan/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
              </div>

              {/* Floating Orbiting elements */}
              <motion.div
                className="absolute -top-3 -right-3 p-2.5 rounded-2xl bg-space-dark/80 border border-space-border backdrop-blur-md shadow-lg text-nebula-cyan pointer-events-none"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-3 -left-3 p-2.5 rounded-2xl bg-space-dark/80 border border-space-border backdrop-blur-md shadow-lg text-nebula-purple pointer-events-none"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="9"></line><line x1="9" y1="13" x2="15" y2="13"></line><line x1="9" y1="17" x2="13" y2="17"></line></svg>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.8, 0.3], y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer pointer-events-none hidden lg:flex"
        >
          <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Scroll Down</span>
          <div className="w-6 h-10 rounded-full border border-gray-600 flex justify-center p-1.5">
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-nebula-cyan"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
