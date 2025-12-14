"use client";

import { Navbar } from "@/components/home/navbar";
import { Footer } from "@/components/home/footer";
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
import { Phone, Mail, MapPin, Clock } from "lucide-react";

import { contactSupport } from "./actions";
import { useState, useTransition } from "react";
import { Loader2 } from "lucide-react";

export default function HelpPage() {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ success?: string; error?: string } | null>(null);

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
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-sans text-foreground mb-4">
              Help Desk & Support
            </h1>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Need assistance? We are here to help. Reach out to us for
              technical support or general inquiries.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Emergency Contacts</CardTitle>
                  <CardDescription>
                    For immediate danger, call 112.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 text-red-500 font-bold">
                    <Phone className="w-5 h-5" />
                    <span className="text-lg">National Emergency: 112</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>Police Control Room: 100</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>Ambulance: 108</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>Women Helpline: 1090 / 181</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>Cyber Crime: 1930</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Office Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">
                        CrimeWatch India HQ
                      </p>
                      <p className="text-muted-foreground">
                        DLF Cyber City, Phase 2<br />
                        Gurugram, Haryana 122002
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      support@crimewatch.in
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      Mon-Fri: 9am - 6pm IST
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Support Form */}
            <div className="lg:col-span-2">
              <Card className="border-border bg-card h-full">
                <CardHeader>
                  <CardTitle>Contact Support</CardTitle>
                  <CardDescription>
                    Fill out the form below and our team will get back to you
                    within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                {message?.success && (
                    <div className="p-4 rounded-md bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400">
                      {message.success}
                    </div>
                  )}
                  {message?.error && (
                    <div className="p-4 rounded-md bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400">
                      {message.error}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" placeholder="Your Name" required />
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
                        <option value="Feedback / Suggestion">Feedback / Suggestion</option>
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
                    <Button type="submit" disabled={isPending} className="w-full md:w-auto bg-primary text-white">
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
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
