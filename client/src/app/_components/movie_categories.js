import MovieCategoryIcon from "@/app/_components/movie_category_icon"
export default function MovieCategories() {

    return (
        <div className="movie-categories-wrapper grow overflow-auto scrollbar-none">
            <div className="movie-categories flex gap-5">
                <MovieCategoryIcon
                    label={'Movies'}
                    selected={true}
                />
                <MovieCategoryIcon
                    label={'TV Series'}
                    selected={false}
                />
                <MovieCategoryIcon
                    label={'Animations'}
                    selected={false}
                />
                <MovieCategoryIcon
                    label={'Thriller'}
                    selected={false}
                />
                <MovieCategoryIcon
                    label={'Drama'}
                    selected={false}
                />
                <MovieCategoryIcon
                    label={'Crime'}
                    selected={false}
                />
                <MovieCategoryIcon
                    label={'Action'}
                    selected={false}
                />
            </div>
        </div>
    )
}