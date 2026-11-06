import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Banner from "../../_components/banner";
import WatchButton from "../../_components/watch_button";
import DownloadButton from "../../_components/download_button";
import Autoplay from "embla-carousel-autoplay"
import { Dot } from "lucide-react";

export default function BannerCarousel({ children }) {
    const banners = [
        {
            url: "/images/avatar_fire_and_ash.jpg",
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
        <div>   
            <Carousel 
                orientation="horizontal" className="h-50 w-full"
                opts={{
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 10000
                    })
                ]}
            >
                <CarouselContent className="h-50">
                    {
                        banners.map( data => 
                            <CarouselItem className="basis-1/1">
                                <Banner 
                                    image_url={data.url}
                                />
                            </CarouselItem>
                        )
                    }
            
                </CarouselContent>
                <CarouselPrevious className=""/>
                <CarouselNext className=""/>
        

            </Carousel>
        </div>
       
        
    )
}