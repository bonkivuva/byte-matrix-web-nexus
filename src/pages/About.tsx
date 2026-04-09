import { Link } from "react-router-dom";
import futuristicDataCentre from "@/assets/futuristic-data-centre.jpg";
import {
  ArrowRight, Shield, Users, CheckCircle, Phone,
  Cloud, Server, Camera, Cpu,
  Building2, GraduationCap, Landmark, ShoppingBag, Factory, Heart,
  Lightbulb, Eye, Target, Layers, Award
} from "lucide-react";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import FuturisticHeader from "@/components/FuturisticHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FloatingActions from "@/components/FloatingActions";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import PageTransition from "@/components/PageTransition";
import futuristicCity from "@/assets/futuristic-tech-city.jpg";

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
    <PageTransition><div className="min-h-screen text-foreground overflow-x-hidden">
      <SEOHead
        title="About Byte Matrix Technologies — ICT Infrastructure Specialists in Kenya"
        description="Byte Matrix Technologies is a professional ICT solutions provider specialising in enterprise infrastructure, cybersecurity, cloud systems, surveillance, and automation across Kenya."
        keywords="IT solutions Kenya, enterprise ICT, cybersecurity Kenya, cloud solutions, IT consulting, surveillance systems, Byte Matrix Technologies"
      />

      <FuturisticHeader currentPage="about" />

      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center pt-16 overflow-hidden" style={{ backgroundColor: '#0F1F2E' }}>
        <div className="absolute inset-0">
          <img
            src={futuristicDataCentre}
            alt="Futuristic data centre with glowing server racks"
            className="w-full h-full object-cover opacity-20"
          />
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
                className="text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ color: '#00BFA5' }}
                variants={fadeInUp}
              >
                Connecting Your Digital Matrix
              </motion.p>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1]"
                style={{ color: '#FFFFFF' }}
                variants={fadeInUp}
              >
                Enterprise IT support that keeps Nairobi's most ambitious businesses running — 24/7.
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl max-w-2xl leading-[1.8]"
                style={{ color: '#CBD5E1' }}
                variants={fadeInUp}
              >
                From enterprise hardware and networking to rapid on-site response, Byte Matrix Technologies is the IT partner Nairobi's top companies trust.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                variants={fadeInUp}
              >
                <Button size="lg" className="rounded-xl font-semibold shadow-xl" style={{ backgroundColor: '#0F1F2E', color: '#FFFFFF', border: '2px solid #1A2E42' }} asChild>
                  <Link to="/contact">
                    Schedule a Free IT Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" className="rounded-xl font-semibold" style={{ backgroundColor: 'transparent', color: '#FFFFFF', border: '2px solid #FFFFFF' }} asChild>
                  <a href="tel:+254724367794">
                    Talk to an Engineer Today
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TRUST BAR
          ═══════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#1A2E42' }} className="py-5">
        <div className="container-professional">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 sm:divide-x divide-white/20">
            {["24/7 Support", "2-Hour Response SLA", "5+ Years Serving Nairobi", "Enterprise & SME Clients"].map((item, idx) => (
              <p key={idx} className="px-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-center" style={{ color: '#FFFFFF' }}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CLIENT LOGOS
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container-professional text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3" variants={fadeInUp}>
              Trusted by leading organisations across Kenya
            </motion.h2>
            <motion.p className="text-muted-foreground mb-10 max-w-lg mx-auto" variants={fadeInUp}>
              Join the companies that rely on Byte Matrix for critical IT infrastructure.
            </motion.p>
            {/* [Replace these with real client logo images] */}
            <motion.div className="flex flex-wrap items-center justify-center gap-6" variants={fadeInUp}>
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-36 h-16 rounded-xl bg-muted flex items-center justify-center"
                >
                  <span className="text-xs text-muted-foreground font-medium">Client Logo</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICE TIERS
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="container-professional">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" variants={fadeInUp}>
              Service Tiers
            </motion.h2>
            <motion.p className="text-muted-foreground max-w-xl mx-auto" variants={fadeInUp}>
              Choose the level of IT support that fits your organisation.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Business */}
            <motion.div variants={fadeInUp} className="rounded-2xl border border-border bg-card p-8 md:p-10 flex flex-col hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">Business</h3>
              <p className="text-sm text-muted-foreground mb-6">IT support for growing businesses</p>
              <ul className="space-y-3 mb-8 flex-1">
                {["Remote helpdesk support", "Hardware procurement & setup", "Monthly maintenance visits"].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2.5 flex-shrink-0" style={{ color: '#00BFA5' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </motion.div>

            {/* Enterprise — MOST POPULAR */}
            <motion.div variants={fadeInUp} className="rounded-2xl bg-card p-8 md:p-10 flex flex-col relative hover:-translate-y-1 transition-all duration-300" style={{ border: '2px solid #0F1F2E' }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: '#0F1F2E', color: '#FFFFFF' }}>
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-sm text-muted-foreground mb-6">Full managed IT services</p>
              <ul className="space-y-3 mb-8 flex-1">
                {["24/7 remote + on-site support", "Network infrastructure management", "Priority hardware replacement", "Dedicated account manager"].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2.5 flex-shrink-0" style={{ color: '#00BFA5' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="w-full" style={{ backgroundColor: '#0F1F2E', color: '#FFFFFF' }} asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </motion.div>

            {/* Custom */}
            <motion.div variants={fadeInUp} className="rounded-2xl border border-border bg-card p-8 md:p-10 flex flex-col hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">Custom</h3>
              <p className="text-sm text-muted-foreground mb-6">Tailored for complex environments</p>
              <ul className="space-y-3 mb-8 flex-1">
                {["Multi-site IT management", "Enterprise-grade SLAs", "Custom procurement & logistics", "Board-level IT reporting"].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2.5 flex-shrink-0" style={{ color: '#00BFA5' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact">Contact Us Directly</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — WHO WE ARE
          ═══════════════════════════════════════════ */}
      <section className="section-spacing-lg">
        <div className="container-professional">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="grid md:grid-cols-2 gap-10 md:gap-14 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {/* Left — text */}
              <motion.div variants={fadeInUp}>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary mb-4">
                  Who We Are
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-6">
                  An ICT Engineering Company Built for Enterprise
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We are an ICT engineering company focused on delivering structured, standards-driven technology solutions for institutions and enterprises across Kenya.
                  </p>
                  <p>
                    Our approach combines technical precision, strategic planning, and long-term system reliability — ensuring every deployment meets the operational demands of modern business environments.
                  </p>
                </div>
              </motion.div>

              {/* Right — image */}
              <motion.div variants={fadeInUp} className="flex justify-center">
                <img
                  src={futuristicDataCentre}
                  alt="Futuristic data centre with glowing server racks"
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="w-full max-w-[640px] min-h-[300px] object-cover rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.18)] ring-1 ring-border"
                />
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
          SECTION 6 — TESTIMONIALS
          ═══════════════════════════════════════════ */}
      <Testimonials />

      {/* ═══════════════════════════════════════════
          SECTION 7 — CERTIFICATIONS & PARTNERSHIPS
          ═══════════════════════════════════════════ */}
      <section className="section-spacing bg-gradient-professional-subtle">
        <div className="container-professional">
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.p
              className="text-sm font-semibold uppercase tracking-[0.15em] text-primary mb-4"
              variants={fadeInUp}
            >
              Trusted Partnerships
            </motion.p>
            <motion.h2
              className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
              variants={fadeInUp}
            >
              Technology Partners & Certifications
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-xl mx-auto"
              variants={fadeInUp}
            >
              We work with industry-leading vendors to deliver enterprise-grade solutions.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {["Microsoft", "Cisco", "HP Enterprise", "Dell Technologies", "Ubiquiti", "Hikvision"].map((partner, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card hover:border-primary/25 transition-all duration-300"
                variants={fadeInUp}
              >
                <Award className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">{partner}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FUTURISTIC TECH CITY DIVIDER
          ═══════════════════════════════════════════ */}
      <section className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={futuristicCity}
          alt="Futuristic smart city — technology powering the future"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,55%,28%,0.85)] via-[hsl(215,55%,28%,0.6)] to-[hsl(38,85%,52%,0.4)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-white/90 drop-shadow-lg">
            Proudly Serving East Africa from Nairobi
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8 — CTA
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
    </div></PageTransition>
  );
};

export default About;
