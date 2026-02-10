import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-20 text-center max-w-2xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-pink-400 font-mono mb-4">04. What's Next?</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
                <p className="text-slate-400 text-lg mb-12">
                     I'm currently looking for new opportunities, and my inbox is always open. 
                     Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a
                    href="mailto:manarmarchou6@gmail.com"
                    className="inline-block border border-pink-400 text-pink-400 px-8 py-4 rounded hover:bg-pink-400/10 transition-colors font-mono"
                >
                    Say Hello
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;
