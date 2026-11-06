import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import MovieCard from "./movie_card";

export default function MovieSectionCarousel() {
    const movies = [
        {
            image_url:"/images/avatar_fire_and_ash.jpg",
            title:"Money Heist",
            year:2019,
        },
        {
            image_url:"/images/avatar_fire_and_ash.jpg",
            title:"Money Heist",
            year:2019,
        },
        {
            image_url:"/images/avatar_fire_and_ash.jpg",
            title:"Money Heist",
            year:2019,
        },
        {
            image_url:"/images/avatar_fire_and_ash.jpg",
            title:"Money Heist",
            year:2019,
        },
      
    ]
    return (
        <Carousel
            orientation="horizontal" className="h-40 w-full"
            opts={{
                align: "start",
                loop: true,
            }}
    
        >
            <CarouselContent className="h-40 bg-blue-100">
                {
                    movies.map( data => 
                        <CarouselItem className="basis-2/3">
                            <MovieCard data={data}/>
                        </CarouselItem>
                    )
                }
            </CarouselContent>
            <CarouselPrevious className="left-4"/>
            <CarouselNext className="right-4"/>
    

        </Carousel>
    )
}