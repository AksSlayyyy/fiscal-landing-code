import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    // Parallax & Scroll Animations
    const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
    const rotateX = useTransform(scrollYProgress, [0, 1], [0, 10]);

    // Entrance Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, y: 100, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 1, ease: 'easeOut', delay: 0.4 }
        }
    };

    return (
        <section
            ref={heroRef}
            className="hero-gradient h-[115vh] flex flex-col items-center w-full relative overflow-hidden"
        >
            <motion.div
                className="max-w-[1072px] z-10 flex flex-col items-center w-full relative px-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ paddingTop: '180px' }}
            >
                <div className="flex flex-col items-center gap-6 w-full max-w-[900px] text-center">

                    {/* Main Heading */}
                    <motion.h1
                        className="font-semibold text-[#1a1615] text-[56px] sm:text-[68px] md:text-[80px] lg:text-[88px] tracking-[-0.03em] leading-[1.05]"
                        variants={itemVariants}
                    >
                        Run your freelance<br />
                        business like a pro
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="font-normal text-[#453f3d] text-xl md:text-2xl leading-[1.6] max-w-[640px] opacity-80 mt-4"
                        variants={itemVariants}
                    >
                        All-in-one platform for managing clients, projects, and payments without the chaos. From first contract to final invoice, we've got your back.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-row items-center gap-5 mt-10"
                        variants={itemVariants}
                    >
                        <motion.a
                            href="#contact"
                            className="inline-flex items-center justify-center bg-[#1a1615] text-white font-bold text-[18px] tracking-tight py-6 rounded-full no-underline min-h-[64px] whitespace-nowrap shadow-lg"
                            style={{ paddingLeft: '40px', paddingRight: '40px' }}
                            whileHover={{ scale: 1.05, backgroundColor: '#000000', y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            Try TechFiscal free
                        </motion.a>

                        <motion.a
                            href="#features"
                            className="inline-flex items-center justify-center bg-white/60 backdrop-blur-md text-[#1a1615] font-bold text-[18px] tracking-tight py-6 rounded-full no-underline border border-[#1a1615]/5 min-h-[64px] whitespace-nowrap shadow-sm"
                            style={{ paddingLeft: '40px', paddingRight: '40px' }}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.9)', y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            See features
                        </motion.a>
                    </motion.div>
                </div>

                {/* Dashboard Image */}
                <motion.div
                    className="w-full max-w-[1100px] relative mt-56"
                    style={{
                        perspective: '1200px',
                        y,
                        scale,
                        opacity
                    }}
                    variants={imageVariants}
                >
                    <motion.div
                        className="relative w-full aspect-[1.53/1] overflow-hidden rounded-[24px] shadow-[0_30px_60px_rgba(26,22,21,0.15)] border border-[#1a1615]/10 bg-white"
                        style={{
                            rotateX
                        }}
                    >
                        <img
                            className="block w-full h-full object-cover object-top"
                            alt="TechFiscal Dashboard"
                            src="https://framerusercontent.com/images/JeI7uULY0av9DxD7q7NVLTuoNc.png?width=2880&height=2000"
                        />
                    </motion.div>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Hero;
