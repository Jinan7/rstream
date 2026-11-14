export default function NavOption( {label} ) {

    return (
        <div className="h-[40px] flex flex-col px-[16px]">
            <div className="grow flex items-center">
                <p className="font-bold text-[14px]">{ label }</p>
            </div>
            <div className="h-[4px] bg-rsurface"></div>   
        </div>
    )
}