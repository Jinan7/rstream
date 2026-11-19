import axios from "axios";

let base_url = process.env.NEXT_PUBLIC_API_BASE_URL
console.log(`the base url is ${base_url}`)
const api = axios.create(
    {
        baseURL: base_url
    }
);

export { api }
