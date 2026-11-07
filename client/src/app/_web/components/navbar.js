import { Menu } from "lucide-react"
import NavBar from "@/app/_components/navbar"
import SearchBar from "@/app/_components/searchbar"
import Notification from "@/app/_components/notification"
import Profile from "@/app/_components/profile"
import NavSecondaryIcons from "@/app/_components/nav_secondary_icons"
import MovieCategories from "@/app/_components/movie_categories"
import SideBarScreen from "@/app/_components/sidebar_screen"
import { useState } from "react"



export default function NavBarWeb() {

    let [showSideBar, setShowSideBar ] = useState(false);

    const handleShowSideBar = function(e) {
        setShowSideBar(true)
    }

    return (
            <NavBar>
                <Menu className="shrink-0 xl:collapse" onClick={handleShowSideBar}/>
                <SearchBar className="w-100"/>
                <MovieCategories/>
                <NavSecondaryIcons/>
                <SideBarScreen visible={showSideBar} setShowSideBar={setShowSideBar}/>
            </NavBar>   
    )
}