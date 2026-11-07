import { Menu } from "lucide-react"
import SearchBar from "@/app/_components/searchbar"
import Notification from "@/app/_components/notification"
import Profile from "@/app/_components/profile"
import NavSecondaryIcons from "@/app/_components/nav_secondary_icons"
import SideBarScreen from "./sidebar_screen"

export default function NavBar({ children }) {
    return (
        <div className="relative nav-wrapper px-4 py-3 sticky top-0 z-98 bg-rbackground">
            <div className="nav w-full flex items-center gap-4">
                {children}
            </div>
        </div>
    )
}