import { useState } from 'react';
import { Mail, Send, Copy, Check } from 'lucide-react';
import { Reveal } from '../components/Reveal';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = 'aashutoshkumarsingh33@gmail.com';

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setIsError(false);

    try {
      const response = await fetch('https://formspree.io/f/xnqyjypa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSuccess(false), 6000);
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 page-enter">
      <Reveal>
        <h1 className="text-3xl font-heading font-bold mb-3">Get in touch</h1>
        <p className="text-text-secondary mb-10 max-w-lg">
          Whether you're looking for an intern, want to collaborate on a project,
          or just want to say hi — I'd love to hear from you.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Info */}
        <div className="md:col-span-4 space-y-5">
          <Reveal delay={100}>
            {/* Email card */}
            <div className="card-hover p-4 rounded-xl border border-border bg-bg-alt">
              <div className="flex items-center gap-2 mb-2">
                <Mail size={16} className="text-text-muted" />
                <span className="text-sm font-medium text-text-primary">Email</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${email}`}
                  className="text-sm text-accent hover:underline truncate"
                >
                  {email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-md text-text-muted hover:text-text-primary hover:bg-bg-code transition-colors shrink-0"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                </button>
              </div>
              {copied && (
                <p className="text-xs text-green-600 mt-1.5">Copied to clipboard</p>
              )}
            </div>
          </Reveal>

          <Reveal delay={180}>
            {/* Links */}
            <div className="card-hover p-4 rounded-xl border border-border bg-bg-alt space-y-3">
              <a href="https://github.com/aashu2252" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                github.com/aashu2252
              </a>
              <a href="https://linkedin.com/in/aashu2252" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                linkedin.com/in/aashu2252
              </a>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="p-4 rounded-xl bg-accent-subtle border border-accent/20">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-500 status-dot" />
                <span className="text-sm font-medium text-text-primary">Open to opportunities</span>
              </div>
              <p className="text-sm text-text-secondary">
                Currently looking for internship roles and freelance collaboration.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal className="md:col-span-8" delay={150}>
          <div className="p-6 rounded-xl border border-border bg-bg-alt card-hover">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all placeholder:text-text-muted"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all placeholder:text-text-muted"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all placeholder:text-text-muted resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                {isError && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-hover disabled:opacity-50 transition-colors btn-hover"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send message
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                  <Check size={24} className="text-green-600" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-text-primary mb-1">
                  Message sent!
                </h3>
                <p className="text-sm text-text-secondary">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
