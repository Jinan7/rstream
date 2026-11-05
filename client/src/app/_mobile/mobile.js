import { Menu } from "lucide-react"
import SearchBar from "@/app/_components/searchbar"
import Notification from "@/app/_components/notification"
import Profile from "@/app/_components/profile"
import NavBarMobile from "@/app/_mobile/components/navbar"
export default function Mobile() {
    return (
        // nav bar
        <div className="flex items-center gap-4 bg-red-100">
            <NavBarMobile/>
        </div>
    )
}