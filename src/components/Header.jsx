import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, FileText, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { dark, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-bg-alt/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-text-primary font-heading font-bold text-lg hover:text-accent transition-colors"
        >
          Aashutosh<span className="text-text-muted font-normal">.dev</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `nav-link px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-accent bg-accent-subtle active'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-code'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div className="w-px h-6 bg-border mx-2" />

          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-code transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href="/Resume.pdf"
            download="Aashutosh_Kumar_Singh_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-accent border border-accent/30 hover:bg-accent-subtle transition-colors btn-hover"
          >
            <FileText size={14} />
            Resume
          </a>
        </nav>

        {/* Mobile right */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggle}
            className="p-2 text-text-muted hover:text-text-primary rounded-lg hover:bg-bg-code transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-text-secondary hover:text-text-primary rounded-lg hover:bg-bg-code transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-bg-alt px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-accent bg-accent-subtle'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-code'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="/Resume.pdf"
            download="Aashutosh_Kumar_Singh_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-sm font-medium text-accent hover:bg-accent-subtle transition-colors"
          >
            <FileText size={14} />
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
