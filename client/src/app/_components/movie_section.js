import MovieSectionCarousel from "./movie_section_carousel"

export default function MovieSection({ data }) {

    let { section_name } = data
    return (
        <div className="flex flex-col gap-1">
            <div className="flex flex-row justify-between px-1">
                <p className="text-[14px] font-semibold">{section_name}</p>
                <p className="text-[14px]">More</p>
            </div>
            <MovieSectionCarousel/>
        </div>
    )
}