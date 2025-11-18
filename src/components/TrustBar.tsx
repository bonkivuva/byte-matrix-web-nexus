import { Building2, Users, Award, TrendingUp } from "lucide-react";

const TrustBar = () => {
  const stats = [
    {
      icon: Building2,
      value: "50+",
      label: "Active Clients",
    },
    {
      icon: Users,
      value: "200+",
      label: "Projects Delivered",
    },
    {
      icon: Award,
      value: "10+",
      label: "Years Experience",
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-primary via-primary/95 to-primary border-y-2 border-primary-foreground/20">
      <div className="container-professional">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-primary-foreground/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
