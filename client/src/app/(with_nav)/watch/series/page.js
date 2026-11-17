import EpisodeCard from "../_components/episode_card";
import ForYouCard from "../_components/for_you_card";
import WatchResponsive from "../responsive";

export default function Watch() {
    return (
        <div>
            <div className="flex flex-row gap-[20px] ">
                <div className="">
                    <div className="border-rborder border-[1px] rounded-[2px] bg-white h-[600px]">
                        <video className="h-[540px] aspect-video bg-black controls"/>
                        <div className="px-[20px] py-[12px]">
                            <p className="font-bold text-[20px]">A knight of the Seven Kingdoms</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px] min-w-[400px] grow">
                    <div className="border-rborder border-[1px] rounded-[2px] grow bg-white h-[600px] overflow-hidden pb-[20px] relative">
                        <p className="font-bold px-[20px] py-[12px]">Season 1</p>
                        <div className="flex h-full flex-col gap-[20px]  overflow-auto pb-[60px]">
                            <EpisodeCard index={1} playing={false}/>
                            <EpisodeCard index={2} playing={true}/>
                            <EpisodeCard index={3} playing={false}/>
                            <EpisodeCard index={4} playing={false}/>
                            <EpisodeCard index={5} playing={false}/>
                            <EpisodeCard index={6} playing={false}/>
                            <EpisodeCard index={7} playing={false}/>
                            <EpisodeCard index={8} playing={false}/>
                            <EpisodeCard index={9} playing={false}/>
                            <EpisodeCard index={10} playing={false}/>
                            <EpisodeCard index={11} playing={false}/>
                            <EpisodeCard index={12} playing={false}/>
                        </div>
                        <div className="h-[20px] w-full absolute bottom-0 bg-red-200 bg-white"></div>
                    </div>
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