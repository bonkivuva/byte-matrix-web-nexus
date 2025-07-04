
import { Link } from "react-router-dom";
import ProfessionalHeader from "@/components/ProfessionalHeader";
import SEOHead from "@/components/SEOHead";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Monitor, 
  Shield, 
  Cloud, 
  Settings, 
  Users, 
  Zap,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Award,
  Clock,
  Phone
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "IT Consulting & Strategy",
      description: "Strategic technology planning and digital transformation consulting to optimize your business operations",
      benefits: ["Technology Roadmap", "Cost Optimization", "Digital Strategy", "Risk Assessment"],
      pricing: "Starting at $150/hour",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Settings,
      title: "Hardware Procurement & Setup",
      description: "End-to-end hardware solutions from sourcing to installation and configuration",
      benefits: ["Best Price Guarantee", "Quality Assurance", "Professional Setup", "Warranty Support"],
      pricing: "Custom Pricing",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services to protect your business from cyber threats",
      benefits: ["24/7 Monitoring", "Threat Detection", "Data Protection", "Compliance Support"],
      pricing: "Starting at $200/month",
      gradient: "from-red-500 to-orange-600"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud migration, management, and optimization services for scalable business growth",
      benefits: ["Cloud Migration", "Cost Optimization", "Scalability", "24/7 Support"],
      pricing: "Starting at $100/month",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Users,
      title: "Technical Support",
      description: "Round-the-clock technical support to keep your business running smoothly",
      benefits: ["24/7 Availability", "Remote Support", "On-site Service", "Priority Response"],
      pricing: "Starting at $80/month",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "System Integration",
      description: "Seamless integration of your business systems for improved efficiency and productivity",
      benefits: ["Process Automation", "Data Synchronization", "Workflow Optimization", "Training Included"],
      pricing: "Custom Pricing",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  const stats = [
    { number: "500+", label: "Satisfied Clients", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "15+", label: "Years Experience", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-blue-50/30 dark:from-neutral-900 dark:to-neutral-800">
      <SEOHead 
        title="Professional IT Services - Byte Matrix Technologies"
        description="Comprehensive IT services including consulting, hardware procurement, cybersecurity, cloud solutions, and 24/7 technical support for businesses of all sizes."
        keywords="IT services, technology consulting, hardware procurement, cybersecurity, cloud solutions, technical support, system integration"
      />
      
      <ProfessionalHeader currentPage="services" />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5"></div>
        <div className="container-professional relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Professional IT Solutions
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Transform Your Business with
              <span className="text-gradient-brand block">Expert IT Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              From strategic consulting to hands-on technical support, we provide comprehensive IT solutions 
              that drive growth, enhance security, and optimize your technology investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-brand hover:opacity-90 transition-opacity" asChild>
                <Link to="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio">
                  View Our Portfolio
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm">
        <div className="container-professional">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-brand rounded-xl mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-professional">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to meet the unique needs of your business
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {service.pricing}
                    </span>
                    <Button variant="outline" size="sm" className="group-hover:bg-gradient-brand group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-neutral-800 dark:to-neutral-900">
        <div className="container-professional">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Let's discuss how our IT services can transform your business operations and drive growth
            </p>
          </div>
          
          <LeadCaptureForm 
            title="Get Your Custom IT Solution"
            subtitle="Tell us about your business needs and we'll create a tailored IT strategy for your success."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-brand">
        <div className="container-professional text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Immediate IT Support?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our expert technicians are available 24/7 to resolve your IT issues and keep your business running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call: +254 724 367 794
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Email Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
