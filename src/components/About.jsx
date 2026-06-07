import { motion } from 'framer-motion';
import { Shield, MapPin, Code, Globe, Activity } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'React.js', level: 'Advanced', color: 'from-blue-400 to-cyan-500' },
    { name: 'Node.js', level: 'Intermediate', color: 'from-green-400 to-emerald-500' },
    { name: 'Tailwind CSS', level: 'Advanced', color: 'from-cyan-400 to-teal-500' },
    { name: 'JavaScript (ES6+)', level: 'Advanced', color: 'from-yellow-400 to-amber-500' },
    { name: 'Firebase', level: 'Intermediate', color: 'from-orange-400 to-amber-600' },
    { name: 'MongoDB & SQL', level: 'Intermediate', color: 'from-green-500 to-emerald-700' },
    { name: 'Python & NLP', level: 'Intermediate', color: 'from-blue-500 to-indigo-600' },
    { name: 'TypeScript', level: 'Advanced', color: 'from-purple-400 to-pink-500' },
  ];

  const focusAreas = [
    {
      icon: <Code className="text-nebula-cyan" size={24} />,
      title: 'Full-Stack Integration',
      desc: 'Building responsive React interfaces backed by secure, relational, and real-time backend pipelines.'
    },
    {
      icon: <Globe className="text-nebula-blue" size={24} />,
      title: 'Fidelity UI/UX Systems',
      desc: 'Crafting responsive, clean animations and accessible layout panels with high visual style.'
    },
    {
      icon: <Activity className="text-nebula-purple" size={24} />,
      title: 'Algorithms & NLP',
      desc: 'Integrating machine learning models and structuring data pipelines for specialized local applications.'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-transparent border-t border-space-border/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-outfit font-extrabold mb-4">
            Defying the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-cyan to-nebula-purple">
              Status Quo
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-nebula-cyan to-nebula-purple mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-outfit font-semibold text-white flex items-center gap-2">
              <MapPin size={22} className="text-nebula-cyan animate-pulse" />
              Based in Indore, India
            </h3>
            
            <p className="text-gray-300 leading-relaxed text-lg font-light">
              As a <span className="text-white font-semibold">Second Year Undergraduate Software Developer</span> based in Indore, India, I specialize in creating full-stack web architectures and responsive interfaces. I focus on developing clean, interactive applications that solve real-world problems.
            </p>

            <p className="text-gray-400 leading-relaxed font-light">
              I love building high-performance web apps, designing databases, and participating in hackathons. My primary goal is to secure a software engineering internship where I can collaborate with developer teams, contribute to active codebases, and write clean, maintainable logic.
            </p>

            {/* Tech Stack Grid */}
            <div className="pt-6">
              <h4 className="text-lg font-outfit font-semibold text-gray-200 mb-4 flex items-center gap-2">
                <Activity size={18} className="text-nebula-purple" />
                Core Developer Tech Stack
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="p-3 rounded-xl glass-panel border border-space-border/60 text-center hover:border-nebula-cyan/30 transition-all duration-300 group"
                  >
                    <span className="text-xs text-gray-400 block mb-1 group-hover:text-nebula-cyan transition-colors">{skill.level}</span>
                    <span className="text-sm font-semibold text-white">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Goals showcase card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="p-8 rounded-2xl glass-panel relative overflow-hidden border border-space-border/80 shadow-2xl shadow-black/40 group hover:border-nebula-purple/30 transition-all duration-300 animate-float-medium">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-nebula-purple/10 to-nebula-pink/10 rounded-full blur-3xl pointer-events-none group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-nebula-cyan font-bold">Objectives</span>
                  <h3 className="text-3xl font-outfit font-bold text-white mt-1">Internship Goals</h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-nebula-purple to-nebula-pink flex items-center justify-center shadow-lg shadow-nebula-purple/20">
                  <Shield className="text-white" size={24} />
                </div>
              </div>

              <p className="text-gray-300 font-light mb-8 text-sm leading-relaxed">
                I want to leverage my foundational full-stack knowledge and programmatic problem-solving skills inside a professional development workflow, learning best practices while adding direct product value.
              </p>

              {/* Focus list */}
              <div className="space-y-4">
                {focusAreas.map((area, index) => (
                  <div key={index} className="flex gap-4 p-3 rounded-xl hover:bg-space-darker/50 transition-colors">
                    <div className="mt-1">{area.icon}</div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{area.title}</h4>
                      <p className="text-xs text-gray-400 mt-0.5 leading-relaxed font-light">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
