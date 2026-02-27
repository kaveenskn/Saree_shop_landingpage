import React from 'react';
import { motion } from 'framer-motion';
import royalSilk from '../assets/collections/royal_silk.png';
import banarasiHeritage from '../assets/collections/banarasi_heritage.png';
import modernOrganza from '../assets/collections/modern_organza.png';

const collections = [
    {
        title: "Royal Silk",
        description: "Experience the elegance of pure silk with intricate gold zari work.",
        image: royalSilk,
        color: "from-emerald-900/80 to-emerald-600/20",
        link: "#royal-silk"
    },
    {
        title: "Banarasi Heritage",
        description: "Traditional hand-woven masterpieces that carry the legacy of Banaras.",
        image: banarasiHeritage,
        color: "from-orange-900/80 to-orange-600/20",
        link: "#banarasi"
    },
    {
        title: "Modern Organza",
        description: "Lightweight and sophisticated designs for the contemporary woman.",
        image: modernOrganza,
        color: "from-purple-900/80 to-purple-600/20",
        link: "#modern"
    },
    {
        title: "Kanjeevaram Silk",
        description: "Timeless South Indian elegance with vibrant colors and temple motifs.",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800",
        color: "from-red-900/80 to-red-600/20",
        link: "#kanjeevaram"
    },
    {
        title: "Lucknowi Chikankari",
        description: "Exquisite hand-embroidered patterns from the heart of Awadh.",
        image: "https://images.unsplash.com/photo-1609176311394-802526e0388e?auto=format&fit=crop&q=80&w=800",
        color: "from-blue-900/80 to-blue-600/20",
        link: "#chikankari"
    },
    {
        title: "Bridal Couture",
        description: "Opulent designs for the most special day of your life.",
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800",
        color: "from-rose-900/80 to-rose-600/20",
        link: "#bridal"
    }
];

const Collections = () => {
    return (
        <section id="collections" className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-brand-orange font-medium tracking-widest uppercase text-sm mb-4 block"
                    >
                        Handpicked Masterpieces
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
                    >
                        Our Signature <span className="text-brand-green">Collections</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-24 h-1 bg-gradient-to-r from-brand-orange to-brand-green mx-auto rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {collections.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-2xl hover-glow"
                        >
                            {/* Image Background */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${item.color} via-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100`} />
                            <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-300" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                                >
                                    <h3 className="text-2xl font-serif font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-white/80 text-sm mb-6 line-clamp-2 transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        {item.description}
                                    </p>
                                    <button className="flex items-center space-x-2 text-brand-orange font-semibold group/btn">
                                        <span>Explore Collection</span>
                                        <svg className="w-5 h-5 transform transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Collections;
