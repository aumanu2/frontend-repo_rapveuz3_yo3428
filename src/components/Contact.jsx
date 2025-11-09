import { useState } from 'react';
import { motion } from 'framer-motion';

const colors = {
  bg: '#FEF9E1',
  secondary: '#E5D0AC',
  accent: '#A31D1D',
  dark: '#6D2323',
};

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We will reach out shortly.');
    (e.target).reset();
  };

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: colors.bg }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: colors.accent, fontFamily: 'Grenze, serif' }}>
              Get in touch
            </h2>
            <p className="mt-4 text-base" style={{ color: colors.dark }}>
              Have questions about TekGridAI? Send us a message and our team will get back to you within 1 business day.
            </p>
            <div className="mt-6 text-sm" style={{ color: colors.dark }}>
              <p>Email: hello@tekgrid.ai</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </motion.div>
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl bg-white/70 backdrop-blur p-6 shadow-sm"
          >
            <div className="grid grid-cols-1 gap-4">
              <label className="text-sm" style={{ color: colors.dark }}>
                Name
                <input type="text" name="name" required className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2" style={{ borderColor: colors.secondary }} aria-label="Name" />
              </label>
              <label className="text-sm" style={{ color: colors.dark }}>
                Email
                <input type="email" name="email" required className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2" style={{ borderColor: colors.secondary }} aria-label="Email" />
              </label>
              <label className="text-sm" style={{ color: colors.dark }}>
                Message
                <textarea name="message" rows={4} required className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2" style={{ borderColor: colors.secondary }} aria-label="Message" />
              </label>
            </div>
            <button type="submit" className="mt-4 rounded-md px-4 py-2 text-sm font-medium" style={{ backgroundColor: colors.accent, color: colors.bg }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.dark)} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}>
              Submit
            </button>
            {status && (
              <p className="mt-3 text-sm" style={{ color: colors.dark }}>{status}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
