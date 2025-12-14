import { Navbar } from "@/components/home/navbar";
import { Footer } from "@/components/home/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, AlertCircle, Info, Megaphone } from "lucide-react";

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      type: "Alert",
      title: "Suspicious Activity in South Delhi District",
      date: "Dec 14, 2025",
      description: "Delhi Police have reported increased chain snatching incidents near Greater Kailash. Residents are advised to be vigilant.",
      icon: AlertCircle,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: 2,
      type: "Community",
      title: "Residents Meeting: Koramangala 4th Block",
      date: "Dec 12, 2025",
      description: "Bangalore City Police (BCP) is hosting a community interaction session to discuss street lighting upgrades.",
      icon: Megaphone,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      id: 3,
      type: "Update",
      title: "Mumbai Traffic Police Advisory",
      date: "Dec 10, 2025",
      description: "New speed radars installed on Western Express Highway. Drive safely and follow lane discipline.",
      icon: Info,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    }
  ];

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-sans text-foreground mb-4">News & Announcements</h1>
            <p className="text-muted-foreground font-body">Stay updated with the latest safety alerts and community news.</p>
          </div>

          <div className="space-y-6">
            {newsItems.map((item) => (
              <Card key={item.id} className="border-border hover:border-primary/50 transition-colors">
                <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                  <div className={`mt-1 p-2 rounded-lg ${item.bgColor}`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className={`${item.color} border-current`}>
                        {item.type}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="mr-1 h-3 w-3" />
                        {item.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground/80 pl-[calc(3rem+1rem)]">
                    {item.description}
                  </CardDescription>
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
