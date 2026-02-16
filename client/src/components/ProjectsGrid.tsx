import { motion } from "framer-motion";
import { useProjects } from "@/hooks/use-portfolio";
import { SectionHeading } from "./SectionHeading";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function ProjectsGrid() {
  const { data: projects, isLoading } = useProjects();

  return (
    <section id="projects" className="py-20 md:py-32 bg-black/40">
      <div className="container mx-auto px-4">
        <SectionHeading title="DEPLOYED_WORKS" subtitle="Selected projects and experiments." align="left" />

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-80 rounded-xl bg-card/50" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-card border border-white/10 rounded-xl overflow-hidden hover:border-secondary/50 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Area - Fallback to abstract pattern if no image */}
                <div className="h-48 overflow-hidden bg-muted relative">
                  {project.imageUrl ? (
                    <>
                      {/* Unsplash Image with Comment */}
                      {/* Projects get abstract tech images */}
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                      />
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4">
                      <Folder className="w-16 h-16 text-white/10 group-hover:text-secondary/20 transition-colors" />
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-60" />

                  {/* Floating Links */}
                  <div className="absolute bottom-4 right-4 flex gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {project.repoUrl && (
                      <a 
                        href={project.repoUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-card rounded-full border border-white/20 hover:border-primary text-white hover:text-primary transition-colors"
                        title="View Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-card rounded-full border border-white/20 hover:border-secondary text-white hover:text-secondary transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold font-mono text-white mb-2 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack?.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 border border-white/5 text-gray-400 group-hover:border-secondary/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
