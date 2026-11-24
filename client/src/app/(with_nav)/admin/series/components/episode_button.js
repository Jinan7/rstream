export default function EpisodeButton({label, className, onClick, active}) {

    return (
        <div className={`${ active ?'border-link-border bg-link-background border-[1px] h-[48px] flex items-center' : 'py-[6px]'} pl-[32px] pr-[20px] cursor-pointer ${className}`}
            onClick={onClick}
        >
            <p className="text-[#201e1b] text-[14px] font-normal ">{label}</p>
        </div>
    )
}