import { Link } from "react-router-dom";
import {
  ArrowRight, Shield, Users, CheckCircle, Phone,
  Monitor, Wifi, Camera, Headphones, Code, HardDrive,
  Building2, GraduationCap, Landmark, ShoppingBag, Factory, Heart,
  Lightbulb, Eye, Target, Layers, Award, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FuturisticHeader from "@/components/FuturisticHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion, type Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

const About = () => {
  const services = [
    { icon: Monitor, title: "Hardware Repair", desc: "Laptops, desktops, printers & peripherals" },
    { icon: Wifi, title: "Networking & Cabling", desc: "LAN, WiFi setup & structured cabling" },
    { icon: Camera, title: "CCTV & Security", desc: "Installation, configuration & monitoring" },
    { icon: Headphones, title: "IT Support", desc: "On-site and remote support for businesses" },
    { icon: Code, title: "Software & OS", desc: "Installation, updates & troubleshooting" },
    { icon: HardDrive, title: "Data Recovery", desc: "Recover lost files from any device" },
  ];

  const stats = [
    { value: "500+", label: "Clients Served" },
    { value: "5+", label: "Years Experience" },
    { value: "Same-Day", label: "Response" },
    { value: "Nairobi", label: "Based" },
  ];

  const testimonials = [
    {
      quote: "Byte Matrix fixed our office network in under 2 hours. Highly professional and affordable.",
      name: "James M.",
      location: "Westlands",
    },
    {
      quote: "Best IT support in Nairobi. They recovered all our data after a hard drive crash.",
      name: "Amina K.",
      location: "Karen",
    },
    {
      quote: "Installed CCTV cameras across our 3 offices. Clean work and great after-sales support.",
      name: "Peter O.",
      location: "CBD",
    },
  ];

  const coreValues = [
    { icon: Lightbulb, title: "Innovation", desc: "We continuously adopt emerging technologies and engineering practices." },
    { icon: Eye, title: "Integrity", desc: "We operate with transparency and clear communication in every engagement." },
    { icon: Target, title: "Customer Focus", desc: "We align every solution with our client's operational objectives." },
    { icon: Shield, title: "Reliability", desc: "We design systems for uptime, resilience, and long-term stability." },
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
        title="Byte Matrix Technologies — Your Trusted IT Partner in Nairobi"
        description="Professional IT solutions in Nairobi. Hardware repair, networking, CCTV, IT support, and more."
        keywords="IT solutions Kenya, hardware repair Nairobi, networking, CCTV installation, IT support"
      />

      <FuturisticHeader />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[80vh] flex items-center bg-[hsl(222,47%,11%)] overflow-hidden">
        {/* Blue glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl" />
        
        <div className="container-professional relative z-10 py-20">
          <div className="max-w-3xl">
            <motion.div className="space-y-8" initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] text-white" variants={fadeInUp}>
                Your Trusted IT Partner in Nairobi
              </motion.h1>
              <motion.p className="text-lg sm:text-xl text-gray-300 max-w-2xl" variants={fadeInUp}>
                Hardware Repair · Networking · CCTV · IT Support
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-4 pt-4" variants={fadeInUp}>
                <Button size="lg" className="rounded-lg" asChild>
                  <Link to="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-lg border-white/30 text-white hover:bg-white/10 hover:text-white" asChild>
                  <Link to="/services">
                    View Our Services
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ STATS / TRUST BAR ═══════ */}
      <section className="bg-muted py-10 md:py-12">
        <div className="container-professional">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className={`text-center px-4 ${idx < stats.length - 1 ? 'md:border-r md:border-border' : ''}`}
                variants={fadeInUp}
              >
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ SERVICES GRID ═══════ */}
      <section className="py-20">
        <div className="container-professional">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" variants={fadeInUp}>
              Our Services
            </motion.h2>
            <motion.p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto" variants={fadeInUp}>
              Comprehensive IT solutions for businesses of all sizes
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ WHO WE ARE ═══════ */}
      <section className="py-20 bg-muted/50">
        <div className="container-professional">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="grid md:grid-cols-2 gap-10 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Who We Are</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  An ICT Engineering Company Built for Enterprise
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>We are an ICT engineering company focused on delivering structured, standards-driven technology solutions for institutions and enterprises across Kenya.</p>
                  <p>Our approach combines technical precision, strategic planning, and long-term system reliability.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1280&q=80"
                  alt="Modern data center with server racks"
                  className="w-full rounded-xl shadow-lg object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ CORE VALUES ═══════ */}
      <section className="py-20">
        <div className="container-professional">
          <motion.div className="max-w-2xl mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" variants={fadeInUp}>
              Our Core Values
            </motion.h2>
            <motion.div className="w-16 h-1 bg-primary rounded-full" variants={fadeInUp} />
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {coreValues.map((value, idx) => (
              <motion.div key={idx} className="p-6 rounded-2xl border border-border bg-card hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group" variants={fadeInUp}>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ INDUSTRIES ═══════ */}
      <section className="py-20 bg-muted/50">
        <div className="container-professional">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" variants={fadeInUp}>
              Industries We Serve
            </motion.h2>
          </motion.div>

          <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {industries.map((industry, idx) => (
              <motion.div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card hover:-translate-y-1 hover:shadow-md transition-all group" variants={fadeInUp}>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-sm font-semibold">{industry.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="py-20">
        <div className="container-professional">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" variants={fadeInUp}>
              What Our Clients Say
            </motion.h2>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {testimonials.map((t, idx) => (
              <motion.div key={idx} className="bg-card border border-border rounded-2xl p-6 md:p-8" variants={fadeInUp}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-foreground italic mb-6 leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <p className="font-semibold text-sm">— {t.name}, <span className="text-muted-foreground font-normal">{t.location}</span></p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ PARTNERS ═══════ */}
      <section className="py-20 bg-muted/50">
        <div className="container-professional">
          <motion.div className="text-center mb-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4" variants={fadeInUp}>
              Technology Partners
            </motion.h2>
          </motion.div>
          <motion.div className="flex flex-wrap items-center justify-center gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {["Microsoft", "Cisco", "HP Enterprise", "Dell Technologies", "Ubiquiti", "Hikvision"].map((partner, idx) => (
              <motion.div key={idx} className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card" variants={fadeInUp}>
                <Award className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-semibold whitespace-nowrap">{partner}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="relative py-20 md:py-28 bg-[hsl(222,47%,11%)] overflow-hidden">
        <div className="container-professional relative z-10 text-center">
          <motion.div className="max-w-3xl mx-auto space-y-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight" variants={fadeInUp}>
              Let's Build Your Technology Infrastructure the Right Way.
            </motion.h2>
            <motion.p className="text-lg text-gray-400 max-w-2xl mx-auto" variants={fadeInUp}>
              Whether you're upgrading an existing environment or building from the ground up, our team is ready to deliver.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center pt-4" variants={fadeInUp}>
              <Button size="lg" className="bg-white text-[hsl(222,47%,11%)] hover:bg-white/90 rounded-lg font-semibold" asChild>
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-lg" asChild>
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
      <WhatsAppButton />
    </div>
  );
};

export default About;
