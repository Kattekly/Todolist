import {
    setAppErrorAC,
    setAppStatusAC,
    setErrorActionType, setStatusActionType
} from '../app/app-reducer'
import {Dispatch} from 'redux'
import {ResponseType} from '../api/todolists-api'
import {AppActionsType} from "../features/TodolistsList/tasks-reducer";

// generic function
export const handleServerAppError = <T>(data: ResponseType<T>, dispatch: Dispatch<setErrorActionType>) => {
    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]))
    } else {
        dispatch(setAppErrorAC('Some error'))
    }
}

export const handleServerNetworkError = (dispatch: Dispatch<AppActionsType>, error: string) => {
    dispatch(setAppErrorAC(error))
    dispatch(setAppStatusAC('failed'))
}
