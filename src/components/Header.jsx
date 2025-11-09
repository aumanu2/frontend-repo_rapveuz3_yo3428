import { useEffect, useState } from 'react';

const colors = {
  bg: '#FEF9E1',
  secondary: '#E5D0AC',
  accent: '#A31D1D',
  dark: '#6D2323',
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
      style={{ backgroundColor: scrolled ? colors.bg : 'transparent' }}
      aria-label="Main Navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold tracking-wide" style={{ color: colors.dark }}>
            TekGridAI
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm" aria-label="Primary">
            {[
              ['Home', '#home'],
              ['Features', '#features'],
              ['Pricing', '#pricing'],
              ['About', '#about'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a key={label} href={href} className="hover:opacity-80 transition-opacity" style={{ color: colors.dark }}>
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="rounded-md px-4 py-2 text-sm font-medium transition-colors"
              style={{ backgroundColor: colors.accent, color: colors.bg }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.dark)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
