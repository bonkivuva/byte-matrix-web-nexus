
import {
  ArrowRight,
  CheckCircle,
  Computer,
  HardDrive,
  Mail,
  Phone,
  Printer,
  Server,
  Shield,
  Zap,
  Star,
  Users,
  Award,
  Lightbulb,
  Headphones,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
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
      {/* Background Logo */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.05]">
        <img
          src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
          alt="Background Logo"
          className="w-[70vw] h-auto max-w-4xl object-contain transform rotate-0"
        />
      </div>

      {/* Header */}
      <header className="border-b border-gray-100/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                alt="BYTE MATRIX TECHNOLOGIES"
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
                className="text-gradient-primary font-semibold text-lg relative"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 dark:text-gray-300 hover:text-gradient-primary transition-all duration-300 font-medium text-lg relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
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
                  to="/contact"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
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

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-indigo-50/40 dark:from-gray-900/90 dark:via-blue-900/20 dark:to-purple-900/10 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold mb-8 text-lg shadow-xl">
              <Star className="w-5 h-5 mr-3" />
              Our Services
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-primary mb-8 tracking-tight text-shadow-lg leading-tight">
              Complete Technology Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto font-medium text-shadow-sm">
              From infrastructure to devices, we deliver comprehensive tech solutions tailored to your needs
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto mt-8 rounded-full shadow-lg"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Server,
                title: "IT Services",
                description: "Professional IT infrastructure and support services",
                image: "/lovable-uploads/8a8cda77-4bf8-4392-97fc-d1cb7057e068.png",
                features: [
                  "Network Setup & Configuration",
                  "System Administration",
                  "Data Backup & Recovery",
                  "Cloud Services Integration",
                  "Cybersecurity Implementation",
                ],
              },
              {
                icon: HardDrive,
                title: "Hardware Solutions",
                description: "Enterprise-grade hardware for optimal performance",
                image: "/lovable-uploads/fab2577d-98ee-4879-ac95-c1a0ade0afa7.png",
                features: [
                  "Enterprise Servers",
                  "Networking Equipment",
                  "Storage Solutions",
                  "Custom PC Builds",
                  "Hardware Installation",
                ],
              },
              {
                icon: Computer,
                title: "Desktop Computers",
                description: "High-performance desktop systems for every need",
                image: "/lovable-uploads/f858d253-338e-48f5-bfea-74af9143bbcd.png",
                features: [
                  "Business Desktops",
                  "Gaming PCs",
                  "All-in-One Systems",
                  "CAD Workstations",
                  "Mini PCs & Thin Clients",
                ],
              },
              {
                icon: Computer,
                title: "Laptops",
                description: "Premium portable computing solutions",
                image: "/lovable-uploads/f1e6cb6e-37c8-4aac-addb-2b38d4f23412.png",
                features: [
                  "Business Laptops",
                  "Student & Budget Options",
                  "Gaming Laptops",
                  "Ultrabooks & 2-in-1s",
                  "MacBooks & Surface Devices",
                ],
              },
              {
                icon: Printer,
                title: "Printers",
                description: "Professional printing solutions for any environment",
                image: "/lovable-uploads/a80fa3b7-bf9b-4d7c-8af1-a74162bae6a6.png",
                features: [
                  "Laser Printers",
                  "Inkjet Printers",
                  "Multifunction Devices",
                  "Large Format Plotters",
                  "3D Printers",
                ],
              },
              {
                icon: Shield,
                title: "Tech Support",
                description: "Comprehensive technical support and maintenance",
                image: "/lovable-uploads/d29f94dc-9102-4701-adec-42bc48de5bfb.png",
                features: [
                  "24/7 Remote Support",
                  "On-site Repair",
                  "Software Installation",
                  "Virus Removal",
                  "Training & Support",
                ],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-50/50 dark:from-blue-900/0 dark:via-blue-900/0 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-500 transform group-hover:scale-110">
                      <service.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <CardTitle className="text-xl font-light text-gray-900 dark:text-white mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed font-extralight">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300 text-sm font-light">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Customer Support Excellence */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50/30 dark:from-blue-900/20 dark:via-indigo-900/10 dark:to-purple-900/10 rounded-3xl p-8 lg:p-16 shadow-2xl border border-blue-100/50 dark:border-blue-800/50 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-full text-white font-light mb-6">
                    <Headphones className="w-4 h-4 mr-2" />
                    Customer Support Excellence
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-extralight text-gray-900 dark:text-white mb-6 tracking-tight">
                    24/7 Professional Support
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-extralight">
                    Our dedicated support specialists are available around the clock to assist you with any technical
                    challenges. From troubleshooting to guidance, we provide personalized support that keeps your
                    business running smoothly.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {[
                      "24/7 Live Support",
                      "Expert Technical Guidance",
                      "Remote Troubleshooting",
                      "Priority Response Times",
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-light"
                    asChild
                  >
                    <Link to="/contact">
                      <Phone className="mr-2 h-5 w-5" />
                      Get Support Now
                    </Link>
                  </Button>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-2xl"></div>
                    <img
                      src="/lovable-uploads/32aed714-c356-4ff9-9e3d-017e2f1071af.png"
                      alt="Professional team providing technical support and consultation"
                      className="relative w-full h-[400px] object-cover rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-light"
              asChild
            >
              <Link to="/contact">
                <ArrowRight className="mr-2 h-5 w-5" />
                Get Started Today
              </Link>
            </Button>
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

export default Services;
