import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      {/* Header with Logo */}
      <div className="w-full p-6 md:p-8">
        <Link href="/" className="flex items-center space-x-2 w-fit">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold font-sans">C</span>
          </div>
          <span className="text-lg font-bold font-sans text-foreground">
            CrimeWatch
          </span>
        </Link>
      </div>

      {/* Main Content (Centered) */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-md animate-in fade-in zoom-in duration-500">
          {children}
        </div>
      </div>
    </div>
  );
}
