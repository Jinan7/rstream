import { LogOut, UserRound } from "lucide-react";
import DropdownButton from "./dropdown_button";

export default function ProfileDropdown() {
    return (
        <div className="flex flex-col gap-4">
            <DropdownButton label={"Profile"}>
                <UserRound/>
            </DropdownButton>
            <DropdownButton label={"Sign Out"}>
                <LogOut/>
            </DropdownButton>
        </div>
    )
}