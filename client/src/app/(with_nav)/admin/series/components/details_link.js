export default function DetailsLink({ onClick, active }) {

    return (
        <div className={`px-[20px] pt-[12px] pb-[12px] cursor-pointer ${active && 'border-[1px] border-link-border bg-link-background'}`}
            onClick={onClick}
        >
            <p className="text-[16px] font-bold ">Details</p>
        </div>
    )
}