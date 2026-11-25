import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-32 text-center page-enter">
      <h1 className="text-6xl font-heading font-bold text-text-muted mb-4">404</h1>
      <p className="text-lg text-text-secondary mb-8">
        This page doesn't exist. Maybe it was a typo?
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-hover transition-colors btn-hover"
      >
        Back to home
      </Link>
    </div>
  );
}
