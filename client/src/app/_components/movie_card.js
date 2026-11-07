import { Play } from "lucide-react";
import IconBackground from "./icon_background";

export default function MovieCard({ data }) {

    let { image_url, title, year } = data;

    return (
        <div className={`relative rounded-md bg-[url(${image_url})] h-full bg-red-500 bg-center bg-no-repeat bg-origin-border bg-cover overflow-hidden`}>
            <div className="absolute bottom-0 px-4 py-4 w-full bg-black/50">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col">
                        <p className="text-white text-[14px] font-semibold">{title}</p>
                        <p className="text-white text-[10px]">{year}</p>
                    </div>
                    <IconBackground background="bg-rsurface">
                        <Play className="text-white" size={16}/>
                    </IconBackground>
                </div>
            </div>
        </div>
    )
}