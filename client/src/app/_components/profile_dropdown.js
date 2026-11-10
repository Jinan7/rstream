import { Key, LogOut, UserRound } from "lucide-react";
import DropdownButton from "./dropdown_button";
import { Separator } from "@base-ui/react";

export default function ProfileDropdown() {
    
    return (
        <div className="flex flex-col gap-4">
            <DropdownButton label={"Profile"} href={""}>
                <UserRound/>
            </DropdownButton>
            <DropdownButton label={"Sign Out"} href={""}>
                <LogOut/>
            </DropdownButton>
            <Separator className={"bg-red-400"}/>
            <DropdownButton label={"Admin Console"} href={"/admin"}>
                <Key/>
            </DropdownButton>
        </div>
    )
}