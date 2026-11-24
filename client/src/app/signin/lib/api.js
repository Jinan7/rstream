import { api } from "@/lib/axios";

export async function signin( data ) {
    
    let response = await api.post('/signin', data)
   
    return response
}

