import { ReportForm } from "@/components/report-form";
import { Navbar } from "@/components/home/navbar";
import { Footer } from "@/components/home/footer";

export default function ReportPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-sans text-foreground">
              Incident Reporting
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Help us keep the community safe. Reports are reviewed immediately by our safety monitoring team.
            </p>
          </div>
          
          <ReportForm />
        </div>
      </div>
      <Footer />
    </main>
  );
}
