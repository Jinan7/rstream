import Link from "next/link";
import { useShowNavDropdownDispatch } from "../_context/navbar_context";

export default function DropdownButton({children, label, href}) {

    let dispatch = useShowNavDropdownDispatch()

    let hideNavDropdown = () => dispatch({type:'hide'})
    return (
    <Link className="flex flex-row gap-2 items-end" href={href} onClick={hideNavDropdown}>
        {children}
        <p className="font-bold text-[14px]">{label}</p>
    </Link>)
}