
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Server,
  Shield,
  Clock,
  Users,
  Award,
  Zap,
  Star,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FuturisticHeader from "@/components/FuturisticHeader";
import SEOHead from "@/components/SEOHead";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";
import TrustIndicators from "@/components/TrustIndicators";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-quantum font-cyber text-foreground overflow-hidden">
      <SEOHead 
        title="About Byte Matrix Technologies - IT Solutions & Digital Transformation"
        description="Learn about Byte Matrix Technologies, Kenya's leading IT solutions provider. We specialize in digital transformation, enterprise solutions, and technology consulting."
        keywords="about byte matrix technologies, IT company Kenya, digital transformation, enterprise solutions, technology consulting"
      />
      
      <FuturisticHeader currentPage="about" />
      {/* Clean professional background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-slate-100/20 dark:from-blue-950/20 dark:to-slate-900/20"></div>
      </div>


      {/* Hero Section with Company Logo */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
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
            <div className="space-y-12 animate-slide-up">
              <div>
                <h1 className="text-2xl lg:text-3xl xl:text-4xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-8 animate-gradient leading-tight tracking-tight">
                  Welcome to Byte Matrix Technologies
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full animate-scale-in shadow-lg mb-6"></div>
              </div>
              
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-6xl mx-auto leading-relaxed font-source font-light animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-medium">"Connecting Your Digital Matrix"</span> is more than just our tagline—it's our commitment to you.
                <br /><br />
                We're a team of passionate IT professionals dedicated to helping businesses like yours thrive in the digital age. Whether you need reliable IT infrastructure, cutting-edge hardware solutions, or expert technology guidance, we're here to make technology work for you, not the other way around.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-8 py-4 text-base font-montserrat font-medium shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 rounded-xl"
                  asChild
                >
                  <Link to="/services">
                    Explore Our Services
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-base font-montserrat font-medium glass-card hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 border-2 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 transition-all duration-700 transform hover:-translate-y-3 rounded-xl shadow-lg hover:shadow-xl"
                  asChild
                >
                  <Link to="/contact">
                    Let's Talk
                    <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
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
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30 rounded-full text-blue-700 dark:text-blue-300 font-semibold mb-8 text-lg shadow-lg">
                <Star className="w-5 h-5 mr-3 text-blue-600" />
                Our Story
              </div>
              <h2 className="text-xl lg:text-2xl font-playfair font-semibold text-gray-900 dark:text-white mb-8 tracking-tight">
                Empowering Businesses Through <span className="text-gradient-primary font-bold">Technology</span>
              </h2>
            </div>

            <div className="space-y-8 text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-source font-light">
              <p className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                At Byte Matrix Technologies, we believe that every business deserves access to reliable, professional IT solutions. Founded with a vision to bridge the technology gap for businesses across Kenya, we've grown into a trusted partner for organizations of all sizes.
              </p>
              
              <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                What sets us apart? It's simple: we genuinely care about your success. We take the time to understand your unique challenges and goals, then craft solutions that actually fit your needs—not just what's trendy or what we happen to sell.
              </p>

              <p className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                From setting up your first computer network to managing complex enterprise infrastructure, we handle it all with the same level of dedication and expertise. Our team stays up-to-date with the latest technologies so you don't have to, and we're always just a phone call away when you need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Testimonials */}
      <Testimonials />

      {/* Enhanced CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 backdrop-blur-sm"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <h2 className="text-xl lg:text-2xl font-playfair font-semibold text-gray-900 dark:text-white mb-8 tracking-tight">
              Ready to Experience the <span className="text-gradient-primary font-bold">Byte Matrix Difference?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto font-source font-light leading-relaxed">
              We'd love to hear about your business and explore how we can help you achieve your goals. Let's start a conversation today—no pressure, just friendly advice and expert guidance.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-montserrat font-medium shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 rounded-xl"
              asChild
            >
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-400 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-950/90"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex flex-col items-center md:items-start space-y-4 mb-8 md:mb-0">
              <img
                src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                alt="Byte Matrix Technologies"
                className="h-16 w-auto opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-110"
                style={{
                  filter: "drop-shadow(0 8px 16px rgba(59, 130, 246, 0.3))",
                }}
              />
              <p className="text-blue-400 font-light italic text-lg">"Connecting Your Digital Matrix"</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-lg font-light">© 2024 Byte Matrix Technologies. All rights reserved.</p>
              <p className="text-lg mt-2 text-gray-500">Expert IT Solutions for Modern Businesses</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <div className="flex justify-center space-x-8">
              {[
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-gray-400 hover:text-blue-400 transition-all duration-500 relative group text-lg font-medium"
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-500 group-hover:w-full rounded-full"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
