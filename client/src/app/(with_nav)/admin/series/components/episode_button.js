export default function EpisodeButton({label, className}) {

    return (
        <div className={`border-link-border bg-link-background py-[6px] pl-[32px] pr-[20px] border-[1px] ${className}`}>
            <p className="text-[#201e1b] text-[14px] font-normal ">{label}</p>
        </div>
    )
}