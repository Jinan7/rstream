
export default function IconBackground({ children, className }) {

    return (
        <div className={`flex items-center justify-center shrink-0 box-border rounded-full ${className}`}>
            {children}
        </div>
    )
}