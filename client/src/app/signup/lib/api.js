import { api } from "@/lib/axios";

export async function signup( data ) {
    console.log(data)
    let response = await api.post('/signup', data)
    console.log(response)
    return response
}