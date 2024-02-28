import React from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <USCProvider
      mode="payment"
      currency="USD"
      allowedCountries={['US', 'GB', 'CA' , "IN" ]}
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="https://noedarun-clone.vercel.app/stripe/success"
      cancelUrl="https://noedarun-clone.vercel.app/stripe/error"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
};

export default CartProvider;
