import ProfessionalHeader from "@/components/ProfessionalHeader";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Users, 
  ArrowRight,
  Mail
} from "lucide-react";

const Career = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Careers - Join Our Team | Byte Matrix Technologies"
        description="Join BYTE MATRIX TECHNOLOGIES and be part of cutting-edge IT solutions. Explore career opportunities in software development, cybersecurity, cloud solutions, and more."
        keywords="IT jobs, software developer jobs, cybersecurity careers, remote tech jobs, Kenya IT careers, technology careers"
      />
      
      <ProfessionalHeader currentPage="careers" />
      
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
        <div className="container-professional text-center">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-brand mb-6">
              Join Our Team – Be Part of Something Big!
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
              Transform your career with cutting-edge technology. We empower businesses through innovative solutions and foster a culture of growth and collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-brand hover:opacity-90 transition-opacity">
                <Users className="w-5 h-5 mr-2" />
                View Open Positions
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-12 animate-scale-in-center">
            <img 
              src="/lovable-uploads/6118b34b-4d85-4de5-b29f-798c1f7e9cec.png" 
              alt="Professional success at BYTE MATRIX TECHNOLOGIES"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-professional-lg"
            />
          </div>
        </div>
      </section>

      {/* No Current Openings */}
      <section className="section-spacing bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container-professional">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-professional mb-6">
              Thank You for Your Interest
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="card-professional text-center">
              <CardContent className="p-12">
                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Thank you for your interest in joining the BYTE MATRIX TECHNOLOGIES team! While we currently do not have any open positions, we are always on the lookout for talented individuals who share our passion for innovation and excellence. Please feel free to submit your resume or portfolio, and we will keep it on file for future opportunities.
                </p>
                <div className="mt-8">
                  <Button size="lg" className="bg-gradient-brand hover:opacity-90 transition-opacity">
                    <Mail className="w-5 h-5 mr-2" />
                    Submit Your Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Career;