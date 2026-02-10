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

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-900">
            {/* Interactive Mouse Gradient */}
            <div 
                className="absolute inset-0 z-10 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(244, 114, 182, 0.07), transparent 40%)`
                }}
            />

            {/* Static Gradient Blobs for depth */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-pink-300 rounded-full"
                    initial={{
                        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                        opacity: Math.random() * 0.3 + 0.1,
                        scale: Math.random() * 0.5 + 0.5,
                    }}
                    animate={{
                        y: [null, Math.random() * -100],
                        opacity: [null, Math.random() * 0.5 + 0.1, 0],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5
                    }}
                    style={{
                        width: Math.random() * 3 + 1 + 'px',
                        height: Math.random() * 3 + 1 + 'px',
                    }}
                />
            ))}

            {/* Grid Pattern Overlay */}
            <div 
                className="absolute inset-0 opacity-[0.03]" 
                style={{
                    backgroundImage: 'linear-gradient(#f472b6 1px, transparent 1px), linear-gradient(to right, #f472b6 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}
            />
        </div>
    );
};

export default BackgroundAnimation;
