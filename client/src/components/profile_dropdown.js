import { Key, LogOut, UserRound } from "lucide-react";
import DropdownButton from "./dropdown_button";
import { Separator } from "@base-ui/react";

export default function ProfileDropdown() {
    
    return (
        <div className="flex flex-col gap-4">
            <DropdownButton label={"Profile"} href={""}>
                <UserRound className="size-[16px]"/>
            </DropdownButton>
            <DropdownButton label={"Sign Out"} href={""}>
                <LogOut className="size-[16px]"/>
            </DropdownButton>
            <Separator className="bg-rborder h-[1px]"/>
            <DropdownButton label={"Admin Console"} href={"/admin/movies"}>
                <Key className="size-[16px]"/>
            </DropdownButton>
        </div>
    )
}