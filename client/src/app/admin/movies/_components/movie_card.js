import { Dot, Edit, Eye } from "lucide-react";
import Link from "next/link";

export default function MovieCard() {

    return (
        <div className="flex flex-row gap-4 px-2 py-2 rounded-[8px] border-on-rsecondary border-1 ">
            <div className=" w-15 aspect-9/16 rounded-[6px]"
                style={{
                    "background": `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${"/images/avatar_fire_and_ash.jpg"}) center/cover no-repeat`,
                }}  
            >
            </div>
            <div className="flex flex-col gap-1 justify-between grow">
                <div>
                    <p className="font-bold text-[18px]">The Godfather</p>
                    <div className="flex flex-row gap-1">
                        <p>1994</p>
                        <Dot/>
                        <p>2h 22m</p>
                    </div>
                </div>
                <div className="flex flex-row gap-1">
                    <Eye/>
                    <p>2M</p>
                </div>
            </div>
            <Link className="flex items-center" href={"./edit"}>
                <Edit/>
            </Link>
        </div>
    )
}