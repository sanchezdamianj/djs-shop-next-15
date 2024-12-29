'use client'


import { useUIStore } from "@/store/ui/ui-store"
import clsx from "clsx"
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5"
import { SideBarItem } from "./SideBarItem"

export const SideBar = () => {

    const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
    const closeMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div className="">
        {
            isSideMenuOpen &&
                <div 
                    onClick={closeMenu}
                    className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
                />
        }
        {
            isSideMenuOpen &&
              <div className="fade-in fixed top-0 left-0 h-screen z-10 blackdrop-filter backdrop-blur-sm" />
       
        }

        <nav className={
            clsx(
                "fixed p-5 right-0 top-0 h-screen bg-white w-[500px] z-20 shadow-2xl transform transition-all duration-300",
                {
                    'translate-x-full': !isSideMenuOpen,
                }
            )} 
        >
            <IoCloseOutline 
                size={50}
                className="absolute top-5 right-5 cursor-pointer"
                onClick={closeMenu}
            />

            <div className="relative mt-14">
                <IoSearchOutline 
                    size={20}
                    className="absolute top-2 left-2 cursor-pointer"
                />
                <input 
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:border-blue-500"
                />
            </div>

            <SideBarItem icon={IoPersonOutline} text="Profile" href="/profile" />
            <SideBarItem icon={IoTicketOutline} text="Orders" href="/orders" />
            <SideBarItem icon={IoLogInOutline} text="Login" href="/login" />
            <SideBarItem icon={IoLogOutOutline} text="Logout" href="/logout" />

            <div className="w-full h-px bg-gray-200 my-10" />

            <SideBarItem icon={IoShirtOutline} text="Products" href="/products" />
            <SideBarItem icon={IoTicketOutline} text="Orders" href="/orders" />
            <SideBarItem icon={IoPeopleOutline} text="Users" href="/users" />
        </nav>
    </div>
  )
}
