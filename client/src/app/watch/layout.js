'use client'
import { useState } from "react";
import SideBarToggle from "@/app/_components/sidebar_toggle";

export default function WatchLayout({ children }) {
    let [showSideBar, setShowSideBar]  = useState(false)
    const handleToggleSideBar = () => setShowSideBar(!showSideBar)
    return (
        <div className="min-h-full">
            <div className="border-[1px] border-y-[#e3e1d1] flex h-[40px] sticky top-[52px] z-98 bg-[#f9f9f9] self-stretch">
                <div className="mx-[16px] flex items-center">
                    <SideBarToggle visible={showSideBar} onClick={handleToggleSideBar}/>  
                </div>
                <div className="w-full max-w-full overflow-auto scrollbar-">
                    <div className="flex gap-5 w-full h-full items-center">
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">Action</p>
                        </div> 
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">Adventure</p>
                        </div>
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">Crime</p>
                        </div>
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">Comedy</p>
                        </div>
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">Drama</p>
                        </div>
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">Documentary</p>
                        </div>
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">Fantasy</p>
                        </div>
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">Game</p>
                        </div>
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">Horror</p>
                        </div>
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">Indie</p>
                        </div>
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">K drama</p>
                        </div>
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">Thriller</p>
                        </div>
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">War</p>
                        </div>
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">Animation</p>
                        </div>
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">Anime</p>
                        </div>
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">Music</p>
                        </div>
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">Lifestyle</p>
                        </div>
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">Sci fi</p>
                        </div>
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">Family</p>
                        </div>
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">Mystery</p>
                        </div>  
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">Sport</p>
                        </div>
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">Western</p>
                        </div>
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">Short</p>
                        </div>
                        <div className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px]">Romance</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex h-full">
                <div className={`min-h-screen sidebar w-[280px] self-stretch flex border-r-[#e3e1d1] border-r-[1px] ${showSideBar ? 'visible' : 'collapse'}`}>
                    
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