import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mwangi",
      role: "CTO, TechCorp Kenya",
      company: "TechCorp Kenya",
      content: "Byte Matrix Technologies transformed our entire IT infrastructure. Their expertise and 24/7 support have been invaluable to our operations. We've seen a 40% improvement in system uptime.",
      rating: 5,
      image: null
    },
    {
      name: "John Kamau",
      role: "Operations Director",
      company: "Retail Solutions Ltd",
      content: "The hardware procurement and setup service was seamless. They got us the best prices and had everything configured perfectly. Our new systems are running flawlessly.",
      rating: 5,
      image: null
    },
    {
      name: "Grace Ochieng",
      role: "IT Manager",
      company: "Finance Group",
      content: "Their cybersecurity solutions gave us peace of mind. The team is knowledgeable, responsive, and truly understands enterprise security needs. Highly recommended!",
      rating: 5,
      image: null
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-accent/5"></div>
      
      <div className="container-professional relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 glass-professional rounded-full mb-6 border border-brand-blue/20">
            <Star className="w-4 h-4 mr-2 text-brand-blue fill-current" />
            <span className="text-sm font-semibold text-brand-blue">CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-gradient-professional">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped transform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass-professional hover-lift-cyber group border border-brand-blue/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-professional opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-300"></div>
              
              <CardContent className="p-8 relative z-10">
                <Quote className="w-12 h-12 text-brand-blue/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-blue fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-professional rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-brand-blue">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Join <span className="text-brand-blue font-semibold">500+ satisfied clients</span> who trust us with their IT infrastructure
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
