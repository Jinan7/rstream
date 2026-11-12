export default function FormField({ label, type, ref, disabled }) {
    return (
        <label className="flex flex-col font-semibold gap-1">
            {label}
            <input type={type} className="bg-rbackground rounded-sm font-normal px-2" ref={ref} disabled={disabled}/>
        </label>
    )
}