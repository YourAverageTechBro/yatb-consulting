"use client";

import { Button } from "@/components/ui/button";
import { createCheckoutSession } from "@/app/actions/stripe";

export function CheckoutButton() {
  return (
    <Button
      className="w-full font-mono"
      size="lg"
      onClick={() => createCheckoutSession()}
    >
      Join Now
    </Button>
  );
}
