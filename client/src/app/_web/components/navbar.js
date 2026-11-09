import { Menu } from "lucide-react"
import NavBar from "@/app/_components/navbar"
import SearchBar from "@/app/_components/searchbar"
import Notification from "@/app/_components/notification"
import Profile from "@/app/_components/profile"
import NavSecondaryIcons from "@/app/_components/nav_secondary_icons"
import MovieCategories from "@/app/_components/movie_categories"
import SideBarScreen from "@/app/_web/components/sidebar_screen"
import { useReducer, useState } from "react"
import { handleShowSideBar, showSideBarReducer } from "@/app/_lib/show_sidebar_reducer"
import { useShowSideBar, useShowSideBarDispatch } from "@/app/_context/sidebar_context"



export default function NavBarWeb() {

    const dispatch = useShowSideBarDispatch();

    const showSideBar = handleShowSideBar(dispatch)

    return (
            <NavBar>
                <Menu className="shrink-0 xl:collapse" onClick={showSideBar}/>
                <SearchBar className="w-100"/>
                <MovieCategories/>
                <NavSecondaryIcons/>
                <SideBarScreen/>
            </NavBar>   
    )
}