export default function Button({ label, className, onClick, variant}) {
    
    // disabled - border - bab7b0
    // text - 949088
    //bg - white or transparent
    return (<div onClick={onClick} className={`cursor-pointer flex items-center justify-center gap-[4px] border-[1px] px-[12px] py-[4px] ${className} 
    ${variant ? 
        variant === 'dark' ?
        'border-[#262420] bg-[#262420]' :
        'border-[#949088] bg-[#f9f9f9]' :
        'border-[#949088] bg-[#f9f9f9]'
    }`}>
        <p className={`text-[14px] font-bold ${
            variant && variant === 'dark' && 'text-white'
        }`}>{label}</p>
    </div>)
}