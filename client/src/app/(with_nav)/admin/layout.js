'use client'
import { useState } from "react";
import MovieGenres from "../_components/movie_genres";
import SideBarToggle from "../_components/sidebar_toggle";
import { v4 } from "uuid";
import Link from "next/link";

export default function AdminLayout({ children }) {

    let sidebar_options = [
        {
            label: "Movies",
            href: "/admin/movies"
        },
        {
            label: "Series",
            href: "/admin/series"
        }
    ]
    let [showSideBar, setShowSideBar]  = useState(false)
        const handleToggleSideBar = () => setShowSideBar(!showSideBar)
    return (
        <div className="h-full">
            <div className="border-[1px] border-y-[#e3e1d1] flex h-[40px] sticky top-[52px] z-98 bg-[#f9f9f9] self-stretch">
                <div className="mx-[16px] flex items-center">
                    <SideBarToggle visible={showSideBar} onClick={handleToggleSideBar}/>  
                </div>
                <div className="w-full max-w-full overflow-auto scrollbar-">
                    <MovieGenres/>
                </div>
            </div>
            <div className="flex h-full">
                <div className={`sidebar w-[280px] self-stretch flex border-r-[#e3e1d1] border-r-[1px] ${showSideBar ? 'visible' : 'collapse'}`}>
                    <div className="flex flex-col gap-[20px]">
                        <p className="px-[24px] pt-[32px] font-bold text-[20px]">Admin Console</p>
                        <div className="px-[24px] flex flex-col gap-[12px]">
                            {
                                sidebar_options.map((option) => {
                                    return <Link  key={v4()} href={option.href} className="font-bold text-[14px]">{option.label}</Link>
                                })
                            }
                        </div>
                    </div>      
                </div>
                <div className="w-full h-full flex justify-center">
                    <main className="max-w-[1620px] mx-[48px] w-full mt-[20px] mb-[40px]">
                        { children }
                    </main>
                </div>
            </div>
        </div>
    )
}