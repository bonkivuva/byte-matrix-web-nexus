import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import FuturisticHeader from "@/components/FuturisticHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/siteConfig";

const Contact = () => {
  const contact = [
    { icon: Phone, label: "Telephone", value: siteConfig.phoneDisplay, href: siteConfig.phoneHref },
    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: MapPin, label: "Location", value: siteConfig.location },
  ];
  return <div className="min-h-screen bg-background"><SEOHead title="Contact Byte Matrix | IT Support Nairobi" description="Contact Byte Matrix Technologies for managed IT, infrastructure and technical support from an experienced ICT company in Nairobi, Kenya." keywords=""/><FuturisticHeader currentPage="contact"/><main>
    <section className="page-hero"><div className="container-professional relative z-10"><span className="section-kicker">Contact our engineering team</span><h1 className="max-w-4xl">Start with a clear view of your IT requirements.</h1><p className="mt-6 max-w-2xl text-lg text-primary-foreground/70">Share your operational priorities, infrastructure needs, or support challenges. We will use the consultation to establish scope and the right next step.</p></div></section>
    <section className="section-spacing"><div className="container-professional grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
      <aside><span className="section-kicker">Direct contact</span><h2 className="text-3xl">Speak with Byte Matrix.</h2><div className="mt-8 divide-y divide-border border-y border-border">{contact.map(item=><div key={item.label} className="flex gap-4 py-6"><div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary/10"><item.icon className="h-5 w-5 text-primary"/></div><div><p className="text-xs font-bold uppercase text-muted-foreground" style={{letterSpacing:'.1em'}}>{item.label}</p>{item.href?<a href={item.href} className="mt-1 block break-all font-semibold hover:text-primary">{item.value}</a>:<p className="mt-1 font-semibold">{item.value}</p>}</div></div>)}</div>
      <div className="mt-7 border border-border bg-muted p-6"><Clock className="h-6 w-6 text-primary"/><h3 className="mt-4 text-base">Business hours</h3><p className="mt-2 text-sm text-muted-foreground">Monday–Friday: 08:00–18:00<br/>Saturday: 09:00–14:00<br/>East Africa Time (UTC+3)</p></div>
      <Button asChild variant="outline" className="mt-5 w-full"><a href={siteConfig.whatsapp} target="_blank" rel="noreferrer"><MessageCircle/>Continue on WhatsApp</a></Button>
      </aside>
      <LeadCaptureForm title="Request a consultation" subtitle="This form replaces external scheduling. Tell us what you need and we will coordinate the right technical conversation."/>
    </div></section>
    <section className="section-spacing-sm bg-muted"><div className="container-professional"><div className="mb-8"><span className="section-kicker">Nairobi office area</span><h2 className="text-3xl">Operating from Kenya’s capital.</h2><p className="mt-3 text-muted-foreground">The map indicates Nairobi generally; an exact street address has not been published.</p></div><div className="overflow-hidden border border-border bg-card"><iframe src="https://www.google.com/maps?q=Nairobi%2C%20Kenya&output=embed" width="100%" height="420" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Nairobi, Kenya general location"/></div></div></section>
  </main><Footer/></div>;
};
export default Contact;
