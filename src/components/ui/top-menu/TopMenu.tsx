'use client'

import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store/ui/ui-store";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

export const TopMenu = () => {

  const openSideMenu = useUIStore((state) => state.openSideMenu);

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
          href="/category/men" >Men
        </Link>
        <Link 
          className="m-2 rounded-md transition-all hover:bg-gray-100" 
          href="/category/women" >Women
        </Link>
        <Link 
          className="m-2 rounded-md transition-all hover:bg-gray-100" 
          href="/category/kid" >Kids
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
          href="/cart" >
            <div className="relative">
              <span className="absolute  -top-2 -right-2 px-1 text-xs font-bold  bg-green-600 rounded-full text-white">9</span>
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
