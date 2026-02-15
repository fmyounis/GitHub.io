import { motion } from "framer-motion";
import { useSkills } from "@/hooks/use-portfolio";
import { SectionHeading } from "./SectionHeading";
import { Skeleton } from "@/components/ui/skeleton";
import { Code2, Database, Layout, Server, Settings, TerminalSquare } from "lucide-react";

export function SkillsMatrix() {
  const { data: skills, isLoading } = useSkills();

  // Group skills by category
  const groupedSkills = skills?.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "frontend": return <Layout className="w-5 h-5 text-primary" />;
      case "backend": return <Server className="w-5 h-5 text-secondary" />;
      case "devops": return <Settings className="w-5 h-5 text-blue-400" />;
      case "languages": return <Code2 className="w-5 h-5 text-yellow-400" />;
      case "data": return <Database className="w-5 h-5 text-green-400" />;
      default: return <TerminalSquare className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <SectionHeading title="SKILL_MATRIX" subtitle="Technologies and tools I leverage to build solutions." />

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-40 rounded-xl bg-card/50" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupedSkills && Object.entries(groupedSkills).map(([category, categorySkills], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card/40 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] group"
              >
                <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-3">
                  {getCategoryIcon(category)}
                  <h3 className="text-lg font-bold font-mono text-white">{category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.id}
                      className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-md text-sm text-muted-foreground hover:text-white transition-colors border border-transparent hover:border-white/10 cursor-default"
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>

                {/* Progress bars for high proficiency skills */}
                <div className="mt-6 space-y-3">
                  {categorySkills.filter(s => (s.proficiency || 0) > 85).slice(0, 2).map(skill => (
                    <div key={skill.id} className="text-xs">
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-400">{skill.name}</span>
                        <span className="text-primary font-mono">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
