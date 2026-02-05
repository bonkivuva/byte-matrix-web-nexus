 import { Link } from "react-router-dom";
 import { ArrowRight, Monitor, Shield, Cloud, Settings, Users, Zap } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { motion, type Variants } from "framer-motion";
 
 const fadeInUp: Variants = {
   hidden: { opacity: 0, y: 24 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
 };
 
 const staggerContainer: Variants = {
   hidden: { opacity: 0 },
   visible: {
     opacity: 1,
     transition: { staggerChildren: 0.1, delayChildren: 0.1 }
   }
 };
 
 const services = [
   {
     icon: Monitor,
     title: "IT Consulting",
     description: "Strategic technology planning to optimize your business operations",
     gradient: "from-blue-500 to-indigo-600"
   },
   {
     icon: Shield,
     title: "Cybersecurity",
     description: "Comprehensive protection against modern cyber threats",
     gradient: "from-red-500 to-orange-600"
   },
   {
     icon: Cloud,
     title: "Cloud Solutions",
     description: "Seamless cloud migration and management for scalable growth",
     gradient: "from-green-500 to-teal-600"
   },
   {
     icon: Settings,
     title: "Hardware Setup",
     description: "End-to-end hardware solutions from sourcing to installation",
     gradient: "from-purple-500 to-pink-600"
   },
   {
     icon: Users,
     title: "24/7 Support",
     description: "Round-the-clock technical support to keep you running",
     gradient: "from-yellow-500 to-orange-600"
   },
   {
     icon: Zap,
     title: "System Integration",
     description: "Seamless integration of business systems for efficiency",
     gradient: "from-indigo-500 to-purple-600"
   }
 ];
 
 const ServicesHighlight = () => {
   return (
     <section className="section-spacing bg-gradient-professional-subtle relative overflow-hidden">
       {/* Background accents */}
       <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
       <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue-light/5 rounded-full blur-3xl"></div>
       
       <div className="container-professional relative z-10">
         <motion.div 
           className="section-header"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeInUp}
         >
           <div className="badge-premium mb-6">
             <Zap className="w-4 h-4 mr-2" />
             What We Deliver
           </div>
           <h2 className="text-balance">
             Enterprise <span className="text-gradient-professional">IT Solutions</span>
           </h2>
           <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
             Comprehensive technology services tailored to your business needs
           </p>
         </motion.div>
 
         <motion.div 
           className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={staggerContainer}
         >
           {services.map((service, index) => (
             <motion.div 
               key={index}
               className="glass-card-premium p-6 md:p-8 group cursor-pointer"
               variants={fadeInUp}
             >
               <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl mb-5 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}>
                 <service.icon className="w-7 h-7 text-white" />
               </div>
               <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">
                 {service.title}
               </h3>
               <p className="text-sm md:text-base text-muted-foreground">
                 {service.description}
               </p>
             </motion.div>
           ))}
         </motion.div>
 
         <motion.div 
           className="text-center mt-10 md:mt-12"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3, duration: 0.5 }}
         >
           <Button size="lg" asChild>
             <Link to="/services">
               View All Services
               <ArrowRight className="ml-2 h-5 w-5" />
             </Link>
           </Button>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default ServicesHighlight;