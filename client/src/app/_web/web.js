import { Menu } from "lucide-react"
import SearchBar from "@/app/_components/searchbar"
import Notification from "@/app/_components/notification"
import Profile from "@/app/_components/profile"
import NavBarWeb from "@/app/_web/components/navbar"
import BannerCarousel from "../_components/banner_carousel"
export default function Web() {
    return (
        // nav bar
        <div>
            <NavBarWeb/>
            <div className="px-4">
                <BannerCarousel/>
            </div>
            
        </div>
    )
}