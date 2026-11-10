'use client'
import Link from "next/link";
import MovieCard from "./_components/movie_card";
import PseudoSideBar from "./_components/pseudo_sidebar";
import { Plus } from "lucide-react";
import { usePathname } from "next/navigation";
import AddNewMovie from "./_components/add_new_movie_button";

export default function AdminConsole() {

    return (
        <div className="flex flex-row grow gap-4">         
            <div className="flex flex-col w-full gap-2">
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </div> 
            <AddNewMovie/>
        </div> 
    )
}