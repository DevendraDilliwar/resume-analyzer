"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does the AI resume analysis work?",
    answer: "Our advanced AI analyzes your resume using natural language processing and machine learning algorithms. It checks for ATS compatibility, keyword optimization, formatting issues, content quality, and compares your resume against industry best practices and successful resumes in your field.",
  },
  {
    question: "What file formats do you support?",
    answer: "We support PDF, DOC, and DOCX formats. For best results, we recommend uploading your resume as a PDF to preserve formatting. Our AI can extract and analyze text from all these formats accurately.",
  },
  {
    question: "Is my resume data secure and private?",
    answer: "Absolutely! We take privacy seriously. All uploaded resumes are encrypted in transit and at rest. We never share your data with third parties, and you can delete your data at any time. Your resume is only used to provide you with analysis and recommendations.",
  },
  {
    question: "How long does the analysis take?",
    answer: "The analysis is nearly instant! Most resumes are analyzed within 10-30 seconds. You'll receive comprehensive feedback including scoring, suggestions, and actionable improvements right away.",
  },
  {
    question: "Can I use this for different industries?",
    answer: "Yes! Our AI is trained on resumes across various industries including tech, finance, healthcare, marketing, and more. The Pro plan includes industry-specific recommendations tailored to your target field.",
  },
  {
    question: "What's included in the free plan?",
    answer: "The free plan includes 1 resume analysis per month with basic ATS compatibility checking and general improvement suggestions. It's perfect for trying out the service and getting a feel for the quality of our analysis.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time with no questions asked. If you cancel, you'll continue to have access to Pro features until the end of your billing period.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 14-day money-back guarantee on all paid plans. If you're not satisfied with the service, contact our support team within 14 days of purchase for a full refund.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Resume Analyzer
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-accent/50 transition-colors duration-200"
              >
                <span className="font-semibold text-foreground pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="mailto:support@resumeanalyzer.com"
            className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold"
          >
            <span>Contact our support team</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
