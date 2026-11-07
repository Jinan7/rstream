import MovieCategoryIcon from "@/app/_components/movie_category_icon"
import { useEffect } from "react"
import { useCatogoriesContext, useSelectedCategory } from "../_context/context"
export default function MovieCategories() {

    let categories = useCatogoriesContext()
    categories = [
        {
            id: "movies",
            genre: "movies"
        },
        {
            id: "tv series",
            genre: "tv series"
        },
        ...categories, 
    ]

    let selected = useSelectedCategory();
    console.log(`selected ${selected}`)
    return (
        <div className="movie-categories-wrapper grow overflow-auto scrollbar-none">
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