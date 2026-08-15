import { motion } from 'framer-motion';
import { Award, ShieldAlert, Terminal, Briefcase, ShieldCheck, Lock } from 'lucide-react';

export default function Achievements() {
  const events = [
    {
      year: 'July 2026 – Present',
      title: 'Indori Coders',
      role: 'Software Development Intern',
      tag: 'INDUSTRY EXPERIENCE',
      desc: 'Developing full-stack web applications, engineering responsive React frontend systems, integrating backend REST APIs, and contributing to production team workflows.',
      icon: <Briefcase className="text-cyan-400" size={24} />,
      borderColor: 'border-cyan-500/40',
      badgeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40',
      glow: 'shadow-[0_0_25px_rgba(0,242,254,0.25)]',
      delay: 0.05
    },
    {
      year: '2026',
      title: 'Safe Click 2.0 Hackathon',
      role: 'Hackathon Competitor',
      tag: 'CYBER SAFETY & SECURITY',
      desc: 'Engineered digital safety prototypes focused on threat mitigation, intuitive threat visualization, and secure web interaction flows to protect users from malicious online activity.',
      icon: <Lock className="text-blue-400" size={24} />,
      borderColor: 'border-blue-500/30',
      badgeColor: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
      glow: 'shadow-[0_0_20px_rgba(59,130,246,0.15)]',
      delay: 0.15
    },
    {
      year: '2026',
      title: 'CPL Bhopal Hackathon',
      role: 'Hackathon Developer',
      tag: 'CODING PREMIER LEAGUE',
      desc: 'Competed in high-intensity problem solving, developing rapid software solutions, secure API integrations, and collaborative full-stack modules within strict competition deadlines.',
      icon: <ShieldCheck className="text-emerald-400" size={24} />,
      borderColor: 'border-emerald-500/30',
      badgeColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      glow: 'shadow-[0_0_20px_rgba(16,185,129,0.15)]',
      delay: 0.25
    },
    {
      year: '2026',
      title: 'OpenClaw HackIndia Hackathon',
      role: 'Hackathon Competitor',
      tag: 'AI & PRODUCT INNOVATION',
      desc: 'Designed and built NutricartAI—an intelligent companion that parses grocery receipt facts and checks diet preferences in real-time.',
      icon: <ShieldAlert className="text-rose-400" size={24} />,
      borderColor: 'border-rose-500/30',
      badgeColor: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
      glow: 'shadow-[0_0_20px_rgba(244,63,94,0.15)]',
      delay: 0.35
    },
    {
      year: '2025',
      title: 'Smart India Hackathon (SIH 2025)',
      role: 'Frontend Developer',
      tag: 'NATIONAL HACKATHON',
      desc: 'Engineered clean, interactive dashboard interfaces for real-time resource tracking and geo-allocation grids during the SIH national qualifiers.',
      icon: <Award className="text-purple-400" size={24} />,
      borderColor: 'border-purple-500/30',
      badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
      glow: 'shadow-[0_0_20px_rgba(127,0,255,0.15)]',
      delay: 0.45
    }
  ];

  return (
    <section id="achievements" className="relative py-24 bg-transparent border-t border-space-border/30">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
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
            <span>milestones.timeline()</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-outfit font-extrabold mb-4">
            Milestones &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-cyan via-nebula-blue to-nebula-purple">
              Honors
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-nebula-cyan to-nebula-purple mx-auto rounded-full" />
          <p className="text-gray-400 font-light mt-4 max-w-xl mx-auto text-sm">
            Competitive hackathon participation and technological leadership summits.
          </p>
        </motion.div>

        {/* Timeline Sequence */}
        <div className="relative border-l-2 border-space-border/80 max-w-3xl mx-auto pl-6 md:pl-10 space-y-10">
          {events.map((event) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: event.delay }}
              className="relative group"
            >
              {/* Timeline Indicator Pin */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className={`absolute -left-[35px] md:-left-[51px] top-4 w-7 h-7 rounded-full bg-space-dark border border-space-border/90 flex items-center justify-center shadow-xl ${event.glow}`}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-nebula-cyan to-nebula-blue animate-ping" />
              </motion.div>

              {/* Card Details */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="p-6 md:p-7 rounded-2xl glass-panel border border-space-border/80 hover:border-nebula-cyan/40 shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3.5">
                    <motion.div
                      whileHover={{ rotate: 12 }}
                      className="p-3 rounded-xl bg-space-dark border border-space-border/80 shadow-md"
                    >
                      {event.icon}
                    </motion.div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-nebula-cyan font-bold tracking-widest">{event.year}</span>
                        <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${event.badgeColor}`}>
                          {event.tag}
                        </span>
                      </div>
                      <h3 className="text-xl font-outfit font-bold text-white leading-tight mt-0.5">{event.title}</h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full border border-space-border/80 bg-space-dark/80 text-gray-300 self-start md:self-center">
                    {event.role}
                  </span>
                </div>

                <p className="text-sm text-gray-400 font-light leading-relaxed pl-1">
                  {event.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
