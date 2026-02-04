import { Link } from "react-router-dom";
import { ArrowRight, Star, Zap, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import FuturisticHeader from "@/components/FuturisticHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FloatingActions from "@/components/FloatingActions";
import { motion, type Variants } from "framer-motion";

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

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <SEOHead 
        title="About Byte Matrix Technologies - Professional IT Solutions Provider"
        description="Discover Byte Matrix Technologies, your trusted partner for professional IT solutions, digital transformation, and enterprise technology services in Kenya and beyond."
        keywords="about byte matrix technologies, IT company Kenya, digital transformation, enterprise solutions, technology consulting, professional IT services"
      />
      
      <FuturisticHeader currentPage="about" />

      {/* Hero Section */}
      <section className="section-spacing pt-28 md:pt-32 relative z-10 overflow-hidden">
        <div className="container-professional relative z-10">
          <div className="max-w-6xl mx-auto">
            
            {/* Modern two-column layout */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left column - Logo */}
              <motion.div 
                className="relative order-2 lg:order-1"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 via-brand-blue-light/10 to-brand-blue/10 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
                  
                  {/* Logo container */}
                  <div className="relative glass-card-premium p-6 sm:p-8 lg:p-12">
                    <img
                      src="/lovable-uploads/34f37754-9171-4da7-aa9a-8e558bdfb980.png"
                      alt="Byte Matrix Technologies"
                      className="w-full h-auto max-w-md mx-auto object-contain transform transition-all duration-500 group-hover:scale-105"
                      style={{
                        filter: "drop-shadow(0 10px 30px rgba(59, 130, 246, 0.15))",
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Right column - Content */}
              <motion.div 
                className="space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div className="space-y-4 md:space-y-6" variants={fadeInUp}>
                  <div className="badge-premium">
                    <Star className="w-4 h-4 mr-2" />
                    About Us
                  </div>
                  
                  <h1 className="text-balance">
                    Welcome to <span className="text-gradient-professional">Byte Matrix</span> Technologies
                  </h1>
                  
                  <div className="divider-gradient lg:mx-0"></div>
                </motion.div>
                
                <motion.p 
                  className="text-base sm:text-lg text-muted-foreground"
                  variants={fadeInUp}
                >
                  We're passionate IT professionals dedicated to helping your business thrive in the digital world. From robust IT infrastructure to comprehensive hardware solutions and expert guidance, we make technology work for you—simply, effectively, and reliably.
                </motion.p>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center pt-2"
                  variants={fadeInUp}
                >
                  <Button size="lg" asChild>
                    <Link to="/services">
                      Explore Our Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">
                      <Zap className="mr-2 h-5 w-5" />
                      Get Started
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue-light/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
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
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                      <item.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue" />
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
                    Ready to Experience the <span className="text-gradient-professional">Byte Matrix Difference</span>?
                  </h2>
                  <div className="divider-gradient mb-6"></div>
                </div>
                
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Let's discuss how we can help your business succeed. Reach out today for expert guidance tailored to your unique needs.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 md:pt-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      Get In Touch
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/services">
                      View Services
                      <Star className="ml-2 h-5 w-5" />
                    </Link>
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