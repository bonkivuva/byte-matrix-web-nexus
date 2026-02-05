 import { Link } from "react-router-dom";
 import { ArrowRight, Sparkles } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { motion } from "framer-motion";
 
 const HeroSection = () => {
   return (
     <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
       {/* Animated gradient background */}
       <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-brand-blue/5">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/10 via-transparent to-transparent"></div>
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-blue-light/8 via-transparent to-transparent"></div>
       </div>
       
       {/* Floating orbs */}
       <div className="absolute top-20 left-[10%] w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl animate-pulse"></div>
       <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-brand-blue-light/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl"></div>
       
       {/* Grid pattern overlay */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--brand-blue)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--brand-blue)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
 
       <div className="container-professional relative z-10 pt-24 pb-16">
         <div className="max-w-5xl mx-auto text-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, ease: "easeOut" }}
             className="space-y-6 md:space-y-8"
           >
             {/* Badge */}
             <motion.div 
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 backdrop-blur-sm"
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.2, duration: 0.4 }}
             >
               <Sparkles className="w-4 h-4 text-brand-blue" />
               <span className="text-sm font-medium text-brand-blue">Trusted IT Partner in Kenya</span>
             </motion.div>
 
             {/* Main headline */}
             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
               <span className="text-foreground">Transform Your Business</span>
               <br />
               <span className="text-gradient-professional">with Reliable IT Solutions</span>
             </h1>
 
             {/* Subheadline */}
             <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
               Tailored IT services • Cybersecurity • Cloud Solutions • 24/7 Support
               <br className="hidden sm:block" />
               <span className="text-foreground/80 font-medium">Trusted by businesses across East Africa</span>
             </p>
 
             {/* CTA Buttons */}
             <motion.div 
               className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4, duration: 0.5 }}
             >
               <Button size="lg" className="text-lg px-8 py-6 shadow-brand hover:shadow-brand-lg" asChild>
                 <Link to="/contact">
                   Get a Free Consultation
                   <ArrowRight className="ml-2 h-5 w-5" />
                 </Link>
               </Button>
               <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                 <Link to="/services">
                   Explore Our Services
                 </Link>
               </Button>
             </motion.div>
 
             {/* Trust indicators */}
             <motion.div 
               className="pt-8 md:pt-12"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6, duration: 0.5 }}
             >
               <p className="text-sm text-muted-foreground mb-4">Empowering businesses with</p>
               <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-foreground/70">
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                   <span>Enterprise Security</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                   <span>Cloud Infrastructure</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                   <span>24/7 Support</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                   <span>Digital Transformation</span>
                 </div>
               </div>
             </motion.div>
           </motion.div>
         </div>
       </div>
 
       {/* Bottom fade */}
       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
     </section>
   );
 };
 
 export default HeroSection;