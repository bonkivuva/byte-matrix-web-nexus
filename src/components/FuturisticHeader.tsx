import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Moon, 
  Sun, 
  Menu, 
  X,
  Zap,
  ChevronRight,
  Phone 
} from 'lucide-react';

interface FuturisticHeaderProps {
  currentPage?: string;
}

const FuturisticHeader: React.FC<FuturisticHeaderProps> = ({ currentPage }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' || 
             document.documentElement.classList.contains('dark');
    }
    return false;
  });
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Dark mode effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/about', label: 'About', name: 'about' },
    { path: '/services', label: 'Services', name: 'services' },
    { path: '/portfolio', label: 'Portfolio', name: 'portfolio' },
    { path: '/careers', label: 'Careers', name: 'careers' },
    { path: '/contact', label: 'Contact', name: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 transition-all duration-300">
      <div className="container-professional">
        <div className="flex h-16 lg:h-[68px] items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group transition-all duration-300"
          >
            <div className="relative">
              <img
                src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                alt="Byte Matrix Technologies"
                className="h-9 w-auto transition-all duration-300 group-hover:scale-105"
                loading="eager"
                style={{
                  filter: "drop-shadow(0 2px 8px hsl(var(--primary) / 0.15))",
                }}
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary tracking-wide">
                BYTE MATRIX TECHNOLOGIES
              </h1>
              <p className="text-xs text-primary font-medium uppercase tracking-wider">
                Connecting Your Digital Matrix
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/5'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive(link.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Phone number - hidden on mobile */}
            <a
              href="tel:+254724367794"
              className="hidden xl:flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
            >
              <Phone className="mr-2 h-4 w-4" />
              +254 724 367 794
            </a>

            {/* Dark mode toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="w-9 h-9 rounded-lg hover:bg-muted transition-colors"
            >
              <Sun 
                className={`absolute h-4 w-4 transition-all duration-300 ${
                  isDarkMode 
                    ? 'rotate-90 scale-0 opacity-0' 
                    : 'rotate-0 scale-100 opacity-100 text-amber-500'
                }`} 
              />
              <Moon 
                className={`absolute h-4 w-4 transition-all duration-300 ${
                  isDarkMode 
                    ? 'rotate-0 scale-100 opacity-100 text-primary' 
                    : '-rotate-90 scale-0 opacity-0'
                }`} 
              />
            </Button>

            {/* CTA Button */}
            <div className="hidden sm:block">
              <Button 
                asChild
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <Link to="/contact">
                  Get Consultation
                </Link>
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="lg:hidden w-9 h-9 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border animate-fade-up">
            <nav className="container-professional py-4">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg ${
                      isActive(link.path)
                        ? 'text-primary bg-primary/5'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    <span className="flex-1">{link.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-40" />
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-border">
                  <Button 
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link to="/contact">
                      Get Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default FuturisticHeader;