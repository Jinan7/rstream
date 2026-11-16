'use client'
import Link from "next/link";
import MovieCard from "./_components/movie_card";
import PseudoSideBar from "./_components/pseudo_sidebar";
import { Dot, Edit, Eye, Plus } from "lucide-react";
import AddNewMovie from "./_components/add_new_movie_button";
import Button from "@/app/_components/button";
import { usePathname } from "next/navigation";

export default function AdminConsole() {

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
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </div> 
        </div>
        
    )
}