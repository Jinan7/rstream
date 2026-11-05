import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Banner from "./banner";
import WatchButton from "./watch_button";
import DownloadButton from "./download_button";

export default function BannerCarousel({ children }) {
    const banners = [
        {
            url: "./images/avatar_fire_and_ash.jpg",
            title: "AVATAR 3: FIRE AND ASH",
            release_year: 2023,
            duration: 3,
            rating: 8.2,
            description: ""
        },
        {
            url: "/images/avatar_fire_and_ash.jpg",
            title: "AVATAR 3: FIRE AND ASH",
            release_year: 2026,
            duration: 3,
            rating: 8.2,
            description: ""
        },
        {
            url: "/images/avatar_fire_and_ash.jpg",
            title: "AVATAR 3: FIRE AND ASH",
            release_year: 2019,
            duration: 3,
            rating: 8.2,
            description: ""
        }
    ]

    return (
        <Carousel orientation="vertical" className="bg-blue-300 h-100 w-full rounded-20">
            <CarouselContent className="h-100 rounded-20 -mt-0">
                {
                    banners.map( data => 
                        <CarouselItem className="basis-1/1 pt-0">
                            <Banner 
                                image_url={data.url}
                            />
                        </CarouselItem>
                    )
                }
        
            </CarouselContent>
            <CarouselPrevious className="top-3/10 left-9/10"/>
            <CarouselNext className="bottom-3/10 left-9/10"/>
    

            <div className="absolute bottom-4 left-4 w-6/10 flex flex-col gap-6">
                <div className="movie-info flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-rsurface-text text-[25px] font-extrabold">AVATAR 3: FIRE AND ASH</h1>
                        <div className="movie-meta-data flex flex-row items-center gap-1.5">
                            <p className="text-rsurface-text">2023</p>
                            <div className="dot size-1.5 rounded-full bg-white"></div>
                            <p className="text-rsurface-text">3 hrs</p>
                            <div className="dot size-1.5 rounded-full bg-white"></div>
                            <p className="text-rsurface-text">IMDB 8.3<span>/10</span></p>
                        </div>
                    </div>
                    <p className="movie-summary text-rsecondary-text text-[16px]">
                        Avatar: Fire and Ash is an epic sci-fi adventure that continues
                        the journey of Jake Sally and Neytiri as they protect their family
                        and Pandora from growing threats
                    </p>      
                </div>
                <div className="banner-buttons flex flex-row gap-4">
                    <WatchButton/>
                    <DownloadButton/>
                </div>
            </div>
        </Carousel>
    )
}