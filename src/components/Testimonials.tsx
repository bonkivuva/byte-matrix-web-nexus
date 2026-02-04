import { Star, Quote } from "lucide-react";
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

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mwangi",
      role: "Chief Technology Officer",
      company: "TechCorp Kenya",
      content: "Byte Matrix Technologies transformed our entire IT infrastructure. Their expertise and 24/7 support have been invaluable. We've seen a 40% improvement in system uptime.",
      rating: 5,
    },
    {
      name: "John Kamau",
      role: "Operations Director",
      company: "Retail Solutions Ltd",
      content: "The hardware procurement and setup service was seamless. They secured the best prices and configured everything perfectly. Our systems are running flawlessly.",
      rating: 5,
    },
    {
      name: "Grace Ochieng",
      role: "IT Manager",
      company: "Finance Group",
      content: "Their cybersecurity solutions gave us complete peace of mind. The team is knowledgeable, responsive, and truly understands enterprise security needs.",
      rating: 5,
    }
  ];

  return (
    <section className="section-spacing">
      <div className="container-professional">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span 
            className="badge-premium mb-4"
            variants={fadeInUp}
          >
            Testimonials
          </motion.span>
          <motion.h2 variants={fadeInUp}>
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Don't just take our word for it — hear from the businesses we've helped transform
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid-professional-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="glass-card-premium p-6 md:p-8 relative"
              variants={fadeInUp}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 md:w-10 md:h-10 text-brand-blue/10 absolute top-4 md:top-6 right-4 md:right-6" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-foreground mb-4 md:mb-6 text-sm md:text-base">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 md:gap-4 pt-3 md:pt-4 border-t border-border">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs md:text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm md:text-base">{testimonial.name}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs md:text-sm text-brand-blue font-medium">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicator */}
        <motion.div 
          className="text-center mt-10 md:mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-muted-foreground text-sm md:text-base">
            Join <span className="text-brand-blue font-semibold">500+ satisfied clients</span> across East Africa
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
