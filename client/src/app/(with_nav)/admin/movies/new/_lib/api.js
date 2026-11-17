import { api } from "@/lib/axios";
import prettyBytes from "pretty-bytes";

export const postMovieDetails = async (data) => {
    let response = await api.post('/movies', data)
    return response.data   
}

export const getPosterPresignedUrl = async (key) => {
    let response = await api.get(`/movies/posters/${key}`)
    return response.data
}

export const putPoster = async (uri, file, ref, progress, setProgress, setRate, totalSize) => {
    
    let response = await api.put(uri, file, {
        headers: {
            "Content-Type" : "application/octet-stream"
        },
        onUploadProgress: (progressEvent) => {

            let rate = progressEvent.rate ? progressEvent.rate : 0
            setRate(prettyBytes(rate))
            let incr = Math.trunc((progressEvent.bytes/totalSize) * 100)
            let newProgress = ref.current + incr
            ref.current = newProgress
            setProgress(newProgress)
        }
    })

    return response
}

export const completePutPoster = async (key, params) => {
    let response = await api.get(`/movies/posters/complete/${key}`, {
        params: params
    })
    return response
}

export const createPosterMultipartUpload = async (key) => {
    let response = await api.get(`/movies/posters/multipart/${key}`)
    return response.data
}

export const completePosterMultipartUpload = async (key, data, params) => {
    let response = await api.post(`/movies/posters/complete_multipart/${key}`, data, 
        {
            params: params
        }
    )
    return response
}

export const getPosterPartPresignedUrl = async (key, data) => {
    let response = await api.post(`/movies/posters/multipart/${key}`, data)
    return response.data
}

export const putPart = async (uri, chunk, ref, progress, setProgress, setRate, totalSize) => {
    
    let response = await api.put(uri, chunk, {
        headers: {
            "Content-Type" : "image/jpeg"
            
        },
        onUploadProgress: (progressEvent) => {
            console.log(progressEvent)
            let rate = progressEvent.rate ? progressEvent.rate : 0
            setRate(`${prettyBytes(rate)}/s`)
            let incr = Math.trunc((progressEvent.bytes/totalSize) * 100)
            let newProgress = ref.current + incr
            console.log(newProgress)
            ref.current = newProgress
            setProgress(newProgress)
        }
    })

    return response
}