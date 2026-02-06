import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { z } from "zod";
import { Mail, MessageSquare, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const contactFormSchema = insertContactSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "General Inquiry",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[100px]" />
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4" data-testid="badge-contact">Contact</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Let's talk about your project
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Not sure where to start? Book a free call and we'll help you figure out 
              the best path forward, no pressure, no obligation.
            </p>

            <div className="mt-10 space-y-6">
              <motion.div 
                className="flex items-start gap-4" 
                data-testid="info-email"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-medium">Email us</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    hello@blastprojects.com
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4" 
                data-testid="info-response-time"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10">
                  <MessageSquare size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-medium">Response time</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We typically respond within 24 hours
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="mt-10 rounded-xl border border-purple-500/10 bg-gradient-to-br from-purple-500/5 to-transparent p-6 backdrop-blur-sm" 
              data-testid="card-why-work-with-us"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-foreground">Why work with us?</h4>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3" data-testid="text-benefit-1">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 text-xs">✓</span>
                  Affordable rates without compromising quality
                </li>
                <li className="flex items-center gap-3" data-testid="text-benefit-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 text-xs">✓</span>
                  Real experience deploying production apps
                </li>
                <li className="flex items-center gap-3" data-testid="text-benefit-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 text-xs">✓</span>
                  We handle all the technical complexity
                </li>
                <li className="flex items-center gap-3" data-testid="text-benefit-4">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 text-xs">✓</span>
                  Transparent communication throughout
                </li>
                <li className="flex items-center gap-3" data-testid="text-benefit-5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 text-xs">✓</span>
                  Ongoing support after launch
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:mt-[3.25rem]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/5" data-testid="card-contact-form">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="p-6">
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              data-testid="input-name"
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="you@example.com"
                              {...field}
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What are you interested in?</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger data-testid="select-subject">
                                <SelectValue placeholder="Select a topic" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                              <SelectItem value="App Development">App Development</SelectItem>
                              <SelectItem value="Custom Project">Custom Project</SelectItem>
                              <SelectItem value="Partnership">Partnership</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project or questions..."
                              className="min-h-32 resize-none"
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full gap-2 bg-accent border-accent-border"
                      disabled={mutation.isPending}
                      data-testid="button-send-message"
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Book Free Consultation
                        </>
                      )}
                    </Button>
                    <p className="mt-3 text-center text-xs text-muted-foreground" data-testid="text-consultation-confidential">
                      All consultations are confidential. Mutual NDA signed before any work begins.
                    </p>
                  </div>
                </form>
              </Form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
