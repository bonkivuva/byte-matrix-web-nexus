
import {
  Mail,
  Phone,
  Moon,
  Sun,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
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
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                alt="Byte Matrix Technologies"
                className="h-16 w-auto drop-shadow-lg transition-transform hover:scale-105"
                loading="eager"
              />
            </Link>
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
                to="/contact"
                className="text-blue-600 dark:text-blue-400 font-medium relative"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"></span>
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

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.3) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-full text-white font-light mb-6">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </div>
              <h1 className="text-4xl lg:text-5xl font-extralight mb-6 tracking-tight">Ready to Get Started?</h1>
              <p className="text-xl text-gray-300 font-extralight max-w-3xl mx-auto">
                Connect with our experts today. We're here to transform your technology experience.
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mt-8 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  icon: Phone,
                  title: "Call or WhatsApp",
                  description: "Get instant support and quick responses",
                  contact: "+254 724 367 794",
                  href: "tel:+254724367794",
                  image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400&h=300&fit=crop&crop=center",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  description: "Send us your detailed requirements",
                  contact: "bytematrixtechnologies@gmail.com",
                  href: "mailto:bytematrixtechnologies@gmail.com",
                  image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop&crop=center",
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
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop&crop=center"
                alt="Professional business meeting"
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
    </div>
  );
};

export default Contact;
