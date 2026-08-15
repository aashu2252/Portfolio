import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Star, Sparkles, Terminal } from 'lucide-react';

export default function Education() {
  const courses = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (OOP)',
    'Database Management Systems (DBMS)',
    'Computer Networks',
    'Operating Systems',
    'Web Technologies'
  ];

  return (
    <section id="education" className="relative py-24 bg-transparent border-t border-space-border/30">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

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
            <span>academics.fetch()</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-outfit font-extrabold mb-4">
            Academic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-cyan via-nebula-blue to-nebula-purple">
              Foundation
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-nebula-cyan to-nebula-blue mx-auto rounded-full" />
        </motion.div>

        {/* Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">

          {/* Degree Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -4, borderColor: 'rgba(0, 242, 254, 0.3)' }}
            className="lg:col-span-7 p-8 rounded-2xl glass-panel border border-space-border/80 shadow-2xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-nebula-cyan/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="p-3.5 rounded-2xl bg-space-dark border border-space-border/80 text-nebula-cyan shadow-lg shadow-nebula-cyan/10"
                >
                  <GraduationCap size={24} />
                </motion.div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-nebula-cyan font-bold">DEGREE PROGRAM</span>
                  <h3 className="text-2xl font-outfit font-bold text-white mt-0.5">Bachelor of Technology</h3>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">Computer Science & Engineering</h4>
                  <p className="text-xs text-gray-400 mt-1 font-mono">Specialization: Information Technology</p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 pt-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-space-dark border border-nebula-cyan/30 text-nebula-cyan font-mono text-xs font-semibold"
                  >
                    <span>Third-Year Student</span>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-space-dark border border-space-border/70 text-gray-300 font-mono text-xs"
                  >
                    <Calendar size={13} className="text-nebula-blue" />
                    <span>Graduation: 2028</span>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-space-dark border border-amber-500/30 text-amber-300 font-mono text-xs font-semibold shadow-[0_0_10px_rgba(245,158,11,0.1)]"
                  >
                    <Star size={13} className="text-amber-400" fill="currentColor" />
                    <span>CGPA: 7.52 / 10</span>
                  </motion.div>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-400 font-light mt-8 border-t border-space-border/40 pt-4 leading-relaxed">
              Focusing on algorithms, relational databases, backend architectures, and high-performance web systems.
            </p>
          </motion.div>

          {/* Key Coursework Card */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -4, borderColor: 'rgba(79, 172, 254, 0.3)' }}
            className="lg:col-span-5 p-8 rounded-2xl glass-panel border border-space-border/80 shadow-2xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-nebula-blue/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="p-3.5 rounded-2xl bg-space-dark border border-space-border/80 text-nebula-blue shadow-lg shadow-nebula-blue/10"
                >
                  <BookOpen size={24} />
                </motion.div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-nebula-blue font-bold">CURRICULUM</span>
                  <h3 className="text-xl font-outfit font-bold text-white mt-0.5">Relevant Coursework</h3>
                </div>
              </div>

              <p className="text-xs text-gray-400 font-light mb-5">
                Key academic computer science subjects studied across the degree program:
              </p>

              <div className="flex flex-wrap gap-2">
                {courses.map((course, idx) => (
                  <motion.span
                    key={course}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-xs px-3 py-1.5 rounded-lg bg-space-dark/80 border border-space-border/70 text-gray-300 hover:text-white hover:border-nebula-blue/50 hover:shadow-[0_0_12px_rgba(79,172,254,0.2)] transition-all duration-200 cursor-default"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono text-gray-500 mt-6 pt-3 border-t border-space-border/30">
              <Sparkles size={13} className="text-nebula-cyan" />
              <span>Continuously applying concepts in real projects</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
