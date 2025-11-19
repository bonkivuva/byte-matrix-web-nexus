import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/" },
        { name: "Our Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Careers", path: "/careers" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "IT Consulting", path: "/services" },
        { name: "Hardware Solutions", path: "/services" },
        { name: "Technical Support", path: "/services" },
        { name: "Cloud Services", path: "/services" },
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "Get in Touch", path: "/contact" },
        { name: "+254 724 367 794", path: "tel:+254724367794", external: true },
        { name: "Email Us", path: "mailto:info@bytematrixtechnologies.co.ke", external: true },
      ]
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+254 724 367 794",
      href: "tel:+254724367794",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@bytematrixtechnologies.co.ke",
      href: "mailto:info@bytematrixtechnologies.co.ke",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: null,
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-card via-background to-card border-t-2 border-primary/20 mt-20 overflow-hidden">
      {/* Vibrant background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Company Info - Takes 4 columns on large screens */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3 group">
              <img
                src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                alt="Byte Matrix Technologies"
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
                style={{
                  filter: "drop-shadow(0 4px 16px hsl(var(--primary) / 0.4))",
                }}
              />
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed max-w-sm">
              Professional IT solutions and digital transformation services for modern businesses. Empowering organizations across East Africa.
            </p>
            <p className="text-base text-primary font-semibold italic bg-primary/10 px-4 py-2 rounded-lg inline-block border border-primary/20">
              "Connecting Your Digital Matrix"
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-3 pt-4">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-sm group">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 border border-primary/20">
                    <info.icon className="w-4 h-4 text-primary" />
                  </div>
                  {info.href ? (
                    <a 
                      href={info.href}
                      className="text-foreground/70 hover:text-primary transition-colors duration-300 font-medium"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-foreground/70 font-medium">{info.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links - Each takes 2-3 columns */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="lg:col-span-2 space-y-5">
              <h3 className="text-lg font-bold text-foreground relative inline-block pb-2">
                {section.title}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    {link.external ? (
                      <a
                        href={link.path}
                        className="text-sm text-foreground/70 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-flex items-center group font-medium"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary" />
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-sm text-foreground/70 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-flex items-center group font-medium"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary" />
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA Section - Takes remaining columns */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="text-lg font-bold text-foreground relative inline-block pb-2">
              Get Started
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Ready to transform your business with cutting-edge IT solutions?
            </p>
            <Button 
              asChild
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Link to="/contact" className="flex items-center justify-center">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media Icons */}
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "https://x.com/ByteMatrixTech", label: "Twitter" },
                { icon: Facebook, href: "https://facebook.com/bytematrixtech", label: "Facebook" },
                { icon: Instagram, href: "https://instagram.com/bytematrixtech", label: "Instagram" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-primary/20 hover:border-primary"
                >
                  <social.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-foreground/60 font-medium">
                &copy; {currentYear} <span className="text-primary font-semibold">Byte Matrix Technologies</span>. All rights reserved.
              </p>
              <p className="text-xs text-foreground/50 mt-1">
                Crafted with precision • Powered by innovation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
    </footer>
  );
};

export default Footer;
