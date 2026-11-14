import { Bell } from "lucide-react";
import NavButton from "./nav_button";
import { useShowNavDropdownDispatch } from "@/app/_context/navbar_context";
import { handleToggleNavDropdown } from "@/app/_lib/nav_dropdown_reducer";

export default function NotificationButton() {

    let dispatch = useShowNavDropdownDispatch()
    
    let toggleNavDropdown = () => {
        handleToggleNavDropdown(dispatch, 'notifications')
    }
    return (
        <NavButton onClick={toggleNavDropdown}><Bell className="mx-[16px]"/></NavButton>
    )
}