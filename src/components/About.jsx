import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-brand-dark relative overflow-hidden">
            {/* Decorative gradient blob */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-sm tracking-widest text-brand-orange uppercase font-semibold mb-3">
                        Visit Our Store
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-serif mb-6 text-white font-medium">
                        Find Us Locally
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg hover:text-gray-300 transition-colors">
                        Experience the elegance of our sarees in person. Our boutique offers a curated collection of traditional and modern clothing for every occasion.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-brand-surface border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Information Side */}
                    <div className="p-10 lg:p-14 space-y-10">
                        <div className="space-y-8">
                            {/* Location */}
                            <div className="flex gap-5 group">
                                <div className="w-14 h-14 bg-white/5 group-hover:bg-brand-orange/20 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-inner group-hover:scale-110">
                                    <MapPin className="text-brand-orange w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium text-white mb-2 group-hover:text-brand-orange transition-colors">Location</h4>
                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        Moderncomplex Road<br />
                                        Badulla, Sri Lanka
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-5 group">
                                <div className="w-14 h-14 bg-white/5 group-hover:bg-brand-orange/20 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-inner group-hover:scale-110">
                                    <Phone className="text-brand-orange w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium text-white mb-2 group-hover:text-brand-orange transition-colors">Contact Us</h4>
                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        055 222 2721
                                    </p>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="flex gap-5 group">
                                <div className="w-14 h-14 bg-white/5 group-hover:bg-brand-orange/20 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-inner group-hover:scale-110">
                                    <Clock className="text-brand-orange w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium text-white mb-2 group-hover:text-brand-orange transition-colors">Opening Hours</h4>
                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        Mon - Sat: 9:00 AM - 7:00 PM<br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>
                        </div>

                        <hr className="border-white/10" />

                        {/* WhatsApp Integration Button */}
                        <div>
                            <a
                                href="https://wa.me/94552222721"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white py-4 px-8 rounded-full font-medium transition-all duration-300 shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:-translate-y-1 w-full sm:w-auto overflow-hidden group relative text-lg"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                                <svg className="w-7 h-7 relative z-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.996 0A12.001 12.001 0 000 12.001c0 2.112.553 4.148 1.583 5.922L.15 22.464l4.675-1.226c1.724.962 3.69 1.488 5.717 1.488H12A12.003 12.003 0 0024 10.724 12.003 12.003 0 0012.003 0h-.007zM12 20.697A10.22 10.22 0 016.712 19.3l-.377-.225-3.18.835.85-3.085-.246-.39A10.198 10.198 0 011.815 11.99 10.196 10.196 0 0112 1.815a10.196 10.196 0 0110.19 10.196 10.196 0 01-10.19 10.196zM17.65 13.918c-.31-.155-1.834-.908-2.115-1.011-.28-.104-.485-.156-.692.155-.205.31-.8 1.011-.98 1.218-.18.207-.36.233-.67.078-.31-.155-1.305-.48-2.485-1.532-.916-.816-1.534-1.823-1.714-2.133-.18-.31-.02-.477.135-.63.138-.138.31-.362.465-.544.155-.18.207-.31.31-.517.104-.207.052-.388-.026-.543-.078-.155-.692-1.666-.948-2.28-.248-.6-.5-.515-.69-.525-.18-.007-.385-.008-.59-.008-.205 0-.54.078-.823.388-.28.31-1.096 1.07-1.096 2.614 0 1.543 1.122 3.033 1.277 3.24.154.207 2.21 3.376 5.356 4.733 2.146.924 2.87.804 3.4.677.636-.153 1.833-.746 2.09-1.47.258-.72.258-1.334.18-1.464-.078-.125-.285-.204-.595-.36z" />
                                </svg>
                                <span className="relative z-10">Chat with us on WhatsApp</span>
                            </a>
                            <p className="mt-4 text-sm text-gray-400">
                                Click to connect directly with our team for inquiries and custom orders!
                            </p>
                        </div>
                    </div>

                    {/* Map Side */}
                    <div className="h-full min-h-[400px] lg:min-h-[600px] relative w-full group overflow-hidden">
                        <div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                        <iframe
                            src="https://maps.google.com/maps?q=Moderncomplex%20Road,%20Badulla,%20Sri%20Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            className="absolute inset-0 w-full h-full border-0 filter opacity-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Saree Bazar Location Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
