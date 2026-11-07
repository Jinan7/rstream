import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import MovieCard from "./movie_card";

export default function MovieSectionCarousel() {
    const movies = [
        {
            id: 1,
            image_url:"/images/avatar_fire_and_ash.jpg",
            title:"Money Heist",
            year:2019,
        },
        {
            id: 2,
            image_url:"/images/avatar_fire_and_ash.jpg",
            title:"Money Heist",
            year:2019,
        },
        {
            id: 3,
            image_url:"/images/avatar_fire_and_ash.jpg",
            title:"Money Heist",
            year:2019,
        },
        {
            id: 4,
            image_url:"/images/avatar_fire_and_ash.jpg",
            title:"Money Heist",
            year:2019,
        },
        {
            id: 5,
            image_url:"/images/avatar_fire_and_ash.jpg",
            title:"Money Heist",
            year:2019,
        },
        {
            id: 6,
            image_url:"/images/avatar_fire_and_ash.jpg",
            title:"Money Heist",
            year:2019,
        },
        {
            id: 7,
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
            <CarouselContent className="h-40">
                {
                    movies.map( data => 
                        <CarouselItem key={data.id} className="basis-2/3 sm:basis-1/4">
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