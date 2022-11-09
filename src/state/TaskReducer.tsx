import {TasksStateType} from "../App";

type ActionsType = removeTaskACType

type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (id: string, todolistId: string) => {
    return {
        type: "REMOVE-TASK",
        payload: {
            id, todolistId
        }
    } as const
}

type changeTodolistACType = ReturnType<typeof changeFilterTodolistAC>
export const AC1 = () => {
    return {
        type: "",
        payload: {

        }
    } as const
}

export const taskReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return {
                ...state,
                [action.payload.todolistId] : state[action.payload.todolistId].filter(el => el.id !== action.payload.id)
            }

        }
        case '': {
            return state
        }
        case '': {
            return state
        }
        case '': {
            return state
        }
        default: return state
    }
}