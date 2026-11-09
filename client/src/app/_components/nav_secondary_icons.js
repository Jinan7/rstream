import Notification from "@/app/_components/notification";
import Profile from "@/app/_components/profile";

export default function NavSecondaryIcons() {

    return (
        <div className="flex flex-row shrink-0 gap-3">
            <Notification/>
            <Profile/>
        </div>
    )
}