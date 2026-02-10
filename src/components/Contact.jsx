import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowRight, Copy } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "manarmarchou6@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Decorations */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-3xl -z-10"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <span className="text-pink-400 font-mono text-sm tracking-widest bg-pink-400/10 px-4 py-2 rounded-full">
                    04. What's Next?
                </span>
                <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mt-8 mb-6 tracking-tight">
                    Let's Work Together
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                     I'm currently looking for new opportunities as a Full Stack Developer. 
                     Whether you have a project in mind, a job opening, or just want to chat about tech — 
                     my inbox is always open!
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 items-center">
                
                {/* Email Card */}
                <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-pink-400/50 transition-all group text-left"
                >
                    <div className="flex items-start justify-between mb-8">
                        <div className="p-3 bg-slate-900 rounded-lg group-hover:bg-pink-400/20 transition-colors">
                            <Mail size={32} className="text-pink-400" />
                        </div>
                        <span className="flex h-3 w-3 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                    </div>
                    <h3 className="text-slate-100 font-bold text-xl mb-2">Drop me a line</h3>
                    <p className="text-slate-400 text-sm mb-6">Whether you have a question or just want to say hi.</p>
                    
                    <div className="flex items-center gap-2 bg-slate-900 p-2 rounded-lg border border-slate-800">
                        <code className="flex-1 text-slate-300 font-mono text-sm px-2 truncate">
                            {email}
                        </code>
                        <button 
                            onClick={handleCopy}
                            className="p-2 hover:bg-slate-800 rounded-md text-slate-400 hover:text-pink-400 transition-colors relative"
                            title="Copy email"
                        >
                            {copied ? <span className="text-green-400 text-xs font-bold">Copied!</span> : <Copy size={18} />}
                        </button>
                    </div>
                    <a 
                        href={`mailto:${email}`}
                        className="mt-6 w-full py-3 bg-pink-400 text-slate-900 rounded-lg font-bold hover:bg-pink-500 transition-colors flex items-center justify-center gap-2"
                    >
                        Send Email <ArrowRight size={18} />
                    </a>
                </motion.div>

                {/* Socials & Resume */}
                <div className="space-y-6">
                    <motion.a 
                        href="https://github.com/ManaR-Rch"
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ x: 10 }}
                        className="flex items-center justify-between p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-slate-500 group transition-all cursor-pointer"
                    >
                        <div className="flex items-center gap-4">
                            <Github size={24} className="text-slate-400 group-hover:text-white transition-colors" />
                            <span className="text-slate-300 font-medium group-hover:text-white">Check my code</span>
                        </div>
                        <ArrowRight size={20} className="text-slate-500 group-hover:text-pink-400 transition-colors -rotate-45 group-hover:rotate-0 transform duration-300" />
                    </motion.a>

                    <motion.a 
                        href="https://www.linkedin.com/in/marchoube-manar"
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ x: 10 }}
                        className="flex items-center justify-between p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-blue-500/50 group transition-all cursor-pointer"
                    >
                        <div className="flex items-center gap-4">
                            <Linkedin size={24} className="text-slate-400 group-hover:text-[#0077b5] transition-colors" />
                            <span className="text-slate-300 font-medium group-hover:text-white">Connect on LinkedIn</span>
                        </div>
                        <ArrowRight size={20} className="text-slate-500 group-hover:text-pink-400 transition-colors -rotate-45 group-hover:rotate-0 transform duration-300" />
                    </motion.a>
                </div>
            </div>

            <footer className="mt-24 text-center text-slate-500 text-sm font-mono">
                <p>Designed & Built by Marchoube Manar</p>
            </footer>
        </section>
    );
};

export default Contact;
