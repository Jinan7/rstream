import { Bell } from "lucide-react";
import NavButton from "./nav_button";
import { useShowNavDropdownDispatch } from "@/app/(with_nav)/_context/navbar_context";
import { handleToggleNavDropdown } from "@/app/(with_nav)/_lib/nav_dropdown_reducer";

export default function NotificationButton() {

    let dispatch = useShowNavDropdownDispatch()
    
    let toggleNavDropdown = () => {
        handleToggleNavDropdown(dispatch, 'notifications')
    }
    return (
        <NavButton onClick={toggleNavDropdown}><Bell className="mx-[16px] size-[16px]"/></NavButton>
    )
}