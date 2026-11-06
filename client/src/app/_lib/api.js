import { api } from "@/lib/axios"

const getGenres = async function() {
    let { data, status } = await api.get("/genres")
    return data
}


export { getGenres }
