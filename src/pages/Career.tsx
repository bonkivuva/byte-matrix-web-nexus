import FuturisticHeader from "@/components/FuturisticHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Mail, Users, ShieldCheck, Lightbulb, HeartHandshake } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const values = [
  { icon: Lightbulb, title: "Drive Innovation", desc: "Continuous learning and thoughtful adoption of technology help us solve complex challenges." },
  { icon: ShieldCheck, title: "Operate with Integrity", desc: "Transparency and ethical practices guide every project, interaction, and decision." },
  { icon: HeartHandshake, title: "Put Customers First", desc: "We work together to deliver tailored outcomes that serve our clients’ goals." },
  { icon: Users, title: "Build Reliable Systems", desc: "Dependable support and consistent performance are the standards we hold ourselves to." },
];

const Career = () => (
  <PageTransition>
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead title="Technology Careers Nairobi | Byte Matrix" description="Explore career opportunities with Byte Matrix Technologies and help deliver reliable IT infrastructure, support and digital solutions from Nairobi, Kenya." />
      <FuturisticHeader currentPage="careers" />
      <main>
        <section className="about-hero relative isolate overflow-hidden pb-16 pt-36 text-primary-foreground md:pb-20 md:pt-44">
          <img
            src="/lovable-uploads/babb4625-0209-4f12-95b2-209a31633356.png"
            alt="Professionals collaborating around a shared table with laptops and tablets"
            width="1536" height="1024"
            loading="eager" decoding="async"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
          <div className="hero-video-overlay absolute inset-0 -z-10" />
          <div className="container-professional">
            <p className="mb-5 text-sm font-semibold text-primary-foreground/80">People. Purpose. Technology.</p>
            <h1 className="max-w-3xl">Careers at Byte Matrix Technologies</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-primary-foreground/85 md:text-lg">Join a collaborative team where learning, integrity, and technical excellence shape the work we do.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg"><a href="#opportunities">Explore opportunities <ArrowDown className="h-4 w-4" /></a></Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href="mailto:careers@bytematrixtechnologies.co.ke"><Mail className="h-4 w-4" />Contact recruitment</a></Button>
            </div>
          </div>
        </section>

        <section className="section-spacing" aria-labelledby="culture-heading">
          <div className="container-professional">
            <div className="grid gap-5 lg:grid-cols-2 lg:gap-16">
              <div><span className="section-kicker">Our culture & values</span><h2 id="culture-heading" className="max-w-lg">Good technology starts with good people.</h2></div>
              <p className="max-w-xl self-end text-base text-muted-foreground md:text-lg">Our shared values shape how we collaborate, solve problems, and support our clients. We welcome people who take pride in their work and bring curiosity to every challenge.</p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
              {values.map(({ icon: Icon, title, desc }) => (
                <article key={title} className="border-t border-border pt-6">
                  <Icon className="mb-6 h-7 w-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="text-lg">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="opportunities" className="section-spacing bg-muted" aria-labelledby="opportunities-heading">
          <div className="container-professional grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <div>
              <span className="section-kicker">Career opportunities</span>
              <h2 id="opportunities-heading">Start a conversation with our team.</h2>
              <p className="mt-5 max-w-lg text-muted-foreground">To enquire about current or future opportunities, send your CV and cover letter to our recruitment team. Include your area of expertise and the type of role you are interested in.</p>
            </div>
            <div className="border-t border-border pt-6 lg:pt-8">
              <h3 className="text-xl">Introduce yourself</h3>
              <ul className="mt-6 divide-y divide-border border-y border-border">
                {["Your CV and relevant experience", "A cover letter introducing your interests", "Your area of expertise and preferred role"].map((item, index) => <li key={item} className="flex items-start gap-4 py-4 text-sm"><span className="font-semibold text-primary" aria-hidden="true">0{index + 1}</span><span>{item}</span></li>)}
              </ul>
              <a href="mailto:careers@bytematrixtechnologies.co.ke" className="mt-6 block break-all text-sm font-semibold text-foreground underline decoration-primary/50 underline-offset-4 hover:text-primary">careers@bytematrixtechnologies.co.ke</a>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg"><a href="mailto:careers@bytematrixtechnologies.co.ke"><Mail className="h-4 w-4" />Send your CV <ArrowUpRight className="h-4 w-4" /></a></Button>
                <Button asChild size="lg" variant="outline"><Link to="/contact">Contact us <ArrowUpRight className="h-4 w-4" /></Link></Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  </PageTransition>
);

export default Career;
