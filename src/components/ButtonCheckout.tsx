import { loadStripe } from "@stripe/stripe-js";
import { ButtonCheckoutProps } from "@/utils/types-zod";
import axios from "axios";
import React from "react";


const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as any;
const stripePromise = loadStripe(publishableKey);

const ButtonCheckout: React.FC<ButtonCheckoutProps> = ({
  priceId,
  userEmail,
  routeUrl,
}) => {
//   const handleAddToCart = async () => {
//     try {
//       const response = await fetch("/api/checkout", {
//         method: "POST",
//         mode: "cors",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           priceId: priceId,
//           userEmail: userEmail,
//           routeUrl: routeUrl,
//         }),
//       }).then(response => response);
//       const sessionId = response.json();
// console.log(sessionId);
//       // const stripe : any = await stripePromise;
//       // console.log(sessionId);
//       // const { error } = await stripe.redirectToCheckout({
//       //   sessionId,
//       // });
//     } catch (error: any) {
//       console.error("Erreur lors de la requete checkout:", error);
//     }
//   };
  const handleAddToCart = async () => {

    const checkoutSession = await axios.post('/api/checkout', {
      priceId: priceId,
      userEmail: userEmail,
      routeUrl: routeUrl,
    });
    console.log(checkoutSession.data.id);
    
    const stripe = await stripePromise as any | null;
    const sessionId = checkoutSession.data.id;
    const result = await stripe.redirectToCheckout({
      sessionId,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };


  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
    >
      Ajouter au panier
    </button>
  );
};

export default ButtonCheckout;
