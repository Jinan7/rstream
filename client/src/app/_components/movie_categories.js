import MovieCategoryIcon from "@/app/_components/movie_category_icon"
export default function MovieCategories() {

    return (
        <div className="movie-categories-wrapper">
            <div className="movie-categories">
                <MovieCategoryIcon
                    label={'Movies'}
                />
            </div>
        </div>
    )
}