import SideBarItem from "@/app/_web/components/sidebar_item";
import { VideoIcon } from "lucide-react";

export default function PseudoSideBar() {
    return (
        <div className="bg-white max-h-screen mb-20 w-75 px-6 pt-10 pb-20 rounded-[24] collapse xl:visible fixed">
            <div className="flex flex-col gap-6">
                <SideBarItem label="Movies">
                    <VideoIcon/>
                </SideBarItem>   
            </div>
        </div>
    )
}