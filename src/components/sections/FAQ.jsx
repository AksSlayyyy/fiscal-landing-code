import { useState } from 'react';

const faqs = [
    {
        question: 'How long does it take to set up TechFiscal?',
        answer: 'Most businesses are up and running within 15 minutes. Our streamlined onboarding process guides you through account creation, connecting your bank accounts, and setting up your first invoice. If you need help, our support team is available 24/7.',
    },
    {
        question: 'Is my financial data secure?',
        answer: 'Absolutely. We use bank-grade 256-bit AES encryption for all data at rest and in transit. We\'re SOC 2 Type II certified, PCI DSS compliant, and undergo regular third-party security audits. Your data is stored in geographically distributed data centers with 99.99% uptime.',
    },
    {
        question: 'Can I integrate TechFiscal with my existing tools?',
        answer: 'Yes! We integrate with 200+ popular business tools including QuickBooks, Xero, Stripe, PayPal, Slack, Salesforce, and many more. We also offer a robust API for custom integrations. Our team can help you set up any integration you need.',
    },
    {
        question: 'What payment methods do you support?',
        answer: 'We support all major payment methods including credit/debit cards (Visa, Mastercard, Amex), ACH bank transfers, wire transfers, and digital wallets (Apple Pay, Google Pay). We also support 150+ currencies for international transactions.',
    },
    {
        question: 'Is there a free trial available?',
        answer: 'Yes! All paid plans come with a 14-day free trial with full access to all features. No credit card required to start. Our Starter plan is also completely free forever for businesses processing up to $10,000/month in transactions.',
    },
    {
        question: 'Can I cancel my subscription anytime?',
        answer: 'Yes, you can cancel your subscription at any time with no penalties or hidden fees. If you cancel, you\'ll have access until the end of your billing period. We also offer a 30-day money-back guarantee on all paid plans.',
    },
    {
        question: 'Do you offer dedicated support for enterprise customers?',
        answer: 'Enterprise customers get a dedicated account manager, priority 24/7 support, custom SLA guarantees, and access to our enterprise support portal. We also offer on-site training and white-glove onboarding for large deployments.',
    },
    {
        question: 'How does automated invoicing work?',
        answer: 'You can create invoice templates, set up recurring invoices, and automate payment reminders. When invoices are paid, the system automatically updates your records, sends receipts, and syncs with your accounting software. You can also create custom payment schedules.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-[900px] mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                        FAQ
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                        Frequently asked<br />
                        <span className="text-dark-muted">questions</span>
                    </h2>
                    <p className="text-dark-muted text-lg">
                        Everything you need to know about TechFiscal. Can't find what you're looking for?{' '}
                        <a href="#contact" className="text-primary-600 hover:text-primary-700 font-medium">
                            Contact our team
                        </a>
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl border transition-all duration-300 ${openIndex === index
                                    ? 'border-primary-200 shadow-lg shadow-primary-100/30'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`font-semibold pr-4 transition-colors ${openIndex === index ? 'text-primary-600' : 'text-dark'
                                    }`}>
                                    {faq.question}
                                </span>
                                <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
                                        ? 'bg-primary-500 text-white rotate-180'
                                        : 'bg-gray-100 text-dark-muted'
                                    }`}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <p className="px-6 pb-6 text-dark-muted leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still Have Questions */}
                <div className="mt-16 text-center bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-dark mb-2">Still have questions?</h3>
                    <p className="text-dark-muted mb-6">
                        Can't find the answer you're looking for? Our friendly team is here to help.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-600 transition-colors duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
