export default function DurationField({hourRef, minRef}) {

    return (
        <label className="flex flex-col font-bold gap-1">
            Duration
            <div className="flex flex-row gap-2">
                <input type="text" placeholder="HH" className="rounded-sm w-10 bg-rbackground font-normal px-2" ref={hourRef}/>
                <input type="text" placeholder="MM" className="rounded-sm w-10 bg-rbackground font-normal px-2" ref={minRef}/>
            </div>     
        </label>
    )
}