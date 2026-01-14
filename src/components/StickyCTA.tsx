import { useEffect, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 50% of viewport
      const scrollThreshold = window.innerHeight * 0.5;
      setIsVisible(window.scrollY > scrollThreshold && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 transform transition-all duration-500">
      <div className="bg-gradient-to-r from-brand-blue to-brand-blue-light shadow-2xl">
        <div className="container-professional">
          <div className="flex items-center justify-between py-3 px-4 md:py-4">
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <p className="text-white font-semibold text-sm md:text-base">
                  Ready to transform your IT infrastructure?
                </p>
                <p className="text-white/80 text-xs md:text-sm">
                  Get a free consultation today
                </p>
              </div>
              <p className="text-white font-semibold text-sm md:hidden">
                Get a free consultation
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <Button
                asChild
                size="sm"
                className="bg-white text-brand-blue hover:bg-white/90 font-semibold shadow-lg"
              >
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              
              <button
                onClick={() => setIsDismissed(true)}
                className="p-2 text-white/80 hover:text-white transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
