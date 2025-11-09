import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const colors = {
  bg: '#FEF9E1',
  secondary: '#E5D0AC',
  accent: '#A31D1D',
  dark: '#6D2323',
};

export default function Hero() {
  return (
    <section id="home" className="relative isolate" style={{ background: `linear-gradient(180deg, ${colors.bg} 0%, ${colors.secondary} 100%)` }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(254,249,225,0.9) 0%, rgba(229,208,172,0.85) 100%)' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight" style={{ color: colors.dark, fontFamily: 'Grenze, serif' }}>
              Visualize and Optimize Supply Chains with AI
            </h1>
            <p className="mt-6 text-lg leading-8 max-w-2xl" style={{ color: colors.dark }}>
              Interactive grid modeling to identify risks and predict disruptions in real time.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#features"
                className="rounded-md px-6 py-3 text-sm font-medium"
                style={{ backgroundColor: colors.accent, color: colors.bg }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.dark)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}
              >
                View Dashboard
              </a>
              <a
                href="#contact"
                className="rounded-md px-6 py-3 text-sm font-medium border"
                style={{ borderColor: colors.accent, color: colors.accent }}
              >
                Request Demo
              </a>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="rounded-xl shadow-lg bg-white/60 backdrop-blur p-6">
              <div className="aspect-[4/3] w-full rounded-lg bg-white grid place-items-center text-center">
                <span className="text-sm" style={{ color: colors.dark }}>
                  Interactive 3D grid background powered by Spline.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
