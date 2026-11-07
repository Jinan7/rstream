import SideBar from "./sidebar";

export default function SideBarScreen({ visible }) {
    return (
        <div className={`w-screen flex flex-row fixed top-0 left-0 ${ visible ? "visible" : "collapse"}`}
            onClick={(e) => {
                console.log(e)
            }}
            
        >
            <SideBar/>
            <div className="grow min-h-screen bg-black opacity-70 blur-xs"></div>  
        </div>
    )
}