import { api } from "@/lib/axios";

export async function signup( data ) {
  
    let response = await api.post('/signup', data)
    
    return response
}