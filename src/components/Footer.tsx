import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="font-mono text-lg font-bold">
            <span className="text-primary">&lt;</span>
            <span className="text-foreground">Hailolla</span>
            <span className="text-primary">/&gt;</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with using React and Tailwind
          </p>

          {/* Year */}
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
