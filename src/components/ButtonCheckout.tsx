
import { ButtonCheckoutProps } from "@/utils/types-zod";
import React from "react";

const ButtonCheckout: React.FC<ButtonCheckoutProps> = ({
  priceId,
  userEmail,
  routeUrl
}) => {
  const handleAddToCart = async () => {
    try {
   await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: priceId,
          userEmail: userEmail,
          routeUrl: routeUrl,
        }),
      });
      // const sessionId = response.json();
      // console.log(sessionId);
      // const stripe : any = await stripePromise;
      // const { error } = await stripe.redirectToCheckout({
      //   sessionId,
      // });

    } catch (error : any) {
      console.error("Erreur lors de la requete checkout:", error);
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
