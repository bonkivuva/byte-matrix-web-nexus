
import { ArrowRight, Server, Star, Shield, Zap, Sparkles, Network, Cpu, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FuturisticHeader from "@/components/FuturisticHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Testimonials from "@/components/Testimonials";
import ClientLogos from "@/components/ClientLogos";

const Index = () => {
  return (
    <div className="min-h-screen transition-all duration-300">
      <SEOHead 
        title="Byte Matrix Technologies - Enterprise IT Solutions & Digital Transformation"
        description="Leading provider of enterprise IT infrastructure, hardware deployment, cybersecurity solutions, and strategic technology consulting. Trusted by UN agencies, NGOs, and corporations across East Africa."
        keywords="IT infrastructure, enterprise hardware, cybersecurity, cloud solutions, technology consulting, system integration, IT support, Kenya IT services"
      />
      
      <FuturisticHeader />

      {/* Hero Section */}
      <section className="section-spacing relative overflow-hidden pt-32">
        {/* Subtle professional background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-96 h-96 bg-brand-blue/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue-light/6 rounded-full blur-3xl"></div>
        </div>

        <div className="container-professional relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Logo showcase */}
            <div className="mb-16 animate-fade-up">
              <div className="relative inline-block group">
                <img
                  src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                  alt="Byte Matrix Technologies - Enterprise IT Solutions"
                  className="h-40 w-auto mx-auto mb-8 transition-all duration-500 group-hover:scale-105"
                  style={{
                    imageRendering: "crisp-edges",
                    filter: "drop-shadow(0 8px 24px hsl(var(--brand-blue) / 0.2))",
                  }}
                  loading="eager"
                />
              </div>
            </div>

            {/* Tagline */}
            <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center px-8 py-4 glass-professional rounded-full mb-6 border border-brand-blue/10">
                <Sparkles className="w-5 h-5 mr-3 text-brand-blue" />
                <span className="text-lg font-medium text-brand-blue">
                  Connecting Your Digital Matrix
                </span>
              </div>
            </div>

            {/* Main headline */}
            <div className="mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight tracking-tight">
                <span className="text-foreground">Transform Your Business with</span>
                <br />
                <span className="text-gradient-professional">Scalable IT Solutions</span>
              </h1>
            </div>

            {/* Description */}
            <div className="mb-14 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                Minimize downtime. Maximize efficiency. Trusted by UN agencies, NGOs, and corporations across East Africa to deliver enterprise-grade IT infrastructure that powers mission-critical operations.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <Button
                size="lg"
                asChild
                className="bg-brand-blue hover:bg-brand-blue/90 text-white shadow-brand text-lg px-8 py-6 h-auto group"
              >
                <Link to="/contact">
                  <Zap className="mr-2 h-5 w-5" />
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <a
                href="tel:+254724367794"
                className="flex items-center gap-2 text-lg font-semibold text-brand-blue hover:text-brand-blue/80 transition-colors"
              >
                <Phone className="h-5 w-5" />
                +254 724 367 794
              </a>
            </div>
            
            {/* Trust Badge */}
            <div className="mt-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-sm text-muted-foreground">
                Trusted by <span className="font-semibold text-brand-blue">UN agencies, NGOs, and corporations</span> across East Africa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-spacing glass-professional relative">
        <div className="container-professional">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 glass-professional rounded-full mb-8 border border-brand-blue/10">
              <Star className="w-5 h-5 mr-3 text-brand-blue" />
              <span className="text-lg font-medium text-brand-blue">Core Services</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Comprehensive <span className="text-gradient-professional">Technology Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade IT services designed for demanding environments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* IT Infrastructure */}
            <div className="card-premium p-10 text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto bg-gradient-professional rounded-2xl flex items-center justify-center mb-6 shadow-brand group-hover:shadow-brand-lg transition-all duration-500">
                  <Server className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">IT Infrastructure</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Enterprise infrastructure management with secure networks, intelligent monitoring, and 24/7 support for mission-critical operations.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-4 py-2 text-sm bg-brand-blue/10 text-brand-blue rounded-lg font-medium">Cloud Native</span>
                <span className="px-4 py-2 text-sm bg-brand-blue/10 text-brand-blue rounded-lg font-medium">Scalable</span>
              </div>
            </div>

            {/* Hardware Solutions */}
            <div className="card-premium p-10 text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto bg-gradient-professional rounded-2xl flex items-center justify-center mb-6 shadow-brand group-hover:shadow-brand-lg transition-all duration-500">
                  <Cpu className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Enterprise Hardware</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Premium enterprise equipment with professional deployment, configuration, and ongoing maintenance for optimal performance.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-4 py-2 text-sm bg-brand-blue/10 text-brand-blue rounded-lg font-medium">Certified</span>
                <span className="px-4 py-2 text-sm bg-brand-blue/10 text-brand-blue rounded-lg font-medium">Reliable</span>
              </div>
            </div>

            {/* Cybersecurity */}
            <div className="card-premium p-10 text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto bg-gradient-professional rounded-2xl flex items-center justify-center mb-6 shadow-brand group-hover:shadow-brand-lg transition-all duration-500">
                  <Shield className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Cybersecurity</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Advanced threat protection with multi-layered security, compliance support, and 24/7 monitoring for complete peace of mind.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-4 py-2 text-sm bg-brand-blue/10 text-brand-blue rounded-lg font-medium">Secure</span>
                <span className="px-4 py-2 text-sm bg-brand-blue/10 text-brand-blue rounded-lg font-medium">24/7 SOC</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              asChild
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Client Logos Section */}
      <ClientLogos />

      <Footer />
    </div>
  );
};

export default Index;
