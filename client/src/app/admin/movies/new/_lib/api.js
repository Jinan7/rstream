import { api } from "@/lib/axios";

export const postMovieDetails = async (data) => {
    let response = await api.post('/movies', data)
    return response.data   
}

export const getPosterPresignedUrl = async (key) => {
    let response = await api.get(`/movies/posters/${key}`)
    return response.data
}

export const putPoster = async (uri, file) => {

    let response = await api.put(uri, file, {
        headers: {
            "Content-Type" : "application/octet-stream"
        },
        onUploadProgress: (progressEvent) => {
            console.log(progressEvent)
        }
    })

    return response
}