import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-6">Payment Successful!</h1>
        <p className="text-lg mb-8 font-mono">
          Thank you for subscribing to the monthly coaching service. Here's how
          to get started:
        </p>

        <div className="bg-muted/30 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">Next Steps</h2>

          <div className="text-left font-mono space-y-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">1. Add me on Discord</h3>
              <p>This is where our 1:1 chatting will occur</p>
              <div className="flex items-center justify-center bg-background p-3 rounded-md">
                <code className="font-bold">youraveragetechbro</code>
              </div>
              <p className="text-sm mt-2 text-muted-foreground">
                If you have any issues with Discord, please email me at{" "}
                <a
                  href="mailto:dohyun@youraveragetechbro.com"
                  className="text-primary hover:underline"
                >
                  dohyun@youraveragetechbro.com
                </a>
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-bold">2. Book your first call</h3>
              <p>Schedule your first coaching call using the link below</p>
              <Button className="w-full" asChild>
                <a
                  href="https://cal.com/youraveragetechbro/60-min-free"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Book Your First Call <ExternalLink size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Button variant="outline" asChild className="font-mono">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}
