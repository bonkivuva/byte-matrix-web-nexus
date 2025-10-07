import { Shield, Award, Users, Clock } from "lucide-react";

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance"
    },
    {
      icon: Award,
      value: "15+ Years",
      label: "Industry Experience",
      description: "Proven track record of excellence"
    },
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      description: "Businesses trust our solutions"
    },
    {
      icon: Clock,
      value: "99.9%",
      label: "Uptime SLA",
      description: "Guaranteed service reliability"
    }
  ];

  return (
    <section className="py-16 glass-professional border-y border-brand-blue/10">
      <div className="container-professional">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((item, index) => (
            <div 
              key={index}
              className="text-center group relative"
            >
              <div className="absolute inset-0 bg-gradient-professional opacity-0 group-hover:opacity-5 rounded-2xl blur-xl transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-professional rounded-2xl mb-4 shadow-brand group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-3xl lg:text-4xl font-bold text-brand-blue mb-2 group-hover:scale-105 transition-transform duration-300">
                  {item.value}
                </div>
                
                <div className="text-sm font-semibold text-foreground mb-1">
                  {item.label}
                </div>
                
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
