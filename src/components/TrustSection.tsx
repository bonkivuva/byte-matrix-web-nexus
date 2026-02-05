 import { Shield, Award, Clock, Users, CheckCircle, Building } from "lucide-react";
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
 
 const stats = [
   { value: "99.9%", label: "Uptime Guarantee", icon: Clock },
   { value: "24/7", label: "Support Available", icon: Users },
   { value: "100+", label: "Businesses Served", icon: Building },
   { value: "10+", label: "Years Experience", icon: Award }
 ];
 
 const trustPoints = [
   "Microsoft Partner Certified",
   "Enterprise-Grade Security",
   "Local Support Team in Kenya",
   "Transparent Pricing"
 ];
 
 const TrustSection = () => {
   return (
     <section className="section-spacing relative overflow-hidden">
       <div className="container-professional">
         {/* Stats Grid */}
         <motion.div 
           className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={staggerContainer}
         >
           {stats.map((stat, index) => (
             <motion.div 
               key={index}
               className="glass-card-premium p-6 md:p-8 text-center"
               variants={fadeInUp}
             >
               <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-blue/10 rounded-xl mb-4">
                 <stat.icon className="w-6 h-6 text-brand-blue" />
               </div>
               <div className="text-3xl md:text-4xl font-bold text-gradient-professional mb-2">
                 {stat.value}
               </div>
               <div className="text-sm md:text-base text-muted-foreground font-medium">
                 {stat.label}
               </div>
             </motion.div>
           ))}
         </motion.div>
 
         {/* Why Choose Us */}
         <motion.div 
           className="max-w-4xl mx-auto"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={staggerContainer}
         >
           <motion.div className="text-center mb-10" variants={fadeInUp}>
             <div className="badge-premium mb-6">
               <Shield className="w-4 h-4 mr-2" />
               Why Choose Us
             </div>
             <h2 className="text-balance mb-4">
               Your Trusted <span className="text-gradient-professional">Technology Partner</span>
             </h2>
             <p className="text-muted-foreground max-w-2xl mx-auto">
               We combine technical expertise with a customer-first approach to deliver solutions that drive real business results.
             </p>
           </motion.div>
 
           <motion.div 
             className="grid sm:grid-cols-2 gap-4"
             variants={staggerContainer}
           >
             {trustPoints.map((point, index) => (
               <motion.div 
                 key={index}
                 className="flex items-center gap-3 p-4 rounded-xl bg-brand-blue/5 border border-brand-blue/10"
                 variants={fadeInUp}
               >
                 <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0" />
                 <span className="font-medium text-foreground">{point}</span>
               </motion.div>
             ))}
           </motion.div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default TrustSection;