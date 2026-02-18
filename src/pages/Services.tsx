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
  Wifi,
  Code,
  Laptop,
  CheckCircle2,
  ArrowRight,
  Phone,
  Headphones,
  Zap
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" as const } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Monitor,
      title: "IT Infrastructure & Hardware Solutions",
      impact: "Reliable support for desktops, laptops, servers, and enterprise hardware.",
      benefits: ["Server Setup & Configuration", "Desktop & Laptop Support", "Hardware Lifecycle Management", "Enterprise Equipment Deployment"],
      explanation: {
        overview: "We provide end-to-end hardware and infrastructure solutions — from sourcing enterprise-grade equipment to professional installation, configuration, and ongoing management.",
        process: [
          "Needs Assessment: Evaluate your current infrastructure and identify gaps or upgrade requirements",
          "Procurement: Leverage vendor partnerships to source quality equipment at competitive prices",
          "Deployment: Professional installation, configuration, and integration with existing systems",
          "Management: Ongoing monitoring, maintenance, and lifecycle management for all hardware assets"
        ],
        deliverables: [
          "Complete infrastructure assessment and recommendations",
          "Professional hardware deployment and configuration",
          "Warranty coordination and vendor management",
          "Preventive maintenance schedules and documentation"
        ]
      }
    },
    {
      icon: Headphones,
      title: "Managed & Support Services",
      impact: "24/7 technical support, troubleshooting, and proactive system management.",
      benefits: ["24/7 Help Desk", "Remote & On-site Support", "Proactive Monitoring", "Priority Response SLAs"],
      explanation: {
        overview: "Our managed services provide comprehensive IT support to ensure your business operations run smoothly with minimal downtime and maximum productivity.",
        process: [
          "Onboarding: Full audit of your IT environment and documentation of all systems",
          "Monitoring: 24/7 proactive monitoring with automated alerting and rapid response",
          "Support: Multi-channel help desk with guaranteed response times and escalation paths",
          "Optimization: Regular reviews, reporting, and recommendations for continuous improvement"
        ],
        deliverables: [
          "24/7 technical support with guaranteed SLAs",
          "Monthly performance and health reports",
          "Proactive issue prevention and system optimization",
          "Comprehensive documentation and knowledge base"
        ]
      }
    },
    {
      icon: Wifi,
      title: "Network & Connectivity Solutions",
      impact: "Robust Wi-Fi, network installations, secure access points, and connectivity optimization.",
      benefits: ["Enterprise Wi-Fi Design", "Structured Cabling", "Network Security", "Performance Optimization"],
      explanation: {
        overview: "We design and deploy robust network infrastructure that provides reliable, secure, and high-performance connectivity across your entire organization.",
        process: [
          "Site Survey: Comprehensive assessment of your premises and connectivity requirements",
          "Network Design: Custom architecture for optimal coverage, speed, and security",
          "Installation: Professional deployment of cabling, access points, switches, and firewalls",
          "Testing & Handover: Thorough testing, documentation, and staff orientation"
        ],
        deliverables: [
          "Custom network architecture and design documentation",
          "Professional installation of all networking equipment",
          "Security configuration and access control policies",
          "Performance benchmarks and optimization reports"
        ]
      }
    },
    {
      icon: Code,
      title: "Custom Software & Web Applications",
      impact: "Tailored software, business systems, and websites designed for performance and scalability.",
      benefits: ["Business Management Systems", "Responsive Web Applications", "API Integration", "Scalable Architecture"],
      explanation: {
        overview: "We build custom software solutions and web applications tailored to your specific business processes, helping you automate operations and serve customers better.",
        process: [
          "Discovery: In-depth analysis of your business processes and requirements",
          "Design: User-centred interface design with stakeholder feedback loops",
          "Development: Agile development with regular demos and iterative refinement",
          "Launch & Support: Deployment, training, and ongoing maintenance and enhancements"
        ],
        deliverables: [
          "Custom-built software tailored to your workflows",
          "Responsive, modern web applications",
          "Complete technical documentation and source code",
          "Post-launch support and maintenance plan"
        ]
      }
    },
    {
      icon: Shield,
      title: "Cloud & Security Solutions",
      impact: "Cloud migrations, secure backup, cybersecurity measures, and enterprise protection.",
      benefits: ["Cloud Migration", "Data Backup & Recovery", "Threat Detection", "Compliance Support"],
      explanation: {
        overview: "We help organizations migrate to the cloud securely and implement comprehensive cybersecurity measures to protect critical business data and operations.",
        process: [
          "Security Audit: Comprehensive assessment of your current security posture and cloud readiness",
          "Strategy: Develop migration and security roadmap aligned with your business objectives",
          "Implementation: Execute cloud migration and deploy multi-layered security solutions",
          "Monitoring: Continuous monitoring, threat detection, and incident response capabilities"
        ],
        deliverables: [
          "Cloud readiness assessment and migration strategy",
          "Enterprise-grade security implementation",
          "Automated backup and disaster recovery plans",
          "Ongoing security monitoring and compliance reporting"
        ]
      }
    },
    {
      icon: Laptop,
      title: "Professional Hardware Sales",
      impact: "Laptops, desktops, printers — tested for performance and business use.",
      benefits: ["Quality-Tested Equipment", "Competitive Pricing", "Warranty Support", "Bulk & Corporate Orders"],
      explanation: {
        overview: "We supply business-grade hardware from trusted manufacturers — every unit tested, configured, and ready for deployment in your work environment.",
        process: [
          "Consultation: Understand your requirements, budget, and use cases",
          "Sourcing: Procure from authorized channels with competitive pricing",
          "Quality Assurance: Every unit inspected and tested before delivery",
          "Delivery & Setup: Professional delivery with optional configuration and setup"
        ],
        deliverables: [
          "Business-grade laptops, desktops, and peripherals",
          "Manufacturer warranty and extended support options",
          "Volume pricing for corporate and institutional orders",
          "Configuration and deployment services"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <SEOHead 
        title="Our Expert Technology Services — Byte Matrix Technologies"
        description="Solutions designed to grow your business faster and smarter. IT infrastructure, managed services, network solutions, custom software, cloud & security, and hardware sales."
        keywords="IT services Kenya, managed IT services, network solutions, custom software, cloud migration, cybersecurity, hardware sales, enterprise IT"
      />
      
      <FuturisticHeader currentPage="services" />
      
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-accent/6 rounded-full blur-3xl" />
        </div>

        <div className="container-professional relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p 
              className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4"
              variants={fadeInUp}
            >
              Our Services
            </motion.p>
            <motion.h1 
              className="mb-6 md:mb-8"
              variants={fadeInUp}
            >
            Our Expert Technology Services
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
              variants={fadeInUp}
            >
              Our services are built around a deep understanding of our clients' unique needs — delivering precision-engineered solutions with reliability and transparency at every step.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <Button size="lg" asChild>
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <a
                href="tel:+254724367794"
                className="flex items-center gap-2 text-base md:text-lg font-semibold text-primary hover:text-primary/80 transition-colors min-h-[44px]"
              >
                <Phone className="h-5 w-5" />
                +254 724 367 794
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing-lg bg-gradient-professional-subtle">
        <div className="container-professional">
          <motion.div 
            className="max-w-2xl mb-14 md:mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.p 
              className="text-sm font-semibold uppercase tracking-[0.15em] text-primary mb-4"
              variants={fadeInUp}
            >
              What We Deliver
            </motion.p>
            <motion.h2 variants={fadeInUp}>
              Enterprise-Grade <span className="text-gradient-professional">IT Solutions</span>
            </motion.h2>
            <motion.div className="w-16 h-1 bg-primary rounded-full mt-6" variants={fadeInUp} />
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="card-premium group h-full">
                  <CardContent className="p-6 md:p-8 lg:p-10 flex flex-col h-full">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                      <service.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base mb-5 leading-relaxed">{service.impact}</p>
                    
                    <div className="space-y-2.5 mb-6 flex-1">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-xs md:text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary mr-2.5 flex-shrink-0" />
                          <span className="text-muted-foreground font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full mt-auto"
                      onClick={() => setSelectedService(index)}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,22%,8%)] via-[hsl(217,91%,15%)] to-[hsl(220,22%,8%)]" />
        <div className="container-professional relative z-10 text-center">
          <motion.div 
            className="max-w-3xl mx-auto space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-tight leading-tight"
              variants={fadeInUp}
            >
              Ready to Minimize Downtime & Maximize Productivity?
            </motion.h2>
            <motion.p 
              className="text-lg text-white/70 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              We operate with full transparency in pricing, project timelines, and technical recommendations. Powered by innovation, our certified team delivers 24/7 enterprise support you can depend on.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              variants={fadeInUp}
            >
              <Button 
                size="lg" 
                className="bg-white text-foreground hover:bg-white/90 font-semibold shadow-xl"
                asChild
              >
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50"
                asChild
              >
                <a href="tel:+254724367794">
                  <Phone className="w-5 h-5 mr-2" />
                  +254 724 367 794
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Details Dialog */}
      <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedService !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    {(() => {
                      const IconComponent = services[selectedService].icon;
                      return <IconComponent className="w-6 h-6 text-primary" />;
                    })()}
                  </div>
                  {services[selectedService].title}
                </DialogTitle>
                <DialogDescription className="text-base md:text-lg">
                  {services[selectedService].explanation.overview}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Process</h3>
                  <div className="space-y-3">
                    {services[selectedService].explanation.process.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                          {idx + 1}
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">What You Get</h3>
                  <div className="grid gap-3">
                    {services[selectedService].explanation.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground leading-relaxed">{deliverable}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
                  <Button size="lg" className="flex-1" asChild>
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
