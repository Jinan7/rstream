import { Separator } from "@/components/ui/separator";
import { ArrowBigDown, ArrowDownNarrowWide, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import EpisodeItem from "./episode_item";

export default function EpisodeSelector({ className }) {

    const data = [
        {
            id: 1,
            index: 1,
            title: "The Hedge Knight",
        },
        {
            id: 2,
            index: 2,
            title: "Hard Salt Beef",
        },
        {
            id: 3,
            index: 3,
            title: "The Squire",
        },
        {
            id: 4,
            index: 4,
            title: "Seven",
        },
        {
            id: 5,
            index: 5,
            title: "In the Name of the Mother",
        },
        {
            id: 6,
            index: 6,
            title: "The Morrow",
        },
    ]
    return (<div className={`bg-on-rsecondary ${ className }`}>
        <div className="flex flex-row justify-center px-4 pt-4">
            <div className="flex flex-row  justify-between items-center gap-2 grow">
                <ChevronLeft className="text-white"/>
                <p className="text-white">Season 1</p>    
                <ChevronRight className="text-white"/> 
            </div>
        </div>
        <Separator className="bg-white mt-4"/>
        <div className="px-4 pt-4 pb-6 flex flex-col gap-2">
            {
                data.map(data => <EpisodeItem
                    key={data.id}
                    id={data.id}
                    selected={1}
                    index={data.index}
                    title={data.index}
                />)
            }
            
            
        </div>
    </div>)
}