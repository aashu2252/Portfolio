import { Reveal } from '../components/Reveal';

const experience = [
  {
    period: 'July 2026 — Oct 31, 2026',
    title: 'Software Development Intern',
    company: 'Indori Coders',
    current: false,
    bullets: [
      'Developed the Hostfluencer mobile app using React Native, Expo, and TypeScript to connect hospitality hosts with travel creators',
      'Built role-based authentication and onboarding flows for Hosts and Creators alongside the marketplace discovery feed and campaign listings',
      'Implemented creator application and content brief workflows, in-app chat/messaging, and push notifications',
      'Engineered deliverable upload flows, creator media kits, and subscription/analytics screens backed by Axios and REST APIs',
    ],
  },
];

const hackathons = [
  {
    year: '2026',
    title: 'Smart India Hackathon (SIH 2026)',
    description: 'Built the operations dashboard for an AI-powered Indian Railways automatic block planning system featuring Gantt scheduling, linear track schematics, and live telemetry sync.',
  },
  {
    year: '2026',
    title: 'Odoo Hackathon 2026',
    description: 'Owned full-stack development (React UI & Express/MongoDB APIs) for TransitOps Fleet ERP — featuring RBAC controls, live trip/fuel logs, maintenance tracking, and Swagger docs.',
  },
  {
    year: '2026',
    title: 'CPL Bhopal Hackathon',
    outcome: 'Finalist',
    description: 'Built Sanjivani Sync full-stack — a multi-platform healthcare coordination system with React 19, Express, JWT Auth, and OpenAPI/Swagger documentation.',
  },
  {
    year: '2026',
    title: 'Safe Click 2.0 Hackathon',
    outcome: 'Finalist',
    description: 'Engineered digital safety prototypes focused on threat mitigation and secure web interaction flows.',
  },
  {
    year: '2026',
    title: 'OpenClaw HackIndia',
    outcome: '2nd Rank',
    description: 'Built NutriCart AI — an intelligent grocery planner with Gemini Vision AI and knapsack optimization.',
  },
];

const education = {
  degree: 'Bachelor of Technology — Computer Science & Engineering',
  specialization: 'Information Technology',
  year: 'Third Year · Expected Graduation: 2028',
  gpa: 'CGPA: 7.52 / 10',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Computer Networks',
    'Operating Systems',
    'Web Technologies',
  ],
};

const currentlyLearning = [
  'TypeScript strict type-safety',
  'React Native',
  'System Design fundamentals',
];

export default function Experience() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 page-enter">
      <Reveal>
        <h1 className="text-3xl font-heading font-bold mb-10">Experience</h1>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Main column */}
        <div className="md:col-span-7 space-y-12">
          {/* Work experience */}
          <div>
            <Reveal>
              <h2 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-5">
                Work
              </h2>
            </Reveal>
            {experience.map((exp) => (
              <Reveal key={exp.title} delay={80}>
                <div className="relative pl-6 border-l-2 border-accent/30 pb-6">
                  <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-bg" />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <h3 className="font-heading font-semibold text-text-primary">{exp.title}</h3>
                    <span className="text-sm text-accent font-medium">{exp.company}</span>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1 text-xs text-green-600 dark:text-green-400 font-medium bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 status-dot" />
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-text-muted mb-3">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-text-muted shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Hackathons */}
          <div>
            <Reveal>
              <h2 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-5">
                Hackathons & Competitions
              </h2>
            </Reveal>
            <div className="space-y-3">
              {hackathons.map((hack, i) => (
                <Reveal key={hack.title} delay={i * 80}>
                  <div className="card-hover p-4 rounded-xl border border-border bg-bg-alt hover:border-border-hover">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-baseline gap-3">
                        <span className="text-sm text-text-muted font-mono shrink-0">{hack.year}</span>
                        <h3 className="font-medium text-text-primary">{hack.title}</h3>
                      </div>
                      {hack.outcome && (
                        <span className="text-xs font-medium text-accent bg-accent-subtle px-2 py-0.5 rounded-full">
                          {hack.outcome}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{hack.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-5 space-y-6">
          {/* Education */}
          <Reveal>
            <div className="card-hover p-5 rounded-xl border border-border bg-bg-alt">
              <h2 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-4">
                Education
              </h2>
              <h3 className="font-heading font-semibold text-text-primary mb-1 text-[15px] leading-snug">
                {education.degree}
              </h3>
              <p className="text-sm text-text-muted mb-1">{education.specialization}</p>
              <p className="text-sm text-text-muted mb-1">{education.year}</p>
              <p className="text-sm font-medium text-accent mb-4">{education.gpa}</p>

              <h4 className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2.5">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="tech-tag text-xs px-2.5 py-1 rounded-md bg-bg-code text-text-secondary border border-border cursor-default"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Currently learning */}
          <Reveal delay={100}>
            <div className="card-hover p-5 rounded-xl border border-border bg-bg-alt">
              <h2 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-3">
                Currently learning
              </h2>
              <ul className="space-y-2.5">
                {currentlyLearning.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Quick stat */}
          <Reveal delay={200}>
            <div className="card-hover p-5 rounded-xl border border-border bg-accent-subtle">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-heading font-bold text-accent">{hackathons.length}</span>
                <div>
                  <p className="text-sm font-medium text-text-primary">Hackathons competed</p>
                  <p className="text-xs text-text-muted">2nd Rank (OpenClaw) &middot; 2&times; Finalist &middot; SIH 2026</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
