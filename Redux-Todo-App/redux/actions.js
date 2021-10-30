import { 
    ADD_VALUE, 
    DELETE, 
    DELETE_ALL, 
    DO_NOT, 
    FILTER, 
    REVERSE, 
    SET_VALUE, 
    SORT_TASKS } from "./types"

export const setValue = (dispatch, value) => {
    const action = { type: SET_VALUE, payload: value }

    dispatch(action)
}

export const addValue = (dispatch, value) => {
    const action = { type: ADD_VALUE, payload: value }

    dispatch(action)
}

export const filterValue = (dispatch, value) => {
    const action = { type: FILTER, filter: value }

    dispatch(action)
}

export const deleteValue = (dispatch, index) => {
    const action = { type: DELETE, payload: index }

    dispatch(action)
}

export const reverseValues = dispatch => {
    const action = { type: REVERSE }

    dispatch(action)
}

export const deleteAllValues = dispatch => {
    const action = { type: DELETE_ALL }

    dispatch(action)
}

export const sortValues = dispatch => {
    const action = { type: SORT_TASKS }

    dispatch(action)
}

export const doNotValue = (dispatch, id) => {
    const action = { type: DO_NOT, id }

    dispatch(action)
}