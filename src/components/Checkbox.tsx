import React, {ChangeEvent} from 'react';
import Checkbox from "@mui/material/Checkbox";
import {changeTaskStatusAC} from "../state/TaskReducer";
import {useDispatch} from "react-redux";

type PropsType = {
    checked: boolean
    id: string
    todoId: string
}

export const CheckBOX = (props: PropsType) => {
    const {checked, todoId, id} = props
    const dispatch = useDispatch()

    const onChangeHandler= (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        dispatch(changeTaskStatusAC(id, newIsDoneValue, todoId))
    }

    return (
        <Checkbox onChange={onChangeHandler} checked={checked}/>
    );
};