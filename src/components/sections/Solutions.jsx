const stats = [
    { value: '$2B+', label: 'Processed annually' },
    { value: '50K+', label: 'Active businesses' },
    { value: '99.99%', label: 'Uptime guarantee' },
    { value: '150+', label: 'Countries supported' },
];

const solutions = [
    {
        title: 'For Startups',
        description: 'Launch fast with essential tools. Free tier available with no commitment required.',
        features: ['Free up to $10K/mo', 'Basic analytics', 'Email support', 'API access'],
        image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
        cta: 'Start Free',
    },
    {
        title: 'For Growing Teams',
        description: 'Scale confidently with advanced features and dedicated support for your team.',
        features: ['Unlimited transactions', 'Advanced reporting', 'Priority support', 'Custom integrations'],
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
        cta: 'View Plans',
        featured: true,
    },
    {
        title: 'For Enterprise',
        description: 'Custom solutions for complex needs. White-glove onboarding and SLA guarantees.',
        features: ['Custom pricing', 'Dedicated manager', '99.99% SLA', 'On-premise option'],
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
        cta: 'Contact Sales',
    },
];

const Solutions = () => {
    return (
        <section id="solutions" className="py-24 bg-dark text-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 pb-20 border-b border-white/10">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-white/60 text-sm font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-white/10 text-primary-300 rounded-full text-sm font-semibold mb-4">
                        Solutions
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Built for businesses<br />
                        <span className="text-white/50">of every size</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Whether you're just starting out or managing enterprise operations, we have the right solution for you.
                    </p>
                </div>

                {/* Solutions Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${solution.featured
                                    ? 'bg-gradient-to-br from-primary-600 to-primary-800 ring-2 ring-primary-400/50'
                                    : 'bg-white/5 hover:bg-white/10'
                                }`}
                        >
                            {/* Featured Badge */}
                            {solution.featured && (
                                <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                                    Most Popular
                                </div>
                            )}

                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={solution.image}
                                    alt={solution.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                                <p className="text-white/60 mb-6">{solution.description}</p>

                                {/* Features List */}
                                <ul className="space-y-3 mb-8">
                                    {solution.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/80">
                                            <svg className="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <a
                                    href="#pricing"
                                    className={`inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${solution.featured
                                            ? 'bg-white text-primary-700 hover:bg-white/90'
                                            : 'bg-white/10 text-white hover:bg-white/20'
                                        }`}
                                >
                                    {solution.cta}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
