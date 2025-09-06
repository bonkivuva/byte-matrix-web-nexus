import FuturisticHeader from "@/components/FuturisticHeader";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Users, 
  ArrowRight,
  Mail,
  Star,
  Zap,
  Code,
  Shield,
  Cloud,
  Brain
} from "lucide-react";

const Career = () => {
  return (
    <div className="min-h-screen bg-gradient-quantum font-cyber text-foreground overflow-hidden">
      <SEOHead 
        title="Careers - Join Our Team | Byte Matrix Technologies"
        description="Join BYTE MATRIX TECHNOLOGIES and be part of cutting-edge IT solutions. Explore career opportunities in software development, cybersecurity, cloud solutions, and more."
        keywords="IT jobs, software developer jobs, cybersecurity careers, remote tech jobs, Kenya IT careers, technology careers"
      />
      
      <FuturisticHeader currentPage="careers" />
      
      {/* Cyber background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-cyber opacity-5"></div>
        <div className="matrix-rain absolute inset-0"></div>
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl animate-neural-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyber-purple/5 rounded-full blur-3xl animate-neural-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative z-10 py-24">
        <div className="container-professional text-center">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-cyber/10 backdrop-blur-sm border border-cyber-blue/20 rounded-full text-cyber-blue font-medium mb-8 text-lg">
              <Star className="w-5 h-5 mr-3" />
              Join the Digital Revolution
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-cyber mb-6 tracking-tight">
              Build Tomorrow's Technology Today
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your career with cutting-edge technology. We empower businesses through innovative solutions and foster a culture of growth and collaboration in the digital matrix.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="btn-cyber hover-lift-cyber group"
                asChild
              >
                <Link to="/contact">
                  <Users className="w-5 h-5 mr-2" />
                  Connect With Us
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-cyber border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue/10"
                asChild
              >
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-16 animate-scale-in-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto glass-cyber border border-cyber-blue/20">
              <img 
                src="/lovable-uploads/6118b34b-4d85-4de5-b29f-798c1f7e9cec.png" 
                alt="Professional success at BYTE MATRIX TECHNOLOGIES"
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-cyber/20"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg font-medium">Innovation • Excellence • Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills We're Looking For */}
      <section className="relative z-10 py-20">
        <div className="container-professional">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-cyber/10 backdrop-blur-sm border border-cyber-purple/20 rounded-full text-cyber-purple font-medium mb-8 text-lg">
              <Brain className="w-5 h-5 mr-3" />
              Future Skills
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-cyber mb-6">
              Technologies We Master
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're always seeking talented individuals who are passionate about cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "Development",
                skills: ["React", "Node.js", "Python", "TypeScript"],
                gradient: "from-cyber-blue to-cyber-purple"
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                skills: ["Penetration Testing", "SOC", "Risk Assessment", "Compliance"],
                gradient: "from-cyber-purple to-cyber-pink"
              },
              {
                icon: Cloud,
                title: "Cloud Solutions",
                skills: ["AWS", "Azure", "DevOps", "Kubernetes"],
                gradient: "from-cyber-green to-cyber-blue"
              },
              {
                icon: Brain,
                title: "AI & ML",
                skills: ["Machine Learning", "Data Science", "Neural Networks", "AI"],
                gradient: "from-cyber-yellow to-cyber-green"
              }
            ].map((area, index) => (
              <Card 
                key={index}
                className="glass-cyber border border-cyber-blue/20 hover:border-cyber-purple/40 transition-all duration-500 hover-lift-cyber group"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-cyber-blue mb-4 group-hover:text-gradient-cyber transition-all duration-300">
                    {area.title}
                  </h3>
                  <div className="space-y-2">
                    {area.skills.map((skill, idx) => (
                      <div 
                        key={idx}
                        className="px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/20 rounded-full text-sm text-cyber-blue"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="relative z-10 py-20">
        <div className="container-professional">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-cyber/10 backdrop-blur-sm border border-cyber-green/20 rounded-full text-cyber-green font-medium mb-8 text-lg">
              <Zap className="w-5 h-5 mr-3" />
              Current Opportunities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-cyber mb-6">
              Ready to Join Our Mission?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass-cyber border border-cyber-blue/20 text-center hover-lift-cyber group">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-gradient-cyber rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gradient-cyber mb-6">
                  Building Our Future Team
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                  Thank you for your interest in joining the BYTE MATRIX TECHNOLOGIES team! While we currently do not have any open positions, we are always on the lookout for talented individuals who share our passion for innovation and excellence in the digital realm.
                </p>
                
                <div className="space-y-4 mb-8">
                  <p className="text-cyber-blue font-medium">
                    Submit your portfolio and connect with us for future opportunities
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="btn-cyber hover-lift-cyber group"
                    asChild
                  >
                    <Link to="/contact">
                      <Mail className="w-5 h-5 mr-2" />
                      Submit Your Portfolio
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="glass-cyber border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue/10"
                    asChild
                  >
                    <a href="mailto:support@bytematrixtechnologies.co.ke">
                      Email Us Directly
                    </a>
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