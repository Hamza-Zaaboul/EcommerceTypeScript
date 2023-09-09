import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";


// Instancier l'API Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as any, {
  apiVersion: "2023-08-16",
});



// Gérer le webhook
export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const body = await req.text();
    const sig = (req.headers as any).get("stripe-signature");

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET as any
      );
    } catch (err: any) {
      console.error(err);

      return NextResponse.json(
        { message: `Webhook error: ${err.message}` },
        { status: 400 }
      );
    }


    if (event.type === "payment_intent.succeeded") {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;

      console.log(
        `💰 PaymentIntent Successe: ${JSON.stringify(paymentIntent)}`
      );

      return NextResponse.json({ received: true }, { status: 200 });
    } else if (event.type === "checkout.session.completed") {
      const paymentIntent = event.data.object as Stripe.Checkout.Session;
      console.log(
        `💰 PaymentIntent from checkout: ${JSON.stringify(paymentIntent)}`
      );
      return NextResponse.json({ received: true }, { status: 200 });
    } else if (event.type === "payment_intent.payment_failed") {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log(
        `❌ Payment failed: ${paymentIntent.last_payment_error?.message}`
      );
      return NextResponse.json({ received: true }, { status: 200 });
    } else if (event.type === "charge.succeeded") {
      const charge = event.data.object as Stripe.Charge;
      console.log(`💵 Charge id: ${charge.id}`);
      return NextResponse.json({ received: true }, { status: 200 });
    } else if (event.type === "charge.failed") {
      const charge = event.data.object as any;
      // // Retrieve customer`
      if (charge.outcome.type === "blocked") {
        // Get the customer email
        console.log("Blocked by stripe because Fraudeur detected");
      }

      console.log(`❌ Charge failed: ${charge.failure_message}`);
      return NextResponse.json({ received: true }, { status: 200 });
    } else {
      console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
      return NextResponse.json({ received: true }, { status: 200 });
    }
  } else {
    (req.headers as any).set("Allow", "POST");
    return NextResponse.json({ end: "Method Not Allowed" }, { status: 405 });
  }
}
