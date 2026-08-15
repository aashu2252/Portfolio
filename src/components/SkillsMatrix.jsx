import { motion } from 'framer-motion';
import { Layers, Server, Cpu, BookOpen, Terminal } from 'lucide-react';

export default function SkillsMatrix() {
  const categories = [
    {
      title: 'Frontend Engineering',
      tag: 'UI & CLIENT',
      icon: <Layers className="text-nebula-cyan" size={22} />,
      color: 'border-nebula-cyan/30 group-hover:border-nebula-cyan/60 group-hover:shadow-[0_0_25px_rgba(0,242,254,0.15)]',
      skills: ['React 19', 'Vite', 'Tailwind CSS v4', 'JavaScript (ES6+)', 'HTML5 & Modern CSS3', 'Framer Motion']
    },
    {
      title: 'Backend & APIs',
      tag: 'SERVER & DATA',
      icon: <Server className="text-nebula-blue" size={22} />,
      color: 'border-nebula-blue/30 group-hover:border-nebula-blue/60 group-hover:shadow-[0_0_25px_rgba(79,172,254,0.15)]',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB', 'Firebase', 'Authentication']
    },
    {
      title: 'Tools & Ecosystem',
      tag: 'DEVOPS & ML',
      icon: <Cpu className="text-nebula-purple" size={22} />,
      color: 'border-nebula-purple/30 group-hover:border-nebula-purple/60 group-hover:shadow-[0_0_25px_rgba(127,0,255,0.15)]',
      skills: ['Git & GitHub', 'Google Maps API', 'Python (NLP)', 'Vercel & Netlify', 'Postman', 'Linux / Bash']
    }
  ];

  return (
    <section id="skills" className="relative py-24 bg-transparent border-t border-space-border/30">
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
            <span>skills.matrix()</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-outfit font-extrabold mb-4">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-cyan via-nebula-blue to-nebula-purple">
              Arsenal
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-nebula-cyan to-nebula-blue mx-auto rounded-full" />
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`p-7 rounded-2xl glass-panel border ${cat.color} shadow-2xl transition-all duration-300 group relative overflow-hidden flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-gray-400 font-bold uppercase">{cat.tag}</span>
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    className="p-2.5 rounded-xl bg-space-dark border border-space-border/80 shadow-md"
                  >
                    {cat.icon}
                  </motion.div>
                </div>

                <h3 className="text-xl font-outfit font-bold text-white mb-5">{cat.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="text-xs px-3.5 py-1.5 rounded-lg bg-space-dark/80 border border-space-border/70 text-gray-300 hover:text-white hover:border-nebula-cyan/50 hover:shadow-[0_0_12px_rgba(0,242,254,0.2)] transition-all duration-200 cursor-default font-mono"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-space-border/40 flex items-center justify-between text-[11px] font-mono text-gray-500">
                <span>// verified</span>
                <span className="text-cyber-emerald flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-emerald animate-ping" />
                  active
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Focus Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ borderColor: 'rgba(127, 0, 255, 0.4)' }}
          className="max-w-4xl mx-auto p-6 rounded-2xl glass-panel border border-space-border relative overflow-hidden group shadow-2xl transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-nebula-purple/10 to-nebula-pink/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center gap-5 relative z-10">
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="p-4 rounded-2xl bg-space-dark border border-nebula-purple/40 text-nebula-purple shadow-[0_0_15px_rgba(127,0,255,0.25)]"
              >
                <BookOpen size={24} />
              </motion.div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nebula-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-nebula-purple"></span>
              </span>
            </div>

            <div className="text-center sm:text-left flex-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-nebula-cyan font-bold">CONTINUOUS UPSKILLING</span>
              <h4 className="text-base font-outfit font-bold text-white mt-0.5">Currently Deepening & Exploring</h4>
              <p className="text-xs text-gray-400 mt-1 font-light leading-relaxed">
                Advancing in <span className="text-nebula-cyan font-semibold">TypeScript</span> strict type-safety, mastering <span className="text-nebula-blue font-semibold">Next.js (App Router & SSR)</span>, and learning fundamental <span className="text-nebula-purple font-semibold">System Design</span> principles for distributed architectures.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
