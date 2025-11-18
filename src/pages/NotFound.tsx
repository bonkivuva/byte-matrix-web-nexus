import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle, RefreshCw } from "lucide-react";
import FuturisticHeader from "@/components/FuturisticHeader";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-quantum font-cyber text-foreground overflow-hidden">
      <SEOHead 
        title="404 - Page Not Found | Byte Matrix Technologies"
        description="The page you're looking for doesn't exist. Return to Byte Matrix Technologies homepage for IT solutions and services."
        keywords="404 error, page not found, byte matrix technologies"
      />
      
      <FuturisticHeader />
      
      {/* Cyber background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-cyber opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyber-blue/5 rounded-full blur-3xl animate-neural-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/5 rounded-full blur-3xl animate-neural-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative z-10">
        <div className="text-center space-y-8 max-w-2xl mx-auto px-6 animate-fade-up">
          {/* Error icon */}
          <div className="relative">
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center shadow-xl border-2 border-primary/30">
                <AlertTriangle className="w-16 h-16 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Error message */}
          <div className="space-y-4">
            <h1 className="text-8xl font-bold text-gradient-professional mb-4 tracking-tight">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Let us help you find what you need.
            </p>
          </div>

          {/* Quick Links */}
          <div className="bg-card border-2 border-border rounded-2xl p-6 max-w-md mx-auto">
            <h3 className="font-semibold text-foreground mb-4">Popular Pages:</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Link to="/" className="text-primary hover:underline">Home</Link>
              <Link to="/services" className="text-primary hover:underline">Services</Link>
              <Link to="/portfolio" className="text-primary hover:underline">Portfolio</Link>
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
                Contact Support
              </Link>
            </Button>
          </div>

          {/* Help text */}
          <div className="pt-8 text-sm text-muted-foreground">
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
      </div>
    </div>
  );
};

export default NotFound;