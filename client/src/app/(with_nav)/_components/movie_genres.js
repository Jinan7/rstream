'use client'
import { useEffect, useState } from "react"
import { getGenres } from "../_lib/api"
import { useRouter } from "next/navigation"


export default function MovieGenres() {
    let router = useRouter()
    let [genres, setGenres] = useState([])
    useEffect(() => {
        (async () => {
            try {
                let data = await getGenres()
                setGenres(data)
            } catch (e) {
                if (e.response.status === 403) {
                    router.replace('/signin')
                }
            }
            
        })()
    }, [])
    return (
         <div className="flex gap-5 w-full h-full items-center">
            {
                genres.map((genre) => {
                    return (
                        <div key={genre.id} className="px-[8px] shrink-0">
                            <p className="font-bold text-[14px] capitalize">{genre.genre}</p>
                        </div> 
                    )
                })
            }    
        </div>
    )
}