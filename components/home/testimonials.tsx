"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "Tech Corp",
    image: "SJ",
    rating: 5,
    text: "This tool helped me land my dream job! The AI suggestions were spot-on and helped me optimize my resume for ATS systems. Highly recommended!",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "Innovation Labs",
    image: "MC",
    rating: 5,
    text: "I was struggling to get interviews until I used Resume Analyzer. The detailed feedback helped me restructure my resume completely. Got 3 interviews in the first week!",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Brand Studio",
    image: "ER",
    rating: 5,
    text: "The industry-specific recommendations were incredibly valuable. It's like having a professional resume writer at your fingertips. Worth every penny!",
  },
  {
    name: "David Kim",
    role: "Data Scientist",
    company: "Analytics Inc",
    image: "DK",
    rating: 5,
    text: "As someone who's reviewed hundreds of resumes, I can say this tool provides excellent guidance. The ATS optimization alone is worth the subscription.",
  },
  {
    name: "Jessica Taylor",
    role: "UX Designer",
    company: "Design Co",
    image: "JT",
    rating: 5,
    text: "Clean interface, powerful features, and instant results. This is exactly what job seekers need. My resume went from good to exceptional!",
  },
  {
    name: "Alex Martinez",
    role: "Sales Executive",
    company: "Growth Partners",
    image: "AM",
    rating: 5,
    text: "The scoring system helped me understand exactly what recruiters look for. Made targeted improvements and saw immediate results. Fantastic tool!",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Loved by Job Seekers
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who've transformed their resumes and landed their dream jobs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-purple-500" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground/80 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
