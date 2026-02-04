import { Mail, Phone, Clock, Send, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import FuturisticHeader from "@/components/FuturisticHeader";
import Footer from "@/components/Footer";
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

const Contact = () => {
  return (
    <div className="min-h-screen text-foreground relative overflow-x-hidden">
      <SEOHead 
        title="Contact Byte Matrix Technologies - Professional IT Consultation"
        description="Get in touch with Byte Matrix Technologies for expert IT consultation and support. Contact us today to discuss your technology needs and discover how we can help your business thrive."
        keywords="contact IT services, IT consultation, technology support, professional IT help, enterprise solutions contact, IT company Kenya"
      />
      
      <FuturisticHeader currentPage="contact" />

      {/* Hero Contact Section */}
      <section className="section-spacing pt-28 md:pt-32 relative z-10">
        <div className="container-professional">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-12 md:mb-16 lg:mb-20"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div 
                className="badge-premium mb-6 md:mb-8"
                variants={fadeInUp}
              >
                <Zap className="w-5 h-5 mr-2" />
                Professional IT Solutions
              </motion.div>
              <motion.h1 
                className="mb-6 md:mb-8 text-balance"
                variants={fadeInUp}
              >
                Get In Touch With Our Team
              </motion.h1>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto"
                variants={fadeInUp}
              >
                Ready to transform your business with professional IT solutions? Contact us today for expert guidance, reliable support, and technology services tailored to your needs.
              </motion.p>
              <motion.div 
                className="divider-gradient mt-6 md:mt-8"
                variants={fadeInUp}
              ></motion.div>
            </motion.div>

            {/* Lead Capture Form */}
            <motion.div 
              className="mb-12 md:mb-16 lg:mb-20"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <LeadCaptureForm />
            </motion.div>

            {/* Working Hours Card */}
            <motion.div 
              className="mb-12 md:mb-16"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="card-premium max-w-2xl mx-auto">
                <CardContent className="p-6 sm:p-8 md:p-10 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-brand">
                    <Clock className="h-8 w-8 md:h-10 md:w-10 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Business Hours</h3>
                  <div className="space-y-3 md:space-y-4">
                    <p className="font-medium text-base md:text-lg text-muted-foreground">Monday - Saturday</p>
                    <div className="glass-professional rounded-xl p-4 md:p-6 mb-4">
                      <p className="text-xl md:text-2xl font-bold text-brand-blue">9:00 AM - 6:00 PM</p>
                      <p className="text-sm text-muted-foreground mt-1">East Africa Time (UTC+3)</p>
                    </div>
                    <div className="glass-professional rounded-xl p-3 md:p-4">
                      <p className="font-medium text-destructive text-sm md:text-base">Closed on Sundays & Public Holidays</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Methods */}
            <motion.div 
              className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                {
                  icon: Phone,
                  title: "Phone Support",
                  description: "Call us for immediate assistance and expert IT guidance",
                  contact: "+254 724 367 794",
                  href: "tel:+254724367794",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  description: "Send us your questions and project requirements",
                  contact: "info@bytematrixtechnologies.co.ke",
                  href: "mailto:info@bytematrixtechnologies.co.ke",
                },
              ].map((contact, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="card-premium group h-full">
                    <CardContent className="p-6 sm:p-8 md:p-10 text-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-brand group-hover:scale-110 transition-transform duration-300">
                        <contact.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 group-hover:text-brand-blue transition-colors duration-200">
                        {contact.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                        {contact.description}
                      </p>
                      <a
                        href={contact.href}
                        className="text-brand-blue hover:text-brand-blue-light font-medium text-base md:text-lg transition-colors duration-200 break-all hover:underline"
                      >
                        {contact.contact}
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Media Section */}
            <motion.div 
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8 md:mb-10">
                <div className="badge-premium mb-6 md:mb-8">
                  <Target className="w-5 h-5 mr-2" />
                  Connect With Us
                </div>
                <h2 className="mb-4 md:mb-6">
                  Stay Connected
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8">
                  Follow us on social media for technology insights, updates, and industry news.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <a
                  href="https://x.com/ByteMatrixTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center px-5 md:px-6 py-3 glass-professional hover:bg-brand-blue hover:text-white rounded-xl transition-all duration-200 hover:-translate-y-1 shadow-brand min-h-[44px]"
                  aria-label="Follow us on X (Twitter)"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="font-medium">X (Twitter)</span>
                </a>
                
                <a
                  href="https://www.facebook.com/share/1BSjKFRCUd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center px-5 md:px-6 py-3 glass-professional hover:bg-brand-blue hover:text-white rounded-xl transition-all duration-200 hover:-translate-y-1 shadow-brand min-h-[44px]"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="font-medium">Facebook</span>
                </a>
                
                <a
                  href="https://www.instagram.com/byte_matrix_technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center px-5 md:px-6 py-3 glass-professional hover:bg-brand-blue hover:text-white rounded-xl transition-all duration-200 hover:-translate-y-1 shadow-brand min-h-[44px]"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="font-medium">Instagram</span>
                </a>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Button
                size="lg"
                asChild
              >
                <a href="tel:+254724367794">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <a href="mailto:info@bytematrixtechnologies.co.ke">
                  <Send className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
