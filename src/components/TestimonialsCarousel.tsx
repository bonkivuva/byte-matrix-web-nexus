import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

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
  },
  {
    name: "David Wekesa",
    role: "Managing Director",
    company: "East Africa Logistics",
    content: "We partnered with Byte Matrix for our cloud migration. The process was smooth, and our operational efficiency improved by 60%. Highly recommended!",
    rating: 5,
  },
  {
    name: "Amina Hassan",
    role: "Head of IT",
    company: "Healthcare Solutions",
    content: "Outstanding technical support! Their team resolved our critical server issues within hours. The proactive monitoring has prevented numerous potential downtime events.",
    rating: 5,
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prev = () => goTo((currentIndex - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((currentIndex + 1) % testimonials.length);

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue-light/5 rounded-full blur-3xl" />
      </div>

      <div className="container-professional relative z-10">
        {/* Section Header */}
        <ScrollReveal>
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
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-lg relative">
                    {/* Quote Icon */}
                    <Quote className="w-16 h-16 text-brand-blue/10 absolute top-6 right-6" />
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed font-medium">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-brand-blue-light rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-lg text-foreground">{testimonial.name}</div>
                        <div className="text-muted-foreground">{testimonial.role}</div>
                        <div className="text-brand-blue font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full border-2 border-brand-blue/20 hover:border-brand-blue hover:bg-brand-blue hover:text-white shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full border-2 border-brand-blue/20 hover:border-brand-blue hover:bg-brand-blue hover:text-white shadow-lg transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-brand-blue' 
                    : 'w-2 bg-brand-blue/30 hover:bg-brand-blue/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicator */}
        <ScrollReveal delay={200}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Join <span className="text-brand-blue font-semibold">500+ satisfied clients</span> across East Africa
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
