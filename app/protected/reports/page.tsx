import { createClient } from "@/lib/supabase/server";
import { InfoIcon, MapPin, Calendar, CheckCircle, Clock, XCircle } from "lucide-react";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function ReportsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/auth/login");
  }

  const { data: incidents, error } = await supabase
    .from("incidents")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching incidents:", error);
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return <Badge className="bg-green-500 hover:bg-green-600">Verified</Badge>;
      case "dismissed":
        return <Badge variant="destructive">Dismissed</Badge>;
      default:
        return <Badge variant="secondary">Pending</Badge>;
    }
  };

  return (
    <div className="flex-1 w-full flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">My Reports</h1>
        <p className="text-muted-foreground">
          View and track the status of your submitted incident reports.
        </p>
      </div>

      {incidents && incidents.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {incidents.map((incident) => (
            <Card key={incident.id} className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start gap-2">
                  <div className="space-y-1">
                    <CardTitle className="text-lg leading-tight">
                      {incident.title}
                    </CardTitle>
                    <CardDescription className="text-xs">
                      ID: {incident.id.slice(0, 8)}...
                    </CardDescription>
                  </div>
                  {getStatusBadge(incident.status)}
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-4 text-sm">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{incident.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(incident.occurred_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="mt-auto pt-2 border-t">
                  <p className="line-clamp-3 text-muted-foreground">
                    {incident.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-12 border rounded-lg bg-card text-card-foreground shadow-sm">
          <div className="p-4 rounded-full bg-muted mb-4">
            <InfoIcon className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No Reports Found</h3>
          <p className="text-muted-foreground text-center max-w-sm mb-6">
            You haven't submitted any incident reports yet.
          </p>
        </div>
      )}
    </div>
  );
}
