import { api } from "@/lib/axios"

const getGenres = async function() {

    let response = await api.get("/genres")
    return response.data
    
    
}


export { getGenres }
