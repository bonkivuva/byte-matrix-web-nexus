import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ConsultationEmailRequest {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, service, message }: ConsultationEmailRequest = await req.json();

    console.log("Consultation request received:", { name, email, service });

    // Send email to support team
    const emailResponse = await resend.emails.send({
      from: "Byte Matrix Technologies <onboarding@resend.dev>",
      to: ["support@bytematrixtechnologies.co.ke"],
      replyTo: email,
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Consultation Request</h2>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          </div>

          <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Service Interest</h3>
            <p><strong>${service}</strong></p>
          </div>

          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Project Details</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            This email was sent from the Byte Matrix Technologies contact form.
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully to support team:", emailResponse);

    // Send confirmation email to the user
    const confirmationResponse = await resend.emails.send({
      from: "Byte Matrix Technologies <onboarding@resend.dev>",
      to: [email],
      subject: "We received your consultation request!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for contacting us, ${name}!</h2>
          
          <p style="font-size: 16px; line-height: 1.6;">
            We have received your consultation request for <strong>${service}</strong> 
            and will get back to you within 24 hours.
          </p>

          <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">What happens next?</h3>
            <ul style="line-height: 1.8;">
              <li>Our team will review your requirements</li>
              <li>We'll contact you via email or phone within 24 hours</li>
              <li>We'll schedule a free consultation to discuss your IT needs</li>
            </ul>
          </div>

          <p style="font-size: 16px; line-height: 1.6;">
            If you have any urgent questions, feel free to contact us directly at:
          </p>
          
          <p style="font-size: 16px;">
            <strong>Email:</strong> <a href="mailto:support@bytematrixtechnologies.co.ke">support@bytematrixtechnologies.co.ke</a><br/>
            <strong>Phone:</strong> +254 724 367 794
          </p>

          <p style="margin-top: 30px;">
            Best regards,<br/>
            <strong>The Byte Matrix Technologies Team</strong>
          </p>
        </div>
      `,
    });

    console.log("Confirmation email sent to user:", confirmationResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Consultation request sent successfully" 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-consultation-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
