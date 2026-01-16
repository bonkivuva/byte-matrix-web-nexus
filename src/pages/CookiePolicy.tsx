import Footer from "@/components/Footer";
import FuturisticHeader from "@/components/FuturisticHeader";
import SEOHead from "@/components/SEOHead";

const CookiePolicy = () => {
  return (
    <>
      <SEOHead 
        title="Cookie Policy | Byte Matrix Technologies"
        description="Cookie Policy for Byte Matrix Technologies. Learn about how we use cookies on our website."
      />
      
      <div className="min-h-screen bg-background">
        <FuturisticHeader />
        <div className="container mx-auto px-6 py-16 pt-28">
          <h1 className="text-4xl font-bold text-foreground mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground/80">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. What Are Cookies</h2>
              <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Track visitors across websites to display relevant advertisements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Session Cookies</h3>
                  <p>Temporary cookies that expire when you close your browser.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Persistent Cookies</h3>
                  <p>Remain on your device for a set period or until you delete them.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Third-Party Cookies</h3>
                  <p>Placed by external services that appear on our pages.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Managing Cookies</h2>
              <p>You can control and manage cookies in various ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Most browsers allow you to refuse cookies or delete cookies</li>
                <li>You can adjust your browser settings to notify you when cookies are being set</li>
                <li>Please note that disabling cookies may affect the functionality of our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Updates to This Policy</h2>
              <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Contact Us</h2>
              <p>If you have any questions about our Cookie Policy, please contact us at:</p>
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

export default CookiePolicy;
