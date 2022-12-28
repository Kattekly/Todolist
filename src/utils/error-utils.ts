import {
    setAppErrorAC,
    setAppStatusAC,
    setErrorActionType, setStatusActionType
} from '../app/app-reducer'
import {Dispatch} from 'redux'
import {ResponseType} from '../api/todolists-api'
import {AppActionsType} from "../features/TodolistsList/tasks-reducer";

// generic function
export const handleServerAppError = <T>(data: ResponseType<T>, dispatch: Dispatch<AppActionsType>) => {
    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]))
    } else {
        dispatch(setAppErrorAC('Some error occurred'))
    }
    dispatch(setAppStatusAC('failed'))
}

export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch<AppActionsType>) => {
    dispatch(setAppErrorAC(error.message? error.message : 'Some error'))
    dispatch(setAppStatusAC('failed'))
}
