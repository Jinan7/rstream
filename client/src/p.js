import { NextResponse } from "next/server"
import { auth_proxy } from "./lib/axios"

export async function proxy(request) {


    try {
        
        let response = await auth_proxy(request.headers)
       
    } catch (e) {
        console.log(e.response)
        if (e.response.status === 403) {
            return NextResponse.redirect(new URL('/signin', request.url))
        }     
    }
    
    
}

export const config = {
    matcher: [
        '/((?!images|signup|signin|api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
    ]
}