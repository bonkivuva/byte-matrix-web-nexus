import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";

interface ProfessionalHeaderProps {
  currentPage?: string;
}

const ProfessionalHeader = ({ currentPage }: ProfessionalHeaderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize from localStorage or default to false
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Apply dark mode class and save to localStorage
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

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "About", name: "about" },
    { path: "/services", label: "Services", name: "services" },
    { path: "/portfolio", label: "Portfolio", name: "portfolio" },
    { path: "/contact", label: "Contact", name: "contact" },
    { path: "/career", label: "Careers", name: "careers" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-200/30 dark:border-blue-800/30 bg-gradient-to-r from-blue-600/95 via-blue-700/95 to-blue-800/95 backdrop-blur-xl shadow-professional">
      <div className="container-professional">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="text-2xl font-bold text-white hover:scale-105 transition-transform duration-300">
              Byte Matrix Technologies
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive(link.path) || currentPage === link.name
                    ? "text-white dark:text-white font-semibold"
                    : "text-white/80 dark:text-white/80 hover:text-white dark:hover:text-white"
                }`}
              >
                {link.label}
                {(isActive(link.path) || currentPage === link.name) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white rounded-full" />
                )}
              </Link>
            ))}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="ml-4 h-9 w-9 rounded-full"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4 text-yellow-500" />
              ) : (
                <Moon className="h-4 w-4 text-white/80" />
              )}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="h-9 w-9 rounded-full"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4 text-yellow-500" />
              ) : (
                <Moon className="h-4 w-4 text-white/80" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="h-9 w-9 rounded-full"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-white/80" />
              ) : (
                <Menu className="h-5 w-5 text-white/80" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 dark:border-white/20 py-4 animate-fade-up">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive(link.path) || currentPage === link.name
                      ? "text-white dark:text-white bg-white/20 dark:bg-white/20 rounded-lg font-semibold"
                      : "text-white/80 dark:text-white/80 hover:text-white dark:hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default ProfessionalHeader;
