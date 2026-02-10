import { motion } from 'framer-motion';

const About = () => {
    const skills = [
        "Java (Spring Boot)", "PHP (Laravel)", "React.js", "Javascript (ES6+)",
        "PostgreSQL", "MongoDB", "Tailwind CSS", "Docker", "Git/Github", "JIRA"
    ];

    const experiences = [
        {
            company: "Brandegix",
            role: "Stagiaire Développeuse Web",
            date: "May 2025 – June 2025",
            description: [
                "Développement d'interfaces web utilisant des technologies modernes.",
                "Collaboration avec l'équipe de développement pour intégrer de nouvelles fonctionnalités et optimiser les performances."
            ]
        }
    ];

    const education = [
        {
            school: "YOUCODE-UM6P, Safi",
            degree: "Développement Web",
            date: "2024 – 2026"
        },
        {
            school: "Faculté Polydisciplinaire de Safi",
            degree: "Sciences Mathématiques et Informatiques",
            date: "2020 – 2023"
        }
    ];

    return (
        <section id="about" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mr-4">
                        <span className="text-pink-400 font-mono mr-2">01.</span> About Me
                    </h2>
                    <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 text-slate-400 text-lg leading-relaxed">
                        <p className="mb-6">
                            Hello! My name is Manar and I enjoy creating things that live on the internet.
                            My journey in web development started with a passion for problem-solving and logic, 
                            which led me to pursue a career in software engineering.
                        </p>
                        <p className="mb-6">
                            I've had the privilege of studying at <span className="text-pink-400">YouCode (UM6P)</span> 
                            and working on various projects ranging from logistics optimization to HR management systems.
                        </p>
                        <p className="mb-8">
                            Here are a few technologies I've been working with recently:
                        </p>
                        <ul className="grid grid-cols-2 gap-2 font-mono text-sm mb-12">
                            {skills.map((skill, i) => (
                                <li key={i} className="flex items-center before:content-['▹'] before:text-pink-400 before:mr-2">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Experience Section */}
                <div id="experience" className="mt-20">
                    <div className="flex items-center mb-8">
                        <h2 className="text-2xl font-bold text-slate-100">
                             <span className="text-pink-400 font-mono mr-2">02.</span> Experience
                        </h2>
                    </div>
                    
                    <div className="space-y-12 border-l border-slate-700 ml-3 md:ml-6 pl-8 md:pl-12 relative">
                        {experiences.map((exp, i) => (
                            <div key={i} className="relative">
                                <span className="absolute -left-[37px] md:-left-[53px] top-1 h-4 w-4 rounded-full bg-slate-900 border-2 border-pink-400"></span>
                                <h3 className="text-xl font-bold text-slate-100">
                                    {exp.role} <span className="text-pink-400">@ {exp.company}</span>
                                </h3>
                                <div className="font-mono text-sm text-slate-400 mb-4">{exp.date}</div>
                                <ul className="space-y-2">
                                    {exp.description.map((item, idx) => (
                                        <li key={idx} className="flex text-slate-400">
                                            <span className="text-pink-400 mr-2">▹</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                 {/* Education Section */}
                 <div className="mt-20">
                    <h3 className="text-xl font-bold text-slate-100 mb-6">Education</h3>
                    <div className="grid gap-6">
                        {education.map((edu, i) => (
                            <div key={i} className="bg-slate-800 p-6 rounded hover:-translate-y-1 transition-transform duration-300">
                                <h4 className="text-lg font-bold text-slate-100 flex justify-between">
                                    {edu.school}
                                    <span className="text-sm font-mono text-pink-400">{edu.date}</span>
                                </h4>
                                <p className="text-slate-400 mt-2">{edu.degree}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default About;
