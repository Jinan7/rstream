export default function SideBarItem({ children, label }) {

    return (
        <div className="flex flex-row gap-3 items-center">
            {children}
            <p className="text-[14px] font-semibold">{label}</p>
        </div>
    )
}