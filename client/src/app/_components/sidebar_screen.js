import SideBar from "./sidebar";

export default function SideBarScreen() {
    return (
        <div className="w-screen flex flex-row fixed top-0 left-0 ">
            <SideBar/>
            <div className="grow min-h-screen bg-black opacity-70 blur-xs"></div>  
        </div>
    )
}