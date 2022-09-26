import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
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
        const removeTasks = () => props.removeTask(t.id)
        return (
            <li key={t.id}><input type="checkbox" checked={t.isDone}/><span>{t.title}</span>
                <button onClick={removeTasks}>x</button>
            </li>)
    })

   const addTask = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle !== '') {
            props.addTask(trimmedTitle)
        }
        setTitle('')
    }

    const handlerCreator = (filter: FilerValueType) => () => props.changeFilter(filter)
    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onEnterDownAddTask = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addTask()

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title}
                       onChange={onChangeSetTitle}
                       onKeyDown={onEnterDownAddTask}/>
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {taskList}
            </ul>
            <div>
                <button onClick={handlerCreator('all')}>All</button>
                <button onClick={handlerCreator("active")}>Active</button>
                <button onClick={handlerCreator("completed")}>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;