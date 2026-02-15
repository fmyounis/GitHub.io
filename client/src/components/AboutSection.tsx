import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Cpu, Globe, Database, Shield } from "lucide-react";

export function AboutSection() {
  const cards = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Full Stack Development",
      description: "Building responsive, scalable web applications using modern frameworks like React, Node.js, and Next.js."
    },
    {
      icon: <Database className="w-8 h-8 text-secondary" />,
      title: "Data Analysis",
      description: "Transforming complex datasets into actionable insights using SQL, Python, and visualization tools."
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      title: "Operations Strategy",
      description: "Optimizing workflows and processes to enhance efficiency and reduce operational friction."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Secure Systems",
      description: "Implementing security best practices to protect data integrity and user privacy."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="ABOUT_ME" subtitle="A blend of analytical precision and creative coding." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert prose-lg max-w-none font-sans text-muted-foreground"
          >
            <p className="mb-6">
              I am an experienced <strong className="text-white">Operations Analyst</strong> turned <strong className="text-white">Full Stack Developer</strong>. 
              My background at the <span className="text-primary">Canada Revenue Agency</span> and <span className="text-primary">Nasdaq Verafin</span> has instilled a disciplined, 
              detail-oriented approach to problem-solving.
            </p>
            <p className="mb-6">
              I don't just write code; I build systems. I leverage my operational expertise to create software that is not only functional but also efficient, 
              maintainable, and user-centric. I thrive in environments where technology meets business strategy.
            </p>
            <p>
              When I'm not coding, I'm exploring the latest in cybersecurity trends, optimizing my personal server setup, or experimenting with new IoT devices.
            </p>
            <div className="relative group max-w-sm mx-auto mt-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-card"
              >
                <img 
                  src="/profile.jpg" 
                  alt="Faisal Younis" 
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-white/5 p-6 rounded-xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="mb-4 bg-background/50 w-12 h-12 rounded-lg flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold font-mono text-white mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
