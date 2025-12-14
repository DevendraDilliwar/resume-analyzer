"use client";

import { AlertTriangle, ShieldCheck, BellRing, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: AlertTriangle,
    title: "Spot an Incident",
    description: "Witness suspicious activity or a crime in progress? Open CrimeWatch immediately.",
    step: "01",
  },
  {
    icon: ShieldCheck,
    title: "Report Securely",
    description: "Fill out a quick report. Add photos or videos. Choose to remain 100% anonymous.",
    step: "02",
  },
  {
    icon: BellRing,
    title: "Notify Community",
    description: "Instantly alert nearby users and verified authorities to keep everyone safe.",
    step: "03",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-sans">
            <span className="text-foreground">
              How It Works
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Reporting a crime should be safe, fast, and simple. Here is how CrimeWatch helps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 opacity-50"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 group">
                    {/* Step Number */}
                    <div className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white font-bold text-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 font-sans">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-secondary border border-border flex items-center justify-center mb-6 mt-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-semibold mb-4 text-foreground font-sans">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-body">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow - Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-primary" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
