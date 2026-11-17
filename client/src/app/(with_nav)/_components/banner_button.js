export default function BannerButton({ children, label, className, pclassName }) {

    
    return (
        <div className={`flex flex-row items-center justify-center gap-1.5 px-3 py-1.5 rounded-full ${className}`}>
            {children}
            <p className={`text-[14px] font-semibold ${pclassName}`}>{label}</p>
        </div>
    )
}