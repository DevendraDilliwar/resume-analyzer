import { Navbar } from "@/components/home/navbar";
import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { HowItWorks } from "@/components/home/how-it-works";
import { Pricing } from "@/components/home/pricing";
import { Testimonials } from "@/components/home/testimonials";
import { FAQ } from "@/components/home/faq";
import { CTA } from "@/components/home/cta";
import { Footer } from "@/components/home/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      {/* <Pricing /> */}
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
