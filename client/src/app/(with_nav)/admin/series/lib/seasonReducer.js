import { useReducer } from "react";
import { v4 } from "uuid";

export const addSeason = (dispatch, season) => {
    dispatch({
        type: "add",
        data: season.data
    })
}

export const addEpisode = (dispatch, episode) => {
    dispatch({
        type: "addEpisode",
        data: episode.data,
    })
}
export default function seasonsReducer(state, action) {

    switch (action.type) {
        case "add": {
            console.log("adding new season")
            return [...state, {key:v4(), data:action.data}]
        }
        case "addEpisode": {
            
            let newState = state.map((season) => {
                if (season.data.index === action.data.seasonIndex) {
                    return {...season, data:{...season.data, episodes:[...season.data.episodes, {key:v4(), data:action.data}]}}
                } 
                return season
            })
           
            return newState
        }
    }
}

export const useSeasonsReducer = (initial) => useReducer(seasonsReducer, initial)