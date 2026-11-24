import { api } from "@/lib/axios"

export const postSeasonDetails = async (data) => {

    let response = await api.post("/seasons", data)
    return response
}