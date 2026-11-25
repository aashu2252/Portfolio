import { ExternalLink } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const freelanceProjects = [
  {
    title: 'Alacrity Enterprises',
    badge: 'Client Work',
    description: 'Built a conversion-focused B2B wholesale and export showcase website featuring a responsive product catalog grid, category tabs, and direct lead capture workflows.',
    problem: 'The client needed a scalable global B2B web presence to showcase industrial tapes, electrical components, and mechanical supplies and convert international inquiries.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    github: null,
    demo: 'https://alacrityenterprises.com',
    highlight: 'Live production client site — drove ↑ 300% lead increase & ↓ 80% bounce rate.',
  },
  {
    title: 'Global Tech Industries',
    badge: 'Client Work',
    description: 'Developed a responsive B2B industrial service and catalog portal highlighting technical maintenance operations, product lines, and direct quote-request channels.',
    problem: 'Establishing a modern digital portal to organize multi-category industrial offerings, support services, and improve organic search visibility.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    github: null,
    demo: 'https://globaltechinds.com',
    highlight: 'Live production client site — reached Top 3 SEO ranking & ↑ 200% organic traffic.',
  },
];

const engineeringProjects = [
  {
    title: 'Hostfluencer',
    badge: 'Internship',
    description: 'Built the cross-platform React Native & Expo mobile marketplace in TypeScript — featuring host/creator onboarding, discovery feeds, campaign applications, content briefs, in-app chat, push notifications, deliverable uploads, media kits, and analytics/subscription screens.',
    problem: 'Hospitality providers needed a streamlined way to trade open property stays for curated travel creator UGC without agency friction or complex manual coordination.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Axios', 'REST APIs'],
    github: null,
    demo: null,
    statusLabel: 'Private',
    featured: true,
    highlight: 'Developed during Software Development Internship at Indori Coders (Jul–Oct 2026).',
  },
  {
    title: 'TransitOps Fleet ERP',
    badge: 'Odoo Hackathon 2026',
    description: 'End-to-end transport ERP with RBAC super-admin controls, live trip logging, fuel logs, driver dispatch, and maintenance analytics.',
    problem: 'Transport companies relied on spreadsheets for fleet management — leading to uncoordinated driver allocation, missed maintenance, and no audit trail.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Recharts'],
    github: 'https://github.com/aashu2252/Team-Null-Void-Odoo',
    demo: null,
    featured: true,
    highlight: 'Built full-stack (UI & APIs) for Odoo Hackathon 2026 — complete RBAC fleet ERP with Swagger docs.',
  },
  {
    title: 'Indian Railways AI-Powered Automatic Block Planning System',
    description: 'Real-time railway operations dashboard built with TypeScript, Redux Toolkit, dhtmlx-gantt, and Socket.IO featuring linear track schematics, AI schedule conflict resolution, and RBAC approval workflows.',
    problem: 'Coordinating railway maintenance block windows across legacy operational systems (TMS, SMMS, TDMS, COA, BDMS) without delaying scheduled train movements.',
    tech: ['React 19', 'TypeScript', 'Redux Toolkit', 'dhtmlx-gantt', 'Socket.IO', 'Tailwind CSS'],
    github: 'https://github.com/aashu2252/rail-dashboard',
    demo: null,
    badge: 'SIH 2026',
    featured: false,
    highlight: 'Built for Smart India Hackathon (SIH 2026) — interactive Gantt scheduling, track schematics & real-time telemetry.',
  },
  {
    title: 'Sanjivani Sync',
    badge: 'CPL Bhopal Finalist',
    description: 'Real-time multi-platform healthcare coordination system featuring responsive web and mobile clients, OpenAPI-backed REST APIs, and Google OAuth.',
    problem: 'Emergency medical responders had no centralized system to coordinate blood donors, hospital beds, and ambulance dispatch across cities.',
    tech: ['React 19', 'Node.js', 'Express', 'JWT Auth', 'OpenAPI/Swagger', 'Tailwind'],
    github: 'https://github.com/GautamPatidar2004/Sanjivani-Sync',
    demo: null,
    featured: false,
    highlight: 'Finalist project built full-stack at CPL Bhopal Hackathon — multi-platform system with Swagger API docs.',
  },
];

function ProjectCard({ project, index, className = '' }) {
  const badgeText = project.badge || (project.featured ? 'Featured' : null);

  return (
    <Reveal delay={index * 100} className={className}>
      <div className="card-hover group h-full p-6 rounded-xl border border-border bg-bg-alt hover:border-border-hover flex flex-col justify-between">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div>
              {badgeText && (
                <span className="inline-block text-xs font-medium text-accent bg-accent-subtle px-2 py-0.5 rounded mb-2">
                  {badgeText}
                </span>
              )}
              <h3 className="text-lg font-heading font-semibold text-text-primary group-hover:text-accent transition-colors">
                {project.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0 mt-1">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-code transition-colors"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              ) : !project.demo && (
                <span className="text-xs px-2 py-1 rounded-md bg-bg-code border border-border text-text-muted">
                  {project.statusLabel || 'Private repo'}
                </span>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-accent bg-accent-subtle hover:bg-accent hover:text-white transition-colors"
                  aria-label={`Live site for ${project.title}`}
                >
                  <span>Visit</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>

          {/* Problem → Solution */}
          <div className="space-y-2.5 py-3 px-4 rounded-lg bg-bg-code/50 border border-border/60">
            <div>
              <span className="text-xs font-medium text-text-muted uppercase tracking-wider">Problem</span>
              <p className="text-sm text-text-secondary leading-relaxed mt-0.5">{project.problem}</p>
            </div>
            <div className="border-t border-border/60 pt-2.5">
              <span className="text-xs font-medium text-accent uppercase tracking-wider">Solution</span>
              <p className="text-sm text-text-secondary leading-relaxed mt-0.5">{project.description}</p>
            </div>
          </div>

          {/* Impact highlight */}
          {project.highlight && (
            <p className="text-sm text-text-primary font-medium italic border-l-2 border-accent pl-3">
              {project.highlight}
            </p>
          )}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 pt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="tech-tag text-xs px-2.5 py-1 rounded-md bg-bg-code border border-border text-text-muted font-mono cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 page-enter">
      <Reveal>
        <div className="mb-12">
          <h1 className="text-3xl font-heading font-bold mb-3">Projects</h1>
          <p className="text-text-secondary max-w-xl">
            Client websites delivered as a solo freelancer alongside full-stack and
            mobile engineering projects.
          </p>
        </div>
      </Reveal>

      {/* Freelance Projects */}
      <Reveal>
        <h2 className="text-lg font-heading font-semibold mb-4 text-text-secondary">
          Freelance projects
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        {freelanceProjects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* Internship & Engineering Projects */}
      <Reveal>
        <h2 className="text-lg font-heading font-semibold mb-4 text-text-secondary">
          Internship &amp; engineering projects
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {engineeringProjects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i + 2}
          />
        ))}
      </div>
    </div>
  );
}
