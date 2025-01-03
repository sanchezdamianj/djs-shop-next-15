"use client";

import { useCartStore } from "@/store/cart/cart-store";
import { currencyFormat } from "@/utils/currencyFormatter";
import Link from "next/link";
import { useEffect, useState } from "react";
import { OrderSummaryLoading } from "./OrderSummarySkeleton";

export const OrderSummary = () => {
  const [loaded, setLoaded] = useState(false);
  const summaryInformation = useCartStore((state) => state.summaryInformation);
  const { subTotal, tax, total, itemsInCart } = summaryInformation;

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return <OrderSummaryLoading />;




  return (
    <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
      <h2 className="text-2xl mb-2">Order detail</h2>

      <div className="grid grid-cols-2">
        <span>No. Products</span>
        <span className="text-right">
          {itemsInCart === 1 ? `${itemsInCart} item` : `${itemsInCart} items`}
        </span>

        <span>Subtotal</span>
        <span className="text-right">{currencyFormat(subTotal)}</span>

        <span>Taxes (15%)</span>
        <span className="text-right">{currencyFormat(tax)}</span>

        <span className="mt-5 text-2xl">Total:</span>
        <span className="mt-5 text-2xl text-right">{currencyFormat(total)}</span>
      </div>

      <div className="mt-5 mb-2 w-full">
        <Link
          className="flex btn-primary justify-center"
          href="/checkout/address"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};
