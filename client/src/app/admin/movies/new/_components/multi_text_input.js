import Button from "@/app/_components/button";

export default function MultiTextInput({ label, onAdd, ref }) {

    return (
        <div className=" flex flex-col gap-[4px] grow">
            <label className="text-[#201e1b] text-[14px] font-bold">{label}</label>
            <div className="flex gap-[12px]">
                <input className="border-[#949088] h-[40px] rounded-[4px] border-[1px] grow" ref={ref}></input>
                <Button label={"Add"} className="rounded-[4px]" onClick={onAdd}/>
            </div>   
        </div>
    )
}