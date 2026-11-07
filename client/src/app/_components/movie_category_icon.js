import { useSetSelectedCategory } from "../_context/context"

export default function MovieCategoryIcon({ label, selected, id }) {

    let setSelectedCategory = useSetSelectedCategory()
    return (
        <div className={`movie-category-icon inline-flex items-center justify-center rounded-full px-2 py-1 shrink-0 ${selected === id && "bg-rsurface text-rsurface-text cursor-pointer"}`}
            onClick={(e) => setSelectedCategory(id)}
        >
            <p className="text-[14px] font-semibold capitalize cursor-pointer">{label}</p>
        </div>
    )
}