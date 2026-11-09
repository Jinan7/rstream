import MovieSectionCarousel from "./movie_section_carousel"

export default function MovieSection({ label, className, aspect }) {

    
    return (
        <div className="flex flex-col gap-1">
            <div className="flex flex-row justify-between px-1">
                <p className="text-[14px] font-semibold">{label}</p>
                <p className="text-[14px]">More</p>
            </div>
            <MovieSectionCarousel className={className} aspect={aspect}/>
        </div>
    )
}