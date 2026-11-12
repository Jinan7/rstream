export default function TextField({ label, type, ref }) {
    return (
        <label className="flex flex-col font-bold gap-1">
            {label}
            <textarea className="border-on-rsecondary border-1 rounded-sm" ref={ref}/>
        </label>
    )
}