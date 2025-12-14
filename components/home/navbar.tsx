"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/report", label: "Report" },
    { href: "/news", label: "News" },
    { href: "/safety-tips", label: "Safety" },
    { href: "/help", label: "Help" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-md shadow-blue-900/20">
              <span className="text-primary-foreground font-bold text-xl">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              CrimeWatch
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isHashLink = link.href.startsWith("#");
              if (isHashLink) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium font-body relative group cursor-pointer"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </a>
                );
              } else {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium font-body relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                );
              }
            })}
          </div>

          {/* CTA and Theme Switcher */}
          <div className="hidden md:flex items-center space-x-4">

            <Link
              href="/help"
              className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-900/20 transform hover:scale-105 transition-all duration-300 font-sans"
            >
              Emergency SOS
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => {
              const isHashLink = link.href.startsWith("#");
              if (isHashLink) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="block text-foreground/70 hover:text-foreground transition-colors duration-200 font-medium py-2 font-body cursor-pointer"
                  >
                    {link.label}
                  </a>
                );
              } else {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-foreground/70 hover:text-foreground transition-colors duration-200 font-medium py-2 font-body"
                  >
                    {link.label}
                  </Link>
                );
              }
            })}
            <Link
              href="/help"
              className="block text-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold mt-4 font-sans hover:bg-blue-600 transition-colors"
            >
              Emergency SOS
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
