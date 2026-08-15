import { motion } from 'framer-motion';
import { ArrowDown, Code, Terminal, Cpu, Database, Layers, FileText, Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import heroImg from '../assets/hero.png';

const roles = [
  'Full-Stack Software Developer',
  'React & Node.js Specialist',
  'Modern UI/UX Architect',
  'Algorithmic Problem Solver'
];

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect loop for rotating roles
  useEffect(() => {
    const activeRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 35 : 85;

    if (!isDeleting && charIndex === activeRole.length) {
      typingSpeed = 2200; // Pause when word is fully typed
    } else if (isDeleting && charIndex === 0) {
      typingSpeed = 400; // Pause before typing the next word
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
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-nebula-purple/10 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-nebula-cyan/10 rounded-full blur-[110px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      {/* Floating status badges */}
      <motion.div
        className="absolute top-1/3 left-6 md:left-20 p-2.5 rounded-xl border border-nebula-cyan/30 bg-space-card/80 backdrop-blur-md shadow-[0_0_20px_rgba(0,242,254,0.15)] pointer-events-none hidden sm:flex items-center gap-2"
        animate={{
          y: [0, -14, 0],
          rotate: [0, 4, -4, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-ping" />
        <span className="text-[10px] font-mono text-gray-300">status: <span className="text-cyber-emerald font-bold">200_OK</span></span>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-10 md:left-32 p-2.5 rounded-xl border border-nebula-purple/30 bg-space-card/80 backdrop-blur-md shadow-[0_0_20px_rgba(127,0,255,0.15)] pointer-events-none hidden sm:flex items-center gap-2"
        animate={{
          y: [0, -20, 0],
          x: [0, 8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Database size={14} className="text-nebula-purple animate-pulse" />
        <span className="text-[10px] font-mono text-gray-300">stack: <span className="text-nebula-purple font-bold">full_stack</span></span>
      </motion.div>

      <motion.div
        className="absolute top-1/4 right-8 md:right-28 p-2.5 rounded-xl border border-nebula-pink/30 bg-space-card/80 backdrop-blur-md shadow-[0_0_20px_rgba(225,0,255,0.15)] pointer-events-none hidden sm:flex items-center gap-2"
        animate={{
          y: [0, -12, 0],
          rotate: [-2, 2, -2]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <Layers size={14} className="text-nebula-pink" />
        <span className="text-[10px] font-mono text-gray-300">ui_engine: <span className="text-nebula-pink font-bold">react_19</span></span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 z-10 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-center lg:text-left">

          {/* Left Column: Introduction & Details */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start order-2 lg:order-1">
            
            {/* Current Role Badge */}
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-nebula-cyan/30 bg-space-card backdrop-blur-md mb-5 shadow-[0_0_15px_rgba(0,242,254,0.1)] group hover:border-nebula-cyan/60 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-emerald"></span>
              </span>
              <span className="text-[11px] font-mono text-gray-300">
                Software Development Intern @ <span className="text-nebula-cyan font-semibold">Indori Coders</span> (July 2026 – Present)
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center gap-2 mb-2"
            >
              <Terminal size={18} className="text-nebula-cyan" />
              <h2 className="text-xl md:text-2xl font-mono text-gray-400">
                Hi, I'm <span className="text-white font-bold tracking-tight">Aashutosh Kumar Singh</span>
              </h2>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-outfit font-extrabold tracking-tight mb-4 leading-[1.1] text-white"
            >
              Engineering Scalable{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-cyan via-nebula-blue to-nebula-purple text-glow-cyan">
                Full-Stack Systems
              </span>
            </motion.h1>

            {/* Typewriter Terminal Role Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="w-full max-w-xl py-2.5 px-4 rounded-xl glass-panel border border-space-border/80 mb-5 flex items-center justify-center lg:justify-start gap-2 shadow-inner"
            >
              <span className="text-xs font-mono text-gray-500 select-none">$ role:</span>
              <span className="text-sm md:text-base font-mono text-nebula-cyan font-semibold">
                {typedText}
                <span className="animate-pulse font-bold ml-0.5 text-white">_</span>
              </span>
            </motion.div>

            {/* Bio Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-base md:text-lg text-gray-300 font-light max-w-2xl mb-6 leading-relaxed"
            >
              Third-Year Undergraduate Computer Science developer from Indore, India & Software Development Intern at Indori Coders (since July 2026). Specializing in high-performance React architectures, Node.js microservices, and database pipelines.
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex items-center gap-3 mb-8"
            >
              <motion.a
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/aashu2252"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel border border-space-border/80 text-gray-300 hover:text-nebula-cyan hover:border-nebula-cyan/50 hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all duration-300 flex items-center gap-2 cursor-pointer group"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span className="text-xs font-mono text-gray-300 group-hover:text-white hidden sm:inline">github.com/aashu2252</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/aashu2252"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel border border-space-border/80 text-gray-300 hover:text-nebula-blue hover:border-nebula-blue/50 hover:shadow-[0_0_20px_rgba(0,100,255,0.3)] transition-all duration-300 flex items-center gap-2 cursor-pointer group"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="text-xs font-mono text-gray-300 group-hover:text-white hidden sm:inline">linkedin.com/in/aashu2252</span>
              </motion.a>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScroll('projects')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-nebula-cyan to-nebula-blue text-space-black font-bold text-sm shadow-[0_0_25px_rgba(0,242,254,0.35)] hover:shadow-[0_0_35px_rgba(0,242,254,0.6)] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shimmer-sweep"
              >
                <span>Explore Featured Work</span>
                <ArrowDown size={16} className="animate-bounce" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScroll('contact')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl glass-panel border border-space-border/80 text-white font-semibold text-sm hover:border-nebula-purple/50 hover:shadow-[0_0_25px_rgba(127,0,255,0.25)] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Get In Touch</span>
                <Send size={14} className="text-nebula-purple" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="/Resume.pdf"
                download="Aashutosh_Kumar_Singh_Resume.pdf"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-nebula-cyan/40 text-nebula-cyan font-semibold text-sm hover:bg-nebula-cyan/10 hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <FileText size={15} />
                <span>Resume (PDF)</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Profile Picture & Config Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2 mb-6 lg:mb-0">
            
            {/* Profile Avatar Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              whileHover={{ scale: 1.04 }}
              className="relative group w-52 h-52 sm:w-64 sm:h-64 mb-6"
            >
              {/* Outer Glow Ring */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-nebula-cyan via-nebula-blue to-nebula-purple rounded-full blur-xl opacity-50 group-hover:opacity-85 transition duration-700 animate-pulse-glow" />

              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-space-border/90 bg-space-card/70 backdrop-blur-xl flex items-center justify-center shadow-2xl">
                <img
                  src={heroImg}
                  alt="Aashutosh Kumar Singh"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 bg-gradient-to-br from-space-dark to-space-black flex-col items-center justify-center text-gray-400">
                  <span className="text-[10px] font-mono tracking-wider text-nebula-cyan mb-2">[Developer Headshot]</span>
                  <svg className="w-16 h-16 text-nebula-cyan/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
              </div>

              {/* Orbiting Badge: React */}
              <motion.div
                className="absolute -top-3 -right-2 p-2.5 rounded-2xl glass-panel border border-nebula-cyan/50 backdrop-blur-xl shadow-lg text-nebula-cyan pointer-events-none"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code size={18} />
              </motion.div>

              {/* Orbiting Badge: Node.js */}
              <motion.div
                className="absolute -bottom-2 -left-2 p-2.5 rounded-2xl glass-panel border border-nebula-purple/50 backdrop-blur-xl shadow-lg text-nebula-purple pointer-events-none"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <Cpu size={18} />
              </motion.div>
            </motion.div>

            {/* Quick Developer Config Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ y: -4, borderColor: 'rgba(0, 242, 254, 0.4)' }}
              className="w-full max-w-sm p-4 rounded-2xl glass-panel border border-space-border/80 shadow-2xl text-left font-mono text-xs relative overflow-hidden transition-all duration-300"
            >
              <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-space-border/50">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                </div>
                <span className="text-[10px] text-gray-500">developer.config.ts</span>
              </div>
              <div className="space-y-1 text-gray-400 leading-relaxed text-[11px]">
                <p><span className="text-nebula-purple">const</span> <span className="text-nebula-cyan">engineer</span> = &#123;</p>
                <p className="pl-4">name: <span className="text-emerald-400">'Aashutosh Kumar Singh'</span>,</p>
                <p className="pl-4">education: <span className="text-emerald-400">'B.Tech CSE (3rd Year)'</span>,</p>
                <p className="pl-4">currentRole: <span className="text-emerald-400">'Intern @ Indori Coders'</span>,</p>
                <p className="pl-4">startup: <span className="text-emerald-400">'Founder @ SoftAppix'</span>,</p>
                <p className="pl-4">status: <span className="text-nebula-cyan font-bold">'actively_building'</span></p>
                <p>&#125;;</p>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Bottom scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.9, 0.4], y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer pointer-events-none hidden lg:flex"
        >
          <span className="text-[9px] font-mono uppercase tracking-widest text-gray-500 mb-1.5">scroll_down</span>
          <div className="w-5 h-8 rounded-full border border-gray-600 flex justify-center p-1">
            <motion.div
              className="w-1 h-1.5 rounded-full bg-nebula-cyan"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
