import { motion } from 'framer-motion';

const colors = {
  bg: '#FEF9E1',
  secondary: '#E5D0AC',
  accent: '#A31D1D',
  dark: '#6D2323',
};

export default function About() {
  return (
    <section id="about" className="py-24" style={{ backgroundColor: colors.secondary }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/3] w-full rounded-xl bg-white/70 backdrop-blur grid place-items-center">
              <span className="text-sm" style={{ color: colors.dark }}>Illustration / Team Photo</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: colors.dark, fontFamily: 'Grenze, serif' }}>
              Our mission
            </h2>
            <p className="mt-4 text-base" style={{ color: colors.dark }}>
              We help enterprises build resilient supply chains powered by explainable AI. Our
              platform blends predictive analytics with human-centered design to drive faster,
              smarter decisions.
            </p>
            <blockquote className="mt-6 italic p-4 rounded-md border-l-4" style={{ borderColor: colors.accent, color: colors.dark, fontFamily: 'Grenze, serif' }}>
              "Data without clarity is noise. We turn it into action."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
