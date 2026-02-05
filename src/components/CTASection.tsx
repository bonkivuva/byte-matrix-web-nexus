 import { Link } from "react-router-dom";
 import { ArrowRight, Phone, MessageCircle } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { motion } from "framer-motion";
 import LeadCaptureForm from "@/components/LeadCaptureForm";
 
 const CTASection = () => {
   return (
     <section className="section-spacing bg-gradient-professional-subtle relative overflow-hidden">
       {/* Background elements */}
       <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue-light/5 rounded-full blur-3xl"></div>
       
       <div className="container-professional relative z-10">
         <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
           {/* Left side - Text content */}
           <motion.div 
             className="space-y-6"
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
           >
             <div className="badge-premium">
               <MessageCircle className="w-4 h-4 mr-2" />
               Get In Touch
             </div>
             
             <h2 className="text-balance">
               Ready to <span className="text-gradient-professional">Transform</span> Your IT Infrastructure?
             </h2>
             
             <p className="text-muted-foreground text-lg">
               Fill out the form and our team will contact you within 24 hours to discuss your technology needs and provide a free consultation.
             </p>
 
             <div className="space-y-4 pt-4">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                   <Phone className="w-5 h-5 text-brand-blue" />
                 </div>
                 <div>
                   <p className="text-sm text-muted-foreground">Call us directly</p>
                   <a href="tel:+254724367794" className="font-semibold text-foreground hover:text-brand-blue transition-colors">
                     +254 724 367 794
                   </a>
                 </div>
               </div>
               
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                   <MessageCircle className="w-5 h-5 text-brand-blue" />
                 </div>
                 <div>
                   <p className="text-sm text-muted-foreground">Email us</p>
                   <a href="mailto:info@bytematrixtechnologies.co.ke" className="font-semibold text-foreground hover:text-brand-blue transition-colors">
                     info@bytematrixtechnologies.co.ke
                   </a>
                 </div>
               </div>
             </div>
 
             <div className="pt-4">
               <Button variant="outline" size="lg" asChild>
                 <Link to="/contact">
                   View Full Contact Page
                   <ArrowRight className="ml-2 h-5 w-5" />
                 </Link>
               </Button>
             </div>
           </motion.div>
 
           {/* Right side - Form */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
           >
             <LeadCaptureForm 
               title="Request a Free Consultation"
               subtitle="Tell us about your IT challenges and we'll provide tailored solutions."
             />
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default CTASection;