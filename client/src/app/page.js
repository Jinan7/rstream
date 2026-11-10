import { getGenres } from "./_lib/api"
import PseudoSideBar from "./_components/pseudo_sidebar"
import ResponsiveBannerCarousel from "./_responsive/banner_carousel"
import MovieSection from "./_components/movie_section"
import MovieCategories from "./_components/movie_categories"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Home() {

  let landscape = "basis-2/3 sm:basis-1/2 md:basis-2/5 lg:basis-1/3 xl:basis-2/7"
  let portrait = "basis-1/4 sm:basis-2/9 md:basis-1/5 lg:basis-2/11 xl:basis-1/6"
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

  return (
    <div className="max-w-screen">
        <div className="max-w-full flex flex-row gap-6 px-4 mt-4 sm:mt-0 gap-6">
            <div className="w-75 collapse xl:visible">
              <PseudoSideBar/>
            </div> 
            <div className="flex flex-col gap-8 grow max-w-full">
              {/* <DropdownMenu>
                          <DropdownMenuTrigger render={<p>Click me</p>} />
                          <DropdownMenuContent>
                              <DropdownMenuGroup>
                              <DropdownMenuLabel>My Account</DropdownMenuLabel>
                              <DropdownMenuItem>Profile</DropdownMenuItem>
                              <DropdownMenuItem>Billing</DropdownMenuItem>
                              <DropdownMenuItem>Settings</DropdownMenuItem>
                              </DropdownMenuGroup>
                              <DropdownMenuSeparator/>
                              <DropdownMenuItem>GitHub</DropdownMenuItem>
                              <DropdownMenuItem>Support</DropdownMenuItem>
                              <DropdownMenuItem disabled>API</DropdownMenuItem>
                          </DropdownMenuContent>
                          </DropdownMenu> */}
            
                <ResponsiveBannerCarousel/>
                <div className="flex flex-col gap-4 sm:gap-5">
                    <MovieCategories className={"sm:collapse sm:h-0 mb-4"}/>
                    {
                        data.map(
                          category => <MovieSection key={category.key} label={category.section_name} className={category.className} aspect={category.aspect}/>
                        )
                    }
                </div> 
            </div> 
        </div> 
    </div>
    
  )
}

// <div className="w-full h-full mt-4 px-4 flex flex-col gap-6">
//             <BannerCarouselMobile/>
//             <div className="flex flex-col gap-2">
//                 <MovieCategories/>
//                 <MovieSection data={data}/>
//                 <MovieSection data={data}/>
//                 <MovieSection data={data}/>
//                 <MovieSection data={data}/>
//             </div>      
//         </div>