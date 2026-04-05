import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="inline-block px-3 py-1 mb-4 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-sm">
            STATUS: ONLINE_
          </div>

          <h1 className="text-4xl md:text-7xl font-bold font-mono leading-tight mb-4">
            FAISAL <span className="text-white/20">YOUNIS</span>
          </h1>

          <div className="text-xl md:text-3xl text-muted-foreground font-mono h-24 md:h-20 mb-6">
            <span className="text-primary mr-2">&gt;</span>
            <Typewriter
              options={{
                strings: [
                  "MSCS Student @ Georgia Tech",
                  "Full Stack Developer",
                  "Operations Analyst",
                  "Cybersecurity Enthusiast",
                  "Tech Innovator",
                  "Founder of Crewly WF Management WebApp",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Building digital experiences with precision and creativity. 
            Merging analytical thinking with modern web technologies to solve complex problems.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-primary text-background font-bold font-mono rounded hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,255,213,0.4)] transition-all duration-300"
            >
              VIEW_PROJECTS
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-transparent border border-white/20 text-white font-mono rounded hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              CONTACT_ME
            </button>
          </div>

          <div className="flex items-center gap-6 mt-12">
            <a href="https://github.com/fmyounis" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/faisal-younis21" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:fyounis.11@gmail.com" className="text-muted-foreground hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-card shadow-2xl">
              <img 
                src="./assets/Profile-Picture.jpeg" 
                alt="Faisal Younis" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500 scale-105"
              />
            </div>

            {/* Stats Badge */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-background/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-4 flex flex-col items-center justify-center shadow-2xl z-20">
              <span className="text-primary font-bold text-2xl">5+</span>
              <span className="text-[10px] text-muted-foreground uppercase text-center font-mono font-bold leading-tight">Years<br/>Experience</span>
            </div>

            {/* Background elements for depth */}
            <div className="absolute inset-0 bg-primary/20 rounded-2xl transform -rotate-3 z-0 blur-sm scale-95" />
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/50 hover:text-primary transition-colors"
      >
        <ArrowDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
