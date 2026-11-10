'use client'
import { LogOut, UserRound } from "lucide-react";
import DropdownButton from "./dropdown_button";
import { useNavDropdownState } from "../_context/navbar_context";
import ProfileDropdown from "./profile_dropdown";
import NotificationsDropdown from "./notifications_dropdown";

export default function Dropdown() {

    let state = useNavDropdownState()

    return (
        <div className={` ${ state.visible ? "visible" : "collapse" } w-50 bg-white absolute top-full right-0 mt-1 rounded-sm px-4 py-4`}>
            <div className="flex flex-col gap-4">
                {
                    // if (state.id == 'profile') {
                    //     return (<ProfileDropdown/>)
                    // } else {
                    //     return (<NotificationsDropdown/>)
                    // }

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