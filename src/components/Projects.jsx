import { motion } from 'framer-motion';
import { Globe, Brain, Terminal, ExternalLink, Code2, Truck, Activity, Rocket } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'SoftAppix',
      category: 'Software Agency & Digital Solutions Platform',
      badge: 'STARTUP & AGENCY',
      problem: 'Modern businesses require high-performance custom web applications, bespoke digital architectures, and conversion-focused UI/UX design.',
      solution: 'Full-stack software development agency platform delivering scalable web engineering, custom client software systems, and modern digital experiences.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'Netlify'],
      icon: <Rocket className="text-cyan-400" size={24} />,
      gradient: 'from-cyan-500/15 via-blue-500/5 to-transparent',
      borderColor: 'group-hover:border-cyan-500/50',
      glow: 'hover:shadow-[0_0_35px_rgba(0,242,254,0.25)]',
      github: 'https://github.com/aashu2252/Softappix',
      demo: 'https://softappix.netlify.app',
      highlight: 'Live digital agency platform offering custom software engineering.',
    },
    {
      title: 'TransitOps Fleet ERP',
      category: 'Vehicle & Transport Logistics ERP',
      badge: 'LOGISTICS & ERP',
      problem: 'Inefficient fleet dispatch, uncoordinated driver trip allocation, maintenance backlog, and lack of granular expense auditing.',
      solution: 'End-to-end transport ERP with RBAC super-admin controls, live trip logging, fuel logs, driver dispatch, and maintenance analytics.',
      tech: ['React + Vite', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Recharts'],
      icon: <Truck className="text-emerald-400" size={24} />,
      gradient: 'from-emerald-500/15 via-teal-500/5 to-transparent',
      borderColor: 'group-hover:border-emerald-500/50',
      glow: 'hover:shadow-[0_0_35px_rgba(16,185,129,0.2)]',
      github: 'https://github.com/aashu2252/Team-Null-Void-Odoo',
      demo: null,
      highlight: 'Engineered full-stack fleet ERP with role-based access & Swagger docs.',
    },
    {
      title: 'Sanjivani Sync',
      category: 'Healthcare Coordination Network',
      badge: 'HEALTH-TECH PLATFORM',
      problem: 'Severe coordination bottlenecks in emergency medical resource allocation, donor-seeker linkage, and cross-platform health comms.',
      solution: 'Real-time multi-platform healthcare coordination system featuring responsive web & mobile clients, OpenAPI-backed REST APIs, and Google OAuth.',
      tech: ['React 19', 'Node.js', 'Express', 'JWT Auth', 'OpenAPI/Swagger', 'Tailwind'],
      icon: <Activity className="text-rose-400" size={24} />,
      gradient: 'from-rose-500/15 via-orange-500/5 to-transparent',
      borderColor: 'group-hover:border-rose-500/50',
      glow: 'hover:shadow-[0_0_35px_rgba(244,63,94,0.2)]',
      github: 'https://github.com/GautamPatidar2004/Sanjivani-Sync',
      demo: null,
      highlight: 'Multi-platform system with Swagger API documentation & mobile integration.',
    },
    {
      title: 'NutriCart AI',
      category: 'Algorithmic Nutrition & Budget Planner',
      badge: 'GEMINI AI & NLP',
      problem: 'Consumers struggle to balance strict grocery budgets with personalized macro/calorie targets while minimizing household food waste.',
      solution: 'Intelligent grocery planner leveraging knapsack optimization algorithms, Gemini AI bill scanning, zero-waste recipes, and dynamic KNN swaps.',
      tech: ['Python', 'Flask', 'Google Gemini AI', 'Knapsack Algorithm', 'JavaScript'],
      icon: <Brain className="text-purple-400" size={24} />,
      gradient: 'from-purple-500/15 via-pink-500/5 to-transparent',
      borderColor: 'group-hover:border-purple-500/50',
      glow: 'hover:shadow-[0_0_35px_rgba(127,0,255,0.2)]',
      github: 'https://github.com/HackIndiaXYZ/openclaw-hackathon-hackindia-null-void',
      demo: null,
      highlight: 'Built for OpenClaw HackIndia with Knapsack & Gemini Vision AI.',
    }
  ];

  return (
    <section id="projects" className="relative py-24 bg-transparent border-t border-space-border/30">
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
            <span>projects.deploy()</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-outfit font-extrabold mb-4">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-cyan via-nebula-blue to-nebula-purple">
              Creations
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-nebula-cyan to-nebula-blue mx-auto rounded-full" />
          <p className="text-gray-400 font-light mt-4 max-w-2xl mx-auto text-sm">
            Engineered with a focus on clean architectures, intuitive user experiences, and real-world utility.
          </p>
        </motion.div>

        {/* Projects Grid (2x2 Balanced Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ 
                scale: 1.02,
                y: -8,
              }}
              className={`p-7 rounded-2xl glass-panel relative overflow-hidden border border-space-border/80 shadow-2xl transition-all duration-300 group flex flex-col justify-between ${project.glow} ${project.borderColor}`}
            >
              {/* Radial gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} pointer-events-none`} />

              <div>
                {/* Category badge & icon */}
                <div className="flex items-center justify-between mb-5 relative z-10">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-nebula-cyan uppercase px-2.5 py-1 rounded-md bg-space-dark/80 border border-space-border/60">
                    {project.badge}
                  </span>
                  <motion.div
                    whileHover={{ rotate: 12 }}
                    className="p-2.5 rounded-xl bg-space-dark border border-space-border/80 shadow-md"
                  >
                    {project.icon}
                  </motion.div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-outfit font-bold text-white mb-2 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nebula-cyan transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-gray-400 mb-5 relative z-10">{project.category}</p>

                {/* Problem, Solution, and Impact Breakdown */}
                <div className="space-y-3.5 mb-6 relative z-10 text-xs leading-relaxed bg-space-dark/50 p-4 rounded-xl border border-space-border/60">
                  <div>
                    <span className="text-[9px] font-mono uppercase font-bold text-gray-400 block tracking-wider">// Problem</span>
                    <p className="text-gray-300 font-light mt-0.5">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase font-bold text-nebula-cyan block tracking-wider">// Solution</span>
                    <p className="text-gray-300 font-light mt-0.5">{project.solution}</p>
                  </div>
                  <div className="pt-1 border-t border-space-border/40">
                    <span className="text-[9px] font-mono uppercase font-bold text-nebula-purple block tracking-wider">// Impact</span>
                    <p className="text-gray-200 font-medium italic mt-0.5">{project.highlight}</p>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6 relative z-10">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-space-dark border border-space-border/70 text-gray-300 group-hover:border-space-border transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-space-border/50 relative z-10">
                {project.demo ? (
                  <div className="grid grid-cols-2 gap-3">
                    <motion.a
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View Source code for ${project.title}`}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-space-border/80 bg-space-dark/70 text-xs font-mono text-gray-300 hover:text-white hover:border-gray-500/50 transition-all duration-200 cursor-pointer"
                    >
                      <Code2 size={14} />
                      <span>Source</span>
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Launch Live Demo of ${project.title}`}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-nebula-cyan to-nebula-blue text-space-black font-bold text-xs font-mono transition-all duration-200 cursor-pointer shadow-[0_0_15px_rgba(0,242,254,0.2)] hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] shimmer-sweep"
                    >
                      <Globe size={14} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                ) : (
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View Source code for ${project.title}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-space-border/80 bg-space-dark/80 text-xs font-mono text-gray-300 hover:text-white hover:border-nebula-cyan/50 hover:shadow-[0_0_15px_rgba(0,242,254,0.15)] transition-all duration-200 cursor-pointer"
                  >
                    <Code2 size={14} className="text-nebula-cyan" />
                    <span>View Repository on GitHub</span>
                    <ExternalLink size={12} className="text-gray-500" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
