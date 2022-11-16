import React, {ChangeEvent} from 'react';
import {FilterValuesType} from "./AppWithRedux";
import {EditableSpan} from "./components/EditableSpan";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {Input} from "./components/Input";
import {CheckBOX} from "./components/Checkbox";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {TaskType} from "./Todolist";

type TodolistWithReduxPropsType = {
    todolistId: string
    title: string
    filter: FilterValuesType
}

export const TodolistWithRedux = ({todolistId, title, filter}: TodolistWithReduxPropsType) => {
    let tasks = useSelector<AppRootStateType, Array<TaskType>>(state => state.tasks[todolistId])
    const dispatch = useDispatch()


    let allTodolistTasks = tasks[id];
    let tasksForTodolist = allTodolistTasks;

    if (filter === "active") {
        tasks = tasks.filter
    }
    if (filter === "completed") {
        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
    }

    return (
        <div>
            <h3>
                <EditableSpan title={title} callback={editTodolistHandler}/>

                <IconButton aria-label="delete" onClick={removeTodolist}>
                    <DeleteIcon/>
                </IconButton>

            </h3>
            <Input callback={AddTaskHandler}/>
            <ul>
                {
                    tasks.map(t => {
                        const onClickHandler = () => props.removeTask(t.id, todolistId)
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            let newIsDoneValue = e.currentTarget.checked;
                            props.changeTaskStatus(t.id, newIsDoneValue, todolistId);
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
                <Button variant={filter === 'all' ? "contained" : "outlined"}
                        onClick={onAllClickHandler}>All
                </Button>
                <Button color={'warning'} variant={filter === 'active' ? "contained" : "outlined"}
                        onClick={onActiveClickHandler}>Active
                </Button>
                <Button color={'secondary'} variant={filter === 'completed' ? "contained" : "outlined"}
                        onClick={onCompletedClickHandler}>Completed
                </Button>
            </div>
        </div>
    );
};

