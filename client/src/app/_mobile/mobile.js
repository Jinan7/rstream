import { Menu } from "lucide-react"
import SearchBar from "@/app/_components/searchbar"
import Notification from "@/app/_components/notification"
import Profile from "@/app/_components/profile"
import NavBarMobile from "@/app/_mobile/components/navbar"
import BannerCarousel from "./components/banner_carousel"
import MovieSection from "../_components/movie_section"
import MovieCategories from "../_components/movie_categories"
import SideBarMobile from "./components/sidebar"
import SideBarProvider from "../_context/sidebar_context"

export default function Mobile() {
    let data = {
        section_name: "Animations"
    }
    return (
        <div className="w-full min-h-full">
            <SideBarProvider>
                <NavBarMobile/>
            </SideBarProvider>
            <div className="w-full h-full mt-4 px-4 flex flex-col gap-6">
                <BannerCarousel/>
                <div className="flex flex-col gap-2">
                    <MovieCategories/>
                    <MovieSection data={data}/>
                    <MovieSection data={data}/>
                    <MovieSection data={data}/>
                    <MovieSection data={data}/>
                </div> 
                 
            </div>
        </div>
    )
}