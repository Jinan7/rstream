import { api } from "@/lib/axios"

const getGenres = async function() {
    try{
        let response = await api.get("/genres")
        return response.data
    } catch(e) {
        console.log(e)
    }
    
}


export { getGenres }
