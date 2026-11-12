import MultiFormInput from "./multiform_input";

export default function MultiFormField({ label, type, ref, onInput, onRemove, data }) {
    return (
        <div className="flex flex-col gap-3">
             <label className="flex flex-col font-bold gap-1">
                {label}
                <div className="flex flex-row gap-2">
                    <input type={type} className="border-on-rsecondary border-1 rounded-sm grow" ref={ref}/>
                    <button className="bg-sky-blue rounded-sm px-3" onClick={onInput}>Add</button>
                </div>       
            </label>
            <div className="flex flex-col gap-1">
                {
                    data.map((data) => <MultiFormInput key={data.key} text={data.value} onClick={onRemove(data.key)}/>)
                }
            </div>
        </div>
       
    )
}