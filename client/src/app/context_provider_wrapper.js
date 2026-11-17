'use client'
import ContextProvider from "./(with_nav)/_context/context";

export default function ContextProviderWrapper({ children }) {

    return (<ContextProvider>
        { children }
    </ContextProvider>)
}