import {TasksStateType} from "../App";
import {v1} from "uuid";
import {addTodolistACType, removeTodolistACType} from "./TodolistReducer";

type ActionsType = removeTaskACType
    | addTaskACType | changeTaskStatusACType
    | changeTaskTitleACType | addTodolistACType
    | removeTodolistACType

type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (id: string, todolistId: string) => {
    return {
        type: "REMOVE-TASK",
        payload: {
            id, todolistId
        }
    } as const
}

type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (title: string, todolistId: string) => {
    return {
        type: "ADD-TASK",
        payload: {
            title, todolistId
        }
    } as const
}


type changeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>
export const changeTaskStatusAC = (id: string, isDone: boolean, todolistId: string) => {
    return {
        type: "CHANGE-TASK-STATUS",
        payload: {
            id, isDone, todolistId
        }
    } as const
}


type changeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>
export const changeTaskTitleAC = (id: string, title: boolean, todolistId: string) => {
    return {
        type: "CHANGE-TASK-TITLE",
        payload: {
            id, title, todolistId
        }
    } as const
}

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId].filter(el => el.id !== action.payload.id)
            }

        }
        case 'ADD-TASK': {
            return {
                ...state,
                [action.payload.todolistId]: [{
                    id: v1(),
                    title: action.payload.title,
                    isDone: false
                }, ...state[action.payload.todolistId]]
            }
        }
        case 'CHANGE-TASK-STATUS': {
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId].map(el => el.id === action.payload.id ?
                    {...el, isDone: action.payload.isDone} : el)
            }
        }
        case 'CHANGE-TASK-TITLE': {
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId].map(el => el.id === action.payload.id ?
                    {...el, isDone: action.payload.title} : el)
            }
        }
        case 'ADD-TODOLIST': {
            return {
                ...state,
                [action.payload.todolistId]: []
            }
        }
        case 'REMOVE-TODOLIST': {
            /*let copyState = {...state}
            delete copyState[action.payload.id]
            return copyState*/
            const {[action.payload.id] : [], ...ddd} = {...state}
            return ddd
        }
        default:
            return state
    }
}