import { api } from "@/lib/axios";

export async function getMovies() {

    
    let response = await api.get(`movies`)
    
    return response.data
}
