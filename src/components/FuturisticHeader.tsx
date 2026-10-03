import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { primaryNavigation } from "@/lib/siteConfig";

interface FuturisticHeaderProps { currentPage?: string }

const FuturisticHeader = (_props: FuturisticHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname, location.hash]);

  const isActive = (to: string) => {
    const [path, hash] = to.split("#");
    return location.pathname === path && (!hash || location.hash === `#${hash}`);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled || isOpen ? "border-border/70 bg-background/95 shadow-corporate backdrop-blur-xl" : "border-transparent bg-background/80 backdrop-blur-md"}`}>
      <div className="container-professional flex h-[84px] items-center justify-between gap-5">
        <Link to="/" className="flex min-h-12 items-center gap-3" aria-label="Byte Matrix Technologies home">
          <img src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png" alt="" width="48" height="48" className="h-11 w-11 object-contain" />
          <div className="hidden sm:block">
            <span className="block font-display text-sm font-bold leading-tight text-foreground">BYTE MATRIX</span>
            <span className="block text-[10px] font-bold uppercase text-primary" style={{ letterSpacing: ".16em" }}>TECHNOLOGIES</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <Link key={item.label} to={item.to} className={`flex min-h-12 items-center border-b-2 px-4 text-sm font-semibold transition-colors ${isActive(item.to) ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:border-primary/40 hover:text-foreground"}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex">
            <Link to="/contact">Request a Quote <ArrowUpRight /></Link>
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden h-12 w-12" onClick={() => setIsOpen((value) => !value)} aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <nav className="border-t border-border bg-background px-5 pb-6 pt-3 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col">
            {primaryNavigation.map((item) => (
              <Link key={item.label} to={item.to} className={`flex min-h-12 items-center justify-between border-b border-border text-base font-semibold ${isActive(item.to) ? "text-primary" : "text-foreground"}`}>
                {item.label}<ArrowUpRight className="h-4 w-4" />
              </Link>
            ))}
            <Button asChild className="mt-5 w-full"><Link to="/contact">Request a Quote</Link></Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default FuturisticHeader;
