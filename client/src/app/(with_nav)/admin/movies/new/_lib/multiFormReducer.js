import { useReducer } from "react"
import { v4 } from "uuid"

const addFormInput = (dispatch, input) => {
    dispatch({type:"add", value:input})
}

const removeFormInput = (dispatch, id) => {
    dispatch({type:"delete", key:id})
}

const multiFormReducer = (state, action) => {

    switch (action.type) {

        case "add": {
            return [...state, {key:v4(), value:action.value}]
        }
        case "delete": {
            let newState = state.filter((d) => d.key != action.key)
            return newState
        }

    }
}

const useMultiFormReducer = (initial) => useReducer(multiFormReducer, initial)

export {addFormInput, removeFormInput, useMultiFormReducer}