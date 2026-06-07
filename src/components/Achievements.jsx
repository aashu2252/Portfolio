import { motion } from 'framer-motion';
import { Award, Zap, ShieldAlert } from 'lucide-react';
import GithubActivity from './GithubActivity';

export default function Achievements() {
  const events = [
    {
      year: '2025',
      title: 'Smart India Hackathon (SIH 2025)',
      role: 'Frontend Developer',
      desc: 'Engineered clean, interactive dashboard interfaces for resource tracking and geo-allocation grids during the SIH national qualifiers.',
      icon: <Award className="text-purple-400" size={24} />,
      color: 'border-purple-500/30 text-purple-400',
      glow: 'shadow-purple-500/5',
      delay: 0.1
    },
    {
      year: '2025',
      title: 'OpenClaw HackIndia Hackathon',
      role: 'Hackathon Competitor',
      desc: 'Designed and built NutricartAI—an intelligent companion that parses grocery receipt facts and checks diet preferences in real-time.',
      icon: <ShieldAlert className="text-rose-400" size={24} />,
      color: 'border-rose-500/30 text-rose-400',
      glow: 'shadow-rose-500/5',
      delay: 0.2
    },
    {
      year: '2025',
      title: 'BECon, IIT Delhi',
      role: 'Golden Pass Attendant',
      desc: 'Attended the prestigious business and entrepreneurship summit at IIT Delhi, connecting with national startup founders and investors.',
      icon: <Zap className="text-cyan-400" size={24} />,
      color: 'border-cyan-500/30 text-cyan-400',
      glow: 'shadow-cyan-500/5',
      delay: 0.3
    }
  ];

  return (
    <section id="achievements" className="relative py-24 bg-transparent border-t border-space-border/30">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-outfit font-extrabold mb-4">
            Milestones &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-cyan to-nebula-purple">
              Honors
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-nebula-cyan to-nebula-purple mx-auto rounded-full" />
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-space-border/60 max-w-4xl mx-auto pl-6 md:pl-10 space-y-12">
          {events.map((event) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: event.delay }}
              className="relative"
            >
              {/* Floating Timeline Bullet */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`absolute -left-[39px] md:-left-[55px] top-1.5 w-7 h-7 rounded-full bg-space-dark border border-space-border/80 flex items-center justify-center shadow-lg ${event.glow}`}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-nebula-cyan to-nebula-blue animate-pulse" />
              </motion.div>

              {/* Event Content Container */}
              <div className="p-6 rounded-2xl glass-panel border border-space-border hover:border-nebula-cyan/20 hover:shadow-[0_0_20px_rgba(0,242,254,0.05)] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-space-dark border border-space-border/60">
                      {event.icon}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-nebula-cyan font-bold tracking-widest">{event.year}</span>
                      <h3 className="text-xl font-outfit font-bold text-white leading-tight">{event.title}</h3>
                    </div>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full border border-space-border bg-space-dark text-gray-400 self-start md:self-center">
                    {event.role}
                  </span>
                </div>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {event.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Activity Card */}
        <GithubActivity />
      </div>
    </section>
  );
}
