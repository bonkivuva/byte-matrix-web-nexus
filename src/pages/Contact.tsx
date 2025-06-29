
import {
  Mail,
  Phone,
  Moon,
  Sun,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
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
    <div className="min-h-screen bg-white dark:bg-gray-900 font-light transition-colors duration-300 relative">
      {/* Header */}
      <header className="border-b border-gray-100/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                alt="Byte Matrix Technologies"
                className="h-20 w-auto drop-shadow-lg transition-transform hover:scale-105"
                loading="eager"
                style={{
                  filter: "contrast(1.2) saturate(1.3) brightness(1.1) drop-shadow(0 8px 32px rgba(59, 130, 246, 0.25))",
                }}
              />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 dark:text-gray-300 hover:text-gradient-primary transition-all duration-300 font-medium text-lg relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/services"
                className="text-gray-700 dark:text-gray-300 hover:text-gradient-primary transition-all duration-300 font-medium text-lg relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/contact"
                className="text-gradient-primary font-semibold text-lg relative"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="ml-4 p-3"
              >
                {isDarkMode ? <Sun className="h-6 w-6 text-yellow-500" /> : <Moon className="h-6 w-6 text-blue-600" />}
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleDarkMode}
                  className="w-fit p-3"
                >
                  {isDarkMode ? <Sun className="h-6 w-6 text-yellow-500" /> : <Moon className="h-6 w-6 text-blue-600" />}
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.3) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold mb-8 text-lg shadow-xl">
                <Mail className="w-5 h-5 mr-3" />
                Get In Touch
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight text-shadow-lg">Ready to Get Started?</h1>
              <p className="text-xl lg:text-2xl text-gray-300 font-medium max-w-3xl mx-auto text-shadow-sm">
                Connect with our experts today. We're here to transform your technology experience.
              </p>
              <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 mx-auto mt-8 rounded-full shadow-lg"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  icon: Phone,
                  title: "Call or WhatsApp",
                  description: "Get instant support and quick responses",
                  contact: "+254 724 367 794",
                  href: "tel:+254724367794",
                  image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  description: "Send us your detailed requirements",
                  contact: "bytematrixtechnologies@gmail.com",
                  href: "mailto:bytematrixtechnologies@gmail.com",
                  image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=300&fit=crop&crop=center",
                },
              ].map((contact, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/50 dark:bg-gray-800/30 border-gray-700/50 dark:border-gray-600/50 backdrop-blur-sm hover:bg-gray-800/70 dark:hover:bg-gray-800/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-0 relative z-10">
                    <img
                      src={contact.image}
                      alt={contact.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <contact.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-light text-white mb-3">{contact.title}</h3>
                      <p className="text-gray-300 mb-6 font-extralight">{contact.description}</p>
                      <a
                        href={contact.href}
                        className="text-blue-400 hover:text-blue-300 font-light text-lg transition-colors duration-300 break-all"
                      >
                        {contact.contact}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mb-16">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop&crop=center"
                alt="Professional business meeting with technology consultation"
                className="w-full max-w-4xl mx-auto h-64 object-cover rounded-2xl shadow-2xl"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-light"
                asChild
              >
                <a href="tel:+254724367794">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-400/30 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 px-10 py-4 text-lg bg-transparent transition-all duration-300 transform hover:-translate-y-1 font-light"
                asChild
              >
                <a href="mailto:bytematrixtechnologies@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        size="sm"
      >
        <ArrowRight className="h-5 w-5 transform -rotate-90" />
      </Button>
    </div>
  );
};

export default Contact;
