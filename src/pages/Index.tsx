
import {
  ArrowRight,
  Server,
  Star,
  Shield,
  Cloud,
  Zap,
  CheckCircle2,
  Sparkles,
  Network,
  Cpu
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FuturisticHeader from "@/components/FuturisticHeader";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins transition-all duration-300">
      <SEOHead 
        title="Byte Matrix Technologies - Professional IT Solutions & Digital Innovation"
        description="Leading IT infrastructure management, enterprise hardware deployment, cybersecurity solutions, and strategic technology consulting. Transform your business with expert IT services."
        keywords="IT infrastructure, enterprise hardware, cybersecurity, cloud solutions, technology consulting, system integration, 24/7 support"
      />
      
      <FuturisticHeader />

      {/* Hero Section */}
      <section className="section-spacing relative overflow-hidden">
        {/* Futuristic background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-pink/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-professional relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Logo showcase */}
            <div className="mb-12 animate-fade-up">
              <div className="relative inline-block">
                <img
                  src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                  alt="Byte Matrix Technologies"
                  className="h-48 w-auto mx-auto mb-8 hover-lift-cyber transition-all duration-500"
                  style={{
                    imageRendering: "crisp-edges",
                    filter: "drop-shadow(0 0 30px hsl(var(--cyber-blue) / 0.3))",
                  }}
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-cyber opacity-20 blur-3xl animate-glow"></div>
              </div>
            </div>

            {/* Tagline */}
            <div className="mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center px-6 py-3 glass-cyber rounded-full mb-6">
                <Sparkles className="w-5 h-5 mr-3 text-cyber-yellow animate-glow" />
                <span className="text-lg font-medium text-gradient-cyber">
                  "Connecting Your Digital Matrix"
                </span>
              </div>
              <div className="w-32 h-1 bg-gradient-cyber mx-auto rounded-full shadow-cyber"></div>
            </div>

            {/* Main headline */}
            <div className="mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Enterprise IT Excellence</span>
                <br />
                <span className="text-gradient-cyber">Delivered with Precision</span>
              </h1>
            </div>

            {/* Description */}
            <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed font-light">
                We specialize in comprehensive IT infrastructure management, enterprise-grade hardware deployment, and
                strategic technology consulting. From quantum-secure networks to AI-powered automation, we transform 
                complex technology challenges into competitive advantages for businesses of all sizes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
              <Button
                size="lg"
                className="btn-cyber text-lg px-10 py-4"
                asChild
              >
                <Link to="/services">
                  <Zap className="mr-3 h-6 w-6" />
                  Get Started
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="btn-cyber-outline text-lg px-10 py-4"
                asChild
              >
                <Link to="/about">
                  <Network className="mr-3 h-6 w-6" />
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-spacing glass-cyber relative">
        <div className="container-professional">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 glass-cyber rounded-full mb-6 border border-cyber-blue/20">
              <Star className="w-5 h-5 mr-3 text-cyber-yellow animate-glow" />
              <span className="text-lg font-medium text-gradient-neon">Our Expertise</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Complete <span className="text-gradient-cyber">Technology Matrix</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
              From quantum-secure infrastructure to AI-powered automation, we deliver comprehensive tech solutions 
              designed for the digital frontier
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* IT Infrastructure */}
            <div className="card-cyber p-8 text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-cyber rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-cyber">
                  <Server className="h-10 w-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-cyber-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">IT Infrastructure</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Next-gen infrastructure management with quantum-secure networks and AI-powered monitoring
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 text-xs bg-cyber-blue/20 text-cyber-blue rounded-full">Cloud Native</span>
                <span className="px-3 py-1 text-xs bg-cyber-purple/20 text-cyber-purple rounded-full">AI Powered</span>
              </div>
            </div>

            {/* Hardware Solutions */}
            <div className="card-cyber p-8 text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-neon rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-cyber">
                  <Cpu className="h-10 w-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-cyber-purple/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Smart Hardware</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Enterprise-grade equipment with neural processing and adaptive performance optimization
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 text-xs bg-cyber-pink/20 text-cyber-pink rounded-full">Neural Chips</span>
                <span className="px-3 py-1 text-xs bg-cyber-green/20 text-cyber-green rounded-full">Self-Healing</span>
              </div>
            </div>

            {/* Cybersecurity */}
            <div className="card-cyber p-8 text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyber-pink to-cyber-yellow rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-cyber">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-cyber-pink/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Quantum Security</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Advanced threat protection with quantum encryption and predictive security analytics
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 text-xs bg-cyber-yellow/20 text-cyber-yellow rounded-full">Quantum Safe</span>
                <span className="px-3 py-1 text-xs bg-cyber-blue/20 text-cyber-blue rounded-full">24/7 AI</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="btn-cyber text-lg px-10 py-4"
              asChild
            >
              <Link to="/services">
                <Network className="mr-3 h-6 w-6" />
                Explore All Solutions
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 glass-cyber border-t border-cyber-blue/20">
        {/* Futuristic background patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="container-professional relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex flex-col items-center md:items-start space-y-4 mb-8 md:mb-0">
              <div className="relative group">
                <img
                  src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                  alt="Byte Matrix Technologies"
                  className="h-16 w-auto hover-lift-cyber transition-all duration-300"
                  loading="lazy"
                  style={{
                    imageRendering: "crisp-edges",
                    filter: "drop-shadow(0 0 10px hsl(var(--cyber-blue) / 0.3))",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg blur-sm"></div>
              </div>
              <p className="text-gradient-neon font-light italic text-lg">
                "Connecting Your Digital Matrix"
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground font-light">
                © 2024 Byte Matrix Technologies. All rights reserved.
              </p>
              <p className="text-cyber-blue mt-2 font-light">
                Next-Gen IT Solutions for Tomorrow's Businesses
              </p>
            </div>
          </div>
          
          <div className="border-t border-cyber-blue/20 pt-8 text-center">
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "Services", path: "/services" },
                { name: "About", path: "/about" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="relative text-muted-foreground hover:text-cyber-blue transition-all duration-300 font-light group px-3 py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-cyber transition-all duration-300 group-hover:w-full"></span>
                  <div className="absolute inset-0 bg-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
