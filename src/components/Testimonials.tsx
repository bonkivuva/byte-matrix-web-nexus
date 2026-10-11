import { Quote } from "lucide-react";

const Testimonials = () => (
  <section className="section-spacing">
    <div className="container-professional grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
      <div><span className="section-kicker">Client perspective</span><h2>Trusted when technology is business-critical.</h2></div>
      <figure className="enterprise-card p-7 md:p-10"><Quote className="mb-6 h-10 w-10 text-primary" aria-hidden="true" /><blockquote className="text-lg leading-8 md:text-xl">“Byte Matrix transformed our fragmented IT operations into a single, accountable system. Their proactive approach has reduced our downtime significantly and given our leadership team confidence in our infrastructure.”</blockquote><figcaption className="mt-7 border-t border-border pt-5 text-sm font-semibold">— Chief Technology Officer, Leading Regional Financial Institution</figcaption></figure>
    </div>
  </section>
);
export default Testimonials;
