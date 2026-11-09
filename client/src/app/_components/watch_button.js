import { Play } from "lucide-react";
import BannerButton from "./banner_button";
import Link from "next/link";

export default function WatchButton() {
    return (
        <Link href={"/watch"}>
            <BannerButton 
                className="bg-white"
                pclassName="text-rsecondary"
                label="Watch"
            >
                
                    <Play className="text-rsecondary" size={16}/>
            </BannerButton>
        </Link>
    )
}