import { Play } from "lucide-react";
import IconBackground from "./icon_background";

export default function MovieCard({ data, className }) {

    let { image_url, title, year } = data;

    return (
        <div className="rounded-[8px] overflow-hidden border-[1px] border-rborder">
            <div className={`relative ${className} bg-origin-border bg-cover overflow-hidden`}
            style={{
                "background": `url(${image_url}) center/cover no-repeat`,
            }}
            >
            </div>
            <div className="flex flex-col px-[8px] py-[10px]">
                <p className="text-[14px] font-semibold">{title}</p>
                <p className="text-[10px]">{year}</p>
            </div>  
        </div>
    )
}