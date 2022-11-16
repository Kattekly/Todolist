import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

type ActionsType = removeTodolistACType | addTodolistACType | editTodolistType | changeTodolistACType
const initialState: Array<TodolistType> = []


export type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (id: string) => {
    return {
        type: "REMOVE-TODOLIST",
        payload: {
            id: id
        }
    } as const
}

export type addTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (newTitle: string) => {
    return {
        type: "ADD-TODOLIST",
        payload: {
            title: newTitle,
            todolistId: v1()
        }
    } as const
}

type editTodolistType = ReturnType<typeof editTodolistAC>
export const editTodolistAC = (todolistId: string, newTitle: string) => {
    return {
        type: "EDIT-TODOLIST",
        payload: {
            id: todolistId,
            title: newTitle
        }
    } as const
}

type changeTodolistACType = ReturnType<typeof changeFilterTodolistAC>
export const changeFilterTodolistAC = (todolistId: string, value: FilterValuesType) => {
    return {
        type: "CHANGE-FILTER-TODOLIST",
        payload: {
            value: value,
            id: todolistId
        }
    } as const
}

export const TodolistReducer = (state = initialState, action: ActionsType): Array<TodolistType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
return state.filter(tl => tl.id != action.payload.id)
        }
        case 'ADD-TODOLIST': {
            return [...state, {id: action.payload.todolistId, title: action.payload.title, filter: "all"}]
        }
        case 'EDIT-TODOLIST': {
            return state.map(el => el.id === action.payload.id ? {...el, title: action.payload.title} : el)
        }
        case 'CHANGE-FILTER-TODOLIST': {
            let todolist = state.find(tl => tl.id === action.payload.id)
            if (todolist) {
                todolist.filter = action.payload.value
            }
            return [...state]
            }
        default: return state
    }
}