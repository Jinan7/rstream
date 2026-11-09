import { Bookmark, Download, Heart, Home, Inbox, Mail, MessageSquare } from "lucide-react";
import SideBarItem from "../_web/components/sidebar_item";
import { Separator } from "@/components/ui/separator";
import ContinueWatchingCard from "../_web/components/continue_watching_card";

export default function PseudoSideBar() {
    return (
        <div className="bg-white max-h-screen mb-20 w-75 px-6 pt-10 pb-20 rounded-[24] collapse xl:visible fixed">
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
            <div className="flex flex-col gap-6 my-4">
                <SideBarItem label="Messages">
                    <Mail/>
                </SideBarItem>
                <SideBarItem label="Downloads">
                    <Download/>
                </SideBarItem>
            </div>
            <Separator className="mb-8"/>
            <p className="text-[14px] font-semibold ">Continue watching</p>
            <div className="flex h-100 overflow-scroll flex-col gap-8 mt-6 ">
                <ContinueWatchingCard image_url="" />
                <ContinueWatchingCard image_url="" />
                <ContinueWatchingCard image_url="" />
                <ContinueWatchingCard image_url="" />
                <ContinueWatchingCard image_url="" />
            </div>
        </div>
    )
}