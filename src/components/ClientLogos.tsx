const ClientLogos = () => {

  // Categories with clear examples (no brand names)
  const categories = [
    { title: "Finance", examples: "Banks, Insurance, SACCOs", icon: "💰" },
    { title: "Technology", examples: "Telecom, Software & IT Companies", icon: "💻" },
    { title: "Healthcare", examples: "Hospitals, Clinics, Pharmacies", icon: "🏥" },
    { title: "Retail", examples: "Supermarkets, Malls, Retail Chains", icon: "🛒" },
    { title: "Manufacturing", examples: "Industrial Plants, FMCG, Production", icon: "🏭" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-brand-blue/5 to-background relative">
      <div className="container-professional">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-brand-blue/10 rounded-full mb-4 border-2 border-brand-blue/30">
            <span className="text-sm font-bold text-brand-blue uppercase tracking-wider">TRUSTED BY LEADING ORGANIZATIONS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">
            Our <span className="text-gradient-professional">Valued Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We support organizations across key industries</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((cat, i) => (
            <article
              key={i}
              className="bg-card rounded-2xl border-2 border-brand-blue/30 shadow-lg hover:shadow-2xl hover:border-brand-blue transition-all duration-300 p-6 text-center"
              aria-label={`${cat.title} clients`}
            >
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-professional flex items-center justify-center text-3xl">
                <span aria-hidden="true">{cat.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{cat.title}</h3>
              <p className="text-sm text-muted-foreground">{cat.examples}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
