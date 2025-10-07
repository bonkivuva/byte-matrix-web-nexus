import { useEffect, useState } from "react";

const ClientLogos = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % 200);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Placeholder client data - replace with actual client logos
  const clients = [
    { name: "Enterprise Client A", industry: "Finance" },
    { name: "Tech Solutions B", industry: "Technology" },
    { name: "Healthcare Corp", industry: "Healthcare" },
    { name: "Retail Group", industry: "Retail" },
    { name: "Manufacturing Co", industry: "Manufacturing" },
    { name: "Education Institute", industry: "Education" },
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
                  className="flex-shrink-0 w-48 h-32 glass-professional rounded-xl flex flex-col items-center justify-center p-6 group hover-lift-cyber border border-brand-blue/10"
                >
                  <div className="w-16 h-16 bg-gradient-professional rounded-full mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-foreground text-center line-clamp-1">
                    {client.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{client.industry}</p>
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
