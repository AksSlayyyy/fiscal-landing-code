import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="w-full bg-white py-12 px-6 border-t border-gray-100">
            <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Brand */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#1a1615]" />
                    <span className="text-xl font-bold text-[#1a1615] tracking-tight">TechFiscal</span>
                </div>

                {/* Copyright */}
                <p className="text-[#64748b] text-sm">
                    &copy; {new Date().getFullYear()} TechFiscal. All rights reserved.
                </p>

                {/* Socials / Links (Placeholder) */}
                <div className="flex items-center gap-6 text-sm font-medium text-[#64748b]">
                    <a href="#" className="hover:text-[#1a1615] transition-colors">Privacy</a>
                    <a href="#" className="hover:text-[#1a1615] transition-colors">Terms</a>
                    <a href="#" className="hover:text-[#1a1615] transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
