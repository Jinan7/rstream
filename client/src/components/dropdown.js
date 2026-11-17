'use client'
import { LogOut, UserRound } from "lucide-react";
import DropdownButton from "./dropdown_button";
import { useNavDropdownState } from "../app/(with_nav)/_context/navbar_context";
import ProfileDropdown from "./profile_dropdown";
import NotificationsDropdown from "./notifications_dropdown";

export default function Dropdown() {

    let state = useNavDropdownState()

    return (
        <div className={` ${ state.visible ? "visible" : "collapse" } w-50 bg-rbackground absolute top-full right-0 mt-1 rounded-[4px] px-4 py-4 z-99 border-[1px] border-[#e3e1d1]`}>
            <div className="flex flex-col gap-4">
                {
                
                    state.id === 'profile' ? 
                        <ProfileDropdown/> :
                    state.id === 'notifications' ?
                        <NotificationsDropdown/> :
                        <div/>
                }
            </div>
        </div>
    )
}