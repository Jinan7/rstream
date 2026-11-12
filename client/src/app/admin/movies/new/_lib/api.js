import { api } from "@/lib/axios";

export const postMovieDetails = async (data) => {
    let response = await api.post('/movies', data)
    console.log(response)
}