'use client'

import { titleFont } from "@/config/fonts";
import { useCartStore } from "@/store/cart/cart-store";
import { useUIStore } from "@/store/ui/ui-store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

export const TopMenu = () => {

  const openSideMenu = useUIStore((state) => state.openSideMenu);

  const totalItems = useCartStore((state) => state.getTotalItems());

  //to avoid hydration issue, we call this effect after the first render, so the ui can be re-hydrated correctly in cart icon quantity.
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      <div>
        <Link href="/" >
         <span className={`${titleFont.className} antialiased font-bold`}
         >DjS
         </span>
         <span> | Shop</span>
        </Link>
      </div>

      <div className="hidden sm:block">
        <Link 
          className="m-2 rounded-md transition-all hover:bg-gray-100" 
          href="/gender/men" >Men
        </Link>
        <Link 
          className="m-2 rounded-md transition-all hover:bg-gray-100" 
          href="/gender/women" >Women
        </Link>
        <Link 
          className="m-2 rounded-md transition-all hover:bg-gray-100" 
          href="/gender/kid" >Kids
        </Link>
      </div>

      <div className="flex items-center">
        <Link 
          className="mx-2 "
          href="/search" >
            <IoSearchOutline  className="w-5 h-5"/>
        </Link>
        <Link 
          className="mx-2"   
          href={ (totalItems > 0 && loaded) ? "/cart" : "/empty"}>
            <div className="relative">
              <span className="absolute  -top-2 -right-2 px-1 text-xs font-bold  bg-green-600 rounded-full text-white">
                {
                 ( loaded && totalItems > 0) && totalItems
                }
                </span>
              <IoCartOutline  className="w-5 h-5"/>
            </div>
        </Link>

        <button
          className="m-2 rounded-md transition-all hover:bg-gray-100"
          onClick={openSideMenu}
        >
          Menu
        </button>
      </div>
    </nav>
  )
}
