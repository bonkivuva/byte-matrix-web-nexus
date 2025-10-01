import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Moon, 
  Sun, 
  Menu, 
  X,
  Zap,
  ChevronRight 
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
    { path: '/', label: 'About', name: 'about' },
    { path: '/services', label: 'Services', name: 'services' },
    { path: '/portfolio', label: 'Portfolio', name: 'portfolio' },
    { path: '/careers', label: 'Careers', name: 'careers' },
    { path: '/contact', label: 'Contact', name: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-cyber border-b border-cyber-blue/20 backdrop-blur-xl">
      <div className="container-professional">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group hover-lift-cyber"
          >
            <div className="relative">
              <img
                src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                alt="Byte Matrix Technologies"
                className="h-12 w-auto transition-all duration-300 group-hover:scale-110"
                loading="eager"
                style={{
                  imageRendering: "crisp-edges",
                  filter: "drop-shadow(0 0 10px hsl(var(--cyber-blue) / 0.3))",
                }}
              />
              <div className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg blur-sm"></div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-gradient-cyber">
                Byte Matrix Technologies
              </h1>
              <p className="text-xs text-cyber-blue font-light italic">
                "Connecting Your Digital Matrix"
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  isActive(link.path)
                    ? 'text-cyber-blue bg-cyber-blue/10'
                    : 'text-foreground hover:text-cyber-blue'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive(link.path) && (
                  <div className="absolute inset-0 bg-gradient-cyber opacity-10 rounded-lg"></div>
                )}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-cyber transition-all duration-300 group-hover:w-full"></div>
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Dark mode toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="relative w-10 h-10 rounded-full hover:bg-cyber-blue/10 transition-all duration-300 group"
            >
              <div className="relative">
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-cyber-yellow transition-all duration-300 group-hover:scale-110" />
                ) : (
                  <Moon className="h-5 w-5 text-cyber-purple transition-all duration-300 group-hover:scale-110" />
                )}
                <div className="absolute inset-0 rounded-full bg-gradient-cyber opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              </div>
            </Button>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                asChild
                className="btn-cyber relative overflow-hidden group"
              >
                <Link to="/contact">
                  <Zap className="w-4 h-4 mr-2" />
                  Get Started
                  <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="lg:hidden w-10 h-10 rounded-full hover:bg-cyber-blue/10 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-cyber-pink" />
              ) : (
                <Menu className="h-5 w-5 text-cyber-blue" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass-cyber border-t border-cyber-blue/20 backdrop-blur-xl animate-fade-up">
            <nav className="container-professional py-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl group ${
                      isActive(link.path)
                        ? 'text-cyber-blue bg-cyber-blue/10 border border-cyber-blue/20'
                        : 'text-foreground hover:text-cyber-blue hover:bg-cyber-blue/5'
                    }`}
                  >
                    <span className="flex-1">{link.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                  </Link>
                ))}
                <div className="pt-4 border-t border-cyber-blue/20">
                  <Button 
                    asChild
                    className="btn-cyber w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link to="/contact">
                      <Zap className="w-4 h-4 mr-2" />
                      Get Started
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