import { api } from "@/lib/axios";

export async function signin( data ) {
    console.log(data)
    let response = await api.post('/signin', data)
    console.log(response)
    return response
}

