import React from 'react';
import { ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

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

export default Products;
