import { Bookmark, Heart, Home, Inbox, Mail, MessageSquare } from "lucide-react";
import SideBarItem from "../_web/components/sidebar_item";
import { Separator } from "@/components/ui/separator";
import ContinueWatchingCard from "../_web/components/continue_watching_card";

export default function PseudoSideBar() {
    return (
        <div className="bg-white h-full w-75 px-6 pt-10 pb-40 rounded-[24] collapse xl:visible">
            <div className="flex flex-col gap-6">
                <SideBarItem label="Home">
                    <Home/>
                </SideBarItem>
                <SideBarItem label="Favorite">
                    <Heart/>
                </SideBarItem>
                <SideBarItem label="Watchlist">
                    <Bookmark/>
                </SideBarItem>    
            </div>
            <Separator className="mt-8"/>
            <div className="flex flex-col gap-4 my-4">
                <SideBarItem label="Messages">
                    <Mail/>
                </SideBarItem>
                   
            </div>
            <Separator className="mb-8"/>
            <p className="text-[14px] font-semibold ">Continue watching</p>
            <div className="flex flex-col gap-8 mt-6">
                <ContinueWatchingCard image_url="" />
                <ContinueWatchingCard image_url="" />
                <ContinueWatchingCard image_url="" />
                <ContinueWatchingCard image_url="" />
                <ContinueWatchingCard image_url="" />
            </div>
        </div>
    )
}