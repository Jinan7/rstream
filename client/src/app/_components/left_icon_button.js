export default function LeftIconButton({ children, label, onClick, variant}) {

    return (<div onClick={onClick} className={`flex items-center justify-center gap-[4px] border-[1px] px-[12px] py-[4px] rounded-[4px] 
    ${variant ? 
        variant === 'dark' ?
        'border-[#262420] bg-[#262420]' :
        'border-[#949088] bg-[#f9f9f9]' :
        'border-[#949088] bg-[#f9f9f9]'
    }
    `}>
        { children }
        <p className={`text-[14px] font-bold ${
            variant && variant === 'dark' && 'text-white'
        }`}>{label}</p>
    </div>)
}