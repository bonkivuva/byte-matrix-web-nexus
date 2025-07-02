
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900/20 transition-all duration-500">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl animate-float"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                alt="Byte Matrix Technologies"
                className="h-16 w-auto drop-shadow-lg transition-transform hover:scale-105 duration-300"
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/services"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="ml-4 p-2 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200/50 dark:border-gray-700/50 animate-fade-in">
              <nav className="flex flex-col space-y-4 pt-4">
                <Link
                  to="/services"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleDarkMode}
                  className="self-start p-2"
                >
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Company Logo */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Large Company Logo with Amazing Animations */}
            <div className="mb-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="relative">
                <img
                  src="/lovable-uploads/34f37754-9171-4da7-aa9a-8e558bdfb980.png"
                  alt="Byte Matrix Technologies"
                  className="w-80 h-80 lg:w-96 lg:h-96 mx-auto object-contain animate-fade-in"
                  style={{
                    filter: "drop-shadow(0 25px 50px rgba(59, 130, 246, 0.3))",
                    animation: "fadeIn 1.2s ease-out, float 4s ease-in-out infinite 1.5s"
                  }}
                />
                {/* Floating particles around logo */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-indigo-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-6 animate-gradient leading-tight">
                  YOUR TECHNOLOGY PARTNER
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full animate-scale-in"></div>
              </div>
              
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.3s' }}>
                "Connecting Your Digital Matrix" - We specialize in comprehensive IT infrastructure management, 
                enterprise-grade hardware deployment, and strategic technology consulting.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                  asChild
                >
                  <Link to="/services">
                    Explore Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-10 py-4 text-lg glass-card hover:bg-blue-50 dark:hover:bg-gray-800 border-2 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 transition-all duration-500 transform hover:-translate-y-2"
                  asChild
                >
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-6">
              Why Choose <span className="text-gradient-primary font-semibold">Byte Matrix?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the difference with our cutting-edge solutions and dedicated expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Server,
                title: "Enterprise Solutions",
                description: "Scalable infrastructure designed for growth and reliability",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Shield,
                title: "Advanced Security",
                description: "Military-grade protection for your digital assets",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock monitoring and instant response",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified professionals with decades of experience",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: Award,
                title: "Industry Leading",
                description: "Award-winning solutions trusted by Fortune 500 companies",
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance that exceeds expectations",
                gradient: "from-yellow-500 to-orange-500"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="glass-card hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-8">
              Ready to Transform Your <span className="text-gradient-primary font-semibold">Digital Future?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust Byte Matrix Technologies for their critical IT infrastructure
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-12 py-4 text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-pulse-slow"
              asChild
            >
              <Link to="/contact">
                Start Your Journey Today
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-950"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex flex-col items-center md:items-start space-y-4 mb-8 md:mb-0">
              <img
                src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                alt="Byte Matrix Technologies"
                className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <p className="text-blue-400 font-light italic">"Connecting Your Digital Matrix"</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm font-light">© 2024 Byte Matrix Technologies. All rights reserved.</p>
              <p className="text-sm mt-2 text-gray-500">Expert IT Solutions for Modern Businesses</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <div className="flex justify-center space-x-8">
              {[
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
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
