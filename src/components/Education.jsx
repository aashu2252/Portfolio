import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Star } from 'lucide-react';

export default function Education() {
  const courses = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Computer Networks',
    'Operating Systems'
  ];

  return (
    <section id="education" className="relative py-24 bg-transparent border-t border-space-border/30">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-outfit font-extrabold mb-4">
            Academic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-cyan to-nebula-blue">
              Foundation
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-nebula-cyan to-nebula-blue mx-auto rounded-full" />
        </div>

        {/* Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">

          {/* Degree Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 rounded-2xl glass-panel border border-space-border/80 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-space-dark border border-space-border/80 text-nebula-cyan">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-nebula-cyan font-bold">Degree Program</span>
                  <h3 className="text-2xl font-outfit font-bold text-white mt-0.5">Bachelor of Technology</h3>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">Computer Science & Engineering</h4>
                  <p className="text-sm text-gray-400 mt-1 font-light">Information Technology</p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 pt-2">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-space-dark border border-space-border/60 text-nebula-cyan font-semibold">
                    <span>Second-Year Student</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-space-dark border border-space-border/60">
                    <Calendar size={14} className="text-nebula-blue" />
                    <span>Expected Graduation: 2028</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-space-dark border border-space-border/60">
                    <Star size={14} className="text-amber-400" />
                    <span>GPA: 7.86/10</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 font-light mt-8 border-t border-space-border/40 pt-4">
              Focusing on algorithms, database management, and building secure full-stack applications.
            </p>
          </motion.div>

          {/* Coursework Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 rounded-2xl glass-panel border border-space-border/80 shadow-xl flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-space-dark border border-space-border/80 text-nebula-blue">
                <BookOpen size={24} />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-nebula-blue font-bold">Curriculum</span>
                <h3 className="text-xl font-outfit font-bold text-white mt-0.5">Relevant Coursework</h3>
              </div>
            </div>

            <p className="text-xs text-gray-400 font-light mb-6">
              Key academic subjects studied during the first two years of the Computer Science program:
            </p>

            <div className="flex flex-wrap gap-2.5 my-auto">
              {courses.map((course) => (
                <span
                  key={course}
                  className="text-xs px-3.5 py-2 rounded-xl bg-space-dark/60 border border-space-border/60 text-gray-300 hover:text-white hover:border-nebula-blue/30 transition-colors duration-200"
                >
                  {course}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
