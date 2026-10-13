import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Building2, Check, Factory, GraduationCap, HeartPulse, Landmark, ShoppingBag, Server, ShieldCheck, Target, Users } from "lucide-react";
import FuturisticHeader from "@/components/FuturisticHeader";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/hero-engineers-datacentre.jpg";
import { homeStats, formatStat } from "@/lib/homeStats";
import sanlamLogo from "@/assets/sanlam-allianz-logo.png";
import kijabeLogo from "@/assets/kijabe-sacco-logo.png";
import caritasLogo from "@/assets/caritas-bank-logo.png";
import hikvisionLogo from "@/assets/partners/hikvision.png";
import ubiquitiLogo from "@/assets/partners/ubiquiti.png";
import dellLogo from "@/assets/partners/dell.png";
import hpeLogo from "@/assets/partners/hpe.png";
import ciscoLogo from "@/assets/partners/cisco.png";
import microsoftLogo from "@/assets/partners/microsoft.png";

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

const differentiators = [
  { icon: ShieldCheck, title: "Engineering Expertise", desc: "Experienced specialists apply disciplined engineering to each environment." },
  { icon: Server, title: "Enterprise-Grade Architecture", desc: "Resilient infrastructure designed for uptime, security, performance, and controlled growth." },
  { icon: Target, title: "Structured Project Execution", desc: "Clear discovery, implementation, documentation, handover, and governance at every stage." },
  { icon: Users, title: "Long-Term Technical Partnership", desc: "A proactive operating relationship aligned to your priorities, risks, and growth objectives." },
];

const industries = [
  { icon: Building2, name: "Corporate Offices", text: "Secure, scalable workplaces and managed operations." },
  { icon: GraduationCap, name: "Education", text: "Connected campuses, learning platforms, and support." },
  { icon: Landmark, name: "Government", text: "Structured delivery for high-accountability environments." },
  { icon: ShoppingBag, name: "Retail & Commerce", text: "Reliable connectivity and systems across customer touchpoints." },
  { icon: Factory, name: "Manufacturing", text: "Resilient infrastructure for operational continuity." },
  { icon: HeartPulse, name: "Healthcare", text: "Dependable systems for sensitive, always-on operations." },
];

const tiers = [
  { name: "Business", intro: "Essential IT operations for growing organisations.", features: ["Remote helpdesk", "Hardware procurement and setup", "Monthly maintenance"], cta: "Get Started" },
  { name: "Enterprise", intro: "Proactive coverage for complex, business-critical environments.", features: ["24/7 technical support", "Network management", "Priority replacement", "Dedicated account manager"], cta: "Request a Tailored Proposal", popular: true },
  { name: "Custom", intro: "Tailored governance for multi-site and specialised operations.", features: ["Multi-site support", "Bespoke service-level agreements", "Logistics coordination", "Board-level reporting"], cta: "Request a Quote" },
];

const caseStudies = [
  { industry: "Retail", title: "Resilient branch connectivity", challenge: "A distributed retail network was experiencing frequent outages across branch locations. We redesigned the connectivity architecture and implemented proactive monitoring, resulting in a 40% improvement in system uptime.", metric: "40%", result: "improvement in system uptime" },
  { industry: "Enterprise", title: "Infrastructure modernisation", challenge: "A growing enterprise was operating on fragmented legacy systems. We executed a phased modernisation programme without service disruption, achieving 60% faster incident resolution.", metric: "60%", result: "faster incident resolution" },
  { industry: "Enterprise", title: "Managed support transformation", challenge: "A multi-site organisation lacked a unified support model. We implemented a single accountable service desk with clear SLAs, delivering an average priority response of under two hours.", metric: "<2hr", result: "average priority response" },
];

