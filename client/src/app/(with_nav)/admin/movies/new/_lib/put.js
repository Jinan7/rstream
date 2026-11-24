import { completePosterMultipartUpload, completePutPoster, createPosterMultipartUpload, getPosterPartPresignedUrl, getPosterPresignedUrl, putPart, putPoster } from "./api"

const CHUNK_SIZE = 5 * 1024 * 1024;

export const putFile = async (id, file, aspect, ref, progress, setProgress, setRate) => {

    
    let data = await getPosterPresignedUrl(`${id}/${file.name}`)

   
    let response = await putPoster(data.presignedUrl, file, ref, progress, setProgress, setRate, file.size)

    
    try {
        await completePutPoster(`${id}/${file.name}`, {
            aspect: aspect
        })
        setProgress(100)
    } catch (e) {

    } finally {
        ref.current = 0
        setTimeout(() => setProgress(0), 1000)
    }
    
}

export const uploadFileMultipart = async (id, file, aspect, ref, progress, setProgress, setRate) => {
    
    let stream = file.stream();
    let reader = stream.getReader({ mode: "byob" })
    let key = `${id}/${file.name}`
    let uploadId = await createPosterMultipartUpload(`${id}/${file.name}`)

    let parts = []
    // part variables
    let partNumber = 1;
    let presignedUrl = await getPosterPartPresignedUrl(key,
        {
            uploadId: uploadId.uploadId,
            partNumber: partNumber
        }
    )
    
    let offset = 0
    let buffer = new ArrayBuffer(CHUNK_SIZE)
    let bytesRead = 0
    // part variables

    while (true) {

        if (bytesRead == file.size) {
            break
        }
        let { done, value } = await reader.read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
        if (done) {
            buffer = value.buffer
            let response = await putPart(presignedUrl.presignedUrl, new Uint8Array(buffer), ref, progress, setProgress, setRate, file.size)
            let etag = response.headers.etag;
            parts.push({ partNumber: partNumber, etag: etag })
            
            break;
        }

        buffer = value.buffer

        offset += value.byteLength
        bytesRead += value.byteLength

        if (offset >= buffer.byteLength) {
            let response = await putPart(presignedUrl.presignedUrl, new Uint8Array(buffer), ref, progress, setProgress, setRate, file.size)
            let etag = response.headers.etag;
            parts.push({ partNumber: partNumber, etag: etag })
            partNumber += 1
            presignedUrl = await getPosterPartPresignedUrl(key,
                {
                    uploadId: uploadId.uploadId,
                    partNumber: partNumber
                }
            )
            offset = 0
            buffer = new ArrayBuffer(Math.min(CHUNK_SIZE, file.size - bytesRead))
        }
    }

    try {
        await completePosterMultipartUpload(key, 
            {
                uploadId: uploadId.uploadId,
                parts: parts
            },
            {
                aspect: aspect
            }   
        )  
        setProgress(100)
    } catch (e) {

    } finally {
        ref.current = 0
        setTimeout(() => setProgress(0), 1000)
    }
    
}