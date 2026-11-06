import { Menu } from "lucide-react"
import NavBar from "@/app/_components/navbar"
import SearchBar from "@/app/_components/searchbar"
import Notification from "@/app/_components/notification"
import Profile from "@/app/_components/profile"
import NavSecondaryIcons from "@/app/_components/nav_secondary_icons"
import MovieCategories from "@/app/_components/movie_categories"

export default function NavBarWeb() {
    return (
            <NavBar>
                <Menu className="shrink-0 xl:collapse"/>
                <SearchBar className="w-100"/>
                <MovieCategories/>
                <NavSecondaryIcons/>
            </NavBar>   
    )
}