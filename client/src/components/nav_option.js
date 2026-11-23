import Link from "next/link"

export default function NavOption( {id, label, onClick, selected, href} ) {

    console.log(`${id} ${label} ${selected}`)
    return (
        <Link href={href} className="h-[40px] flex flex-col px-[16px] cursor-pointer items-center" onClick={onClick}>
            <div className="grow flex items-center">
                <p className="font-bold text-[14px]">{ label }</p>
            </div>
            
             {
                selected && <div className="h-[4px] w-[60px] bg-rsurface"></div> 
             }        
        </Link>
    )
}