import { api, s3Client } from "@/lib/axios";
import prettyBytes from "pretty-bytes";

export const postMovieDetails = async (data) => {
    let response = await api.post('/movies', data)
    return response.data   
}

export const getPosterPresignedUrl = async (key, params) => {
    let response = await api.get(`/posters/${key}`, {
        params: params
    })
    return response.data
}

export const putPoster = async (uri, file, ref, progress, setProgress, setRate, totalSize) => {
    
    let response = await s3Client.put(uri, file, {
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
    let response = await api.get(`/posters/complete/${key}`, {
        params: params
    })
    return response
}

export const createPosterMultipartUpload = async (key, params) => {
    let response = await api.get(`/posters/multipart/${key}`, {
        params: params
    })
    return response.data
}

export const completePosterMultipartUpload = async (key, data, params) => {
    let response = await api.post(`/posters/complete_multipart/${key}`, data, 
        {
            params: params
        }
    )
    return response
}

export const getPosterPartPresignedUrl = async (key, data, params) => {
    let response = await api.post(`/posters/multipart/${key}`, data, {
        params: params
    })
    return response.data
}

export const putPart = async (uri, chunk, ref, progress, setProgress, setRate, totalSize) => {
    
    let response = await s3Client.put(uri, chunk, {

        onUploadProgress: (progressEvent) => {
           
            let rate = progressEvent.rate ? progressEvent.rate : 0
            setRate(`${prettyBytes(rate)}/s`)
            let incr = Math.trunc((progressEvent.bytes/totalSize) * 100)
            let newProgress = ref.current + incr
            
            ref.current = newProgress
            setProgress(newProgress)
        }
    })

    return response
}