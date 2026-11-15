export default function TextInput({ label }) {

    return (
        <div className=" flex flex-col gap-[4px] basis-1/1">
            <label className="text-[#201e1b] text-[14px] font-bold">{label}</label>
            <input className="border-[#949088] h-[40px] rounded-[4px] border-[1px]"></input>
        </div>
    )
}