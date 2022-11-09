import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from './App';
import {Input} from "./components/Input";
import {EditableSpan} from "./components/EditableSpan";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import {CheckBOX} from "./components/Checkbox";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    editTask: (newTitle: string, todolistId: string, taskId: string) => void
    editTodolist: (todolistId: string, newTitle: string) => void
}

export function Todolist(props: PropsType) {

    const removeTodolist = () => props.removeTodolist(props.id)

    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);
    const AddTaskHandler = (newTitle: string) => {
        props.addTask(newTitle, props.id)
    }
    const editTodolistHandler = (newTitle: string) => {
        props.editTodolist(props.id, newTitle)
    }

    const editTaskHandler = (tID: string, newTitle: string) => {
        props.editTask(props.id, tID, newTitle)
    }

    const changeStatusHandler = (tId: string, isDone: boolean) => {
        props.changeTaskStatus(tId, isDone, props.id)
    }


    return <div>
        <h3>
            <EditableSpan title={props.title} callback={editTodolistHandler}/>

            <IconButton aria-label="delete" onClick={removeTodolist}>
                <DeleteIcon/>
            </IconButton>

        </h3>
        <Input callback={AddTaskHandler}/>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                    }


                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                       {/* <Checkbox onChange={onChangeHandler} checked={t.isDone}/>*/}

                        <CheckBOX callback={(isDone) => changeStatusHandler(t.id, isDone)} checked={t.isDone}/>

                        <EditableSpan title={t.title} callback={(newTitle) => editTaskHandler(t.id, newTitle)}/>
                        <IconButton aria-label="delete" onClick={onClickHandler}>
                            <DeleteIcon/>
                        </IconButton>

                    </li>
                })
            }
        </ul>
        <div>
            <Button variant={props.filter === 'all' ? "contained" : "outlined"}
                    onClick={onAllClickHandler}>All
            </Button>
            <Button color={'warning'} variant={props.filter === 'active' ? "contained" : "outlined"}
                    onClick={onActiveClickHandler}>Active
            </Button>
            <Button color={'secondary'} variant={props.filter === 'completed' ? "contained" : "outlined"}
                    onClick={onCompletedClickHandler}>Completed
            </Button>
        </div>
    </div>
}

