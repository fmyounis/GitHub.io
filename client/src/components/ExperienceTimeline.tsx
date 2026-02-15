import { motion } from "framer-motion";
import { useExperience } from "@/hooks/use-portfolio";
import { SectionHeading } from "./SectionHeading";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function ExperienceTimeline() {
  const { data: experiences, isLoading } = useExperience();

  return (
    <section id="experience" className="py-20 md:py-32 bg-black/20">
      <div className="container mx-auto px-4">
        <SectionHeading title="EXPERIENCE_LOG" subtitle="My professional journey through operations and tech." align="center" />

        <div className="max-w-4xl mx-auto mt-16 relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 transform -translate-x-1/2 hidden md:block" />
          <div className="absolute left-[20px] top-0 bottom-0 w-0.5 bg-white/10 md:hidden" />

          {isLoading ? (
            <div className="space-y-12">
              {[1, 2].map((i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8">
                  <Skeleton className="w-full h-48 rounded-xl bg-card/50" />
                </div>
              ))}
            </div>
          ) : (
            experiences?.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary transform -translate-x-1/2 mt-6 z-10 shadow-[0_0_10px_rgba(0,255,213,0.5)] hidden md:block" />
                <div className="absolute left-[20px] w-4 h-4 rounded-full bg-background border-2 border-primary transform -translate-x-1/2 mt-6 z-10 md:hidden" />

                {/* Content */}
                <div className="md:w-1/2 md:px-12 pl-12">
                  <div className="bg-card border border-white/10 p-6 rounded-xl hover:border-primary/30 transition-all duration-300 relative group">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                          <Calendar className="w-3 h-3" />
                          {exp.startDate} - {exp.endDate || "Present"}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 font-mono">
                        <Briefcase className="w-3 h-3" />
                        <span>{exp.company}</span>
                        {exp.location && (
                          <>
                            <span className="mx-1">•</span>
                            <MapPin className="w-3 h-3" />
                            <span>{exp.location}</span>
                          </>
                        )}
                      </div>

                      <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {exp.achievements && exp.achievements.length > 0 && (
                        <ul className="space-y-2">
                          {exp.achievements.map((item, i) => (
                            <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                              <span className="text-secondary mt-1">▹</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
