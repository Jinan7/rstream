import { AspectRatio } from "@/components/ui/aspect-ratio";
import VideoContainer from "../_components/video_container";
import { Bookmark, Download, Heart, Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { FaStar } from "react-icons/fa6";
import IconBackground from "@/app/_components/icon_background";
import RecommendedSection from "../_components/recommended_section";
import EpisodeSelector from "../_mobile/_components/episode_selector";
import WatchDetails from "../_components/watch_details";

export default function WatchWeb() {

    
    return (<div className="min-h-screen">
        <VideoContainer/>
        <WatchDetails/>
        <EpisodeSelector className={"mt-10 xl:collapse xl:h-0 sm:mt-0"}/>
        <RecommendedSection className={"mt-10 px-7"}/>
    </div>)
}