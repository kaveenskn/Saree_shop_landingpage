import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
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
        <nav className={`fixed w-full z-50 transition-all duration-300 \${isScrolled ? 'bg-brand-dark/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
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
                        <a key={item} href={`#${item.toLowerCase().split(' ')[0]}`} className="text-sm font-medium text-white hover:text-brand-orange transition-colors">
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

export default Navbar;
