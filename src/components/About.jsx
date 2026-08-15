import { motion } from 'framer-motion';
import { Shield, MapPin, Code, Globe, Activity, Terminal, ArrowUpRight, Cpu } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'React.js', level: 'Advanced', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', level: 'Intermediate', icon: '🟢', color: 'from-green-400 to-emerald-500' },
    { name: 'Tailwind CSS', level: 'Advanced', icon: '🎨', color: 'from-cyan-400 to-teal-500' },
    { name: 'JavaScript (ES6+)', level: 'Advanced', icon: '⚡', color: 'from-yellow-400 to-amber-500' },
  ];

  const focusAreas = [
    {
      icon: <Code className="text-nebula-cyan" size={22} />,
      title: 'Full-Stack Integration',
      desc: 'Building responsive React interfaces backed by secure, relational, and real-time backend pipelines.'
    },
    {
      icon: <Globe className="text-nebula-blue" size={22} />,
      title: 'High-Fidelity UI/UX Systems',
      desc: 'Crafting responsive, clean animations and accessible layout panels with high visual style.'
    },
    {
      icon: <Activity className="text-nebula-purple" size={22} />,
      title: 'Algorithms & NLP Systems',
      desc: 'Integrating machine learning models and structuring data pipelines for specialized local applications.'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-transparent border-t border-space-border/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-space-border text-xs font-mono text-nebula-cyan mb-3">
            <Terminal size={12} />
            <span>developer.identity()</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-outfit font-extrabold mb-4">
            Defying the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-cyan via-nebula-blue to-nebula-purple">
              Status Quo
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-nebula-cyan to-nebula-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <motion.div
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-panel border border-space-border/80 text-sm font-mono text-gray-300"
            >
              <MapPin size={16} className="text-nebula-cyan animate-pulse" />
              <span>Indore, Madhya Pradesh, India</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-gray-300 leading-relaxed text-lg font-light"
            >
              As a <span className="text-white font-semibold">Third-Year Undergraduate Software Developer</span> based in Indore, India, currently working as a <span className="text-nebula-cyan font-semibold">Software Development Intern at Indori Coders</span> (since July 2026), I specialize in creating full-stack web architectures and responsive interfaces.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-400 leading-relaxed font-light"
            >
              I actively build high-performance web apps, design scalable databases, and contribute to production workflows. Through my internship at Indori Coders, I apply software engineering best practices, collaborate on team codebases, and develop clean, maintainable logic.
            </motion.p>

            {/* Core Tech Stack Cards */}
            <div className="pt-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
                <Cpu size={16} className="text-nebula-cyan" />
                <span>// Core Developer Tech Stack</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.06, y: -4 }}
                    className="p-3.5 rounded-xl glass-panel border border-space-border/70 text-center hover:border-nebula-cyan/40 hover:shadow-[0_0_20px_rgba(0,242,254,0.15)] transition-all duration-300 group cursor-default"
                  >
                    <span className="text-lg block mb-1 group-hover:scale-125 transition-transform duration-300">{skill.icon}</span>
                    <span className="text-[10px] font-mono text-gray-400 block mb-0.5 group-hover:text-nebula-cyan transition-colors">{skill.level}</span>
                    <span className="text-xs font-semibold text-white">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Goals & Focus Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <motion.div
              whileHover={{ y: -4, borderColor: 'rgba(127, 0, 255, 0.4)' }}
              className="p-8 rounded-2xl glass-panel relative overflow-hidden border border-space-border/80 shadow-2xl transition-all duration-300"
            >
              {/* Radial gradient background */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-nebula-purple/10 to-nebula-pink/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-nebula-cyan font-bold">💼 ACTIVE EXPERIENCE</span>
                  <h3 className="text-2xl font-outfit font-bold text-white mt-0.5">Industry & Focus</h3>
                </div>
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-tr from-nebula-purple to-nebula-pink flex items-center justify-center shadow-lg shadow-nebula-purple/30"
                >
                  <Shield className="text-white" size={22} />
                </motion.div>
              </div>

              <p className="text-gray-300 font-light mb-6 text-xs leading-relaxed">
                Currently gaining hands-on software development experience at Indori Coders (since July 2026), building robust user-facing applications and modern API integrations.
              </p>

              {/* Focus List Items */}
              <div className="space-y-3">
                {focusAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 6, backgroundColor: 'rgba(255, 255, 255, 0.04)' }}
                    className="flex gap-3.5 p-3 rounded-xl border border-transparent hover:border-space-border/60 transition-all duration-200 cursor-default"
                  >
                    <div className="mt-0.5 p-2 rounded-lg bg-space-dark/80 border border-space-border/60">{area.icon}</div>
                    <div>
                      <h4 className="text-xs font-semibold text-white flex items-center gap-1">
                        <span>{area.title}</span>
                        <ArrowUpRight size={12} className="text-gray-500 opacity-0 group-hover:opacity-100" />
                      </h4>
                      <p className="text-[11px] text-gray-400 mt-0.5 leading-relaxed font-light">{area.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
