import MovieCard from "@/app/_components/movie_card";
import ForYouCard from "./for_you_card";

export default function RecommendedSection({ className }) {
    const data = {
            title: "A knight of the seven kingdoms",
            year: 2019,
            image_url: "/images/avatar_fire_and_ash.jpg"
        }

    return (
        <div className={`flex flex-col gap-2  ${className}`}>
            <p className="text-[16px] font-semibold mx-1">For You</p>
            <div className={`grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4`}>
                <ForYouCard data={data} className={"w-full aspect-9/16"}/>
                <ForYouCard data={data} className={"w-full aspect-9/16"}/>
                <ForYouCard data={data} className={"w-full aspect-9/16"}/>
                <ForYouCard data={data} className={"w-full aspect-9/16"}/>
                <ForYouCard data={data} className={"w-full aspect-9/16"}/>
                <ForYouCard data={data} className={"w-full aspect-9/16"}/>
                <ForYouCard data={data} className={"w-full aspect-9/16"}/>
                <ForYouCard data={data} className={"w-full aspect-9/16"}/>
                <ForYouCard data={data} className={"w-full aspect-9/16"}/>
                <ForYouCard data={data} className={"w-full aspect-9/16"}/>
                <ForYouCard data={data} className={"w-full aspect-9/16"}/>
                <ForYouCard data={data} className={"w-full aspect-9/16"}/>
                <ForYouCard data={data} className={"w-full aspect-9/16"}/>
                <ForYouCard data={data} className={"w-full aspect-9/16"}/>
                <ForYouCard data={data} className={"w-full aspect-9/16"}/>
                <ForYouCard data={data} className={"w-full aspect-9/16"}/>
                <ForYouCard data={data} className={"w-full aspect-9/16"}/>
                <ForYouCard data={data} className={"w-full aspect-9/16"}/>
                <ForYouCard data={data} className={"w-full aspect-9/16"}/>
            </div>

        </div>
        
    )
}