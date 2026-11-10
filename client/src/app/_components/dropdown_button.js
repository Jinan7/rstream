export default function DropdownButton({children, label}) {
    return (<div className="flex flex-row gap-2 items-end">
        {children}
        <p className="font-bold text-[14px]">{label}</p>
    </div>)
}