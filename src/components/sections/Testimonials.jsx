const testimonials = [
    {
        quote: "TechFiscal transformed how we handle payments. We've reduced processing time by 70% and our team loves the intuitive interface.",
        author: 'Sarah Chen',
        role: 'CFO at TechStart Inc.',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        company: 'TechStart',
    },
    {
        quote: "The automation features alone saved us 20+ hours per week. Invoice management has never been this seamless.",
        author: 'Marcus Johnson',
        role: 'Finance Director at ScaleUp',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        company: 'ScaleUp',
    },
    {
        quote: "Best-in-class security with enterprise features. We migrated our entire finance stack to TechFiscal in just 2 weeks.",
        author: 'Emily Rodriguez',
        role: 'Head of Operations at Finova',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
        company: 'Finova',
    },
];

const logos = [
    { name: 'Stripe', svg: 'M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z' },
    { name: 'Visa', svg: 'M9.112 8.262L5.97 15.758H3.92L2.374 9.775c-.094-.368-.175-.503-.461-.658C1.447 8.864.677 8.627 0 8.479l.046-.217h3.3a.904.904 0 01.894.764l.817 4.338 2.018-5.102h2.037zm8.033 5.049c.008-1.979-2.736-2.088-2.717-2.972.006-.269.262-.555.822-.628a3.66 3.66 0 011.913.336l.34-1.59a5.207 5.207 0 00-1.814-.333c-1.917 0-3.266 1.02-3.278 2.479-.012 1.079.963 1.68 1.698 2.04.756.367 1.01.603 1.006.931-.005.503-.602.725-1.16.734-.975.015-1.54-.264-1.992-.474l-.351 1.642c.453.208 1.289.39 2.156.398 2.037 0 3.37-1.006 3.377-2.563zm5.061 2.447H24l-1.565-7.496h-1.656a.883.883 0 00-.826.55l-2.909 6.946h2.036l.405-1.12h2.488l.233 1.12zm-2.166-2.656l1.02-2.815.588 2.815h-1.608zm-8.153-4.84l-1.6 7.496H8.32l1.6-7.496h1.967z' },
    { name: 'Mastercard', svg: 'M15.245 17.831h-6.49v-11.66h6.49v11.66zM9.167 12A7.404 7.404 0 0112 5.357 7.465 7.465 0 007.5 4a7.5 7.5 0 000 15c1.71 0 3.283-.573 4.541-1.539A7.403 7.403 0 019.167 12zm14.833 0a7.5 7.5 0 01-12.083 5.903A7.403 7.403 0 0014.833 12 7.404 7.404 0 0011.917 6.097 7.5 7.5 0 0124 12z' },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                        Loved by teams<br />
                        <span className="text-dark-muted">around the world</span>
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-8 shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl hover:border-primary-100 transition-all duration-500"
                        >
                            {/* Quote Icon */}
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Quote */}
                            <p className="text-dark-muted leading-relaxed mb-6 text-lg">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.author}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <div className="font-semibold text-dark">{testimonial.author}</div>
                                    <div className="text-sm text-dark-muted">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trusted By */}
                <div className="text-center">
                    <p className="text-dark-muted text-sm font-medium mb-8">
                        Trusted by leading companies & integrated with your favorite tools
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
                        {logos.map((logo, index) => (
                            <div key={index} className="h-8 flex items-center">
                                <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
                                    <path d={logo.svg} />
                                </svg>
                            </div>
                        ))}
                        <span className="text-dark font-semibold text-xl">Xero</span>
                        <span className="text-dark font-semibold text-xl">QuickBooks</span>
                        <span className="text-dark font-semibold text-xl">Slack</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
