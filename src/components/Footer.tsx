import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
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

  return (
    <footer className="relative bg-gradient-to-br from-neural-900 via-neural-800 to-neural-900 text-foreground py-16 mt-20 border-t border-brand-blue/10">
      {/* Subtle background effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                alt="Byte Matrix Technologies"
                className="h-12 w-auto"
                style={{
                  filter: "drop-shadow(0 4px 12px hsl(var(--brand-blue) / 0.3))",
                }}
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Professional IT solutions and digital transformation services for modern businesses.
            </p>
            <p className="text-sm text-brand-blue font-medium italic">
              "Connecting Your Digital Matrix"
            </p>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    {link.external ? (
                      <a
                        href={link.path}
                        className="text-sm text-muted-foreground hover:text-brand-blue transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-sm text-muted-foreground hover:text-brand-blue transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="border-t border-brand-blue/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6">
              <a
                href="https://x.com/ByteMatrixTech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand-blue transition-all duration-300 hover:scale-110"
                aria-label="Follow us on X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1BSjKFRCUd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand-blue transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/byte_matrix_technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand-blue transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>Cookie Policy</span>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-brand-blue/5 rounded-xl p-6 mb-8 border border-brand-blue/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-sm text-foreground mb-1">Our Office</h4>
                <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <Phone className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-sm text-foreground mb-1">Call Us</h4>
                <a href="tel:+254724367794" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">
                  +254 724 367 794
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <Mail className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-sm text-foreground mb-1">Email Us</h4>
                <a href="mailto:info@bytematrixtechnologies.co.ke" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">
                  info@bytematrixtechnologies.co.ke
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-brand-blue/10">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Byte Matrix Technologies. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Professional IT Solutions | Enterprise Hardware | Technical Support | Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
