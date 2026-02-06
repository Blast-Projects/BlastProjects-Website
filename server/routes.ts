import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { Resend } from "resend";
import fs from "fs";
import path from "path";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const logoPath = path.join(process.cwd(), "client", "public", "blastprojects-logo.png");
const logoBase64 = fs.existsSync(logoPath) ? fs.readFileSync(logoPath).toString("base64") : null;

function buildConfirmationEmail(name: string, message: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f7;">
    <tr>
      <td align="center" style="padding: 40px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

          <!-- Logo Header -->
          <tr>
            <td align="center" style="padding: 0 0 32px 0;">
              <a href="https://blastprojects.com" style="text-decoration: none;">
                <img src="cid:blastprojects-logo" alt="BlastProjects" width="180" style="display: block; height: auto; max-width: 180px;" />
              </a>
            </td>
          </tr>

          <!-- Main Card -->
          <tr>
            <td style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">

                <!-- Purple accent bar -->
                <tr>
                  <td style="height: 4px; background: linear-gradient(90deg, #8B5CF6, #a78bfa);"></td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="padding: 40px 40px 16px 40px;">
                    <h1 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 700; color: #1a1a2e; line-height: 1.3;">
                      Hi ${name},
                    </h1>
                    <p style="margin: 0; font-size: 16px; color: #6b7280; line-height: 1.6;">
                      Thanks for reaching out to BlastProjects. We've received your message and a member of our team will get back to you within <strong style="color: #1a1a2e;">24 hours</strong>.
                    </p>
                  </td>
                </tr>

                <!-- Message recap -->
                <tr>
                  <td style="padding: 16px 40px 16px 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #faf5ff; border-radius: 8px; border: 1px solid #ede9fe;">
                      <tr>
                        <td style="padding: 20px 24px;">
                          <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #8B5CF6;">
                            Your Message
                          </p>
                          <p style="margin: 0; font-size: 14px; color: #4b5563; line-height: 1.6; font-style: italic;">
                            "${message}"
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- What happens next -->
                <tr>
                  <td style="padding: 16px 40px 8px 40px;">
                    <p style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #1a1a2e;">
                      What happens next?
                    </p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 0 0 12px 0;">
                          <table role="presentation" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width: 28px; height: 28px; background-color: #8B5CF6; border-radius: 50%; text-align: center; vertical-align: middle; color: #ffffff; font-size: 13px; font-weight: 700;">1</td>
                              <td style="padding-left: 12px; font-size: 14px; color: #4b5563; line-height: 1.5;">We'll review your message and project needs</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 12px 0;">
                          <table role="presentation" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width: 28px; height: 28px; background-color: #8B5CF6; border-radius: 50%; text-align: center; vertical-align: middle; color: #ffffff; font-size: 13px; font-weight: 700;">2</td>
                              <td style="padding-left: 12px; font-size: 14px; color: #4b5563; line-height: 1.5;">A team member will reach out to schedule your free consultation</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 12px 0;">
                          <table role="presentation" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width: 28px; height: 28px; background-color: #8B5CF6; border-radius: 50%; text-align: center; vertical-align: middle; color: #ffffff; font-size: 13px; font-weight: 700;">3</td>
                              <td style="padding-left: 12px; font-size: 14px; color: #4b5563; line-height: 1.5;">We'll scope your project and provide a tailored quote</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- CTA Button -->
                <tr>
                  <td style="padding: 16px 40px 40px 40px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                      <tr>
                        <td style="background-color: #8B5CF6; border-radius: 8px;">
                          <a href="https://blastprojects.com" style="display: inline-block; padding: 14px 32px; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; letter-spacing: 0.3px;">
                            Visit Our Portfolio
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 16px 0 16px; text-align: center;">
              <p style="margin: 0 0 8px 0; font-size: 13px; color: #9ca3af;">
                BlastProjects &mdash; Building apps that make an impact.
              </p>
              <p style="margin: 0 0 16px 0; font-size: 12px; color: #d1d5db;">
                <a href="https://blastprojects.com" style="color: #8B5CF6; text-decoration: none;">Website</a>
                &nbsp;&middot;&nbsp;
                <a href="https://www.linkedin.com/company/blastprojects" style="color: #8B5CF6; text-decoration: none;">LinkedIn</a>
                &nbsp;&middot;&nbsp;
                <a href="https://x.com/blastprojects" style="color: #8B5CF6; text-decoration: none;">X</a>
              </p>
              <p style="margin: 0; font-size: 11px; color: #d1d5db;">
                This is an automated confirmation. You're receiving this because you contacted us through our website.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildNotificationEmail(name: string, email: string, subject: string, message: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f7;">
    <tr>
      <td align="center" style="padding: 40px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

          <!-- Main Card -->
          <tr>
            <td style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">

                <!-- Purple accent bar -->
                <tr>
                  <td style="height: 4px; background: linear-gradient(90deg, #8B5CF6, #a78bfa);"></td>
                </tr>

                <!-- Header -->
                <tr>
                  <td style="padding: 32px 40px 16px 40px;">
                    <h1 style="margin: 0 0 4px 0; font-size: 20px; font-weight: 700; color: #1a1a2e;">
                      New Consultation Request
                    </h1>
                    <p style="margin: 0; font-size: 14px; color: #9ca3af;">
                      Submitted via blastprojects.com
                    </p>
                  </td>
                </tr>

                <!-- Details -->
                <tr>
                  <td style="padding: 16px 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius: 8px; border: 1px solid #e5e7eb;">
                      <tr>
                        <td style="padding: 16px 20px; border-bottom: 1px solid #f3f4f6;">
                          <p style="margin: 0 0 2px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #9ca3af;">Name</p>
                          <p style="margin: 0; font-size: 15px; color: #1a1a2e; font-weight: 500;">${name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 16px 20px; border-bottom: 1px solid #f3f4f6;">
                          <p style="margin: 0 0 2px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #9ca3af;">Email</p>
                          <p style="margin: 0; font-size: 15px;"><a href="mailto:${email}" style="color: #8B5CF6; text-decoration: none;">${email}</a></p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 16px 20px; border-bottom: 1px solid #f3f4f6;">
                          <p style="margin: 0 0 2px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #9ca3af;">Subject</p>
                          <p style="margin: 0; font-size: 15px; color: #1a1a2e;">${subject}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 16px 20px;">
                          <p style="margin: 0 0 2px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #9ca3af;">Message</p>
                          <p style="margin: 0; font-size: 15px; color: #1a1a2e; line-height: 1.6;">${message}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Reply CTA -->
                <tr>
                  <td style="padding: 8px 40px 32px 40px;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background-color: #8B5CF6; border-radius: 8px;">
                          <a href="mailto:${email}" style="display: inline-block; padding: 12px 24px; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600;">
                            Reply to ${name}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 16px 0 16px; text-align: center;">
              <p style="margin: 0; font-size: 11px; color: #d1d5db;">
                BlastProjects Contact Form Notification
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContactSubmission(validatedData);
      
      if (resend) {
        try {
          const confirmAttachments = logoBase64
            ? [{ content: logoBase64, filename: "blastprojects-logo.png", contentId: "blastprojects-logo" }]
            : [];

          const [notifyResult, confirmResult] = await Promise.all([
            resend.emails.send({
              from: "BlastProjects <notifications@blastprojects.com>",
              to: ["hello@blastprojects.com"],
              subject: `New Consultation Request from ${validatedData.name}`,
              html: buildNotificationEmail(validatedData.name, validatedData.email, validatedData.subject, validatedData.message),
            }),
            resend.emails.send({
              from: "BlastProjects <hello@blastprojects.com>",
              to: [validatedData.email],
              subject: "We received your message - BlastProjects",
              html: buildConfirmationEmail(validatedData.name, validatedData.message),
              attachments: confirmAttachments,
            }),
          ]);
          console.log("Notification email:", JSON.stringify(notifyResult));
          console.log("Confirmation email:", JSON.stringify(confirmResult));
        } catch (emailError) {
          console.error("Failed to send email notification:", emailError);
        }
      }
      
      res.status(201).json({ success: true, id: contact.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          error: "Validation failed", 
          details: error.errors 
        });
      } else {
        console.error("Contact submission error:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  return httpServer;
}
