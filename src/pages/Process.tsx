import FuturisticHeader from "@/components/FuturisticHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { CheckCircle2, Lightbulb, Palette, Code, TestTube, Rocket, Headphones } from "lucide-react";

const Process = () => {
  const processSteps = [
    {
      icon: Lightbulb,
      title: "Discovery & Consultation",
      description: "We start by understanding your business goals, challenges, and requirements through detailed consultation sessions.",
      details: [
        "Initial consultation call",
        "Requirements gathering",
        "Technical feasibility assessment",
        "Project scope definition",
        "Timeline and budget estimation"
      ]
    },
    {
      icon: Palette,
      title: "Design & Planning",
      description: "Our team creates detailed wireframes, prototypes, and project plans to visualize the final solution.",
      details: [
        "User experience (UX) design",
        "User interface (UI) mockups",
        "System architecture planning",
        "Technology stack selection",
        "Project milestone planning"
      ]
    },
    {
      icon: Code,
      title: "Development",
      description: "Expert developers build your solution using industry best practices and cutting-edge technologies.",
      details: [
        "Agile development methodology",
        "Regular progress updates",
        "Code quality assurance",
        "Security implementation",
        "Performance optimization"
      ]
    },
    {
      icon: TestTube,
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your solution is bug-free, secure, and performs flawlessly.",
      details: [
        "Functional testing",
        "Security testing",
        "Performance testing",
        "User acceptance testing",
        "Cross-browser/device testing"
      ]
    },
    {
      icon: Rocket,
      title: "Launch & Deployment",
      description: "We handle the complete deployment process, ensuring a smooth transition to production.",
      details: [
        "Production environment setup",
        "Data migration (if applicable)",
        "Go-live support",
        "Training for your team",
        "Documentation delivery"
      ]
    },
    {
      icon: Headphones,
      title: "Support & Maintenance",
      description: "Ongoing support ensures your solution continues to perform optimally and evolves with your needs.",
      details: [
        "24/7 technical support",
        "Regular updates and patches",
        "Performance monitoring",
        "Feature enhancements",
        "Scalability support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Our Process | Byte Matrix Technologies"
        description="Discover our proven 6-step methodology for delivering exceptional IT solutions: Discovery, Design, Development, Testing, Launch, and Support."
        keywords="software development process, IT project methodology, agile development, quality assurance, Kenya"
      />
      
      <FuturisticHeader currentPage="process" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
        <div className="container-professional relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-up">
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full mb-6 border-2 border-primary/30">
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Methodology</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient-professional mb-6 leading-tight">
              A Proven Process for Success
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our structured 6-step methodology ensures every project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-background">
        <div className="container-professional">
          <div className="max-w-5xl mx-auto space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline connector */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-primary to-primary/20" />
                )}

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Icon */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg relative z-10">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-card border-2 border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-primary/50">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl font-bold text-primary">0{index + 1}</span>
                        <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                      </div>
                      
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          Key Activities:
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container-professional">
          <div className="max-w-3xl mx-auto text-center bg-card border-2 border-primary/30 rounded-3xl p-12 shadow-xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your project and show you how our process can bring your vision to life.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-foreground bg-primary rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;
