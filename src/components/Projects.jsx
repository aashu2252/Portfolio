import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Brain, ShoppingBag } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'RaktSetu',
      category: 'Hyperlocal Healthcare',
      problem: 'Critical delays in matching blood donors with patients/hospitals during medical emergencies in specific neighborhoods.',
      solution: 'Designed a real-time hyperlocal grid system linking donors and seekers using interactive map layers and live availability updates.',
      tech: ['React', 'Firebase', 'Google Maps API', 'Tailwind CSS'],
      icon: <MapPin className="text-red-400" size={24} />,
      gradient: 'from-red-500/10 to-orange-500/10',
      border: 'group-hover:border-red-500/30',
      glow: 'shadow-red-500/5',
      floatClass: 'animate-float-slow',
      github: '#',
      demo: '#',
    },
    {
      title: 'IndoreVyapar-AI',
      category: 'Localized B2B Commerce',
      problem: 'Local B2B merchants in Indore struggle to predict supply requirements and optimize distribution channels.',
      solution: 'Developed a commercial inventory system with B2B analytics and custom data layer models mapping local demand patterns.',
      tech: ['React', 'Node.js', 'Express', 'Tailwind', 'MongoDB'],
      icon: <ShoppingBag className="text-emerald-400" size={24} />,
      gradient: 'from-emerald-500/10 to-teal-500/10',
      border: 'group-hover:border-emerald-500/30',
      glow: 'shadow-emerald-500/5',
      floatClass: 'animate-float-fast',
      github: '#',
      demo: '#',
    },
    {
      title: 'NutricartAI',
      category: 'AI Diet & Nutrition Assistant',
      problem: 'Consumers struggle to identify allergen alerts and analyze nutritional items when scanning grocery products.',
      solution: 'Built an intelligent receipt companion utilizing the Gemini API to scan grocery receipts, analyze ingredients, and flag health alerts.',
      tech: ['React.js', 'Gemini API', 'Tailwind CSS', 'Node.js'],
      icon: <Brain className="text-cyan-400" size={24} />,
      gradient: 'from-cyan-500/10 to-blue-500/10',
      border: 'group-hover:border-cyan-500/30',
      glow: 'shadow-cyan-500/5',
      floatClass: 'animate-float-medium',
      github: '#',
      demo: '#',
    }
  ];

  return (
    <section id="projects" className="relative py-24 bg-transparent border-t border-space-border/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-outfit font-extrabold mb-4">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-cyan to-nebula-blue">
              Creations
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-nebula-cyan to-nebula-blue mx-auto rounded-full" />
          <p className="text-gray-400 font-light mt-4 max-w-2xl mx-auto text-sm">
            Hover over the projects to interact with their floating animations. Each card floats at an independent velocity.
          </p>
        </div>

        {/* Projects Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                y: -15,
                rotateY: 2,
                rotateX: -2,
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className={`p-6 rounded-2xl glass-panel relative overflow-hidden border border-space-border shadow-lg ${project.glow} hover:shadow-[0_0_30px_rgba(0,242,254,0.1)] transition-all duration-300 group ${project.floatClass}`}
            >
              {/* Radial gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 pointer-events-none`} />

              {/* Title Section */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-nebula-cyan">
                  {project.category}
                </span>
                <div className="p-2 rounded-xl bg-space-dark border border-space-border/85">
                  {project.icon}
                </div>
              </div>

              <h3 className="text-2xl font-outfit font-bold text-white mb-3 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nebula-cyan transition-all duration-300">
                {project.title}
              </h3>

              {/* Problem / Solution Structure */}
              <div className="space-y-3 mb-6 h-40 overflow-y-auto relative z-10 text-[11px] leading-relaxed">
                <div>
                  <span className="text-[9px] uppercase font-bold text-gray-500 block tracking-wider">Problem</span>
                  <p className="text-gray-300 font-light">{project.problem}</p>
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold text-nebula-cyan block tracking-wider">Solution</span>
                  <p className="text-gray-300 font-light">{project.solution}</p>
                </div>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-semibold px-2.5 py-1 rounded-md bg-space-dark border border-space-border/80 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-space-border/50 relative z-10">
                <a
                  href={project.github}
                  className="flex items-center space-x-1.5 text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  <span>Repository</span>
                </a>
                <a
                  href={project.demo}
                  className="flex items-center space-x-1 text-xs text-nebula-cyan hover:text-white transition-colors font-semibold cursor-pointer"
                >
                  <span>Launch App</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
