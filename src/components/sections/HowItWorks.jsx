const steps = [
    {
        number: '01',
        title: 'Create Your Account',
        description: 'Sign up in under 2 minutes. No credit card required. Just enter your email and business details to get started instantly.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
        color: 'from-blue-500 to-cyan-400',
    },
    {
        number: '02',
        title: 'Connect Your Accounts',
        description: 'Link your bank accounts, payment processors, and accounting software. Our secure integrations sync automatically.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
        ),
        color: 'from-violet-500 to-purple-400',
    },
    {
        number: '03',
        title: 'Customize Your Workflow',
        description: 'Set up automated invoicing, payment reminders, and expense tracking. Tailor everything to match your business needs.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        color: 'from-emerald-500 to-teal-400',
    },
    {
        number: '04',
        title: 'Start Managing & Growing',
        description: 'Watch your financial data come together in real-time. Get insights, track growth, and make smarter business decisions.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        color: 'from-orange-500 to-amber-400',
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary-50 to-accent-50 rounded-full blur-3xl opacity-50" />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                        How It Works
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                        Get started in<br />
                        <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                            four simple steps
                        </span>
                    </h2>
                    <p className="text-dark-muted text-lg max-w-2xl mx-auto">
                        No complicated setup. No technical expertise required. Just follow these steps and you're ready to transform your financial operations.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200 -translate-y-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="group relative"
                            >
                                {/* Card */}
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-100 transition-all duration-500 hover:-translate-y-2 relative z-10">
                                    {/* Step Number */}
                                    <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        {step.icon}
                                    </div>

                                    {/* Number Badge */}
                                    <span className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-primary-100 transition-colors duration-300">
                                        {step.number}
                                    </span>

                                    {/* Content */}
                                    <h3 className="text-xl font-semibold text-dark mb-3 relative z-10">
                                        {step.title}
                                    </h3>
                                    <p className="text-dark-muted leading-relaxed relative z-10">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Arrow Connector (Desktop) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 z-20">
                                        <div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                                            <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-dark text-white font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300"
                    >
                        Get Started Now
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
