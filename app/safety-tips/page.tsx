import { Navbar } from "@/components/home/navbar";
import { Footer } from "@/components/home/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Smartphone, Car, Home, Eye, Shield } from "lucide-react";

export default function SafetyTipsPage() {
  const tips = [
    {
      title: "Home Security",
      icon: Home,
      content: [
        "Double-lock main doors and install grills on windows.",
        "Verify service personnel (electrician, plumber) ID cards.",
        "Inform neighbors or guard when travelling for long periords.",
        "Install CCTV cameras at main gates."
      ]
    },
    {
      title: "Personal Safety",
      icon: Eye,
      content: [
        "Share your live location via WhatsApp/Apps when travelling late.",
        "Avoid poorly lit streets; prefer main roads.",
        "Keep emergency numbers (112, 100) on speed dial.",
        "Be aware of chain snatching prone areas."
      ]
    },
    {
      title: "Cyber Security",
      icon: Lock,
      content: [
        "Never share OTPs (One Time Passwords) with anyone.",
        "Be cautious of fake UPI payment requests/QR codes.",
        "Don't click on 'KYC Update' links from unknown SMS.",
        "Report cyber fraud immediately to 1930."
      ]
    },
    {
      title: "Vehicle Safety",
      icon: Car,
      content: [
        "Always park in authorized or guarded parking lots.",
        "Install GPS trackers in your vehicle.",
        "Don't leave laptops or bags visible on seats.",
        "Check child locks before starting travel."
      ]
    },
    {
      title: "Scam Prevention",
      icon: Shield,
      content: [
        "Verify 'Lottery Winner' calls or messages.",
        "Don't transfer money to 'Part-time Job' offers demanding fees.",
        "Official banks never ask for passwords on call.",
        "Check seller ratings before buying on OLX/Marketplace."
      ]
    },
    {
      title: "Mobile Safety",
      icon: Smartphone,
      content: [
        "Enable 'Find My Device' features.",
        "Save IMEI number separately in case of theft.",
        "Use SOS features on your smartphone.",
        "Report lost phones on the CEIR portal."
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-sans text-foreground mb-4">Safety & Awareness</h1>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Proactive steps you can take to protect yourself, your home, and your community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <tip.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tip.content.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-foreground/80">
                        <span className="mr-2 text-primary">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
