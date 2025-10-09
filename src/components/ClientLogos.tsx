import { useEffect, useState } from "react";

const ClientLogos = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % 200);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Client examples by category
  const clients = [
    { name: "Banks & Financial Institutions", industry: "Finance", icon: "💰" },
    { name: "Insurance Companies & SACCOs", industry: "Finance", icon: "🏦" },
    { name: "Telecom & Tech Companies", industry: "Technology", icon: "📱" },
    { name: "Software & IT Firms", industry: "Technology", icon: "💻" },
    { name: "Hospitals & Clinics", industry: "Healthcare", icon: "🏥" },
    { name: "Medical Centers & Pharmacies", industry: "Healthcare", icon: "⚕️" },
    { name: "Supermarkets & Retail Chains", industry: "Retail", icon: "🛒" },
    { name: "Shopping Malls & Stores", industry: "Retail", icon: "🏪" },
    { name: "Food & Beverage Companies", industry: "Manufacturing", icon: "🏭" },
    { name: "Industrial & Production Plants", industry: "Manufacturing", icon: "⚙️" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-brand-blue/5 to-background relative overflow-hidden">
      <div className="container-professional">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-brand-blue/10 rounded-full mb-6 border-2 border-brand-blue/30 shadow-lg shadow-brand-blue/20">
            <span className="text-sm font-bold text-brand-blue uppercase tracking-wider">TRUSTED BY LEADING ORGANIZATIONS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient-professional">Valued Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Partnering with businesses across Kenya to deliver exceptional IT solutions
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden py-8 bg-gradient-to-r from-brand-blue/5 via-transparent to-brand-blue/5 rounded-2xl">
            <div className="flex gap-8 animate-slide-in-left">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 h-40 bg-white dark:bg-gray-900 rounded-2xl flex flex-col items-center justify-center p-6 group hover-lift-cyber border-2 border-brand-blue/30 shadow-xl hover:shadow-2xl hover:shadow-brand-blue/20 transition-all duration-300 hover:border-brand-blue"
                >
                  <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300 filter drop-shadow-lg">
                    {client.icon}
                  </div>
                  <p className="text-base font-bold text-foreground text-center mb-2 line-clamp-2">
                    {client.name}
                  </p>
                  <span className="px-4 py-1.5 text-xs font-bold bg-brand-blue text-white rounded-full uppercase tracking-wide shadow-md">
                    {client.industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
