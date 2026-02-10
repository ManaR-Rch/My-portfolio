import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from '../assets/moi.png';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center pt-20">
            <div className="grid md:grid-cols-2 gap-8 items-center w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-pink-400 font-mono text-lg mb-4">Hi, my name is</h1>
                    <h2 className="text-slate-100 font-bold text-5xl md:text-7xl mb-4">
                        Marchoube Manar.
                    </h2>
                    <h3 className="text-slate-400 font-bold text-4xl md:text-6xl mb-6">
                        I build things for the web.
                    </h3>
                    <p className="text-slate-400 max-w-xl text-lg leading-relaxed mb-8">
                        I'm a Full Stack Developer based in Morocco, specializing in building
                        exceptional digital experiences. I work with technologies like 
                        <span className="text-pink-400"> React, Spring Boot, Laravel</span>, and more.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12">
                         <a
                            href="mailto:manarmarchou6@gmail.com"
                            className="flex items-center gap-2 px-6 py-3 border border-pink-400 text-pink-400 rounded hover:bg-pink-400/10 transition-colors"
                        >
                            <Mail size={20} />
                            Contact Me
                        </a>
                        <a
                            href="https://github.com/ManaR-Rch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 text-slate-300 hover:text-pink-400 transition-colors"
                        >
                            <Github size={20} />
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/marchoube-manar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 text-slate-300 hover:text-pink-400 transition-colors"
                        >
                            <Linkedin size={20} />
                            LinkedIn
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-center md:justify-end relative"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                        <div className="absolute inset-0 border-2 border-pink-400 rounded transition-transform transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        <div className="absolute inset-0 bg-pink-400/20 rounded mix-blend-overlay group-hover:bg-transparent transition-colors"></div>
                        
                        <img 
                            src={profileImg}
                            alt="Marchoube Manar" 
                            className="relative z-10 w-full h-full object-cover rounded shadow-lg filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
