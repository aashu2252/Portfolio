import { motion } from 'framer-motion';
import { Layers, Server, Cpu, BookOpen } from 'lucide-react';

export default function SkillsMatrix() {
  const categories = [
    {
      title: 'Frontend Development',
      icon: <Layers className="text-nebula-cyan" size={20} />,
      skills: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Framer Motion']
    },
    {
      title: 'Backend & Databases',
      icon: <Server className="text-nebula-blue" size={20} />,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Firebase', 'RESTful APIs']
    },
    {
      title: 'Tools & APIs',
      icon: <Cpu className="text-nebula-purple" size={20} />,
      skills: ['Git & GitHub', 'Gemini API', 'Google Maps API', 'Python (NLP)', 'Vercel / Netlify', 'Postman']
    }
  ];

  return (
    <section id="skills" className="relative py-24 bg-transparent border-t border-space-border/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-outfit font-extrabold mb-4">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-cyan to-nebula-blue">
              Capabilities
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-nebula-cyan to-nebula-blue mx-auto rounded-full" />
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl glass-panel border border-space-border/85 shadow-lg hover:shadow-[0_0_25px_rgba(0,242,254,0.08)] hover:border-nebula-cyan/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-space-dark border border-space-border/80">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-outfit font-bold text-white">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3.5 py-2 rounded-lg bg-space-dark/60 border border-space-border/60 text-gray-300 hover:text-white hover:border-nebula-cyan/30 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto p-6 rounded-2xl glass-panel border border-space-border relative overflow-hidden group hover:border-nebula-purple/30 transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-nebula-purple/5 to-nebula-pink/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
            <div className="p-3.5 rounded-2xl bg-space-dark border border-space-border/80 text-nebula-purple animate-pulse">
              <BookOpen size={24} />
            </div>
            <div className="text-center sm:text-left">
              <span className="text-[10px] uppercase tracking-wider text-nebula-cyan font-bold">Continuous Growth</span>
              <h4 className="text-base font-outfit font-bold text-white mt-0.5">Currently Learning & Exploring</h4>
              <p className="text-xs text-gray-400 mt-1 font-light leading-relaxed">
                Deepening knowledge in **TypeScript**, exploring **Next.js (App Router)** frontend optimizations, and understanding basic **System Design** principles for writing scalable enterprise microservices.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
