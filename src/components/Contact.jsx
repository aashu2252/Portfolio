import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, CheckCircle2, Terminal, Copy, Check, Code2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Copy email to clipboard with temporary feedback toast
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('aashutoshkumarsingh33@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Form submission via Formspree API
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setIsError(false);

    try {
      const response = await fetch('https://formspree.io/f/xnqyjypa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSuccess(false), 6000);
      } else {
        throw new Error('Form submission failed.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/aashu2252', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/aashu2252', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg> },
    { name: 'Email', url: 'mailto:aashutoshkumarsingh33@gmail.com', icon: <Mail size={16} /> },
  ];

  return (
    <section id="contact" className="relative py-24 bg-transparent border-t border-space-border/30">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

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
            <span>contact.transmit()</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-outfit font-extrabold mb-4">
            Initialize{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-cyan via-nebula-blue to-nebula-purple">
              Connection
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-nebula-cyan to-nebula-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-2xl font-outfit font-bold text-white">Let's build something exceptional.</h3>
            <p className="text-gray-400 font-light leading-relaxed text-sm">
              Whether you are looking to hire a software engineering intern, collaborate on full-stack web architectures, or discuss system designs, I'm always open to connecting.
            </p>

            <div className="space-y-4 pt-2">
              {/* Copyable Email Box */}
              <div className="p-4 rounded-2xl glass-panel border border-space-border/80 shadow-lg">
                <span className="text-[10px] font-mono text-gray-500 uppercase block mb-1">Direct Transmission</span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-mono text-white truncate">
                    aashutoshkumarsingh33@gmail.com
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-space-dark border border-space-border/80 text-gray-300 hover:text-nebula-cyan hover:border-nebula-cyan/50 transition-colors cursor-pointer"
                    aria-label="Copy Email to Clipboard"
                  >
                    {copied ? <Check size={14} className="text-cyber-emerald" /> : <Copy size={14} />}
                  </motion.button>
                </div>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[10px] font-mono text-cyber-emerald block mt-1.5"
                  >
                    ✓ Copied to clipboard!
                  </motion.span>
                )}
              </div>

              {/* Status Badge */}
              <div className="p-4 rounded-2xl glass-panel border border-space-border/80 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyber-emerald"></span>
                </span>
                <div className="text-xs font-mono text-gray-300">
                  <span>Status: </span>
                  <span className="text-cyber-emerald font-semibold">Software Developer Intern @ Indori Coders</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="p-8 rounded-2xl glass-panel border border-space-border/90 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-gray-400 mb-1.5">
                        // Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-space-dark/80 border border-space-border/80 rounded-xl px-4 py-3 text-white text-sm focus-glow transition-all duration-300 placeholder-gray-600 font-mono"
                        placeholder="e.g. John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-gray-400 mb-1.5">
                        // Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-space-dark/80 border border-space-border/80 rounded-xl px-4 py-3 text-white text-sm focus-glow transition-all duration-300 placeholder-gray-600 font-mono"
                        placeholder="e.g. john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-mono text-gray-400 mb-1.5">
                        // Transmission Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-space-dark/80 border border-space-border/80 rounded-xl px-4 py-3 text-white text-sm focus-glow transition-all duration-300 placeholder-gray-600 font-mono resize-none"
                        placeholder="Let's discuss an internship role or web project..."
                      />
                    </div>

                    {isError && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-mono text-rose-400 text-center"
                      >
                        Transmission error. Please try again or email directly.
                      </motion.p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label="Send message via contact form"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-nebula-cyan to-nebula-blue text-space-black font-bold text-sm font-mono flex items-center justify-center space-x-2 shadow-lg shadow-nebula-cyan/25 hover:shadow-[0_0_25px_rgba(0,242,254,0.45)] disabled:opacity-50 transition-all duration-300 cursor-pointer shimmer-sweep"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-space-black border-t-transparent rounded-full animate-spin" />
                          <span>Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send size={15} />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle2 size={48} className="text-cyber-emerald mb-4 animate-bounce" />
                    <h4 className="text-xl font-outfit font-bold text-white mb-2">Message Transmitted!</h4>
                    <p className="text-sm font-mono text-gray-400 max-w-sm">
                      Thank you for reaching out. I have received your message and will respond shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Global Footer */}
        <div className="mt-24 pt-8 border-t border-space-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2 text-white font-outfit font-bold text-lg">
            <div className="p-1.5 rounded-lg bg-gradient-to-tr from-nebula-purple to-nebula-cyan text-white shadow-md">
              <Code2 size={15} />
            </div>
            <span>
              Aashu<span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-cyan to-nebula-blue font-light">.dev</span>
            </span>
          </div>

          <p className="text-xs font-mono text-gray-500">
            © {new Date().getFullYear()} Aashutosh Kumar Singh. Designed for high performance.
          </p>

          <div className="flex items-center space-x-3">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-space-dark border border-space-border hover:border-nebula-cyan/50 hover:text-nebula-cyan hover:shadow-[0_0_12px_rgba(0,242,254,0.3)] transition-all duration-300 text-gray-400"
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
