import EpisodeCard from "../_components/episode_card";
import ForYouCard from "../_components/for_you_card";
import WatchResponsive from "../responsive";

export default function Watch() {
    return (
        <div>
            <div className="flex flex-row gap-[20px] ">
                <div className="">
                    <div className="border-rborder border-[1px] rounded-[2px] bg-white">
                        <video className="h-[680px] aspect-video bg-black controls"/>
                        <div className="px-[20px] py-[12px]">
                            <p className="font-bold text-[20px]">A knight of the Seven Kingdoms</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px] min-w-[400px] grow">
                    
                    <div className="flex flex-col gap-[20px]">
                        <p className="font-bold">For you</p>
                        <div className="flex flex-col gap-[20px]">
                            <ForYouCard/>
                            <ForYouCard/>
                            <ForYouCard/>
                            <ForYouCard/>
                            <ForYouCard/>
                            <ForYouCard/>
                            <ForYouCard/>
                            <ForYouCard/>
                            <ForYouCard/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}