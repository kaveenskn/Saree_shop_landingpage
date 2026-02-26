import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ChevronRight, Star, Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-orange to-brand-green rounded-lg flex items-center justify-center">
            <ShoppingBag className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight text-white">Saree <span className="text-brand-orange">Bazar</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['Collections', 'New Arrivals', 'Luxury Silk', 'About Us'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-white hover:text-brand-orange transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 active:scale-95">
            Shop Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-surface border-b border-white/10"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {['Collections', 'New Arrivals', 'Luxury Silk', 'About Us'].map((item) => (
                <a key={item} href="#" className="text-xl font-medium text-white" onClick={() => setIsMobileMenuOpen(false)}>
                  {item}
                </a>
              ))}
              <button className="bg-brand-green w-full py-4 rounded-xl font-bold text-white">
                Browse Catalog
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* True Parallax Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero.png')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/70 to-brand-dark/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1 bg-brand-green/20 border border-brand-green/30 rounded-full text-brand-green font-semibold text-sm mb-6">
            LATEST COLLECTION 2024
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight mb-6 text-white">
            Elegance in <br />
            <span className="text-brand-orange italic">Every Fold</span>
          </h1>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg">
            Experience the timeless beauty of traditional craftsmanship combined with modern aesthetics. Saree Bazar brings you the finest selection of luxury silks and designer weaves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-orange text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(255,140,0,0.4)] transition-all flex items-center justify-center space-x-2">
              <span>View Collection</span>
              <ChevronRight size={20} />
            </button>
            <button className="glass-card px-10 py-5 rounded-full font-bold text-lg hover:bg-white/5 transition-all text-white border border-white/20">
              Our Story
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Badge */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 hidden lg:block"
      >
        <div className="glass-card p-6 rounded-2xl flex items-center space-x-4">
          <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center shadow-lg">
            <Star className="text-white fill-current" />
          </div>
          <div>
            <p className="text-sm font-bold text-white">Premium Quality</p>
            <p className="text-xs text-brand-green">100% Authentic Fabric</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const ProductCard = ({ title, category, price, image, color }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="glass-card rounded-3xl overflow-hidden group cursor-pointer"
  >
    <div className="relative h-96 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute top-4 right-4 bg-brand-dark/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-orange border border-brand-orange/20">
        NEW
      </div>
    </div>
    <div className="p-8">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-brand-green font-bold uppercase tracking-wider mb-1">{category}</p>
          <h3 className="text-2xl font-serif font-bold text-white">{title}</h3>
        </div>
        <div className="text-2xl font-bold text-white">
          ₹{price}
        </div>
      </div>
      <button className={`w-full py-4 rounded-xl font-bold transition-all ${color === 'orange' ? 'bg-brand-orange hover:bg-orange-600' : 'bg-brand-green hover:bg-green-600'} text-white`}>
        View Details
      </button>
    </div>
  </motion.div>
);

const Products = () => {
  const saris = [
    { title: "Zari Silk Masterpiece", category: "Luxury Silk", price: "24,999", image: "/images/silk.png", color: "orange" },
    { title: "Emerald Designer Weave", category: "Emerald Collection", price: "18,500", image: "/images/emerald.png", color: "green" },
  ];

  return (
    <section id="collections" className="py-32 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-5xl font-serif font-bold mb-6 text-white">Featured <span className="text-brand-green">Elegance</span></h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            Handpicked from the finest weavers across the country, our featured collection represents the pinnacle of craftsmanship.
          </p>
        </div>
        <button className="text-brand-orange font-bold flex items-center space-x-2 border-b-2 border-brand-orange pb-2 hover:opacity-80 transition-all">
          <span>Explore All Collections</span>
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {saris.map((saree, idx) => (
          <ProductCard key={idx} {...saree} />
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-brand-surface pt-20 pb-10 border-t border-white/5 text-white">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
      <div className="col-span-1 md:col-span-1">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-brand-orange rounded flex items-center justify-center">
            <ShoppingBag size={18} className="text-white" />
          </div>
          <span className="text-xl font-serif font-bold">Saree Bazar</span>
        </div>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Preserving the heritage of Indian textiles through carefully curated luxury sarees.
        </p>
        <div className="flex space-x-4">
          {[Instagram, Facebook, Twitter].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange transition-colors">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-bold text-lg mb-8 text-white">Quick Links</h4>
        <ul className="space-y-4 text-gray-400">
          <li><a href="#" className="hover:text-brand-orange transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-brand-orange transition-colors">Bridal Wear</a></li>
          <li><a href="#" className="hover:text-brand-orange transition-colors">Silk Collection</a></li>
          <li><a href="#" className="hover:text-brand-orange transition-colors">Shipping Info</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-lg mb-8 text-white">Customer Care</h4>
        <ul className="space-y-4 text-gray-400">
          <li><a href="#" className="hover:text-brand-orange transition-colors">Track Order</a></li>
          <li><a href="#" className="hover:text-brand-orange transition-colors">Returns & Exchanges</a></li>
          <li><a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-brand-orange transition-colors">Terms of Service</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-lg mb-8 text-white">Contact Us</h4>
        <ul className="space-y-6 text-gray-400">
          <li className="flex items-start space-x-3">
            <MapPin size={20} className="text-brand-green mt-1 flex-shrink-0" />
            <span>123 Silk weavers Lane, <br />Varanasi, India 221001</span>
          </li>
          <li className="flex items-center space-x-3">
            <Phone size={18} className="text-brand-orange flex-shrink-0" />
            <span>+91 98765 43210</span>
          </li>
          <li className="flex items-center space-x-3">
            <Mail size={18} className="text-brand-orange flex-shrink-0" />
            <span>hello@sareebazar.com</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-gray-500 text-sm">© 2024 Saree Bazar. All rights reserved.</p>
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <span>Handcrafted with</span>
        <span className="text-red-500">❤</span>
        <span>in India</span>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-orange/30">
      <Navbar />
      <Hero />
      <main>
        <div className="bg-brand-surface py-20 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-brand-dark to-transparent"></div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex overflow-hidden whitespace-nowrap">
              <motion.div
                animate={{ x: ["0%", "-100%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex items-center space-x-12 shrink-0 pr-12"
              >
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-4xl md:text-6xl font-serif font-bold text-white/5 italic">
                    BANARASI • KANJIVARAM • CHANDERI • PAITHANI • MUSHROO •
                  </span>
                ))}
              </motion.div>
              <motion.div
                animate={{ x: ["0%", "-100%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex items-center space-x-12 shrink-0 pr-12"
              >
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-4xl md:text-6xl font-serif font-bold text-white/5 italic">
                    BANARASI • KANJIVARAM • CHANDERI • PAITHANI • MUSHROO •
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-brand-dark to-transparent"></div>
        </div>

        <Products />

        <section className="py-32 bg-brand-surface relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-green/20 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-orange/20 blur-[100px] rounded-full"></div>

          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl font-serif font-bold mb-8 text-white">Join the <span className="text-brand-orange">Heritage</span></h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Subscribe to get early access to our exclusive collections and traditional weaving insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-8 py-5 rounded-full bg-brand-dark/50 border border-white/10 text-white focus:outline-none focus:border-brand-orange transition-all"
              />
              <button className="bg-brand-green text-white px-10 py-5 rounded-full font-bold hover:shadow-[0_0_20px_rgba(0,128,55,0.4)] transition-all">
                Join Now
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
