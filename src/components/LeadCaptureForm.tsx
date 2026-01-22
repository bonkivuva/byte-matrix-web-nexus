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

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_bop7shj";
const EMAILJS_TEMPLATE_ID = "template_v1xulch";
const EMAILJS_PUBLIC_KEY = "mNDVzW6T8-R3guNId";

// Enhanced validation schema with security limits
const formSchema = z.object({
  name: z.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z.string()
    .trim()
    .min(10, "Please enter a valid phone number")
    .max(20, "Phone number is too long"),
  company: z.string()
    .trim()
    .max(100, "Company name must be less than 100 characters")
    .optional(),
  service: z.string()
    .trim()
    .min(1, "Please select a service")
    .max(100, "Service name is too long"),
  message: z.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
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

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status !== 200) {
        throw new Error("Failed to send email");
      }
      
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
      <Card className={`w-full max-w-2xl mx-auto bg-card border border-brand-blue/20 shadow-lg ${className}`}>
        <CardContent className="p-8 text-center">
          <CheckCircle2 className="w-16 h-16 text-brand-blue mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-brand-blue mb-2">
            Request Received!
          </h3>
          <p className="text-foreground mb-4">
            Your consultation request has been sent successfully.
          </p>
          <p className="text-sm text-muted-foreground">
            Our team will contact you within 24 hours.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="mt-4 border-brand-blue/30"
          >
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`w-full max-w-2xl mx-auto bg-card border border-border shadow-lg hover:shadow-xl transition-shadow ${className}`}>
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
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
                      <Input 
                        placeholder="Your full name" 
                        maxLength={100}
                        {...field} 
                      />
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
                      <Input 
                        type="email" 
                        placeholder="your@email.com" 
                        maxLength={255}
                        {...field} 
                      />
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
                      <Input 
                        placeholder="+2547XXXXXXXX" 
                        maxLength={20}
                        {...field} 
                      />
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
                      <Input 
                        placeholder="Your company name" 
                        maxLength={100}
                        {...field} 
                      />
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
                      <option value="IT Consulting & Strategy">IT Consulting & Strategy</option>
                      <option value="Hardware Procurement">Hardware Procurement</option>
                      <option value="System Integration">System Integration</option>
                      <option value="24/7 Technical Support">24/7 Technical Support</option>
                      <option value="Cloud Solutions">Cloud Solutions</option>
                      <option value="Cybersecurity Services">Cybersecurity Services</option>
                      <option value="Network Setup & Management">Network Setup & Management</option>
                      <option value="Other">Other</option>
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
                      maxLength={2000}
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
              className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white py-3 text-lg font-medium"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Sending...
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
