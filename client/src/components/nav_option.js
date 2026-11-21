export default function NavOption( {id, label, onClick, selected} ) {

    console.log(`${id} ${label} ${selected}`)
    return (
        <div className="h-[40px] flex flex-col px-[16px] cursor-pointer items-center" onClick={onClick}>
            <div className="grow flex items-center">
                <p className="font-bold text-[14px]">{ label }</p>
            </div>
            
             {
                selected && <div className="h-[4px] w-[60px] bg-rsurface"></div> 
             }        
        </div>
    )
}