import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { verifyCheckoutSession } from "@/app/actions/stripe";
import { redirect } from "next/navigation";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { session_id } = (await searchParams) as { session_id?: string };
  // Check if session_id is provided
  if (!session_id) {
    redirect("/");
  }

  // Verify the checkout session
  const { success } = await verifyCheckoutSession(session_id);

  // If payment wasn't successful, redirect to home
  if (!success) {
    redirect("/");
  }

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
              <h3 className="font-bold">1. Contact me for 1:1 chatting</h3>
              <p>Choose your preferred messaging platform:</p>

              <div className="space-y-3">
                <div className="bg-background p-3 rounded-md">
                  <p className="text-sm font-semibold mb-1">Discord:</p>
                  <code className="font-bold">youraveragetechbro</code>
                </div>

                <div className="bg-background p-3 rounded-md">
                  <p className="text-sm font-semibold mb-1">WhatsApp:</p>
                  <a
                    href="https://wa.me/17143659744"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-bold"
                  >
                    +1 (714) 365-9744
                  </a>
                </div>
              </div>

              <p className="text-sm mt-2 text-muted-foreground">
                If you have any issues, please email me at{" "}
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
