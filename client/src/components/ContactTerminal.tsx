import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Loader2, Send, Terminal } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactTerminal() {
  const { mutate, isPending } = useSubmitContact();
  const [outputLog, setOutputLog] = useState<string[]>([]);
  
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertMessage) => {
    setOutputLog(prev => [...prev, `> Initializing transmission...`]);
    setOutputLog(prev => [...prev, `> Packing data: { name: "${data.name}", email: "${data.email}" }`]);
    
    mutate(data, {
      onSuccess: () => {
        setOutputLog(prev => [...prev, `> Transmission successful. Status: 200 OK`]);
        setOutputLog(prev => [...prev, `> Message sent.`]);
        form.reset();
      },
      onError: (err) => {
        setOutputLog(prev => [...prev, `> ERROR: ${err.message}`]);
        setOutputLog(prev => [...prev, `> Retrying connection... failed.`]);
      }
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="INIT_COMM" subtitle="Establish a connection." align="center" />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Terminal Window - Decoration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black border border-white/10 rounded-lg overflow-hidden font-mono text-sm shadow-2xl"
          >
            <div className="bg-white/5 p-2 px-4 border-b border-white/10 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-muted-foreground text-xs">root@faisal-server:~</span>
            </div>
            <div className="p-6 h-[400px] overflow-y-auto text-green-400">
              <p className="mb-2"><span className="text-blue-400">root@faisal-server:~$</span> ./contact_me.sh</p>
              <p className="mb-4 text-white">Initializing contact protocol v2.0...</p>
              <p className="mb-4">
                Looking for new opportunities?<br/>
                Want to collaborate on a project?<br/>
                Or just want to say hi?
              </p>
              <p className="mb-4 text-white">Ready for input...</p>
              
              {outputLog.map((log, i) => (
                <p key={i} className="mb-1 text-white/80">{log}</p>
              ))}
              
              <p className="mt-2 animate-pulse">_</p>
            </div>
          </motion.div>

          {/* Actual Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-white/10 rounded-xl p-8 shadow-xl"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Identifier (Name)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Jane Doe" 
                          {...field} 
                          className="bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 font-mono"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Return Address (Email)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="jane@example.com" 
                          {...field} 
                          className="bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 font-mono"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Payload (Message)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Type your message here..." 
                          className="min-h-[120px] bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 font-mono resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-4 bg-primary/10 border border-primary/50 text-primary font-bold font-mono rounded hover:bg-primary hover:text-background transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      SEND_TRANSMISSION
                    </>
                  )}
                </button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
