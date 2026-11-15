export default function TextField({ label }) {
    return (
        <div className=" flex flex-col gap-[4px] basis-1/1">
            <label className="text-[#201e1b] text-[14px] font-bold">{label}</label>
            <textarea className="border-[#949088] h-[40px] rounded-[4px] border-[1px] px-[4px]"></textarea>
        </div>
    )
}