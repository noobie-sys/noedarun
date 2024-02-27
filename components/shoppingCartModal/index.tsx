"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { MinusCircle, PlusCircle } from "lucide-react";
import Image from "next/image";
import { Fragment } from "react";
import { useShoppingCart } from "use-shopping-cart";

export function ShoppingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
    clearCart,
    incrementItem,
    decrementItem,

  } = useShoppingCart();

  const handleCheckoutCart = async (event: any) => {
    event?.preventDefault();
    try {
      const result = await redirectToCheckout();

      if (result?.error) {
        console.log("results");
      }
      clearCart();
    } catch (error) {
      console.log({ message: error });
    }
  };
  return (
    <div className="relative z-[3004645645656] ">
      <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
        <SheetContent className="sm:max-w-lg w-[90vw]  ">
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
          </SheetHeader>
          <div className="h-full flex flex-col justify-between ">
            <div className="mt-8 flex-1 overflow-auto ">
              <ul className="-my-6 divide-y divide-gray-200">
                {cartCount === 0 ? (
                  <h1 className="py-6">You don't have anything</h1>
                ) : (
                  <Fragment>
                    {Object.values(cartDetails ?? {}).map((item) => (
                      <li key={item.id} className="flex py-6   ">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 dark:border-gray-600">
                          <Image
                            src={item.image as string}
                            alt={item.name}
                            width={100}
                            height={100}
                            className="bg-white"
                          />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col ">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900 dark:text-slate-100">
                              <h3>{item.name}</h3>
                              <p className="ml-4">${item.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500  dark:text-gray-300 line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="flex gap-2 ">
                              <p className="text-gray-500">
                                Qty: {item.quantity}
                              </p>
                              <div className="flex gap-2 ">
                                <span onClick={() => incrementItem(item.id)} >
                                    <PlusCircle className="w-5 h-5 cursor-pointer" />
                                </span>
                                <span>1</span>
                                <span onClick={() => decrementItem(item.id)}>
                                    <MinusCircle className="w-5 h-5 cursor-pointer" />
                                </span>
                              </div>
                            </div>
                            <div className="flex">
                              <button
                                type="button"
                                className="font-medium text-primary hover:text-primary/80"
                                onClick={() => removeItem(item.id)}
                              >
                                remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </Fragment>
                )}
              </ul>
            </div>
            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900 dark:text-slate-200">
                <p>Subtotal</p>
                <p>${totalPrice}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes are calculated at checkout
              </p>
              <div className="mt-6">
                <Button onClick={handleCheckoutCart} disabled={cartCount === 0} className={`w-full ${cartCount === 0 && 'cursor-not-allowed'}`}>
                  Checkout
                </Button>
              </div>
              <div className="mt-6 flex justify-center text-center text-gray-500 text-sm">
                <p>
                  Or{" "}
                  <button
                    className="font-md text-primary hover:text-primary/80 "
                    onClick={() => handleCartClick()}
                  >
                    Continue Shopping
                  </button>
                </p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
