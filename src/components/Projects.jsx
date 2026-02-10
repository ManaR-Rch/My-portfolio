import { Github, ExternalLink, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: "Delivery Optimizer",
            description: "A logistics optimization system featuring a REST API for managing clients, warehouses, and deliveries. Includes data validation and an optimization algorithm (Callima) for efficient delivery routes.",
            tech: ["Java", "Spring Boot", "JUnit", "JIRA", "Algorithm"],
            github: "https://github.com/ManaR-Rch", 
            external: null,
        },
        {
            title: "STAFFHUB",
            description: "HR web application for managing employee and admin roles. Built with Laravel MVC architecture, featuring secure authentication and role-based access control.",
            tech: ["Laravel", "PostgreSQL", "Tailwind CSS", "MVC"],
            github: "https://github.com/ManaR-Rch",
            external: null,
        },
    ];

    return (
        <section id="projects" className="py-20">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mr-4">
                        <span className="text-pink-400 font-mono mr-2">03.</span> Some Things I've Built
                    </h2>
                    <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, i) => (
                        <div key={i} className="bg-slate-800 p-8 rounded shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full bg-slate-800 group border border-slate-700 hover:border-pink-400/50">
                            <div className="flex justify-between items-center mb-8">
                                <Folder size={40} className="text-pink-400" />
                                <div className="flex space-x-4">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-pink-400 transition-colors">
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.external && (
                                        <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-pink-400 transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                            
                            <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-pink-400">
                                <a href={project.github || '#'} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    {project.title}
                                </a>
                            </h3>
                            
                            <p className="text-slate-400 mb-6 flex-grow">
                                {project.description}
                            </p>
                            
                            <ul className="flex flex-wrap gap-2 mt-auto font-mono text-xs text-slate-500">
                                {project.tech.map((t, idx) => (
                                    <li key={idx} className="mr-2">{t}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
