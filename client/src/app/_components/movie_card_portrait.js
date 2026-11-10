import { Play } from "lucide-react";

export default function MovieCardPortrait({ image_url, title, year, className }) {


    return (
        <div>
            <div className={`relative rounded-md ${className} bg-origin-border bg-cover overflow-hidden`}
            style={{
                "background": `url(${image_url}) center/cover no-repeat`,
            }}
            >
            </div>
            <div className="flex flex-col">
                <p className="text-[14px] font-semibold">{title}</p>
                <p className="text-[10px]">{year}</p>
            </div>  
        </div>
        
    )
}