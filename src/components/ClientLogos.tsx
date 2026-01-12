import { Building2, Laptop, Heart, ShoppingBag, Factory } from "lucide-react";

const ClientLogos = () => {
  const industries = [
    { 
      title: "Financial Services", 
      description: "Banks, Insurance, SACCOs",
      icon: Building2
    },
    { 
      title: "Technology", 
      description: "Telecom, Software & IT",
      icon: Laptop
    },
    { 
      title: "Healthcare", 
      description: "Hospitals & Clinics",
      icon: Heart
    },
    { 
      title: "Retail", 
      description: "Supermarkets & Chains",
      icon: ShoppingBag
    },
    { 
      title: "Manufacturing", 
      description: "Industrial & FMCG",
      icon: Factory
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container-professional">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-blue/10 text-brand-blue text-sm font-medium rounded-full mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Trusted Across Sectors
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We partner with organizations across key industries to deliver tailored IT solutions
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-brand-blue/30 hover:shadow-md transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm lg:text-base">{industry.title}</h3>
                <p className="text-xs lg:text-sm text-muted-foreground">{industry.description}</p>
              </div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-card border border-border rounded-full">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-blue">500+</div>
              <div className="text-xs text-muted-foreground">Clients</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-blue">10+</div>
              <div className="text-xs text-muted-foreground">Years</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-blue">99.9%</div>
              <div className="text-xs text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
