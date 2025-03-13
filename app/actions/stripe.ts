"use server";

import Stripe from "stripe";
import { redirect } from "next/navigation";

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-02-24.acacia", // Use the latest API version
});

export async function createCheckoutSession() {
  let session;
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
      success_url: `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/#pricing`,
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
