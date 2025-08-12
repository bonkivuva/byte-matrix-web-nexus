
import {
  ArrowRight,
  Server,
  Star,
  Moon,
  Sun,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-light transition-colors duration-300">
      {/* Header */}
      <header className="border-b border-gray-100/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                alt="Byte Matrix Technologies"
                className="h-20 w-auto drop-shadow-lg transition-transform hover:scale-105"
                loading="eager"
                style={{
                  imageRendering: "crisp-edges",
                  filter: "contrast(1.1) saturate(1.1) brightness(1.05)",
                }}
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/services"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-light relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/about"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-light relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/portfolio"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-light relative group"
              >
                Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/careers"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-light relative group"
              >
                Careers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-light relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="ml-4 p-2"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900/20"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(71 85 105 / 0.3) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        {/* Watermark Logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <img
            src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
            alt="Byte Matrix Technologies Watermark"
            className="w-96 h-96 object-contain"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <img
                src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                alt="Byte Matrix Technologies"
                className="h-64 w-auto mx-auto mb-8 drop-shadow-lg"
                style={{
                  imageRendering: "crisp-edges",
                }}
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="mb-8">
              <p className="text-base lg:text-lg font-light text-blue-600 dark:text-blue-400 mb-4 tracking-wide">
                "Connecting Your Digital Matrix"
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              We specialize in comprehensive IT infrastructure management, enterprise-grade hardware deployment, and
              strategic technology consulting. From network architecture and cybersecurity implementation to custom
              computing solutions and 24/7 technical support, we transform complex technology challenges into
              competitive advantages for businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-light"
                asChild
              >
                <Link to="/services">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-4 text-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-blue-600/20 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1 font-light"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-16 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 font-light mb-6">
              <Star className="w-4 h-4 mr-2" />
              Our Expertise
            </div>
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 dark:text-white mb-6 tracking-tight">
              Complete Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-extralight">
              From infrastructure to devices, we deliver comprehensive tech solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl">
              <Server className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">IT Services</h3>
              <p className="text-gray-600 dark:text-gray-300 font-extralight">Professional infrastructure and support</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop&crop=center"
                alt="Technology Hardware"
                className="h-16 w-16 mx-auto mb-4 rounded-lg object-cover"
              />
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">Hardware Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300 font-extralight">Enterprise-grade equipment</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=100&h=100&fit=crop&crop=center"
                alt="24/7 Support"
                className="h-16 w-16 mx-auto mb-4 rounded-lg object-cover"
              />
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-300 font-extralight">Round-the-clock assistance</p>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-light"
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

      {/* Footer */}
      <footer className="bg-gray-950 dark:bg-gray-950 text-gray-400 py-16 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.3) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex flex-col items-center md:items-start space-y-4 mb-8 md:mb-0">
              <img
                src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                alt="Byte Matrix Technologies"
                className="h-16 w-auto drop-shadow-md transition-transform hover:scale-105"
                loading="lazy"
                style={{
                  imageRendering: "crisp-edges",
                  filter: "contrast(1.1) saturate(1.1)",
                }}
              />
              <p className="text-blue-400 font-light italic">"Connecting Your Digital Matrix"</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm font-light">© 2024 Byte Matrix Technologies. All rights reserved.</p>
              <p className="text-sm mt-2 text-gray-500 font-extralight">Expert IT Solutions for Modern Businesses</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <div className="flex justify-center space-x-8">
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
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-light relative group"
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

export default Index;
