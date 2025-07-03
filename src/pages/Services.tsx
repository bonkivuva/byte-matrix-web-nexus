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
  Play,
  Target,
  Rocket,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-roboto transition-all duration-700 relative overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[900px] h-[900px] bg-gradient-to-br from-blue-400/8 to-cyan-400/8 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-[900px] h-[900px] bg-gradient-to-tr from-purple-400/8 to-pink-400/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/6 to-blue-400/6 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-emerald-400/6 to-teal-400/6 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Premium Header - without logo */}
      <header className="border-b border-gray-100/20 dark:border-gray-800/20 bg-white/85 dark:bg-gray-900/85 backdrop-blur-2xl sticky top-0 z-50 shadow-2xl">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-4 group">
              <h1 className="text-2xl font-bold text-gradient-primary">Byte Matrix Technologies</h1>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-500 font-medium text-lg relative group"
              >
                About
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 group-hover:w-full rounded-full"></span>
              </Link>
              <Link
                to="/services"
                className="text-gradient-primary font-semibold text-lg relative"
              >
                Services
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg"></span>
              </Link>
              <Link
                to="/portfolio"
                className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-500 font-medium text-lg relative group"
              >
                Portfolio
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 group-hover:w-full rounded-full"></span>
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-500 font-medium text-lg relative group"
              >
                Contact
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 group-hover:w-full rounded-full"></span>
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
                  to="/portfolio"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
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

      {/* Hero Services Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-indigo-50/10 dark:from-gray-900/95 dark:via-blue-900/5 dark:to-purple-900/5 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30 rounded-full text-blue-700 dark:text-blue-300 font-semibold mb-8 text-lg shadow-lg">
              <Rocket className="w-6 h-6 mr-3 animate-pulse" />
              Our Premium Services
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-primary mb-8 tracking-tight leading-tight">
              COMPLETE TECHNOLOGY SOLUTIONS
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-5xl mx-auto font-light leading-relaxed">
              From infrastructure to devices, we deliver comprehensive tech solutions tailored to your unique business needs with unmatched expertise and innovation
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto mt-8 rounded-full shadow-lg"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
                gradient: "from-blue-500 to-cyan-500",
                delay: "0s"
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
                gradient: "from-purple-500 to-pink-500",
                delay: "0.1s"
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
                gradient: "from-green-500 to-emerald-500",
                delay: "0.2s"
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
                gradient: "from-orange-500 to-red-500",
                delay: "0.3s"
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
                gradient: "from-indigo-500 to-purple-500",
                delay: "0.4s"
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
                gradient: "from-yellow-500 to-orange-500",
                delay: "0.5s"
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 hover:scale-105 bg-white/85 dark:bg-gray-800/85 backdrop-blur-xl overflow-hidden animate-fade-in relative"
                style={{ animationDelay: service.delay }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/50 transition-all duration-700"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 transition-all duration-500 shadow-xl group-hover:shadow-2xl`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                          <span className="text-gray-700 dark:text-gray-300 font-light text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Premium Customer Support Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-blue-50/60 via-indigo-50/40 to-purple-50/30 dark:from-blue-900/20 dark:via-indigo-900/15 dark:to-purple-900/15 rounded-3xl p-12 lg:p-16 shadow-2xl border border-blue-100/30 dark:border-blue-800/30 overflow-hidden backdrop-blur-sm relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-50"></div>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30 rounded-full text-blue-700 dark:text-blue-300 font-semibold mb-6 text-lg">
                    <Target className="w-5 h-5 mr-3 animate-pulse" />
                    Customer Support Excellence
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                    24/7 Professional Support
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-light">
                    Our dedicated support specialists are available around the clock to assist you with any technical
                    challenges. From troubleshooting to guidance, we provide personalized support that keeps your
                    business running smoothly and efficiently with guaranteed response times.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {[
                      "24/7 Live Support",
                      "Expert Technical Guidance",
                      "Remote Troubleshooting",
                      "Priority Response Times",
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 font-light text-lg rounded-2xl group"
                    asChild
                  >
                    <Link to="/contact">
                      <Headphones className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                      Get Support Now
                    </Link>
                  </Button>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl animate-pulse-slow"></div>
                    <img
                      src="/lovable-uploads/bb69a6e7-18eb-48d3-bd42-b46cd197bcf3.png"
                      alt="Professional customer support specialist providing technical assistance"
                      className="relative w-full h-[400px] object-cover rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-16 py-8 text-2xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-110 font-light rounded-2xl group"
              asChild
            >
              <Link to="/contact">
                <Rocket className="mr-4 h-8 w-8 group-hover:animate-pulse" />
                Get Started Today
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-125 z-50 animate-pulse-slow"
        size="sm"
      >
        <ArrowRight className="h-6 w-6 transform -rotate-90" />
      </Button>
    </div>
  );
};

export default Services;
