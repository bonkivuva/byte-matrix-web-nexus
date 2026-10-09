import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { serviceInterests } from "@/lib/siteConfig";

const formSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(100),
  company: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Enter a valid work email").max(255),
  phone: z.string().trim().min(7, "Enter a valid telephone number").max(20).regex(/^[+()\-\s\d]+$/, "Use a valid telephone number"),
  service: z.string().trim().min(1, "Select a service").max(100),
  message: z.string().trim().min(10, "Tell us a little more about your requirements").max(2000),
  website: z.string().max(0, "Invalid submission"),
});

type FormData = z.infer<typeof formSchema>;
interface LeadCaptureFormProps { title?: string; subtitle?: string; className?: string }

const LeadCaptureForm = ({ title = "Request a Consultation", subtitle = "Share your priorities and our engineering team will review the requirement.", className = "" }: LeadCaptureFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const form = useForm<FormData>({ resolver: zodResolver(formSchema), defaultValues: { name: "", company: "", email: "", phone: "", service: "", message: "", website: "" } });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const payload = { full_name: data.name, company: data.company || null, email: data.email, phone: data.phone, service: data.service, message: data.message };
      const { error: storageError } = await supabase.from("contact_submissions").insert(payload);
      if (storageError) throw storageError;

      const { error: notificationError } = await supabase.functions.invoke("send-consultation-email", { body: { name: data.name, company: data.company, email: data.email, phone: data.phone, service: data.service, message: data.message } });
      if (notificationError) console.warn("Consultation stored; notification service unavailable.");

      if (typeof window !== "undefined" && "gtag" in window) {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("event", "generate_lead", { form_name: "consultation" });
      }
      form.reset();
      setIsSubmitted(true);
    } catch {
      toast({ title: "Request not sent", description: "Please try again or contact us directly by phone or email.", variant: "destructive" });
    } finally { setIsSubmitting(false); }
  };

  if (isSubmitted) return <div className={`enterprise-card p-8 text-center ${className}`}><CheckCircle2 className="mx-auto h-14 w-14 text-primary"/><h3 className="mt-5 text-2xl">Request received</h3><p className="mt-3 text-muted-foreground">Your consultation request is safely recorded. Our team will review it and contact you using the details provided.</p><Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-7">Send another request</Button></div>;

  return (
    <div className={`enterprise-card bg-card p-6 md:p-8 ${className}`}>
      <h2 className="text-2xl md:text-3xl">{title}</h2><p className="mt-3 text-sm text-muted-foreground">{subtitle}</p>
      <Form {...form}><form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 grid gap-5 sm:grid-cols-2">
        <FormField control={form.control} name="name" render={({field})=><FormItem><FormLabel>Full name *</FormLabel><FormControl><Input autoComplete="name" maxLength={100} placeholder="Your name" {...field}/></FormControl><FormMessage/></FormItem>}/>
        <FormField control={form.control} name="company" render={({field})=><FormItem><FormLabel>Company</FormLabel><FormControl><Input autoComplete="organization" maxLength={100} placeholder="Organisation name" {...field}/></FormControl><FormMessage/></FormItem>}/>
        <FormField control={form.control} name="email" render={({field})=><FormItem><FormLabel>Work email *</FormLabel><FormControl><Input type="email" autoComplete="email" maxLength={255} placeholder="name@company.com" {...field}/></FormControl><FormMessage/></FormItem>}/>
        <FormField control={form.control} name="phone" render={({field})=><FormItem><FormLabel>Telephone *</FormLabel><FormControl><Input type="tel" autoComplete="tel" maxLength={20} placeholder="+254 ..." {...field}/></FormControl><FormMessage/></FormItem>}/>
        <FormField control={form.control} name="service" render={({field})=><FormItem className="sm:col-span-2"><FormLabel>Service interest *</FormLabel><Select onValueChange={field.onChange} value={field.value}><FormControl><SelectTrigger className="min-h-12"><SelectValue placeholder="Select a service"/></SelectTrigger></FormControl><SelectContent>{serviceInterests.map(service=><SelectItem key={service} value={service}>{service}</SelectItem>)}</SelectContent></Select><FormMessage/></FormItem>}/>
        <FormField control={form.control} name="message" render={({field})=><FormItem className="sm:col-span-2"><FormLabel>Requirements *</FormLabel><FormControl><Textarea className="min-h-32" maxLength={2000} placeholder="Describe your current environment, priorities, and timeline." {...field}/></FormControl><FormMessage/></FormItem>}/>
        <FormField control={form.control} name="website" render={({field})=><FormItem className="absolute -left-[9999px]" aria-hidden="true"><FormLabel>Website</FormLabel><FormControl><Input tabIndex={-1} autoComplete="off" {...field}/></FormControl></FormItem>}/>
        <div className="sm:col-span-2"><Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>{isSubmitting ? "Submitting securely…" : <><Send/>Submit consultation request</>}</Button><p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground"><ShieldCheck className="h-4 w-4 text-primary"/>Validated and securely stored</p></div>
      </form></Form>
    </div>
  );
};
export default LeadCaptureForm;
