'use client'
import ContextProvider from "./_context/context";

export default function ContextProviderWrapper({ children }) {

    return (<ContextProvider>
        { children }
    </ContextProvider>)
}