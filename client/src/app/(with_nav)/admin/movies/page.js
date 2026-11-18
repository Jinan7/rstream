'use client'
import Link from "next/link";
import MovieCard from "./_components/movie_card"
import { Dot, Edit, Eye, Plus } from "lucide-react";
import AddNewMovie from "./_components/add_new_movie_button";
import Button from "@/app/(with_nav)/_components/button";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getMovies } from "./lib/api";

export default function AdminConsole() {

    let [movies, setMovies] = useState([])
    useEffect(() => {

        (async () => {
            let data = await getMovies()
            console.log(data.movies)
            setMovies(data.movies)
        })()
    }, [])
    const path = usePathname()
    return (
        <div className="h-full">
            <div className="flex justify-between px-[20px] pt-[12px] pb-[8px]">
                <p className="text-[20px] font-bold">Movies</p>
                <Link href={`${path}/new`}>
                    <Button label={"Add"} variant={'dark'}/>
                </Link>
            </div>
            <div className="flex flex-col gap-[20px] px-[20px]">  

                {
                    movies.map( (movie) => {
                        return <MovieCard key={movie.id} movie={movie}/>
                    })
                }       
                
            </div> 
        </div>
        
    )
}