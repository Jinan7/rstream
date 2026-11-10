
// import Notification from "@/app/_components/notification";
import Profile from "@/app/_components/profile";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Notification from "./notification";
import NavBarContextProvider from "../_context/navbar_context";

export default function NavSecondaryIcons() {

    return (
        <div className="flex flex-row shrink-0 gap-3">
            <Notification/>
            <Profile/>            
        </div>   
    )
}