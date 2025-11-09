const colors = {
  bg: '#FEF9E1',
  secondary: '#E5D0AC',
  accent: '#A31D1D',
  dark: '#6D2323',
};

export default function Footer() {
  return (
    <footer className="pt-16" style={{ backgroundColor: colors.dark, color: colors.bg }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold">TekGridAI</h4>
            <p className="mt-3 text-sm opacity-90">
              AI-driven supply chain visibility and optimization.
            </p>
          </div>
          <div>
            <h5 className="text-sm font-semibold opacity-90">Company</h5>
            <ul className="mt-3 space-y-2 text-sm opacity-90">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#pricing" className="hover:underline">Pricing</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold opacity-90">Legal</h5>
            <ul className="mt-3 space-y-2 text-sm opacity-90">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Security</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold opacity-90">Follow</h5>
            <div className="mt-3 flex items-center gap-3 opacity-90">
              <a href="#" aria-label="Twitter" className="hover:opacity-100 opacity-80">Tw</a>
              <a href="#" aria-label="LinkedIn" className="hover:opacity-100 opacity-80">In</a>
              <a href="#" aria-label="GitHub" className="hover:opacity-100 opacity-80">Gh</a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm opacity-80">
          © TekGridAI 2025
        </div>
      </div>
    </footer>
  );
}
