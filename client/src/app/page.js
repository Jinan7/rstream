'use client'
import Responsive from "@/app/responsive.js"
import { getGenres } from "./_lib/api"
import ContextProvider from "./_context/context"

export default function Home() {
  
  return (
    <div className="h-full">
      <ContextProvider>
        <Responsive/>
      </ContextProvider>
    </div>
    
  )
}
