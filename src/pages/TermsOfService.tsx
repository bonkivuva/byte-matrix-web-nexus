import Footer from "@/components/Footer";
import FuturisticHeader from "@/components/FuturisticHeader";
import SEOHead from "@/components/SEOHead";

const TermsOfService = () => {
  return (
    <>
      <SEOHead 
        title="Terms of Service | Byte Matrix Technologies"
        description="Terms of Service for Byte Matrix Technologies. Read our service terms and conditions."
      />
      
      <div className="min-h-screen bg-background">
        <FuturisticHeader />
        <div className="container mx-auto px-6 py-16 pt-28">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground/80">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using the services of Byte Matrix Technologies, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Services Description</h2>
              <p>Byte Matrix Technologies provides IT consulting, hardware solutions, technical support, and related technology services. The specific scope of services will be outlined in individual service agreements.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. User Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Use our services in compliance with all applicable laws</li>
                <li>Not misuse or attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Intellectual Property</h2>
              <p>All content, trademarks, and intellectual property on this website and in our services remain the property of Byte Matrix Technologies unless otherwise specified in a service agreement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Limitation of Liability</h2>
              <p>Byte Matrix Technologies shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services, except as required by law.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Service Modifications</h2>
              <p>We reserve the right to modify or discontinue services at any time. We will provide reasonable notice of significant changes affecting your service agreements.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Governing Law</h2>
              <p>These Terms of Service shall be governed by and construed in accordance with the laws of Kenya.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Contact Information</h2>
              <p>For questions about these Terms of Service, please contact us at:</p>
              <p className="mt-2">
                Email: <a href="mailto:info@bytematrixtechnologies.co.ke" className="text-primary hover:underline">info@bytematrixtechnologies.co.ke</a><br />
                Phone: <a href="tel:+254724367794" className="text-primary hover:underline">+254 724 367 794</a>
              </p>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;
