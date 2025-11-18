import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, X } from "lucide-react";
import { Link } from "react-router-dom";

const StickyCTABar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 300) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 animate-fade-in">
      <div className="bg-gradient-to-r from-primary via-primary/95 to-primary shadow-lg border-b-2 border-primary-foreground/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 gap-4">
            <div className="flex items-center gap-2 text-primary-foreground">
              <Phone className="w-5 h-5 hidden sm:block" />
              <p className="text-sm sm:text-base font-semibold">
                Ready to transform your business? Get a free consultation today!
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                asChild
                size="sm"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 font-semibold shadow-md whitespace-nowrap"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
              
              <button
                onClick={handleDismiss}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors p-1"
                aria-label="Dismiss notification"
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

export default StickyCTABar;
