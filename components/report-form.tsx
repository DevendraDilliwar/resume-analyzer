"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ShieldAlert, Send, Upload, MapPin, Loader2 } from "lucide-react";

export function ReportForm() {
  const router = useRouter();
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const type = formData.get("type") as string;
    const datetime = formData.get("datetime") as string;
    const location = formData.get("location") as string;
    const description = formData.get("description") as string;
    
    // Note: File upload for evidence is skipped for now as it requires Storage bucket setup.
    // We will focus on data insertion.

    if (!type || !datetime || !location || !description) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    const title = `${type} at ${location}`; 
    let supabase;
    try {
      supabase = createClient();
    } catch (e) {
      console.error("Supabase client failed to initialize", e);
      setError("System configuration error. Please contact administrator.");
      setLoading(false);
      return;
    }

    // Get current user if NOT anonymous
    let userId = null;
    if (!isAnonymous) {
      try {
        const { data } = await supabase.auth.getUser();
        userId = data?.user?.id || null;
      } catch (e) {
        // If auth fails or not configured, just proceed as anonymous/guest
        console.warn("Could not fetch user, defaulting to guest submission");
      }
    }

    const { error: insertError } = await supabase.from("incidents").insert({
      title,
      type,
      occurred_at: new Date(datetime).toISOString(),
      location,
      description,
      is_anonymous: isAnonymous,
      user_id: userId,
      status: 'pending' // Default
    });

    if (insertError) {
      console.error("Error submitting report:", insertError);
      setError("Failed to submit report. Please try again.");
    } else {
      setSuccess(true);
      // Optional: Reset form or redirect
      // router.push('/report/success'); 
    }
    setLoading(false);
  };

  if (success) {
    return (
       <Card className="w-full border-border bg-card">
        <CardHeader>
           <div className="flex items-center space-x-2 mb-2 text-green-500">
             <ShieldAlert className="w-6 h-6" />
             <CardTitle className="text-2xl font-bold font-sans">Report Submitted</CardTitle>
           </div>
           <CardDescription>
             Thank you for your report. Your contribution helps keep the community safe. 
             {isAnonymous ? " You submitted this anonymously." : " We may contact you for further details."}
           </CardDescription>
        </CardHeader>
        <CardFooter>
           <Button onClick={() => setSuccess(false)} variant="outline" className="w-full">Submit Another Report</Button>
        </CardFooter>
       </Card>
    );
  }

  return (
    <Card className="w-full border-border bg-card">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <div className="flex items-center space-x-2 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <ShieldAlert className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold font-sans">Submit Incident Report</CardTitle>
          </div>
          <CardDescription className="text-base font-body">
            Fill out the form below to report a crime or suspicious activity. Your safety is our priority.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {error && (
            <div className="bg-red-500/10 text-red-500 p-3 rounded-md text-sm font-medium">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="type">Incident Type</Label>
              <select
                id="type"
                name="type"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="" disabled selected>Select type...</option>
                <option value="theft">Theft / Burglary</option>
                <option value="assault">Assault / Violence</option>
                <option value="vandalism">Vandalism</option>
                <option value="suspicious">Suspicious Activity</option>
                <option value="cyber">Cybercrime</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="datetime">Date & Time</Label>
              <Input id="datetime" name="datetime" type="datetime-local" className="font-sans" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input id="location" name="location" placeholder="e.g., Sector 18, Noida or MG Road, Bangalore" className="pl-10 font-sans" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description of Incident</Label>
            <Textarea 
              id="description"
              name="description"
              placeholder="Please describe what happened in as much detail as possible..." 
              className="min-h-[150px] font-sans"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="evidence">Evidence (Optional)</Label>
            <div className="border-2 border-dashed border-input rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-accent/50 transition-colors cursor-pointer opacity-50">
              <Upload className="h-8 w-8 text-muted-foreground mb-2" />
              <span className="text-sm font-medium">Media upload coming soon</span>
              {/* <Input id="evidence" type="file" className="hidden" /> */}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox 
              id="anonymous" 
              checked={isAnonymous}
              onCheckedChange={(checked) => setIsAnonymous(checked as boolean)}
            />
            <Label htmlFor="anonymous" className="cursor-pointer font-medium">Submit Anonymously</Label>
          </div>
          
          {isAnonymous && (
            <p className="text-xs text-muted-foreground bg-secondary/50 p-2 rounded">
              Your identity will be completely hidden from the report. Choosing this option may limit our ability to follow up for more details.
            </p>
          )}
        </CardContent>
        <CardFooter>
          <Button 
            disabled={loading}
            type="submit"
            className="w-full bg-primary hover:bg-red-700 text-white font-semibold py-6 text-lg shadow-lg shadow-primary/20"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Submit Report
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
