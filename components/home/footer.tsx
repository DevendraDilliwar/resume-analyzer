"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Report Incident", href: "#report" },
    { label: "Safety Map", href: "#map" },
    { label: "Anonymous Tips", href: "#tips" },
    { label: "FAQ", href: "#faq" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Community", href: "/community" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:support@crimewatch.com", label: "Email" },
];

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background border-t border-border font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10"> {/* Reduced padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8"> {/* Reduced gap */}
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 group mb-3"> {/* Reduced margin */}
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-md shadow-primary/20"> {/* Smaller icon */}
                <span className="text-primary-foreground font-bold text-lg">C</span>
              </div>
              <span className="text-lg font-bold text-foreground">
                CrimeWatch
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-sm leading-relaxed font-body text-sm"> {/* Smaller text */}
              Empowering communities with anonymous crime reporting.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3"> {/* Reduced gap */}
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-md bg-secondary border border-border hover:border-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" /> {/* Smaller icons */}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div className="text-sm"> {/* Smaller text container */}
            <h3 className="font-semibold text-foreground mb-3">Features</h3>
            <ul className="space-y-2"> {/* Reduced spacing */}
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-sm">
            <h3 className="font-semibold text-foreground mb-3">Community</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="text-sm">
            <h3 className="font-semibold text-foreground mb-3">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-xs text-muted-foreground font-body"> {/* Reduced margin, padding, text size */}
          <p>
            © {currentYear} CrimeWatch. All rights reserved.
          </p>
          <p>
            Stay Safe. Stay Alert.
          </p>
        </div>
      </div>
    </footer>
  );
}
