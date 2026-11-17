import Button from "@/app/(with_nav)/_components/button";

export default function DurationInput({ ref, hourRef, minRef, visible, onClick, toggleVisibility }) {

    return (
        <div className=" flex flex-col gap-[4px] basis-1/1 relative">
            <label className="text-[#201e1b] text-[14px] font-bold">Duration</label>
            <input type="button" className="border-[#949088] h-[40px] rounded-[4px] border-[1px] px-[4px]" onClick={toggleVisibility} ref={ref}>
                
            </input>
            <div className={`${visible ? 'visible' : 'collapse'} absolute top-full bg-white border-rborder border-[1px] rounded-[2px] grow p-[20px] flex flex-col gap-[20px]`}>
                <div className="flex flex-col gap-[4px]">
                    <label className="text-[#201e1b] text-[14px] font-bold">HH</label>
                    <input type="number" className="border-[#949088] h-[40px] rounded-[4px] border-[1px] px-[10px]" ref={hourRef}/>
                </div>
                <div className="flex flex-col gap-[4px]">
                    <label className="text-[#201e1b] text-[14px] font-bold">MM</label>
                    <input type="number" className="border-[#949088] h-[40px] rounded-[4px] border-[1px] px-[10px]" ref={minRef}/>
                </div>
                <div className="flex justify-end">
                    <Button label={"OK"} onClick={onClick}/>
                </div>
            </div>
        </div>
    )
}