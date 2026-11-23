import { useReducer } from "react";
import { v4 } from "uuid";

export const addSeason = (dispatch, season) => {
    dispatch({
        type: "add",
        data: season.data
    })
}

export default function seasonsReducer(state, action) {

    switch (action.type) {
        case "add": {
            return [...state, {key:v4(), data:action.data}]
        }
        case "addEpisode": {
            let season = state.map((season) => {
                if (season.data.index === action.seasonIndex) {
                    season.data.episodes.push(action.episode)
                }
                return season
                
            })
        }
    }
}

export const useSeasonsReducer = (initial) => useReducer(seasonsReducer, initial)