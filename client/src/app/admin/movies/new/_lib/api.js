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

export const createPosterMultipartUpload = async (key) => {
    let response = await api.get(`/movies/posters/multipart/${key}`)
    return response.data
}

export const completePosterMultipartUpload = async (key, data) => {
    let response = await api.post(`/movies/posters/complete_multipart/${key}`, data)
    return response
}

export const getPosterPartPresignedUrl = async (key, data) => {
    let response = await api.post(`/movies/posters/multipart/${key}`, data)
    return response.data
}

export const putPart = async (uri, chunk) => {

    console.log(chunk)
    let response = await api.put(uri, chunk, {
        headers: {
            "Content-Type" : "image/jpeg"
            
        },
        onUploadProgress: (progressEvent) => {
            console.log(progressEvent)
        }
    })

    return response
}