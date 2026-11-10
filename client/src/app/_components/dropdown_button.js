import Link from "next/link";

export default function DropdownButton({children, label, href}) {
    return (
    <Link className="flex flex-row gap-2 items-end" href={href}>
        {children}
        <p className="font-bold text-[14px]">{label}</p>
    </Link>)
}