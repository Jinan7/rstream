import Button from "@/app/_components/button";

export default function DurationInput() {

    return (
        <div className=" flex flex-col gap-[4px] basis-1/1 relative">
            <label className="text-[#201e1b] text-[14px] font-bold">Duration</label>
            <input type="button" className="border-[#949088] h-[40px] rounded-[4px] border-[1px]">
                
            </input>
            <div className="collapse absolute top-full bg-white border-rborder border-[1px] rounded-[2px] grow p-[20px] flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[4px]">
                    <label className="text-[#201e1b] text-[14px] font-bold">HH</label>
                    <input type="number" className="border-[#949088] h-[40px] rounded-[4px] border-[1px] px-[10px]"/>
                </div>
                <div className="flex flex-col gap-[4px]">
                    <label className="text-[#201e1b] text-[14px] font-bold">MM</label>
                    <input type="number" className="border-[#949088] h-[40px] rounded-[4px] border-[1px] px-[10px]"/>
                </div>
                <div className="flex justify-end">
                    <Button label={"OK"}/>
                </div>
            </div>
        </div>
    )
}