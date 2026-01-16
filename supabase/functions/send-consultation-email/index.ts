import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory rate limiting (resets on cold start)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT = 3; // max 3 requests
const RATE_WINDOW = 3600000; // 1 hour in ms

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const requests = rateLimitMap.get(ip) || [];
  const recentRequests = requests.filter(time => now - time < RATE_WINDOW);
  
  if (recentRequests.length >= RATE_LIMIT) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

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

  // Rate limiting check
  const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                   req.headers.get('cf-connecting-ip') || 
                   'unknown';
  
  if (!checkRateLimit(clientIp)) {
    console.warn("Rate limit exceeded for IP:", clientIp);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Too many requests. Please try again later." 
      }),
      {
        status: 429,
        headers: { 
          "Content-Type": "application/json",
          "Retry-After": "3600",
          ...corsHeaders 
        },
      }
    );
  }

  try {
    const { name, email, phone, company, service, message }: ConsultationEmailRequest = await req.json();

    // Input validation
    if (!name || !email || !phone || !service || !message) {
      console.error("Missing required fields:", { name: !!name, email: !!email, phone: !!phone, service: !!service, message: !!message });
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Missing required fields" 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize inputs
    const sanitizedName = name.trim().substring(0, 100);
    const sanitizedEmail = email.trim().toLowerCase().substring(0, 255);
    const sanitizedPhone = phone.trim().substring(0, 20);
    const sanitizedCompany = company ? company.trim().substring(0, 100) : '';
    const sanitizedService = service.trim().substring(0, 100);
    const sanitizedMessage = message.trim().substring(0, 2000);

    console.log("Consultation request received:", { 
      name: sanitizedName, 
      email: sanitizedEmail, 
      service: sanitizedService,
      timestamp: new Date().toISOString()
    });

    // Send email to support team - FROM your business email, REPLY-TO client's email
    console.log("Attempting to send notification email to team...");
    const emailResponse = await resend.emails.send({
      from: "Byte Matrix Technologies <info@bytematrixtechnologies.co.ke>",
      to: ["info@bytematrixtechnologies.co.ke"],
      replyTo: sanitizedEmail,
      subject: `New Contact Form Submission - ${sanitizedService}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Consultation Request</h2>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
            <p><strong>Phone:</strong> ${sanitizedPhone}</p>
            ${sanitizedCompany ? `<p><strong>Company:</strong> ${sanitizedCompany}</p>` : ''}
          </div>

          <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Service Interest</h3>
            <p><strong>${sanitizedService}</strong></p>
          </div>

          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Project Details</h3>
            <p style="white-space: pre-wrap;">${sanitizedMessage}</p>
          </div>

          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            This email was sent from the Byte Matrix Technologies contact form.<br/>
            <strong>Reply directly to this email to respond to the client.</strong>
          </p>
        </div>
      `,
    });

    if (emailResponse.error) {
      console.error("Failed to send notification email:", emailResponse.error);
      throw new Error(`Notification email failed: ${emailResponse.error.message}`);
    }

    console.log("Email sent successfully to support team:", emailResponse);

    // Send confirmation email to the user
    console.log("Attempting to send confirmation email to client...");
    const confirmationResponse = await resend.emails.send({
      from: "Byte Matrix Technologies <info@bytematrixtechnologies.co.ke>",
      to: [sanitizedEmail],
      subject: "We received your consultation request!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for contacting us, ${sanitizedName}!</h2>
          
          <p style="font-size: 16px; line-height: 1.6;">
            We have received your consultation request for <strong>${sanitizedService}</strong> 
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
            <strong>Email:</strong> <a href="mailto:info@bytematrixtechnologies.co.ke">info@bytematrixtechnologies.co.ke</a><br/>
            <strong>Phone:</strong> +254 724 367 794
          </p>

          <p style="margin-top: 30px;">
            Best regards,<br/>
            <strong>The Byte Matrix Technologies Team</strong>
          </p>
        </div>
      `,
    });

    if (confirmationResponse.error) {
      console.error("Failed to send confirmation email:", confirmationResponse.error);
      // Don't throw - notification was sent, just log the confirmation failure
    } else {
      console.log("Confirmation email sent to user:", confirmationResponse);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Consultation request sent successfully",
        notificationSent: !emailResponse.error,
        confirmationSent: !confirmationResponse.error
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
    console.error("Error in send-consultation-email function:", {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
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
