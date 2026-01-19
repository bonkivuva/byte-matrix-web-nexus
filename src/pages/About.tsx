import { Link } from "react-router-dom";
import { ArrowRight, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import FuturisticHeader from "@/components/FuturisticHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FloatingActions from "@/components/FloatingActions";

const About = () => {
  return (
    <div className="min-h-screen text-foreground overflow-hidden">
      <SEOHead 
        title="About Byte Matrix Technologies - Professional IT Solutions Provider"
        description="Discover Byte Matrix Technologies, your trusted partner for professional IT solutions, digital transformation, and enterprise technology services in Kenya and beyond."
        keywords="about byte matrix technologies, IT company Kenya, digital transformation, enterprise solutions, technology consulting, professional IT services"
      />
      
      <FuturisticHeader currentPage="about" />


      {/* Hero Section */}
      <section className="py-20 pt-32 relative z-10 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            
            {/* Modern two-column layout */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left column - Logo */}
              <div className="relative order-2 lg:order-1">
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 via-brand-blue-light/10 to-brand-blue/10 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-700"></div>
                  
                  {/* Logo container */}
                  <div className="relative glass-professional rounded-3xl p-8 lg:p-12 border-2 border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-500">
                    <img
                      src="/lovable-uploads/34f37754-9171-4da7-aa9a-8e558bdfb980.png"
                      alt="Byte Matrix Technologies"
                      className="w-full h-auto max-w-md mx-auto object-contain transform transition-all duration-700 group-hover:scale-105"
                      style={{
                        filter: "drop-shadow(0 10px 30px rgba(59, 130, 246, 0.15))",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Right column - Content */}
              <div className="space-y-8 order-1 lg:order-2 text-center lg:text-left">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 glass-professional rounded-full border border-brand-blue/20 text-brand-blue font-semibold text-sm">
                    <Star className="w-4 h-4 mr-2" />
                    About Us
                  </div>
                  
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    Welcome to <span className="text-gradient-professional">Byte Matrix</span> Technologies
                  </h1>
                  
                  <div className="w-24 h-1 bg-gradient-brand rounded-full shadow-brand lg:mx-0 mx-auto"></div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're passionate IT professionals dedicated to helping your business thrive in the digital world. From robust IT infrastructure to comprehensive hardware solutions and expert guidance, we make technology work for you—simply, effectively, and reliably.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                  <Button size="lg" asChild className="shadow-brand hover:shadow-brand-lg transition-all duration-300">
                    <Link to="/services">
                      Explore Our Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="border-brand-blue/30 hover:bg-brand-blue/10">
                    <Link to="/contact">
                      <Zap className="mr-2 h-5 w-5" />
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue-light/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 relative bg-gradient-professional-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left - Story content */}
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center px-4 py-2 glass-professional rounded-full border border-brand-blue/20 text-brand-blue font-semibold text-sm mb-6">
                    <Star className="w-4 h-4 mr-2" />
                    Our Story
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
                    Empowering Businesses Through <span className="text-gradient-professional">Innovation</span>
                  </h2>
                  <div className="w-20 h-1 bg-gradient-brand rounded-full"></div>
                </div>

                <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
                  <p>
                    Founded on the belief that every business deserves reliable, professional IT solutions, we've grown into a trusted partner for organizations across Kenya and beyond. Our mission is simple: help businesses of all sizes succeed through technology.
                  </p>
                  
                  <p>
                    What sets us apart is our commitment to understanding your unique challenges. We don't believe in one-size-fits-all solutions. Instead, we take the time to listen, analyze, and create tailored strategies that address your specific needs—practical, effective, and results-driven.
                  </p>

                  <p>
                    Whether you're setting up your first network or managing complex enterprise systems, our team brings dedication, expertise, and a customer-first approach to every project.
                  </p>
                </div>
              </div>

              {/* Right - Values grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-professional p-6 rounded-2xl border border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300 hover:shadow-brand">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">Adopting and implementing the latest technologies</p>
                </div>

                <div className="glass-professional p-6 rounded-2xl border border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300 hover:shadow-brand">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Integrity</h3>
                  <p className="text-sm text-muted-foreground">Building trust through transparency and ethical practices</p>
                </div>

                <div className="glass-professional p-6 rounded-2xl border border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300 hover:shadow-brand">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Customer Focus</h3>
                  <p className="text-sm text-muted-foreground">Delivering tailored solutions that meet client needs</p>
                </div>

                <div className="glass-professional p-6 rounded-2xl border border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300 hover:shadow-brand">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Reliability</h3>
                  <p className="text-sm text-muted-foreground">Ensuring consistent performance and dependable support</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-professional opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="glass-premium p-12 lg:p-16 rounded-3xl border-2 border-brand-blue/20 text-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
                    Ready to Experience the <span className="text-gradient-professional">Byte Matrix Difference</span>?
                  </h2>
                  <div className="w-24 h-1 bg-gradient-brand mx-auto rounded-full mb-6"></div>
                </div>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Let's discuss how we can help your business succeed. Reach out today for expert guidance tailored to your unique needs.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" asChild className="shadow-brand hover:shadow-brand-lg transition-all duration-300">
                    <Link to="/contact">
                      Get In Touch
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="border-brand-blue/30 hover:bg-brand-blue/10">
                    <Link to="/services">
                      View Services
                      <Star className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default About;
