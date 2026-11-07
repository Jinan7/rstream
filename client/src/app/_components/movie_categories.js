import MovieCategoryIcon from "@/app/_components/movie_category_icon"
import { useEffect } from "react"
import { useCatogoriesContext } from "../_context/context"
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
    return (
        <div className="movie-categories-wrapper grow overflow-auto scrollbar-none">
            <div className="movie-categories flex gap-5">
                
                {
                    categories.map((category) => 
                        <MovieCategoryIcon
                            key={category.id}
                            id={category.id}
                            label={category.genre}
                            selected={"movies"}
                        />
                    )
                }
                
            </div>
        </div>
    )
}