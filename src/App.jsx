import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import Products from './components/Products';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-orange/30">
      <Navbar />
      <Hero />
      <main>
        <MarqueeBanner />
        <Products />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
