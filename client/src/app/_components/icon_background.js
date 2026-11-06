
export default function IconBackground({ children, background }) {

    return (
        <div className={`flex items-center justify-center shrink-0 box-border rounded-full size-[30px] ${background}`}>
            {children}
        </div>
    )
}