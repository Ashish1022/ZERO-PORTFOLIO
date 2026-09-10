"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const fieldClass =
  "h-12 w-full rounded-none border-0 border-b border-border bg-transparent px-0 text-[15px] text-foreground placeholder:text-muted-foreground/60 transition-colors duration-300 focus:border-foreground focus-visible:ring-0 focus-visible:ring-offset-0";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const getClient = useMutation(api.person.getClient);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      await getClient(data);
      form.reset();
      toast({
        title: "Message sent",
        description: "Thanks for reaching out — I'll get back to you shortly.",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Couldn't send that",
        description: "Something went wrong. Please try again, or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-9">
        <div className="grid gap-9 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-3 block font-mono text-[10.5px] uppercase leading-none tracking-label text-muted-foreground">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    autoComplete="name"
                    {...field}
                    className={fieldClass}
                  />
                </FormControl>
                <FormMessage className="meta mt-2 text-destructive" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-3 block font-mono text-[10.5px] uppercase leading-none tracking-label text-muted-foreground">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="you@company.com"
                    type="email"
                    autoComplete="email"
                    {...field}
                    className={fieldClass}
                  />
                </FormControl>
                <FormMessage className="meta mt-2 text-destructive" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-3 block font-mono text-[10.5px] uppercase leading-none tracking-label text-muted-foreground">Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="What's this about?"
                  {...field}
                  className={fieldClass}
                />
              </FormControl>
              <FormMessage className="meta mt-2 text-destructive" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-3 block font-mono text-[10.5px] uppercase leading-none tracking-label text-muted-foreground">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me about the project — what it does, who it's for, and roughly when you need it."
                  {...field}
                  className={`${fieldClass} h-auto min-h-[140px] resize-none py-3 leading-relaxed`}
                />
              </FormControl>
              <FormMessage className="meta mt-2 text-destructive" />
            </FormItem>
          )}
        />

        <div className="flex items-center gap-5 pt-2">
          <button type="submit" disabled={isSubmitting} className="btn-solid disabled:opacity-50">
            {isSubmitting ? "Sending…" : "Send message"}
          </button>
          <span className="meta">Reply within 24 hours</span>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
