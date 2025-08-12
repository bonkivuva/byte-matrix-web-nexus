
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
import ProfessionalHeader from "@/components/ProfessionalHeader";
import SEOHead from "@/components/SEOHead";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700 font-roboto overflow-hidden">
      <SEOHead 
        title="About Byte Matrix Technologies - IT Solutions & Digital Transformation"
        description="Learn about Byte Matrix Technologies, Kenya's leading IT solutions provider. We specialize in digital transformation, enterprise solutions, and technology consulting."
        keywords="about byte matrix technologies, IT company Kenya, digital transformation, enterprise solutions, technology consulting"
      />
      
      <ProfessionalHeader currentPage="about" />
      {/* Clean professional background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-slate-100/20 dark:from-blue-950/20 dark:to-slate-900/20"></div>
      </div>


      {/* Hero Section with Company Logo */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            {/* Futuristic Logo Showcase */}
            <div className="mb-16 relative">
              <div className="relative group perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-cyan-500/5 to-purple-600/5 rounded-full blur-2xl group-hover:from-blue-600/10 group-hover:via-cyan-500/10 group-hover:to-purple-600/10 transition-all duration-1000"></div>
                
                {/* Logo with futuristic transformation */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-blue-50/20 dark:from-gray-800/20 dark:to-blue-900/20 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-2000 ease-out"></div>
                  <img
                    src="/lovable-uploads/34f37754-9171-4da7-aa9a-8e558bdfb980.png"
                    alt="Byte Matrix Technologies"
                    className="w-80 h-80 lg:w-[32rem] lg:h-[32rem] mx-auto object-contain p-8 transform transition-all duration-1000 group-hover:scale-105 group-hover:rotate-1"
                    style={{
                      filter: "drop-shadow(0 20px 40px rgba(59, 130, 246, 0.2))",
                    }}
                  />
                  
                  {/* Futuristic grid overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000" 
                       style={{
                         backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                                          linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
                         backgroundSize: '20px 20px'
                       }}>
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-300"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-500"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-700"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-900"></div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-12 animate-slide-up">
              <div>
                <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-8 animate-gradient leading-tight tracking-tight">
                  Connecting Your Digital Matrix
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full animate-scale-in shadow-lg mb-6"></div>
              </div>
              
              <p className="text-xl lg:text-2xl xl:text-3xl text-gray-600 dark:text-gray-300 max-w-6xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-medium">"Connecting Your Digital Matrix"</span> 
                <br className="lg:hidden" />
                We specialize in comprehensive IT infrastructure management, enterprise-grade hardware deployment, and strategic technology consulting that transforms businesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-12 py-6 text-xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-110 rounded-2xl font-medium group"
                  asChild
                >
                  <Link to="/services">
                    Explore Services
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-12 py-6 text-xl glass-card hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 border-2 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 transition-all duration-700 transform hover:-translate-y-3 rounded-2xl font-medium shadow-lg hover:shadow-xl group"
                  asChild
                >
                  <Link to="/contact">
                    Get In Touch
                    <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30 rounded-full text-blue-700 dark:text-blue-300 font-semibold mb-8 text-lg shadow-lg">
              <Star className="w-5 h-5 mr-3 text-blue-600" />
              Why Choose Us
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 dark:text-white mb-8 tracking-tight">
              Why Choose <span className="text-gradient-primary font-semibold">Byte Matrix?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light">
              Experience the difference with our cutting-edge solutions and dedicated expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Server,
                title: "Enterprise Solutions",
                description: "Scalable infrastructure designed for growth and reliability with future-proof architecture that evolves with your business needs.",
                gradient: "from-blue-500 to-cyan-500",
                delay: "0s"
              },
              {
                icon: Shield,
                title: "Advanced Security",
                description: "Military-grade protection for your digital assets with zero-trust security model and comprehensive threat detection.",
                gradient: "from-purple-500 to-pink-500",
                delay: "0.1s"
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock monitoring and instant response with dedicated support specialists available whenever you need us.",
                gradient: "from-green-500 to-emerald-500",
                delay: "0.2s"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified professionals with decades of experience in cutting-edge technologies and industry best practices.",
                gradient: "from-orange-500 to-red-500",
                delay: "0.3s"
              },
              {
                icon: Award,
                title: "Industry Leading",
                description: "Award-winning solutions trusted by Fortune 500 companies worldwide with proven track record of success.",
                gradient: "from-indigo-500 to-purple-500",
                delay: "0.4s"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance that exceeds expectations with breakthrough speed and efficiency in every solution.",
                gradient: "from-yellow-500 to-orange-500",
                delay: "0.5s"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="glass-card hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 hover:scale-105 animate-fade-in group border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl overflow-hidden relative"
                style={{ animationDelay: feature.delay }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`inline-flex p-4 rounded-3xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-125 transition-all duration-500 shadow-xl group-hover:shadow-2xl`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 backdrop-blur-sm"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 dark:text-white mb-8 tracking-tight">
              Ready to Transform Your <span className="text-gradient-primary font-semibold">Digital Future?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              Join hundreds of satisfied clients who trust Byte Matrix Technologies for their critical IT infrastructure and digital transformation journey
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-16 py-8 text-2xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-110 rounded-2xl font-medium group"
              asChild
            >
              <Link to="/contact">
                Start Your Journey Today
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
