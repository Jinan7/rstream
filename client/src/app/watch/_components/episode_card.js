import { Play } from "lucide-react";
import { FaPlay } from "react-icons/fa";

export default function EpisodeCard({ index, playing }) {

    return (
        <div className="flex flex-row gap-[20px] px-[20px] items-center">
            {
                playing ? <FaPlay className="size-[12px]"/> : (<p>{index}</p>)
            }
            
            <div className="bg-black w-[50px] h-[50px]"/>
            <div className="flex flex-col gap-[4px]">
                <p className="text-[14px] font-bold">The Hedge Knight</p>
                <p className="text-[14px]">45 mins</p>
            </div>
        </div>
    )
}