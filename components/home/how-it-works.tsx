"use client";

import { Upload, Scan, Download, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Resume",
    description: "Simply drag and drop your resume or click to upload. We support PDF, DOC, and DOCX formats.",
    step: "01",
  },
  {
    icon: Scan,
    title: "AI Analysis",
    description: "Our advanced AI scans your resume, checking formatting, content, keywords, and ATS compatibility.",
    step: "02",
  },
  {
    icon: Download,
    title: "Get Insights & Improve",
    description: "Receive detailed feedback with actionable suggestions. Download your optimized resume and apply with confidence.",
    step: "03",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your resume analyzed in three simple steps. It's fast, easy, and incredibly effective.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 -translate-y-1/2 opacity-20"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2 group">
                    {/* Step Number */}
                    <div className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 flex items-center justify-center mb-6 mt-4">
                      <Icon className="w-8 h-8 text-purple-600" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow - Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-purple-500" />
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
