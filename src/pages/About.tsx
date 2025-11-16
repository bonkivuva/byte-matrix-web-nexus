
import { Link } from "react-router-dom";
import { ArrowRight, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import FuturisticHeader from "@/components/FuturisticHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

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
      <section className="py-20 pt-32 relative z-10">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            {/* Clean Logo Showcase */}
            <div className="mb-16 relative">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-cyan-500/5 to-purple-600/5 rounded-full blur-2xl group-hover:from-blue-600/10 group-hover:via-cyan-500/10 group-hover:to-purple-600/10 transition-all duration-1000"></div>
                
                {/* Large clean logo */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-2000 ease-out"></div>
                  <img
                    src="/lovable-uploads/34f37754-9171-4da7-aa9a-8e558bdfb980.png"
                    alt="Byte Matrix Technologies"
                    className="w-96 h-96 lg:w-[40rem] lg:h-[40rem] mx-auto object-contain transform transition-all duration-1000 group-hover:scale-105"
                    style={{
                      filter: "drop-shadow(0 20px 40px rgba(59, 130, 246, 0.2))",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-12 animate-fade-up">
              <div>
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gradient-professional mb-8 leading-tight tracking-tight">
                  Welcome to Byte Matrix Technologies
                </h1>
                <div className="w-32 h-1 bg-gradient-brand mx-auto rounded-full shadow-brand mb-6"></div>
              </div>
              
              <p className="text-lg lg:text-xl text-muted-foreground max-w-6xl mx-auto leading-relaxed animate-fade-in">
                We're passionate IT professionals dedicated to helping your business thrive in the digital world. From robust IT infrastructure to comprehensive hardware solutions and expert guidance, we make technology work for you—simply, effectively, and reliably.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
                <Button
                  size="lg"
                  asChild
                >
                  <Link to="/services">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                >
                  <Link to="/contact">
                    <Zap className="mr-2 h-5 w-5" />
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center px-6 py-3 glass-professional rounded-full text-brand-blue font-semibold mb-8 shadow-brand">
                <Star className="w-5 h-5 mr-2" />
                Our Story
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 tracking-tight">
                Empowering Businesses Through <span className="text-gradient-professional">Innovation</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="animate-fade-in">
                Founded on the belief that every business deserves reliable, professional IT solutions, we've grown into a trusted partner for organizations across Kenya and beyond. Our mission is simple: help businesses of all sizes succeed through technology.
              </p>
              
              <p className="animate-fade-in">
                What sets us apart is our commitment to understanding your unique challenges. We don't believe in one-size-fits-all solutions. Instead, we take the time to listen, analyze, and create tailored strategies that address your specific needs—practical, effective, and results-driven.
              </p>

              <p className="animate-fade-in">
                Whether you're setting up your first network or managing complex enterprise systems, our team brings dedication, expertise, and a customer-first approach to every project. We stay at the forefront of technology trends so you can focus on what you do best—running your business.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden glass-professional">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
              Ready to Experience the <span className="text-gradient-professional">Byte Matrix Difference</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can help your business succeed. Reach out today for expert guidance tailored to your unique needs.
            </p>
            <Button
              size="lg"
              asChild
            >
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
