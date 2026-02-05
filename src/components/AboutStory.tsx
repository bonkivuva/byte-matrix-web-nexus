 import { Star, Zap, Shield, Users } from "lucide-react";
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
 
 const values = [
   { Icon: Zap, title: "Innovation", desc: "Adopting and implementing the latest technologies" },
   { Icon: Shield, title: "Integrity", desc: "Building trust through transparency and ethical practices" },
   { Icon: Users, title: "Customer Focus", desc: "Delivering tailored solutions that meet client needs" },
   { Icon: Star, title: "Reliability", desc: "Ensuring consistent performance and dependable support" }
 ];
 
 const AboutStory = () => {
   return (
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
                   What sets us apart is our commitment to understanding your unique challenges. We don't believe in one-size-fits-all solutions. Instead, we take the time to listen, analyze, and create tailored strategies that address your specific needs.
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
   );
 };
 
 export default AboutStory;