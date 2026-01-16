
import { Link } from "react-router-dom";
import { useState } from "react";
import FuturisticHeader from "@/components/FuturisticHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FloatingActions from "@/components/FloatingActions";
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
        {/* Subtle professional background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-96 h-96 bg-brand-blue/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue-light/6 rounded-full blur-3xl"></div>
        </div>

        <div className="container-professional relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-8 py-4 glass-professional rounded-full mb-10 border border-brand-blue/10">
              <Zap className="w-5 h-5 mr-3 text-brand-blue" />
              <span className="text-lg font-medium text-brand-blue">Professional IT Solutions</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight tracking-tight">
              <span className="text-foreground">Enterprise Technology Solutions</span>
              <br />
              <span className="text-gradient-professional">for Global Organizations</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-14 leading-relaxed max-w-4xl mx-auto">
              Comprehensive IT services including strategic consulting, enterprise hardware, advanced cybersecurity, 
              and 24/7 technical support for mission-critical operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" asChild className="bg-brand-blue hover:bg-brand-blue/90 text-white shadow-brand text-lg px-8 py-6 h-auto">
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <a
                href="tel:+254724367794"
                className="flex items-center gap-2 text-lg font-semibold text-brand-blue hover:text-brand-blue/80 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call: +254 724 367 794
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Services Grid */}
      <section className="section-spacing bg-gradient-professional-subtle">
        <div className="container-professional">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Enterprise <span className="text-gradient-professional">IT Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional technology solutions for demanding business environments
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-premium group">
                <CardContent className="p-10">
                  <div className="relative mb-8">
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 shadow-brand group-hover:shadow-brand-lg transition-all duration-500`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-2 border-brand-blue/30 hover:bg-brand-blue hover:text-white transition-all duration-300 w-full"
                    onClick={() => setSelectedService(index)}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-professional relative overflow-hidden">
        <div className="container-professional text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to Minimize Downtime & Maximize Productivity?
          </h2>
          <p className="text-xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join leading organizations across East Africa who trust us with their IT infrastructure. Our certified technicians provide 24/7 enterprise support to keep your operations running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-brand-blue hover:bg-white/95 text-lg px-10 py-6 shadow-xl rounded-xl font-semibold" asChild>
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/40 hover:bg-white hover:text-brand-blue text-lg px-10 py-6 shadow-xl rounded-xl" asChild>
              <a href="tel:+254724367794">
                <Phone className="w-5 h-5 mr-3" />
                Call: +254 724 367 794
              </a>
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
                  <h3 className="text-xl font-semibold text-foreground mb-4">Our Process</h3>
                  <div className="space-y-3">
                    {services[selectedService].explanation.process.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {idx + 1}
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">What You Get</h3>
                  <div className="grid gap-3">
                    {services[selectedService].explanation.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground leading-relaxed">{deliverable}</p>
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

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Services;
