"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, FileText, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              AI-Powered Resume Analysis
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-foreground">Transform Your Resume</span>
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Land Your Dream Job
            </span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Get instant, AI-powered feedback on your resume. Optimize for ATS systems,
            improve your content, and stand out from the competition.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/auth/sign-up"
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Analyze Your Resume</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-it-works"
              className="px-8 py-4 rounded-full border-2 border-border hover:border-purple-500/50 font-semibold text-lg hover:bg-accent transition-all duration-300"
            >
              See How It Works
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <FileText className="w-6 h-6 text-purple-500" />
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  10K+
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Resumes Analyzed</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <TrendingUp className="w-6 h-6 text-blue-500" />
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  95%
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Sparkles className="w-6 h-6 text-cyan-500" />
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  4.9/5
                </div>
              </div>
              <p className="text-sm text-muted-foreground">User Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
