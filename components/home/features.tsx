"use client";

import { Shield, Map, Bell, Lock, Eye, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Anonymous Reporting",
    description: "Submit crime reports without revealing your identity. Your safety and privacy are our top priority.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Map,
    title: "Live Safety Map",
    description: "View real-time incidents in your area on an interactive map. Stay informed about local safety trends.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Bell,
    title: "Real-time Alerts",
    description: "Receive instant notifications about critical incidents happening in your neighborhood.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data submission is encrypted. We use bank-grade security to protect your information.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Eye,
    title: "Verified Updates",
    description: "Community moderators and local authorities verify reports to ensure information accuracy.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join thousands of neighbors working together to create safer streets and communities.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-sans">
            <span className="text-foreground">
              Powerful Safety Features
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Everything you need to keep yourself and your community safe.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${feature.bg} p-3 mb-6 transform group-hover:scale-110 transition-all duration-300`}>
                  <Icon className={`w-full h-full ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground font-sans">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-body">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
