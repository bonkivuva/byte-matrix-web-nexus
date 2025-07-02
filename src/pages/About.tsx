
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Server,
  Shield,
  Clock,
  Users,
  Award,
  Zap,
  Moon,
  Sun,
  Menu,
  X,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700 font-roboto">
      {/* Modern Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-indigo-400/15 to-blue-400/15 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-emerald-400/15 to-teal-400/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Enhanced Header */}
      <header className="relative z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/30 dark:border-gray-700/30 sticky top-0 shadow-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <img
                src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                alt="Byte Matrix Technologies"
                className="h-16 w-auto drop-shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-2xl"
                style={{
                  filter: "contrast(1.3) saturate(1.4) brightness(1.1) drop-shadow(0 12px 24px rgba(59, 130, 246, 0.3))",
                }}
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/services"
                className="text-gray-600 dark:text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-500 font-medium text-lg relative group"
              >
                Services
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 group-hover:w-full rounded-full"></span>
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 dark:text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-500 font-medium text-lg relative group"
              >
                Contact
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 group-hover:w-full rounded-full"></span>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="ml-4 p-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-300 rounded-full"
              >
                {isDarkMode ? <Sun className="h-6 w-6 text-yellow-500" /> : <Moon className="h-6 w-6 text-blue-600" />}
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors rounded-full"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-6 pb-6 border-t border-gray-200/50 dark:border-gray-700/50 animate-fade-in">
              <nav className="flex flex-col space-y-6 pt-6">
                <Link
                  to="/services"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleDarkMode}
                  className="self-start p-3 rounded-full"
                >
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            {/* Enhanced Company Logo */}
            <div className="mb-20 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-indigo-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              <div className="relative group">
                <img
                  src="/lovable-uploads/34f37754-9171-4da7-aa9a-8e558bdfb980.png"
                  alt="Byte Matrix Technologies"
                  className="w-96 h-96 lg:w-[28rem] lg:h-[28rem] mx-auto object-contain animate-fade-in transition-all duration-700 group-hover:scale-105"
                  style={{
                    filter: "drop-shadow(0 30px 60px rgba(59, 130, 246, 0.4)) contrast(1.2) saturate(1.3)",
                    animation: "fadeIn 1.5s ease-out, float 6s ease-in-out infinite 2s"
                  }}
                />
                {/* Enhanced floating particles */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-70 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-70 animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-70 animate-ping" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-70 animate-ping" style={{ animationDelay: '2s' }}></div>
                <Sparkles className="absolute top-1/6 right-1/6 w-8 h-8 text-yellow-400 opacity-60 animate-pulse" style={{ animationDelay: '2.5s' }} />
                <Star className="absolute bottom-1/6 left-1/6 w-6 h-6 text-blue-400 opacity-60 animate-pulse" style={{ animationDelay: '3s' }} />
              </div>
            </div>

            {/* Enhanced Main Content */}
            <div className="space-y-10 animate-slide-up">
              <div>
                <h1 className="text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-8 animate-gradient leading-tight tracking-tight">
                  YOUR TECHNOLOGY PARTNER
                </h1>
                <div className="w-40 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full animate-scale-in shadow-lg"></div>
              </div>
              
              <p className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <span className="text-blue-600 dark:text-blue-400 font-medium">"Connecting Your Digital Matrix"</span> - We specialize in comprehensive IT infrastructure management, 
                enterprise-grade hardware deployment, and strategic technology consulting.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-12 py-6 text-xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-110 rounded-2xl font-medium"
                  asChild
                >
                  <Link to="/services">
                    Explore Services
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-12 py-6 text-xl glass-card hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 border-2 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 transition-all duration-700 transform hover:-translate-y-3 rounded-2xl font-medium shadow-lg hover:shadow-xl"
                  asChild
                >
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30 rounded-full text-blue-700 dark:text-blue-300 font-semibold mb-8 text-lg">
              <Sparkles className="w-5 h-5 mr-3" />
              Why Choose Us
            </div>
            <h2 className="text-5xl lg:text-6xl font-light text-gray-900 dark:text-white mb-8 tracking-tight">
              Why Choose <span className="text-gradient-primary font-semibold">Byte Matrix?</span>
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light">
              Experience the difference with our cutting-edge solutions and dedicated expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: Server,
                title: "Enterprise Solutions",
                description: "Scalable infrastructure designed for growth and reliability with future-proof architecture",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Shield,
                title: "Advanced Security",
                description: "Military-grade protection for your digital assets with zero-trust security model",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock monitoring and instant response with dedicated support specialists",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified professionals with decades of experience in cutting-edge technologies",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: Award,
                title: "Industry Leading",
                description: "Award-winning solutions trusted by Fortune 500 companies worldwide",
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance that exceeds expectations with breakthrough speed",
                gradient: "from-yellow-500 to-orange-500"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="glass-card hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 animate-fade-in group border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                <CardContent className="p-10 text-center relative z-10">
                  <div className={`inline-flex p-5 rounded-3xl bg-gradient-to-r ${feature.gradient} mb-8 group-hover:scale-125 transition-all duration-500 shadow-xl`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-light">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-light text-gray-900 dark:text-white mb-10 tracking-tight">
              Ready to Transform Your <span className="text-gradient-primary font-semibold">Digital Future?</span>
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
              Join hundreds of satisfied clients who trust Byte Matrix Technologies for their critical IT infrastructure and digital transformation
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-16 py-8 text-2xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-110 animate-pulse-slow rounded-2xl font-medium"
              asChild
            >
              <Link to="/contact">
                Start Your Journey Today
                <ArrowRight className="ml-4 h-8 w-8" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-400 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-950/90"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div className="flex flex-col items-center md:items-start space-y-6 mb-10 md:mb-0">
              <img
                src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                alt="Byte Matrix Technologies"
                className="h-20 w-auto opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-110"
                style={{
                  filter: "drop-shadow(0 8px 16px rgba(59, 130, 246, 0.3))",
                }}
              />
              <p className="text-blue-400 font-light italic text-lg">"Connecting Your Digital Matrix"</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-lg font-light">© 2024 Byte Matrix Technologies. All rights reserved.</p>
              <p className="text-lg mt-3 text-gray-500">Expert IT Solutions for Modern Businesses</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-10 text-center">
            <div className="flex justify-center space-x-12">
              {[
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-gray-400 hover:text-blue-400 transition-all duration-500 relative group text-lg font-medium"
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-blue-400 transition-all duration-500 group-hover:w-full rounded-full"></span>
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
