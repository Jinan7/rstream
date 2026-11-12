import { getPosterPresignedUrl, putPoster } from "./api"

export const putFile = async (id, file) => {

    let presigned_url_data = await getPosterPresignedUrl(`${id}/${file.name}`)

    // let reader = new FileReader();
    // reader.onload = (event) => {
        
    //     let buffer = event.target.result;
    //     let uint8View = new Uint8Array(buffer);
    //     console.log(uint8View)
    // }

    // reader.readAsArrayBuffer(file)
    let response = await putPoster(presigned_url_data.presigned_url, file)
    console.log(response)
}