const CTA = () => {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="bg-gradient-to-br from-dark via-gray-900 to-dark rounded-3xl p-12 md:p-20 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                            backgroundSize: '40px 40px'
                        }} />
                    </div>

                    {/* Gradient Orb */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-full blur-3xl" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Content */}
                        <div className="text-center lg:text-left max-w-xl">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Ready to transform your
                                <span className="block bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                                    financial operations?
                                </span>
                            </h2>
                            <p className="text-white/60 text-lg mb-8">
                                Join 50,000+ businesses using TechFiscal to streamline payments, invoicing, and financial management. Start free, no credit card required.
                            </p>

                            {/* Features List */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-white/80">
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Free 14-day trial
                                </span>
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    No credit card
                                </span>
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Cancel anytime
                                </span>
                            </div>
                        </div>

                        {/* CTA Form */}
                        <div className="w-full lg:w-auto">
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                                <form className="space-y-4">
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Enter your work email"
                                            className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#1a1615] text-white font-bold text-[17px] tracking-tight px-16 py-5 rounded-full flex items-center justify-center gap-3 hover:bg-[#2a2625] transition-all duration-300 shadow-lg hover:shadow-xl min-h-[60px]"
                                    >
                                        Get Started Free
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </form>
                                <p className="text-white/40 text-xs text-center mt-4">
                                    By signing up, you agree to our Terms of Service and Privacy Policy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
