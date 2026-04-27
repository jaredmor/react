import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-dvh" style={{ backgroundColor: '#050505' }}>
      <Hero />
      <Gallery />
      <Features />
      <Footer />
    </div>
  );
}
