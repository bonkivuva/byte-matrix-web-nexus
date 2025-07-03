
import { ArrowRight, CheckCircle, Computer, HardDrive, Mail, Phone, Printer, Server, Shield, Zap, Star, Users, Award, Lightbulb, Headphones, Sparkles, Play, Target, Rocket, TrendingUp, Clock, Award as AwardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ProfessionalHeader from "@/components/ProfessionalHeader";

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "IT Infrastructure & Support",
      description: "Increase productivity by 40% with our comprehensive IT infrastructure management and 24/7 support services",
      image: "/lovable-uploads/8a8cda77-4bf8-4392-97fc-d1cb7057e068.png",
      benefits: [
        "99.9% uptime guarantee",
        "24/7 monitoring & support",
        "Scalable cloud solutions",
        "Advanced cybersecurity",
        "Cost reduction up to 30%"
      ],
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: HardDrive,
      title: "Enterprise Hardware Solutions",
      description: "Boost performance by 50% with our enterprise-grade hardware solutions tailored for your business needs",
      image: "/lovable-uploads/fab2577d-98ee-4879-ac95-c1a0ade0afa7.png",
      benefits: [
        "Latest enterprise technology",
        "Custom configurations",
        "Extended warranty coverage",
        "Professional installation",
        "Performance optimization"
      ],
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      icon: Computer,
      title: "Business Desktop Solutions",
      description: "Enhance workflow efficiency by 35% with high-performance desktop systems designed for professional environments",
      image: "/lovable-uploads/f858d253-338e-48f5-bfea-74af9143bbcd.png",
      benefits: [
        "Business-grade reliability",
        "Custom specifications",
        "Multi-monitor support",
        "Energy-efficient designs",
        "3-year warranty included"
      ],
      gradient: "from-green-600 to-emerald-600"
    },
    {
      icon: Computer,
      title: "Professional Laptops",
      description: "Increase mobility and productivity by 45% with our premium laptop solutions for modern professionals",
      image: "/lovable-uploads/f1e6cb6e-37c8-4aac-addb-2b38d4f23412.png",
      benefits: [
        "Ultra-portable designs",
        "All-day battery life",
        "Enterprise security features",
        "SSD storage standard",
        "Business support included"
      ],
      gradient: "from-orange-600 to-red-600"
    },
    {
      icon: Printer,
      title: "Printing & Document Solutions",
      description: "Reduce printing costs by 25% while improving document workflow with our comprehensive printing solutions",
      image: "/lovable-uploads/a80fa3b7-bf9b-4d7c-8af1-a74162bae6a6.png",
      benefits: [
        "Cost-effective printing",
        "Document management",
        "Wireless connectivity",
        "Eco-friendly options",
        "Maintenance included"
      ],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Shield,
      title: "Technical Support & Maintenance",
      description: "Minimize downtime by 80% with our proactive technical support and comprehensive maintenance services",
      image: "/lovable-uploads/d29f94dc-9102-4701-adec-42bc48de5bfb.png",
      benefits: [
        "Proactive monitoring",
        "Remote troubleshooting",
        "On-site repairs available",
        "Preventive maintenance",
        "Expert consultation"
      ],
      gradient: "from-yellow-600 to-orange-600"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", description: "Businesses trust our solutions" },
    { icon: Clock, value: "99.9%", label: "Uptime Guarantee", description: "Reliable service delivery" },
    { icon: TrendingUp, value: "40%", label: "Productivity Boost", description: "Average client improvement" },
    { icon: AwardIcon, value: "24/7", label: "Support Available", description: "Round-the-clock assistance" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <ProfessionalHeader currentPage="services" />

      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-blue-50/50 via-white to-neutral-50 dark:from-neutral-900 dark:via-blue-900/5 dark:to-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-neutral-100 dark:bg-grid-neutral-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))]"></div>
        
        <div className="container-professional relative">
          <div className="text-center max-w-4xl mx-auto animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Professional IT Solutions
            </div>
            
            <h1 className="text-gradient-brand mb-6">
              Complete Technology Solutions That Drive Results
            </h1>
            
            <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive IT services. From infrastructure to support, 
              we deliver solutions that increase productivity, reduce costs, and ensure reliable performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild className="btn-professional text-lg px-8 py-4">
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </Link>
              </Button>
              <Button variant="outline" asChild className="btn-professional-outline text-lg px-8 py-4">
                <Link to="/portfolio">
                  <Play className="mr-2 h-5 w-5" />
                  View Our Work
                </Link>
              </Button>
            </div>
            
            {/* Stats Grid */}
            <div className="grid-professional-4 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-scale-in-center" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl mb-3">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-gradient-brand mb-1">{stat.value}</div>
                  <div className="font-semibold text-neutral-900 dark:text-white mb-1">{stat.label}</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing">
        <div className="container-professional">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-gradient-brand mb-4">Our Professional Services</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to enhance your business performance and efficiency
            </p>
          </div>

          <div className="grid-professional-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="card-professional group overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center opacity-90`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-neutral-700 dark:text-neutral-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Excellence Section */}
      <section className="section-spacing bg-gradient-to-br from-blue-50 via-neutral-50 to-white dark:from-blue-900/10 dark:via-neutral-800 dark:to-neutral-900">
        <div className="container-professional">
          <div className="grid-professional-2 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
                <Target className="w-4 h-4 mr-2" />
                Excellence in Support
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
                24/7 Professional Support That Never Sleeps
              </h3>
              
              <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8">
                Our dedicated team of certified professionals provides round-the-clock support to ensure 
                your business operations run smoothly. Experience faster resolution times and proactive 
                monitoring that prevents issues before they impact your productivity.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  "< 15 min response time",
                  "Certified technicians",
                  "Proactive monitoring",
                  "Remote diagnostics"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild className="btn-professional">
                <Link to="/contact">
                  <Headphones className="mr-2 h-5 w-5" />
                  Contact Support Team
                </Link>
              </Button>
            </div>

            <div className="relative animate-scale-in-center">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl"></div>
              <img
                src="/lovable-uploads/bb69a6e7-18eb-48d3-bd42-b46cd197bcf3.png"
                alt="Professional support team providing technical assistance"
                className="relative w-full h-[400px] object-cover rounded-xl shadow-professional-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-spacing border-t border-neutral-200 dark:border-neutral-800">
        <div className="container-professional">
          <div className="text-center animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have already boosted their productivity and reduced costs with our solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-professional text-lg px-8 py-4">
                <Link to="/contact">
                  <Rocket className="mr-2 h-6 w-6" />
                  Start Your Project Today
                </Link>
              </Button>
              <Button variant="outline" asChild className="btn-professional-outline text-lg px-8 py-4">
                <Link to="/portfolio">
                  <Star className="mr-2 h-6 w-6" />
                  View Success Stories
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-professional-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        size="sm"
      >
        <ArrowRight className="h-5 w-5 transform -rotate-90" />
      </Button>
    </div>
  );
};

export default Services;
