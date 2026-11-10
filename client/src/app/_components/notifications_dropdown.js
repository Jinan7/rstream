import { Mail } from "lucide-react";
import DropdownButton from "./dropdown_button";

export default function NotificationsDropdown() {
    return (
        <div className="flex flex-col gap-4">
            <DropdownButton label={"Messages"}>
                <Mail/>
            </DropdownButton>
        </div>
    )
}