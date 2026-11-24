import { api } from "@/lib/axios";

export async function postSeriesDetails(data) {
    let response = await api.post("/series", data)
    return response
}