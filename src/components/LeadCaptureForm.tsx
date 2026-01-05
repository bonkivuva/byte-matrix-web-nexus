import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Building, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Initialize EmailJS
emailjs.init("WKdHvlBGEVoUs7Biw");

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

interface LeadCaptureFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const LeadCaptureForm = ({ 
  title = "Get Your Free IT Consultation",
  subtitle = "Transform your business with our expert IT solutions. Fill out the form below and we'll contact you within 24 hours.",
  className = ""
}: LeadCaptureFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        company: data.company || "Not provided",
        service: data.service,
        message: data.message,
        to_email: "info@bytematrixtechnologies.co.ke",
      };

      // You'll need to create a template in EmailJS with these variables
      // Service ID and Template ID should be configured in your EmailJS dashboard
      await emailjs.send(
        "service_tdje7sp",
        "template_9quy7do",
        templateParams
      );

      console.log("Consultation request sent successfully via EmailJS");
      
      // Track analytics event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'lead_generation',
          event_label: 'contact_form',
          value: 1
        });
      }

      setIsSubmitted(true);
      toast({
        title: "Thank you for your interest!",
        description: "We'll contact you within 24 hours to discuss your IT needs.",
      });

      form.reset();
    } catch (error) {
      console.error("Error submitting consultation request:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly at info@bytematrixtechnologies.co.ke",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className={`w-full max-w-2xl mx-auto glass-cyber border border-cyber-green/20 shadow-cyber-lg ${className}`}>
        <CardContent className="p-8 text-center">
          <CheckCircle2 className="w-16 h-16 text-cyber-green mx-auto mb-4 animate-pulse-slow" />
          <h3 className="text-2xl font-semibold text-gradient-cyber mb-2">
            Connection Established!
          </h3>
          <p className="text-foreground mb-4">
            Your request has been received successfully.
          </p>
          <p className="text-sm text-muted-foreground">
            Our team will contact you within 24 hours.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="mt-4"
          >
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`w-full max-w-2xl mx-auto glass-cyber shadow-cyber-lg hover:shadow-cyber hover-lift-cyber border border-cyber-blue/20 ${className}`}>
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl lg:text-3xl font-bold text-gradient-cyber mb-2">
          {title}
        </CardTitle>
        <p className="text-muted-foreground">
          {subtitle}
        </p>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      Full Name *
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number *
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="+254 7xx xxx xxx" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      Company (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Your company name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Interest *</FormLabel>
                  <FormControl>
                    <select 
                      {...field}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a service</option>
                      <option value="it-consulting">IT Consulting & Strategy</option>
                      <option value="hardware-procurement">Hardware Procurement</option>
                      <option value="system-integration">System Integration</option>
                      <option value="technical-support">24/7 Technical Support</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="cybersecurity">Cybersecurity Services</option>
                      <option value="network-setup">Network Setup & Management</option>
                      <option value="other">Other</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Project Details *
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your IT needs, current challenges, and project requirements..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full btn-cyber py-3 text-lg font-medium hover-lift-cyber"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-3" />
                  Get Free Consultation
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LeadCaptureForm;
