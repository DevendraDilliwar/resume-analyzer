"use client";

import Link from "next/link";
import { ArrowRight, ShieldAlert } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-card border border-border rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Glow effect behind card content */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>

          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary mb-8 shadow-lg shadow-primary/20 relative z-10">
            <ShieldAlert className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-sans relative z-10">
            <span className="block text-foreground mb-2">Ready to Take Action?</span>
            <span className="text-primary">
              Join the Watch Today
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-body relative z-10">
            Download the CrimeWatch app to report incidents, receive real-time alerts, and help keep your community safe. It's free and anonymous.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              href="/download"
              className="group px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:bg-red-700 hover:shadow-2xl hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 font-sans"
            >
              <span>Download App</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#features"
              className="px-8 py-4 rounded-full border-2 border-border hover:border-primary/50 font-semibold text-lg hover:bg-secondary transition-all duration-300 font-sans text-foreground"
            >
              Learn More
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground relative z-10 font-body">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>100% Free & Anonymous</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>Verified by Authorities</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>Encrypted Data</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
