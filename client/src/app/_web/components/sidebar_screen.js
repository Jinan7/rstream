import { useShowSideBar, useShowSideBarDispatch } from "@/app/_context/sidebar_context";
import SideBar from "../../_components/sidebar";
import { handleHideSideBar } from "@/app/_lib/show_sidebar_reducer";

export default function SideBarScreen() {

    const dispatch = useShowSideBarDispatch();
    const showSideBar = useShowSideBar();
    const hideSideBar = handleHideSideBar(dispatch)

    return (
        <div className={`xl:collapse w-screen flex flex-row fixed top-0 left-0 ${ showSideBar ? "visible" : "collapse"} z-99`}
            onClick={(e) => {
                console.log(e)
            }}
            
        >
            <SideBar/>
            <div className="grow min-h-screen bg-black opacity-70 blur-xs"
                onClick={hideSideBar}
            ></div>  
        </div>
    )
}