export default function MultiFormField({ label, type, ref, onClick }) {
    return (

        <label className="flex flex-col font-bold gap-1">
            {label}
            <div className="flex flex-row gap-2">
                <input type={type} className="border-on-rsecondary border-1 rounded-sm grow" ref={ref}/>
                <button className="bg-sky-blue rounded-sm px-3" onClick={onClick}>Add</button>
            </div>       
        </label>
    )
}