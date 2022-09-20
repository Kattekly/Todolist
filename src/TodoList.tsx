import React from 'react';
import {FilerValueType} from "./App";


type TodoListPropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (id: number) => void
    changeFilter: (filter: FilerValueType) => void
}

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    const taskList = props.tasks.map((t) => {
        return (
            <li key={t.id}><input type="checkbox" checked={t.isDone}/><span>{t.title}</span>
                <button onClick={() => props.removeTask(t.id)}>✖</button>
            </li>)
    })

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {taskList}
            </ul>
            <div>
                <button onClick={() => props.changeFilter("all")}>All</button>
                <button onClick={() => props.changeFilter("active")}>Active</button>
                <button onClick={() => props.changeFilter("completed")}>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;