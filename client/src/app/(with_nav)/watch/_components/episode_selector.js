import { Separator } from "@/components/ui/separator";
import { ArrowBigDown, ArrowDownNarrowWide, ChevronDown } from "lucide-react";
import EpisodeItem from "./episode_item";
import { useRef } from "react";

export default function EpisodeSelector({ className, ref }) {

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
        {
            id: 7,
            index: 7,
            title: "The Morrow",
        },
        {
            id: 8,
            index: 8,
            title: "The Morrow",
        },
        {
            id: 9,
            index: 9,
            title: "The Morrow",
        },
        {
            id: 10,
            index: 10,
            title: "The Morrow",
        },
        {
            id: 12,
            index: 12,
            title: "The Morrow",
        },
        {
            id: 13,
            index: 13,
            title: "The Morrow",
        },
        {
            id: 14,
            index: 14,
            title: "The Morrow",
        },
        {
            id: 15,
            index: 15,
            title: "The Morrow",
        },
        {
            id: 16,
            index: 16,
            title: "The Morrow",
        },
    ]
    return (<div className={` bg-on-rsecondary ${ className }`}>
        <div className="" ref={ref}>
            <div className="flex flex-row justify-between px-4 pt-4">
                <p className="text-white">Items: 15</p>
                <div className="flex flex-row items-center gap-2">
                    <p className="text-white">Season 1</p>
                    <ChevronDown className="text-white" size={14}/>
                </div>
            </div>
            <Separator className="bg-white mt-4"/>
            <div className="max-h-100 px-4 pt-4 pb-6 flex flex-col gap-2 overflow-auto scrollbar-thumb-white">
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
        </div>
        
    </div>)
}