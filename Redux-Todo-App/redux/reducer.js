import initialState from "./initialState"
import { 
    ADD_VALUE, 
    DELETE, 
    DELETE_ALL, 
    DO_NOT, 
    FILTER, 
    REVERSE, 
    SET_VALUE, 
    SORT_TASKS } from "./types"

const reducer = (state = initialState, action) => {
    const { type, payload, id } = action
    if (type === SET_VALUE) {
        return {
            ...state,
            value: payload
        }
    }

    else if (type === FILTER) {
        return {
            ...state,
            filter: action.filter
        }
    }
    
    else if (type === DO_NOT) {
        let tasks = [...state.tasks]
        tasks[id].isDone = !tasks[id].isDone

        return {
            ...state,
            tasks
        }
    }

    else if (type === ADD_VALUE && payload)
        return {
            ...state,
            value: '',
            tasks: [...state.tasks, { title: payload, isDone: false }]
        }

    else if (type === DELETE) {
        let tasks = [...state.tasks];
        tasks.splice(payload, 1);
        return { ...state, tasks }
    }

    else if (type === DELETE_ALL) {
        const { filter } = state
        const delFilter = filter === 'all'? 1:filter === 'done'? false:true
        const tasks = state.tasks.filter(task => task.isDone === delFilter)

        return { ...state, tasks }
    }

    else if (type === SORT_TASKS) {
        let tasks = [...state.tasks]
            .sort((a, b) => a.title.split(' ')[1] - b.title.split(' ')[1])

        return { ...state, tasks }
    }

    else if (type === REVERSE) {
        return { ...state, tasks: [...state.tasks.reverse()] }
    }

    else if (type === 'UPDATE') {
        let tasks = [...state.tasks]
        tasks[id].title = payload

        return { ...state, tasks }
    }
    
    return state;
}

export default reducer