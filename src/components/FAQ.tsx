import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  title?: string;
  subtitle?: string;
}

const FAQ = ({ title = "Frequently Asked Questions", subtitle = "Find answers to common questions about our services" }: FAQProps) => {
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while custom software applications can take 2-6 months. We provide detailed timeline estimates during the initial consultation and keep you updated throughout the development process."
    },
    {
      question: "What is your payment structure?",
      answer: "We offer flexible payment options tailored to your project. Typically, we require a 30% deposit to begin, 40% upon reaching key milestones, and the final 30% upon project completion. For larger projects, we can arrange monthly payment plans. All payment terms are clearly outlined in our project agreement."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes! We provide comprehensive post-launch support including bug fixes, security updates, and technical assistance. Our support packages range from basic maintenance to full 24/7 coverage. We also offer training sessions to ensure your team can effectively use and manage the solution."
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely. We specialize in system integration and can work seamlessly with your existing infrastructure, databases, and third-party services. We conduct a thorough assessment of your current systems and design solutions that integrate smoothly without disrupting your operations."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with a wide range of modern technologies including React, Node.js, Python, PHP, mobile frameworks (React Native, Flutter), cloud platforms (AWS, Azure, Google Cloud), and various databases. We select the best technology stack based on your specific project requirements."
    },
    {
      question: "Do you sign Non-Disclosure Agreements (NDAs)?",
      answer: "Yes, we understand the importance of confidentiality. We're happy to sign NDAs before discussing your project details. Protecting your intellectual property and business information is a top priority for us."
    },
    {
      question: "Can you help with urgent or emergency issues?",
      answer: "Yes, we offer priority support for urgent situations. Our team is available 24/7 for critical issues with active support contracts. For emergency situations outside regular support, we provide on-demand assistance with rapid response times."
    },
    {
      question: "What happens if I need changes after the project is complete?",
      answer: "We're flexible and understand that requirements can evolve. Minor adjustments within the original scope are included in the final delivery. For additional features or significant changes, we provide clear quotes and can usually accommodate requests quickly. Our ongoing support packages also include a certain number of change requests per month."
    },
    {
      question: "How do you ensure project quality and security?",
      answer: "Quality and security are built into our process. We follow industry best practices including code reviews, automated testing, security audits, and performance optimization. All projects undergo rigorous quality assurance testing before launch, and we implement security measures like data encryption, secure authentication, and regular security updates."
    },
    {
      question: "Do you offer training for our team?",
      answer: "Yes, comprehensive training is included with every project. We provide hands-on training sessions, detailed documentation, and video tutorials tailored to your team's technical level. We also offer ongoing training support as your system evolves."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container-professional">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full mb-6 border-2 border-primary/30">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">FAQ</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-xl px-6 hover:border-primary/50 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary-foreground bg-primary rounded-lg hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
