import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Careers", path: "/careers" },
        { name: "Contact", path: "/contact" },
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
    { icon: Facebook, href: "https://facebook.com/bytematrixtech", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/bytematrixtech", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/bytematrixtech", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[hsl(222,47%,11%)] text-white mt-auto">
      <div className="container-professional py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                alt="Byte Matrix Technologies"
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm font-semibold text-blue-400">
              Connecting Your Digital Matrix
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transforming businesses through innovative digital solutions and cutting-edge technology.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <a href="tel:+254724367794" className="flex items-center gap-3 text-sm text-gray-400 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                +254 724 367 794
              </a>
              <a href="mailto:info@bytematrixtechnologies.co.ke" className="flex items-center gap-3 text-sm text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="break-all">info@bytematrixtechnologies.co.ke</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                Nairobi, Kenya
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-400 text-center">
              © 2025 Byte Matrix Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
