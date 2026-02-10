import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 100) { 
                    // if scroll down and past 100px
                    setIsVisible(false);
                } else { 
                    // if scroll up
                    setIsVisible(true);
                }

                if (window.scrollY > 20) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }

                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    const navLinks = [
        { name: 'About', href: '#about', number: '01.' },
        { name: 'Experience', href: '#experience', number: '02.' },
        { name: 'Projects', href: '#projects', number: '03.' },
        { name: 'Contact', href: '#contact', number: '04.' },
    ];

    const sidebarVariants = {
        open: { 
            x: 0,
            transition: { 
                type: "spring", 
                stiffness: 70, 
                damping: 20 
            }
        },
        closed: { 
            x: "100%",
            transition: { 
                type: "spring", 
                stiffness: 70, 
                damping: 20 
            }
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ 
                y: isVisible ? 0 : -100,
                backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                boxShadow: scrolled ? '0 10px 30px -10px rgba(2, 12, 27, 0.7)' : 'none',
            }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 h-20 flex items-center`}
        >
            <div className="max-w-7xl w-full mx-auto px-6 flex justify-between items-center">
                <motion.a 
                    href="#" 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative group z-50"
                >
                    <div className="text-pink-400 font-bold text-2xl font-mono border-2 border-pink-400 p-2 rounded hover:bg-pink-400/10 transition-colors">
                        M
                        <span className="text-slate-100 group-hover:text-pink-400 transition-colors">M</span>
                        .
                    </div>
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="group text-slate-300 hover:text-pink-400 transition-colors text-sm font-medium flex items-center gap-1"
                        >
                            <span className="text-pink-400 font-mono text-xs">{link.number}</span>
                            <span className="relative">
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                            </span>
                        </motion.a>
                    ))}
                    
                    <motion.a
                        href="/resume.pdf"
                        download="Resume_Manar_Marchoube.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="px-4 py-2 text-pink-400 border border-pink-400 rounded text-sm font-mono hover:bg-pink-400/10 transition-colors"
                    >
                        Resume
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden z-50">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-pink-400 focus:outline-none relative group"
                    >
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
                        />
                        
                        {/* Drawer */}
                        <motion.div
                            variants={sidebarVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-slate-800 z-50 shadow-2xl flex flex-col justify-center items-center md:hidden"
                        >
                            <div className="flex flex-col space-y-8 text-center">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="group text-slate-300 hover:text-pink-400 font-medium text-xl flex flex-col items-center gap-2"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="text-pink-400 font-mono text-sm">{link.number}</span>
                                        {link.name}
                                    </a>
                                ))}
                                <a
                                    href="/resume.pdf"
                                    download="Resume_Manar_Marchoube.pdf"
                                    className="px-8 py-3 text-pink-400 border border-pink-400 rounded text-sm font-mono hover:bg-pink-400/10 transition-colors mt-8"
                                >
                                    Resume
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
