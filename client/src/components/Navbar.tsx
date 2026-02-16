import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Terminal, Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="relative w-10 h-10 flex items-center justify-center bg-card border border-white/10 rounded-lg overflow-hidden group-hover:border-primary/50 transition-colors">
            <Terminal className="w-5 h-5 text-primary group-hover:animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-bold text-lg leading-none tracking-tighter">
              FAISAL<span className="text-primary">.DEV</span>
            </span>
            <span className="text-[10px] text-muted-foreground font-mono">
              FULLSTACK_OP
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors hover:text-glow relative group"
            >
              <span className="text-primary/50 mr-1">&lt;</span>
              {link.name}
              <span className="text-primary/50 ml-1">/&gt;</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <a
            href="./assets/Resume-22.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 font-mono text-sm"
          >
            RESUME.pdf
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left font-mono text-lg py-2 border-b border-white/5 text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-primary mr-2">#</span>
                  {link.name}
                </button>
              ))}
              <a
                href="./assets/Resume-22.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full text-center px-4 py-3 bg-primary text-background font-bold rounded hover:bg-primary/90 transition-colors"
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
