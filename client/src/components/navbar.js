'use client'
import { SearchIcon } from "lucide-react"
import Dropdown from "./dropdown"
import NavBarContextProvider, { useShowNavDropdown } from "../app/_context/navbar_context"
import Link from "next/link"
import NavOption from "./nav_option"
import ProfileButton from "./profile_button"
import NotificationButton from "./notification_button"

export default function NavBar({ children }) {
   
    return (
        <NavBarContextProvider>
            <div className="flex justify-start h-[52px] w-full sticky top-0 z-99 bg-[#f9f9f9]">
                <Link href="/" className="px-[16px] flex items-center font-erica-one text-rsurface">
                    <p>rstream</p>
                </Link>
                <div className="flex items-center">
                    <div className="h-[40px] w-[540px] border-[1px] rounded-[8px] border-[#656871] flex items-center">
                        <label className="ml-[10px]">
                            <SearchIcon/>
                        </label>
                        <input type="search" className="mx-[10px] grow" placeholder="Search"/>
                    </div>
                </div>
                <div className="flex items-center">
                    <NavOption label={"Movies"}/>
                    <NavOption label={"Series"}/>
                </div>
                <div className="flex items-center grow justify-end">
                    <NotificationButton/>
                    <ProfileButton/>
                </div>
                <Dropdown/>
            </div>
        </NavBarContextProvider>
        
    )
}