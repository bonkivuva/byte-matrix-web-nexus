import { Link } from "react-router-dom";
import {
  ArrowRight, Shield, Users, CheckCircle, Phone,
  Cloud, Server, Camera, Cpu,
  Building2, GraduationCap, Landmark, ShoppingBag, Factory, Heart,
  Lightbulb, Eye, Target, Layers
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
  const pillars = [
    {
      icon: CheckCircle,
      title: "Certified Engineering Expertise",
      desc: "Our engineers maintain recognised industry certifications and follow structured implementation standards on every engagement."
    },
    {
      icon: Layers,
      title: "Enterprise-Grade Architecture",
      desc: "We deploy technologies aligned with global best practices in performance, scalability, and security."
    },
    {
      icon: Server,
      title: "Structured Project Execution",
      desc: "Every project follows a defined process — assessment, design, deployment, documentation, and post-go-live support."
    },
    {
      icon: Users,
      title: "Long-Term Technical Partnership",
      desc: "We provide consistent post-deployment support, system monitoring, and lifecycle advisory for sustained operational stability."
    },
  ];

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "We continuously adopt emerging technologies and engineering practices to deliver forward-looking ICT environments.",
    },
    {
      icon: Eye,
      title: "Integrity",
      desc: "We operate with transparency, technical honesty, and clear communication in every client engagement.",
    },
    {
      icon: Target,
      title: "Customer Focus",
      desc: "We align every solution with our client's operational objectives, risk profile, and growth strategy.",
    },
    {
      icon: Shield,
      title: "Reliability",
      desc: "We design systems for uptime, resilience, and long-term operational stability.",
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
        title="About Byte Matrix Technologies — ICT Infrastructure Specialists in Kenya"
        description="Byte Matrix Technologies is a professional ICT solutions provider specialising in enterprise infrastructure, cybersecurity, cloud systems, surveillance, and automation across Kenya."
        keywords="IT solutions Kenya, enterprise ICT, cybersecurity Kenya, cloud solutions, IT consulting, surveillance systems, Byte Matrix Technologies"
      />

      <FuturisticHeader currentPage="about" />

      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroEnterprise}
            alt="Enterprise server infrastructure"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Dark overlay using design-system background token at opacity */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/97 via-background/82 to-background/40" />
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
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-foreground"
                variants={fadeInUp}
              >
                Engineering Secure & Scalable ICT Infrastructure for Modern Enterprises.
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
                variants={fadeInUp}
              >
                BYTE MATRIX TECHNOLOGIES is a professional ICT solutions provider specialising in enterprise infrastructure, cybersecurity, cloud systems, surveillance, and automation. We design, deploy, and support technology environments that are secure, resilient, and built for growth.
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
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">
                    View Our Capabilities
                  </Link>
                </Button>
              </motion.div>

              {/* KPI strip */}
              <motion.div
                className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground"
                variants={fadeInUp}
              >
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  500+ Organisations Supported
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  24/7 Technical Response
                </span>
                <span className="hidden sm:flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Proven Multi-Sector Experience
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — WHO WE ARE
          ═══════════════════════════════════════════ */}
      <section className="section-spacing-lg">
        <div className="container-professional">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="grid md:grid-cols-[1fr_2px_1fr] gap-10 md:gap-14 items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {/* Left — heading */}
              <motion.div variants={fadeInUp}>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary mb-4">
                  Who We Are
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                  An ICT Engineering Company Built for Enterprise
                </h2>
              </motion.div>

              {/* Divider */}
              <div className="hidden md:block w-px bg-border self-stretch" />

              {/* Right — body */}
              <motion.div className="space-y-4 text-muted-foreground leading-relaxed" variants={fadeInUp}>
                <p>
                  We are an ICT engineering company focused on delivering structured, standards-driven technology solutions for institutions and enterprises across Kenya.
                </p>
                <p>
                  Our approach combines technical precision, strategic planning, and long-term system reliability — ensuring every deployment meets the operational demands of modern business environments.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — WHY ORGANISATIONS CHOOSE BYTE MATRIX
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
              Our Differentiators
            </motion.p>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
              variants={fadeInUp}
            >
              Why Organisations Choose Byte Matrix
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
                  <h3 className="text-lg font-bold mb-2 text-foreground">{pillar.title}</h3>
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
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
              variants={fadeInUp}
            >
              Trusted Across Sectors
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto"
              variants={fadeInUp}
            >
              Supporting critical operations across multiple sectors.
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
                <span className="text-sm font-semibold text-foreground">{industry.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — CORE VALUES
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
              Our Core Values
            </motion.p>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
              variants={fadeInUp}
            >
              The Principles That Define How We Work
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-base md:text-lg"
              variants={fadeInUp}
            >
              The operational principles that define how we design, deploy, and support every solution.
            </motion.p>
            <motion.div className="w-16 h-1 bg-primary rounded-full mt-6" variants={fadeInUp} />
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                className="group p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/25 hover:shadow-corporate-lg transition-all duration-300 hover:-translate-y-1"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — CTA
          ═══════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-foreground">
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
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-background leading-tight"
                variants={fadeInUp}
              >
                Let's Build Your Technology Infrastructure the Right Way.
              </motion.h2>
              <motion.p
                className="text-lg text-background/70 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Whether you're upgrading an existing environment or building from the ground up, our team is ready to deliver a structured solution tailored to your requirements.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
                variants={fadeInUp}
              >
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 font-semibold shadow-xl"
                  asChild
                >
                  <Link to="/contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-background/30 text-background hover:bg-background/10 hover:text-background hover:border-background/50"
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
