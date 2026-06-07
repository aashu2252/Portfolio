import { motion } from 'framer-motion';
import { GitBranch, Star, Terminal } from 'lucide-react';

export default function GithubActivity() {
  // Generate simulated contribution data: 18 columns (weeks) x 7 rows (days)
  // Value represents code contribution level: 0 (none), 1 (light), 2 (medium), 3 (heavy)
  const columnsCount = 20;
  const rowsCount = 7;
  
  // Seed a reproducible visual pattern
  const gridData = Array.from({ length: columnsCount }, (_, colIdx) => {
    return Array.from({ length: rowsCount }, (_, rowIdx) => {
      // Create a nice looking high-density pattern
      const factor = (colIdx * rowIdx + colIdx) % 7;
      if (factor === 0) return 0;
      if (factor < 3) return 1;
      if (factor < 6) return 2;
      return 3;
    });
  });

  const stats = [
    { label: 'Total Contributions', value: '1,432+', icon: <Terminal size={16} className="text-nebula-cyan" /> },
    { label: 'Active Repositories', value: '14', icon: <GitBranch size={16} className="text-nebula-blue" /> },
    { label: 'Starred Projects', value: '8', icon: <Star size={16} className="text-nebula-purple" /> }
  ];

  const getColorClass = (val) => {
    switch (val) {
      case 1: return 'bg-nebula-cyan/20 border border-nebula-cyan/10';
      case 2: return 'bg-nebula-cyan/50 border border-nebula-cyan/20';
      case 3: return 'bg-nebula-cyan border border-nebula-cyan/35 shadow-[0_0_8px_rgba(0,242,254,0.4)]';
      default: return 'bg-space-dark border border-space-border/40';
    }
  };

  return (
    <div className="mt-16 max-w-4xl mx-auto px-6 relative z-10">
      <div className="p-8 rounded-2xl glass-panel border border-space-border/80 shadow-2xl relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-gradient-to-tr from-nebula-cyan/5 to-transparent rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Stats Column */}
          <div className="w-full lg:w-1/3 space-y-4">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-nebula-cyan font-bold">Open Source Status</span>
              <h3 className="text-2xl font-outfit font-bold text-white mt-0.5">Coding Consistency</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-3 pt-2">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 p-3 rounded-xl bg-space-dark/50 border border-space-border/50">
                  <div className="p-2 rounded-lg bg-space-dark border border-space-border/60">
                    {stat.icon}
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 block leading-tight">{stat.label}</span>
                    <span className="text-base font-semibold text-white leading-none">{stat.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grid Column */}
          <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-end">
            <div className="mb-4 text-center lg:text-right">
              <span className="text-xs text-gray-400 font-light">GitHub Contribution Activity (Simulated)</span>
            </div>

            {/* Heat Map Grid */}
            <div className="flex gap-1 bg-space-dark/30 p-4 rounded-xl border border-space-border/60 overflow-x-auto max-w-full">
              {gridData.map((col, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-1">
                  {col.map((val, rowIdx) => (
                    <motion.div
                      key={rowIdx}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (colIdx * 7 + rowIdx) * 0.005 }}
                      whileHover={{ scale: 1.25, zIndex: 20 }}
                      className={`w-3.5 h-3.5 rounded-sm transition-all duration-200 cursor-pointer ${getColorClass(val)}`}
                      title={`Activity Level: ${val}`}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-4 text-[10px] text-gray-500 font-light mr-2">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded-sm bg-space-dark border border-space-border/40" />
              <div className="w-2.5 h-2.5 rounded-sm bg-nebula-cyan/20 border border-nebula-cyan/10" />
              <div className="w-2.5 h-2.5 rounded-sm bg-nebula-cyan/50 border border-nebula-cyan/20" />
              <div className="w-2.5 h-2.5 rounded-sm bg-nebula-cyan border border-nebula-cyan/35" />
              <span>More</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
