import Link from "next/link";
import { useShowNavDropdownDispatch } from "../app/(with_nav)/_context/navbar_context";

export default function DropdownButton({children, label, href, onClick}) {

    return (
    <Link className="flex flex-row gap-2 items-center" href={href} onClick={onClick}>
        {children}
        <p className="font-bold text-[14px]">{label}</p>
    </Link>)
}