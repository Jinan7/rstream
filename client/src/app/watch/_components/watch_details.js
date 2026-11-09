import { Separator } from "@/components/ui/separator";
import { FaStar } from "react-icons/fa6";
import IconBackground from "@/app/_components/icon_background";
import { Bookmark, Download, Heart, Star } from "lucide-react";

export default function WatchDetails() {
    return (
        <div className="watch-description flex flex-row items-center gap-3 sm:gap-4 px-2 mt-4 sm:px-7 sm:mt-7">
            <p className="text-[20px] sm:text-[72px] font-bold">7.2</p>
            <Separator orientation="vertical" className="bg-black"/>
            <div className="flex flex-col grow self-start">
                <div className="flex flex-row justify-between lg:justify-start items-center lg:gap-50">
                    <p className="text-[15px] sm:text-[25px] lg:text-[34px] basis-1/2">A knight of the Seven Kingdoms</p>
                    <div className="flex flex-row gap-2 sm:gap-5">
                        <IconBackground className="bg-gray-300 size-[30px] sm:size-[40px]">
                            <Bookmark className="size-[16px] sm:size-[24px]"/>
                        </IconBackground>
                        <IconBackground className=" bg-gray-300 size-[30px] sm:size-[40px]">
                            <Heart className="size-[16px] sm:size-[24px]"/>
                        </IconBackground>
                        <IconBackground className="bg-gray-300 size-[30px] sm:size-[40px]">
                            <Download className="size-[16px] sm:size-[24px]"/>
                        </IconBackground>
                    </div>
                </div>
                <p className="text-[12px]">2026</p>
                <div className="flex flex-row">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
            </div>
        </div>
    )
}