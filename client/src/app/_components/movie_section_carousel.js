import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import MovieCard from "./movie_card";
import MovieCardPortrait from "./movie_card_portrait";

export default function MovieSectionCarousel({ aspect, className }) {
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
            orientation="horizontal" className=" w-full"
            opts={{
                align: "start",
                loop: true,
            }}
    
        >
            <CarouselContent className="">
                {
                    movies.map( data => 
                        <CarouselItem key={data.id} className={`${className}`}>
                            {
                                aspect === "aspect-16/9" ?
                                <MovieCard data={data} className={aspect}/> :
                                <MovieCardPortrait image_url={data.image_url} title={data.title} year={data.year} className={aspect}/>
                            }
                        </CarouselItem>
                    )
                }
            </CarouselContent>
            <CarouselPrevious className="left-4"/>
            <CarouselNext className="right-4"/>
    

        </Carousel>
    )
}