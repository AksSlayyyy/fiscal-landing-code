import { useState } from 'react';

const plans = [
    {
        name: 'Starter',
        description: 'Perfect for freelancers and small businesses just getting started.',
        price: { monthly: 0, annually: 0 },
        features: [
            'Up to $10,000/month in transactions',
            'Basic invoicing (10/month)',
            'Email support',
            '2 team members',
            'Basic analytics',
            'API access',
        ],
        limitations: [
            'No custom branding',
            'Standard processing speed',
        ],
        cta: 'Start Free',
        popular: false,
    },
    {
        name: 'Professional',
        description: 'For growing businesses that need advanced features and support.',
        price: { monthly: 49, annually: 39 },
        features: [
            'Unlimited transactions',
            'Unlimited invoicing',
            'Priority support (24/7)',
            'Unlimited team members',
            'Advanced analytics & reports',
            'Custom integrations',
            'White-label invoices',
            'Multi-currency support',
        ],
        limitations: [],
        cta: 'Start 14-Day Trial',
        popular: true,
    },
    {
        name: 'Enterprise',
        description: 'Custom solutions for large organizations with complex needs.',
        price: { monthly: null, annually: null },
        features: [
            'Everything in Professional',
            'Dedicated account manager',
            'Custom SLA (99.99% uptime)',
            'On-premise deployment option',
            'Advanced security & compliance',
            'Custom API rate limits',
            'Training & onboarding',
            'Volume discounts',
        ],
        limitations: [],
        cta: 'Contact Sales',
        popular: false,
    },
];

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                        Pricing
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                        Simple, transparent<br />
                        <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                            pricing for everyone
                        </span>
                    </h2>
                    <p className="text-dark-muted text-lg max-w-2xl mx-auto mb-8">
                        No hidden fees. No surprises. Choose the plan that fits your business.
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm font-medium ${!isAnnual ? 'text-dark' : 'text-dark-muted'}`}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${isAnnual ? 'bg-primary-500' : 'bg-gray-300'
                                }`}
                        >
                            <span
                                className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-1'
                                    }`}
                            />
                        </button>
                        <span className={`text-sm font-medium ${isAnnual ? 'text-dark' : 'text-dark-muted'}`}>
                            Annually
                        </span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                            Save 20%
                        </span>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${plan.popular
                                ? 'ring-2 ring-primary-500 shadow-xl shadow-primary-100/50'
                                : 'border border-gray-200 shadow-lg shadow-gray-100/50 hover:shadow-xl'
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-semibold rounded-full">
                                    Most Popular
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-dark mb-2">{plan.name}</h3>
                                <p className="text-dark-muted text-sm">{plan.description}</p>
                            </div>

                            {/* Price */}
                            <div className="mb-8">
                                {plan.price.monthly !== null ? (
                                    <div className="flex items-end gap-1">
                                        <span className="text-5xl font-bold text-dark">
                                            ${isAnnual ? plan.price.annually : plan.price.monthly}
                                        </span>
                                        <span className="text-dark-muted mb-2">/month</span>
                                    </div>
                                ) : (
                                    <div className="flex items-end gap-1">
                                        <span className="text-3xl font-bold text-dark">Custom Pricing</span>
                                    </div>
                                )}
                                {plan.price.monthly !== null && plan.price.monthly > 0 && isAnnual && (
                                    <p className="text-sm text-green-600 mt-1">
                                        Billed annually (${plan.price.annually * 12}/year)
                                    </p>
                                )}
                            </div>

                            {/* CTA Button */}
                            <a
                                href="#contact"
                                className={`flex items-center justify-center gap-2.5 w-full py-5 px-14 rounded-full font-bold text-[17px] tracking-tight transition-all duration-300 mb-8 border-2 min-h-[60px] ${plan.popular
                                    ? 'bg-[#1a1615] text-white border-[#1a1615] hover:bg-[#2a2625]'
                                    : 'bg-white text-[#1a1615] border-[#1a1615]/10 hover:border-[#1a1615]/20 hover:bg-gray-50'
                                    }`}
                            >
                                {plan.cta}
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>

                            {/* Features */}
                            <div className="space-y-4">
                                <p className="text-sm font-semibold text-dark">What's included:</p>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-dark-muted">
                                            <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                    {plan.limitations.map((limitation, i) => (
                                        <li key={`limit-${i}`} className="flex items-start gap-3 text-dark-muted/50">
                                            <svg className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <span className="text-sm">{limitation}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Money Back Guarantee */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-50 rounded-full">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-green-800 font-medium">30-day money-back guarantee • No questions asked</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
