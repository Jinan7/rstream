import { UserRound } from "lucide-react";
import NavButton from "./nav_button";
import { useShowNavDropdownDispatch } from "@/app/(with_nav)/_context/navbar_context";
import { handleToggleNavDropdown } from "@/app/(with_nav)/_lib/nav_dropdown_reducer";

export default function ProfileButton() {
    const dispatch = useShowNavDropdownDispatch()

    
    const toggleNavDropDown = () => {
        handleToggleNavDropdown(dispatch, 'profile')
    }
    return (
        <NavButton onClick={toggleNavDropDown}><UserRound className="mx-[16px] size-[16px]"/></NavButton>
    )
}