import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, CheckCircle2, Terminal } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000); // hide success after 5s
    }, 1500);
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/aashu2252', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg> },
    { name: 'LinkedIn', url: 'https://linkedin.com/aashu2252', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg> },
    { name: 'Email', url: 'mailto:aashutoshkumarsingh33@gmail.com', icon: <Mail size={20} /> },
  ];

  return (
    <section id="contact" className="relative py-24 bg-transparent border-t border-space-border/30">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-outfit font-extrabold mb-4">
            Connect in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-cyan to-nebula-purple">
              Orbit
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-nebula-cyan to-nebula-purple mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-outfit font-bold text-white">Let's build something exceptional.</h3>
            <p className="text-gray-400 font-light leading-relaxed text-sm">
              Whether you are looking to hire a software engineering intern, collaborate on a full-stack project, or just want to discuss web architectures, feel free to send a message.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2.5 rounded-xl bg-space-dark border border-space-border/60 text-nebula-cyan">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 block">Direct Wave</span>
                  <a href="mailto:aashutoshkumarsingh33@gmail.com" className="text-sm font-semibold hover:text-nebula-cyan transition-colors">
                    aashutoshkumarsingh33@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl glass-panel border border-space-border relative">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-space-dark/50 border border-space-border/80 rounded-xl px-4 py-3 text-white text-sm focus-glow transition-all duration-300 placeholder-transparent peer"
                        placeholder="Your Name"
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-4 top-3 text-xs text-gray-500 transition-all duration-300 pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:top-3.5 peer-focus:top-1 peer-focus:text-xs peer-focus:text-nebula-cyan"
                        style={{
                          transform: formData.name ? 'translateY(-10px) scale(0.85)' : '',
                          transformOrigin: 'top left'
                        }}
                      >
                        Your Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-space-dark/50 border border-space-border/80 rounded-xl px-4 py-3 text-white text-sm focus-glow transition-all duration-300 placeholder-transparent peer"
                        placeholder="Your Email"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-4 top-3 text-xs text-gray-500 transition-all duration-300 pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:top-3.5 peer-focus:top-1 peer-focus:text-xs peer-focus:text-nebula-cyan"
                        style={{
                          transform: formData.email ? 'translateY(-10px) scale(0.85)' : '',
                          transformOrigin: 'top left'
                        }}
                      >
                        Your Email
                      </label>
                    </div>

                    <div className="relative">
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-space-dark/50 border border-space-border/80 rounded-xl px-4 py-3 text-white text-sm focus-glow transition-all duration-300 placeholder-transparent peer resize-none"
                        placeholder="Your Message"
                      />
                      <label
                        htmlFor="message"
                        className="absolute left-4 top-3 text-xs text-gray-500 transition-all duration-300 pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:top-3.5 peer-focus:top-1 peer-focus:text-xs peer-focus:text-nebula-cyan"
                        style={{
                          transform: formData.message ? 'translateY(-10px) scale(0.85)' : '',
                          transformOrigin: 'top left'
                        }}
                      >
                        Your Message
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-nebula-cyan to-nebula-blue text-space-black font-semibold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-nebula-cyan/20 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all duration-300 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-space-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle2 size={48} className="text-nebula-cyan mb-4 animate-bounce" />
                    <h4 className="text-xl font-outfit font-bold text-white mb-2">Message Received!</h4>
                    <p className="text-sm text-gray-400 font-light max-w-sm">
                      Your transmission has cleared the gravity well. I will respond to your coordinates shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-space-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2 text-white font-outfit font-bold text-lg">
            <div className="p-1 rounded-lg bg-gradient-to-tr from-nebula-purple to-nebula-cyan text-white shadow-md">
              <Terminal size={14} />
            </div>
            <span>
              Aashu<span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-cyan to-nebula-blue font-light">.dev</span>
            </span>
          </div>

          <p className="text-xs text-gray-500 font-light">
            © {new Date().getFullYear()} Aashutosh Kumar Singh. Defying gravity since 2025.
          </p>

          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-space-dark border border-space-border hover:border-nebula-cyan/50 hover:text-nebula-cyan hover:shadow-[0_0_10px_rgba(0,242,254,0.2)] transition-all duration-300 text-gray-400"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
