import React from 'react';
import { ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

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
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/40"></div>
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

export default Hero;
