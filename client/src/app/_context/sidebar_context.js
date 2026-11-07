import { createContext, useContext, useReducer } from "react";
import { showSideBarReducer } from "../_lib/show_sidebar_reducer";

const ShowSideBarContext = createContext(null);
const ShowSideBarDispatchContext = createContext(null);


export default function SideBarProvider({ children }) {
    
    const [showSideBar, reduce ] = useReducer(showSideBarReducer)

    return (
        <ShowSideBarContext value={showSideBar}>
            <ShowSideBarDispatchContext value={reduce}>
                {children}
            </ShowSideBarDispatchContext>
        </ShowSideBarContext>
    )
}

const useShowSideBar = () => useContext(ShowSideBarContext)
const useShowSideBarDispatch = () => useContext(ShowSideBarDispatchContext)

export { useShowSideBar, useShowSideBarDispatch }