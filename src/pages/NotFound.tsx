import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle, ArrowRight } from "lucide-react";
import FuturisticHeader from "@/components/FuturisticHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <SEOHead 
        title="404 - Page Not Found | Byte Matrix Technologies"
        description="The page you're looking for doesn't exist. Return to Byte Matrix Technologies homepage for IT solutions and services."
        noIndex
      />
      
      <FuturisticHeader />
      
      <main className="surface-dark min-h-[760px] flex items-center justify-center relative pt-24">
        <div className="text-center space-y-8 max-w-2xl mx-auto px-6 animate-fade-up">
          {/* Error icon */}
          <div className="relative">
            <div className="w-24 h-24 mx-auto mb-8 relative">
              <div className="relative w-full h-full bg-primary/10 flex items-center justify-center border border-primary/30">
                <AlertTriangle className="w-16 h-16 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Error message */}
          <div className="space-y-4">
            <h1 className="text-7xl font-bold text-primary mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-md mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Let us help you find what you need.
            </p>
          </div>

          {/* Quick Links */}
          <div className="bg-primary-foreground/5 border border-primary-foreground/15 p-6 max-w-md mx-auto">
            <h3 className="font-semibold text-foreground mb-4">Popular Pages:</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Link to="/" className="text-primary hover:underline">Home</Link>
              <Link to="/services" className="text-primary hover:underline">Services</Link>
              <Link to="/portfolio" className="text-primary hover:underline">Case Studies</Link>
              <Link to="/contact" className="text-primary hover:underline">Contact</Link>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              asChild 
              className="shadow-lg hover:shadow-xl"
            >
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Return to Homepage
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
            >
              <Link to="/contact">
                Contact Support <ArrowRight />
              </Link>
            </Button>
          </div>

          {/* Help text */}
          <div className="pt-8 text-sm text-primary-foreground/60">
            <p>
              Need assistance? Our{" "}
              <Link 
                to="/contact" 
                className="text-primary hover:underline font-semibold"
              >
                support team
              </Link>{" "}
              is ready to help you.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;