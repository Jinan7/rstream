import NavBar from "@/components/navbar";
import ContextProviderWrapper from "../context_provider_wrapper";
import SideBarProvider from "./_context/sidebar_context";

export default function NavLayout({ children }) {

    return (
        <ContextProviderWrapper>
            <div className="relative h-full">
                <SideBarProvider>
                    <NavBar/>
                </SideBarProvider>
                { children }
            </div>
        </ContextProviderWrapper>  
    )
}