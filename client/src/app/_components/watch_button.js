import { Play } from "lucide-react";
import BannerButton from "./banner_button";

export default function WatchButton() {
    return (
        <BannerButton 
            className="bg-white"
            pclassName="text-rsecondary"
            label="Watch"
        >
            <Play className="text-rsecondary" size={16}/>
        </BannerButton>
    )
}