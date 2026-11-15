'use client'
import { getGenres } from "./_lib/api"
import PseudoSideBar from "./_components/pseudo_sidebar"
import ResponsiveBannerCarousel from "./_responsive/banner_carousel"
import MovieSection from "./_components/movie_section"
import MovieCategories from "./_components/movie_categories"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sidebar } from "lucide-react"
import SideBarToggle from "./_components/sidebar_toggle"
import { useState } from "react"

export default function Home() {

  let landscape = "basis-2/3 sm:basis-1/2 md:basis-2/5 lg:basis-1/3 xl:basis-2/7"
  let portrait = "basis-2/12 sm:basis-2/13 md:basis-2/14 lg:basis-2/15 xl:basis-2/16"
  let data = [
    {
        key: 1,
        section_name: "New",
        className: landscape,
        aspect: "aspect-16/9"
    },
    {
        key: 2,
        section_name: "Adventure",
        className: portrait,
        aspect: "aspect-9/16"
    },
    {
        key: 3,
        section_name: "Action",
        className: portrait,
        aspect: "aspect-9/16"
    },
    {
        key: 4,
        section_name: "Popular",
        className: landscape,
        aspect: "aspect-16/9"
    },
    {
        key: 5,
        section_name: "Comedy",
        className: portrait,
        aspect: "aspect-9/16"
    },
    {
        key: 6,
        section_name: "Drama",
        className: portrait,
        aspect: "aspect-9/16"
    },
    {
        key: 7,
        section_name: "Anime",
        className: portrait,
        aspect: "aspect-9/16"
    },
  ]

  let [showSideBar, setShowSideBar]  = useState(false)
  const handleToggleSideBar = () => setShowSideBar(!showSideBar)
  return (
    <div className="h-full">
        <div className="border-[1px] border-y-[#e3e1d1] flex h-[40px] sticky top-[52px] z-98 bg-[#f9f9f9]">
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
            <div className={`sidebar w-[280px] self-stretch flex border-r-[#e3e1d1] border-r-[1px] ${showSideBar ? 'visible' : 'collapse'}`}>
                
            </div>
            <div className="w-full h-full flex justify-center">
                <main className="max-w-[1620px] mx-[48px] w-full mt-[20px]">
                    <ResponsiveBannerCarousel/>
                    <div className="flex flex-col mt-[52px] gap-[20px]">
                        <MovieCategories className={"sm:collapse sm:h-0 mb-4"}/>
                        {
                            data.map(
                            category => <MovieSection key={category.key} label={category.section_name} className={category.className} aspect={category.aspect}/>
                            )
                        }
                    </div> 
                </main>
            </div>
        </div>
    </div>
    
  )
}

