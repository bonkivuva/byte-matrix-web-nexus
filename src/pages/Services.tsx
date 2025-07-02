
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
  Sparkles,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-roboto transition-all duration-700 relative">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-indigo-400/15 to-blue-400/15 rounded-full blur-2xl animate-float"></div>
      </div>

      {/* Background Logo */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.02] dark:opacity-[0.03]">
        <img
          src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
          alt="Background Logo"
          className="w-[80vw] h-auto max-w-6xl object-contain transform"
        />
      </div>

      {/* Enhanced Header */}
      <header className="border-b border-gray-100/30 dark:border-gray-800/30 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl sticky top-0 z-50 shadow-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                alt="BYTE MATRIX TECHNOLOGIES"
                className="h-20 w-auto drop-shadow-2xl transition-all duration-500 group-hover:scale-110"
                loading="eager"
                style={{
                  filter: "contrast(1.3) saturate(1.4) brightness(1.1) drop-shadow(0 12px 24px rgba(59, 130, 246, 0.3))",
                }}
              />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-500 font-medium text-lg relative group"
              >
                About
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 group-hover:w-full rounded-full"></span>
              </Link>
              <Link
                to="/services"
                className="text-gradient-primary font-semibold text-lg relative"
              >
                Services
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-500 font-medium text-lg relative group"
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
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="p-2 rounded-full"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-6 pb-6 border-t border-gray-200 dark:border-gray-700 pt-6 animate-fade-in">
              <div className="flex flex-col space-y-6">
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
                  className="w-fit p-3 rounded-full"
                >
                  {isDarkMode ? <Sun className="h-6 w-6 text-yellow-500" /> : <Moon className="h-6 w-6 text-blue-600" />}
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Enhanced Services Section */}
      <section className="py-28 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-indigo-50/20 dark:from-gray-900/95 dark:via-blue-900/10 dark:to-purple-900/5 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24 animate-fade-in">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30 rounded-full text-blue-700 dark:text-blue-300 font-semibold mb-8 text-lg shadow-lg">
              <Sparkles className="w-5 h-5 mr-3" />
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-primary mb-10 tracking-tight text-shadow-lg leading-tight uppercase">
              COMPLETE TECHNOLOGY SOLUTIONS
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto font-light text-shadow-sm leading-relaxed">
              From infrastructure to devices, we deliver comprehensive tech solutions tailored to your unique business needs
            </p>
            <div className="w-40 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto mt-10 rounded-full shadow-lg"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
            {[
              {
                icon: Server,
                title: "IT Services",
                description: "Professional IT infrastructure and support services with cutting-edge solutions",
                image: "/lovable-uploads/8a8cda77-4bf8-4392-97fc-d1cb7057e068.png",
                features: [
                  "Network Setup & Configuration",
                  "System Administration",
                  "Data Backup & Recovery",
                  "Cloud Services Integration",
                  "Cybersecurity Implementation",
                ],
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: HardDrive,
                title: "Hardware Solutions",
                description: "Enterprise-grade hardware for optimal performance and reliability",
                image: "/lovable-uploads/fab2577d-98ee-4879-ac95-c1a0ade0afa7.png",
                features: [
                  "Enterprise Servers",
                  "Networking Equipment",
                  "Storage Solutions",
                  "Custom PC Builds",
                  "Hardware Installation",
                ],
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Computer,
                title: "Desktop Computers",
                description: "High-performance desktop systems for every professional need",
                image: "/lovable-uploads/f858d253-338e-48f5-bfea-74af9143bbcd.png",
                features: [
                  "Business Desktops",
                  "Gaming PCs",
                  "All-in-One Systems",
                  "CAD Workstations",
                  "Mini PCs & Thin Clients",
                ],
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: Computer,
                title: "Laptops",
                description: "Premium portable computing solutions for modern professionals",
                image: "/lovable-uploads/f1e6cb6e-37c8-4aac-addb-2b38d4f23412.png",
                features: [
                  "Business Laptops",
                  "Student & Budget Options",
                  "Gaming Laptops",
                  "Ultrabooks & 2-in-1s",
                  "MacBooks & Surface Devices",
                ],
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: Printer,
                title: "Printers",
                description: "Professional printing solutions for any business environment",
                image: "/lovable-uploads/a80fa3b7-bf9b-4d7c-8af1-a74162bae6a6.png",
                features: [
                  "Laser Printers",
                  "Inkjet Printers",
                  "Multifunction Devices",
                  "Large Format Plotters",
                  "3D Printers",
                ],
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                icon: Shield,
                title: "Tech Support",
                description: "Comprehensive technical support and maintenance services",
                image: "/lovable-uploads/d29f94dc-9102-4701-adec-42bc48de5bfb.png",
                features: [
                  "24/7 Remote Support",
                  "On-site Repair",
                  "Software Installation",
                  "Virus Removal",
                  "Training & Support",
                ],
                gradient: "from-yellow-500 to-orange-500"
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:scale-105 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                <div className="relative z-10">
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <CardHeader className="text-center pb-4">
                    <div className={`w-18 h-18 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-all duration-500 shadow-xl`}>
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-light text-gray-900 dark:text-white mb-3">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-lg">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-4">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300 font-light">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Enhanced Customer Support Section */}
          <div className="mb-24">
            <div className="bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/40 dark:from-blue-900/30 dark:via-indigo-900/20 dark:to-purple-900/20 rounded-3xl p-10 lg:p-20 shadow-2xl border border-blue-100/50 dark:border-blue-800/50 overflow-hidden backdrop-blur-sm">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30 rounded-full text-blue-700 dark:text-blue-300 font-semibold mb-8 text-lg">
                    <Headphones className="w-5 h-5 mr-3" />
                    Customer Support Excellence
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-8 tracking-tight">
                    24/7 Professional Support
                  </h3>
                  <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-10 font-light">
                    Our dedicated support specialists are available around the clock to assist you with any technical
                    challenges. From troubleshooting to guidance, we provide personalized support that keeps your
                    business running smoothly and efficiently.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6 mb-12">
                    {[
                      "24/7 Live Support",
                      "Expert Technical Guidance",
                      "Remote Troubleshooting",
                      "Priority Response Times",
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-light text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 font-light text-lg rounded-2xl"
                    asChild
                  >
                    <Link to="/contact">
                      <Phone className="mr-3 h-6 w-6" />
                      Get Support Now
                    </Link>
                  </Button>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-3xl"></div>
                    <img
                      src="/lovable-uploads/bb69a6e7-18eb-48d3-bd42-b46cd197bcf3.png"
                      alt="Professional customer support specialist providing technical assistance"
                      className="relative w-full h-[450px] object-cover rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
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
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-16 py-8 text-2xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-110 font-light rounded-2xl"
              asChild
            >
              <Link to="/contact">
                <ArrowRight className="mr-4 h-8 w-8" />
                Get Started Today
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 z-50"
        size="sm"
      >
        <ArrowRight className="h-6 w-6 transform -rotate-90" />
      </Button>
    </div>
  );
};

export default Services;
