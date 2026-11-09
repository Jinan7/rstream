'use client'
import MovieCategoryIcon from "@/app/_components/movie_category_icon"
import { useEffect, useState } from "react"
import { useCatogoriesContext, useSelectedCategory } from "../_context/context"
import { getGenres } from "../_lib/api"
export default function MovieCategories({ className }) {

    let [categories, setCategories] = useState([]);
    

    useEffect(() => {

        (async () => {
            let data = await getGenres()
            data = [
                {
                    id: "movies",
                    genre: "movies"
                },
                {
                    id: "tv series",
                    genre: "tv series"
                },
                ...data, 
            ]
            setCategories(data)
        })()
    }, [])
    let selected = useSelectedCategory();
    console.log(`selected ${selected}`)
    return (
        <div className={`movie-categories-wrapper sm:grow max-w-full overflow-auto scrollbar-none ${className}`}>
            <div className="movie-categories flex gap-5">
                
                {
                    categories.map((category) => 
                        <MovieCategoryIcon
                            key={category.id}
                            id={category.id}
                            label={category.genre}
                            selected={selected}
                        />
                    )
                }
                
            </div>
        </div>
    )
}