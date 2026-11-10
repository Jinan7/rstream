import PseudoSideBar from "./_components/pseudo_sidebar";

export default function AdminLayout({ children }) {
    return (
        <div className="max-w-screen">
            <div className="max-w-full flex flex-row gap-6 px-4 mt-4 sm:mt-0 gap-6 grow">
                <div className="w-75 collapse xl:visible">
                    <PseudoSideBar/>
                </div> 
                {children}
            </div> 
        </div>
    )
}