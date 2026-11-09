
import { FaPlay } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
export default function EpisodeItem({ id, selected, index, title }) {

    return (
        <div className={`flex flex-row gap-3 items-center ${id === selected && "ml-2"}`}>
            {
                (id === selected) ?
                <FaPlay className="text-white size-3"/>:
                <p className="text-white">{index}</p>
            }
            <Separator orientation="vertical" className={`${id === selected && "invisible"}`}/>
            <p className="text-white">The hedge knight</p>
        </div>
    )
}