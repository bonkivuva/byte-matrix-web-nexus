
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Shield,
  Zap,
  Star,
  Lightbulb,
  Target,
  TrendingUp,
  Heart,
  Sparkles,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="min-h-screen bg-white dark:bg-gray-900 font-light transition-colors duration-300 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-float"></div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-100/50 dark:border-gray-800/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                alt="Byte Matrix Technologies"
                className="h-20 w-auto drop-shadow-lg transition-transform hover:scale-105 group-hover:drop-shadow-2xl"
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
                className="text-gradient-primary font-semibold text-lg relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient"></span>
                <Sparkles className="inline-block w-4 h-4 ml-1 text-blue-500 animate-pulse" />
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
                className="text-gray-700 dark:text-gray-300 hover:text-gradient-primary transition-all duration-300 font-medium text-lg relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="ml-4 p-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
              >
                {isDarkMode ? <Sun className="h-6 w-6 text-yellow-500 animate-pulse" /> : <Moon className="h-6 w-6 text-blue-600 animate-pulse" />}
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
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4 animate-fade-in">
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
      <section className="py-24 bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-indigo-50/40 dark:from-gray-900/90 dark:via-blue-900/20 dark:to-purple-900/10 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold mb-8 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 animate-pulse-slow">
              <Sparkles className="w-6 h-6 mr-3 animate-spin" />
              Welcome to Innovation
              <Sparkles className="w-6 h-6 ml-3 animate-spin" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gradient-primary mb-8 tracking-tight text-shadow-lg leading-tight animate-scale-in">
              BYTE MATRIX TECHNOLOGIES
            </h1>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-wider animate-slide-up" style={{animationDelay: '0.3s'}}>
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                YOUR TECHNOLOGY PARTNER
              </span>
            </div>
            <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto font-medium text-shadow-sm mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
              Empowering businesses with cutting-edge technology solutions, premium hardware, and exceptional support services that drive growth and innovation.
            </p>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto mt-8 rounded-full shadow-lg animate-pulse"></div>
            
            {/* Floating Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12 animate-slide-up" style={{animationDelay: '0.9s'}}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-6 text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 font-semibold group"
                asChild
              >
                <Link to="/services">
                  <Zap className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                  Explore Services
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-3 border-purple-500/50 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-600 px-12 py-6 text-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-2 font-semibold group"
                asChild
              >
                <Link to="/contact">
                  <Heart className="mr-3 h-6 w-6 group-hover:animate-pulse text-red-500" />
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Users, number: "500+", label: "Happy Clients", color: "text-blue-600" },
              { icon: Award, number: "99%", label: "Success Rate", color: "text-green-600" },
              { icon: Shield, number: "24/7", label: "Support", color: "text-purple-600" },
              { icon: TrendingUp, number: "5+", label: "Years Experience", color: "text-orange-600" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-110 transition-all duration-300 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center group-hover:shadow-xl transition-all duration-300 ${stat.color.includes('blue') ? 'group-hover:from-blue-100 group-hover:to-blue-50' : stat.color.includes('green') ? 'group-hover:from-green-100 group-hover:to-green-50' : stat.color.includes('purple') ? 'group-hover:from-purple-100 group-hover:to-purple-50' : 'group-hover:from-orange-100 group-hover:to-orange-50'}`}>
                  <stat.icon className={`h-10 w-10 ${stat.color} dark:${stat.color.replace('600', '400')} group-hover:animate-pulse`} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} dark:${stat.color.replace('600', '400')} mb-2 group-hover:animate-pulse`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-gradient-to-br from-gray-50/80 via-blue-50/40 to-purple-50/20 dark:from-gray-900/90 dark:via-blue-900/20 dark:to-purple-900/10 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 animate-fade-in">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold mb-8 text-lg shadow-xl">
                <Target className="w-5 h-5 mr-3 animate-pulse" />
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-primary mb-8 tracking-tight text-shadow-lg leading-tight">
                TRANSFORMING BUSINESSES WITH TECHNOLOGY
              </h2>
              <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto font-medium text-shadow-sm">
                We are your trusted partner in digital transformation, delivering innovative solutions that drive success.
              </p>
              <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto mt-8 rounded-full shadow-lg animate-pulse"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="animate-slide-up">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
                  <img
                    src="/lovable-uploads/32aed714-c356-4ff9-9e3d-017e2f1071af.png"
                    alt="Modern technology workspace showcasing our expertise"
                    className="relative w-full h-[400px] object-cover rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <Sparkles className="w-6 h-6 text-blue-600 animate-spin" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Lightbulb className="w-8 h-8 text-yellow-500 mr-3 animate-pulse" />
                    Our Mission
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                    To empower businesses with cutting-edge technology solutions that enhance productivity, 
                    streamline operations, and drive sustainable growth in an ever-evolving digital landscape.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: CheckCircle, text: "Premium Quality Hardware", color: "text-green-600" },
                    { icon: Shield, text: "24/7 Technical Support", color: "text-blue-600" },
                    { icon: Zap, text: "Lightning Fast Solutions", color: "text-yellow-600" },
                    { icon: Heart, text: "Customer-Centric Approach", color: "text-red-600" },
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 group hover:scale-105 transition-all duration-300">
                      <div className={`w-12 h-12 ${feature.color.includes('green') ? 'bg-green-100 dark:bg-green-900/30' : feature.color.includes('blue') ? 'bg-blue-100 dark:bg-blue-900/30' : feature.color.includes('yellow') ? 'bg-yellow-100 dark:bg-yellow-900/30' : 'bg-red-100 dark:bg-red-900/30'} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all duration-300`}>
                        <feature.icon className={`h-6 w-6 ${feature.color} dark:${feature.color.replace('600', '400')} group-hover:animate-pulse`} />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-20">
              <div className="text-center mb-16 animate-fade-in">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                  ✨ Why Choose Byte Matrix Technologies?
                </h3>
                <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-light">
                  Experience the difference with our premium technology solutions and exceptional service.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Award,
                    title: "Industry Excellence",
                    description: "Recognized for delivering outstanding technology solutions with proven results",
                    gradient: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: Users,
                    title: "Expert Team",
                    description: "Skilled professionals dedicated to your success with years of experience",
                    gradient: "from-purple-500 to-pink-500"
                  },
                  {
                    icon: Zap,
                    title: "Rapid Innovation",
                    description: "Stay ahead with the latest technology trends and cutting-edge solutions",
                    gradient: "from-orange-500 to-red-500"
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden animate-scale-in"
                    style={{animationDelay: `${index * 0.2}s`}}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <CardHeader className="text-center pb-4 relative z-10">
                      <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                        <item.icon className="h-10 w-10 text-white group-hover:animate-pulse" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gradient-primary transition-all duration-300">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed font-light group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center animate-fade-in">
              <div className="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-600/10 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-indigo-900/20 rounded-3xl p-12 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 hover:border-blue-300/50 dark:hover:border-blue-700/50 transition-all duration-300">
                <div className="flex justify-center mb-8">
                  <div className="flex -space-x-4">
                    <Star className="w-12 h-12 text-yellow-500 animate-pulse" />
                    <Star className="w-12 h-12 text-yellow-500 animate-pulse" style={{animationDelay: '0.2s'}} />
                    <Star className="w-12 h-12 text-yellow-500 animate-pulse" style={{animationDelay: '0.4s'}} />
                  </div>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto font-light">
                  Join hundreds of satisfied clients who have revolutionized their operations with our technology solutions.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 font-semibold group"
                  asChild
                >
                  <Link to="/contact">
                    <Sparkles className="mr-3 h-6 w-6 group-hover:animate-spin" />
                    Start Your Journey
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 group hover:scale-110"
        size="sm"
      >
        <ArrowRight className="h-6 w-6 transform -rotate-90 group-hover:animate-pulse" />
      </Button>
    </div>
  );
};

export default About;
