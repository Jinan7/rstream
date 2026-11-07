
export default function MovieCategoryIcon({ label, selected, id }) {

    return (
        <div className={`movie-category-icon inline-flex items-center justify-center rounded-full px-2 py-1 shrink-0 ${selected === id && "bg-rsurface text-rsurface-text"}`}>
            <p className="text-[14px] font-semibold capitalize">{label}</p>
        </div>
    )
}