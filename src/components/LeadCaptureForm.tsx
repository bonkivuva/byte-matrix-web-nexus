import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const COMPANY_EMAIL = "info@bytematrixtechnologies.co.ke";

const formSchema = z.object({
  name: z.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
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
  title = "Send Us a Message",
  subtitle = "Fill out the form below and we'll get back to you within 24 hours.",
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
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const subject = encodeURIComponent(`Contact Form: Message from ${data.name}`);
      const body = encodeURIComponent(
`New Contact Form Submission

Name: ${data.name}
Email: ${data.email}

Message:
${data.message}

---
Sent from Byte Matrix Technologies website`
      );
      
      window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
      
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'lead_generation',
          event_label: 'contact_form',
          value: 1
        });
      }

      setIsSubmitted(true);
      toast({
        title: "Email client opened!",
        description: "Please send the email from your mail application.",
      });

      form.reset();
    } catch (error) {
      console.error("Error opening email client:", error);
      toast({
        title: "Something went wrong",
        description: "Please contact us directly at info@bytematrixtechnologies.co.ke",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className={`w-full max-w-xl mx-auto glass-card-premium ${className}`}>
        <CardContent className="p-8 text-center">
          <CheckCircle2 className="w-16 h-16 text-brand-blue mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-brand-blue mb-2">
            Thank You!
          </h3>
          <p className="text-foreground mb-4">
            Your message has been prepared.
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Please send the email from your mail application to complete your request.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-brand-blue/30"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`w-full max-w-xl mx-auto glass-card-premium ${className}`}>
      <CardHeader className="text-center pb-4 px-4 sm:px-6">
        <CardTitle className="text-xl sm:text-2xl font-bold text-foreground mb-2">
          {title}
        </CardTitle>
        <p className="text-sm sm:text-base text-muted-foreground">
          {subtitle}
        </p>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your name" 
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
                  <FormLabel>Email *</FormLabel>
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

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Your message..."
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
              className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send
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
