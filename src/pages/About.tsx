import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Shield,
  Zap,
  Server,
  Star,
  Lightbulb,
  Moon,
  Sun,
  Menu,
  X,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";

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
    <div className="min-h-screen bg-white dark:bg-gray-900 font-light transition-colors duration-300 relative">
      {/* Background Logo */}
      <header className="border-b border-gray-100/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Centered Company Logo */}
            <div className="flex-1 flex justify-center">
              <img
                src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                alt="Byte Matrix Technologies"
                className="h-24 w-auto drop-shadow-2xl transition-transform hover:scale-105 animate-pulse-slow"
                loading="eager"
                style={{
                  filter: "contrast(1.2) saturate(1.3) brightness(1.1) drop-shadow(0 8px 32px rgba(59, 130, 246, 0.25))",
                }}
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 absolute right-6">
              <Link
                to="/services"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium text-lg relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium text-lg relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="ml-4 p-3 hover:bg-blue-50 dark:hover:bg-gray-800"
              >
                {isDarkMode ? <Sun className="h-6 w-6 text-yellow-500" /> : <Moon className="h-6 w-6 text-blue-600" />}
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden absolute right-6">
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
                  to="/services"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
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

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-indigo-50/40 dark:from-gray-900/90 dark:via-blue-900/20 dark:to-purple-900/10 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold mb-8 text-lg shadow-xl">
                <Star className="w-5 h-5 mr-3" />
                About Us
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-primary mb-8 tracking-tight text-shadow-lg leading-tight">
                Your Technology Partner
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-loose mb-10 font-medium text-shadow-sm">
                At Byte Matrix Technologies, we specialize in delivering comprehensive IT solutions
                that empower businesses to thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-light"
                  asChild
                >
                  <Link to="/services">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Explore Services
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-4 text-lg transition-all duration-300 font-light"
                  asChild
                >
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-scale-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-2xl animate-pulse-slow"></div>
                <img
                  src="/lovable-uploads/b23292c5-517f-450d-a2ea-e81562ad4b3b.png"
                  alt="Modern startup office with diverse team collaborating on technology projects"
                  className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <div className="mb-20">
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            { number: "500+", label: "Satisfied Clients", icon: Users, color: "from-blue-500 to-cyan-500" },
            { number: "10+", label: "Industries Served", icon: Award, color: "from-purple-500 to-pink-500" },
            { number: "99.9%", label: "Uptime Guarantee", icon: Shield, color: "from-green-500 to-emerald-500" },
            { number: "24/7", label: "Support Available", icon: Zap, color: "from-orange-500 to-red-500" },
          ].map((stat, index) => (
            <div key={index} className="text-center group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-all duration-500 shadow-xl`}>
                <stat.icon className="h-10 w-10 text-white" />
              </div>
              <div className="text-5xl font-bold text-gradient-primary mb-3 text-shadow-md">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <div className="mb-20">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-blue-100/50 dark:border-blue-800/50">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 font-light mb-6">
              <Lightbulb className="w-4 h-4 mr-2" />
              Complete Solutions Portfolio
            </div>
            <h3 className="text-2xl lg:text-3xl font-extralight text-gray-900 dark:text-white mb-6">Tailored for Every Need</h3>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto font-extralight">
            Whether you need <span className="font-light text-blue-600 dark:text-blue-400">dependable tech support</span> for
            seamless operations,
            <span className="font-light text-blue-600 dark:text-blue-400"> high-performance computing equipment</span> for demanding
            workloads, or <span className="font-light text-blue-600 dark:text-blue-400">efficient printing solutions</span> for
            streamlined document management, we provide innovative answers to your most pressing technology
            challenges.
          </p>
        </div>
      </div>

      {/* Professional Expertise */}
      <div className="mb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&h=450&fit=crop&crop=center"
                alt="IT professional working on computer systems and network infrastructure"
                className="relative w-full h-[450px] object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 font-light mb-6">
              <Award className="w-4 h-4 mr-2" />
              Professional Excellence
            </div>
            <h3 className="text-3xl lg:text-4xl font-extralight text-gray-900 dark:text-white mb-6 tracking-tight">
              From Startups to Enterprises
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-extralight">
              From small startups establishing their technological foundation to large enterprises seeking
              scalable solutions, we assist at every stage of your digital journey. Our certified technicians
              ensure solutions are implemented correctly and maintained professionally.
            </p>
            <div className="space-y-4">
              {[
                "Certified professionals with proven industry expertise",
                "Hands-on approach to every project and challenge",
                "Ongoing support with proactive maintenance",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What Sets Us Apart */}
      <div className="mb-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 font-light mb-6">
            <Star className="w-4 h-4 mr-2" />
            What Sets Us Apart
          </div>
          <h3 className="text-3xl lg:text-4xl font-extralight text-gray-900 dark:text-white mb-6 tracking-tight">
            Our Competitive Edge
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Users,
              title: "Cross-Industry Expertise",
              description:
                "Years of experience serving diverse sectors gives us deep understanding of unique industry demands and specialized solution requirements.",
            },
            {
              icon: Zap,
              title: "Customized Strategies",
              description:
                "No one-size-fits-all approaches. We craft personalized strategies and select premium products that align with your specific goals and budget.",
            },
            {
              icon: Shield,
              title: "Uncompromising Quality",
              description:
                "Every service and product undergoes rigorous quality checks to ensure maximum reliability, optimal performance, and long-term durability.",
            },
            {
              icon: Server,
              title: "Proactive Excellence",
              description:
                "We don't just react to issues—we anticipate them. Through continuous monitoring and preventive maintenance, we maximize your productivity.",
            },
          ].map((item, index) => (
            <div key={index} className="group">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 dark:border-gray-700/50 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-light text-gray-900 dark:text-white mb-4">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-extralight">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative">
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-12 text-white text-center shadow-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.3) 1px, transparent 0)',
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-extralight mb-6">
              Transform Your Technology Into Strategic Advantage
            </h3>
            <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto mb-8 font-extralight">
              Let us be your trusted partner in achieving digital excellence. Discover how BYTE MATRIX
              TECHNOLOGIES can revolutionize your technology infrastructure and drive your success forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 text-lg shadow-xl hover:shadow-2xl font-light transition-all duration-300 transform hover:-translate-y-1"
                asChild
              >
                <Link to="/contact">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Start Your Transformation
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-blue-600 hover:border-transparent px-10 py-4 text-lg bg-transparent transition-all duration-300 transform hover:-translate-y-1 font-light"
                asChild
              >
                <Link to="/services">Explore Our Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        size="sm"
      >
        <ArrowRight className="h-5 w-5 transform -rotate-90" />
      </Button>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-400 py-16 relative overflow-hidden">
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
                className="h-20 w-auto drop-shadow-xl transition-transform hover:scale-110"
                loading="lazy"
                style={{
                  filter: "contrast(1.2) saturate(1.2) brightness(1.1) drop-shadow(0 8px 32px rgba(59, 130, 246, 0.3))",
                }}
              />
              <p className="text-gradient-secondary font-medium text-lg italic">"Connecting Your Digital Matrix"</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-base font-medium text-gray-300">© 2024 BYTE MATRIX TECHNOLOGIES. All rights reserved.</p>
              <p className="text-sm mt-2 text-gray-500 font-light">Expert IT Solutions for Modern Businesses</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <div className="flex justify-center space-x-12">
              {[
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-gray-400 hover:text-gradient-secondary transition-all duration-300 font-medium text-lg relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
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
