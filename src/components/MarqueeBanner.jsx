import React from 'react';
import { motion } from 'framer-motion';

const MarqueeBanner = () => {
    return (
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
    );
};

export default MarqueeBanner;
