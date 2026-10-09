import { Quote } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const testimonials = [
  { name: "Sarah Mwangi", role: "Chief Technology Officer", company: "TechCorp Kenya", content: "Byte Matrix Technologies transformed our entire IT infrastructure. Their expertise and 24/7 support have been invaluable. We've seen a 40% improvement in system uptime." },
  { name: "John Kamau", role: "Operations Director", company: "Retail Solutions Ltd", content: "The hardware procurement and setup service was seamless. They secured the best prices and configured everything perfectly. Our systems are running flawlessly." },
  { name: "Grace Ochieng", role: "IT Manager", company: "Finance Group", content: "Their cybersecurity solutions gave us complete peace of mind. The team is knowledgeable, responsive, and truly understands enterprise security needs." },
];

const Testimonials = () => {
  const reduceMotion = useReducedMotion();
  return <section className="section-spacing"><div className="container-professional"><span className="section-kicker">Client perspective</span><div className="grid gap-6 lg:grid-cols-[.7fr_1.3fr]"><div><h2>Trusted when technology is business-critical.</h2><p className="mt-5 text-muted-foreground">Existing client feedback, presented around the operational outcomes that matter.</p></div><div className="grid gap-4">{testimonials.map((item,index)=><motion.figure key={item.name} initial={reduceMotion?false:{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.08}} className="enterprise-card grid gap-6 p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:p-8"><div className="flex h-12 w-12 items-center justify-center bg-primary/10 font-display font-bold text-primary">{item.name.split(' ').map(x=>x[0]).join('')}</div><div><blockquote className="text-base leading-7 md:text-lg">“{item.content}”</blockquote><figcaption className="mt-4 text-sm"><strong>{item.name}</strong><span className="text-muted-foreground"> · {item.role}, {item.company}</span></figcaption></div><Quote className="hidden h-9 w-9 text-primary/30 md:block"/></motion.figure>)}</div></div></div></section>;
};
export default Testimonials;
