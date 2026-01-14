
import { ArrowRight, Server, Shield, Cpu, Phone, CheckCircle2, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FuturisticHeader from "@/components/FuturisticHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ClientLogos from "@/components/ClientLogos";
import FloatingActions from "@/components/FloatingActions";
import StickyCTA from "@/components/StickyCTA";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParallaxSection from "@/components/ParallaxSection";

const Index = () => {
  const stats = [
    { icon: Users, value: 500, suffix: "+", label: "Clients Served" },
    { icon: Award, value: 10, suffix: "+", label: "Years Experience" },
    { icon: Clock, value: 99.9, suffix: "%", label: "Uptime Guarantee", decimals: 1 },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Byte Matrix Technologies - Enterprise IT Solutions & Digital Transformation"
        description="Leading provider of enterprise IT infrastructure, hardware deployment, cybersecurity solutions, and strategic technology consulting. Trusted by UN agencies, NGOs, and corporations across East Africa."
        keywords="IT infrastructure, enterprise hardware, cybersecurity, cloud solutions, technology consulting, system integration, IT support, Kenya IT services"
      />
      
      <FuturisticHeader />

      {/* Hero Section - Clean & Professional */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/[0.02] via-transparent to-transparent" />
        
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[10%] w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-brand-blue-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-brand-blue/5 to-transparent rounded-full" />
        </div>
        
        <div className="container-professional relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Tagline Badge */}
            <ScrollReveal>
              <div className="mb-8">
                <span className="inline-flex items-center px-4 py-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-sm font-medium text-brand-blue">
                  <span className="w-2 h-2 bg-brand-blue rounded-full mr-2 animate-pulse" />
                  Connecting Your Digital Matrix
                </span>
              </div>
            </ScrollReveal>

            {/* Main Headline */}
            <ScrollReveal delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
                Enterprise IT Solutions
                <br />
                <span className="text-gradient-professional bg-clip-text">Built for Scale</span>
              </h1>
            </ScrollReveal>

            {/* Subheadline */}
            <ScrollReveal delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Trusted by UN agencies, NGOs, and corporations across East Africa. 
                We deliver mission-critical IT infrastructure with 99.9% uptime.
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  size="lg"
                  asChild
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8 h-12 text-base font-semibold shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/30 transition-all hover:scale-105"
                >
                  <Link to="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-brand-blue/30 text-brand-blue hover:bg-brand-blue/5 px-8 h-12 text-base font-semibold hover:scale-105 transition-all"
                >
                  <a href="tel:+254724367794">
                    <Phone className="mr-2 h-4 w-4" />
                    +254 724 367 794
                  </a>
                </Button>
              </div>
            </ScrollReveal>

            {/* Stats Row with Animated Counters */}
            <ScrollReveal delay={400}>
              <div className="flex flex-wrap justify-center gap-8 lg:gap-16 pt-8 border-t border-border/50">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
                      <stat.icon className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-bold text-foreground">
                        <AnimatedCounter 
                          end={stat.value} 
                          suffix={stat.suffix} 
                          decimals={stat.decimals || 0}
                        />
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section with Parallax */}
      <ParallaxSection className="py-20 lg:py-28 bg-muted/30">
        <div className="container-professional">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-brand-blue/10 text-brand-blue text-sm font-medium rounded-full mb-4">
                Our Services
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Comprehensive IT Solutions
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Enterprise-grade services designed for mission-critical environments
              </p>
            </div>
          </ScrollReveal>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* IT Infrastructure */}
            <ScrollReveal delay={0} direction="up">
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-brand-blue/30 hover:shadow-xl transition-all duration-500 group h-full hover:-translate-y-2">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Server className="h-7 w-7 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">IT Infrastructure</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  End-to-end infrastructure management with secure networks, intelligent monitoring, and 24/7 expert support.
                </p>
                <ul className="space-y-2">
                  {["Network Design & Setup", "Cloud Migration", "24/7 Monitoring"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Enterprise Hardware */}
            <ScrollReveal delay={100} direction="up">
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-brand-blue/30 hover:shadow-xl transition-all duration-500 group h-full hover:-translate-y-2">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Cpu className="h-7 w-7 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">Enterprise Hardware</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Premium equipment procurement, professional deployment, and ongoing maintenance for peak performance.
                </p>
                <ul className="space-y-2">
                  {["Hardware Procurement", "Professional Setup", "Maintenance Plans"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Cybersecurity */}
            <ScrollReveal delay={200} direction="up">
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-brand-blue/30 hover:shadow-xl transition-all duration-500 group h-full hover:-translate-y-2">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Shield className="h-7 w-7 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cybersecurity</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Multi-layered security solutions with threat protection, compliance support, and round-the-clock monitoring.
                </p>
                <ul className="space-y-2">
                  {["Threat Detection", "Compliance Support", "Security Audits"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* View All CTA */}
          <ScrollReveal delay={300}>
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-white hover:scale-105 transition-all"
              >
                <Link to="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Testimonials Section - Enhanced Carousel */}
      <TestimonialsCarousel />

      {/* Client Logos Section */}
      <ClientLogos />

      <Footer />
      
      {/* Floating Action Buttons */}
      <FloatingActions />
      
      {/* Sticky CTA Bar */}
      <StickyCTA />
    </div>
  );
};

export default Index;
