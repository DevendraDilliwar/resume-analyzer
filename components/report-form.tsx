"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ShieldAlert, Send, Upload, MapPin } from "lucide-react";

export function ReportForm() {
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <Card className="w-full border-border bg-card">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="type">Incident Type</Label>
            <select
              id="type"
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
            <Input id="datetime" type="datetime-local" className="font-sans" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input id="location" placeholder="e.g., Sector 18, Noida or MG Road, Bangalore" className="pl-10 font-sans" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description of Incident</Label>
          <Textarea 
            id="description" 
            placeholder="Please describe what happened in as much detail as possible..." 
            className="min-h-[150px] font-sans"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="evidence">Evidence (Optional)</Label>
          <div className="border-2 border-dashed border-input rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-accent/50 transition-colors cursor-pointer">
            <Upload className="h-8 w-8 text-muted-foreground mb-2" />
            <span className="text-sm font-medium">Click to upload photos or videos</span>
            <span className="text-xs text-muted-foreground mt-1">Max file size: 10MB</span>
            <Input id="evidence" type="file" className="hidden" />
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
        <Button className="w-full bg-primary hover:bg-red-700 text-white font-semibold py-6 text-lg shadow-lg shadow-primary/20">
          <Send className="mr-2 h-5 w-5" />
          Submit Report
        </Button>
      </CardFooter>
    </Card>
  );
}
