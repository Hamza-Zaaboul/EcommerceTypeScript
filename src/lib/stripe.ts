import { loadStripe } from '@stripe/stripe-js';

const stripePublicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;

const stripePromise = loadStripe(stripePublicKey as any);

export default stripePromise;

