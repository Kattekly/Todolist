import React, {useState} from 'react';
import {FilerValueType} from "./App";


type TodoListPropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (id: string) => void
    changeFilter: (filter: FilerValueType) => void
    addTask: (title: string) => void
}

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    const [title, setTitle] = useState<string>('')

    const taskList = props.tasks.map((t) => {
        return (
            <li key={t.id}><input type="checkbox" checked={t.isDone}/><span>{t.title}</span>
                <button onClick={() => props.removeTask(t.id)}>✖</button>
            </li>)
    })

    const addTask = () => {props.addTask(title); setTitle('')}

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title}
                       onChange={(e) => setTitle(e.currentTarget.value)}
                       onKeyDown={(e) => e.key === 'Enter' && addTask()}/>
                <button onClick={addTask}>+</button>
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