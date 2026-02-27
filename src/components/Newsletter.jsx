import React from 'react';

const Newsletter = () => {
    return (
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
    );
};

export default Newsletter;
