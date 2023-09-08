import stripePromise from "@/lib/stripe";
import { ButtonCheckoutProps } from "@/utils/types-zod";
import React from "react";
import axios from "axios"; // Importez Axios

const ButtonCheckout: React.FC<ButtonCheckoutProps> = ({
  priceId,
  userEmail
}) => {
  
  const handleAddToCart = async () => {
    // try {
    //   // Effectuez la requête API à "api/checkout" en utilisant Axios
    //   const response = await axios.post("/api/checkout",{
    //     priceId: priceId,
    //     userEmail: userEmail
    //   });

    //   // Vérifiez le statut de la réponse
    //   if (response.status !== 200) {
    //     throw new Error("Erreur de requête API");
    //   }

    //   // Traitez la réponse de l'API en conséquence
    //   const data = response.data;
    //   console.log("Réponse de l'API :", data);

    //   // Vous pouvez également effectuer des actions supplémentaires après avoir reçu la réponse
    // } catch (error) {
    //   // Gérez les erreurs de requête ici
    //   console.error("Erreur de requête API :", error);
    // }

    await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        priceId: priceId,
        userEmail: userEmail,
        routeUrl : window.location.href
      }),
    })
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
