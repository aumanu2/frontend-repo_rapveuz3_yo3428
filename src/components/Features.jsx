import { motion } from 'framer-motion';
import { Rocket, Shield, BarChart3, Cpu } from 'lucide-react';

const colors = {
  bg: '#FEF9E1',
  secondary: '#E5D0AC',
  accent: '#A31D1D',
  dark: '#6D2323',
};

const features = [
  {
    title: 'Predictive Analytics',
    icon: BarChart3,
    desc: 'Forecast lead times, demand spikes, and disruptions with confidence using AI-powered models.',
  },
  {
    title: 'Resilience Scoring',
    icon: Shield,
    desc: 'Continuously monitor supplier risk and assign resilience scores across your network.',
  },
  {
    title: 'Optimization Engine',
    icon: Cpu,
    desc: 'Run what-if simulations to optimize routes, inventory buffers, and fulfillment SLAs.',
  },
  {
    title: 'Rapid Deployment',
    icon: Rocket,
    desc: 'Secure, SOC2-ready deployment with SSO and role-based permissions out of the box.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20" style={{ backgroundColor: colors.bg }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: colors.accent, fontFamily: 'Grenze, serif' }}>
            Built for complex, global operations
          </h2>
          <p className="mt-4 text-base" style={{ color: colors.dark }}>
            Modular capabilities to analyze, simulate, and act in real time.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="rounded-xl bg-white/70 backdrop-blur border border-[rgba(0,0,0,0.06)] shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <f.icon className="h-8 w-8" color={colors.accent} />
              <h3 className="mt-4 text-xl font-semibold" style={{ color: colors.accent, fontFamily: 'Grenze, serif' }}>
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-6" style={{ color: colors.dark }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
