import SideBar from "@/app/(with_nav)/_components/sidebar";
import { useShowSideBar } from "@/app/(with_nav)/_context/sidebar_context";

export default function SideBarMobile() {

    const showSideBar = useShowSideBar();

    return (
        <div className={`fixed top-0 left-0 z-99 ${ showSideBar ? "visible" : "collapse"}`}>
            <SideBar/>
        </div>
    )
}