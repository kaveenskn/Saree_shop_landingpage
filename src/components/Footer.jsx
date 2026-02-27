import React from 'react';
import { ShoppingBag, Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

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

export default Footer;