const About = () => {
  const reduceMotion = useReducedMotion();
  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Enterprise IT Nairobi | Byte Matrix" description="Byte Matrix delivers managed infrastructure, hardware procurement and 24/7 support for organisations across Nairobi, Kenya and East Africa." />
      <FuturisticHeader currentPage="about" />
      <main>
        <section className="about-hero relative overflow-hidden pt-[84px] text-primary-foreground">
          <img src={aboutImage} alt="IT engineers reviewing server infrastructure in a data centre" width="1600" height="1200" loading="eager" decoding="async" className="about-intro-image absolute inset-0 h-full w-full object-cover" />
          <div className="about-intro-overlay absolute inset-0" />
          <div className="container-professional relative flex min-h-[560px] items-center py-14 md:py-16">
            <motion.div initial={false} animate="visible" variants={reveal} transition={{ duration: .65 }} className="w-full max-w-2xl">
              <span className="section-kicker">Connecting Your Digital Matrix</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl">Byte Matrix<br />Technologies</h1>
              <p className="mt-6 max-w-xl text-xl font-semibold leading-8 md:text-2xl">Enterprise IT infrastructure.<br /><span className="text-primary">Managed with precision.</span></p>
              <p className="mt-5 max-w-lg text-base leading-7 text-primary-foreground/85">Managed IT services, hardware procurement, and technical support. An accountable technology partner for organisations across East Africa and beyond.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg"><Link to="/contact">Request a Tailored Proposal <ArrowRight /></Link></Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to="/services">Explore Enterprise Solutions</Link></Button>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-primary-foreground/20 pt-6 text-xs font-semibold text-primary-foreground/85"><span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />Managed infrastructure</span><span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />24/7 enterprise support</span></div>
            </motion.div>
          </div>
        </section>

        <section aria-label="Trusted clients" className="border-b border-border bg-card py-8">
          <div className="container-professional flex flex-col items-center gap-7 lg:flex-row lg:justify-between">
            <p className="text-xs font-bold uppercase text-muted-foreground" style={{ letterSpacing: ".14em" }}>Trusted by organisations that value reliability</p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {[{src:sanlamLogo,alt:"Sanlam Allianz"},{src:kijabeLogo,alt:"Kijabe Sacco"},{src:caritasLogo,alt:"Caritas Microfinance Bank"}].map((logo) => <img key={logo.alt} src={logo.src} alt={logo.alt} loading="lazy" className="partner-logo-surface h-20 w-40 object-contain p-4 md:w-44" />)}
            </div>
          </div>
        </section>

        <section id="about" className="section-spacing overflow-hidden">
          <div className="container-professional grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
            <motion.div initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: .25 }} variants={reveal}>
              <span className="section-kicker">The engineering partner</span>
              <h2>IT operations built around accountability.</h2>
              <p className="section-intro mt-6">Byte Matrix Technologies delivers managed infrastructure, procurement, and technical support through a disciplined lifecycle—from assessment and architecture to implementation and ongoing operations.</p>
              <Button asChild variant="outline" className="mt-8"><Link to="/contact">Book a Technical Discovery Call <ArrowRight /></Link></Button>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2">
              {differentiators.map((item, index) => <motion.article key={item.title} initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ delay: index * .08 }} className="border-t border-border py-6"><item.icon className="mb-5 h-7 w-7 text-primary" /><h3 className="text-lg md:text-xl">{item.title}</h3><p className="mt-3 text-sm text-muted-foreground">{item.desc}</p></motion.article>)}
            </div>
          </div>
        </section>

        <section className="border-t border-border pb-16">
          <div className="container-professional"><span className="section-kicker">Why Byte Matrix?</span><h2 className="text-3xl">One partner. A disciplined operating model.</h2><dl className="mt-8 divide-y divide-border">{[["Unlike fragmented vendors", "We operate as one accountable partner."], ["Unlike reactive support", "We proactively monitor and maintain your infrastructure."], ["Unlike generic solutions", "We design around your operational reality."]].map(([problem, answer]) => <div key={problem} className="grid gap-2 py-5 md:grid-cols-2"><dt className="text-muted-foreground">{problem}</dt><dd className="flex gap-3 font-semibold"><Check className="h-5 w-5 shrink-0 text-primary" />{answer}</dd></div>)}</dl></div>
        </section>

        <section className="surface-dark section-spacing">
          <div className="container-professional grid gap-12 md:grid-cols-3">
            {homeStats.map(stat => <div key={stat.label}><strong className="font-display text-4xl text-primary md:text-5xl">{formatStat(stat)}</strong><span className="mt-2 block text-sm text-primary-foreground/80">{stat.label}</span></div>)}
          </div>
        </section>

        <section id="industries" className="section-spacing bg-muted">
          <div className="container-professional">
            <span className="section-kicker">Industries we serve</span><div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><h2 className="max-w-2xl">Technical depth for demanding operating environments.</h2><p className="section-intro max-w-xl">Our operating model adapts to the governance, uptime, security, and scale requirements of each sector.</p></div>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {industries.map((item, index) => <article key={item.name} className={`enterprise-card p-7 ${index === 0 || index === 5 ? "lg:col-span-2" : ""}`}><item.icon className="h-8 w-8 text-primary"/><h3 className="mt-10">{item.name}</h3><p className="mt-3 text-sm text-muted-foreground">{item.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-professional">
            <span className="section-kicker">Service tiers</span><h2 className="max-w-3xl">A support model aligned to operational complexity.</h2>
            <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
              {tiers.map((tier) => <article key={tier.name} className={`relative flex flex-col border bg-card p-7 md:p-8 ${tier.popular ? "border-primary shadow-[0_18px_50px_-25px_hsl(var(--primary)/.6)] lg:-translate-y-3" : "border-border"}`}>{tier.popular && <span className="absolute right-5 top-0 -translate-y-1/2 bg-primary px-3 py-1.5 text-xs font-bold uppercase text-primary-foreground">Most Popular</span>}<p className="text-xs font-bold uppercase text-primary" style={{letterSpacing:'.12em'}}>Managed coverage</p><h3 className="mt-4 text-3xl">{tier.name}</h3><p className="mt-3 min-h-14 text-sm text-muted-foreground">{tier.intro}</p><ul className="my-8 flex-1 space-y-4">{tier.features.map((feature)=><li key={feature} className="flex gap-3 text-sm"><Check className="h-5 w-5 shrink-0 text-primary"/>{feature}</li>)}</ul><Button asChild variant={tier.popular ? "default" : "outline"} className="w-full"><Link to="/contact">{tier.cta}</Link></Button></article>)}
            </div>
            <div className="mt-12 overflow-x-auto border border-border bg-card">
              <table className="w-full min-w-[720px] text-left text-sm"><caption className="sr-only">Service tier comparison</caption><thead className="bg-muted"><tr><th className="p-5">Capability</th><th className="p-5">Business</th><th className="bg-primary/10 p-5 text-primary">Enterprise</th><th className="p-5">Custom</th></tr></thead><tbody className="divide-y divide-border">{[["Support window","Business hours","24/7","Defined by SLA"],["Infrastructure management","Scheduled","Proactive","Multi-site"],["Account governance","Service desk","Dedicated manager","Executive reporting"],["Hardware logistics","Standard","Priority","Coordinated programme"]].map(row=><tr key={row[0]}>{row.map((cell,i)=><td key={cell} className={`p-5 ${i===0?'font-semibold':'text-muted-foreground'} ${i===2?'bg-primary/10':''}`}>{i === 0 ? cell : <span className="flex items-start gap-2"><Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true"/>{cell}</span>}</td>)}</tr>)}</tbody></table>
            </div>
          </div>
        </section>

        <section className="section-spacing surface-dark">
          <div className="container-professional"><span className="section-kicker">Technology ecosystem</span><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><div><h2>Enterprise platforms. Independent engineering judgement.</h2><p className="mt-5 text-primary-foreground/70">We design within established technology ecosystems while selecting solutions around operational fit, resilience, and long-term value.</p></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{[{src:microsoftLogo,name:'Microsoft'},{src:ciscoLogo,name:'Cisco'},{src:dellLogo,name:'Dell Technologies'},{src:hpeLogo,name:'HPE'},{src:ubiquitiLogo,name:'Ubiquiti'},{src:hikvisionLogo,name:'Hikvision'}].map(x=><div key={x.name} className="partner-logo-surface flex min-h-28 items-center justify-center rounded-md p-5"><img src={x.src} alt={`${x.name} technology`} loading="lazy" className="max-h-11 max-w-[130px] object-contain"/></div>)}</div></div></div>
        </section>

        <section className="section-spacing bg-muted">
          <div className="container-professional"><span className="section-kicker">Selected outcomes</span><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2>Infrastructure work measured by business impact.</h2><Button asChild variant="outline"><Link to="/portfolio">View all case studies <ArrowRight/></Link></Button></div><div className="mt-12 grid gap-6 lg:grid-cols-3">{caseStudies.map(study=><article key={study.title} className="enterprise-card flex flex-col p-7"><span className="text-xs font-bold uppercase text-primary" style={{letterSpacing:'.12em'}}>{study.industry}</span><h3 className="mt-5">{study.title}</h3><p className="mt-3 flex-1 text-sm text-muted-foreground">{study.challenge}</p><div className="mt-8 border-t border-border pt-6"><strong className="font-display text-4xl text-primary">{study.metric}</strong><span className="ml-3 text-sm text-muted-foreground">{study.result}</span></div></article>)}</div></div>
        </section>

        <Testimonials />

        <section className="section-spacing surface-dark">
          <div className="container-professional flex flex-col justify-between gap-8 lg:flex-row lg:items-center"><div><span className="section-kicker">Start with a technical conversation</span><h2 className="max-w-3xl">Build an IT operating model that leadership can rely on.</h2></div><Button asChild size="lg"><Link to="/contact">Request a Tailored Proposal <ArrowRight/></Link></Button></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
