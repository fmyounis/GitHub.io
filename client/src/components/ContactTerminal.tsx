import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Terminal } from "lucide-react";

export function ContactTerminal() {

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="0xINIT_COMM" 
          subtitle="Establish a connection." 
          align="center" 
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-8 font-mono text-sm min-h-[300px]"
          >
            <div className="flex items-center gap-2 text-white/50 mb-6">
              <Terminal className="w-5 h-5" />
              <span>contact_terminal</span>
            </div>

            <div className="space-y-4 text-white/80">
              <p>Welcome to my contact terminal.</p>
              <p>For inquiries, please email:</p>
              <p className="text-primary font-medium">fyounis.11@gmail.com</p>
              <p className="pt-4">I'll get back to you as soon as possible.</p>
              <p className="text-white/60 mt-8">&gt; _</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
