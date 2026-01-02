"use client";

import { contactSupport } from "@/app/help/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useState, useTransition } from "react";

export default function ContactPage() {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{
    success?: string;
    error?: string;
  } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      const result = await contactSupport(formData);
      setMessage(result);
      if (result.success) {
        (event.target as HTMLFormElement).reset();
      }
    });
  };

  return (
    <div className="flex-1 w-full max-w-2xl mx-auto flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Contact Support</h1>
        <p className="text-muted-foreground">
          Need help with your account or have a question? Fill out the form below.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Send us a message</CardTitle>
          <CardDescription>
            We usually respond within 24 hours.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {message?.success && (
            <div className="p-4 mb-6 rounded-md bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400">
              {message.success}
            </div>
          )}
          {message?.error && (
            <div className="p-4 mb-6 rounded-md bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400">
              {message.error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <select
                id="subject"
                name="subject"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="Technical Issue">Technical Issue</option>
                <option value="Account Support">Account Support</option>
                <option value="Feedback / Suggestion">
                  Feedback / Suggestion
                </option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="How can we help you?"
                className="min-h-[150px]"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isPending}
              className="w-full md:w-auto"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
