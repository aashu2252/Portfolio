import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import heroImg from '../assets/hero.png';

const skills = [
  'React', 'React Native', 'TypeScript', 'Expo', 'Node.js',
  'JavaScript', 'Tailwind CSS', 'Express.js', 'MongoDB',
  'Python', 'REST APIs', 'Git', 'Firebase',
];

const focusAreas = [
  {
    title: 'Full-Stack & Mobile Development',
    description: 'Building React web apps and React Native (Expo) mobile applications backed by Node.js REST APIs and databases.',
  },
  {
    title: 'UI/UX Engineering',
    description: 'Crafting clean, accessible, and responsive interfaces with real attention to design detail.',
  },
  {
    title: 'Problem Solving',
    description: 'Data structures, algorithms, and integrating ML models into practical applications.',
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 page-enter">

      {/* =================== HERO =================== */}
      <section className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          {/* Text */}
          <div className="md:col-span-7 space-y-5">
            {/* Status badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-subtle text-accent text-sm font-medium">
                <Briefcase size={13} />
                <span>Ex-Intern @ Indori Coders</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 status-dot" />
                <span>Freelance Full-Stack Developer</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-heading font-bold leading-[1.15] text-text-primary">
              I build full-stack systems
              <br />
              <span className="text-text-secondary">that solve real problems.</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
              Third-year CS student from Indore, India. Previously a Software Development Intern at
              {' '}<span className="text-text-primary font-medium">Indori Coders</span> (building the Hostfluencer mobile app),
              now delivering client products as a solo freelancer. I design and build web and mobile
              applications — from database to pixel.
            </p>

            <div className="flex items-center gap-2 text-sm text-text-muted">
              <MapPin size={14} />
              <span>Indore, Madhya Pradesh, India</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-hover transition-colors btn-hover"
              >
                View my work
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-text-primary font-medium text-sm hover:bg-bg-code transition-colors btn-hover"
              >
                Get in touch
              </Link>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 pt-1">
              <a href="https://github.com/aashu2252" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors" aria-label="GitHub">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/aashu2252" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-border shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:border-border-hover">
                <img
                  src={heroImg}
                  alt="Aashutosh Kumar Singh"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Subtle accent glow behind photo */}
              <div className="absolute -inset-1 bg-accent/5 rounded-2xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* =================== ABOUT =================== */}
      <section className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* About text */}
          <div className="md:col-span-7 space-y-5">
            <Reveal>
              <h2 className="text-2xl font-heading font-semibold">About me</h2>
            </Reveal>

            <Reveal delay={80}>
              <p className="text-text-secondary leading-relaxed">
                I'm the kind of developer who gets excited about clean database schemas
                and pixel-perfect hover states in equal measure. I love building things
                end-to-end — from designing the API contracts to polishing the last
                animation curve on the frontend.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="text-text-secondary leading-relaxed">
                Outside of code, I've competed in 5 hackathons (2nd rank at OpenClaw, 2× finalist, SIH 2026),
                work with clients as a solo freelancer, and am constantly learning — currently diving
                deep into TypeScript, React Native, and system design.
              </p>
            </Reveal>

            {/* Skills */}
            <Reveal delay={240}>
              <div className="pt-4">
                <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-3">
                  Technologies I work with
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="tech-tag px-3 py-1.5 rounded-md bg-bg-code border border-border text-sm text-text-secondary cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Focus areas */}
          <div className="md:col-span-5 space-y-4">
            <Reveal>
              <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-1">
                What I focus on
              </h3>
            </Reveal>
            {focusAreas.map((area, i) => (
              <Reveal key={area.title} delay={80 + i * 80}>
                <div className="card-hover p-4 rounded-xl border border-border bg-bg-alt hover:border-border-hover cursor-default">
                  <h4 className="font-medium text-text-primary mb-1">{area.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{area.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
