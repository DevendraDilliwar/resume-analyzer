"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Siren, MapPin, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background text-foreground">
      {/* Background Glow - Subtle Blue */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium font-body text-foreground">
              Secure & Anonymous Reporting
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-sans leading-tight">
            <span className="block">Report Crimes Securely</span>
            <span className="block text-primary">
              Make Your Community Safer
            </span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground font-body leading-relaxed">
            Report incidents anonymously, track local safety trends, and alert your neighborhood in real-time. Join the network of vigilant citizens.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/auth/sign-up"
              className="group px-8 py-4 rounded-full bg-primary hover:bg-blue-600 text-white font-semibold font-sans text-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-blue-900/20"
            >
              <span>Report Incident</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-it-works"
              className="px-8 py-4 rounded-full border-2 border-border hover:border-primary/50 font-semibold font-sans text-lg hover:bg-secondary transition-all duration-300"
            >
              How It Works
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-6 h-6 text-primary" />
                <div className="text-3xl font-bold font-sans text-foreground">
                  50K+
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-body">Vigilant Users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
