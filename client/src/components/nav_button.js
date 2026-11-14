export default function NavButton( {children, onClick} ) {

    return (
        <div className="flex items-center h-[40px]" onClick={onClick}>
            <div className="w-[1px] bg-[#c6c6cd] self-stretch my-[8px]"/>
            {children}
        </div>
    )
}