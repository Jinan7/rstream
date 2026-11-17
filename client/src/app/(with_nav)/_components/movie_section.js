import MovieSectionCarousel from "./movie_section_carousel"

export default function MovieSection({ label, className, aspect }) {

    
    return (
        <div className="flex flex-col gap-1">
            <div className="flex flex-row justify-between px-1 border-l-[4px] border-rsurface mb-[4px]">
                <p className="text-[20px] font-bold">{label}</p>
            </div>
            <MovieSectionCarousel className={className} aspect={aspect}/>
        </div>
    )
}