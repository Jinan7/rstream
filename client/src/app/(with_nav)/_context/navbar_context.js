import { createContext, useContext, useReducer, useState } from "react";
import showNavDropdownReducer from "../_lib/nav_dropdown_reducer";

const NavBarContext = createContext(null);

export default function NavBarContextProvider({ children }) {

    const [navDropdownState, dispatch] = useReducer(showNavDropdownReducer, {id:'profile', visible:false})

    return (<NavBarContext value={{navDropdownState, dispatch}}>
        {children}
    </NavBarContext>)
}

function useNavDropdownState() {
    const {navDropdownState} = useContext(NavBarContext)
    return navDropdownState
}

function useShowNavDropdownDispatch() {
    const {dispatch} = useContext(NavBarContext)
    return dispatch
}


export {useNavDropdownState, useShowNavDropdownDispatch}