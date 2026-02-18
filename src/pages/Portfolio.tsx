import {
  ArrowRight,
  CheckCircle,
  Server,
  Computer,
  Globe,
  Cloud,
  Wifi,
  Monitor,
  Handshake,
  FolderCheck,
  Calendar,
  Headphones,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FuturisticHeader from "@/components/FuturisticHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Testimonials from "@/components/Testimonials";

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

const Portfolio = () => {
  const statsData = [
    { number: "500+", label: "Happy Clients", icon: Handshake },
    { number: "1000+", label: "Projects Completed", icon: FolderCheck },
    { number: "5+", label: "Years Experience", icon: Calendar },
    { number: "24/7", label: "Support Available", icon: Headphones },
  ];

  const projects = [
    {
      title: "Enterprise Network Infrastructure",
      description: "Complete network overhaul for a 200+ employee organisation, including server installation, security implementation, and cloud migration.",
      image: "/lovable-uploads/8a8cda77-4bf8-4392-97fc-d1cb7057e068.png",
      technologies: ["Cisco Networking", "Windows Server", "Cloud Migration", "Cybersecurity"],
      results: ["99.9% Uptime", "50% Faster Operations", "Zero Security Incidents"],
      icon: Server,
    },
    {
      title: "Educational Technology Suite",
      description: "Comprehensive IT solutions for educational institutions including computer labs, interactive displays, and learning management systems.",
      image: "/lovable-uploads/f858d253-338e-48f5-bfea-74af9143bbcd.png",
      technologies: ["Computer Labs", "Interactive Displays", "Network Setup", "Educational Software"],
      results: ["300+ Students Served", "Enhanced Learning", "Teacher Satisfaction"],
      icon: Computer,
    },
    {
      title: "Custom Web System",
      description: "Built a bespoke CRM and management platform enabling real-time data access, workflow automation, and reporting for a growing enterprise.",
      image: "/lovable-uploads/6118b34b-4d85-4de5-b29f-798c1f7e9cec.png",
      technologies: ["React", "Node.js", "PostgreSQL", "REST API"],
      results: ["60% Time Saved", "Automated Workflows", "Real-time Dashboards"],
      icon: Globe,
    },
    {
      title: "Cloud Migration Project",
      description: "Transitioned a mid-size company's on-premise infrastructure to the cloud with zero downtime and comprehensive data protection.",
      image: "/lovable-uploads/d29f94dc-9102-4701-adec-42bc48de5bfb.png",
      technologies: ["AWS", "Azure", "Data Migration", "Backup & Recovery"],
      results: ["Zero Downtime", "40% Cost Reduction", "Scalable Architecture"],
      icon: Cloud,
    },
    {
      title: "Office Wi-Fi & Network Setup",
      description: "Installed and optimised secure office Wi-Fi and structured cabling for a multi-floor corporate headquarters.",
      image: "/lovable-uploads/babb4625-0209-4f12-95b2-209a31633356.png",
      technologies: ["Enterprise Wi-Fi", "Structured Cabling", "Firewall", "VPN"],
      results: ["Full Coverage", "99.9% Reliability", "Secure Access"],
      icon: Wifi,
    },
    {
      title: "Hardware Upgrade Project",
      description: "Upgraded desktops, servers, and peripherals across multiple branch offices for improved reliability and performance.",
      image: "/lovable-uploads/e5991571-5cba-4577-9fde-337db462a94c.png",
      technologies: ["Dell Servers", "HP Workstations", "UPS Systems", "Deployment"],
      results: ["3x Faster Systems", "5-Year Lifecycle", "Unified Management"],
      icon: Monitor,
    },
  ];

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <SEOHead 
        title="Our Work & Solutions Delivered — Byte Matrix Technologies"
        description="Real projects that transformed business operations. Explore our portfolio of successful IT projects, network installations, cloud migrations, and custom software solutions."
        keywords="IT portfolio, client success stories, technology projects, digital transformation, enterprise solutions Kenya"
      />
      
      <FuturisticHeader currentPage="portfolio" />

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
              Portfolio
            </motion.p>
            <motion.h1 variants={fadeInUp}>
              Our Work & Solutions Delivered
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mt-6 mb-10"
              variants={fadeInUp}
            >
              Every project reflects our commitment to innovation, integrity, and customer-focused delivery — engineered for reliability, performance, and long-term value.
            </motion.p>
            <motion.div className="w-16 h-1 bg-primary rounded-full" variants={fadeInUp} />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-spacing-sm bg-gradient-professional-subtle">
        <div className="container-professional">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {statsData.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="card-premium text-center h-full">
                    <CardContent className="p-6 md:p-8">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1">{metric.number}</h3>
                      <p className="text-muted-foreground text-sm font-medium">{metric.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-spacing-lg">
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
              Featured Projects
            </motion.p>
            <motion.h2 variants={fadeInUp}>
              Solutions That <span className="text-gradient-professional">Make a Difference</span>
            </motion.h2>
            <motion.div className="w-16 h-1 bg-primary rounded-full mt-6" variants={fadeInUp} />
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="card-premium group h-full overflow-hidden">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <project.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
                    
                    <div className="mb-5">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/5 text-primary text-xs font-medium rounded-full border border-primary/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2 pt-4 border-t border-border">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
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
              Let's Write Your Success Story
            </motion.h2>
            <motion.p 
              className="text-lg text-white/70 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Hundreds of businesses trust us with their technology. Ready to see what we can do for yours?
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
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50"
                asChild
              >
                <a href="tel:+254724367794">
                  <Phone className="mr-2 h-5 w-5" />
                  +254 724 367 794
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
