'use client'
import { useEffect, useState } from "react"
import { getGenres } from "../_lib/api"

export default function MovieGenres() {

    let [genres, setGenres] = useState([])
    useEffect(() => {
        (async () => {
            let data = await getGenres()
            setGenres(data)
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