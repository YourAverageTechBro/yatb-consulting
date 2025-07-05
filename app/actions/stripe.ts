"use server";

import Stripe from "stripe";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-02-24.acacia", // Use the latest API version
});

export async function createCheckoutSession() {
  let session;
  const origin = (await headers()).get("origin");
  try {
    // Create a checkout session with Stripe
    session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: process.env.STRIPE_SUBSCRIPTION_PRICE_ID as string,
          quantity: 1,
        },
      ],
      mode: "subscription",
      allow_promotion_codes: true, // Enable coupon/promotion code field
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#pricing`,
      metadata: {
        productType: "monthly_coaching",
      },
    });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    throw new Error("Failed to create checkout session");
  }

  // Redirect to the Stripe checkout page
  if (session.url) {
    redirect(session.url);
  }
}

export async function verifyCheckoutSession(sessionId: string) {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return {
      success: session.payment_status === "paid",
      customerEmail: session.customer_email,
      metadata: session.metadata,
    };
  } catch (error) {
    console.error("Error verifying checkout session:", error);
    return {
      success: false,
      customerEmail: null,
      metadata: null,
    };
  }
}
