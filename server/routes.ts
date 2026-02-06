import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

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
          const [notifyResult, confirmResult] = await Promise.all([
            resend.emails.send({
              from: "BlastProjects <notifications@blastprojects.com>",
              to: ["hello@blastprojects.com"],
              subject: `New Consultation Request from ${validatedData.name}`,
              html: `
                <h2>New Consultation Request</h2>
                <p><strong>Name:</strong> ${validatedData.name}</p>
                <p><strong>Email:</strong> ${validatedData.email}</p>
                <p><strong>Subject:</strong> ${validatedData.subject}</p>
                <p><strong>Message:</strong></p>
                <p>${validatedData.message}</p>
                <hr>
                <p style="color: #666; font-size: 12px;">This message was sent from the BlastProjects contact form.</p>
              `,
            }),
            resend.emails.send({
              from: "BlastProjects <hello@blastprojects.com>",
              to: [validatedData.email],
              subject: "We received your message - BlastProjects",
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                  <h2 style="color: #8B5CF6;">Thanks for reaching out, ${validatedData.name}!</h2>
                  <p>We've received your message and will get back to you within 24 hours.</p>
                  <div style="background: #f9f9f9; border-left: 4px solid #8B5CF6; padding: 16px; margin: 24px 0; border-radius: 4px;">
                    <p style="margin: 0 0 8px 0;"><strong>Your message:</strong></p>
                    <p style="margin: 0; color: #555;">${validatedData.message}</p>
                  </div>
                  <p>In the meantime, feel free to check out our work at <a href="https://blastprojects.com" style="color: #8B5CF6;">blastprojects.com</a></p>
                  <p style="margin-top: 32px;">Best,<br><strong>The BlastProjects Team</strong></p>
                  <hr style="border: none; border-top: 1px solid #eee; margin-top: 32px;">
                  <p style="color: #999; font-size: 12px;">This is an automated confirmation. Please do not reply to this email.</p>
                </div>
              `,
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
