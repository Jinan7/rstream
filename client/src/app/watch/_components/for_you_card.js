import { Play } from "lucide-react";

export default function ForYouCard({ data, className }) {

    let { image_url, title, year } = data;

    return (
        <div>
            <div className={`relative rounded-md bg-[url(${image_url})] ${className} bg-red-500 bg-center bg-no-repeat bg-origin-border bg-cover overflow-hidden`}
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