import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilerValueType} from "./App";
import {Input} from "./components/Input";
import {EditabelSpan} from "./components/EditabelSpan";


type TodoListPropsType = {
    todoListId: string
    title: string
    tasks: Array<TasksType>
    filter: FilerValueType
    removeTask: (id: string, todoListId: string) => void
    changeTodolistFilter: (filter: FilerValueType, todoListId: string) => void
    addTask: (title: string, todoListId: string) => void
    changeTaskStatus: (taskId: string, newStatus: boolean, todoListId: string) => void
    removeTodoList: (todoListId: string) => void
    editTask: (todoListId: string, taskId: string, newTitle: string) => void
    editTodolist: (todoListLd: string, title: string) => void
}

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    const taskList = props.tasks.map((t) => {
        const removeTasks = () => props.removeTask(t.id, props.todoListId)
        const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(t.id, e.currentTarget.checked, props.todoListId)

        const editTaskHandler = (newTitle: string) => {
            props.editTask(props.todoListId, t.id, newTitle)
        }

        return (
            <li key={t.id} className={t.isDone ? "isDone" : "notIsDone"}>
                <input onChange={changeTaskStatus}
                       type="checkbox"
                       checked={t.isDone}/>
                <EditabelSpan title={t.title} callback={editTaskHandler}/>
                <button onClick={removeTasks}>x</button>
            </li>)
    })

    const handlerCreator = (filter: FilerValueType) => () => props.changeTodolistFilter(filter, props.todoListId)


    const removeTodolist = () => props.removeTodoList(props.todoListId)

    const addTaskHandler = (newTitle: string) => {
        props.addTask(newTitle, props.todoListId)
    }

    const editTodolistHandler = (title: string) => {
        props.editTodolist
    }

    return (
        <div>
            <h3>< EditabelSpan title={props.title} callback={editTodolistHandler}/>
                <button onClick={removeTodolist}>x</button>
            </h3>
            <Input callback={addTaskHandler}/>
            <ul>
                {taskList}
            </ul>
            <div>
                <button className={props.filter === "all" ? "activeButton btn" : "btn"}
                        onClick={handlerCreator('all')}>All
                </button>
                <button className={props.filter === "active" ? "activeButton btn" : "btn"}
                        onClick={handlerCreator("active")}>Active
                </button>
                <button className={props.filter === "completed" ? "activeButton btn" : "btn"}
                        onClick={handlerCreator("completed")}>Completed
                </button>
            </div>
        </div>
    );
};

export default TodoList;