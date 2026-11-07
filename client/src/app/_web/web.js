import { Menu } from "lucide-react"
import SearchBar from "@/app/_components/searchbar"
import Notification from "@/app/_components/notification"
import Profile from "@/app/_components/profile"
import NavBarWeb from "@/app/_web/components/navbar"
import BannerCarousel from "./components/banner_carousel"
import MovieCategories from "../_components/movie_categories"
import MovieSection from "../_components/movie_section"
import SideBar from "../_components/sidebar"
import SideBarScreen from "../_components/sidebar_screen"
import PseudoSideBar from "../_components/pseudo_sidebar"

export default function Web() {
    let data = {
        section_name: "Animations"
    }

    return (
        // nav bar
        <div className="relative">
            <NavBarWeb/>
            <div className="flex flex-row gap-6 px-4">
                <PseudoSideBar/>
                <div className="flex flex-col gap-8 grow"
                    
                >
                    <BannerCarousel/>
                    <div className="flex flex-col gap-5">
                        <MovieSection data={data}/>
                        <MovieSection data={data}/>
                        <MovieSection data={data}/>
                        <MovieSection data={data}/>
                    </div> 
                </div> 
            </div>   
        </div>
    )
}