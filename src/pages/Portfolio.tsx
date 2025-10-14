
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
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FuturisticHeader from "@/components/FuturisticHeader";
import SEOHead from "@/components/SEOHead";
import Testimonials from "@/components/Testimonials";

const Portfolio = () => {
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

      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30 rounded-full text-blue-700 dark:text-blue-300 font-semibold mb-8 text-lg shadow-lg">
              <Star className="w-6 h-6 mr-3 text-blue-600" />
              Our Success Stories
            </div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              Our Track Record Speaks for Itself
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light max-w-5xl mx-auto leading-relaxed">
              Take a look at what we've accomplished for businesses just like yours. Real results, real impact, real success stories.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto mt-8 rounded-full shadow-lg"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {[
              { number: "500+", label: "Happy Clients", icon: Users, gradient: "from-blue-500 to-cyan-500" },
              { number: "1000+", label: "Projects Completed", icon: CheckCircle, gradient: "from-green-500 to-emerald-500" },
              { number: "5+", label: "Years Experience", icon: Award, gradient: "from-purple-500 to-pink-500" },
              { number: "24/7", label: "Support Available", icon: Shield, gradient: "from-orange-500 to-red-500" },
            ].map((metric, index) => (
              <Card
                key={index}
                className="glass-card hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 animate-fade-in group border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${metric.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 transition-all duration-500 shadow-xl`}>
                    <metric.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                    {metric.number}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-light">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-purple-200/30 dark:border-purple-700/30 rounded-full text-purple-700 dark:text-purple-300 font-semibold mb-8 text-lg shadow-lg">
                <Target className="w-6 h-6 mr-3 text-purple-600" />
                Featured Projects
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Solutions That <span className="text-gradient-primary">Make a Difference</span>
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
                  className="group border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 hover:scale-105 bg-white/85 dark:bg-gray-800/85 backdrop-blur-xl overflow-hidden animate-fade-in relative"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative z-10">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/60 transition-all duration-700"></div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Zap className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <CardHeader className="pb-4">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-125 transition-all duration-500 shadow-xl`}>
                          <project.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                          {project.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-lg">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 text-sm rounded-full border border-blue-200/30 dark:border-blue-700/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Results:</h4>
                        <div className="space-y-2">
                          {project.results.map((result, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="h-3 w-3 text-white" />
                              </div>
                              <span className="text-gray-700 dark:text-gray-300 font-light">{result}</span>
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
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600/10 to-emerald-600/10 backdrop-blur-sm border border-green-200/30 dark:border-green-700/30 rounded-full text-green-700 dark:text-green-300 font-semibold mb-8 text-lg shadow-lg">
                <Award className="w-6 h-6 mr-3 text-green-600" />
                The Byte Matrix Advantage
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why Businesses <span className="text-gradient-primary">Choose Us</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light">
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
                  className="glass-card hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 animate-fade-in group border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                  <CardContent className="p-8 relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-all duration-500 shadow-xl`}>
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-50/60 via-indigo-50/40 to-purple-50/30 dark:from-blue-900/20 dark:via-indigo-900/15 dark:to-purple-900/15 rounded-3xl p-12 lg:p-16 shadow-2xl border border-blue-100/30 dark:border-blue-800/30 backdrop-blur-sm">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Write Your <span className="text-gradient-primary">Success Story</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
                Hundreds of businesses trust us with their technology. Ready to see what we can do for yours? Let's have a conversation about your goals and how we can help you achieve them.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-16 py-8 text-2xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-110 font-medium rounded-2xl group"
                asChild
              >
                <Link to="/contact">
                  <Rocket className="mr-4 h-8 w-8" />
                  Start Your Project
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        size="sm"
      >
        <ArrowRight className="h-5 w-5 transform -rotate-90" />
      </Button>
    </div>
  );
};

export default Portfolio;
