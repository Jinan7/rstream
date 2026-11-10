import { api } from "@/lib/axios"

const getGenres = async function() {
    try{
        let { data, status } = await api.get("/genres")
        return data
    } catch(e) {
        console.log(e)
    }
    
}


export { getGenres }
