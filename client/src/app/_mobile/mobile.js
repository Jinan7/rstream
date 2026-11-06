import { Menu } from "lucide-react"
import SearchBar from "@/app/_components/searchbar"
import Notification from "@/app/_components/notification"
import Profile from "@/app/_components/profile"
import NavBarMobile from "@/app/_mobile/components/navbar"
import BannerCarousel from "./components/banner_carousel"

export default function Mobile() {
    return (
        <div className="w-full h-full">
            <NavBarMobile/>
            <div className="w-full h-full mt-4 px-4">
                <BannerCarousel/>
                
            </div>
        </div>
    )
}