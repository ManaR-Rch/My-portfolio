import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BackgroundAnimation = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const webDevSymbols = [
        "<html>", "<body>", "</div>", "npm i", "git push", 
        "{ }", "();", "=>", "&&", "||", "return", 
        "console.log", "import", "export", "const", "let", 
        "try", "catch", "async", "await", "404", "200", 
        "float", "grid", "flex", "#root"
    ];

    // Create a stable set of floating items
    const [floatingItems] = useState(() => 
        [...Array(30)].map((_, i) => ({
            id: i,
            text: webDevSymbols[Math.floor(Math.random() * webDevSymbols.length)],
            x: Math.random() * 100,
            y: Math.random() * 100,
            scale: Math.random() * 0.5 + 0.8,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 5
        }))
    );

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-950">
            {/* Interactive Spotlight */}
            <div 
                className="absolute inset-0 z-10 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(244, 114, 182, 0.06), transparent 40%)`
                }}
            />

            {/* Binary / Code Stream Effect */}
            {floatingItems.map((item) => (
                <motion.span
                    key={item.id}
                    className="absolute font-mono text-pink-500 font-bold select-none pointer-events-none"
                    initial={{
                        x: `${item.x}vw`,
                        y: `${item.y}vh`,
                        opacity: 0
                    }}
                    animate={{
                        y: [ `${item.y}vh`, `${item.y - 20}vh` ],
                        opacity: [0, 0.15, 0] 
                    }}
                    transition={{
                        duration: 10 + Math.random() * 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 2
                    }}
                    style={{
                         fontSize: `${item.scale}rem`,
                    }}
                >
                    {item.text}
                </motion.span>
            ))}

            {/* Decorative Grid Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.03] z-0">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f472b6" strokeWidth="1"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Subtle Gradient Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-[100px]" />
        </div>
    );
};

export default BackgroundAnimation;
