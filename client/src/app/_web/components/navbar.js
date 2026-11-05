import { Menu } from "lucide-react"
import NavBar from "@/app/_components/navbar"
import SearchBar from "@/app/_components/searchbar"
import Notification from "@/app/_components/notification"
import Profile from "@/app/_components/profile"
import NavSecondaryIcons from "@/app/_components/nav_secondary_icons"
import MovieCategories from "@/app/_components/movie_categories"

export default function NavBarWeb() {
    return (
            <NavBar className="nav flex items-center gap-4 bg-red-100">
                <Menu className="shrink-0"/>
                <SearchBar/>
                <MovieCategories/>
                <NavSecondaryIcons/>
            </NavBar>   
    )
}