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

export { api, signout }
