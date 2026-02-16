import { Link } from "react-router-dom";
import { 
  ArrowRight, Shield, Users, CheckCircle, Phone, 
  Monitor, Cloud, Settings, Server, Camera, Cpu, 
  Building2, GraduationCap, Landmark, ShoppingBag, Factory, Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FuturisticHeader from "@/components/FuturisticHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FloatingActions from "@/components/FloatingActions";
import { motion, type Variants } from "framer-motion";
import heroEnterprise from "@/assets/hero-enterprise.jpg";

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

const About = () => {
  const services = [
    { 
      icon: Monitor, 
      title: "ICT Infrastructure", 
      impact: "Designing secure and scalable enterprise networks." 
    },
    { 
      icon: Shield, 
      title: "Cybersecurity", 
      impact: "Protecting critical business data with enterprise-grade defence." 
    },
    { 
      icon: Cloud, 
      title: "Cloud Solutions", 
      impact: "Enabling seamless migration and cloud-first operations." 
    },
    { 
      icon: Settings, 
      title: "Hardware Procurement", 
      impact: "Sourcing, configuring and deploying reliable equipment." 
    },
    { 
      icon: Camera, 
      title: "Surveillance & Security", 
      impact: "Installing intelligent monitoring systems for total visibility." 
    },
    { 
      icon: Cpu, 
      title: "System Integration", 
      impact: "Connecting business systems for streamlined operations." 
    },
  ];

  const pillars = [
    { 
      icon: CheckCircle, 
      title: "Certified & Experienced Engineers", 
      desc: "Our team holds industry certifications and brings hands-on expertise to every project." 
    },
    { 
      icon: Shield, 
      title: "Enterprise-Grade Solutions", 
      desc: "We deploy the same calibre of technology trusted by leading institutions." 
    },
    { 
      icon: Server, 
      title: "Rapid Deployment & Support", 
      desc: "From planning to go-live, we move fast — with 24/7 support after delivery." 
    },
    { 
      icon: Users, 
      title: "Trusted by Institutions & Businesses", 
      desc: "500+ organisations across Kenya rely on our solutions every day." 
    },
  ];

  const industries = [
    { icon: Building2, name: "Corporate Offices" },
    { icon: GraduationCap, name: "Education" },
    { icon: Landmark, name: "Government" },
    { icon: ShoppingBag, name: "Retail & Commerce" },
    { icon: Factory, name: "Manufacturing" },
    { icon: Heart, name: "Healthcare" },
  ];

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <SEOHead 
        title="Byte Matrix Technologies — Enterprise IT Solutions in Kenya"
        description="BYTE MATRIX TECHNOLOGIES delivers secure, scalable and future-ready ICT, surveillance and automation solutions for businesses and institutions across Kenya."
        keywords="IT solutions Kenya, enterprise ICT, cybersecurity Kenya, cloud solutions, IT consulting, surveillance systems, Byte Matrix Technologies"
      />
      
      <FuturisticHeader currentPage="about" />

      {/* ═══════════════════════════════════════════
          SECTION 1 — AUTHORITY HERO
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center pt-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src={heroEnterprise} 
            alt="Enterprise server infrastructure" 
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,22%,7%)]/95 via-[hsl(220,22%,7%)]/80 to-[hsl(220,22%,7%)]/40" />
        </div>

        <div className="container-professional relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              className="space-y-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.p 
                className="text-sm font-semibold uppercase tracking-[0.2em] text-primary"
                variants={fadeInUp}
              >
                Connecting Your Digital Matrix
              </motion.p>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-white"
                variants={fadeInUp}
              >
                Engineering Intelligent Technology Infrastructure for Modern Enterprises.
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed"
                variants={fadeInUp}
              >
                BYTE MATRIX TECHNOLOGIES delivers secure, scalable and future-ready ICT, surveillance and automation solutions for businesses and institutions across Kenya.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-4"
                variants={fadeInUp}
              >
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Request a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50"
                  asChild
                >
                  <Link to="/services">
                    View Our Capabilities
                  </Link>
                </Button>
              </motion.div>

              {/* Trust line */}
              <motion.div 
                className="flex items-center gap-6 pt-4 text-sm text-white/50"
                variants={fadeInUp}
              >
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  500+ Clients Served
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  24/7 Support
                </span>
                <span className="hidden sm:flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  5+ Years Experience
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — WHAT WE DO (Services)
          ═══════════════════════════════════════════ */}
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
              What We Do
            </motion.p>
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
              variants={fadeInUp}
            >
              Technology Solutions That <span className="text-gradient-professional">Deliver Results</span>
            </motion.h2>
            <motion.div className="w-16 h-1 bg-primary rounded-full" variants={fadeInUp} />
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                className="group p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/25 hover:shadow-corporate-lg transition-all duration-300 hover:-translate-y-1"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.impact}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-12 md:mt-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — WHY CHOOSE BYTE MATRIX
          ═══════════════════════════════════════════ */}
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
              Why Byte Matrix
            </motion.p>
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
              variants={fadeInUp}
            >
              A Structured Technology Partner You Can <span className="text-gradient-professional">Trust</span>
            </motion.h2>
            <motion.div className="w-16 h-1 bg-primary rounded-full" variants={fadeInUp} />
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                className="flex gap-5 p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/25 hover:shadow-corporate-lg transition-all duration-300 hover:-translate-y-1"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{pillar.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — INDUSTRIES WE SERVE
          ═══════════════════════════════════════════ */}
      <section className="section-spacing">
        <div className="container-professional">
          <motion.div 
            className="text-center mb-14 md:mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.p 
              className="text-sm font-semibold uppercase tracking-[0.15em] text-primary mb-4"
              variants={fadeInUp}
            >
              Industries We Serve
            </motion.p>
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
              variants={fadeInUp}
            >
              Trusted Across <span className="text-gradient-professional">Sectors</span>
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Delivering mission-critical technology solutions with precision and reliability to organisations of every size.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {industries.map((industry, idx) => (
              <motion.div 
                key={idx}
                className="flex flex-col items-center text-center p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/25 hover:shadow-corporate transition-all duration-300 hover:-translate-y-1 group"
                variants={fadeInUp}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                  <industry.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-sm font-semibold">{industry.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — STRONG CTA
          ═══════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,22%,8%)] via-[hsl(217,91%,15%)] to-[hsl(220,22%,8%)]" />
        <div className="container-professional relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div 
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
                variants={fadeInUp}
              >
                Let's Build Your Technology Infrastructure the Right Way.
              </motion.h2>
              <motion.p 
                className="text-lg text-white/60 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Whether you're upgrading an existing setup or starting fresh, our team is ready to deliver a solution tailored to your business.
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
                    Schedule a Strategy Call
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
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default About;
