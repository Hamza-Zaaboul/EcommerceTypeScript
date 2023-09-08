import { NextRequest, NextResponse } from "next/server";

import Stripe from "stripe";
type BodyData = {
  priceId : string;
  userEmail : string;
  routeUrl : string;
}
const stripeSecretKey = process.env.STRIPE_SECRET_KEY as any;
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2023-08-16", // Remplacez par la version Stripe que vous utilisez
});

export async function POST(req: NextRequest, res: NextResponse) {
  if (!req.body) {
    return NextResponse.json(
      { error: "Le corps de la requête est vide." },
      { status: 400 }
    );
  }

  let data = []
  for await (const chunk of req.body as any){
    data.push(...chunk)
  }

  const stringData = String.fromCharCode(...data)
  const body : BodyData = JSON.parse(stringData)

  if (req.method === "POST") {
    try {
      
      const { priceId, userEmail,routeUrl }:BodyData = body;

      // Créez une session de paiement Checkout
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${routeUrl}/?success=true`,
        cancel_url: `${routeUrl}/?canceled=true`,
        customer_email: userEmail,
      });

      if (!session.url) {
        throw new Error("Session URL is null.");
      }
      return NextResponse.redirect(new URL("303", session.url));
    } catch (error) {
      console.error(
        "Erreur lors de la création de la session de paiement :",
        error
      );
      return NextResponse.json(
        {
          error:
            "Une erreur est survenue lors de la création de la session de paiement.",
        },
        { status: 500 }
      );
    }
  } else {
   
      // res.setHeader('Allow', 'POST');
      // res.status(405).end('Method Not Allowed');
    return NextResponse.next();
  }
}
