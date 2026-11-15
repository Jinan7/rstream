import { Play } from "lucide-react";

export default function MovieCardPortrait({ image_url, title, year, className }) {


    return (
        <div className="rounded-[8px] overflow-hidden border-b-[2px] border-[1px] border-[#e3e1d1]">
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