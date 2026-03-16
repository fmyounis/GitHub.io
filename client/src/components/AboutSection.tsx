import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Cpu, Globe, Database, Shield } from "lucide-react";

export function AboutSection() {
  const cards = [
  {
    icon: <Cpu className="w-8 h-8 text-blue-400" />,
    title: "AI & Automation",
    description: "Designing and implementing AI-driven solutions to automate complex workflows and enhance operational efficiency."
  },
  {
    icon: <Database className="w-8 h-8 text-secondary" />,
    title: "Data Intelligence",
    description: "Transforming raw data into strategic insights using advanced analytics and machine learning models."
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Full Stack Development",
    description: "Building responsive, scalable applications with modern frameworks and cloud-native technologies."
  },
  {
    icon: <Shield className="w-8 h-8 text-red-400" />,
    title: "Process Optimization",
    description: "Streamlining operations through automation, reducing manual effort by 60-80% in key business processes."
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
  I'm a <strong className="text-primary">Senior Operations Analyst</strong> at <strong>Nasdaq Verafin</strong> with a passion for <strong className="text-white">automation</strong> and <strong className="text-white">innovation</strong>. As a top performer in a fast-paced fintech environment, I've developed a reputation for <strong className="text-white">solving complex problems</strong> and <strong className="text-white">delivering results</strong> under tight deadlines.
</p>
<p className="mb-6">
  My journey in tech is driven by an insatiable curiosity for <strong className="text-white">optimizing systems</strong> and <strong className="text-white">streamlining processes</strong>. I specialize in automating repetitive tasks and architecting scalable solutions, thriving on finding elegant approaches to challenging problems.
</p>
<p className="mb-6">
  Currently pursuing my <span className="text-primary">Master's in Computer Science at Georgia Tech</span>, I'm constantly expanding my technical toolkit to stay at the forefront of emerging technologies. My background at <span className="text-primary">Canada Revenue Agency</span> and <span className="text-primary">Nasdaq Verafin</span> has honed my ability to bridge the gap between technical implementation and business objectives.
</p>
<p>
  When I'm not coding, you'll find me exploring the latest in <strong className="text-white">cybersecurity trends</strong>, experimenting with <strong className="text-white">new technologies</strong>, or working on <strong className="text-white">personal coding projects</strong>.
</p>
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
