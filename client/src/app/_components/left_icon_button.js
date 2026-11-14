export default function LeftIconButton({ children, label}) {

    return (<div className="flex items-center justify-center gap-[4px] bg-[#f9f9f9] border-[1px] border-[#949088] px-[12px] py-[4px] rounded-[4px]">
        { children }
        <p className="text-[14px] font-bold">{label}</p>
    </div>)
}