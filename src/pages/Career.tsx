import FuturisticHeader from "@/components/FuturisticHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, ArrowRight, Mail, Star, Zap } from "lucide-react";

const Career = () => {
  return (
    <div className="min-h-screen text-foreground overflow-hidden">
      <SEOHead 
        title="Careers at Byte Matrix Technologies - Join Our Team"
        description="Explore career opportunities at Byte Matrix Technologies. Join our team of IT professionals and help shape the future of technology solutions in East Africa and beyond."
        keywords="IT jobs, software developer jobs, technology careers, Kenya IT careers, tech jobs, career opportunities"
      />
      
      <FuturisticHeader currentPage="careers" />
      
      {/* Hero Section */}
      <section className="py-20 pt-32 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <div className="inline-flex items-center px-6 py-3 glass-professional rounded-full text-brand-blue font-semibold mb-8 shadow-brand">
              <Star className="w-5 h-5 mr-2" />
              Join Our Team
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-professional mb-6 tracking-tight leading-tight">
              Build the Future of Technology
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              Join our team of innovative professionals creating cutting-edge IT solutions. We foster a culture of growth, collaboration, and excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                asChild
              >
                <Link to="/contact">
                  <Users className="w-5 h-5 mr-2" />
                  Get In Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                asChild
              >
                <Link to="/">
                  Learn About Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-16 animate-scale-in-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto card-premium">
              <img 
                src="/lovable-uploads/6118b34b-4d85-4de5-b29f-798c1f7e9cec.png" 
                alt="Professional success and growth at Byte Matrix Technologies"
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-semibold">Innovation • Excellence • Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 glass-professional rounded-full text-brand-blue font-semibold mb-8 shadow-brand">
              <Zap className="w-5 h-5 mr-2" />
              Current Opportunities
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-professional mb-6">
              Ready to Join Our Mission?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="card-premium hover:-translate-y-2 transition-all duration-500 group">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-brand group-hover:scale-110 transition-transform duration-500">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gradient-professional mb-6">
                  Building Our Future Team
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                  Thank you for your interest in joining Byte Matrix Technologies! While we don't have open positions at the moment, we're always looking for talented individuals who share our passion for technology and innovation.
                </p>
                
                <div className="space-y-4 mb-10">
                  <p className="text-brand-blue font-semibold text-lg">
                    Submit your portfolio and connect with us for future opportunities
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    asChild
                  >
                    <Link to="/contact">
                      <Mail className="w-5 h-5 mr-2" />
                      Submit Your Portfolio
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    asChild
                  >
                    <a href="mailto:support@bytematrixtechnologies.co.ke">
                      Email Us Directly
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;