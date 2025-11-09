import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const colors = {
  bg: '#FEF9E1',
  secondary: '#E5D0AC',
  accent: '#A31D1D',
  dark: '#6D2323',
};

export default function App() {
  return (
    <div style={{ backgroundColor: colors.bg }}>
      <Helmet>
        <html lang="en" />
        <title>TekGridAI — AI Supply Chain Visibility</title>
        <meta name="description" content="Visualize and optimize your global supply chain with AI. Predict disruptions, simulate scenarios, and act with confidence." />
        <meta property="og:title" content="TekGridAI — AI Supply Chain Visibility" />
        <meta property="og:description" content="Visualize and optimize your global supply chain with AI." />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content={colors.bg} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Grenze:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <a href="#home" className="sr-only">Skip to content</a>

      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
