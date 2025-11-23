import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Careers", path: "/careers" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Cookie Policy", path: "/cookie-policy" },
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://x.com/ByteMatrixTech", label: "Twitter", color: "hover:bg-[#1DA1F2]" },
    { icon: Facebook, href: "https://facebook.com/bytematrixtech", label: "Facebook", color: "hover:bg-[#1877F2]" },
    { icon: Instagram, href: "https://instagram.com/bytematrixtech", label: "Instagram", color: "hover:bg-[#E4405F]" }
  ];

  return (
    <footer className="relative bg-card/50 backdrop-blur-sm border-t border-border/50 mt-20 overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4">
            <Link to="/" className="inline-block group">
              <img
                src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                alt="Byte Matrix Technologies"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                style={{
                  filter: "drop-shadow(0 2px 8px hsl(var(--primary) / 0.3))",
                }}
              />
            </Link>
            <p className="text-xs text-primary font-medium italic mt-3">
              "Connecting Your Digital Matrix"
            </p>
          </div>

          {/* Quick Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-1 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-primary" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & CTA */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <a 
                href="tel:+254724367794"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>+254 724 367 794</span>
              </a>
              <a 
                href="mailto:info@bytematrixtechnologies.co.ke"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="break-all">info@bytematrixtechnologies.co.ke</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span>Nairobi, Kenya</span>
              </div>
            </div>
            <Button 
              asChild
              className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Link to="/contact" className="flex items-center justify-center">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Social Media */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-full bg-muted hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-border ${social.color}`}
                >
                  <social.icon className="w-4 h-4 text-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-xs text-muted-foreground">
                © {currentYear} <span className="text-foreground font-medium">Byte Matrix Technologies</span>. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                Crafted with precision • Powered by innovation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Accent line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;
