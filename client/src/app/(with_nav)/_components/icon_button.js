export default function IconButton({ children, className }) {
    return (
        <div className={`flex items-center justify-center gap-[4px] border-[1px] bg-[#f9f9f9] border-[#949088] px-[12px] py-[4px] ${className}`}>
            { children }
        </div>
    )
}