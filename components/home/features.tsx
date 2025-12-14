"use client";

import { Brain, Target, Zap, Shield, BarChart3, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced AI algorithms analyze your resume for content quality, formatting, and ATS compatibility.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "ATS Optimization",
    description: "Ensure your resume passes Applicant Tracking Systems with our specialized optimization tools.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "Get real-time suggestions and improvements as you upload your resume. No waiting required.",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data is encrypted and secure. We never share your information with third parties.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Detailed Scoring",
    description: "Comprehensive scoring system that evaluates every aspect of your resume with actionable insights.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: CheckCircle,
    title: "Industry Standards",
    description: "Benchmarked against industry best practices and hiring manager preferences.",
    gradient: "from-pink-500 to-rose-500",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create a winning resume that gets you noticed by recruiters and hiring managers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
