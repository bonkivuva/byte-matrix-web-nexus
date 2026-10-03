import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { primaryNavigation, siteConfig } from "@/lib/siteConfig";

const services = ["Managed IT Services", "IT Infrastructure", "Network & Connectivity", "Cloud & Security"];

const Footer = () => {
  const [email, setEmail] = useState("");
  const subscribe = (event: FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent("Newsletter subscription request");
    const body = encodeURIComponent(`Please subscribe ${email} to Byte Matrix Technologies updates.`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="surface-dark border-t border-primary/20">
      <div className="container-professional py-16 lg:py-20">
        <div className="grid gap-12 border-b border-primary-foreground/15 pb-14 lg:grid-cols-[1.25fr_.8fr_1fr_1.15fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <img src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png" alt="" width="56" height="56" className="h-14 w-14 object-contain" />
              <span className="font-display text-lg font-bold">BYTE MATRIX<br/><span className="text-xs text-primary">TECHNOLOGIES</span></span>
            </Link>
            <p className="mt-6 max-w-sm text-sm text-primary-foreground/70">Enterprise-grade managed IT services, infrastructure, hardware procurement, and 24/7 support from Nairobi to the world.</p>
            <div className="mt-6 flex gap-2">
              <a href={siteConfig.socials.x} target="_blank" rel="noreferrer" aria-label="Byte Matrix on X" className="flex h-12 w-12 items-center justify-center border border-primary-foreground/20 font-bold hover:border-primary hover:text-primary">X</a>
              <a href={siteConfig.socials.facebook} target="_blank" rel="noreferrer" aria-label="Byte Matrix on Facebook" className="flex h-12 w-12 items-center justify-center border border-primary-foreground/20 hover:border-primary hover:text-primary"><Facebook className="h-5 w-5" /></a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" aria-label="Byte Matrix on Instagram" className="flex h-12 w-12 items-center justify-center border border-primary-foreground/20 hover:border-primary hover:text-primary"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase text-primary" style={{ letterSpacing: ".12em" }}>Company</h2>
            <ul className="mt-5 space-y-1">
              {primaryNavigation.map((item) => <li key={item.label}><Link to={item.to} className="flex min-h-12 items-center text-sm text-primary-foreground/70 hover:text-primary">{item.label}</Link></li>)}
              <li><Link to="/careers" className="flex min-h-12 items-center text-sm text-primary-foreground/70 hover:text-primary">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase text-primary" style={{ letterSpacing: ".12em" }}>Services</h2>
            <ul className="mt-5 space-y-1">{services.map((item) => <li key={item}><Link to="/services" className="flex min-h-12 items-center text-sm text-primary-foreground/70 hover:text-primary">{item}</Link></li>)}</ul>
            <h2 className="mt-7 text-sm font-bold uppercase text-primary" style={{ letterSpacing: ".12em" }}>Resources</h2>
            <div className="mt-3 flex flex-wrap gap-x-4 text-xs text-primary-foreground/60">
              <Link to="/privacy-policy" className="py-2 hover:text-primary">Privacy</Link><Link to="/terms-of-service" className="py-2 hover:text-primary">Terms</Link><Link to="/cookie-policy" className="py-2 hover:text-primary">Cookies</Link>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase text-primary" style={{ letterSpacing: ".12em" }}>Contact</h2>
            <div className="mt-5 space-y-4 text-sm text-primary-foreground/70">
              <a href={siteConfig.phoneHref} className="flex min-h-12 items-center gap-3 hover:text-primary"><Phone className="h-5 w-5 text-primary" />{siteConfig.phoneDisplay}</a>
              <a href={`mailto:${siteConfig.email}`} className="flex min-h-12 items-center gap-3 break-all hover:text-primary"><Mail className="h-5 w-5 shrink-0 text-primary" />{siteConfig.email}</a>
              <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" />{siteConfig.location}</p>
            </div>
            <form onSubmit={subscribe} className="mt-7">
              <label htmlFor="newsletter" className="text-sm font-semibold">Enterprise insights by email</label>
              <div className="mt-3 flex gap-2">
                <Input id="newsletter" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Work email" className="h-12 border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/45" />
                <Button type="submit" size="icon" aria-label="Request newsletter subscription"><ArrowRight /></Button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-xs text-primary-foreground/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Byte Matrix Technologies. All rights reserved.</p>
          <div className="flex flex-wrap gap-2"><span className="border border-primary-foreground/15 px-3 py-2">ISO-aligned processes</span><span className="border border-primary-foreground/15 px-3 py-2">Microsoft ecosystem</span><span className="border border-primary-foreground/15 px-3 py-2">Cisco solutions</span></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
