export default function DurationField({hourRef, minRef}) {

    return (
        <label className="flex flex-col font-bold gap-1">
            Duration
            <div className="flex flex-row gap-2">
                <input type="text" placeholder="HH" className="rounded-sm w-10 border-on-rsecondary border-1 " ref={hourRef}/>
                <input type="text" placeholder="MM" className="rounded-sm w-10 border-on-rsecondary border-1 " ref={minRef}/>
            </div>     
        </label>
    )
}