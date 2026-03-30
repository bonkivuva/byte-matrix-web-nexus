import { Mail, Phone, Clock, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import FuturisticHeader from "@/components/FuturisticHeader";
import Footer from "@/components/Footer";
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

const Contact = () => {
  const contactInfo = [
    { icon: Phone, title: "Phone / WhatsApp", detail: "+254 700 000 000", href: "tel:+254700000000" },
    { icon: Mail, title: "Email", detail: "info@bytematrix.co.ke", href: "mailto:info@bytematrix.co.ke" },
    { icon: MapPin, title: "Location", detail: "Nairobi, Kenya", href: null },
    { icon: Clock, title: "Business Hours", detail: "Mon–Sat, 8am–6pm", href: null },
  ];

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <SEOHead 
        title="Contact Us — Byte Matrix Technologies"
        description="Get in touch with Byte Matrix Technologies for expert IT consultation and support in Nairobi, Kenya."
        keywords="contact IT services, IT consultation, technology support Kenya"
      />
      
      <FuturisticHeader />

      {/* Hero */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="container-professional">
          <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" variants={fadeInUp}>
              Get in Touch With Us
            </motion.h1>
            <motion.p className="text-lg text-muted-foreground max-w-2xl leading-relaxed" variants={fadeInUp}>
              Reach out to a team that values transparency, reliability, and long-term partnerships.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Dark Navy */}
      <section className="bg-[hsl(222,47%,11%)] py-20">
        <div className="container-professional">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Contact Details */}
            <motion.div className="space-y-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 className="text-3xl md:text-4xl font-bold text-white" variants={fadeInUp}>
                Contact Details
              </motion.h2>

              <div className="space-y-6">
                {contactInfo.map((item, idx) => (
                  <motion.div key={idx} className="flex items-start gap-4" variants={fadeInUp}>
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-1">{item.title}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-white font-medium hover:text-blue-400 transition-colors">
                          {item.detail}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{item.detail}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp}>
                <Button size="lg" className="rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white" asChild>
                  <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Send us a WhatsApp
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right - Google Maps */}
            <motion.div
              className="rounded-2xl overflow-hidden border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743965!2d36.6952!3d-1.2921"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Byte Matrix Technologies — Nairobi, Kenya"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container-professional">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-8">
              Send Us a Message
            </h2>
            <LeadCaptureForm />
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
              <span>We respond within <strong className="text-foreground">2 hours</strong> during business hours.</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
