import React from 'react';
import { motion } from 'framer-motion';

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
            <button className={`w-full py-4 rounded-xl font-bold transition-all \${color === 'orange' ? 'bg-brand-orange hover:bg-orange-600' : 'bg-brand-green hover:bg-green-600'} text-white`}>
                View Details
            </button>
        </div>
    </motion.div>
);

export default ProductCard;
