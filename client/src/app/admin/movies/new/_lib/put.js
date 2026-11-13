import { completePosterMultipartUpload, createPosterMultipartUpload, getPosterPartPresignedUrl, getPosterPresignedUrl, putPart, putPoster } from "./api"

const CHUNK_SIZE = 5 * 1024 * 1024;

export const putFile = async (id, file) => {

    let data = await getPosterPresignedUrl(`${id}/${file.name}`)

    let response = await putPoster(data.presignedUrl, file)
    console.log(response)
}

export const uploadFileMultipart = async (id, file) => {
    
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
            let response = await putPart(presignedUrl.presignedUrl, new Uint8Array(buffer))
            let etag = response.headers.etag;
            parts.push({ partNumber: partNumber, etag: etag })
            console.log(response)
            break;
        }

        buffer = value.buffer

        offset += value.byteLength
        bytesRead += value.byteLength

        if (offset >= buffer.byteLength) {
            let response = await putPart(presignedUrl.presignedUrl, new Uint8Array(buffer))
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

    let response = await completePosterMultipartUpload(key, {
        uploadId: uploadId.uploadId,
        parts: parts
    })
    console.log(response)
}