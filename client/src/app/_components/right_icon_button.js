export default function RightIconButton({ children, label}) {

    return (<div className=" flex items-center justify-center gap-[4px] border-[1px] bg-[#f9f9f9] border-[#949088] px-[12px] py-[4px]">
        <p className="text-[14px] font-bold">{label}</p>
        { children }
    </div>)
}