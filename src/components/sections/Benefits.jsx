import { Zap, LayoutGrid, Smile } from 'lucide-react';
import { motion } from 'framer-motion';

const Benefits = () => {
    const cards = [
        {
            icon: <Zap className="w-10 h-10 text-[#1a1615]" strokeWidth={2} />,
            title: "Streamline your work",
            description: "Efficiency starts here. Streamline your work with our project tracking features. Simplify tasks and maximise productivity.",
            delay: 0
        },
        {
            icon: <LayoutGrid className="w-10 h-10 text-[#1a1615]" strokeWidth={2} />,
            title: "Works with your favourite tools",
            description: "Integrate quickly and directly with your tools you already love. It's as easy as 1, 2, 3.",
            delay: 0.1
        },
        {
            icon: <Smile className="w-10 h-10 text-[#1a1615]" strokeWidth={2} />,
            title: "Save hours every week",
            description: "Unlock more time for what matters. Save hours every week with Slice. Optimise your workflow and reclaim your time.",
            delay: 0.2
        }
    ];

    return (
        <section className="w-full bg-white flex justify-center px-6 pt-80 pb-24">
            <div className="flex flex-col items-center w-full max-w-[1240px] gap-20">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-start items-center w-full"
                >
                    <h2 className="text-center font-medium text-slate-900 text-[36px] md:text-[52px] tracking-[0.52px] leading-tight md:leading-[57.2px] text-balance">
                        TechFiscal is built for you
                    </h2>
                </motion.div>

                {/* Cards Grid */}
                <div className="flex flex-col md:flex-row w-full gap-8 lg:gap-10">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="flex-1 flex flex-col items-start bg-[#f7f7f7] rounded-[32px] p-10 h-auto min-h-[400px] w-full border border-transparent transition-all duration-500"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: card.delay }}
                            whileHover={{
                                y: -12,
                                backgroundColor: '#ffffff',
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08), 0 10px 15px -3px rgba(0, 0, 0, 0.03)",
                                borderColor: "rgba(0,0,0,0.04)",
                                transition: { duration: 0.4, ease: "easeOut" }
                            }}
                        >
                            {/* Icon Container */}
                            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 shrink-0 group-hover:scale-110 transition-transform duration-300">
                                {card.icon}
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-5 mt-auto">
                                <h3 className="font-semibold text-slate-900 text-[28px] leading-[1.2] tracking-tight">
                                    {card.title}
                                </h3>
                                <p className="font-medium text-[#64748b] text-[17px] leading-[1.6]">
                                    {card.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
