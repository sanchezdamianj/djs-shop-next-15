import Link from "next/link";

import { Title } from "@/components/ui/title/Title";
import { OrderSummary } from "./ui/OrderSummary";
import { ProductsInCart } from "./ui/ProductsInCart";

export default function CartPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar más items</span>
            <Link href="/" className="underline mb-5">
              Continúa comprando
            </Link>

            <ProductsInCart />
          </div>

          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
