import { Play } from "lucide-react";

export default function ForYouCard({ data, className }) {

    // let { image_url, title, year } = data;

    return (
        <div className="flex gap-[20px]">
            <div className="aspect-video w-70 bg-black rounded-[4px]"/>
            <div className="flex flex-col gap-[4px]">
                <p className="text-[14px] font-bold">The Godfather</p>
                <p className="text-[14px]">1994</p>
            </div>
        </div>
        
    )
}