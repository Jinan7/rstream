import { Menu } from "lucide-react"
import NavBar from "@/app/_components/navbar"
import SearchBar from "@/app/_components/searchbar"
import Notification from "@/app/_components/notification"
import Profile from "@/app/_components/profile"
import NavSecondaryIcons from "@/app/_components/nav_secondary_icons"
import { useShowSideBarDispatch } from "@/app/_context/sidebar_context"
import { handleShowSideBar } from "@/app/_lib/show_sidebar_reducer"
import SideBarMobile from "./sidebar"

export default function NavBarMobile() {
    
    const dispatch = useShowSideBarDispatch();
    const showSideBar = handleShowSideBar(dispatch)

    return (
            <NavBar>
                <Menu className="shrink-0" onClick={showSideBar}/>
                <SearchBar/>
                <NavSecondaryIcons/>
                <SideBarMobile/>
            </NavBar>   
    )
}