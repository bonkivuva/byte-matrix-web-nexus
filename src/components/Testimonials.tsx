import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mwangi",
      role: "Chief Technology Officer",
      company: "TechCorp Kenya",
      content: "Byte Matrix Technologies transformed our entire IT infrastructure. Their expertise and 24/7 support have been invaluable. We've seen a 40% improvement in system uptime.",
      rating: 5,
    },
    {
      name: "John Kamau",
      role: "Operations Director",
      company: "Retail Solutions Ltd",
      content: "The hardware procurement and setup service was seamless. They secured the best prices and configured everything perfectly. Our systems are running flawlessly.",
      rating: 5,
    },
    {
      name: "Grace Ochieng",
      role: "IT Manager",
      company: "Finance Group",
      content: "Their cybersecurity solutions gave us complete peace of mind. The team is knowledgeable, responsive, and truly understands enterprise security needs.",
      rating: 5,
    }
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="container-professional">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-blue/10 text-brand-blue text-sm font-medium rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from the businesses we've helped transform
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:border-brand-blue/20 hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-brand-blue/10 absolute top-6 right-6" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-brand-blue font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicator */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Join <span className="text-brand-blue font-semibold">500+ satisfied clients</span> across East Africa
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
