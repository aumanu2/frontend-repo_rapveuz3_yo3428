import { motion } from 'framer-motion';

const colors = {
  bg: '#FEF9E1',
  secondary: '#E5D0AC',
  accent: '#A31D1D',
  dark: '#6D2323',
};

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    desc: 'For teams exploring AI-driven visibility',
    features: ['Up to 3 users', 'Basic dashboards', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$79',
    desc: 'For growing orgs needing optimization',
    features: ['Up to 20 users', 'Scenario modeling', 'Priority support'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'For global, complex operations',
    features: ['Unlimited users', 'Custom integrations', 'Dedicated CSM'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24" style={{ backgroundColor: colors.bg }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: colors.accent, fontFamily: 'Grenze, serif' }}>
            Transparent pricing for every stage
          </h2>
          <p className="mt-4 text-base" style={{ color: colors.dark }}>
            Start free. Scale as your network grows.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className={`rounded-2xl p-6 border transition-colors ${
                t.featured ? 'bg-white' : 'bg-white/70 backdrop-blur'
              }`}
              style={{ borderColor: colors.secondary }}
            >
              <h3 className="text-xl font-semibold" style={{ color: colors.accent, fontFamily: 'Grenze, serif' }}>{t.name}</h3>
              <p className="mt-2 text-3xl font-bold" style={{ color: colors.dark }}>{t.price}
                <span className="align-baseline text-sm font-normal" style={{ color: colors.dark }}>{t.price === 'Custom' ? '' : '/mo'}</span>
              </p>
              <p className="mt-2 text-sm" style={{ color: colors.dark }}>{t.desc}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2" style={{ color: colors.dark }}>
                    <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: colors.accent }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  t.featured ? '' : ''
                }`}
                style={{ backgroundColor: colors.accent, color: colors.bg }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.dark)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}
              >
                Start Free Trial
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
