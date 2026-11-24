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

export const updateSeason = (dispatch, season) => {
    dispatch({
        type: "update",
        data: season
    })
}
export default function seasonsReducer(state, action) {

    switch (action.type) {
        case "add": {
            
            return [...state, {key:v4(), data:action.data}]
        }
        case "update": {
            let newState = state.map((s) => {
                if (s.key === action.data.key) {
                    return action.data
                }
                return s
            })
            
            return newState
        }
        case "addEpisode": {
            
            let newState = state.map((season) => {
                if (season.key === action.data.seasonKey) {
                    return {...season, data:{...season.data, episodes:[...season.data.episodes, {key:v4(), data:action.data}]}}
                } 
                return season
            })
           
            return newState
        }
        default: {
            return state
        }
    }
}

export const useSeasonsReducer = (initial) => useReducer(seasonsReducer, initial)