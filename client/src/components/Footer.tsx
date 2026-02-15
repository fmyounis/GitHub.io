import { Terminal } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/10 bg-background relative z-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Terminal className="w-5 h-5" />
          <span className="font-mono text-sm">
            © {currentYear} Faisal Younis. All rights reserved.
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <span className="text-xs font-mono text-muted-foreground">
            System Status: <span className="text-green-500">Operational</span>
          </span>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
}
