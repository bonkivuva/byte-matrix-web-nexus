import {
  ArrowRight,
  Star,
  Zap,
  CheckCircle,
  Users,
  Award,
  Target,
  Rocket,
  Shield,
  Server,
  Computer,
  Clock,
  Heart,
  FolderCheck,
  Calendar,
  Headphones,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FuturisticHeader from "@/components/FuturisticHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Testimonials from "@/components/Testimonials";

const Portfolio = () => {
  const statsData = [
    { 
      number: "500+", 
      label: "Happy Clients", 
      icon: Heart, 
      gradient: "from-rose-500 via-pink-500 to-red-500",
      bgGlow: "bg-rose-500/20",
      description: "Satisfied customers worldwide"
    },
    { 
      number: "1000+", 
      label: "Projects Completed", 
      icon: FolderCheck, 
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      bgGlow: "bg-emerald-500/20",
      description: "Successful deliveries"
    },
    { 
      number: "5+", 
      label: "Years Experience", 
      icon: Calendar, 
      gradient: "from-violet-500 via-purple-500 to-indigo-500",
      bgGlow: "bg-violet-500/20",
      description: "Industry expertise"
    },
    { 
      number: "24/7", 
      label: "Support Available", 
      icon: Headphones, 
      gradient: "from-amber-500 via-orange-500 to-yellow-500",
      bgGlow: "bg-amber-500/20",
      description: "Always here to help"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-quantum font-cyber text-foreground relative overflow-hidden">
      <SEOHead 
        title="Portfolio - Our Success Stories | Byte Matrix Technologies"
        description="Explore our portfolio of successful IT projects and client transformations. See how we've helped businesses achieve digital excellence and growth."
        keywords="IT portfolio, client success stories, technology projects, digital transformation examples, enterprise solutions"
      />
      
      <FuturisticHeader currentPage="portfolio" />
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-slate-100/30 dark:from-blue-950/30 dark:to-slate-900/30"></div>
      </div>

      {/* Hero Section */}
      <section className="section-spacing pt-32 relative z-10">
        <div className="container-professional">
          <div className="text-center mb-20 animate-fade-up">
            <div className="inline-flex items-center px-8 py-4 glass-premium rounded-full text-cyber-blue dark:text-cyber-blue font-semibold mb-8 text-lg shadow-brand animate-float-smooth">
              <Star className="w-6 h-6 mr-3 text-cyber-yellow animate-glow-pulse" />
              Our Success Stories
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 tracking-tight">
              <span className="text-foreground">Our Track Record</span>
              <br />
              <span className="text-gradient-cyber">Speaks for Itself</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-light max-w-5xl mx-auto leading-relaxed">
              Take a look at what we've accomplished for businesses just like yours. Real results, real impact, real success stories.
            </p>
            <div className="w-32 h-1 bg-gradient-cyber mx-auto mt-8 rounded-full shadow-cyber"></div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {statsData.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="card-premium hover-lift-premium group text-center border-0 relative overflow-hidden h-full">
                    {/* Background glow effect */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 ${metric.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                    <div className={`absolute -bottom-20 -left-20 w-40 h-40 ${metric.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                    
                    <CardContent className="p-8 lg:p-10 relative z-10">
                      {/* Icon Container with enhanced styling */}
                      <motion.div 
                        className={`relative w-24 h-24 mx-auto mb-6`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Outer ring */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} rounded-2xl opacity-20 animate-pulse`} 
                          style={{ transform: 'rotate(45deg)' }} 
                        />
                        {/* Inner container */}
                        <div className={`absolute inset-2 bg-gradient-to-br ${metric.gradient} rounded-xl shadow-2xl flex items-center justify-center`}>
                          {/* Icon glow */}
                          <div className="absolute inset-0 bg-white/20 rounded-xl" />
                          <IconComponent className="h-12 w-12 text-white drop-shadow-lg relative z-10" strokeWidth={1.5} />
                        </div>
                        {/* Decorative dots */}
                        <div className={`absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br ${metric.gradient} rounded-full animate-ping`} />
                        <div className={`absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-br ${metric.gradient} rounded-full opacity-60`} />
                      </motion.div>
                      
                      {/* Number */}
                      <h3 className={`text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent`}>
                        {metric.number}
                      </h3>
                      
                      {/* Label */}
                      <p className="text-foreground font-semibold text-lg mb-1">
                        {metric.label}
                      </p>
                      
                      {/* Description */}
                      <p className="text-muted-foreground text-sm font-light">
                        {metric.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="mb-20">
            <div className="text-center mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="inline-flex items-center px-8 py-4 glass-premium rounded-full text-cyber-purple dark:text-cyber-purple font-semibold mb-8 text-lg shadow-brand">
                <Target className="w-6 h-6 mr-3 text-cyber-pink animate-glow" />
                Featured Projects
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Solutions That <span className="text-gradient-cyber">Make a Difference</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {[
                {
                  title: "Enterprise Network Infrastructure",
                  description: "Complete network overhaul for a 200+ employee organization, including server installation, security implementation, and cloud migration",
                  image: "/lovable-uploads/8a8cda77-4bf8-4392-97fc-d1cb7057e068.png",
                  technologies: ["Cisco Networking", "Windows Server", "Cloud Migration", "Cybersecurity"],
                  results: ["99.9% Uptime", "50% Faster Operations", "Zero Security Incidents"],
                  gradient: "from-blue-500 to-cyan-500",
                  icon: Server
                },
                {
                  title: "Educational Technology Suite",
                  description: "Comprehensive IT solutions for educational institutions including computer labs, interactive displays, and learning management systems",
                  image: "/lovable-uploads/f858d253-338e-48f5-bfea-74af9143bbcd.png",
                  technologies: ["Computer Labs", "Interactive Displays", "Network Setup", "Educational Software"],
                  results: ["300+ Students Served", "Enhanced Learning", "Teacher Satisfaction"],
                  gradient: "from-green-500 to-emerald-500",
                  icon: Computer
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="card-premium hover-lift-premium group border-0 overflow-hidden animate-fade-up relative"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-700`}></div>
                  <div className="absolute top-0 left-0 w-full h-3 bg-gradient-cyber opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative z-10">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-115"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/70 transition-all duration-700"></div>
                      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
                        <div className="w-16 h-16 bg-gradient-cyber rounded-2xl flex items-center justify-center shadow-cyber-lg">
                          <Zap className="h-8 w-8 text-white animate-pulse" />
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-6">
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-3xl flex items-center justify-center mr-5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-brand-lg`}>
                          <project.icon className="h-8 w-8 text-white group-hover:animate-pulse" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-foreground group-hover:text-gradient-cyber transition-all duration-500">
                          {project.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-muted-foreground leading-relaxed font-light text-lg">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="mb-8">
                        <h4 className="font-bold text-foreground mb-4 text-lg">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 glass-professional text-cyber-blue dark:text-cyber-blue text-sm rounded-full border border-cyber-blue/20 hover:border-cyber-blue hover:bg-cyber-blue hover:text-white transition-all duration-300 shadow-brand"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-4 text-lg">Key Results:</h4>
                        <div className="space-y-3">
                          {project.results.map((result, idx) => (
                            <div key={idx} className="flex items-center space-x-4">
                              <div className="w-8 h-8 bg-gradient-to-r from-cyber-green to-cyber-blue rounded-full flex items-center justify-center flex-shrink-0 shadow-brand">
                                <CheckCircle className="h-4 w-4 text-white" />
                              </div>
                              <span className="text-muted-foreground font-light text-lg">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Testimonials />

          <div className="mb-20">
            <div className="text-center mb-16 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <div className="inline-flex items-center px-8 py-4 glass-premium rounded-full text-cyber-green dark:text-cyber-green font-semibold mb-8 text-lg shadow-brand">
                <Award className="w-6 h-6 mr-3 text-cyber-yellow animate-glow" />
                The Byte Matrix Advantage
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Businesses <span className="text-gradient-cyber">Choose Us</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light">
                We're not just another IT company. Here's what makes partnering with us different (and better) for your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "We Focus on Your Goals",
                  description: "Technology should serve your business, not complicate it. We start by understanding what you're trying to achieve, then build solutions that get you there.",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Shield,
                  title: "Your Data Stays Safe", 
                  description: "We take security seriously so you can sleep soundly. From small businesses to large enterprises, we protect your information like it's our own.",
                  gradient: "from-red-500 to-pink-500"
                },
                {
                  icon: Rocket,
                  title: "Built to Grow With You",
                  description: "Today's solution, tomorrow's foundation. We design systems that scale effortlessly as your business expands and evolves.",
                  gradient: "from-purple-500 to-indigo-500"
                },
                {
                  icon: Users,
                  title: "Support That Actually Helps",
                  description: "No automated runarounds or endless hold times. When you call, you get a real person who knows your setup and genuinely wants to help.",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  icon: CheckCircle,
                  title: "Experience You Can Trust",
                  description: "We've been there, done that, and learned from it. With hundreds of successful projects under our belt, we know how to get things right.",
                  gradient: "from-orange-500 to-yellow-500"
                },
                {
                  icon: Zap,
                  title: "Fast Without the Hassle",
                  description: "We value your time. Our efficient processes and well-tested solutions mean you're up and running quickly—without the growing pains.",
                  gradient: "from-indigo-500 to-purple-500"
                }
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="card-premium hover-lift-premium animate-fade-up group border-0 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-700 rounded-3xl`}></div>
                  <CardContent className="p-10 relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-700 shadow-brand-lg`}>
                      <benefit.icon className="h-10 w-10 text-white group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-gradient-cyber transition-all duration-500">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-light text-lg">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <div className="glass-premium rounded-3xl p-12 lg:p-20 shadow-brand-lg border border-cyber-blue/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-cyber opacity-5"></div>
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Let's Write Your <span className="text-gradient-cyber">Success Story</span>
                </h2>
                <p className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                  Hundreds of businesses trust us with their technology. Ready to see what we can do for yours? Let's have a conversation about your goals and how we can help you achieve them.
                </p>
                <Button
                  size="lg"
                  className="btn-cyber text-2xl px-16 py-8 shadow-brand-lg hover:shadow-brand-lg transition-all duration-700 transform hover:-translate-y-4 hover:scale-110 font-bold rounded-2xl group relative overflow-hidden"
                  asChild
                >
                  <Link to="/contact">
                    <Rocket className="mr-4 h-8 w-8 group-hover:rotate-12 transition-transform duration-500" />
                    Start Your Project
                    <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-2 transition-transform duration-500" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-cyber text-white p-5 rounded-full shadow-brand-lg hover:shadow-brand-lg transition-all duration-500 z-50 hover:scale-110 group"
        size="icon"
      >
        <ArrowRight className="h-6 w-6 transform -rotate-90 group-hover:animate-pulse" />
      </Button>

      <Footer />
    </div>
  );
};

export default Portfolio;
