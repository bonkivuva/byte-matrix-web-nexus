import { Mail, Phone, Clock, MapPin, Send, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import FuturisticHeader from "@/components/FuturisticHeader";
import Footer from "@/components/Footer";
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

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      detail: "+254 724 367 794",
      href: "tel:+254724367794",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "info@bytematrixtechnologies.co.ke",
      href: "mailto:info@bytematrixtechnologies.co.ke",
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Nairobi, Kenya",
      href: null,
    },
  ];

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <SEOHead 
        title="Get in Touch — Byte Matrix Technologies"
        description="Contact Byte Matrix Technologies for expert IT consultation and support. We're ready to help your business thrive with professional technology solutions."
        keywords="contact IT services, IT consultation, technology support, professional IT help, enterprise solutions contact, IT company Kenya"
      />
      
      <FuturisticHeader currentPage="contact" />

      {/* Hero */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="container-professional">
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
              Contact Us
            </motion.p>
            <motion.h1 variants={fadeInUp}>
              Get in Touch With Us
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mt-6"
              variants={fadeInUp}
            >
              Reach out to a team that values transparency, reliability, and long-term partnerships. We're ready to deliver technology solutions tailored to your unique needs.
            </motion.p>
            <motion.div className="w-16 h-1 bg-primary rounded-full mt-6" variants={fadeInUp} />
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards + Form */}
      <section className="section-spacing bg-gradient-professional-subtle">
        <div className="container-professional">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left — Info */}
            <motion.div 
              className="lg:col-span-2 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {contactInfo.map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp}>
                  <Card className="card-premium">
                    <CardContent className="p-5 md:p-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-1">{item.title}</h3>
                        {item.href ? (
                          <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors break-all">
                            {item.detail}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.detail}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Business Hours */}
              <motion.div variants={fadeInUp}>
                <Card className="card-premium">
                  <CardContent className="p-5 md:p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-1">Business Hours</h3>
                      <p className="text-foreground font-medium">Mon – Fri: 08:00 – 18:00</p>
                      <p className="text-foreground font-medium">Sat: 09:00 – 14:00</p>
                      <p className="text-sm text-muted-foreground mt-1">East Africa Time (UTC+3)</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Social */}
              <motion.div variants={fadeInUp}>
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">Connect With Us</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: "X (Twitter)", href: "https://x.com/ByteMatrixTech", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                    { label: "Facebook", href: "https://www.facebook.com/share/1BSjKFRCUd/", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                    { label: "Instagram", href: "https://www.instagram.com/byte_matrix_technologies", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card hover:border-primary/25 hover:text-primary transition-all duration-200 text-sm font-medium min-h-[44px]"
                      aria-label={`Follow us on ${social.label}`}
                    >
                      {social.icon}
                      {social.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right — Form */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <LeadCaptureForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-professional">
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button size="lg" asChild>
              <a href="tel:+254724367794">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:info@bytematrixtechnologies.co.ke">
                <Send className="mr-2 h-5 w-5" />
                Send Email
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
