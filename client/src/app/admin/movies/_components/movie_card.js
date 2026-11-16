import { Dot, Edit, Eye } from "lucide-react";
import Link from "next/link";

export default function MovieCard() {

    return (
        <div className="flex flex-row gap-[20px] bg-white border-rborder border-[1px] rounded-[2px] overflow-hidden grow pr-[20px]">
            <div className=" w-[80px] aspect-9/16 "
                style={{
                    "background": `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${"/images/avatar_fire_and_ash.jpg"}) center/cover no-repeat`,
                }}  
            >
            </div>
            <div className="flex flex-col gap-1 justify-between grow py-[12px]">
                <div>
                    <p className="font-bold text-[16px]">The Godfather</p>
                    <div className="flex flex-row gap-1">
                        <p className="text-[14px]">1994</p>
                        <Dot/>
                        <p className="text-[14px]">2h 22m</p>
                    </div>
                </div>
                <div className="flex flex-row gap-1 items-center">
                    <Eye className="size-[16px]"/>
                    <p className="text-[14px]">2M</p>
                </div>
            </div>
            <Link className="flex items-center" href={"./edit"}>
                <Edit className="size-[16px]"/>
            </Link>
        </div>
    )
}