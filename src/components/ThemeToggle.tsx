import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full bg-muted/50 hover:bg-muted transition-all duration-300 overflow-hidden group"
      aria-label="Toggle theme"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Sun 
          className={`absolute w-5 h-5 transition-all duration-500 ${
            isDark 
              ? 'rotate-90 scale-0 opacity-0' 
              : 'rotate-0 scale-100 opacity-100 text-amber-500'
          }`} 
        />
        <Moon 
          className={`absolute w-5 h-5 transition-all duration-500 ${
            isDark 
              ? 'rotate-0 scale-100 opacity-100 text-brand-blue' 
              : '-rotate-90 scale-0 opacity-0'
          }`} 
        />
      </div>
      
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        isDark 
          ? 'bg-brand-blue/10' 
          : 'bg-amber-500/10'
      }`} />
    </Button>
  );
};

export default ThemeToggle;
