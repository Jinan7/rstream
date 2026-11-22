'use client'
import { Key, LogOut, UserRound } from "lucide-react";
import DropdownButton from "./dropdown_button";
import { Separator } from "@base-ui/react";
import { signout } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useShowNavDropdownDispatch } from "@/app/(with_nav)/_context/navbar_context";

export default function ProfileDropdown() {
    
    let router = useRouter()
    let dispatch = useShowNavDropdownDispatch()

    let hideNavDropdown = () => dispatch({type:'hide'})

    const handleSignOut = async () => {
        let response = await signout();
        if (response.status === 200) {
            router.replace('/signin')
        }
        dispatch({type:'hide'})
    }

    

    return (
        <div className="flex flex-col gap-4">
            <DropdownButton label={"Profile"} href={""} onClick={hideNavDropdown}>
                <UserRound className="size-[16px]"/>
            </DropdownButton>
            <DropdownButton label={"Sign Out"} href={""} onClick={handleSignOut}>
                <LogOut className="size-[16px]"/>
            </DropdownButton>
            <Separator className="bg-rborder h-[1px]"/>
            <DropdownButton label={"Admin Console"} href={"/admin/movies"} onClick={hideNavDropdown}>
                <Key className="size-[16px]"/>
            </DropdownButton>
        </div>
    )
}