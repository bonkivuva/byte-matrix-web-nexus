 import FuturisticHeader from "@/components/FuturisticHeader";
 import Footer from "@/components/Footer";
 import SEOHead from "@/components/SEOHead";
 import FloatingActions from "@/components/FloatingActions";
 import HeroSection from "@/components/HeroSection";
 import ServicesHighlight from "@/components/ServicesHighlight";
 import TrustSection from "@/components/TrustSection";
 import CTASection from "@/components/CTASection";
 import Testimonials from "@/components/Testimonials";
 import AboutStory from "@/components/AboutStory";
 
 const About = () => {
   return (
     <div className="min-h-screen text-foreground overflow-x-hidden">
       <SEOHead 
         title="Byte Matrix Technologies | IT Solutions & Digital Transformation in Kenya"
         description="Transform your business with reliable IT solutions. Tailored IT services, cybersecurity, cloud solutions, and 24/7 support. Trusted by businesses across Kenya."
         keywords="IT solutions Kenya, digital transformation, cybersecurity services, cloud solutions, IT consulting, managed IT services, enterprise technology, Byte Matrix Technologies"
       />
       
       <FuturisticHeader currentPage="about" />
       
       <HeroSection />
       <ServicesHighlight />
       <TrustSection />
       <AboutStory />
       <Testimonials />
       <CTASection />
 
       <Footer />
       <FloatingActions />
     </div>
   );
 };
 
 export default About;