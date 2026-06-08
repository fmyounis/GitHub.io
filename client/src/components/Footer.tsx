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
      </div>
    </footer>
  );
}
