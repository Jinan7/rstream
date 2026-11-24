import { api } from "@/lib/axios";

export async function postEpisodeDetails( data ) {
    let response = await api.post("/episodes", data)
    return response
}