
import { Link } from "react-router-dom";
import { useState } from "react";
import FuturisticHeader from "@/components/FuturisticHeader";
import SEOHead from "@/components/SEOHead";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Testimonials from "@/components/Testimonials";
import ClientLogos from "@/components/ClientLogos";
import TrustIndicators from "@/components/TrustIndicators";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Monitor,
      title: "IT Consulting & Strategy",
      description: "Strategic technology planning and digital transformation consulting to optimize your business operations",
      benefits: ["Technology Roadmap", "Cost Optimization", "Digital Strategy", "Risk Assessment"],
      gradient: "from-blue-500 to-indigo-600",
      explanation: {
        overview: "Our IT Consulting & Strategy service provides comprehensive technology planning and digital transformation guidance to help your business leverage technology effectively.",
        process: [
          "Initial Assessment: We conduct a thorough evaluation of your current IT infrastructure, business processes, and technology needs",
          "Strategic Planning: Develop a customized technology roadmap aligned with your business objectives and growth plans",
          "Implementation Guidance: Provide step-by-step guidance for implementing new technologies and processes",
          "Ongoing Optimization: Regular reviews and adjustments to ensure your technology strategy remains effective"
        ],
        deliverables: [
          "Comprehensive IT infrastructure assessment report",
          "Custom technology roadmap with timeline and priorities",
          "Cost-benefit analysis for recommended solutions",
          "Risk assessment and mitigation strategies",
          "Implementation plan with milestones and success metrics"
        ]
      }
    },
    {
      icon: Settings,
      title: "Hardware Procurement & Setup",
      description: "End-to-end hardware solutions from sourcing to installation and configuration",
      benefits: ["Best Price Guarantee", "Quality Assurance", "Professional Setup", "Warranty Support"],
      gradient: "from-purple-500 to-pink-600",
      explanation: {
        overview: "We handle all aspects of hardware procurement and setup, ensuring you get the right equipment at the best prices with professional installation and configuration.",
        process: [
          "Needs Analysis: Assess your specific hardware requirements based on business needs and usage patterns",
          "Vendor Sourcing: Leverage our partnerships with major vendors to secure competitive pricing and quality equipment",
          "Quality Assurance: All hardware undergoes rigorous testing before delivery to ensure optimal performance",
          "Professional Setup: Our certified technicians handle installation, configuration, and integration with existing systems",
          "Documentation & Training: Provide complete documentation and user training for new equipment"
        ],
        deliverables: [
          "Detailed hardware specifications and recommendations",
          "Competitive pricing with best price guarantee",
          "Professional installation and configuration services",
          "Complete system documentation and user manuals",
          "Warranty coordination and ongoing support"
        ]
      }
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services to protect your business from cyber threats",
      benefits: ["24/7 Monitoring", "Threat Detection", "Data Protection", "Compliance Support"],
      gradient: "from-red-500 to-orange-600",
      explanation: {
        overview: "Our cybersecurity solutions provide multi-layered protection against modern cyber threats, ensuring your business data and systems remain secure.",
        process: [
          "Security Audit: Comprehensive assessment of current security posture and vulnerability identification",
          "Multi-Layer Defense: Implement firewalls, antivirus, intrusion detection, and endpoint protection systems",
          "Continuous Monitoring: 24/7 security monitoring with real-time threat detection and response",
          "Employee Training: Security awareness training to prevent social engineering and phishing attacks",
          "Incident Response: Rapid response protocols for security incidents with forensic analysis and recovery"
        ],
        deliverables: [
          "Complete security assessment and vulnerability report",
          "Implementation of enterprise-grade security solutions",
          "24/7 security operations center (SOC) monitoring",
          "Regular security reports and compliance documentation",
          "Incident response plan and disaster recovery procedures"
        ]
      }
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud migration, management, and optimization services for scalable business growth",
      benefits: ["Cloud Migration", "Cost Optimization", "Scalability", "24/7 Support"],
      gradient: "from-green-500 to-teal-600",
      explanation: {
        overview: "Our cloud solutions help businesses migrate to, manage, and optimize cloud infrastructure for improved scalability, cost-efficiency, and performance.",
        process: [
          "Cloud Readiness Assessment: Evaluate current infrastructure and applications for cloud compatibility",
          "Migration Planning: Develop detailed migration strategy with minimal downtime and data loss prevention",
          "Implementation: Execute cloud migration with careful monitoring and validation at each step",
          "Optimization: Ongoing performance monitoring and cost optimization to maximize cloud benefits",
          "Management: Comprehensive cloud management including monitoring, maintenance, and scaling"
        ],
        deliverables: [
          "Cloud readiness assessment and migration strategy",
          "Seamless migration with minimal business disruption",
          "Optimized cloud architecture for performance and cost",
          "24/7 cloud monitoring and management services",
          "Regular performance reports and optimization recommendations"
        ]
      }
    },
    {
      icon: Users,
      title: "Technical Support",
      description: "Round-the-clock technical support to keep your business running smoothly",
      benefits: ["24/7 Availability", "Remote Support", "On-site Service", "Priority Response"],
      gradient: "from-yellow-500 to-orange-600",
      explanation: {
        overview: "Our technical support service provides comprehensive IT support to ensure your business operations run smoothly with minimal downtime.",
        process: [
          "Multi-Channel Support: Access support via phone, email, chat, or remote assistance with guaranteed response times",
          "Issue Triage: Rapid assessment and prioritization of technical issues based on business impact",
          "Remote Resolution: Many issues resolved remotely using advanced diagnostic and remote access tools",
          "On-site Service: When needed, certified technicians provide on-site support and repairs",
          "Preventive Maintenance: Regular system checks and maintenance to prevent issues before they occur"
        ],
        deliverables: [
          "24/7 technical support with guaranteed response times",
          "Multi-channel support access (phone, email, chat, remote)",
          "Comprehensive issue tracking and resolution documentation",
          "Regular system health reports and maintenance schedules",
          "Service level agreements with performance metrics"
        ]
      }
    },
    {
      icon: Zap,
      title: "System Integration",
      description: "Seamless integration of your business systems for improved efficiency and productivity",
      benefits: ["Process Automation", "Data Synchronization", "Workflow Optimization", "Training Included"],
      gradient: "from-indigo-500 to-purple-600",
      explanation: {
        overview: "Our system integration service connects your various business systems and applications to create a unified, efficient workflow that eliminates data silos and automates processes.",
        process: [
          "System Analysis: Comprehensive review of existing systems, data flows, and business processes",
          "Integration Design: Create detailed integration architecture to connect systems efficiently and securely",
          "Implementation: Deploy integration solutions with careful testing and validation at each stage",
          "Process Automation: Implement automated workflows to reduce manual tasks and improve efficiency",
          "Training & Support: Comprehensive user training and ongoing support for integrated systems"
        ],
        deliverables: [
          "Complete system integration architecture and documentation",
          "Seamless data synchronization between all business systems",
          "Automated workflows and process optimization",
          "Comprehensive user training and documentation",
          "Ongoing monitoring and support for integrated systems"
        ]
      }
    }
  ];

  const stats = [
    { number: "500+", label: "Satisfied Clients", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "15+", label: "Years Experience", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-background font-poppins transition-all duration-300">
      <SEOHead 
        title="Professional IT Services - Byte Matrix Technologies"
        description="Comprehensive IT services including technology consulting, hardware procurement, cybersecurity, cloud solutions, and 24/7 technical support for businesses."
        keywords="IT services, technology consulting, hardware procurement, cybersecurity, cloud solutions, technical support, system integration, business technology"
      />
      
      <FuturisticHeader currentPage="services" />
      
      {/* Hero Section */}
      <section className="section-spacing relative overflow-hidden">
        {/* Futuristic background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-professional relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 glass-cyber rounded-full mb-8 border border-cyber-blue/20">
              <Zap className="w-5 h-5 mr-3 text-cyber-yellow animate-glow" />
              <span className="text-lg font-medium text-gradient-neon">Professional IT Solutions</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-foreground">Transform Your Business with</span>
              <br />
              <span className="text-gradient-cyber">Expert Technology Matrix</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed font-light max-w-4xl mx-auto">
              From strategic IT consulting to enterprise hardware solutions, we deliver expert technology services 
              that enhance your business operations, strengthen cybersecurity, and provide reliable 24/7 technical support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="btn-cyber text-lg px-10 py-4" asChild>
                <Link to="/contact">
                  <Phone className="w-6 h-6 mr-3" />
                  Get Free Consultation
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="btn-cyber-outline text-lg px-10 py-4" asChild>
                <Link to="/portfolio">
                  View Our Portfolio
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 glass-cyber backdrop-blur-sm">
        <div className="container-professional">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-cyber rounded-2xl mb-6 shadow-cyber group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-3 group-hover:text-cyber-blue transition-colors duration-300">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Services Grid */}
      <section className="section-spacing">
        <div className="container-professional">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient-cyber">IT Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
              Comprehensive IT solutions designed to transform your business operations
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-cyber group hover-lift-cyber">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300 shadow-cyber`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-cyber-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed font-light">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyber-green mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="btn-cyber-outline group-hover:btn-cyber transition-all duration-300"
                      onClick={() => setSelectedService(index)}
                    >
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

      {/* Client Logos */}
      <ClientLogos />

      {/* Testimonials */}
      <Testimonials />

      {/* Lead Capture Section */}
      <section className="section-spacing glass-cyber relative">
        {/* Futuristic background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyber-pink/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-professional relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to <span className="text-gradient-cyber">Join the Matrix?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
              Let's discuss how our IT services can improve your business operations and drive growth
            </p>
          </div>
          
          <LeadCaptureForm 
            title="Get Your Custom IT Solution"
            subtitle="Tell us about your business needs and we'll create a tailored technology solution for your digital transformation."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-cyber relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-cyber-yellow/20 rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-cyber-pink/20 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-professional text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need <span className="text-cyber-yellow">Immediate</span> IT Support?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto font-light">
            Our expert technicians are available 24/7 to resolve your IT issues quickly 
            and keep your business running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white hover:text-primary text-lg px-8 py-4">
              <Phone className="w-6 h-6 mr-3" />
              Call: +254 724367794
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4">
              <Zap className="w-6 h-6 mr-3" />
              Email Support
            </Button>
          </div>
        </div>
      </section>

      {/* Service Details Dialog */}
      <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedService !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${services[selectedService].gradient} rounded-xl`}>
                    {(() => {
                      const IconComponent = services[selectedService].icon;
                      return <IconComponent className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                  {services[selectedService].title}
                </DialogTitle>
                <DialogDescription className="text-lg">
                  {services[selectedService].explanation.overview}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Process</h3>
                  <div className="space-y-3">
                    {services[selectedService].explanation.process.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {idx + 1}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What You Get</h3>
                  <div className="grid gap-3">
                    {services[selectedService].explanation.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{deliverable}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
                  <Button size="lg" className="bg-gradient-brand hover:opacity-90 transition-opacity flex-1" asChild>
                    <Link to="/contact">
                      Get Started Today
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1" onClick={() => setSelectedService(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Services;
