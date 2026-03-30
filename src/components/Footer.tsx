import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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

  const XIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  const socialLinks = [
    { icon: XIcon, href: "https://x.com/ByteMatrixTech", label: "X", isCustom: true },
    { icon: Facebook, href: "https://facebook.com/bytematrixtech", label: "Facebook", isCustom: false },
    { icon: Instagram, href: "https://instagram.com/bytematrixtech", label: "Instagram", isCustom: false }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-background via-muted/30 to-muted/50 border-t border-border/50 mt-auto overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/3 to-transparent rounded-full" />
      </div>

      <div className="container-professional py-12 lg:py-16 relative z-10">
        {/* Main footer grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-5">
            <Link to="/" className="inline-block group">
              <motion.img
                src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                alt="Byte Matrix Technologies"
                className="h-12 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                style={{
                  filter: "drop-shadow(0 4px 12px hsl(var(--primary) / 0.4))",
                }}
              />
            </Link>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <p className="text-sm text-primary font-medium italic bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                "Connecting Your Digital Matrix"
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforming businesses through innovative digital solutions and cutting-edge technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          {footerLinks.map((section, idx) => (
            <motion.div key={idx} variants={itemVariants} className="space-y-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 inline-flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary" />
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact & CTA */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
              Get In Touch
            </h3>
            <div className="space-y-3">
              <a 
                href="tel:+254724367794"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 group-hover:scale-110 border border-primary/10">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">+254 724 367 794</span>
              </a>
              <a 
                href="mailto:info@bytematrixtechnologies.co.ke"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 group-hover:scale-110 border border-primary/10 flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium text-xs sm:text-sm whitespace-nowrap">info@bytematrixtechnologies.co.ke</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/10">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">Nairobi, Kenya</span>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                asChild
                className="w-full mt-4 bg-gradient-to-r from-primary via-primary to-accent hover:from-primary/90 hover:via-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group relative overflow-hidden"
              >
                <Link to="/contact" className="flex items-center justify-center">
                  <span className="relative z-10 flex items-center">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="relative py-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-border to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          
          {/* Social Media */}
          <div className="flex gap-3">
            {socialLinks.map((social, idx) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-muted to-muted/50 hover:from-primary hover:to-accent flex items-center justify-center transition-all duration-300 group border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.isCustom ? (
                    <IconComponent />
                  ) : (
                    <IconComponent className="w-4 h-4 text-foreground group-hover:text-primary-foreground transition-colors" />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right space-y-1">
            <p className="text-sm text-muted-foreground">
              © {currentYear}{" "}
              <span className="font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Byte Matrix Technologies
              </span>
              . All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/60 flex items-center justify-center md:justify-end gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse" />
              Crafted with precision • Powered by innovation
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
