import { motion } from 'framer-motion';
import { Sparkles, ArrowDown, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
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

      <div className="max-w-5xl mx-auto px-6 text-center z-10 relative">
        {/* Intro Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-space-border bg-space-card backdrop-blur-md mb-8 shadow-inner"
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
          className="text-4xl md:text-7xl font-outfit font-extrabold tracking-tight mb-6 leading-[1.1]"
        >
          Elevating Code Beyond{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-cyan via-nebula-blue to-nebula-purple text-glow-cyan">
            Creative Limits
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-gray-400 font-light max-w-3xl mx-auto mb-4"
        >
          Second Year Undergraduate Software Developer <span className="text-white font-medium">focused on Full-Stack engineering and seeking a student internship</span>.
        </motion.p>

        {/* Animated Role Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="h-8 mb-12 flex items-center justify-center"
        >
          <span className="text-lg md:text-xl font-mono text-nebula-cyan">
            &gt; {typedText}
            <span className="animate-pulse font-bold">|</span>
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScroll('projects')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-nebula-cyan to-nebula-blue text-space-black font-semibold text-base shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_30px_rgba(0,242,254,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>View My Work</span>
            <ArrowDown size={18} />
          </button>
          
          <button
            onClick={() => handleScroll('contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-space-border bg-space-card text-white font-semibold text-base hover:bg-space-dark hover:border-nebula-purple/50 hover:shadow-[0_0_20px_rgba(127,0,255,0.2)] hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Contact Me</span>
            <ExternalLink size={16} />
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.8, 0.3], y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer pointer-events-none md:flex"
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
