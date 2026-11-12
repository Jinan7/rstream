export default function TextField({ label, type, ref }) {
    return (
        <label className="flex flex-col font-semibold gap-1">
            {label}
            <textarea className="bg-rbackground rounded-sm font-normal px-2" ref={ref}/>
        </label>
    )
}