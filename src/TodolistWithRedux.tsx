import React, {ChangeEvent, FC} from 'react';
import {FilterValuesType, TodolistType} from "./AppWithRedux";
import {EditableSpan} from "./components/EditableSpan";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {Input} from "./components/Input";
import {CheckBOX} from "./components/Checkbox";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {TaskType} from "./Todolist";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC} from "./state/TaskReducer";

export type TodolistWithReduxPropsType = {
    todolist: TodolistType
}

export const TodolistWithRedux: FC<TodolistWithReduxPropsType> = ({todolist}) => {
    const {id, title, filter} = todolist

    let tasks = useSelector<AppRootStateType, Array<TaskType>>(state => state.tasks[id])

    const dispatch = useDispatch()


    const removeTodolist = () => props.removeTodolist(props.id)

    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);
    const AddTaskHandler = (title: string) => {
        dispatch(addTaskAC(title, id))
    }
    const editTodolistHandler = (newTitle: string) => {
        props.editTodolist(props.id, newTitle)
    }

    const editTaskHandler = (tID: string, newTitle: string) => {
        dispatch(changeTaskTitleAC(taskId, newTitle, todolistId))
    }

    const changeStatusHandler = (tId: string, isDone: boolean) => {
        dispatch(changeTaskStatusAC(id, isDone, todolistId))
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
                        const onClickHandler = () => dispatch(t.id, id)
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            let newIsDoneValue = e.currentTarget.checked;
                            props.changeTaskStatus(t.id, newIsDoneValue, todolist);
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

