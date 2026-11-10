'use client'
import IconBackground from "@/app/_components/icon_background"
import {
    Bell
} from 'lucide-react'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,

} from "@/components/ui/input-group"
import Dropdown from "./dropdown"
import { useState } from "react"
import { useShowNavDropdownDispatch } from "../_context/navbar_context"
import { handleToggleNavDropdown } from "../_lib/nav_dropdown_reducer"
export default function Notification() {

    let dispatch = useShowNavDropdownDispatch()
    
    let toggleNavDropdown = () => {
        handleToggleNavDropdown(dispatch, 'notifications')
    }
    return (
        <div className={`relative`}>
            <IconBackground className="bg-white size-[30px]" onClick={toggleNavDropdown}>
                <Bell className="size-[16px]" />
            </IconBackground>
        </div>

    )
}