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
    { name: "Kenya Commercial Bank", industry: "Finance", icon: "💰" },
    { name: "Equity Bank", industry: "Finance", icon: "💰" },
    { name: "Safaricom PLC", industry: "Technology", icon: "📱" },
    { name: "Microsoft East Africa", industry: "Technology", icon: "💻" },
    { name: "Aga Khan Hospital", industry: "Healthcare", icon: "🏥" },
    { name: "Nairobi Hospital", industry: "Healthcare", icon: "⚕️" },
    { name: "Carrefour Kenya", industry: "Retail", icon: "🛒" },
    { name: "Naivas Supermarket", industry: "Retail", icon: "🏪" },
    { name: "East African Breweries", industry: "Manufacturing", icon: "🏭" },
    { name: "Bamburi Cement", industry: "Manufacturing", icon: "⚙️" },
  ];

  return (
    <section className="py-16 bg-gradient-professional-subtle relative overflow-hidden">
      <div className="container-professional">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 glass-professional rounded-full mb-6 border border-brand-blue/20">
            <span className="text-sm font-semibold text-brand-blue">TRUSTED BY LEADING ORGANIZATIONS</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our <span className="text-gradient-professional">Valued Clients</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Partnering with businesses across Kenya to deliver exceptional IT solutions
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden py-8">
            <div className="flex gap-12 animate-slide-in-left">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-56 h-36 glass-professional rounded-xl flex flex-col items-center justify-center p-6 group hover-lift-cyber border border-brand-blue/20 bg-card/50"
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {client.icon}
                  </div>
                  <p className="text-base font-bold text-foreground text-center mb-1">
                    {client.name}
                  </p>
                  <span className="px-3 py-1 text-xs font-semibold bg-brand-blue/10 text-brand-blue rounded-full">
                    {client.industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
