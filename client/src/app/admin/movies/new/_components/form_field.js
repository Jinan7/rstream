export default function FormField({ label, type, ref, disabled }) {
    return (
        <label className="flex flex-col font-bold gap-1">
            {label}
            <input type={type} className="border-on-rsecondary border-1 rounded-sm" ref={ref} disabled={disabled}/>
        </label>
    )
}