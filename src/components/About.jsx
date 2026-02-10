import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Briefcase, GraduationCap, Cpu, Terminal, ChevronRight } from 'lucide-react';

const About = () => {
    const [activeTab, setActiveTab] = useState('skills');

    const skills = [
        { category: "Backend", items: ["Java (Spring Boot)", "PHP (Laravel)", "Python (Flask)", "PostgreSQL", "MongoDB"] },
        { category: "Frontend", items: ["React.js", "Tailwind CSS", "Javascript (ES6+)", "HTML/CSS"] },
        { category: "Tools & DevOps", items: ["Docker", "Git/Github", "JIRA", "CI/CD"] }
    ];

    const experiences = [
        {
            company: "Brandegix",
            role: "Stagiaire Développeuse Web",
            date: "2024",
            description: [
                "Conception et développement de la plateforme de recherche d'emploi 'Casajobs.ma' (https://www.casajobs.ma/).",
                "Stack technique : React.js pour le frontend, Python Flask pour le backend.",
                "Mise en place de l'architecture et intégration des fonctionnalités principales."
            ]
        }
    ];

    const education = [
        {
            school: "YOUCODE-UM6P, Safi",
            degree: "Développement Web",
            date: "2024 – 2026",
            desc: "Formation intensive en pédagogie active."
        },
        {
            school: "Faculté Polydisciplinaire de Safi",
            degree: "Sciences Mathématiques et Informatiques",
            date: "2020 – 2023",
            desc: "Fondamentaux en algorithmique et mathématiques."
        }
    ];

    const tabContent = {
        skills: (
            <div className="grid gap-6">
                {skills.map((skillGroup, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-pink-400/30 transition-colors"
                    >
                        <h3 className="text-pink-400 font-mono mb-4 flex items-center gap-2">
                            <ChevronRight size={16} /> {skillGroup.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill, idx) => (
                                <span key={idx} className="bg-slate-900 text-slate-300 px-3 py-1 rounded text-sm font-mono border border-slate-700 hover:text-pink-400 hover:border-pink-400 transition-all duration-300 cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        ),
        experience: (
            <div className="space-y-8">
                {experiences.map((exp, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative pl-8 border-l-2 border-slate-700 hover:border-pink-400 transition-colors duration-300"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-pink-400"></div>
                        <h3 className="text-xl font-bold text-slate-100 mb-1">
                            {exp.role} <span className="text-pink-400">@ {exp.company}</span>
                        </h3>
                        <p className="font-mono text-xs text-slate-500 mb-4">{exp.date}</p>
                        <ul className="space-y-2">
                            {exp.description.map((item, idx) => (
                                <li key={idx} className="flex text-slate-400 text-sm">
                                    <span className="text-pink-400 mr-2">▹</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        ),
        education: (
            <div className="grid gap-4">
                {education.map((edu, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-slate-800 p-6 rounded-xl border-l-4 border-pink-400 flex flex-col md:flex-row justify-between items-start md:items-center group hover:bg-slate-800/80 transition-all"
                    >
                        <div>
                            <h4 className="text-lg font-bold text-slate-100 group-hover:text-pink-400 transition-colors">
                                {edu.school}
                            </h4>
                            <p className="text-slate-400 text-sm mt-1">{edu.degree}</p>
                            <p className="text-slate-500 text-xs mt-2 italic">{edu.desc}</p>
                        </div>
                        <span className="mt-4 md:mt-0 px-3 py-1 bg-pink-400/10 text-pink-400 rounded-full text-xs font-mono whitespace-nowrap">
                            {edu.date}
                        </span>
                    </motion.div>
                ))}
            </div>
        )
    };

    return (
        <section id="about" className="py-20 min-h-screen flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {/* Section Header */}
                <div className="flex items-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mr-4 flex items-center gap-3">
                        <span className="text-pink-400 font-mono text-2xl">01.</span> 
                        About Me
                    </h2>
                    <div className="h-px bg-slate-700 flex-grow max-w-xs opacity-50"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Bio & Terminal */}
                    <div className="space-y-8">
                        <div className="prose prose-invert text-slate-400 text-lg leading-relaxed">
                            <p>
                                Hello! My name is <span className="text-pink-400 font-bold">Manar</span> and I specialize in 
                                building digital experiences. My interest in software development started back in university during my math studies, 
                                where I discovered the beauty of logic applied to code.
                            </p>
                            <p>
                                Fast-forward to today, and I've had the privilege of building software for 
                                <span className="text-pink-400"> HR management, Logistics, and E-commerce</span>.
                                My main focus these days is building accessible, inclusive products and digital experiences.
                            </p>
                        </div>

                        {/* Terminal Decoration */}
                        <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700 shadow-2xl">
                            <div className="bg-slate-800 px-4 py-2 flex gap-2 items-center border-b border-slate-700">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="ml-2 text-xs text-slate-400 font-mono">manar@dev:~/skills</span>
                            </div>
                            <div className="p-4 font-mono text-sm text-slate-300">
                                <p><span className="text-pink-400">➜</span> <span className="text-blue-400">~</span> whoami</p>
                                <p className="ml-4 text-emerald-400">"Full Stack Developer based in Safi, Morocco"</p>
                                <p className="mt-2"><span className="text-pink-400">➜</span> <span className="text-blue-400">~</span> git commit -m "Learning everyday"</p>
                                <p className="ml-4 text-slate-500">[main 8a3c2] Learning everyday</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Tabs */}
                    <div>
                        <div className="flex space-x-4 border-b border-slate-700 mb-8 overflow-x-auto pb-2">
                            {['skills', 'experience', 'education'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-2 text-sm font-mono uppercase tracking-wider transition-all relative ${
                                        activeTab === tab 
                                        ? 'text-pink-400' 
                                        : 'text-slate-400 hover:text-slate-200'
                                    }`}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <motion.div 
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-400"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="min-h-[300px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {tabContent[activeTab]}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
