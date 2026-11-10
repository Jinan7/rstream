'use client'
import { Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AddNewMovie() {
    let pathName = usePathname()
    console.log(pathName)
    return (
        <Link href={`${pathName}/new`} className="px-2 py-2 flex flex-col items-center justify-center bg-sky-blue w-100 rounded-[8px] border-sky-blue-outline border-2 self-start">
            <Plus className="size-[30px]"/>
            <p>Add Movie</p>
        </Link>
    )
}