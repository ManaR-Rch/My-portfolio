import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-slate-400 text-sm">
            <div className="flex justify-center space-x-6 mb-4 md:hidden">
                 <a
                    href="https://github.com/ManaR-Rch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition-colors"
                >
                    <Github size={20} />
                </a>
                <a
                    href="https://www.linkedin.com/in/marchoube-manar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition-colors"
                >
                    <Linkedin size={20} />
                </a>
            </div>
            <p className="font-mono hover:text-pink-400 transition-colors cursor-default">
                Designed & Built by Marchoube Manar
            </p>
        </footer>
    );
};

export default Footer;
