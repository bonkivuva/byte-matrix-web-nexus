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
              <div className="absolute inset-0 bg-gradient-cyber rounded-full opacity-20 animate-cyber-glow"></div>
              <div className="relative w-full h-full bg-gradient-cyber rounded-full flex items-center justify-center backdrop-blur-sm border border-cyber-blue/30">
                <AlertTriangle className="w-16 h-16 text-cyber-yellow" />
              </div>
            </div>
          </div>

          {/* Error message */}
          <div className="space-y-4">
            <h1 className="text-8xl font-bold text-gradient-cyber mb-4 tracking-tight">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-cyber-blue mb-4">
              Neural Network Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              The digital matrix you're looking for has been disconnected. Let us help you navigate back to the secure network.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              asChild 
              className="btn-cyber hover-lift-cyber group"
            >
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Return to Matrix
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => window.location.reload()}
              className="glass-cyber border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue/10 group"
            >
              <RefreshCw className="w-5 h-5 mr-2 group-hover:animate-spin" />
              Reconnect
            </Button>
          </div>

          {/* Help text */}
          <div className="pt-8 text-sm text-muted-foreground">
            <p>
              Lost in the digital matrix? Contact our{" "}
              <Link 
                to="/contact" 
                className="text-cyber-blue hover:text-cyber-purple transition-colors duration-300 underline decoration-cyber-blue/30 hover:decoration-cyber-purple/30"
              >
                support team
              </Link>{" "}
              for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;