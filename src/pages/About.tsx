import { Link } from "react-router-dom";
import { ArrowRight, Star, Zap, Shield, Users, CheckCircle, Phone, Monitor, Cloud, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import FuturisticHeader from "@/components/FuturisticHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FloatingActions from "@/components/FloatingActions";
import Testimonials from "@/components/Testimonials";
import { motion, type Variants } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const About = () => {
  const values = [
    { Icon: Zap, title: "Innovation", desc: "Adopting and implementing the latest technologies" },
    { Icon: Shield, title: "Integrity", desc: "Building trust through transparency and ethical practices" },
    { Icon: Users, title: "Customer Focus", desc: "Delivering tailored solutions that meet client needs" },
    { Icon: Star, title: "Reliability", desc: "Ensuring consistent performance and dependable support" }
  ];

  const stats = [
    { number: "500+", label: "Satisfied Clients" },
    { number: "1000+", label: "Projects Delivered" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  const services = [
    { icon: Monitor, title: "IT Consulting", desc: "Strategic technology planning for your business" },
    { icon: Shield, title: "Cybersecurity", desc: "Enterprise-grade protection for your data" },
    { icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud infrastructure & migration" },
    { icon: Settings, title: "Hardware Setup", desc: "Professional procurement & installation" },
  ];

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <SEOHead 
        title="Byte Matrix Technologies - Professional IT Solutions Provider in Kenya"
        description="Byte Matrix Technologies delivers advanced digital solutions for growth & innovation. IT consulting, cybersecurity, cloud solutions, and 24/7 support in Kenya."
        keywords="IT solutions Kenya, digital transformation, enterprise technology, cybersecurity, cloud solutions, IT consulting, Byte Matrix Technologies"
      />
      
      <FuturisticHeader currentPage="about" />

      {/* Hero Section - Full-width with background image */}
      <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt="Professional IT team" 
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 dark:from-background/98 dark:via-background/85 dark:to-background/50" />
        </div>

        <div className="container-professional relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              className="space-y-6 md:space-y-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div className="badge-premium" variants={fadeInUp}>
                <Zap className="w-4 h-4 mr-2" />
                Trusted IT Partner Since 2019
              </motion.div>
              
              <motion.h1 className="text-balance" variants={fadeInUp}>
                We Build Advanced Digital Solutions for{" "}
                <span className="text-gradient-professional">Growth & Innovation</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
                variants={fadeInUp}
              >
                From robust IT infrastructure to comprehensive cybersecurity, we help businesses across East Africa thrive in the digital world—simply, effectively, and reliably.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-2"
                variants={fadeInUp}
              >
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Request a Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">
                    Explore Services
                  </Link>
                </Button>
                <a
                  href="tel:+254724367794"
                  className="hidden sm:flex items-center gap-2 text-base font-semibold text-primary hover:text-primary/80 transition-colors min-h-[44px] px-4"
                >
                  <Phone className="h-5 w-5" />
                  +254 724 367 794
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 -mt-1">
        <div className="bg-primary">
          <div className="container-professional">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 md:py-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  className="text-center"
                  variants={fadeInUp}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">{stat.number}</div>
                  <div className="text-sm md:text-base text-primary-foreground/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do - Services Overview */}
      <section className="section-spacing relative">
        <div className="container-professional">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span className="badge-premium mb-4" variants={fadeInUp}>
              What We Do
            </motion.span>
            <motion.h2 variants={fadeInUp}>
              Enterprise Technology Solutions <span className="text-gradient-professional">That Deliver Results</span>
            </motion.h2>
            <motion.p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto" variants={fadeInUp}>
              Comprehensive IT services designed to streamline your operations and accelerate growth
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid-professional-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                className="glass-card-premium p-6 md:p-8 text-center group"
                variants={fadeInUp}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-5 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Section CTA */}
          <motion.div 
            className="text-center mt-10 md:mt-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">
                See All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-spacing relative bg-gradient-professional-subtle">
        <div className="container-professional">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left - Story content */}
              <motion.div 
                className="space-y-6 md:space-y-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp}>
                  <div className="badge-premium mb-6">
                    <Star className="w-4 h-4 mr-2" />
                    Our Story
                  </div>
                  <h2 className="mb-4 md:mb-6 text-balance">
                    Empowering Businesses Through <span className="text-gradient-professional">Innovation</span>
                  </h2>
                  <div className="w-20 h-1 bg-gradient-brand rounded-full"></div>
                </motion.div>

                <motion.div 
                  className="space-y-4 md:space-y-5 text-base text-muted-foreground"
                  variants={fadeInUp}
                >
                  <p>
                    Founded on the belief that every business deserves reliable, professional IT solutions, we've grown into a trusted partner for organizations across Kenya and beyond. Our mission is simple: help businesses of all sizes succeed through technology.
                  </p>
                  
                  <p>
                    What sets us apart is our commitment to understanding your unique challenges. We don't believe in one-size-fits-all solutions. Instead, we take the time to listen, analyze, and create tailored strategies that address your specific needs—practical, effective, and results-driven.
                  </p>

                  <p>
                    Whether you're setting up your first network or managing complex enterprise systems, our team brings dedication, expertise, and a customer-first approach to every project.
                  </p>
                </motion.div>

                {/* Story Section CTA */}
                <motion.div variants={fadeInUp}>
                  <Button asChild>
                    <Link to="/contact">
                      Talk to an Expert
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right - Values grid */}
              <motion.div 
                className="grid grid-cols-2 gap-3 sm:gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                {values.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="glass-card-premium p-4 sm:p-6"
                    variants={fadeInUp}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                      <item.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <Testimonials />

      {/* CTA Section */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-professional opacity-5"></div>
        <div className="container-professional relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="glass-card-premium p-8 sm:p-12 lg:p-16 text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h2 className="mb-4 text-balance">
                    Ready to Transform Your <span className="text-gradient-professional">Business</span>?
                  </h2>
                  <div className="divider-gradient mb-6"></div>
                </div>
                
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join 500+ satisfied clients across East Africa. Let's discuss how we can help your business succeed with expert guidance tailored to your unique needs.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 md:pt-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+254724367794">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default About;
