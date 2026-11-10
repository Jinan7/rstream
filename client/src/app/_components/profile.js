import IconBackground from "@/app/_components/icon_background"
import {
    UserRound
} from 'lucide-react'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,

} from "@/components/ui/input-group"
import { useState } from "react"
import Dropdown from "./dropdown"
import { useShowNavDropdownDispatch } from "../_context/navbar_context"
import { handleToggleNavDropdown } from "../_lib/nav_dropdown_reducer"
export default function Profile() {
    
    
    const dispatch = useShowNavDropdownDispatch()

    
    const toggleNavDropDown = () => {
        handleToggleNavDropdown(dispatch, 'profile')
    }
    return (
        <div className={`relative`}>
            <IconBackground className="bg-white size-[30px]" onClick={toggleNavDropDown}>
                <UserRound className="size-[16px]" />
            </IconBackground>
        </div>

    )
}