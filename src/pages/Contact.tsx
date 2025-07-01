
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

            {/* Social Media Section */}
            <div className="text-center mb-16">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">🚀 Discover Innovation in Action!</h2>
                <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto mb-8">
                  Follow us on social media to see our latest tech solutions, client success stories, and cutting-edge products that are transforming businesses every day!
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <a
                  href="https://x.com/ByteMatrixTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  X (Twitter)
                </a>
                
                <a
                  href="https://www.facebook.com/share/1BSjKFRCUd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
                
                <a
                  href="https://www.instagram.com/byte_matrix_technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348c1.297 0 2.348 1.051 2.348 2.348s-1.051 2.348-2.348 2.348z"/>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
              </div>
              
              <p className="text-lg text-blue-400 font-medium">
                💡 See real solutions, real results, real innovation!
              </p>
            </div>

            <div className="text-center mb-16">
              <img
                src="/lovable-uploads/395d4682-f18c-4266-89f9-1a5f965c03f3.png"
                alt="Professional technology operations center with multiple monitoring stations"
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
