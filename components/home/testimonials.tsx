"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Insp. Rajesh Kumar",
    role: "Station House Officer",
    location: "New Delhi",
    image: "RK",
    rating: 5,
    text: "CrimeWatch gives us the real-time intel we need. The anonymous tips have directly led to arrests in chain snatching cases.",
  },
  {
    name: "Priya Sharma",
    role: "RWA Secretary",
    location: "Mumbai",
    image: "PS",
    rating: 5,
    text: "Our society feels much safer. Being able to see incidents on the map helps us coordinate better with local beat marshals.",
  },
  {
    name: "Vikram Singh",
    role: "Shop Owner",
    location: "Jaipur",
    image: "VS",
    rating: 5,
    text: "I reported a suspicious vehicle anonymously. Police PCR arrived within minutes. Great initiative for public safety.",
  },
  {
    name: "Anjali Menon",
    role: "Student",
    location: "Bangalore",
    image: "AM",
    rating: 5,
    text: "Finally, a way to report harassment without fear. The app is easy to use and I check the safety map before commuting.",
  },
  {
    name: "Karthik Reddy",
    role: "IT Professional",
    location: "Hyderabad",
    image: "KR",
    rating: 5,
    text: "The night mode map is a lifesaver when driving home late from Hitech City. I avoid unlit roads marked unsafe.",
  },
  {
    name: "Meera Iyer",
    role: "Teacher",
    location: "Chennai",
    image: "MI",
    rating: 5,
    text: "We implemented CrimeWatch for our colony. Petty thefts have dropped significantly since we started reporting actively.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-sans">
            <span className="text-foreground">
              Community Impact
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Real stories from citizens and officers working together to build safer neighborhoods.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground/80 leading-relaxed mb-6 relative z-10 font-body">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold font-sans">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-foreground font-sans">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground font-body">
                    {testimonial.role}, {testimonial.location}
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
