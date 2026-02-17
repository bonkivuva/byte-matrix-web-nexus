import FuturisticHeader from "@/components/FuturisticHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, ArrowRight, Mail, Briefcase, Heart, Lightbulb, TrendingUp } from "lucide-react";
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

const Career = () => {
  const values = [
    { icon: Lightbulb, title: "Innovation", desc: "We encourage creative thinking and fresh approaches to solving complex challenges." },
    { icon: Users, title: "Collaboration", desc: "Every project is a team effort — we learn from each other and grow together." },
    { icon: TrendingUp, title: "Growth", desc: "Continuous learning, mentorship, and clear paths for career advancement." },
    { icon: Heart, title: "Impact", desc: "Your work directly improves how businesses operate across East Africa." },
  ];

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <SEOHead 
        title="Join Our Growing Team — Byte Matrix Technologies"
        description="Explore career opportunities at Byte Matrix Technologies. Join our team of IT professionals and help shape the future of technology solutions in East Africa."
        keywords="IT jobs Kenya, software developer jobs, technology careers, tech jobs Nairobi, career opportunities"
      />
      
      <FuturisticHeader currentPage="careers" />
      
      {/* Hero */}
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
              Careers
            </motion.p>
            <motion.h1 variants={fadeInUp}>
              Join Our Growing Team
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mt-6"
              variants={fadeInUp}
            >
              At Byte Matrix Technologies, we hire passionate, driven individuals who love technology and innovation. We promote a collaborative environment where learning and creativity thrive.
            </motion.p>
            <motion.div className="w-16 h-1 bg-primary rounded-full mt-6" variants={fadeInUp} />
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container-professional mb-16 md:mb-24">
        <motion.div 
          className="rounded-2xl overflow-hidden shadow-corporate-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <img 
            src="/lovable-uploads/6118b34b-4d85-4de5-b29f-798c1f7e9cec.png" 
            alt="Professional team at Byte Matrix Technologies"
            className="w-full h-56 md:h-72 lg:h-80 object-cover"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* Our Culture */}
      <section className="section-spacing bg-gradient-professional-subtle">
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
              Our Culture
            </motion.p>
            <motion.h2 variants={fadeInUp}>
              Why Work With <span className="text-gradient-professional">Us</span>
            </motion.h2>
            <motion.div className="w-16 h-1 bg-primary rounded-full mt-6" variants={fadeInUp} />
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {values.map((value, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <Card className="card-premium h-full">
                  <CardContent className="p-6 md:p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
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
              Open Positions
            </motion.p>
            <motion.h2 variants={fadeInUp}>
              Current Opportunities
            </motion.h2>
            <motion.div className="w-16 h-1 bg-primary rounded-full mt-6" variants={fadeInUp} />
          </motion.div>

          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="card-premium">
              <CardContent className="p-8 md:p-12">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  Building Our Future Team
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We don't have specific openings right now, but we're always looking for talented individuals who share our passion for technology and innovation. If you believe you'd be a great fit, we'd love to hear from you.
                </p>
                
                <p className="text-primary font-semibold mb-8">
                  Submit your CV & Cover Letter to get considered for future roles.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="mailto:careers@bytematrixtechnologies.co.ke">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Your CV
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
