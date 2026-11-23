import axios from "axios";

let base_url = process.env.NEXT_PUBLIC_API_BASE_URL

const api = axios.create(
    {
        baseURL: base_url,
        withCredentials: true,
    }
);

const signout = async () => {
    let response = await api.get("/signout")
    return response
}

const auth_proxy = async (headers) => {
    console.log(headers.get('cookie'))
    let response = await api.get("/auth_proxy", {
        headers: {
            'cookie': headers.get('cookie')
        }
    })
    return response
}

export { api, signout, auth_proxy }
