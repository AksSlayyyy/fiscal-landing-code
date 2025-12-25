import { useState, useEffect } from 'react';

// Latest Update: 2025-12-25 09:15 AM
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'Benefits', href: '#how-it-works' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Blog', href: '#faq' },
        { name: 'Contact Us', href: '#contact' },
    ];

    // Always black for text/logo, white for CTA text when scrolled
    const brandColor = '#1a1615';
    // Glassmorphism background when scrolled, transparent otherwise
    const bgColor = isScrolled ? 'rgba(255, 255, 255, 0.6)' : 'transparent';

    return (
        <header
            className="fixed left-0 right-0 z-50 flex justify-center pointer-events-none"
            style={{ top: '32px' }}
        >
            <nav
                className={`w-full flex items-center justify-center transition-all duration-500 ease-in-out pointer-events-auto ${isScrolled
                    ? 'shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-full max-w-[880px] backdrop-blur-md border border-white/40'
                    : 'px-4 max-w-[1072px] border-transparent'
                    }`}
                style={{ backgroundColor: bgColor, height: isScrolled ? '80px' : '90px' }}
            >
                <div
                    className="w-full flex items-center justify-between transition-all duration-500 ease-in-out"
                    style={{ maxWidth: isScrolled ? '850px' : '100%' }}
                >
                    {/* Brand */}
                    <a href="/" className="flex items-center gap-2.5 no-underline group">
                        <div
                            className="w-6 h-6 rounded-full transition-colors duration-300"
                            style={{ backgroundColor: brandColor }}
                        />
                        <span
                            className="font-bold text-2xl tracking-tight transition-colors duration-300"
                            style={{ color: brandColor }}
                        >
                            TechFiscal
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-[16px] font-medium transition-colors duration-300 no-underline hover:opacity-70`}
                                style={{ color: brandColor }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-full font-bold text-[17px] tracking-tight py-5 min-h-[60px] whitespace-nowrap no-underline transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                            style={{
                                paddingLeft: '15px',
                                paddingRight: '15px',
                                backgroundColor: '#1a1615', // Always black
                                color: '#FFFFFF' // Always white text
                            }}
                        >
                            Try TechFiscal free
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-full transition-colors"
                        style={{ color: brandColor }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`lg:hidden fixed top-20 left-4 right-4 bg-white rounded-3xl shadow-2xl transition-all duration-300 overflow-hidden pointer-events-auto ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
                    }`}
            >
                <div className="p-6 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[#1a1615] hover:bg-gray-50 font-medium py-3 px-4 rounded-xl transition-colors no-underline"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-3">
                        <a
                            href="#contact"
                            className="w-full bg-[#1a1615] text-white font-bold px-6 py-4 rounded-full no-underline text-center block"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Try TechFiscal free
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
